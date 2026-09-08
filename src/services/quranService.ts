import { Ayah, Language } from '../types';
import { SURAHS_LIST } from '../data/surahs';

// Built-in offline fallback cache for key surahs
const SAMPLE_SURAHS_DATA: Record<number, { text_ar: string; translation_en: string; translation_fr: string; translation_ur: string }[]> = {
  // Al-Fatihah (1)
  1: [
    {
      text_ar: "بِسْمِ اللَّهِ الرَّحْمَٰنِ الرَّحِيمِ",
      translation_en: "In the name of Allah, the Entirely Merciful, the Especially Merciful.",
      translation_fr: "Au nom d'Allah, le Tout Miséricordieux, le Très Miséricordieux.",
      translation_ur: "اللہ کے نام سے جو بڑا مہربان نہایت رحم فرمانے والا ہے۔"
    },
    {
      text_ar: "الْحَمْدُ لِلَّهِ رَبِّ الْعَالَمِينَ",
      translation_en: "[All] praise is [due] to Allah, Lord of the worlds -",
      translation_fr: "Louange à Allah, Seigneur de l'univers.",
      translation_ur: "سب تعریفیں اللہ ہی کے لیے ہیں جو تمام جہانوں کا پروردگار ہے۔"
    },
    {
      text_ar: "الرَّحْمَٰنِ الرَّحِيمِ",
      translation_en: "The Entirely Merciful, the Especially Merciful,",
      translation_fr: "Le Tout Miséricordieux, le Très Miséricordieux,",
      translation_ur: "بہت مہربان نہایت رحم کرنے والا ہے۔"
    },
    {
      text_ar: "مَالِكِ يَوْمِ الدِّينِ",
      translation_en: "Sovereign of the Day of Recompense.",
      translation_fr: "Maître du Jour de la rétribution.",
      translation_ur: "روز جزا کا مالک ہے۔"
    },
    {
      text_ar: "إِيَّاكَ نَعْبُدُ وَإِيَّاكَ نَسْتَعِينُ",
      translation_en: "It is You we worship and You we ask for help.",
      translation_fr: "C'est Toi [Seul] que nous adorons, et c'est Toi [Seul] dont nous implorons secours.",
      translation_ur: "ہم تیری ہی عبادت کرتے ہیں اور تجھ ہی سے مدد مانگتے ہیں۔"
    },
    {
      text_ar: "اهْدِنَا الصِّرَاطَ الْمُسْتَقِيمَ",
      translation_en: "Guide us to the straight path -",
      translation_fr: "Guide-nous dans le droit chemin,",
      translation_ur: "ہمیں سیدھا راستہ دکھا۔"
    },
    {
      text_ar: "صِرَاطَ الَّذِينَ أَنْعَمْتَ عَلَيْهِمْ غَيْرِ الْمَغْضُوبِ عَلَيْهِمْ وَلَا الضَّالِّينَ",
      translation_en: "The path of those upon whom You have bestowed favor, not of those who have evoked [Your] anger or of those who are astray.",
      translation_fr: "Le chemin de ceux que Tu as comblés de faveurs, non pas de ceux qui ont encouru Ta colère, ni des égarés.",
      translation_ur: "ان لوگوں کا راستہ جن پر تو نے انعام فرمایا، نہ ان کا جن پر غضب ہوا اور نہ گمراہوں کا۔"
    }
  ],
  // Al-Ikhlas (112)
  112: [
    {
      text_ar: "قُلْ هُوَ اللَّهُ أَحَدٌ",
      translation_en: "Say, 'He is Allah, [who is] One,",
      translation_fr: "Dis : 'Il est Allah, Unique.",
      translation_ur: "کہہ دیجیے کہ وہ اللہ ایک ہے۔"
    },
    {
      text_ar: "اللَّهُ الصَّمَدُ",
      translation_en: "Allah, the Eternal Refuge.",
      translation_fr: "Allah, Le Seul à être imploré pour ce que nous désirons.",
      translation_ur: "اللہ بے نیاز ہے۔"
    },
    {
      text_ar: "لَمْ يَلِدْ وَلَمْ يُولَدْ",
      translation_en: "He neither begets nor is born,",
      translation_fr: "Il n'a jamais engendré, n'a pas été engendré non plus.",
      translation_ur: "نہ اس کی کوئی اولاد ہے اور نہ وہ کسی کی اولاد ہے۔"
    },
    {
      text_ar: "وَلَمْ يَكُن لَّهُ كُفُوًا أَحَدٌ",
      translation_en: "Nor is there to Him any equivalent.'",
      translation_fr: "Et nul n'est égal à Lui.'",
      translation_ur: "اور نہ کوئی اس کا ہمسر ہے۔"
    }
  ],
  // Al-Falaq (113)
  113: [
    {
      text_ar: "قُلْ أَعُوذُ بِرَبِّ الْفَلَقِ",
      translation_en: "Say, 'I seek refuge in the Lord of daybreak",
      translation_fr: "Dis : 'Je cherche protection auprès du Seigneur de l'aube naissante,",
      translation_ur: "کہہ دیجیے کہ میں صبح کے رب کی پناہ مانگتا ہوں۔"
    },
    {
      text_ar: "مِن شَرِّ مَا خَلَقَ",
      translation_en: "From the evil of that which He created",
      translation_fr: "Contre le mal des êtres qu'Il a créés,",
      translation_ur: "ہر اس چیز کے شر سے جو اس نے پیدا کی۔"
    },
    {
      text_ar: "وَمِن شَرِّ غَاسِقٍ إِذَا وَقَبَ",
      translation_en: "And from the evil of darkness when it settles",
      translation_fr: "Contre le mal de l'obscurité quand elle s'approfondit,",
      translation_ur: "اور اندھیری رات کے شر سے جب وہ چھا جائے۔"
    },
    {
      text_ar: "وَمِن شَرِّ النَّفَّاثَاتِ فِي الْعُقَدِ",
      translation_en: "And from the evil of the blowers in knots",
      translation_fr: "Contre le mal de celles qui soufflent sur les nœuds,",
      translation_ur: "اور گرہوں میں پھونکنے والیوں کے شر سے۔"
    },
    {
      text_ar: "وَمِن شَرِّ حَاسِدٍ إِذَا حَسَدَ",
      translation_en: "And from the evil of an envier when he envies.'",
      translation_fr: "Et contre le mal de l'envieux quand il envie.'",
      translation_ur: "اور حسد کرنے والے کے شر سے جب وہ حسد کرے۔"
    }
  ],
  // An-Nas (114)
  114: [
    {
      text_ar: "قُلْ أَعُوذُ بِرَبِّ النَّاسِ",
      translation_en: "Say, 'I seek refuge in the Lord of mankind,",
      translation_fr: "Dis : 'Je cherche protection auprès du Seigneur des hommes.",
      translation_ur: "کہہ دیجیے کہ میں لوگوں کے پروردگار کی پناہ مانگتا ہوں۔"
    },
    {
      text_ar: "مَلِكِ النَّاسِ",
      translation_en: "The Sovereign of mankind,",
      translation_fr: "Le Souverain des hommes,",
      translation_ur: "لوگوں کے بادشاہ کی۔"
    },
    {
      text_ar: "إِلَٰهِ النَّاسِ",
      translation_en: "The God of mankind,",
      translation_fr: "Le Dieu des hommes,",
      translation_ur: "لوگوں کے معبود کی۔"
    },
    {
      text_ar: "مِن شَرِّ الْوَسْوَاسِ الْخَنَّاسِ",
      translation_en: "From the evil of the retreating whisperer -",
      translation_fr: "Contre le mal du mauvais conseiller, furtif,",
      translation_ur: "وسوسہ ڈالنے والے پیچھے ہٹ جانے والے کے شر سے۔"
    },
    {
      text_ar: "الَّذِي يُوَسْوِسُ فِي صُدُورِ النَّاسِ",
      translation_en: "Who whispers [evil] into the breasts of mankind -",
      translation_fr: "Qui souffle le mal dans les poitrines des hommes,",
      translation_ur: "جو لوگوں کے سینوں میں وسوسہ ڈالتا ہے۔"
    },
    {
      text_ar: "مِنَ الْجِنَّةِ وَالنَّاسِ",
      translation_en: "From among the jinn and mankind.'",
      translation_fr: "Qu'il soit d'entre les djinns ou les hommes.'",
      translation_ur: "خواہ وہ جنوں میں سے ہو یا انسانوں میں سے۔"
    }
  ],
  // Al-Kawthar (108)
  108: [
    {
      text_ar: "إِنَّا أَعْطَيْنَاكَ الْكَوْثَرَ",
      translation_en: "Indeed, We have granted you, [O Muhammad], al-Kawthar.",
      translation_fr: "Nous t'avons certes accordé l'Abondance.",
      translation_ur: "بے شک ہم نے آپ کو کوثر عطا فرمایا۔"
    },
    {
      text_ar: "فَصَلِّ لِرَبِّكَ وَانْحَرْ",
      translation_en: "So pray to your Lord and sacrifice [to Him alone].",
      translation_fr: "Accomplis donc la Salât pour ton Seigneur et sacrifie.",
      translation_ur: "پس اپنے رب کے لیے نماز پڑھیے اور قربانی کیجیے۔"
    },
    {
      text_ar: "إِنَّ شَانِئَكَ هُوَ الْأَبْتَرُ",
      translation_en: "Indeed, your enemy is the one cut off.",
      translation_fr: "Celui qui te hait sera certes sans postérité.",
      translation_ur: "یقیناً آپ کا دشمن ہی بے نام و نشاں رہنے والا ہے۔"
    }
  ],
  // Al-Asr (103)
  103: [
    {
      text_ar: "وَالْعَصْرِ",
      translation_en: "By time,",
      translation_fr: "Par le Temps !",
      translation_ur: "زمانے کی قسم!"
    },
    {
      text_ar: "إِنَّ الْإِنسَانَ لَفِي خُسْرٍ",
      translation_en: "Indeed, mankind is in loss,",
      translation_fr: "L'homme est certes, en perdition,",
      translation_ur: "بے شک انسان خسارے میں ہے،"
    },
    {
      text_ar: "إِلَّا الَّذِينَ آمَنُوا وَعَمِلُوا الصَّالِحَاتِ وَتَوَاصَوْا بِالْحَقِّ وَتَوَاصَوْا بِالصَّبْرِ",
      translation_en: "Except for those who have believed and done righteous deeds and advised each other to truth and advised each other to patience.",
      translation_fr: "Sauf ceux qui croient et accomplissent les bonnes œuvres, s'enjoignent mutuellement la vérité et s'enjoignent mutuellement l'endurance.",
      translation_ur: "سوائے ان لوگوں کے جو ایمان لائے اور نیک عمل کیے اور ایک دوسرے کو حق اور صبر کی تلقین کی۔"
    }
  ]
};

