package com.nooralquran.app;

import android.annotation.SuppressLint;
import android.app.Activity;
import android.content.Context;
import android.content.Intent;
import android.graphics.Bitmap;
import android.net.ConnectivityManager;
import android.net.NetworkInfo;
import android.net.Uri;
import android.os.Build;
import android.os.Bundle;
import android.os.PowerManager;
import android.view.View;
import android.webkit.WebChromeClient;
import android.webkit.WebResourceRequest;
import android.webkit.WebResourceResponse;
import android.webkit.WebSettings;
import android.webkit.WebView;
import android.webkit.WebViewClient;
import android.widget.ProgressBar;
import java.io.IOException;
import java.io.InputStream;
import java.util.HashMap;
import java.util.Map;

public class MainActivity extends Activity {

    // Virtual origin for streaming bundled app assets safely with standard HTTPS protocol
    public static final String LOCAL_ORIGIN = "appassets.local";
    public static final String LOCAL_ENTRY_URL = "https://" + LOCAL_ORIGIN + "/index.html";

    private WebView webView;
    private ProgressBar loadingProgress;
    private PowerManager.WakeLock wakeLock;

    @SuppressLint("SetJavaScriptEnabled")
    @Override
    protected void onCreate(Bundle savedInstanceState) {
        super.onCreate(savedInstanceState);
        setContentView(R.layout.activity_main);

        // Keep CPU awake for continuous Quran recitation playback
        PowerManager powerManager = (PowerManager) getSystemService(Context.POWER_SERVICE);
        if (powerManager != null) {
            wakeLock = powerManager.newWakeLock(PowerManager.PARTIAL_WAKE_LOCK, "NoorAlQuran::AudioWakeLock");
            wakeLock.setReferenceCounted(false);
        }

        webView = (WebView) findViewById(R.id.webView);
        loadingProgress = (ProgressBar) findViewById(R.id.loadingProgress);

        setupWebView();
        loadApp();
    }

    @SuppressLint("SetJavaScriptEnabled")
    private void setupWebView() {
        WebSettings settings = webView.getSettings();
        settings.setJavaScriptEnabled(true);
        settings.setDomStorageEnabled(true);
        settings.setDatabaseEnabled(true);
        settings.setAllowFileAccess(true);
        settings.setAllowContentAccess(true);
        settings.setLoadWithOverviewMode(true);
        settings.setUseWideViewPort(true);
        settings.setSupportZoom(false);
        settings.setBuiltInZoomControls(false);
        settings.setDisplayZoomControls(false);

        // Media autoplay for recitation without requiring touch events
        settings.setMediaPlaybackRequiresUserGesture(false);

        if (Build.VERSION.SDK_INT >= Build.VERSION_CODES.LOLLIPOP) {
            settings.setMixedContentMode(WebSettings.MIXED_CONTENT_ALWAYS_ALLOW);
        }

        // Custom User-Agent tag
        String defaultUA = settings.getUserAgentString();
        settings.setUserAgentString(defaultUA + " NoorAlQuran-Android/1.0");

        webView.setWebChromeClient(new WebChromeClient() {
            @Override
            public void onProgressChanged(WebView view, int newProgress) {
                if (newProgress < 100) {
                    loadingProgress.setVisibility(View.VISIBLE);
                } else {
                    loadingProgress.setVisibility(View.GONE);
                }
            }
        });

        webView.setWebViewClient(new WebViewClient() {
            @Override
            public WebResourceResponse shouldInterceptRequest(WebView view, WebResourceRequest request) {
                if (request != null && request.getUrl() != null) {
                    WebResourceResponse resp = handleIntercept(request.getUrl());
                    if (resp != null) return resp;
                }
                return super.shouldInterceptRequest(view, request);
            }

            @Override
            public WebResourceResponse shouldInterceptRequest(WebView view, String url) {
                if (url != null) {
                    WebResourceResponse resp = handleIntercept(Uri.parse(url));
                    if (resp != null) return resp;
                }
                return super.shouldInterceptRequest(view, url);
            }

            @Override
            public boolean shouldOverrideUrlLoading(WebView view, String url) {
                if (url == null) return false;

                // Keep local Quran app navigation inside WebView
                if (url.startsWith("https://" + LOCAL_ORIGIN) || url.startsWith("http://" + LOCAL_ORIGIN)) {
                    return false;
                }

                // Handle external protocols (whatsapp, mailto, tel)
                if (url.startsWith("mailto:") || url.startsWith("tel:") || url.startsWith("whatsapp:") || url.startsWith("intent:")) {
                    try {
                        Intent intent = new Intent(Intent.ACTION_VIEW, Uri.parse(url));
                        startActivity(intent);
                        return true;
                    } catch (Exception e) {
                        return true;
                    }
                }
                return false;
            }

            @Override
            public void onPageStarted(WebView view, String url, Bitmap favicon) {
                super.onPageStarted(view, url, favicon);
                loadingProgress.setVisibility(View.VISIBLE);
            }

            @Override
            public void onPageFinished(WebView view, String url) {
                super.onPageFinished(view, url);
                loadingProgress.setVisibility(View.GONE);
            }

            @Override
            public void onReceivedError(WebView view, int errorCode, String description, String failingUrl) {
                // If a remote URL failed, instantly fall back to the built-in local Quran app
                if (failingUrl != null && !failingUrl.contains(LOCAL_ORIGIN)) {
                    view.loadUrl(LOCAL_ENTRY_URL);
                }
            }
        });
    }

