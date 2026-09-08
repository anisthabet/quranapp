import { Language } from '../types';

export interface TranslationDictionary {
  appName: string;
  appSubtitle: string;
  navQuran: string;
  navAudio: string;
  navAdhkar: string;
  navTracker: string;
  navCalendar: string;
  navVercel: string;
  
  // Quran Reader
  searchSurah: string;
  allSurahs: string;
  meccan: string;
  medinan: string;
  verses: string;
  juz: string;
  page: string;
  surah: string;
  ayah: string;
  readQuran: string;
  listenSurah: string;
  readingMode: string;
  verseByVerse: string;
  mushafMode: string;
  fontSize: string;
  showTranslation: string;
  showTransliteration: string;
  markAsRead: string;
  markedAsRead: string;
  bookmark: string;
  bookmarked: string;
  copyAyah: string;
  copied: string;
  playAyah: string;
  nextSurah: string;
  prevSurah: string;
  searchPlaceholder: string;
  noSurahFound: string;
  bismillah: string;

  // Audio Player
  selectReciter: string;
  nowPlaying: string;
  play: string;
  pause: string;
  speed: string;
  repeat: string;
  repeatNone: string;
  repeatAyah: string;
  repeatSurah: string;
  audioDisclaimer: string;

  // Adhkar
  adhkarAndDoua: string;
  adhkarSubtitle: string;
  morningAdhkar: string;
  eveningAdhkar: string;
  afterPrayerAdhkar: string;
  sleepAdhkar: string;
  quranicDuas: string;
  propheticDuas: string;
  digitalTasbih: string;
  tapToCount: string;
  resetCount: string;
  completedDhikr: string;
  virtue: string;
  source: string;
  times: string;

  // Tracker
  readingProgress: string;
  trackerSubtitle: string;
  khatmahProgress: string;
  overallProgress: string;
  readingStreak: string;
  daysStreak: string;
  ayahsRead: string;
  pagesRead: string;
  estimatedCompletion: string;
  khatmahPlan: string;
  createPlan: string;
  targetDays: string;
  pagesPerDay: string;
  startKhatmah: string;
  quickLogToday: string;
  logReading: string;
  logSuccess: string;
  bookmarksList: string;
  noBookmarks: string;
  continueReading: string;
  markJuzCompleted: string;

  // Calendar
  hijriCalendar: string;
  calendarSubtitle: string;
  currentHijriDate: string;
  upcomingEvents: string;
  whiteDaysFasting: string;
  whiteDaysDescription: string;
  adjustDate: string;
  daysRemaining: string;
  today: string;

  // General
  language: string;
  close: string;
  save: string;
  cancel: string;
}

