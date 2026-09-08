import { Bookmark, KhatmahPlan, Language, ReadingProgress, Reciter } from '../types';
import { RECITERS_LIST } from '../data/reciters';

const STORAGE_KEYS = {
  LANGUAGE: 'noor_language',
  PROGRESS: 'noor_reading_progress',
  SELECTED_RECITER: 'noor_selected_reciter',
  FONT_SIZE: 'noor_font_size',
  ADHKAR_PROGRESS: 'noor_adhkar_counts'
};

const DEFAULT_PROGRESS: ReadingProgress = {
  lastReadSurah: 1,
  lastReadAyah: 1,
  completedSurahs: [],
  completedJuz: [],
  completedAyahs: {},
  totalAyahsRead: 0,
  totalKhatmahsCompleted: 0,
  bookmarks: [
    {
      id: 'bm-initial',
      surahId: 1,
      surahNameAr: 'الفاتحة',
      surahNameEn: 'Al-Fatihah',
      ayahNumber: 1,
      timestamp: new Date().toISOString(),
      note: 'بداية الختمة المباركة'
    }
  ],
  history: [],
  currentPlan: {
    id: 'ramadan-30',
    title: 'ختمة الشهر (30 يوماً)',
    targetDays: 30,
    startDate: new Date().toISOString(),
    targetDate: new Date(Date.now() + 30 * 86400000).toISOString(),
    dailyTargetPages: 20, // 604 pages / 30 days ≈ 20 pages (1 juz)
    status: 'active'
  },
  streakDays: 1,
  lastActiveDate: new Date().toISOString().split('T')[0]
};

export function getStoredLanguage(): Language {
  try {
    const saved = localStorage.getItem(STORAGE_KEYS.LANGUAGE);
    if (saved && ['ar', 'en', 'fr', 'ur', 'id', 'tr'].includes(saved)) {
      return saved as Language;
    }
  } catch {}
  return 'ar'; // Default Arabic with rich RTL experience
}

export function saveStoredLanguage(lang: Language): void {
  try {
    localStorage.setItem(STORAGE_KEYS.LANGUAGE, lang);
  } catch {}
}

export function getStoredProgress(): ReadingProgress {
  try {
    const saved = localStorage.getItem(STORAGE_KEYS.PROGRESS);
    if (saved) {
      const parsed = JSON.parse(saved);
      return { ...DEFAULT_PROGRESS, ...parsed };
    }
  } catch {}
  return DEFAULT_PROGRESS;
}

export function saveStoredProgress(progress: ReadingProgress): void {
  try {
    localStorage.setItem(STORAGE_KEYS.PROGRESS, JSON.stringify(progress));
  } catch {}
}

export function getStoredReciter(): Reciter {
  try {
    const savedId = localStorage.getItem(STORAGE_KEYS.SELECTED_RECITER);
    if (savedId) {
      const found = RECITERS_LIST.find((r) => r.id === savedId);
      if (found) return found;
    }
  } catch {}
  return RECITERS_LIST[0]; // Mishary Rashid Alafasy default
}

export function saveStoredReciter(reciter: Reciter): void {
  try {
    localStorage.setItem(STORAGE_KEYS.SELECTED_RECITER, reciter.id);
  } catch {}
}

export function getStoredFontSize(): number {
  try {
    const saved = localStorage.getItem(STORAGE_KEYS.FONT_SIZE);
    if (saved) {
      const val = parseInt(saved, 10);
      if (val >= 20 && val <= 50) return val;
    }
  } catch {}
  return 30; // Default comfortable Arabic reading font size
}

export function saveStoredFontSize(size: number): void {
  try {
    localStorage.setItem(STORAGE_KEYS.FONT_SIZE, String(size));
  } catch {}
}
