import { IslamicEvent, Language } from '../types';

export const HIJRI_MONTHS: Record<number, { ar: string; en: string; fr: string; ur: string; id: string; tr: string }> = {
  1: { ar: 'مُحَرَّم', en: 'Muharram', fr: 'Mouharram', ur: 'محرم الحرام', id: 'Muharram', tr: 'Muharrem' },
  2: { ar: 'صَفَر', en: 'Safar', fr: 'Safar', ur: 'صفر المظفر', id: 'Safar', tr: 'Safer' },
  3: { ar: 'رَبِيع الأوّل', en: "Rabi' al-Awwal", fr: "Rabi' al-Awwal", ur: 'ربیع الاول', id: "Rabi'ul Awal", tr: 'Rebiülevvel' },
  4: { ar: 'رَبِيع الآخِر', en: "Rabi' ath-Thani", fr: "Rabi' ath-Thani", ur: 'ربیع الثانی', id: "Rabi'ul Akhir", tr: 'Rebiülahir' },
  5: { ar: 'جُمَادَى الأُولَى', en: 'Jumada al-Ula', fr: 'Joumada al-Oula', ur: 'جمادی الاول', id: 'Jumadil Ula', tr: 'Cemaziyelevvel' },
  6: { ar: 'جُمَادَى الآخِرَة', en: 'Jumada al-Akhirah', fr: 'Joumada al-Akhirah', ur: 'جمادی الثانی', id: 'Jumadil Akhir', tr: 'Cemaziyelahir' },
  7: { ar: 'رَجَب', en: 'Rajab', fr: 'Rajab', ur: 'رجب المرجب', id: 'Rajab', tr: 'Recep' },
  8: { ar: 'شَعْبَان', en: "Sha'ban", fr: "Cha'ban", ur: 'شعبان المعظم', id: "Sya'ban", tr: 'Şaban' },
  9: { ar: 'رَمَضَان', en: 'Ramadan', fr: 'Ramadan', ur: 'رمضان المبارک', id: 'Ramadhan', tr: 'Ramazan' },
  10: { ar: 'شَوَّال', en: 'Shawwal', fr: 'Chawwal', ur: 'شوال المکرم', id: 'Syawal', tr: 'Şevval' },
  11: { ar: 'ذُو القَعْدَة', en: "Dhu al-Qi'dah", fr: "Dhou al-Qi'da", ur: 'ذو القعدہ', id: "Dzulqa'dah", tr: 'Zilkade' },
  12: { ar: 'ذُو الحِجَّة', en: 'Dhu al-Hijjah', fr: 'Dhou al-Hijja', ur: 'ذو الحجہ', id: 'Dzulhijjah', tr: 'Zilhicce' }
};