export const translations: Record<Language, TranslationDictionary> = {
  ar: {
    appName: "نور القرآن والأذكار",
    appSubtitle: "قراءة واستماع القرآن الكريم، أذكار وأدعية، وخطة ختمة القرآن",
    navQuran: "المصحف الشريف",
    navAudio: "المكتبة الصوتية",
    navAdhkar: "الأذكار والأدعية",
    navTracker: "متابع الختمة",
    navCalendar: "التقويم الهجري",
    navVercel: "النشر على Vercel",

    searchSurah: "بحث عن سورة أو آية...",
    allSurahs: "جميع السور",
    meccan: "مكية",
    medinan: "مدنية",
    verses: "آيات",
    juz: "الجزء",
    page: "صفحة",
    surah: "سورة",
    ayah: "آية",
    readQuran: "قراءة",
    listenSurah: "استماع",
    readingMode: "وضع العرض",
    verseByVerse: "آية بآية",
    mushafMode: "عرض المصحف",
    fontSize: "حجم الخط",
    showTranslation: "إظهار الترجمة",
    showTransliteration: "إظهار النطق اللاتيني",
    markAsRead: "تحديد كمقروء",
    markedAsRead: "تمت القراءة",
    bookmark: "حفظ علامة",
    bookmarked: "محفوظة",
    copyAyah: "نسخ الآية",
    copied: "تم النسخ!",
    playAyah: "استمع للآية",
    nextSurah: "السورة التالية",
    prevSurah: "السورة السابقة",
    searchPlaceholder: "اكتب اسم السورة (مثل: الكهف، يس، الملك)...",
    noSurahFound: "لم يتم العثور على سور مطابقة",
    bismillah: "بِسْمِ اللَّهِ الرَّحْمَٰنِ الرَّحِيمِ",

    selectReciter: "اختر القارئ",
    nowPlaying: "قيد التشغيل الآن",
    play: "تشغيل",
    pause: "إيقاف مؤقت",
    speed: "السرعة",
    repeat: "التكرار",
    repeatNone: "بدون تكرار",
    repeatAyah: "تكرار الآية",
    repeatSurah: "تكرار السورة",
    audioDisclaimer: "صوتيات عالية الجودة من مشاهير قراء العالم الإسلامي",

    adhkarAndDoua: "الأذكار والأدعية",
    adhkarSubtitle: "حصن المسلم اليومي من أذكار الصباح والمساء وأدعية القرآن والسنة",
    morningAdhkar: "أذكار الصباح",
    eveningAdhkar: "أذكار المساء",
    afterPrayerAdhkar: "أذكار بعد الصلاة",
    sleepAdhkar: "أذكار النوم",
    quranicDuas: "أدعية قرآنية",
    propheticDuas: "أدعية نبوية",
    digitalTasbih: "المسبحة الإلكترونية",
    tapToCount: "اضغط للتسبيح",
    resetCount: "إعادة تعيين",
    completedDhikr: "اكتمل الذكر!",
    virtue: "فضل الذكر",
    source: "المصدر",
    times: "مرات",

    readingProgress: "متابع تقدم القراءة والختمة",
    trackerSubtitle: "خطط لختم القرآن الكريم وتابع وردك اليومي وعلاماتك المرجعية",
    khatmahProgress: "نسبة إنجاز الختمة",
    overallProgress: "التقدم العام",
    readingStreak: "أيام التتابع",
    daysStreak: "يوم متواصل",
    ayahsRead: "آية مقروءة",
    pagesRead: "صفحة مقروءة",
    estimatedCompletion: "الموعد المقدر للختم",
    khatmahPlan: "خطة الختمة",
    createPlan: "إنشاء خطة جديدة",
    targetDays: "عدد الأيام المستهدفة",
    pagesPerDay: "صفحة يومياً",
    startKhatmah: "بدء الخطة",
    quickLogToday: "تسجيل قراءة اليوم",
    logReading: "سجل وردك اليومي",
    logSuccess: "تم تسجيل الورد بنجاح! تقبل الله طاعتكم",
    bookmarksList: "العلامات المرجعية المحفوظة",
    noBookmarks: "لا توجد علامات مرجعية حتى الآن. اضغط على أيقونة الإشارة في أي آية لحفظها.",
    continueReading: "متابعة القراءة",
    markJuzCompleted: "تحديد الجزء كمكتمل",

    hijriCalendar: "التقويم الهجري والمناسبات",
    calendarSubtitle: "التاريخ الهجري الدقيق، الأيام البيض، والمناسبات الإسلامية العظيمة",
    currentHijriDate: "التاريخ الهجري اليوم",
    upcomingEvents: "المناسبات الدينية القادمة",
    whiteDaysFasting: "صيام الأيام البيض (13، 14، 15)",
    whiteDaysDescription: "سنة مؤكدة عن النبي ﷺ وصيامها كصيام الدهر",
    adjustDate: "تعديل التقويم (+/- يوم لرؤية الهلال)",
    daysRemaining: "يوم متبقي",
    today: "اليوم",

    language: "اللغة",
    close: "إغلاق",
    save: "حفظ",
    cancel: "إلغاء"
  },
  en: {
    appName: "Noor Al-Quran & Adhkar",
    appSubtitle: "Read & listen to the Holy Quran, daily Adhkar & Duas, and reading tracker",
    navQuran: "Holy Quran",
    navAudio: "Audio Library",
    navAdhkar: "Adhkar & Duas",
    navTracker: "Reading Tracker",
    navCalendar: "Hijri Calendar",
    navVercel: "Deploy to Vercel",

    searchSurah: "Search surah or ayah...",
    allSurahs: "All Surahs",
    meccan: "Meccan",
    medinan: "Medinan",
    verses: "Verses",
    juz: "Juz",
    page: "Page",
    surah: "Surah",
    ayah: "Ayah",
    readQuran: "Read",
    listenSurah: "Listen",
    readingMode: "View Mode",
    verseByVerse: "Verse by Verse",
    mushafMode: "Mushaf View",
    fontSize: "Font Size",
    showTranslation: "Show Translation",
    showTransliteration: "Show Transliteration",
    markAsRead: "Mark Read",
    markedAsRead: "Completed",
    bookmark: "Bookmark",
    bookmarked: "Bookmarked",
    copyAyah: "Copy Ayah",
    copied: "Copied!",
    playAyah: "Play Ayah",
    nextSurah: "Next Surah",
    prevSurah: "Previous Surah",
    searchPlaceholder: "Type surah name (e.g., Al-Kahf, Yasin, Al-Mulk)...",
    noSurahFound: "No matching surahs found",
    bismillah: "In the name of Allah, the Entirely Merciful, the Especially Merciful.",

    selectReciter: "Select Reciter",
    nowPlaying: "Now Playing",
    play: "Play",
    pause: "Pause",
    speed: "Speed",
    repeat: "Repeat",
    repeatNone: "Off",
    repeatAyah: "Repeat Ayah",
    repeatSurah: "Repeat Surah",
    audioDisclaimer: "Crystal clear audio streams from celebrated international Qaris",

    adhkarAndDoua: "Adhkar & Duas",
    adhkarSubtitle: "Fortress of the Muslim: Morning & evening remembrances, Quranic & Sunnah supplications",
    morningAdhkar: "Morning Adhkar",
    eveningAdhkar: "Evening Adhkar",
    afterPrayerAdhkar: "After Prayer",
    sleepAdhkar: "Sleep & Waking",
    quranicDuas: "Quranic Duas",
    propheticDuas: "Prophetic Duas",
    digitalTasbih: "Digital Tasbih",
    tapToCount: "Tap anywhere to count",
    resetCount: "Reset",
    completedDhikr: "Dhikr completed!",
    virtue: "Virtue & Reward",
    source: "Reference",
    times: "times",

    readingProgress: "Personalized Reading Tracker",
    trackerSubtitle: "Plan your Khatmah, track daily recitations, and maintain reading streaks",
    khatmahProgress: "Khatmah Completion",
    overallProgress: "Overall Progress",
    readingStreak: "Reading Streak",
    daysStreak: "day streak",
    ayahsRead: "Ayahs read",
    pagesRead: "Pages read",
    estimatedCompletion: "Est. Completion Date",
    khatmahPlan: "Khatmah Plan",
    createPlan: "Create New Plan",
    targetDays: "Target Days",
    pagesPerDay: "pages/day",
    startKhatmah: "Start Plan",
    quickLogToday: "Log Today's Reading",
    logReading: "Record Daily Portion",
    logSuccess: "Portion logged successfully! May Allah accept.",
    bookmarksList: "Saved Bookmarks",
    noBookmarks: "No bookmarks yet. Click the bookmark icon on any ayah to save your place.",
    continueReading: "Continue Reading",
    markJuzCompleted: "Mark Juz Completed",

    hijriCalendar: "Islamic Hijri Calendar",
    calendarSubtitle: "Accurate lunar Hijri dates, Sunnah White Days, and blessed Islamic occasions",
    currentHijriDate: "Today's Hijri Date",
    upcomingEvents: "Upcoming Islamic Events",
    whiteDaysFasting: "White Days Fasting (13th, 14th, 15th)",
    whiteDaysDescription: "Sunnah fast observed during full moon days, equivalent to fasting the entire year",
    adjustDate: "Adjust Hijri Date (+/- days for moon sighting)",
    daysRemaining: "days remaining",
    today: "Today",

    language: "Language",
    close: "Close",
    save: "Save",
    cancel: "Cancel"
  },
  fr: {
    appName: "Noor Al-Coran & Adhkar",
    appSubtitle: "Lecture et écoute du Saint Coran, invocations quotidiennes et suivi de lecture",
    navQuran: "Saint Coran",
    navAudio: "Audios",
    navAdhkar: "Adhkar & Douas",
    navTracker: "Suivi Khatma",
    navCalendar: "Calendrier Hégirien",
    navVercel: "Déployer sur Vercel",

    searchSurah: "Rechercher une sourate ou un verset...",
    allSurahs: "Toutes les sourates",
    meccan: "Mecquoise",
    medinan: "Médinoise",
    verses: "Versets",
    juz: "Juz",
    page: "Page",
    surah: "Sourate",
    ayah: "Verset",
    readQuran: "Lire",
    listenSurah: "Écouter",
    readingMode: "Mode d'affichage",
    verseByVerse: "Verset par verset",
    mushafMode: "Vue Mushaf",
    fontSize: "Taille de police",
    showTranslation: "Afficher la traduction",
    showTransliteration: "Afficher la phonétique",
    markAsRead: "Marquer comme lu",
    markedAsRead: "Lu",
    bookmark: "Signet",
    bookmarked: "Sauvegardé",
    copyAyah: "Copier le verset",
    copied: "Copié !",
    playAyah: "Écouter le verset",
    nextSurah: "Sourate suivante",
    prevSurah: "Sourate précédente",
    searchPlaceholder: "Nom de sourate (ex: Al-Kahf, Yasin, Al-Mulk)...",
    noSurahFound: "Aucune sourate trouvée",
    bismillah: "Au nom d'Allah, le Tout Miséricordieux, le Très Miséricordieux.",

    selectReciter: "Choisir le récitant",
    nowPlaying: "Lecture en cours",
    play: "Lire",
    pause: "Pause",
    speed: "Vitesse",
    repeat: "Répéter",
    repeatNone: "Désactivé",
    repeatAyah: "Répéter le verset",
    repeatSurah: "Répéter la sourate",
    audioDisclaimer: "Enregistrements audio authentiques de grands récitants",

    adhkarAndDoua: "Invocations & Adhkar",
    adhkarSubtitle: "La Citadelle du Musulman : Invocations du matin, du soir et prières prophétiques",
    morningAdhkar: "Adhkar du matin",
    eveningAdhkar: "Adhkar du soir",
    afterPrayerAdhkar: "Après la prière",
    sleepAdhkar: "Sommeil & Réveil",
    quranicDuas: "Douas du Coran",
    propheticDuas: "Douas de la Sunna",
    digitalTasbih: "Chapelet Numérique",
    tapToCount: "Touchez pour compter",
    resetCount: "Réinitialiser",
    completedDhikr: "Dhikr complété !",
    virtue: "Mérite & Récompense",
    source: "Référence",
    times: "fois",

    readingProgress: "Suivi de lecture personnalisé",
    trackerSubtitle: "Planifiez votre Khatma et suivez votre assiduité quotidienne",
    khatmahProgress: "Progression de la Khatma",
    overallProgress: "Progression globale",
    readingStreak: "Série de lecture",
    daysStreak: "jours consécutifs",
    ayahsRead: "Versets lus",
    pagesRead: "Pages lues",
    estimatedCompletion: "Date estimée d'achèvement",
    khatmahPlan: "Plan de Khatma",
    createPlan: "Nouveau plan",
    targetDays: "Jours ciblés",
    pagesPerDay: "pages/jour",
    startKhatmah: "Démarrer le plan",
    quickLogToday: "Enregistrer la lecture du jour",
    logReading: "Valider ma lecture",
    logSuccess: "Lecture enregistrée ! Qu'Allah accepte vos œuvres.",
    bookmarksList: "Signets sauvegardés",
    noBookmarks: "Aucun signet. Cliquez sur l'icône de signet pour enregistrer votre page.",
    continueReading: "Reprendre la lecture",
    markJuzCompleted: "Marquer le Juz terminé",

    hijriCalendar: "Calendrier Hégirien",
    calendarSubtitle: "Dates lunaires islamiques, Jours Blancs et fêtes religieuses",
    currentHijriDate: "Date hégirienne aujourd'hui",
    upcomingEvents: "Événements islamiques à venir",
    whiteDaysFasting: "Jeûne des Jours Blancs (13, 14, 15)",
    whiteDaysDescription: "Jeûne recommandé des nuits de pleine lune",
    adjustDate: "Ajuster la date (+/- 1 jour selon la lune)",
    daysRemaining: "jours restants",
    today: "Aujourd'hui",

    language: "Langue",
    close: "Fermer",
    save: "Enregistrer",
    cancel: "Annuler"
  },
  ur: {
    appName: "نور القرآن والأذكار",
    appSubtitle: "قرآن مجید کی تلاوت اور سماعت، روزمرہ اذکار و دعائیں اور ذاتی مطالعہ کا ٹریکر",
    navQuran: "قرآن مجید",
    navAudio: "آڈیو لائبریری",
    navAdhkar: "اذکار اور دعائیں",
    navTracker: "ختم قرآن ٹریکر",
    navCalendar: "ہجری کیلنڈر",
    navVercel: "ورسل پر ڈیپلائے کریں",

    searchSurah: "سورۃ یا آیت تلاش کریں...",
    allSurahs: "تمام سورتیں",
    meccan: "مکی",
    medinan: "مدنی",
    verses: "آیات",
    juz: "پارہ",
    page: "صفحہ",
    surah: "سورۃ",
    ayah: "آیت",
    readQuran: "پڑھیں",
    listenSurah: "سنیں",
    readingMode: "انداز مطالعہ",
    verseByVerse: "آیت بہ آیت",
    mushafMode: "مصحف ویو",
    fontSize: "حروف کا سائز",
    showTranslation: "ترجمہ دکھائیں",
    showTransliteration: "تلفظ دکھائیں",
    markAsRead: "پڑھا ہوا نشان لگائیں",
    markedAsRead: "مکمل پڑھ لیا",
    bookmark: "نشانی لگائیں",
    bookmarked: "محفوظ",
    copyAyah: "آیت کاپی کریں",
    copied: "کاپی ہو گئی!",
    playAyah: "آیت سنیں",
    nextSurah: "اگلی سورۃ",
    prevSurah: "پچھلی سورۃ",
    searchPlaceholder: "سورۃ کا نام درج کریں (مثلاً: الکہف، یٰس، الملک)...",
    noSurahFound: "کوئی سورۃ نہیں ملی",
    bismillah: "اللہ کے نام سے جو نہایت مہربان اور رحم کرنے والا ہے",

    selectReciter: "قاری کا انتخاب کریں",
    nowPlaying: "زیر سماعت",
    play: "چلائیں",
    pause: "روکیں",
    speed: "رفتار",
    repeat: "دہرائیں",
    repeatNone: "بند",
    repeatAyah: "آیت دہرائیں",
    repeatSurah: "سورۃ دہرائیں",
    audioDisclaimer: "معروف عالمی قراء کی خوبصورت تلاوت",

    adhkarAndDoua: "اذکار اور دعائیں",
    adhkarSubtitle: "حصن المسلم: صبح و شام کے مسنون اذکار اور قرآنی و نبوی دعائیں",
    morningAdhkar: "صبح کے اذکار",
    eveningAdhkar: "شام کے اذکار",
    afterPrayerAdhkar: "نماز کے بعد کے اذکار",
    sleepAdhkar: "سونے اور جاگنے کے اذکار",
    quranicDuas: "قرآنی دعائیں",
    propheticDuas: "نبوی دعائیں",
    digitalTasbih: "ڈیجیٹل تسبیح",
    tapToCount: "گننے کے لیے دبائیں",
    resetCount: "دوبارہ شروع کریں",
    completedDhikr: "ذکر مکمل ہوا!",
    virtue: "فضیلت و ثواب",
    source: "حوالہ",
    times: "مرتبہ",

    readingProgress: "ذاتی مطالعہ کا ٹریکر",
    trackerSubtitle: "ختم قرآن کا ہدف بنائیں اور روزانہ تلاوت کا ریکارڈ رکھیں",
    khatmahProgress: "ختم قرآن کی پیشرفت",
    overallProgress: "مجموعی پیشرفت",
    readingStreak: "مسلسل پڑھنے کے دن",
    daysStreak: "دن مسلسل",
    ayahsRead: "پڑھی گئی آیات",
    pagesRead: "پڑھے گئے صفحات",
    estimatedCompletion: "تکمیل کی متوقع تاریخ",
    khatmahPlan: "ختم کا منصوبہ",
    createPlan: "نیا منصوبہ بنائیں",
    targetDays: "مقررہ دن",
    pagesPerDay: "صفحات روزانہ",
    startKhatmah: "منصوبہ شروع کریں",
    quickLogToday: "آج کی تلاوت کا اندراج کریں",
    logReading: "روزانہ کا حصہ ریکارڈ کریں",
    logSuccess: "کامیابی سے محفوظ ہو گیا! اللہ قبول فرمائے۔",
    bookmarksList: "محفوظ نشانیاں",
    noBookmarks: "ابھی تک کوئی نشانی نہیں ہے۔ کسی بھی آیت پر بُک مارک پر کلک کریں۔",
    continueReading: "مطالعہ جاری رکھیں",
    markJuzCompleted: "پارہ مکمل درج کریں",

    hijriCalendar: "ہجری کیلنڈر اور اسلامی ایام",
    calendarSubtitle: "صحیح ہجری تاریخ، ایام بیض اور اہم اسلامی مواقع",
    currentHijriDate: "آج کی ہجری تاریخ",
    upcomingEvents: "آنے والے اسلامی ایام",
    whiteDaysFasting: "ایام بیض کے روزے (13، 14، 15)",
    whiteDaysDescription: "چاند کی چودھویں تاریخوں کے روزے رکھنا سنت نبوی ہے",
    adjustDate: "تاریخ ایڈجسٹ کریں (چاند دیکھنے کی رویت کے مطابق)",
    daysRemaining: "دن باقی",
    today: "آج",

    language: "زبان",
    close: "بند کریں",
    save: "محفوظ کریں",
    cancel: "منسوخ"
  },
  id: {
    appName: "Noor Al-Quran & Adhkar",
    appSubtitle: "Baca dan dengarkan Al-Quran, dzikir & doa harian, serta pelacak tilawah",
    navQuran: "Al-Quran",
    navAudio: "Audio Tilawah",
    navAdhkar: "Dzikir & Doa",
    navTracker: "Target Khatam",
    navCalendar: "Kalender Hijriah",
    navVercel: "Deploy Vercel",

    searchSurah: "Cari surah atau ayat...",
    allSurahs: "Semua Surah",
    meccan: "Makkiyah",
    medinan: "Madaniyah",
    verses: "Ayat",
    juz: "Juz",
    page: "Halaman",
    surah: "Surah",
    ayah: "Ayat",
    readQuran: "Baca",
    listenSurah: "Dengar",
    readingMode: "Mode Tampilan",
    verseByVerse: "Ayat per Ayat",
    mushafMode: "Tampilan Mushaf",
    fontSize: "Ukuran Font",
    showTranslation: "Tampilkan Terjemahan",
    showTransliteration: "Tampilkan Latin",
    markAsRead: "Tandai Selesai",
    markedAsRead: "Selesai",
    bookmark: "Penanda",
    bookmarked: "Tersimpan",
    copyAyah: "Salin Ayat",
    copied: "Disalin!",
    playAyah: "Putar Ayat",
    nextSurah: "Surah Berikutnya",
    prevSurah: "Surah Sebelumnya",
    searchPlaceholder: "Ketik nama surah (misal: Al-Kahfi, Yasin, Al-Mulk)...",
    noSurahFound: "Surah tidak ditemukan",
    bismillah: "Dengan nama Allah Yang Maha Pengasih, Maha Penyayang.",

    selectReciter: "Pilih Qari",
    nowPlaying: "Sedang Diputar",
    play: "Putar",
    pause: "Jeda",
    speed: "Kecepatan",
    repeat: "Ulangi",
    repeatNone: "Mati",
    repeatAyah: "Ulang Ayat",
    repeatSurah: "Ulang Surah",
    audioDisclaimer: "Tilawah jernih dari para qari terkemuka dunia",

    adhkarAndDoua: "Dzikir & Doa",
    adhkarSubtitle: "Hisnul Muslim: Dzikir pagi petang dan doa-doa mustajab dari Al-Quran & Sunnah",
    morningAdhkar: "Dzikir Pagi",
    eveningAdhkar: "Dzikir Petang",
    afterPrayerAdhkar: "Dzikir Setelah Shalat",
    sleepAdhkar: "Dzikir Tidur & Bangun",
    quranicDuas: "Doa Al-Quran",
    propheticDuas: "Doa Nabawi",
    digitalTasbih: "Tasbih Digital",
    tapToCount: "Ketuk untuk menghitung",
    resetCount: "Reset",
    completedDhikr: "Dzikir selesai!",
    virtue: "Keutamaan",
    source: "Sumber",
    times: "kali",

    readingProgress: "Pelacak Tilawah & Khatam",
    trackerSubtitle: "Rencanakan khatam Quran dan pantau konsistensi tilawah harian Anda",
    khatmahProgress: "Progres Khatam",
    overallProgress: "Progres Keseluruhan",
    readingStreak: "Konsistensi Harian",
    daysStreak: "hari berturut-turut",
    ayahsRead: "Ayat dibaca",
    pagesRead: "Halaman dibaca",
    estimatedCompletion: "Perkiraan Tanggal Khatam",
    khatmahPlan: "Rencana Khatam",
    createPlan: "Buat Rencana Baru",
    targetDays: "Target Hari",
    pagesPerDay: "halaman/hari",
    startKhatmah: "Mulai Rencana",
    quickLogToday: "Catat Tilawah Hari Ini",
    logReading: "Simpan Bacaan",
    logSuccess: "Bacaan berhasil dicatat! Semoga Allah menerima amal ibadah kita.",
    bookmarksList: "Penanda Halaman",
    noBookmarks: "Belum ada penanda. Klik ikon penanda pada ayat untuk menyimpan posisi bacaan.",
    continueReading: "Lanjut Membaca",
    markJuzCompleted: "Tandai Juz Selesai",

    hijriCalendar: "Kalender Hijriah Islam",
    calendarSubtitle: "Tanggal Hijriah akurat, puasa Ayyamul Bidh, dan peringatan hari besar Islam",
    currentHijriDate: "Tanggal Hijriah Hari Ini",
    upcomingEvents: "Hari Besar Islam Mendatang",
    whiteDaysFasting: "Puasa Ayyamul Bidh (13, 14, 15)",
    whiteDaysDescription: "Puasa sunnah pertengahan bulan hijriah dengan pahala setara puasa setahun",
    adjustDate: "Sesuaikan Tanggal (+/- hari berdasarkan rukyat)",
    daysRemaining: "hari lagi",
    today: "Hari Ini",

    language: "Bahasa",
    close: "Tutup",
    save: "Simpan",
    cancel: "Batal"
  },
  tr: {
    appName: "Noor Al-Kuran & Zikir",
    appSubtitle: "Kuran-ı Kerim oku ve dinle, günlük zikir ve dualar, hatim takip sistemi",
    navQuran: "Kuran-ı Kerim",
    navAudio: "Ses Kütüphanesi",
    navAdhkar: "Zikirler ve Dualar",
    navTracker: "Hatim Takibi",
    navCalendar: "Hicri Takvim",
    navVercel: "Vercel'e Dağıt",

    searchSurah: "Sure veya ayet ara...",
    allSurahs: "Tüm Sureler",
    meccan: "Mekki",
    medinan: "Medeni",
    verses: "Ayet",
    juz: "Cüz",
    page: "Sayfa",
    surah: "Sure",
    ayah: "Ayet",
    readQuran: "Oku",
    listenSurah: "Dinle",
    readingMode: "Görünüm Modu",
    verseByVerse: "Ayet Ayet",
    mushafMode: "Mushaf Görünümü",
    fontSize: "Yazı Boyutu",
    showTranslation: "Meali Göster",
    showTransliteration: "Okunuşu Göster",
    markAsRead: "Okundu İşaretle",
    markedAsRead: "Okundu",
    bookmark: "Yer İmi",
    bookmarked: "Kaydedildi",
    copyAyah: "Ayeti Kopyala",
    copied: "Kopyalandı!",
    playAyah: "Ayeti Dinle",
    nextSurah: "Sonraki Sure",
    prevSurah: "Önceki Sure",
    searchPlaceholder: "Sure adı yazın (ör: Kehf, Yasin, Mülk)...",
    noSurahFound: "Sure bulunamadı",
    bismillah: "Rahman ve Rahim olan Allah'ın adıyla.",

    selectReciter: "Kari Seçin",
    nowPlaying: "Şu An Çalıyor",
    play: "Oynat",
    pause: "Duraklat",
    speed: "Hız",
    repeat: "Tekrar",
    repeatNone: "Kapalı",
    repeatAyah: "Ayeti Tekrarla",
    repeatSurah: "Sureyi Tekrarla",
    audioDisclaimer: "Dünyaca ünlü karilerden yüksek kaliteli tilavetler",

    adhkarAndDoua: "Zikirler ve Dualar",
    adhkarSubtitle: "Hisnu'l Müslim: Sabah akşam zikirleri, Kuran ve Sünnet duaları",
    morningAdhkar: "Sabah Zikirleri",
    eveningAdhkar: "Akşam Zikirleri",
    afterPrayerAdhkar: "Namaz Sonrası Zikirler",
    sleepAdhkar: "Uyku ve Uyanma",
    quranicDuas: "Kurani Dualar",
    propheticDuas: "Nebevi Dualar",
    digitalTasbih: "Dijital Tesbih",
    tapToCount: "Saymak için dokunun",
    resetCount: "Sıfırla",
    completedDhikr: "Zikir tamamlandı!",
    virtue: "Fazilet ve Sevap",
    source: "Kaynak",
    times: "kere",

    readingProgress: "Kişisel Hatim Takibi",
    trackerSubtitle: "Hatim hedefinizi belirleyin ve günlük okumalarınızı takip edin",
    khatmahProgress: "Hatim İlerlemesi",
    overallProgress: "Genel İlerleme",
    readingStreak: "Okuma Serisi",
    daysStreak: "gün üst üste",
    ayahsRead: "Okunan Ayet",
    pagesRead: "Okunan Sayfa",
    estimatedCompletion: "Tahmini Bitiş Tarihi",
    khatmahPlan: "Hatim Planı",
    createPlan: "Yeni Plan Oluştur",
    targetDays: "Hedef Gün",
    pagesPerDay: "sayfa/gün",
    startKhatmah: "Planı Başlat",
    quickLogToday: "Bugünkü Okumayı Kaydet",
    logReading: "Okumayı Onayla",
    logSuccess: "Kayıt başarılı! Allah kabul eylesin.",
    bookmarksList: "Kaydedilen Yer İmleri",
    noBookmarks: "Henüz yer imi yok. Sayfayı kaydetmek için ayetteki yer imi simgesine tıklayın.",
    continueReading: "Okumaya Devam Et",
    markJuzCompleted: "Cüzü Tamamlandı İşaretle",

    hijriCalendar: "İslam Hicri Takvimi",
    calendarSubtitle: "Doğru hicri tarihler, Eyyam-ı Biyz ve mübarek İslami günler",
    currentHijriDate: "Bugünün Hicri Tarihi",
    upcomingEvents: "Yaklaşan Dini Günler",
    whiteDaysFasting: "Eyyam-ı Biyz Orucu (13, 14, 15)",
    whiteDaysDescription: "Dolunay günlerinde tutulan ve tüm yılı oruçlu geçirmiş gibi sevap olan sünnet oruç",
    adjustDate: "Tarihi Ayarla (Hilal rüyetine göre +/- gün)",
    daysRemaining: "gün kaldı",
    today: "Bugün",

    language: "Dil",
    close: "Kapat",
    save: "Kaydet",
    cancel: "İptal"
  }
};
