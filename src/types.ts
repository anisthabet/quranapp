export type Language = 'ar' | 'en' | 'fr' | 'ur' | 'id' | 'tr';

export interface SurahInfo {
  id: number;
  name_ar: string;
  name_en: string;
  name_translation: Record<Language, string>;
  verses_count: number;
  revelation_place: 'makkah' | 'madinah';
  revelation_order: number;
  bismillah_pre: boolean;
  juz: number[];
  page: number;
}

export interface Ayah {
  numberInSurah: number;
  numberInQuran: number;
  juz: number;
  page: number;
  text_ar: string;
  translations: Record<Language, string>;
  transliteration?: string;
  audioUrl?: string;
}

export interface Reciter {
  id: string;
  name_ar: string;
  name_en: string;
  style: string;
  country: string;
  avatarUrl: string;
  subfolder: string; // EveryAyah or MP3Quran folder code
  serverType: 'everyayah' | 'mp3quran';
  surahAudioPattern?: string; // template URL for surah mp3
}

export interface DhikrItem {
  id: string;
  categoryId: string;
  title_ar: string;
  title_en: string;
  text_ar: string;
  transliteration: string;
  translations: Record<Language, string>;
  virtue?: Record<Language, string>;
  targetCount: number;
  source?: string;
}

export interface DhikrCategory {
  id: string;
  name_ar: string;
  name_en: string;
  translations: Record<Language, string>;
  icon: string;
  color: string;
}

export interface Bookmark {
  id: string;
  surahId: number;
  surahNameAr: string;
  surahNameEn: string;
  ayahNumber: number;
  timestamp: string;
  note?: string;
}

export interface ReadingHistoryEntry {
  date: string; // YYYY-MM-DD
  surahId: number;
  ayahCount: number;
  pagesCount: number;
}

export interface KhatmahPlan {
  id: string;
  title: string;
  targetDays: number;
  startDate: string;
  targetDate: string;
  dailyTargetPages: number;
  status: 'active' | 'completed';
}

export interface ReadingProgress {
  lastReadSurah: number;
  lastReadAyah: number;
  completedSurahs: number[]; // surah IDs completely read
  completedJuz: number[]; // 1-30 juz completed
  completedAyahs: Record<string, boolean>; // key: "surah:ayah"
  totalAyahsRead: number;
  totalKhatmahsCompleted: number;
  bookmarks: Bookmark[];
  history: ReadingHistoryEntry[];
  currentPlan?: KhatmahPlan;
  streakDays: number;
  lastActiveDate: string;
}

export interface IslamicEvent {
  id: string;
  hijriMonth: number; // 1-12
  hijriDay: number;
  title: Record<Language, string>;
  description: Record<Language, string>;
  isFastingDay?: boolean;
  isHoliday?: boolean;
  virtue?: Record<Language, string>;
}