export const ISLAMIC_EVENTS: IslamicEvent[] = [
  {
    id: 'islamic_new_year',
    hijriMonth: 1,
    hijriDay: 1,
    title: {
      ar: 'رأس السنة الهجرية',
      en: 'Islamic New Year',
      fr: 'Nouvel An Hégirien',
      ur: 'نیا ہجری سال',
      id: 'Tahun Baru Islam',
      tr: 'Hicri Yılbaşı'
    },
    description: {
      ar: 'ذكرى هجرة النبي محمد ﷺ من مكة المكرمة إلى المدينة المنورة وتأسيس الدولة الإسلامية.',
      en: 'Commemorates the Hijrah (migration) of Prophet Muhammad ﷺ from Makkah to Madinah.',
      fr: 'Commémoration de l\'émigration du Prophète ﷺ de La Mecque vers Médine.',
      ur: 'نبی کریم ﷺ کی مکہ سے مدینہ منورہ کی طرف ہجرت کی یادگار۔',
      id: 'Peringatan hijrah Nabi Muhammad ﷺ dari Makkah ke Madinah.',
      tr: 'Hz. Peygamber\'in Mekke\'den Medine\'ye hicretinin ve hicri takvimin başlangıcı.'
    },
    isHoliday: true
  },
  {
    id: 'ashura',
    hijriMonth: 1,
    hijriDay: 10,
    title: {
      ar: 'يوم عاشوراء',
      en: 'Day of Ashura',
      fr: 'Jour d\'Achoura',
      ur: 'یوم عاشوراء',
      id: 'Hari Asyura',
      tr: 'Aşure Günü'
    },
    description: {
      ar: 'اليوم الذي نجى الله فيه موسى عليه السلام وقومه من فرعون، ويستحب صيامه.',
      en: 'The day Allah saved Prophet Musa (Moses) and his followers from Pharaoh. Sunnah to fast.',
      fr: 'Jour où Allah sauva Moïse (Moussa) et son peuple de Pharaon. Jeûne très recommandé.',
      ur: 'جس دن اللہ نے حضرت موسیٰ علیہ السلام اور ان کی قوم کو فرعون سے نجات دی، روزہ رکھنا سنت ہے۔',
      id: 'Hari diselamatkannya Nabi Musa dari Fir\'aun. Disunnahkan berpuasa.',
      tr: 'Hz. Musa ve kavminin Firavun\'dan kurtulduğu gün. Oruç tutmak sünnettir.'
    },
    isFastingDay: true,
    virtue: {
      ar: 'صيام يوم عاشوراء أحتسب على الله أن يكفر السنة التي قبله (رواه مسلم).',
      en: 'Fasting the day of Ashura expiates the sins of the previous year (Sahih Muslim).',
      fr: 'Le jeûne du jour d\'Achoura expie les péchés de l\'année écoulée.',
      ur: 'عاشوراء کا روزہ پچھلے ایک سال کے گناہوں کا کفارہ ہے (مسلم)۔',
      id: 'Puasa Asyura menghapuskan dosa setahun yang lalu (HR. Muslim).',
      tr: 'Aşure orucu geçmiş bir senenin günahlarına kefaret olur.'
    }
  },
  {
    id: 'mawlid',
    hijriMonth: 3,
    hijriDay: 12,
    title: {
      ar: 'المولد النبوي الشريف',
      en: 'Mawlid an-Nabi (Prophet\'s Birthday)',
      fr: 'Mawlid an-Nabi (Naissance du Prophète)',
      ur: 'عید میلاد النبی ﷺ',
      id: 'Maulid Nabi Muhammad ﷺ',
      tr: 'Mevlid Kandili'
    },
    description: {
      ar: 'ذكرى مولد خاتم الأنبياء والمرسلين نبينا محمد ﷺ رحمة للعالمين.',
      en: 'Birth of Prophet Muhammad ﷺ, sent as a mercy to all creation.',
      fr: 'Naissance du Prophète Muhammad ﷺ, envoyé comme miséricorde pour l\'univers.',
      ur: 'خاتم النبیین سیدنا محمد رسول اللہ ﷺ کی ولادت باسعادت۔',
      id: 'Kelahiran junjungan kita Nabi Muhammad ﷺ sebagai rahmat bagi semesta alam.',
      tr: 'Alemlere rahmet olarak gönderilen Hz. Muhammed\'in (s.a.v.) dünyayı teşrifi.'
    },
    isHoliday: true
  },
  {
    id: 'isra_miraj',
    hijriMonth: 7,
    hijriDay: 27,
    title: {
      ar: 'الإسراء والمعراج',
      en: 'Al-Isra and Al-Mi\'raj',
      fr: 'Al-Isra et Al-Mi\'raj',
      ur: 'شب معراج',
      id: 'Isra Mi\'raj',
      tr: 'Miraç Kandili'
    },
    description: {
      ar: 'معجزة رحلة النبي ﷺ من المسجد الحرام إلى المسجد الأقصى ثم العروج إلى السماوات العلى وفرض الصلوات الخمس.',
      en: 'The miraculous Night Journey and Ascension to the Heavens where five daily prayers were ordained.',
      fr: 'Le voyage nocturne miraculeux et l\'ascension céleste où furent prescrites les 5 prières quotidiennes.',
      ur: 'مسجد حرام سے مسجد اقصیٰ تک کا سفر اور آسمانوں پر عروج جہاں پانچ نمازیں فرض کی گئیں۔',
      id: 'Perjalanan malam dan kenaikan Rasulullah ﷺ ke langit di mana shalat 5 waktu diwajibkan.',
      tr: 'Peygamber Efendimiz\'in göklere yükselişi ve 5 vakit namazın farz kılındığı gece.'
    }
  },
  {
    id: 'nisf_shaban',
    hijriMonth: 8,
    hijriDay: 15,
    title: {
      ar: 'ليلة النصف من شعبان',
      en: 'Mid-Sha\'ban (Laylat al-Bara\'ah)',
      fr: 'Nuit de la Mi-Cha\'ban',
      ur: 'شب برائت',
      id: 'Malam Nisfu Sya\'ban',
      tr: 'Berat Kandili'
    },
    description: {
      ar: 'ليلة مباركة يتنزل فيها عفو الله ومغفرته لعباده المؤمنين.',
      en: 'Blessed night of divine forgiveness, supplication, and spiritual renewal.',
      fr: 'Nuit bénie de pardon et de miséricorde divine pour les serviteurs.',
      ur: 'مغفرت اور رحمت کی بابرکت رات جس میں گناہوں سے خلاصی نصیب ہوتی ہے۔',
      id: 'Malam penuh ampunan dan keberkahan di pertengahan bulan Sya\'ban.',
      tr: 'Günahların affedildiği, rahmet ve mağfiret dolu mübarek gece.'
    }
  },
  {
    id: 'ramadan_start',
    hijriMonth: 9,
    hijriDay: 1,
    title: {
      ar: 'أول أيام شهر رمضان المبارك',
      en: 'First Day of Ramadan',
      fr: 'Premier Jour de Ramadan',
      ur: 'یکم رمضان المبارک',
      id: 'Awal Bulan Ramadhan',
      tr: 'Ramazan Ayı Başlangıcı'
    },
    description: {
      ar: 'بداية شهر الصيام والقيام ونزول القرآن الكريم، شهر الرحمة والمغفرة والعتق من النيران.',
      en: 'Beginning of the blessed month of fasting, nightly Taraweeh, and Quran revelation.',
      fr: 'Début du mois sacré du jeûne, de la prière et de la descente du Saint Coran.',
      ur: 'ماہ صیام اور قرآن کے نزول کے مقدس مہینے کا آغاز۔',
      id: 'Bulan suci puasa, qiyamul lail, dan diturunkannya permulaan Al-Qur\'an.',
      tr: 'Oruç, ibadet ve Kur\'an-ı Kerim\'in indirildiği mübarek Ramazan ayının başlangıcı.'
    },
    isFastingDay: true,
    isHoliday: true
  },
  {
    id: 'laylat_al_qadr',
    hijriMonth: 9,
    hijriDay: 27,
    title: {
      ar: 'ليلة القدر المباركة (المتحراة)',
      en: 'Laylat al-Qadr (Night of Decree)',
      fr: 'Laylat al-Qadr (Nuit du Destin)',
      ur: 'شب قدر',
      id: 'Lailatul Qadar',
      tr: 'Kadir Gecesi'
    },
    description: {
      ar: 'خير من ألف شهر، نزل فيها القرآن الكريم وتتنزل فيها الملائكة والروح.',
      en: 'A night better than a thousand months, marked by the sending down of the Quran and angels.',
      fr: 'Une nuit meilleure que mille mois, où les anges descendent avec la paix jusqu\'à l\'aube.',
      ur: 'ہزار مہینوں سے افضل رات جس میں فرشتے سلامتی کے ساتھ اترتے ہیں۔',
      id: 'Malam yang lebih baik dari seribu bulan, para malaikat turun membawa keselamatan.',
      tr: 'Bin aydan daha hayırlı olan, Kur\'an-ı Kerim\'in indirilmeye başlandığı mübarek gece.'
    }
  },
  {
    id: 'eid_al_fitr',
    hijriMonth: 10,
    hijriDay: 1,
    title: {
      ar: 'عيد الفطر المبارك',
      en: 'Eid al-Fitr',
      fr: 'Aïd al-Fitr',
      ur: 'عید الفطر',
      id: 'Hari Raya Idul Fitri',
      tr: 'Ramazan Bayramı'
    },
    description: {
      ar: 'عيد الفرح بإتمام فريضة صيام شهر رمضان وزكاة الفطر وصلة الرحم.',
      en: 'Joyous celebration marking the conclusion of the blessed fasting month of Ramadan.',
      fr: 'Grande fête marquant la rupture du jeûne et l\'accomplissement du mois de Ramadan.',
      ur: 'رمضان المبارک کے روزوں کی تکمیل پر خوشی و شکرانے کی عید۔',
      id: 'Hari kemenangan umat Islam setelah sebulan penuh berpuasa di bulan Ramadhan.',
      tr: 'Ramazan orucunun tamamlanmasıyla kutlanan sevinç ve kardeşlik bayramı.'
    },
    isHoliday: true
  },
  {
    id: 'day_of_arafah',
    hijriMonth: 12,
    hijriDay: 9,
    title: {
      ar: 'يوم عرفة',
      en: 'Day of Arafah',
      fr: 'Jour d\'Arafat',
      ur: 'یوم عرفہ',
      id: 'Hari Arafah',
      tr: 'Arefe Günü'
    },
    description: {
      ar: 'أعظم أيام السنة وركن الحج الأكبر، ويستحب صيامه لغير الحاج ويكفر سنتين.',
      en: 'The pinnacle day of Hajj. Fasting on this day for non-pilgrims expiates sins of two years.',
      fr: 'Le sommet du pèlerinage. Jeûner ce jour pour le non-pèlerin efface les péchés de 2 ans.',
      ur: 'حج کا سب سے اہم رکن اور سال کا سب سے افضل دن، روزہ رکھنا دو سال کے گناہوں کا کفارہ ہے۔',
      id: 'Puncak ibadah haji di padang Arafah. Disunnahkan berpuasa bagi yang tidak berhaji.',
      tr: 'Haccın en büyük rüknü olan vakfenin yapıldığı gün. Orucu iki senelik günahlara kefarettir.'
    },
    isFastingDay: true,
    virtue: {
      ar: 'صيام يوم عرفة أحتسب على الله أن يكفر السنة التي قبله والسنة التي بعده (رواه مسلم).',
      en: 'Fasting the Day of Arafah expiates sins of the previous year and the coming year (Sahih Muslim).',
      fr: 'Le jeûne du jour d\'Arafat expie les péchés de l\'année précédente et de l\'année suivante.',
      ur: 'عرفہ کے دن کا روزہ پچھلے اور اگلے سال کے گناہوں کو مٹا دیتا ہے (مسلم)۔',
      id: 'Puasa hari Arafah menghapuskan dosa setahun yang lalu dan setahun yang akan datang (HR. Muslim).',
      tr: 'Arefe günü orucu geçmiş ve gelecek birer senenin günahlarını bağışlatır.'
    }
  },
  {
    id: 'eid_al_adha',
    hijriMonth: 12,
    hijriDay: 10,
    title: {
      ar: 'عيد الأضحى المبارك',
      en: 'Eid al-Adha',
      fr: 'Aïd al-Adha',
      ur: 'عید الاضحیٰ',
      id: 'Hari Raya Idul Adha',
      tr: 'Kurban Bayramı'
    },
    description: {
      ar: 'عيد النحر ويوم الحج الأكبر وذكرى فداء إسماعيل عليه السلام بأضحية عظيمة.',
      en: 'Feast of Sacrifice commemorating Prophet Ibrahim\'s devotion and the Hajj pilgrimage.',
      fr: 'Fête du sacrifice commémorant l\'obéissance du Prophète Ibrahim et l\'apogée du Hajj.',
      ur: 'سنت ابراہیمی کی یاد میں قربانی کا پرمسرت تہوار اور حج کا بڑا دن۔',
      id: 'Hari raya kurban untuk memperingati keikhlasan Nabi Ibrahim dan Nabi Ismail \'alaihimassalam.',
      tr: 'Hz. İbrahim\'in teslimiyetini ve kurban ibadetini anlatan mübarek bayram.'
    },
    isHoliday: true
  }
];