    private WebResourceResponse handleIntercept(Uri uri) {
        if (uri == null) return null;
        String host = uri.getHost();

        // Intercept requests directed to local app origin
        if (LOCAL_ORIGIN.equalsIgnoreCase(host) || "localhost".equalsIgnoreCase(host)) {
            String path = uri.getPath();
            if (path == null || path.isEmpty() || path.equals("/")) {
                path = "/index.html";
            }

            String assetPath = "dist" + (path.startsWith("/") ? path : "/" + path);
            try {
                InputStream is = getAssets().open(assetPath);
                String mimeType = getMimeType(path);
                String encoding = isTextMime(mimeType) ? "UTF-8" : null;

                Map<String, String> headers = new HashMap<String, String>();
                headers.put("Access-Control-Allow-Origin", "*");
                headers.put("Access-Control-Allow-Methods", "GET, HEAD, OPTIONS");
                headers.put("Access-Control-Allow-Headers", "*");
                headers.put("Cache-Control", "no-cache");

                return new WebResourceResponse(mimeType, encoding, 200, "OK", headers, is);
            } catch (IOException e) {
                // SPA client-side route fallback (e.g. navigation without direct file)
                if (!path.contains(".")) {
                    try {
                        InputStream is = getAssets().open("dist/index.html");
                        Map<String, String> headers = new HashMap<String, String>();
                        headers.put("Access-Control-Allow-Origin", "*");
                        return new WebResourceResponse("text/html", "UTF-8", 200, "OK", headers, is);
                    } catch (IOException ignored) {}
                }
            }
        }
        return null;
    }

    private String getMimeType(String path) {
        String lower = path.toLowerCase();
        if (lower.endsWith(".html") || lower.endsWith(".htm")) return "text/html";
        if (lower.endsWith(".js") || lower.endsWith(".mjs")) return "application/javascript";
        if (lower.endsWith(".css")) return "text/css";
        if (lower.endsWith(".png")) return "image/png";
        if (lower.endsWith(".jpg") || lower.endsWith(".jpeg")) return "image/jpeg";
        if (lower.endsWith(".svg")) return "image/svg+xml";
        if (lower.endsWith(".json")) return "application/json";
        if (lower.endsWith(".woff2")) return "font/woff2";
        if (lower.endsWith(".woff")) return "font/woff";
        if (lower.endsWith(".ttf")) return "font/ttf";
        if (lower.endsWith(".ico")) return "image/x-icon";
        if (lower.endsWith(".webp")) return "image/webp";
        if (lower.endsWith(".mp3")) return "audio/mpeg";
        return "application/octet-stream";
    }

    private boolean isTextMime(String mime) {
        return mime.startsWith("text/") || 
               mime.equals("application/javascript") || 
               mime.equals("application/json") || 
               mime.equals("image/svg+xml");
    }

    private void loadApp() {
        String targetUrl = LOCAL_ENTRY_URL;
        try {
            String configuredVercelUrl = getString(R.string.custom_vercel_url);
            if (configuredVercelUrl != null) {
                configuredVercelUrl = configuredVercelUrl.trim();
                if (configuredVercelUrl.startsWith("http://") || configuredVercelUrl.startsWith("https://")) {
                    if (isNetworkAvailable()) {
                        targetUrl = configuredVercelUrl;
                    }
                }
            }
        } catch (Exception ignored) {}

        webView.loadUrl(targetUrl);
    }

    private boolean isNetworkAvailable() {
        ConnectivityManager cm = (ConnectivityManager) getSystemService(Context.CONNECTIVITY_SERVICE);
        if (cm != null) {
            NetworkInfo activeNetwork = cm.getActiveNetworkInfo();
            return activeNetwork != null && activeNetwork.isConnectedOrConnecting();
        }
        return false;
    }

    @Override
    public void onBackPressed() {
        if (webView != null && webView.canGoBack()) {
            webView.goBack();
        } else {
            super.onBackPressed();
        }
    }

    @Override
    protected void onResume() {
        super.onResume();
        if (webView != null) {
            webView.onResume();
        }
    }

    @Override
    protected void onPause() {
        super.onPause();
        if (webView != null) {
            webView.onPause();
        }
    }

    @Override
    protected void onDestroy() {
        if (webView != null) {
            webView.destroy();
        }
        if (wakeLock != null && wakeLock.isHeld()) {
            wakeLock.release();
        }
        super.onDestroy();
    }
}
