# Noor Al-Quran (نور القرآن والأذكار) - Android App

تطبيق أندرويد أصلي (Native Android WebView) لمنصة **نور القرآن والأذكار**، معد وجاهز للرفع على Git والتثبيت الفوري على أي هاتف أندرويد.

---

## 📱 محتويات ومسارات ملفات APK الجاهزة للتثبيت
- **الملف في المجلد الرئيسي:** `NoorAlQuran-Release.apk`
- **الملف في مجلد الأندرويد:** `android/release/NoorAlQuran.apk`
- **الملف في مجلد التنزيل المباشر من المتصفح:** `public/NoorAlQuran.apk`

---

## ⚙️ ربط رابط Vercel (WebView URL Configuration)
يمكنك تغيير وتعيين رابط Vercel الخاص بك بكل سهولة من خلال:

1. **الملف:** `android/app/src/main/java/com/nooralquran/app/MainActivity.java`
```java
public static final String VERCEL_URL = "https://your-vercel-domain.vercel.app";
```

2. **الميزات المدمجة في التطبيق:**
- **دعم العمل أونلاين وأوفلاين (Offline & Online fallback):** إذا كان هناك اتصال بالإنترنت، يفتح التطبيق مباشرة من رابط Vercel. وإذا كان بدون إنترنت، يعمل فوراً على الحزمة المحلية المدمجة داخل التطبيق (`assets/dist`).
- **استمرار تشغيل الصوت القرآني عند قفل الشاشة (WakeLock):** مخصص ومبرمج لمنع انقطاع التلاوة عند إطفاء الشاشة.
- **زر الرجوع المدمج (Hardware Back Button):** يتنقل داخل صفحات القرآن بدلاً من إغلاق التطبيق فوراً.
- **دعم الروابط الخارجية:** فتح روابط الواتساب، الإيميل، والاتصال في تطبيقات النظام تلقائياً.

---

## 🚀 كيفية إعادة البناء (Rebuild APK)
ببساطة قم بتشغيل الأمر:
```bash
./build-apk.sh
```

أو عبر GitHub Actions تلقائياً عند أي `git push` من خلال سير العمل:
`.github/workflows/build-apk.yml`

---

## 📦 الدفع إلى Git (Git Push)
الملفات معدة بالكامل مع ملفات الـ APK لتكون قابلة للرفع على مستودع Git مباشرة:
```bash
git add .
git commit -m "feat: add Android native WebView app and signed release APK"
git push origin main
```
