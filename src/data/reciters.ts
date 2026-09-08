import { Reciter } from '../types';
import luhaidanAvatar from '../assets/images/muhammad_al_luhaidan_real.png';
import shatriAvatar from '../assets/images/abu_bakr_al_shatri_real.png';

export const RECITERS_LIST: Reciter[] = [
  {
    id: 'mishary_alafasy',
    name_ar: 'مشاري راشد العفاسي',
    name_en: 'Mishary Rashid Alafasy',
    style: 'مرتل (Murattal)',
    country: 'Kuwait',
    avatarUrl: 'https://upload.wikimedia.org/wikipedia/commons/2/24/%D0%9C%D0%B8%D1%88%D0%B0%D1%80%D0%B8_%D0%A0%D0%B0%D1%88%D0%B8%D0%B4.jpg',
    subfolder: 'Alafasy_128kbps',
    serverType: 'everyayah',
    surahAudioPattern: 'https://server8.mp3quran.net/afs'
  },
  {
    id: 'muhammad_al_luhaidan',
    name_ar: 'محمد اللحيدان',
    name_en: 'Muhammad Al-Luhaidan',
    style: 'تلاوة خاشعة وبكاء (Emotional)',
    country: 'Saudi Arabia',
    avatarUrl: luhaidanAvatar,
    subfolder: 'Alafasy_128kbps',
    serverType: 'everyayah',
    surahAudioPattern: 'https://server8.mp3quran.net/lhdan'
  },
  {
    id: 'abdul_basit_murattal',
    name_ar: 'عبد الباسط عبد الصمد (مرتل)',
    name_en: 'Abdul Basit Abdul Samad (Murattal)',
    style: 'مرتل (Murattal)',
    country: 'Egypt',
    avatarUrl: 'https://upload.wikimedia.org/wikipedia/commons/thumb/9/9d/Abdul_Basit_Abdul_Samad_at_Centenary_Celebration_Of_Darul_Uloom_Deoband_1980.jpg/500px-Abdul_Basit_Abdul_Samad_at_Centenary_Celebration_Of_Darul_Uloom_Deoband_1980.jpg',
    subfolder: 'Abdul_Basit_Murattal_192kbps',
    serverType: 'everyayah',
    surahAudioPattern: 'https://server7.mp3quran.net/basit'
  },
  {
    id: 'abdul_basit_mujawwad',
    name_ar: 'عبد الباسط عبد الصمد (مجود)',
    name_en: 'Abdul Basit Abdul Samad (Mujawwad)',
    style: 'مجود (Mujawwad)',
    country: 'Egypt',
    avatarUrl: 'https://upload.wikimedia.org/wikipedia/commons/thumb/9/9d/Abdul_Basit_Abdul_Samad_at_Centenary_Celebration_Of_Darul_Uloom_Deoband_1980.jpg/500px-Abdul_Basit_Abdul_Samad_at_Centenary_Celebration_Of_Darul_Uloom_Deoband_1980.jpg',
    subfolder: 'Abdul_Basit_Mujawwad_128kbps',
    serverType: 'everyayah',
    surahAudioPattern: 'https://server7.mp3quran.net/basit/Almusshaf-Al-Mojawwad'
  },
  {
    id: 'maher_al_muaiqly',
    name_ar: 'ماهر المعيقلي',
    name_en: 'Maher Al-Muaiqly',
    style: 'مرتل (Murattal)',
    country: 'Saudi Arabia',
    avatarUrl: 'https://upload.wikimedia.org/wikipedia/commons/9/90/Maher_Al_Mueaqly.png',
    subfolder: 'Maher_AlMuaiqly_64kbps',
    serverType: 'everyayah',
    surahAudioPattern: 'https://server12.mp3quran.net/maher'
  },
  {
    id: 'saad_al_ghamdi',
    name_ar: 'سعد الغامدي',
    name_en: 'Saad Al-Ghamdi',
    style: 'مرتل (Murattal)',
    country: 'Saudi Arabia',
    avatarUrl: 'https://upload.wikimedia.org/wikipedia/commons/thumb/4/43/Saad_al_Ghamdi.jpg/500px-Saad_al_Ghamdi.jpg',
    subfolder: 'Ghamadi_40kbps',
    serverType: 'everyayah',
    surahAudioPattern: 'https://server7.mp3quran.net/s_gmd'
  },
  {
    id: 'mahmoud_al_husary',
    name_ar: 'محمود خليل الحصري',
    name_en: 'Mahmoud Khalil Al-Husary',
    style: 'مرتل معلم (Educational Murattal)',
    country: 'Egypt',
    avatarUrl: 'https://upload.wikimedia.org/wikipedia/commons/7/70/Hussary.jpg',
    subfolder: 'Husary_128kbps',
    serverType: 'everyayah',
    surahAudioPattern: 'https://server13.mp3quran.net/husr'
  },
  {
    id: 'abdul_rahman_al_sudais',
    name_ar: 'عبد الرحمن السديس',
    name_en: 'Abdul Rahman Al-Sudais',
    style: 'حرم مكي (Haram Makkah)',
    country: 'Saudi Arabia',
    avatarUrl: 'https://upload.wikimedia.org/wikipedia/commons/thumb/1/18/Abdul-Rahman_Al-Sudais_%28Cropped%2C_2011%29.jpg/500px-Abdul-Rahman_Al-Sudais_%28Cropped%2C_2011%29.jpg',
    subfolder: 'Abdurrahmaan_As-Sudais_192kbps',
    serverType: 'everyayah',
    surahAudioPattern: 'https://server11.mp3quran.net/sds'
  },
  {
    id: 'abu_bakr_al_shatri',
    name_ar: 'أبو بكر الشاطري',
    name_en: 'Abu Bakr Al-Shatri',
    style: 'مرتل خاشع (Emotional)',
    country: 'Yemen / Saudi Arabia',
    avatarUrl: shatriAvatar,
    subfolder: 'Abu_Bakr_Ash-Shaatree_128kbps',
    serverType: 'everyayah',
    surahAudioPattern: 'https://server11.mp3quran.net/shatri'
  },
  {
    id: 'yasser_al_dosari',
    name_ar: 'ياسر الدوسري',
    name_en: 'Yasser Al-Dosari',
    style: 'حرم مكي (Haram Makkah)',
    country: 'Saudi Arabia',
    avatarUrl: 'https://upload.wikimedia.org/wikipedia/commons/thumb/8/8b/Yasser_Al-Dosari_%28cropped%29.jpg/500px-Yasser_Al-Dosari_%28cropped%29.jpg',
    subfolder: 'Yasser_Ad-Dussary_128kbps',
    serverType: 'everyayah',
    surahAudioPattern: 'https://server11.mp3quran.net/yasser'
  },
  {
    id: 'saud_al_shuraim',
    name_ar: 'سعود الشريم',
    name_en: 'Saud Al-Shuraim',
    style: 'حرم مكي (Haram Makkah)',
    country: 'Saudi Arabia',
    avatarUrl: 'https://upload.wikimedia.org/wikipedia/commons/5/5d/Saud_Shuraim_doing_the_Khutbah.png',
    subfolder: 'Saood_ash-Shuraym_128kbps',
    serverType: 'everyayah',
    surahAudioPattern: 'https://server7.mp3quran.net/shur'
  }
];

export function getAyahAudioUrl(reciter: Reciter, surahId: number, ayahNumber: number): string {
  const padSurah = String(surahId).padStart(3, '0');
  const padAyah = String(ayahNumber).padStart(3, '0');
  return `https://everyayah.com/data/${reciter.subfolder}/${padSurah}${padAyah}.mp3`;
}

export function getSurahAudioUrl(reciter: Reciter, surahId: number): string {
  const padSurah = String(surahId).padStart(3, '0');
  if (reciter.surahAudioPattern) {
    return `${reciter.surahAudioPattern}/${padSurah}.mp3`;
  }
  // Fallback to mp3quran afs
  return `https://server8.mp3quran.net/afs/${padSurah}.mp3`;
}
