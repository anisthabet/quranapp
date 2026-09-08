#!/bin/bash
set -e

echo "=== Building Noor Al-Quran Android APK ==="

WORKDIR="$(pwd)"
ANDROID_DIR="$WORKDIR/android"
APP_DIR="$ANDROID_DIR/app"
RES_DIR="$APP_DIR/src/main/res"
SRC_DIR="$APP_DIR/src/main/java"
ASSETS_DIR="$APP_DIR/src/main/assets"
MANIFEST="$APP_DIR/src/main/AndroidManifest.xml"
BUILD_DIR="$ANDROID_DIR/build"
ANDROID_JAR="/usr/lib/android-sdk/platforms/android-23/android.jar"
DX_BIN="/usr/lib/android-sdk/build-tools/debian/dx"

# Sync latest Web app dist assets into Android assets
echo "-> Step 0: Syncing latest compiled web app into Android assets..."
rm -rf "$ASSETS_DIR/dist"
mkdir -p "$ASSETS_DIR/dist"
cp -r "$WORKDIR/dist"/* "$ASSETS_DIR/dist/"
rm -f "$ASSETS_DIR/dist"/*.apk

# 1. Clean and prepare build directories
rm -rf "$BUILD_DIR"
mkdir -p "$BUILD_DIR/gen" "$BUILD_DIR/classes" "$BUILD_DIR/bin" "$WORKDIR/dist-apk"

# 2. Package resources and generate R.java
echo "-> Step 1: Compiling resources with aapt..."
aapt package -f -m \
    -J "$BUILD_DIR/gen" \
    -M "$MANIFEST" \
    -S "$RES_DIR" \
    -I "$ANDROID_JAR"

# 3. Compile Java source files
echo "-> Step 2: Compiling Java sources..."
javac -source 1.8 -target 1.8 \
    -bootclasspath "$ANDROID_JAR" \
    -cp "$BUILD_DIR/gen" \
    -d "$BUILD_DIR/classes" \
    "$BUILD_DIR/gen/com/nooralquran/app/R.java" \
    "$SRC_DIR/com/nooralquran/app/MainActivity.java"

# 4. Convert bytecode to Dalvik executable (classes.dex)
echo "-> Step 3: Dexing classes with dx..."
"$DX_BIN" --dex --output="$BUILD_DIR/bin/classes.dex" "$BUILD_DIR/classes"

# 5. Build initial unaligned APK package with assets and resources
echo "-> Step 4: Packaging assets and resources into APK..."
aapt package -f \
    -M "$MANIFEST" \
    -S "$RES_DIR" \
    -A "$ASSETS_DIR" \
    -I "$ANDROID_JAR" \
    -F "$BUILD_DIR/bin/app-unaligned.apk"

# Add classes.dex into the APK
cd "$BUILD_DIR/bin"
aapt add "app-unaligned.apk" "classes.dex"
cd "$WORKDIR"

# 6. Align APK with zipalign (4-byte boundary)
echo "-> Step 5: Aligning APK with zipalign..."
zipalign -f -p 4 "$BUILD_DIR/bin/app-unaligned.apk" "$BUILD_DIR/bin/app-aligned.apk"

# 7. Generate debug keystore if not present
KEYSTORE="$ANDROID_DIR/debug.keystore"
if [ ! -f "$KEYSTORE" ]; then
    echo "-> Generating debug signing key..."
    keytool -genkey -v -keystore "$KEYSTORE" \
        -storepass android -alias androiddebugkey -keypass android \
        -keyalg RSA -keysize 2048 -validity 10000 \
        -dname "CN=NoorAlQuran, OU=Development, O=AnisThabet, L=Tunis, S=Tunis, C=TN"
fi

# 8. Sign APK with apksigner (v1, v2, v3 signature schemes)
echo "-> Step 6: Signing APK..."
OUTPUT_APK="$WORKDIR/NoorAlQuran-Release.apk"
apksigner sign --ks "$KEYSTORE" \
    --ks-key-alias androiddebugkey \
    --ks-pass pass:android \
    --key-pass pass:android \
    --out "$OUTPUT_APK" \
    "$BUILD_DIR/bin/app-aligned.apk"

# Also copy to android/ folder and public/ folder so user can download directly
mkdir -p "$ANDROID_DIR/release"
cp "$OUTPUT_APK" "$ANDROID_DIR/release/NoorAlQuran.apk"
cp "$OUTPUT_APK" "$WORKDIR/public/NoorAlQuran.apk"

echo "-> Step 7: Verifying signed APK..."
apksigner verify --verbose "$OUTPUT_APK"

echo "=== SUCCESS: APK generated at $OUTPUT_APK ==="
ls -lh "$OUTPUT_APK"