const surahCache = new Map<number, Ayah[]>();

/**
 * Fetch verses of a surah from Al-Quran Cloud API or fallback
 */
export async function fetchSurahAyahs(surahId: number, lang: Language = 'en'): Promise<Ayah[]> {
  if (surahCache.has(surahId)) {
    return surahCache.get(surahId)!;
  }

  const surahMeta = SURAHS_LIST.find((s) => s.id === surahId);
  const totalVerses = surahMeta ? surahMeta.verses_count : 7;
  const juzStart = surahMeta && surahMeta.juz.length > 0 ? surahMeta.juz[0] : 1;
  const pageStart = surahMeta ? surahMeta.page : 1;

  try {
    // Attempt online fetch from Al-Quran Cloud API with timeout
    const controller = new AbortController();
    const timeout = setTimeout(() => controller.abort(), 6000);

    // Fetch Arabic Uthmani text + English translation
    const response = await fetch(
      `https://api.alquran.cloud/v1/surah/${surahId}/editions/quran-uthmani,en.sahih,fr.hamidullah`,
      { signal: controller.signal }
    );
    clearTimeout(timeout);

    if (response.ok) {
      const json = await response.json();
      if (json.data && json.data.length >= 2) {
        const arEdition = json.data[0];
        const enEdition = json.data[1];
        const frEdition = json.data[2] || enEdition;

        const ayahs: Ayah[] = arEdition.ayahs.map((a: { numberInSurah: number; number: number; text: string; juz: number; page: number }, idx: number) => {
          const enText = enEdition.ayahs[idx]?.text || '';
          const frText = frEdition.ayahs[idx]?.text || '';
          
          return {
            numberInSurah: a.numberInSurah,
            numberInQuran: a.number,
            juz: a.juz || juzStart,
            page: a.page || pageStart,
            text_ar: a.text,
            translations: {
              ar: a.text,
              en: enText,
              fr: frText,
              ur: enText, // Urdu can display or fallback
              id: enText,
              tr: enText
            }
          };
        });

        surahCache.set(surahId, ayahs);
        return ayahs;
      }
    }
  } catch {
    // Network failed or timed out, fallback to local dataset
  }

  // Use built-in sample data if present
  if (SAMPLE_SURAHS_DATA[surahId]) {
    const ayahs: Ayah[] = SAMPLE_SURAHS_DATA[surahId].map((sample, idx) => ({
      numberInSurah: idx + 1,
      numberInQuran: idx + 1,
      juz: juzStart,
      page: pageStart,
      text_ar: sample.text_ar,
      translations: {
        ar: sample.text_ar,
        en: sample.translation_en,
        fr: sample.translation_fr,
        ur: sample.translation_ur,
        id: sample.translation_en,
        tr: sample.translation_en
      }
    }));
    surahCache.set(surahId, ayahs);
    return ayahs;
  }

  // Synthesize clean placeholders for other surahs if offline
  const placeholderAyahs: Ayah[] = Array.from({ length: totalVerses }, (_, i) => {
    const num = i + 1;
    return {
      numberInSurah: num,
      numberInQuran: num,
      juz: juzStart,
      page: pageStart,
      text_ar: `آية ${num} من ${surahMeta?.name_ar || 'السورة'} المباركة`,
      translations: {
        ar: `الآية الكريمة رقم ${num}`,
        en: `Verse ${num} of Surah ${surahMeta?.name_en || ''}`,
        fr: `Verset ${num} de la sourate ${surahMeta?.name_en || ''}`,
        ur: `سورۃ کی آیت نمبر ${num}`,
        id: `Ayat ${num} dari Surah ${surahMeta?.name_en || ''}`,
        tr: `Ayet ${num} - Sure ${surahMeta?.name_en || ''}`
      }
    };
  });

  return placeholderAyahs;
}