export interface HijriDate {
  year: number;
  month: number;
  day: number;
  monthName: { ar: string; en: string; fr: string; ur: string; id: string; tr: string };
  dayOfWeek: number; // 0 = Sunday, 6 = Saturday
  gregorianDate: Date;
}

/**
 * Robust astronomical conversion from Gregorian to Hijri date
 * with support for manual offset (+/- days) based on moon sighting.
 */
export function getHijriDate(date: Date = new Date(), offsetDays: number = 0): HijriDate {
  // Apply offset in days
  const targetDate = new Date(date.getTime() + offsetDays * 86400000);
  
  const day = targetDate.getDate();
  const month = targetDate.getMonth(); // 0-indexed
  const year = targetDate.getFullYear();

  // Astronomical Julian day formula
  let m = month + 1;
  let y = year;
  if (m < 3) {
    y -= 1;
    m += 12;
  }

  const a = Math.floor(y / 100);
  const b = 2 - a + Math.floor(a / 4);
  const jd = Math.floor(365.25 * (y + 4716)) + Math.floor(30.6001 * (m + 1)) + day + b - 1524.5;

  // Islamic epoch jd: 1948439.5
  const z = jd - 1948439.5;
  const cyc = Math.floor(z / 10631);
  const rem = z - 10631 * cyc;
  const j = Math.floor((rem + 0.1335) / 354.367);
  const hYear = 30 * cyc + j + 1;
  const daysInYear = rem - Math.floor(j * 354.367);
  
  let hMonth = Math.min(12, Math.max(1, Math.floor((daysInYear + 28.5) / 29.5) + 1));
  let hDay = Math.floor(daysInYear - (hMonth - 1) * 29.5 + 1);

  if (hDay <= 0) {
    hMonth -= 1;
    if (hMonth <= 0) {
      hMonth = 12;
    }
    hDay = 29;
  } else if (hDay > 30) {
    hDay = 30;
  }

  return {
    year: hYear,
    month: hMonth,
    day: hDay,
    monthName: HIJRI_MONTHS[hMonth] || HIJRI_MONTHS[1],
    dayOfWeek: targetDate.getDay(),
    gregorianDate: targetDate
  };
}

/**
 * Returns whether a given Hijri day is one of the White Days (13, 14, 15)
 */
export function isWhiteDay(hijriDay: number): boolean {
  return hijriDay === 13 || hijriDay === 14 || hijriDay === 15;
}
