import { SurahInfo } from '../types';

export const SURAHS_LIST: SurahInfo[] = [
  {
    id: 1,
    name_ar: "الفاتحة",
    name_en: "Al-Fatihah",
    name_translation: {
      ar: "فاتحة الكتاب",
      en: "The Opening",
      fr: "L'Ouverture",
      ur: "شروع کرنے والی",
      id: "Pembukaan",
      tr: "Fatiha"
    },
    verses_count: 7,
    revelation_place: "makkah",
    revelation_order: 5,
    bismillah_pre: false,
    juz: [1],
    page: 1
  },
  {
    id: 2,
    name_ar: "البقرة",
    name_en: "Al-Baqarah",
    name_translation: {
      ar: "البقرة",
      en: "The Cow",
      fr: "La Vache",
      ur: "گائے",
      id: "Sapi Betina",
      tr: "Bakara"
    },
    verses_count: 286,
    revelation_place: "madinah",
    revelation_order: 87,
    bismillah_pre: true,
    juz: [1, 2, 3],
    page: 2
  },
  {
    id: 3,
    name_ar: "آل عمران",
    name_en: "Ali 'Imran",
    name_translation: {
      ar: "آل عمران",
      en: "Family of Imran",
      fr: "La Famille d'Imran",
      ur: "عمران کی اولاد",
      id: "Keluarga Imran",
      tr: "Al-i İmran"
    },
    verses_count: 200,
    revelation_place: "madinah",
    revelation_order: 89,
    bismillah_pre: true,
    juz: [3, 4],
    page: 50
  },
  {
    id: 4,
    name_ar: "النساء",
    name_en: "An-Nisa",
    name_translation: {
      ar: "النساء",
      en: "The Women",
      fr: "Les Femmes",
      ur: "عورتیں",
      id: "Wanita",
      tr: "Nisa"
    },
    verses_count: 176,
    revelation_place: "madinah",
    revelation_order: 92,
    bismillah_pre: true,
    juz: [4, 5, 6],
    page: 77
  },
  {
    id: 5,
    name_ar: "المائدة",
    name_en: "Al-Ma'idah",
    name_translation: {
      ar: "المائدة",
      en: "The Table Spread",
      fr: "La Table Servie",
      ur: "دستار خوان",
      id: "Jamuan Hidangan",
      tr: "Maide"
    },
    verses_count: 120,
    revelation_place: "madinah",
    revelation_order: 112,
    bismillah_pre: true,
    juz: [6, 7],
    page: 106
  },
  {
    id: 6,
    name_ar: "الأنعام",
    name_en: "Al-An'am",
    name_translation: {
      ar: "الأنعام",
      en: "The Cattle",
      fr: "Les Bestiaux",
      ur: "مویشی",
      id: "Binatang Ternak",
      tr: "En'am"
    },
    verses_count: 165,
    revelation_place: "makkah",
    revelation_order: 55,
    bismillah_pre: true,
    juz: [7, 8],
    page: 128
  },
  {
    id: 7,
    name_ar: "الأعراف",
    name_en: "Al-A'raf",
    name_translation: {
      ar: "الأعراف",
      en: "The Heights",
      fr: "Les Murailles",
      ur: "بلندیاں",
      id: "Tempat yang Tertinggi",
      tr: "A'raf"
    },
    verses_count: 206,
    revelation_place: "makkah",
    revelation_order: 39,
    bismillah_pre: true,
    juz: [8, 9],
    page: 151
  },
  {
    id: 8,
    name_ar: "الأنفال",
    name_en: "Al-Anfal",
    name_translation: {
      ar: "الأنفال",
      en: "The Spoils of War",
      fr: "Le Butin",
      ur: "غنیمت کا مال",
      id: "Rampasan Perang",
      tr: "Enfal"
    },
    verses_count: 75,
    revelation_place: "madinah",
    revelation_order: 88,
    bismillah_pre: true,
    juz: [9, 10],
    page: 177
  },
  {
    id: 9,
    name_ar: "التوبة",
    name_en: "At-Tawbah",
    name_translation: {
      ar: "التوبة",
      en: "The Repentance",
      fr: "Le Repentir",
      ur: "توبہ",
      id: "Pengampunan",
      tr: "Tevbe"
    },
    verses_count: 129,
    revelation_place: "madinah",
    revelation_order: 113,
    bismillah_pre: false,
    juz: [10, 11],
    page: 187
  },
  {
    id: 10,
    name_ar: "يونس",
    name_en: "Yunus",
    name_translation: {
      ar: "يونس",
      en: "Jonah",
      fr: "Jonas",
      ur: "یونس",
      id: "Yunus",
      tr: "Yunus"
    },
    verses_count: 109,
    revelation_place: "makkah",
    revelation_order: 51,
    bismillah_pre: true,
    juz: [11],
    page: 208
  },
  {
    id: 11,
    name_ar: "هود",
    name_en: "Hud",
    name_translation: {
      ar: "هود",
      en: "Hud",
      fr: "Houd",
      ur: "ہود",
      id: "Hud",
      tr: "Hud"
    },
    verses_count: 123,
    revelation_place: "makkah",
    revelation_order: 52,
    bismillah_pre: true,
    juz: [11, 12],
    page: 221
  },
  {
    id: 12,
    name_ar: "يوسف",
    name_en: "Yusuf",
    name_translation: {
      ar: "يوسف",
      en: "Joseph",
      fr: "Joseph",
      ur: "یوسف",
      id: "Yusuf",
      tr: "Yusuf"
    },
    verses_count: 111,
    revelation_place: "makkah",
    revelation_order: 53,
    bismillah_pre: true,
    juz: [12, 13],
    page: 235
  },
  {
    id: 13,
    name_ar: "الرعد",
    name_en: "Ar-Ra'd",
    name_translation: {
      ar: "الرعد",
      en: "The Thunder",
      fr: "Le Tonnerre",
      ur: "گرج",
      id: "Guruh",
      tr: "Ra'd"
    },
    verses_count: 43,
    revelation_place: "madinah",
    revelation_order: 96,
    bismillah_pre: true,
    juz: [13],
    page: 249
  },
  {
    id: 14,
    name_ar: "إبراهيم",
    name_en: "Ibrahim",
    name_translation: {
      ar: "إبراهيم",
      en: "Abraham",
      fr: "Abraham",
      ur: "ابراہیم",
      id: "Ibrahim",
      tr: "İbrahim"
    },
    verses_count: 52,
    revelation_place: "makkah",
    revelation_order: 72,
    bismillah_pre: true,
    juz: [13],
    page: 255
  },
  {
    id: 15,
    name_ar: "الحجر",
    name_en: "Al-Hijr",
    name_translation: {
      ar: "الحجر",
      en: "The Rocky Tract",
      fr: "Le Sentier Rocheux",
      ur: "پتھریلی وادی",
      id: "Gunung Al Hijr",
      tr: "Hicr"
    },
    verses_count: 99,
    revelation_place: "makkah",
    revelation_order: 54,
    bismillah_pre: true,
    juz: [14],
    page: 262
  },
  {
    id: 16,
    name_ar: "النحل",
    name_en: "An-Nahl",
    name_translation: {
      ar: "النحل",
      en: "The Bee",
      fr: "Les Abeilles",
      ur: "شہد کی مکھی",
      id: "Lebah",
      tr: "Nahl"
    },
    verses_count: 128,
    revelation_place: "makkah",
    revelation_order: 70,
    bismillah_pre: true,
    juz: [14],
    page: 267
  },
  {
    id: 17,
    name_ar: "الإسراء",
    name_en: "Al-Isra",
    name_translation: {
      ar: "الإسراء",
      en: "The Night Journey",
      fr: "Le Voyage Nocturne",
      ur: "معراج",
      id: "Perjalanan Malam",
      tr: "İsra"
    },
    verses_count: 111,
    revelation_place: "makkah",
    revelation_order: 50,
    bismillah_pre: true,
    juz: [15],
    page: 282
  },
  {
    id: 18,
    name_ar: "الكهف",
    name_en: "Al-Kahf",
    name_translation: {
      ar: "الكهف",
      en: "The Cave",
      fr: "La Caverne",
      ur: "غار",
      id: "Gua",
      tr: "Kehf"
    },
    verses_count: 110,
    revelation_place: "makkah",
    revelation_order: 69,
    bismillah_pre: true,
    juz: [15, 16],
    page: 293
  },
  {
    id: 19,
    name_ar: "مريم",
    name_en: "Maryam",
    name_translation: {
      ar: "مريم",
      en: "Mary",
      fr: "Marie",
      ur: "مریم",
      id: "Maryam",
      tr: "Meryem"
    },
    verses_count: 98,
    revelation_place: "makkah",
    revelation_order: 44,
    bismillah_pre: true,
    juz: [16],
    page: 305
  },
  {
    id: 20,
    name_ar: "طه",
    name_en: "Taha",
    name_translation: {
      ar: "طه",
      en: "Ta-Ha",
      fr: "Ta-Ha",
      ur: "طٰہٰ",
      id: "Tha-Ha",
      tr: "Taha"
    },
    verses_count: 135,
    revelation_place: "makkah",
    revelation_order: 45,
    bismillah_pre: true,
    juz: [16],
    page: 312
  },
  {
    id: 21,
    name_ar: "الأنبياء",
    name_en: "Al-Anbiya",
    name_translation: {
      ar: "الأنبياء",
      en: "The Prophets",
      fr: "Les Prophètes",
      ur: "انبیاء",
      id: "Para Nabi",
      tr: "Enbiya"
    },
    verses_count: 112,
    revelation_place: "makkah",
    revelation_order: 73,
    bismillah_pre: true,
    juz: [17],
    page: 322
  },
  {
    id: 22,
    name_ar: "الحج",
    name_en: "Al-Hajj",
    name_translation: {
      ar: "الحج",
      en: "The Pilgrimage",
      fr: "Le Pèlerinage",
      ur: "حج",
      id: "Haji",
      tr: "Hac"
    },
    verses_count: 78,
    revelation_place: "madinah",
    revelation_order: 103,
    bismillah_pre: true,
    juz: [17],
    page: 332
  },
  {
    id: 23,
    name_ar: "المؤمنون",
    name_en: "Al-Mu'minun",
    name_translation: {
      ar: "المؤمنون",
      en: "The Believers",
      fr: "Les Croyants",
      ur: "ایمان والے",
      id: "Orang-orang Mukmin",
      tr: "Mü'minun"
    },
    verses_count: 118,
    revelation_place: "makkah",
    revelation_order: 74,
    bismillah_pre: true,
    juz: [18],
    page: 342
  },
  {
    id: 24,
    name_ar: "النور",
    name_en: "An-Nur",
    name_translation: {
      ar: "النور",
      en: "The Light",
      fr: "La Lumière",
      ur: "روشنی",
      id: "Cahaya",
      tr: "Nur"
    },
    verses_count: 64,
    revelation_place: "madinah",
    revelation_order: 102,
    bismillah_pre: true,
    juz: [18],
    page: 350
  },
  {
    id: 25,
    name_ar: "الفرقان",
    name_en: "Al-Furqan",
    name_translation: {
      ar: "الفرقان",
      en: "The Criterion",
      fr: "Le Discernement",
      ur: "حق و باطل میں فرق",
      id: "Pembeda",
      tr: "Furkan"
    },
    verses_count: 77,
    revelation_place: "makkah",
    revelation_order: 42,
    bismillah_pre: true,
    juz: [18, 19],
    page: 359
  },
  {
    id: 26,
    name_ar: "الشعراء",
    name_en: "Ash-Shu'ara",
    name_translation: {
      ar: "الشعراء",
      en: "The Poets",
      fr: "Les Poètes",
      ur: "شاعر",
      id: "Para Penyair",
      tr: "Şuara"
    },
    verses_count: 227,
    revelation_place: "makkah",
    revelation_order: 47,
    bismillah_pre: true,
    juz: [19],
    page: 367
  },
  {
    id: 27,
    name_ar: "النمل",
    name_en: "An-Naml",
    name_translation: {
      ar: "النمل",
      en: "The Ant",
      fr: "Les Fourmis",
      ur: "چیونٹی",
      id: "Semut",
      tr: "Neml"
    },
    verses_count: 93,
    revelation_place: "makkah",
    revelation_order: 48,
    bismillah_pre: true,
    juz: [19, 20],
    page: 377
  },
  {
    id: 28,
    name_ar: "القصص",
    name_en: "Al-Qasas",
    name_translation: {
      ar: "القصص",
      en: "The Stories",
      fr: "Le Récit",
      ur: "واقعات",
      id: "Kisah-kisah",
      tr: "Kasas"
    },
    verses_count: 88,
    revelation_place: "makkah",
    revelation_order: 49,
    bismillah_pre: true,
    juz: [20],
    page: 385
  },
  {
    id: 29,
    name_ar: "العنكبوت",
    name_en: "Al-'Ankabut",
    name_translation: {
      ar: "العنكبوت",
      en: "The Spider",
      fr: "L'Araignée",
      ur: "مکڑی",
      id: "Laba-laba",
      tr: "Ankebut"
    },
    verses_count: 69,
    revelation_place: "makkah",
    revelation_order: 85,
    bismillah_pre: true,
    juz: [20, 21],
    page: 396
  },
  {
    id: 30,
    name_ar: "الروم",
    name_en: "Ar-Rum",
    name_translation: {
      ar: "الروم",
      en: "The Romans",
      fr: "Les Romains",
      ur: "رومی",
      id: "Bangsa Romawi",
      tr: "Rum"
    },
    verses_count: 60,
    revelation_place: "makkah",
    revelation_order: 84,
    bismillah_pre: true,
    juz: [21],
    page: 404
  },
  {
    id: 31,
    name_ar: "لقمان",
    name_en: "Luqman",
    name_translation: {
      ar: "لقمان",
      en: "Luqman",
      fr: "Luqman",
      ur: "لقمان",
      id: "Luqman",
      tr: "Lokman"
    },
    verses_count: 34,
    revelation_place: "makkah",
    revelation_order: 57,
    bismillah_pre: true,
    juz: [21],
    page: 411
  },
  {
    id: 32,
    name_ar: "السجدة",
    name_en: "As-Sajdah",
    name_translation: {
      ar: "السجدة",
      en: "The Prostration",
      fr: "La Prosternation",
      ur: "سجدہ",
      id: "Sujud",
      tr: "Secde"
    },
    verses_count: 30,
    revelation_place: "makkah",
    revelation_order: 75,
    bismillah_pre: true,
    juz: [21],
    page: 415
  },
  {
    id: 33,
    name_ar: "الأحزاب",
    name_en: "Al-Ahzab",
    name_translation: {
      ar: "الأحزاب",
      en: "The Combined Forces",
      fr: "Les Coalisés",
      ur: "فوجیں",
      id: "Golongan yang Bersekutu",
      tr: "Ahzab"
    },
    verses_count: 73,
    revelation_place: "madinah",
    revelation_order: 90,
    bismillah_pre: true,
    juz: [21, 22],
    page: 418
  },
  {
    id: 34,
    name_ar: "سبأ",
    name_en: "Saba",
    name_translation: {
      ar: "سبأ",
      en: "Sheba",
      fr: "Saba",
      ur: "سبا",
      id: "Kaum Saba'",
      tr: "Sebe"
    },
    verses_count: 54,
    revelation_place: "makkah",
    revelation_order: 58,
    bismillah_pre: true,
    juz: [22],
    page: 428
  },
  {
    id: 35,
    name_ar: "فاطر",
    name_en: "Fatir",
    name_translation: {
      ar: "فاطر",
      en: "Originator",
      fr: "Le Créateur",
      ur: "پیدا کرنے والا",
      id: "Pencipta",
      tr: "Fatır"
    },
    verses_count: 45,
    revelation_place: "makkah",
    revelation_order: 43,
    bismillah_pre: true,
    juz: [22],
    page: 434
  },
  {
    id: 36,
    name_ar: "يس",
    name_en: "Ya-Sin",
    name_translation: {
      ar: "يس",
      en: "Ya Sin",
      fr: "Ya-Sin",
      ur: "یٰسٓ",
      id: "Yasin",
      tr: "Yasin"
    },
    verses_count: 83,
    revelation_place: "makkah",
    revelation_order: 41,
    bismillah_pre: true,
    juz: [22, 23],
    page: 440
  },
  {
    id: 37,
    name_ar: "الصافات",
    name_en: "As-Saffat",
    name_translation: {
      ar: "الصافات",
      en: "Those who set the Ranks",
      fr: "Les Rangés",
      ur: "صف باندھنے والے",
      id: "Barisan-barisan",
      tr: "Saffat"
    },
    verses_count: 182,
    revelation_place: "makkah",
    revelation_order: 56,
    bismillah_pre: true,
    juz: [23],
    page: 446
  },
  {
    id: 38,
    name_ar: "ص",
    name_en: "Sad",
    name_translation: {
      ar: "ص",
      en: "The Letter Sad",
      fr: "Sad",
      ur: "ص",
      id: "Shad",
      tr: "Sad"
    },
    verses_count: 88,
    revelation_place: "makkah",
    revelation_order: 38,
    bismillah_pre: true,
    juz: [23],
    page: 453
  },
  {
    id: 39,
    name_ar: "الزمر",
    name_en: "Az-Zumar",
    name_translation: {
      ar: "الزمر",
      en: "The Troops",
      fr: "Les Groupes",
      ur: "گروہ",
      id: "Rombongan-rombongan",
      tr: "Zümer"
    },
    verses_count: 75,
    revelation_place: "makkah",
    revelation_order: 59,
    bismillah_pre: true,
    juz: [23, 24],
    page: 458
  },
  {
    id: 40,
    name_ar: "غافر",
    name_en: "Ghafir",
    name_translation: {
      ar: "غافر",
      en: "The Forgiver",
      fr: "Le Pardonneur",
      ur: "بخشنے والا",
      id: "Yang Mengampuni",
      tr: "Mü'min"
    },
    verses_count: 85,
    revelation_place: "makkah",
    revelation_order: 60,
    bismillah_pre: true,
    juz: [24],
    page: 467
  },
  {
    id: 41,
    name_ar: "فصلت",
    name_en: "Fussilat",
    name_translation: {
      ar: "فصلت",
      en: "Explained in Detail",
      fr: "Les Versets Détaillés",
      ur: "کھول کر بیان کی گئی",
      id: "Yang Dijelaskan",
      tr: "Fussilet"
    },
    verses_count: 54,
    revelation_place: "makkah",
    revelation_order: 61,
    bismillah_pre: true,
    juz: [24, 25],
    page: 477
  },
  {
    id: 42,
    name_ar: "الشورى",
    name_en: "Ash-Shura",
    name_translation: {
      ar: "الشورى",
      en: "The Consultation",
      fr: "La Consultation",
      ur: "مشورہ",
      id: "Musyawarah",
      tr: "Şura"
    },
    verses_count: 53,
    revelation_place: "makkah",
    revelation_order: 62,
    bismillah_pre: true,
    juz: [25],
    page: 483
  },
  {
    id: 43,
    name_ar: "الزخرف",
    name_en: "Az-Zukhruf",
    name_translation: {
      ar: "الزخرف",
      en: "The Ornaments of Gold",
      fr: "L'Ornement",
      ur: "سونے کے زیورات",
      id: "Perhiasan",
      tr: "Zuhruf"
    },
    verses_count: 89,
    revelation_place: "makkah",
    revelation_order: 63,
    bismillah_pre: true,
    juz: [25],
    page: 489
  },
  {
    id: 44,
    name_ar: "الدخان",
    name_en: "Ad-Dukhan",
    name_translation: {
      ar: "الدخان",
      en: "The Smoke",
      fr: "La Fumée",
      ur: "دھواں",
      id: "Kabut",
      tr: "Duhan"
    },
    verses_count: 59,
    revelation_place: "makkah",
    revelation_order: 64,
    bismillah_pre: true,
    juz: [25],
    page: 496
  },
  {
    id: 45,
    name_ar: "الجاثية",
    name_en: "Al-Jathiyah",
    name_translation: {
      ar: "الجاثية",
      en: "The Kneeling",
      fr: "L'Agenouillée",
      ur: "گھٹنوں کے بل گری ہوئی",
      id: "Yang Berlutut",
      tr: "Casiye"
    },
    verses_count: 37,
    revelation_place: "makkah",
    revelation_order: 65,
    bismillah_pre: true,
    juz: [25],
    page: 499
  },
  {
    id: 46,
    name_ar: "الأحقاف",
    name_en: "Al-Ahqaf",
    name_translation: {
      ar: "الأحقاف",
      en: "The Wind-Curved Sandhills",
      fr: "Les Dunes",
      ur: "ریت کے ٹیلے",
      id: "Bukit-bukit Pasir",
      tr: "Ahkaf"
    },
    verses_count: 35,
    revelation_place: "makkah",
    revelation_order: 66,
    bismillah_pre: true,
    juz: [26],
    page: 502
  },
  {
    id: 47,
    name_ar: "محمد",
    name_en: "Muhammad",
    name_translation: {
      ar: "محمد",
      en: "Muhammad",
      fr: "Muhammad",
      ur: "محمد ﷺ",
      id: "Muhammad",
      tr: "Muhammed"
    },
    verses_count: 38,
    revelation_place: "madinah",
    revelation_order: 95,
    bismillah_pre: true,
    juz: [26],
    page: 507
  },
  {
    id: 48,
    name_ar: "الفتح",
    name_en: "Al-Fath",
    name_translation: {
      ar: "الفتح",
      en: "The Victory",
      fr: "La Victoire éclatante",
      ur: "فتح",
      id: "Kemenangan",
      tr: "Fetih"
    },
    verses_count: 29,
    revelation_place: "madinah",
    revelation_order: 111,
    bismillah_pre: true,
    juz: [26],
    page: 511
  },
  {
    id: 49,
    name_ar: "الحجرات",
    name_en: "Al-Hujurat",
    name_translation: {
      ar: "الحجرات",
      en: "The Rooms",
      fr: "Les Appartements",
      ur: "حجرے",
      id: "Kamar-kamar",
      tr: "Hucurat"
    },
    verses_count: 18,
    revelation_place: "madinah",
    revelation_order: 106,
    bismillah_pre: true,
    juz: [26],
    page: 515
  },
  {
    id: 50,
    name_ar: "ق",
    name_en: "Qaf",
    name_translation: {
      ar: "ق",
      en: "The Letter Qaf",
      fr: "Qaf",
      ur: "ق",
      id: "Qaf",
      tr: "Kaf"
    },
    verses_count: 45,
    revelation_place: "makkah",
    revelation_order: 34,
    bismillah_pre: true,
    juz: [26],
    page: 518
  },
  {
    id: 51,
    name_ar: "الذاريات",
    name_en: "Adh-Dhariyat",
    name_translation: {
      ar: "الذاريات",
      en: "The Winnowing Winds",
      fr: "Qui éparpillent",
      ur: "ہوائیں اڑانے والی",
      id: "Angin yang Menerbangkan",
      tr: "Zariyat"
    },
    verses_count: 60,
    revelation_place: "makkah",
    revelation_order: 67,
    bismillah_pre: true,
    juz: [26, 27],
    page: 520
  },
  {
    id: 52,
    name_ar: "الطور",
    name_en: "At-Tur",
    name_translation: {
      ar: "الطور",
      en: "The Mount",
      fr: "Le Mont",
      ur: "طور پہاڑ",
      id: "Bukit",
      tr: "Tur"
    },
    verses_count: 49,
    revelation_place: "makkah",
    revelation_order: 76,
    bismillah_pre: true,
    juz: [27],
    page: 523
  },
  {
    id: 53,
    name_ar: "النجم",
    name_en: "An-Najm",
    name_translation: {
      ar: "النجم",
      en: "The Star",
      fr: "L'Étoile",
      ur: "ستارہ",
      id: "Bintang",
      tr: "Necm"
    },
    verses_count: 62,
    revelation_place: "makkah",
    revelation_order: 23,
    bismillah_pre: true,
    juz: [27],
    page: 526
  },
  {
    id: 54,
    name_ar: "القمر",
    name_en: "Al-Qamar",
    name_translation: {
      ar: "القمر",
      en: "The Moon",
      fr: "La Lune",
      ur: "چاند",
      id: "Bulan",
      tr: "Kamer"
    },
    verses_count: 55,
    revelation_place: "makkah",
    revelation_order: 37,
    bismillah_pre: true,
    juz: [27],
    page: 528
  },
  {
    id: 55,
    name_ar: "الرحمن",
    name_en: "Ar-Rahman",
    name_translation: {
      ar: "الرحمن",
      en: "The Beneficent",
      fr: "Le Tout Miséricordieux",
      ur: "رحم کرنے والا",
      id: "Yang Maha Pemurah",
      tr: "Rahman"
    },
    verses_count: 78,
    revelation_place: "madinah",
    revelation_order: 97,
    bismillah_pre: true,
    juz: [27],
    page: 531
  },
  {
    id: 56,
    name_ar: "الواقعة",
    name_en: "Al-Waqi'ah",
    name_translation: {
      ar: "الواقعة",
      en: "The Inevitable",
      fr: "L'Événement",
      ur: "واقع ہونے والی",
      id: "Hari Kiamat",
      tr: "Vakıa"
    },
    verses_count: 96,
    revelation_place: "makkah",
    revelation_order: 46,
    bismillah_pre: true,
    juz: [27],
    page: 534
  },
  {
    id: 57,
    name_ar: "الحديد",
    name_en: "Al-Hadid",
    name_translation: {
      ar: "الحديد",
      en: "The Iron",
      fr: "Le Fer",
      ur: "لوہا",
      id: "Besi",
      tr: "Hadid"
    },
    verses_count: 29,
    revelation_place: "madinah",
    revelation_order: 94,
    bismillah_pre: true,
    juz: [27],
    page: 537
  },
  {
    id: 58,
    name_ar: "المجادلة",
    name_en: "Al-Mujadila",
    name_translation: {
      ar: "المجادلة",
      en: "The Pleading Woman",
      fr: "La Discussion",
      ur: "بحث کرنے والی عورت",
      id: "Wanita yang Mengajukan Gugatan",
      tr: "Mücadele"
    },
    verses_count: 22,
    revelation_place: "madinah",
    revelation_order: 105,
    bismillah_pre: true,
    juz: [28],
    page: 542
  },
  {
    id: 59,
    name_ar: "الحشر",
    name_en: "Al-Hashr",
    name_translation: {
      ar: "الحشر",
      en: "The Exile",
      fr: "L'Exode",
      ur: "اکھٹا کرنا",
      id: "Pengusiran",
      tr: "Haşr"
    },
    verses_count: 24,
    revelation_place: "madinah",
    revelation_order: 101,
    bismillah_pre: true,
    juz: [28],
    page: 545
  },
  {
    id: 60,
    name_ar: "الممتحنة",
    name_en: "Al-Mumtahanah",
    name_translation: {
      ar: "الممتحنة",
      en: "She that is to be examined",
      fr: "L'Éprouvée",
      ur: "جانچی جانے والی",
      id: "Wanita yang Diuji",
      tr: "Mümtehine"
    },
    verses_count: 13,
    revelation_place: "madinah",
    revelation_order: 91,
    bismillah_pre: true,
    juz: [28],
    page: 549
  },
  {
    id: 61,
    name_ar: "الصف",
    name_en: "As-Saf",
    name_translation: {
      ar: "الصف",
      en: "The Ranks",
      fr: "Le Rang",
      ur: "صف بندی",
      id: "Barisan",
      tr: "Saff"
    },
    verses_count: 14,
    revelation_place: "madinah",
    revelation_order: 109,
    bismillah_pre: true,
    juz: [28],
    page: 551
  },
  {
    id: 62,
    name_ar: "الجمعة",
    name_en: "Al-Jumu'ah",
    name_translation: {
      ar: "الجمعة",
      en: "The Congregation",
      fr: "Le Vendredi",
      ur: "جمعہ کا دن",
      id: "Hari Jumat",
      tr: "Cuma"
    },
    verses_count: 11,
    revelation_place: "madinah",
    revelation_order: 110,
    bismillah_pre: true,
    juz: [28],
    page: 553
  },
  {
    id: 63,
    name_ar: "المنافقون",
    name_en: "Al-Munafiqun",
    name_translation: {
      ar: "المنافقون",
      en: "The Hypocrites",
      fr: "Les Hypocrites",
      ur: "منافقین",
      id: "Orang-orang Munafik",
      tr: "Münafikun"
    },
    verses_count: 11,
    revelation_place: "madinah",
    revelation_order: 104,
    bismillah_pre: true,
    juz: [28],
    page: 554
  },
  {
    id: 64,
    name_ar: "التغابن",
    name_en: "At-Taghabun",
    name_translation: {
      ar: "التغابن",
      en: "The Mutual Disillusion",
      fr: "La Grande Perte",
      ur: "ہار جیت کا دن",
      id: "Hari Dinampakkan Kesalahan",
      tr: "Teğabün"
    },
    verses_count: 18,
    revelation_place: "madinah",
    revelation_order: 108,
    bismillah_pre: true,
    juz: [28],
    page: 556
  },
  {
    id: 65,
    name_ar: "الطلاق",
    name_en: "At-Talaq",
    name_translation: {
      ar: "الطلاق",
      en: "The Divorce",
      fr: "Le Divorce",
      ur: "طلاق",
      id: "Perceraian",
      tr: "Talak"
    },
    verses_count: 12,
    revelation_place: "madinah",
    revelation_order: 99,
    bismillah_pre: true,
    juz: [28],
    page: 558
  },
  {
    id: 66,
    name_ar: "التحريم",
    name_en: "At-Tahrim",
    name_translation: {
      ar: "التحريم",
      en: "The Prohibition",
      fr: "L'Interdiction",
      ur: "حرام ٹھہرانا",
      id: "Mengharamkan",
      tr: "Tahrim"
    },
    verses_count: 12,
    revelation_place: "madinah",
    revelation_order: 107,
    bismillah_pre: true,
    juz: [28],
    page: 560
  },
  {
    id: 67,
    name_ar: "الملك",
    name_en: "Al-Mulk",
    name_translation: {
      ar: "الملك",
      en: "The Sovereignty",
      fr: "La Royauté",
      ur: "بادشاہی",
      id: "Kerajaan",
      tr: "Mülk"
    },
    verses_count: 30,
    revelation_place: "makkah",
    revelation_order: 77,
    bismillah_pre: true,
    juz: [29],
    page: 562
  },
  {
    id: 68,
    name_ar: "القلم",
    name_en: "Al-Qalam",
    name_translation: {
      ar: "القلم",
      en: "The Pen",
      fr: "La Plume",
      ur: "قلم",
      id: "Pena",
      tr: "Kalem"
    },
    verses_count: 52,
    revelation_place: "makkah",
    revelation_order: 2,
    bismillah_pre: true,
    juz: [29],
    page: 564
  },
  {
    id: 69,
    name_ar: "الحاقة",
    name_en: "Al-Haqqah",
    name_translation: {
      ar: "الحاقة",
      en: "The Reality",
      fr: "L'Inévitable",
      ur: "سچ مچ ہونے والی",
      id: "Hari Kiamat yang Sebenarnya",
      tr: "Hakka"
    },
    verses_count: 52,
    revelation_place: "makkah",
    revelation_order: 78,
    bismillah_pre: true,
    juz: [29],
    page: 566
  },
  {
    id: 70,
    name_ar: "المعارج",
    name_en: "Al-Ma'arij",
    name_translation: {
      ar: "المعارج",
      en: "The Ascending Stairways",
      fr: "Les Voies d'Ascension",
      ur: "بلندی کے راستے",
      id: "Tempat Naik",
      tr: "Mearic"
    },
    verses_count: 44,
    revelation_place: "makkah",
    revelation_order: 79,
    bismillah_pre: true,
    juz: [29],
    page: 568
  },
  {
    id: 71,
    name_ar: "نوح",
    name_en: "Nuh",
    name_translation: {
      ar: "نوح",
      en: "Noah",
      fr: "Noé",
      ur: "نوح علیہ السلام",
      id: "Nuh",
      tr: "Nuh"
    },
    verses_count: 28,
    revelation_place: "makkah",
    revelation_order: 71,
    bismillah_pre: true,
    juz: [29],
    page: 570
  },
  {
    id: 72,
    name_ar: "الجن",
    name_en: "Al-Jinn",
    name_translation: {
      ar: "الجن",
      en: "The Jinn",
      fr: "Les Djinns",
      ur: "جنات",
      id: "Jin",
      tr: "Cin"
    },
    verses_count: 28,
    revelation_place: "makkah",
    revelation_order: 40,
    bismillah_pre: true,
    juz: [29],
    page: 572
  },
  {
    id: 73,
    name_ar: "المزمل",
    name_en: "Al-Muzzammil",
    name_translation: {
      ar: "المزمل",
      en: "The Enshrouded One",
      fr: "L'Enveloppé",
      ur: "کمبل میں لپٹنے والے",
      id: "Orang yang Berselimut",
      tr: "Müzzemmil"
    },
    verses_count: 20,
    revelation_place: "makkah",
    revelation_order: 3,
    bismillah_pre: true,
    juz: [29],
    page: 574
  },
  {
    id: 74,
    name_ar: "المدثر",
    name_en: "Al-Muddaththir",
    name_translation: {
      ar: "المدثر",
      en: "The Cloaked One",
      fr: "Le Revêtu d'un Manteau",
      ur: "چادر اوڑھنے والے",
      id: "Orang yang Berkemul",
      tr: "Müddessir"
    },
    verses_count: 56,
    revelation_place: "makkah",
    revelation_order: 4,
    bismillah_pre: true,
    juz: [29],
    page: 575
  },
  {
    id: 75,
    name_ar: "القيامة",
    name_en: "Al-Qiyamah",
    name_translation: {
      ar: "القيامة",
      en: "The Resurrection",
      fr: "La Résurrection",
      ur: "قیامت کا دن",
      id: "Hari Kiamat",
      tr: "Kıyame"
    },
    verses_count: 40,
    revelation_place: "makkah",
    revelation_order: 31,
    bismillah_pre: true,
    juz: [29],
    page: 577
  },
  {
    id: 76,
    name_ar: "الإنسان",
    name_en: "Al-Insan",
    name_translation: {
      ar: "الإنسان",
      en: "Man",
      fr: "L'Homme",
      ur: "انسان",
      id: "Manusia",
      tr: "İnsan"
    },
    verses_count: 31,
    revelation_place: "madinah",
    revelation_order: 98,
    bismillah_pre: true,
    juz: [29],
    page: 578
  },
  {
    id: 77,
    name_ar: "المرسلات",
    name_en: "Al-Mursalat",
    name_translation: {
      ar: "المرسلات",
      en: "The Emissaries",
      fr: "Les Envoyés",
      ur: "بھیجی جانے والیاں",
      id: "Malaikat-Malaikat yang Diutus",
      tr: "Mürselat"
    },
    verses_count: 50,
    revelation_place: "makkah",
    revelation_order: 33,
    bismillah_pre: true,
    juz: [29],
    page: 580
  },
  {
    id: 78,
    name_ar: "النبأ",
    name_en: "An-Naba",
    name_translation: {
      ar: "النبأ",
      en: "The Tidings",
      fr: "La Nouvelle",
      ur: "بڑی خبر",
      id: "Berita Besar",
      tr: "Nebe"
    },
    verses_count: 40,
    revelation_place: "makkah",
    revelation_order: 80,
    bismillah_pre: true,
    juz: [30],
    page: 582
  },
  {
    id: 79,
    name_ar: "النازعات",
    name_en: "An-Nazi'at",
    name_translation: {
      ar: "النازعات",
      en: "Those who drag forth",
      fr: "Les Anges qui arrachent",
      ur: "کھینچنے والے",
      id: "Malaikat-Malaikat yang Mencabut",
      tr: "Naziat"
    },
    verses_count: 46,
    revelation_place: "makkah",
    revelation_order: 81,
    bismillah_pre: true,
    juz: [30],
    page: 583
  },
  {
    id: 80,
    name_ar: "عبس",
    name_en: "'Abasa",
    name_translation: {
      ar: "عبس",
      en: "He frowned",
      fr: "Il s'est renfrogné",
      ur: "تیوری چڑہائی",
      id: "Ia Bermuka Masam",
      tr: "Abese"
    },
    verses_count: 42,
    revelation_place: "makkah",
    revelation_order: 24,
    bismillah_pre: true,
    juz: [30],
    page: 585
  },
  {
    id: 81,
    name_ar: "التكوير",
    name_en: "At-Takwir",
    name_translation: {
      ar: "التكوير",
      en: "The Overthrowing",
      fr: "L'Obscurcissement",
      ur: "لپیٹنا",
      id: "Menggulung",
      tr: "Tekvir"
    },
    verses_count: 29,
    revelation_place: "makkah",
    revelation_order: 7,
    bismillah_pre: true,
    juz: [30],
    page: 586
  },
  {
    id: 82,
    name_ar: "الانفطار",
    name_en: "Al-Infitar",
    name_translation: {
      ar: "الانفطار",
      en: "The Cleaving",
      fr: "La Rupture",
      ur: "پھٹ جانا",
      id: "Terbelah",
      tr: "İnfitar"
    },
    verses_count: 19,
    revelation_place: "makkah",
    revelation_order: 82,
    bismillah_pre: true,
    juz: [30],
    page: 587
  },
  {
    id: 83,
    name_ar: "المطففين",
    name_en: "Al-Mutaffifin",
    name_translation: {
      ar: "المطففين",
      en: "The Defrauding",
      fr: "Les Fraudeurs",
      ur: "ناپ تول میں کمی کرنے والے",
      id: "Orang-orang yang Curang",
      tr: "Mutaffifin"
    },
    verses_count: 36,
    revelation_place: "makkah",
    revelation_order: 86,
    bismillah_pre: true,
    juz: [30],
    page: 587
  },
  {
    id: 84,
    name_ar: "الانشقاق",
    name_en: "Al-Inshiqaq",
    name_translation: {
      ar: "الانشقاق",
      en: "The Splitting Open",
      fr: "La Déchirure",
      ur: "پھٹ پڑنا",
      id: "Terbelah",
      tr: "İnşikak"
    },
    verses_count: 25,
    revelation_place: "makkah",
    revelation_order: 83,
    bismillah_pre: true,
    juz: [30],
    page: 589
  },
  {
    id: 85,
    name_ar: "البروج",
    name_en: "Al-Buruj",
    name_translation: {
      ar: "البروج",
      en: "The Constellations",
      fr: "Les Constellations",
      ur: "بروج",
      id: "Gugusan Bintang",
      tr: "Büruc"
    },
    verses_count: 22,
    revelation_place: "makkah",
    revelation_order: 27,
    bismillah_pre: true,
    juz: [30],
    page: 590
  },
  {
    id: 86,
    name_ar: "الطارق",
    name_en: "At-Tariq",
    name_translation: {
      ar: "الطارق",
      en: "The Morning Star",
      fr: "L'Astre Nocturne",
      ur: "رات کو نمودار ہونے والا",
      id: "Yang Datang di Malam Hari",
      tr: "Tarık"
    },
    verses_count: 17,
    revelation_place: "makkah",
    revelation_order: 36,
    bismillah_pre: true,
    juz: [30],
    page: 591
  },
  {
    id: 87,
    name_ar: "الأعلى",
    name_en: "Al-A'la",
    name_translation: {
      ar: "الأعلى",
      en: "The Most High",
      fr: "Le Très-Haut",
      ur: "سب سے بلند",
      id: "Yang Paling Tinggi",
      tr: "A'la"
    },
    verses_count: 19,
    revelation_place: "makkah",
    revelation_order: 8,
    bismillah_pre: true,
    juz: [30],
    page: 591
  },
  {
    id: 88,
    name_ar: "الغاشية",
    name_en: "Al-Ghashiyah",
    name_translation: {
      ar: "الغاشية",
      en: "The Overwhelming",
      fr: "L'Enveloppante",
      ur: "چھانے والی مصیبت",
      id: "Hari Pembalasan",
      tr: "Gaşiye"
    },
    verses_count: 26,
    revelation_place: "makkah",
    revelation_order: 68,
    bismillah_pre: true,
    juz: [30],
    page: 592
  },
  {
    id: 89,
    name_ar: "الفجر",
    name_en: "Al-Fajr",
    name_translation: {
      ar: "الفجر",
      en: "The Dawn",
      fr: "L'Aube",
      ur: "فجر",
      id: "Fajar",
      tr: "Fecr"
    },
    verses_count: 30,
    revelation_place: "makkah",
    revelation_order: 10,
    bismillah_pre: true,
    juz: [30],
    page: 593
  },
  {
    id: 90,
    name_ar: "البلد",
    name_en: "Al-Balad",
    name_translation: {
      ar: "البلد",
      en: "The City",
      fr: "La Cité",
      ur: "شہر",
      id: "Negeri",
      tr: "Beled"
    },
    verses_count: 20,
    revelation_place: "makkah",
    revelation_order: 35,
    bismillah_pre: true,
    juz: [30],
    page: 594
  },
  {
    id: 91,
    name_ar: "الشمس",
    name_en: "Ash-Shams",
    name_translation: {
      ar: "الشمس",
      en: "The Sun",
      fr: "Le Soleil",
      ur: "سورج",
      id: "Matahari",
      tr: "Şems"
    },
    verses_count: 15,
    revelation_place: "makkah",
    revelation_order: 26,
    bismillah_pre: true,
    juz: [30],
    page: 595
  },
  {
    id: 92,
    name_ar: "الليل",
    name_en: "Al-Layl",
    name_translation: {
      ar: "الليل",
      en: "The Night",
      fr: "La Nuit",
      ur: "رات",
      id: "Malam",
      tr: "Leyl"
    },
    verses_count: 21,
    revelation_place: "makkah",
    revelation_order: 9,
    bismillah_pre: true,
    juz: [30],
    page: 595
  },
  {
    id: 93,
    name_ar: "الضحى",
    name_en: "Ad-Duhaa",
    name_translation: {
      ar: "الضحى",
      en: "The Morning Hours",
      fr: "Le Jour Montant",
      ur: "دن کی روشنی",
      id: "Waktu Duha",
      tr: "Duha"
    },
    verses_count: 11,
    revelation_place: "makkah",
    revelation_order: 11,
    bismillah_pre: true,
    juz: [30],
    page: 596
  },
  {
    id: 94,
    name_ar: "الشرح",
    name_en: "Ash-Sharh",
    name_translation: {
      ar: "الشرح",
      en: "The Relief",
      fr: "L'Ouverture",
      ur: "کھول دینا",
      id: "Kelapangan",
      tr: "İnşirah"
    },
    verses_count: 8,
    revelation_place: "makkah",
    revelation_order: 12,
    bismillah_pre: true,
    juz: [30],
    page: 596
  },
  {
    id: 95,
    name_ar: "التين",
    name_en: "At-Tin",
    name_translation: {
      ar: "التين",
      en: "The Fig",
      fr: "Le Figuier",
      ur: "انجیر",
      id: "Buah Tin",
      tr: "Tin"
    },
    verses_count: 8,
    revelation_place: "makkah",
    revelation_order: 28,
    bismillah_pre: true,
    juz: [30],
    page: 597
  },
  {
    id: 96,
    name_ar: "العلق",
    name_en: "Al-'Alaq",
    name_translation: {
      ar: "العلق",
      en: "The Clot",
      fr: "L'Adhérence",
      ur: "جما ہوا خون",
      id: "Segumpal Darah",
      tr: "Alak"
    },
    verses_count: 19,
    revelation_place: "makkah",
    revelation_order: 1,
    bismillah_pre: true,
    juz: [30],
    page: 597
  },
  {
    id: 97,
    name_ar: "القدر",
    name_en: "Al-Qadr",
    name_translation: {
      ar: "القدر",
      en: "The Power",
      fr: "La Destinée",
      ur: "قدر کی رات",
      id: "Kemuliaan",
      tr: "Kadir"
    },
    verses_count: 5,
    revelation_place: "makkah",
    revelation_order: 25,
    bismillah_pre: true,
    juz: [30],
    page: 598
  },
  {
    id: 98,
    name_ar: "البينة",
    name_en: "Al-Bayyinah",
    name_translation: {
      ar: "البينة",
      en: "The Clear Proof",
      fr: "La Preuve Évidente",
      ur: "کھلی دلیل",
      id: "Bukti yang Nyata",
      tr: "Beyyine"
    },
    verses_count: 8,
    revelation_place: "madinah",
    revelation_order: 100,
    bismillah_pre: true,
    juz: [30],
    page: 598
  },
  {
    id: 99,
    name_ar: "الزلزلة",
    name_en: "Az-Zalzalah",
    name_translation: {
      ar: "الزلزلة",
      en: "The Earthquake",
      fr: "La Secousse",
      ur: "زلزلہ",
      id: "Keguncangan",
      tr: "Zilzal"
    },
    verses_count: 8,
    revelation_place: "madinah",
    revelation_order: 93,
    bismillah_pre: true,
    juz: [30],
    page: 599
  },
  {
    id: 100,
    name_ar: "العاديات",
    name_en: "Al-'Adiyat",
    name_translation: {
      ar: "العاديات",
      en: "The Courser",
      fr: "Les Coursiers",
      ur: "دوڑنے والے گھوڑے",
      id: "Kuda Perang yang Berlari Kencang",
      tr: "Adiyat"
    },
    verses_count: 11,
    revelation_place: "makkah",
    revelation_order: 14,
    bismillah_pre: true,
    juz: [30],
    page: 599
  },
  {
    id: 101,
    name_ar: "القارعة",
    name_en: "Al-Qari'ah",
    name_translation: {
      ar: "القارعة",
      en: "The Calamity",
      fr: "Le Fracas",
      ur: "کھڑکھڑانے والی",
      id: "Hari Kiamat",
      tr: "Karia"
    },
    verses_count: 11,
    revelation_place: "makkah",
    revelation_order: 30,
    bismillah_pre: true,
    juz: [30],
    page: 600
  },
  {
    id: 102,
    name_ar: "التكاثر",
    name_en: "At-Takathur",
    name_translation: {
      ar: "التكاثر",
      en: "The Rivalry in World Increase",
      fr: "La Course aux Richesses",
      ur: "کثرت کی ہوس",
      id: "Bermegah-megahan",
      tr: "Tekasür"
    },
    verses_count: 8,
    revelation_place: "makkah",
    revelation_order: 16,
    bismillah_pre: true,
    juz: [30],
    page: 600
  },
  {
    id: 103,
    name_ar: "العصر",
    name_en: "Al-'Asr",
    name_translation: {
      ar: "العصر",
      en: "The Declining Day",
      fr: "Le Temps",
      ur: "زمانہ",
      id: "Masa",
      tr: "Asr"
    },
    verses_count: 3,
    revelation_place: "makkah",
    revelation_order: 13,
    bismillah_pre: true,
    juz: [30],
    page: 601
  },
  {
    id: 104,
    name_ar: "الهمزة",
    name_en: "Al-Humazah",
    name_translation: {
      ar: "الهمزة",
      en: "The Traducer",
      fr: "Les Calomniateurs",
      ur: "عیب جوئی کرنے والا",
      id: "Pengumpat",
      tr: "Hümeze"
    },
    verses_count: 9,
    revelation_place: "makkah",
    revelation_order: 32,
    bismillah_pre: true,
    juz: [30],
    page: 601
  },
  {
    id: 105,
    name_ar: "الفيل",
    name_en: "Al-Fil",
    name_translation: {
      ar: "الفيل",
      en: "The Elephant",
      fr: "L'Éléphant",
      ur: "ہاتھی",
      id: "Gajah",
      tr: "Fil"
    },
    verses_count: 5,
    revelation_place: "makkah",
    revelation_order: 19,
    bismillah_pre: true,
    juz: [30],
    page: 601
  },
  {
    id: 106,
    name_ar: "قريش",
    name_en: "Quraysh",
    name_translation: {
      ar: "قريش",
      en: "Quraysh",
      fr: "Coraïsh",
      ur: "قریش",
      id: "Suku Quraisy",
      tr: "Kureyş"
    },
    verses_count: 4,
    revelation_place: "makkah",
    revelation_order: 29,
    bismillah_pre: true,
    juz: [30],
    page: 602
  },
  {
    id: 107,
    name_ar: "الماعون",
    name_en: "Al-Ma'un",
    name_translation: {
      ar: "الماعون",
      en: "The Small Kindnesses",
      fr: "L'Ustensile",
      ur: "عام برتنے کی چیزیں",
      id: "Barang-barang yang Berguna",
      tr: "Maun"
    },
    verses_count: 7,
    revelation_place: "makkah",
    revelation_order: 17,
    bismillah_pre: true,
    juz: [30],
    page: 602
  },
  {
    id: 108,
    name_ar: "الكوثر",
    name_en: "Al-Kawthar",
    name_translation: {
      ar: "الكوثر",
      en: "The Abundance",
      fr: "L'Abondance",
      ur: "حوض کوثر",
      id: "Nikmat yang Berlimpah",
      tr: "Kevser"
    },
    verses_count: 3,
    revelation_place: "makkah",
    revelation_order: 15,
    bismillah_pre: true,
    juz: [30],
    page: 602
  },
  {
    id: 109,
    name_ar: "الكافرون",
    name_en: "Al-Kafirun",
    name_translation: {
      ar: "الكافرون",
      en: "The Disbelievers",
      fr: "Les Infidèles",
      ur: "کافر لوگ",
      id: "Orang-orang Kafir",
      tr: "Kafirun"
    },
    verses_count: 6,
    revelation_place: "makkah",
    revelation_order: 18,
    bismillah_pre: true,
    juz: [30],
    page: 603
  },
  {
    id: 110,
    name_ar: "النصر",
    name_en: "An-Nasr",
    name_translation: {
      ar: "النصر",
      en: "The Divine Support",
      fr: "Les Secours",
      ur: "مدد",
      id: "Pertolongan",
      tr: "Nasr"
    },
    verses_count: 3,
    revelation_place: "madinah",
    revelation_order: 114,
    bismillah_pre: true,
    juz: [30],
    page: 603
  },
  {
    id: 111,
    name_ar: "المسد",
    name_en: "Al-Masad",
    name_translation: {
      ar: "المسد",
      en: "The Palm Fiber",
      fr: "Les Fibres",
      ur: "کھجور کی چھال",
      id: "Gejolak Api",
      tr: "Tebbet"
    },
    verses_count: 5,
    revelation_place: "makkah",
    revelation_order: 6,
    bismillah_pre: true,
    juz: [30],
    page: 603
  },
  {
    id: 112,
    name_ar: "الإخلاص",
    name_en: "Al-Ikhlas",
    name_translation: {
      ar: "الإخلاص",
      en: "The Sincerity",
      fr: "Le Monothéisme Pur",
      ur: "خلوص نیت",
      id: "Ikhlas",
      tr: "İhlas"
    },
    verses_count: 4,
    revelation_place: "makkah",
    revelation_order: 22,
    bismillah_pre: true,
    juz: [30],
    page: 604
  },
  {
    id: 113,
    name_ar: "الفلق",
    name_en: "Al-Falaq",
    name_translation: {
      ar: "الفلق",
      en: "The Daybreak",
      fr: "L'Aube Naissante",
      ur: "صبح کی روشنی",
      id: "Waktu Subuh",
      tr: "Felak"
    },
    verses_count: 5,
    revelation_place: "makkah",
    revelation_order: 20,
    bismillah_pre: true,
    juz: [30],
    page: 604
  },
  {
    id: 114,
    name_ar: "الناس",
    name_en: "An-Nas",
    name_translation: {
      ar: "الناس",
      en: "Mankind",
      fr: "Les Hommes",
      ur: "انسان",
      id: "Manusia",
      tr: "Nas"
    },
    verses_count: 6,
    revelation_place: "makkah",
    revelation_order: 21,
    bismillah_pre: true,
    juz: [30],
    page: 604
  }
];

export function getSurahById(id: number): SurahInfo | undefined {
  return SURAHS_LIST.find((s) => s.id === id);
}
