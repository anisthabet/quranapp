import React, { useState } from 'react';
import confetti from 'canvas-confetti';
import { 
  Award, Sparkles, BookOpen, Calendar, CheckCircle2, Bookmark as BookmarkIcon, 
  Trash2, Plus, Target, Flame, ChevronRight, BarChart2, CheckSquare, Square
} from 'lucide-react';
import { Bookmark, KhatmahPlan, Language, ReadingProgress } from '../types';
import { SURAHS_LIST, getSurahById } from '../data/surahs';
import { translations } from '../data/translations';

interface KhatmahTrackerProps {
  language: Language;
  progress: ReadingProgress;
  onUpdateProgress: (updater: (prev: ReadingProgress) => ReadingProgress) => void;
  onNavigateToSurah: (surahId: number, ayahNumber?: number) => void;
}

export const KhatmahTracker: React.FC<KhatmahTrackerProps> = ({
  language,
  progress,
  onUpdateProgress,
  onNavigateToSurah
}) => {
  const t = translations[language];
  const [showLogModal, setShowLogModal] = useState(false);
  const [logSurahId, setLogSurahId] = useState<number>(1);
  const [logPagesCount, setLogPagesCount] = useState<number>(20);
  const [showPlanModal, setShowPlanModal] = useState(false);
  const [customDays, setCustomDays] = useState<number>(30);
  const [activeTab, setActiveTab] = useState<'overview' | 'juz' | 'bookmarks'>('overview');

  const TOTAL_PAGES = 604;
  const TOTAL_AYAHS = 6236;

  // Calculate stats
  const completedAyahsCount = Object.keys(progress.completedAyahs || {}).length;
  const percentComplete = Math.min(100, Math.round((completedAyahsCount / TOTAL_AYAHS) * 100));
  const estimatedPages = Math.round((completedAyahsCount / TOTAL_AYAHS) * TOTAL_PAGES);

  const handleCelebrateKhatmah = () => {
    confetti({
      particleCount: 120,
      spread: 80,
      origin: { y: 0.6 }
    });
  };

  const handleToggleJuz = (juzNumber: number) => {
    onUpdateProgress((prev) => {
      const isCompleted = prev.completedJuz.includes(juzNumber);
      const newJuz = isCompleted
        ? prev.completedJuz.filter((j) => j !== juzNumber)
        : [...prev.completedJuz, juzNumber];

      // Mark ayahs of this juz accordingly
      const surahsInJuz = SURAHS_LIST.filter((s) => s.juz.includes(juzNumber));
      const updatedAyahs = { ...prev.completedAyahs };

      surahsInJuz.forEach((s) => {
        for (let i = 1; i <= s.verses_count; i++) {
          const key = `${s.id}:${i}`;
          if (!isCompleted) {
            updatedAyahs[key] = true;
          }
        }
      });

      if (newJuz.length === 30) {
        handleCelebrateKhatmah();
      }

      return {
        ...prev,
        completedJuz: newJuz,
        completedAyahs: updatedAyahs
      };
    });
  };

  const handleLogReading = (e: React.FormEvent) => {
    e.preventDefault();
    const todayStr = new Date().toISOString().split('T')[0];

    onUpdateProgress((prev) => {
      const isAlreadyActiveToday = prev.lastActiveDate === todayStr;
      const newStreak = isAlreadyActiveToday ? prev.streakDays : prev.streakDays + 1;

      // Mark ayahs for selected surah
      const surah = getSurahById(logSurahId);
      const updatedAyahs = { ...prev.completedAyahs };
      if (surah) {
        for (let i = 1; i <= surah.verses_count; i++) {
          updatedAyahs[`${surah.id}:${i}`] = true;
        }
      }

      return {
        ...prev,
        lastReadSurah: logSurahId,
        completedAyahs: updatedAyahs,
        streakDays: newStreak,
        lastActiveDate: todayStr,
        history: [
          {
            date: todayStr,
            surahId: logSurahId,
            ayahCount: surah?.verses_count || 10,
            pagesCount: logPagesCount
          },
          ...prev.history
        ]
      };
    });

    setShowLogModal(false);
  };

  const handleSavePlan = () => {
    const pagesPerDay = Math.ceil(TOTAL_PAGES / customDays);
    const newPlan: KhatmahPlan = {
      id: `plan-${Date.now()}`,
      title: `ختمة ${customDays} يوم`,
      targetDays: customDays,
      startDate: new Date().toISOString(),
      targetDate: new Date(Date.now() + customDays * 86400000).toISOString(),
      dailyTargetPages: pagesPerDay,
      status: 'active'
    };

    onUpdateProgress((prev) => ({
      ...prev,
      currentPlan: newPlan
    }));
    setShowPlanModal(false);
  };

  const handleDeleteBookmark = (id: string) => {
    onUpdateProgress((prev) => ({
      ...prev,
      bookmarks: prev.bookmarks.filter((b) => b.id !== id)
    }));
  };

  return (
    <div className="max-w-5xl mx-auto px-4 py-6 space-y-8">
      {/* Top Banner & Main Stats */}
      <div className="relative overflow-hidden rounded-3xl bg-gradient-to-r from-emerald-950/80 via-slate-900 to-slate-950 border border-emerald-800/30 p-6 sm:p-8 shadow-xl">
        <div className="flex flex-col lg:flex-row items-center justify-between gap-6">
          <div className="space-y-3 text-center lg:text-start rtl:lg:text-right">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-emerald-500/10 border border-emerald-500/20 text-emerald-300 text-xs font-semibold">
              <Sparkles className="w-3.5 h-3.5 text-emerald-400" />
              <span>{t.trackerSubtitle}</span>
            </div>
            <h1 className="text-2xl sm:text-3xl font-bold text-white tracking-tight">
              {t.readingProgress}
            </h1>
            <p className="text-xs sm:text-sm text-slate-300 max-w-lg">
              تابع وردك اليومي، أجزاء المصحف المقروءة، وسجل إنجازاتك للوصول إلى ختم كتاب الله تعالى.
            </p>

            {/* Action Buttons */}
            <div className="flex flex-wrap items-center justify-center lg:justify-start gap-2.5 pt-2">
              <button
                id="log-today-btn"
                onClick={() => setShowLogModal(true)}
                className="flex items-center gap-2 px-4 py-2 rounded-xl bg-emerald-600 hover:bg-emerald-500 text-white text-xs font-bold shadow-lg shadow-emerald-950/50 transition-colors"
              >
                <Plus className="w-4 h-4" />
                <span>{t.quickLogToday}</span>
              </button>

              <button
                id="change-plan-btn"
                onClick={() => setShowPlanModal(true)}
                className="flex items-center gap-2 px-4 py-2 rounded-xl bg-slate-800 hover:bg-slate-700 text-slate-200 text-xs font-semibold transition-colors"
              >
                <Target className="w-4 h-4 text-amber-400" />
                <span>{t.khatmahPlan} ({progress.currentPlan?.targetDays || 30} {t.daysStreak})</span>
              </button>
            </div>
          </div>

          {/* Khatmah Visual Progress Ring */}
          <div className="flex flex-col items-center bg-slate-900/90 p-6 rounded-3xl border border-slate-800 min-w-[240px] shadow-2xl">
            <div className="relative w-28 h-28 flex items-center justify-center">
              <svg className="w-full h-full -rotate-90" viewBox="0 0 36 36">
                <path
                  className="text-slate-800"
                  strokeWidth="3.5"
                  stroke="currentColor"
                  fill="none"
                  d="M18 2.0845 a 15.9155 15.9155 0 0 1 0 31.831 a 15.9155 15.9155 0 0 1 0 -31.831"
                />
                <path
                  className="text-emerald-500 transition-all duration-700"
                  strokeDasharray={`${percentComplete}, 100`}
                  strokeWidth="3.5"
                  strokeLinecap="round"
                  stroke="currentColor"
                  fill="none"
                  d="M18 2.0845 a 15.9155 15.9155 0 0 1 0 31.831 a 15.9155 15.9155 0 0 1 0 -31.831"
                />
              </svg>
              <div className="absolute flex flex-col items-center">
                <span className="text-2xl font-black text-white font-mono">{percentComplete}%</span>
                <span className="text-[10px] text-slate-400 uppercase tracking-wider">{t.khatmahProgress}</span>
              </div>
            </div>

            <div className="mt-4 text-center">
              <span className="text-xs font-semibold text-emerald-400">
                {completedAyahsCount} / {TOTAL_AYAHS} {t.ayahsRead}
              </span>
              <span className="text-[11px] text-slate-400 block mt-0.5">
                (~{estimatedPages} / {TOTAL_PAGES} {t.pagesRead})
              </span>
            </div>
          </div>
        </div>
      </div>

      {/* KPI Cards Row: Streak, Goal, Juz completed, Last read */}
      <div className="grid grid-cols-2 md:grid-cols-4 gap-3.5">
        {/* Streak */}
        <div className="p-4 rounded-2xl bg-slate-900 border border-slate-800 flex items-center gap-3">
          <div className="w-10 h-10 rounded-xl bg-amber-500/15 border border-amber-500/30 text-amber-400 flex items-center justify-center">
            <Flame className="w-5 h-5 fill-current" />
          </div>
          <div>
            <span className="text-lg font-black text-white font-mono">{progress.streakDays}</span>
            <p className="text-xs text-slate-400">{t.daysStreak}</p>
          </div>
        </div>

        {/* Daily Target */}
        <div className="p-4 rounded-2xl bg-slate-900 border border-slate-800 flex items-center gap-3">
          <div className="w-10 h-10 rounded-xl bg-blue-500/15 border border-blue-500/30 text-blue-400 flex items-center justify-center">
            <Target className="w-5 h-5" />
          </div>
          <div>
            <span className="text-lg font-black text-white font-mono">
              {progress.currentPlan?.dailyTargetPages || 20}
            </span>
            <p className="text-xs text-slate-400">{t.pagesPerDay}</p>
          </div>
        </div>

        {/* Completed Juz */}
        <div className="p-4 rounded-2xl bg-slate-900 border border-slate-800 flex items-center gap-3">
          <div className="w-10 h-10 rounded-xl bg-emerald-500/15 border border-emerald-500/30 text-emerald-400 flex items-center justify-center">
            <Award className="w-5 h-5" />
          </div>
          <div>
            <span className="text-lg font-black text-white font-mono">
              {progress.completedJuz.length} / 30
            </span>
            <p className="text-xs text-slate-400">أجزاء مكتملة</p>
          </div>
        </div>

        {/* Bookmarks count */}
        <div className="p-4 rounded-2xl bg-slate-900 border border-slate-800 flex items-center gap-3">
          <div className="w-10 h-10 rounded-xl bg-purple-500/15 border border-purple-500/30 text-purple-400 flex items-center justify-center">
            <BookmarkIcon className="w-5 h-5" />
          </div>
          <div>
            <span className="text-lg font-black text-white font-mono">
              {progress.bookmarks.length}
            </span>
            <p className="text-xs text-slate-400">{t.bookmarksList}</p>
          </div>
        </div>
      </div>

      {/* Sub-tab Navigation: Juz Checklist / Bookmarks */}
      <div className="flex items-center gap-2 border-b border-slate-800 pb-3">
        <button
          onClick={() => setActiveTab('overview')}
          className={`px-4 py-2 rounded-xl text-xs font-bold transition-colors ${
            activeTab === 'overview'
              ? 'bg-emerald-600 text-white'
              : 'text-slate-400 hover:text-white hover:bg-slate-900'
          }`}
        >
          {t.overallProgress}
        </button>
        <button
          onClick={() => setActiveTab('juz')}
          className={`px-4 py-2 rounded-xl text-xs font-bold transition-colors ${
            activeTab === 'juz'
              ? 'bg-emerald-600 text-white'
              : 'text-slate-400 hover:text-white hover:bg-slate-900'
          }`}
        >
          أجزاء القرآن (1 - 30)
        </button>
        <button
          onClick={() => setActiveTab('bookmarks')}
          className={`px-4 py-2 rounded-xl text-xs font-bold transition-colors ${
            activeTab === 'bookmarks'
              ? 'bg-emerald-600 text-white'
              : 'text-slate-400 hover:text-white hover:bg-slate-900'
          }`}
        >
          {t.bookmarksList} ({progress.bookmarks.length})
        </button>
      </div>

      {/* TAB 1: OVERVIEW & READING HISTORY */}
      {activeTab === 'overview' && (
        <div className="space-y-6">
          {/* Quick Continue Reading Callout */}
          <div className="p-5 rounded-2xl bg-emerald-950/30 border border-emerald-500/30 flex items-center justify-between">
            <div className="flex items-center gap-3">
              <div className="w-10 h-10 rounded-xl bg-emerald-500 text-slate-950 flex items-center justify-center font-bold">
                {progress.lastReadSurah}
              </div>
              <div>
                <h4 className="text-sm font-bold text-white">
                  آخر موضع تلاوة: {getSurahById(progress.lastReadSurah)?.name_ar} ({getSurahById(progress.lastReadSurah)?.name_en})
                </h4>
                <p className="text-xs text-slate-400 mt-0.5">
                  الآية {progress.lastReadAyah} • استمر في ختمتك المباركة
                </p>
              </div>
            </div>

            <button
              onClick={() => onNavigateToSurah(progress.lastReadSurah, progress.lastReadAyah)}
              className="flex items-center gap-1.5 px-4 py-2 rounded-xl bg-emerald-600 hover:bg-emerald-500 text-white text-xs font-bold transition-colors shadow-md"
            >
              <span>{t.continueReading}</span>
              <ChevronRight className="w-4 h-4 rtl:rotate-180" />
            </button>
          </div>

          {/* Reading Log History */}
          <div className="p-6 rounded-3xl bg-slate-900/80 border border-slate-800 space-y-4">
            <h3 className="text-sm font-bold text-white flex items-center gap-2">
              <BarChart2 className="w-4 h-4 text-emerald-400" />
              <span>سجل القراءات الأخير</span>
            </h3>

            {progress.history.length === 0 ? (
              <p className="text-xs text-slate-500 text-center py-6">
                لم يتم تسجيل جلسات قراءة بعد. اضغط على "{t.quickLogToday}" لحفظ وردك اليومي.
              </p>
            ) : (
              <div className="space-y-2">
                {progress.history.slice(0, 5).map((h, i) => {
                  const surah = getSurahById(h.surahId);
                  return (
                    <div
                      key={i}
                      className="p-3 rounded-xl bg-slate-950/40 border border-slate-800/70 flex items-center justify-between text-xs"
                    >
                      <div className="flex items-center gap-2.5">
                        <Calendar className="w-4 h-4 text-slate-500" />
                        <span className="font-mono text-slate-300">{h.date}</span>
                        <span className="text-emerald-400 font-semibold font-quran">
                          سورة {surah?.name_ar || ''}
                        </span>
                      </div>
                      <span className="text-slate-400 font-mono">
                        +{h.pagesCount} صفحات
                      </span>
                    </div>
                  );
                })}
              </div>
            )}
          </div>
        </div>
      )}

      {/* TAB 2: JUZ 1-30 CHECKLIST */}
      {activeTab === 'juz' && (
        <div className="space-y-4">
          <div className="flex items-center justify-between text-xs text-slate-400">
            <p>انقر على أي جزء لتحديده كمكتمل القراءة في خطة الختمة:</p>
            <span className="font-semibold text-emerald-400">
              {progress.completedJuz.length} من 30 جزء
            </span>
          </div>

          <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-5 gap-3">
            {Array.from({ length: 30 }, (_, i) => i + 1).map((juzNum) => {
              const isChecked = progress.completedJuz.includes(juzNum);
              return (
                <div
                  key={juzNum}
                  id={`juz-check-${juzNum}`}
                  onClick={() => handleToggleJuz(juzNum)}
                  className={`p-3.5 rounded-2xl border transition-all cursor-pointer flex items-center justify-between ${
                    isChecked
                      ? 'bg-emerald-950/40 border-emerald-500/50 shadow-md shadow-emerald-950/30'
                      : 'bg-slate-900 border-slate-800 hover:border-slate-700'
                  }`}
                >
                  <div>
                    <span className="text-xs font-bold text-white block">الجزء {juzNum}</span>
                    <span className="text-[10px] text-slate-500">Juz {juzNum}</span>
                  </div>
                  {isChecked ? (
                    <CheckCircle2 className="w-5 h-5 text-emerald-400 fill-emerald-500/20" />
                  ) : (
                    <div className="w-5 h-5 rounded-full border border-slate-700" />
                  )}
                </div>
              );
            })}
          </div>
        </div>
      )}

      {/* TAB 3: BOOKMARKS MANAGER */}
      {activeTab === 'bookmarks' && (
        <div className="space-y-4">
          {progress.bookmarks.length === 0 ? (
            <div className="text-center py-16 bg-slate-900/40 rounded-3xl border border-slate-800">
              <BookmarkIcon className="w-10 h-10 text-slate-600 mx-auto mb-3" />
              <p className="text-sm text-slate-400">{t.noBookmarks}</p>
            </div>
          ) : (
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
              {progress.bookmarks.map((bm) => (
                <div
                  key={bm.id}
                  className="p-4 rounded-2xl bg-slate-900 border border-slate-800 flex items-center justify-between gap-3 hover:border-slate-700 transition-colors"
                >
                  <div 
                    onClick={() => onNavigateToSurah(bm.surahId, bm.ayahNumber)}
                    className="cursor-pointer flex items-center gap-3 flex-1 min-w-0"
                  >
                    <div className="w-9 h-9 rounded-xl bg-amber-500/15 border border-amber-500/30 text-amber-400 flex items-center justify-center font-bold text-xs flex-shrink-0">
                      <BookmarkIcon className="w-4 h-4 fill-current" />
                    </div>
                    <div className="truncate">
                      <h4 className="text-sm font-bold text-white hover:text-emerald-300 truncate">
                        {bm.surahNameAr} ({bm.surahNameEn})
                      </h4>
                      <p className="text-xs text-slate-400">
                        {t.ayah} {bm.ayahNumber} • {new Date(bm.timestamp).toLocaleDateString()}
                      </p>
                      {bm.note && (
                        <p className="text-[11px] text-emerald-400/90 italic truncate mt-0.5">
                          "{bm.note}"
                        </p>
                      )}
                    </div>
                  </div>

                  <div className="flex items-center gap-1">
                    <button
                      onClick={() => onNavigateToSurah(bm.surahId, bm.ayahNumber)}
                      className="px-2.5 py-1.5 rounded-lg bg-emerald-600 text-white text-xs font-semibold hover:bg-emerald-500"
                    >
                      فتح
                    </button>
                    <button
                      onClick={() => handleDeleteBookmark(bm.id)}
                      className="p-1.5 rounded-lg text-slate-400 hover:text-red-400 hover:bg-slate-800 transition-colors"
                      title="حذف العلامة"
                    >
                      <Trash2 className="w-3.5 h-3.5" />
                    </button>
                  </div>
                </div>
              ))}
            </div>
          )}
        </div>
      )}

      {/* MODAL: QUICK LOG TODAY'S READING */}
      {showLogModal && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/80 backdrop-blur-sm">
          <div className="bg-slate-900 border border-slate-800 rounded-3xl w-full max-w-md p-6 space-y-5 shadow-2xl">
            <h3 className="text-lg font-bold text-white flex items-center gap-2">
              <BookOpen className="w-5 h-5 text-emerald-400" />
              <span>{t.logReading}</span>
            </h3>

            <form onSubmit={handleLogReading} className="space-y-4">
              <div>
                <label className="block text-xs font-semibold text-slate-400 mb-1.5">
                  السورة التي قرأتها اليوم:
                </label>
                <select
                  value={logSurahId}
                  onChange={(e) => setLogSurahId(Number(e.target.value))}
                  className="w-full py-2.5 px-3 rounded-xl bg-slate-950 border border-slate-800 text-white text-sm focus:outline-none focus:ring-2 focus:ring-emerald-500"
                >
                  {SURAHS_LIST.map((s) => (
                    <option key={s.id} value={s.id}>
                      {s.id}. {s.name_ar} ({s.name_en})
                    </option>
                  ))}
                </select>
              </div>

              <div>
                <label className="block text-xs font-semibold text-slate-400 mb-1.5">
                  عدد الصفحات المقروءة:
                </label>
                <input
                  type="number"
                  min="1"
                  max="604"
                  value={logPagesCount}
                  onChange={(e) => setLogPagesCount(Number(e.target.value))}
                  className="w-full py-2.5 px-3 rounded-xl bg-slate-950 border border-slate-800 text-white text-sm focus:outline-none focus:ring-2 focus:ring-emerald-500"
                />
              </div>

              <div className="flex items-center justify-end gap-2.5 pt-2">
                <button
                  type="button"
                  onClick={() => setShowLogModal(false)}
                  className="px-4 py-2 rounded-xl text-xs text-slate-400 hover:text-white"
                >
                  {t.cancel}
                </button>
                <button
                  type="submit"
                  className="px-5 py-2 rounded-xl bg-emerald-600 hover:bg-emerald-500 text-white text-xs font-bold shadow-lg shadow-emerald-950/50"
                >
                  {t.save}
                </button>
              </div>
            </form>
          </div>
        </div>
      )}

      {/* MODAL: KHATMAH PLANNER */}
      {showPlanModal && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/80 backdrop-blur-sm">
          <div className="bg-slate-900 border border-slate-800 rounded-3xl w-full max-w-md p-6 space-y-5 shadow-2xl">
            <h3 className="text-lg font-bold text-white flex items-center gap-2">
              <Target className="w-5 h-5 text-emerald-400" />
              <span>{t.createPlan}</span>
            </h3>

            <div className="space-y-4">
              <div>
                <label className="block text-xs font-semibold text-slate-400 mb-2">
                  اختر المدة المستهدفة لختم القرآن الكريم:
                </label>
                <div className="grid grid-cols-3 gap-2">
                  {[15, 30, 60].map((d) => (
                    <button
                      key={d}
                      type="button"
                      onClick={() => setCustomDays(d)}
                      className={`py-2 rounded-xl text-xs font-bold border transition-colors ${
                        customDays === d
                          ? 'bg-emerald-600 text-white border-emerald-500 shadow'
                          : 'bg-slate-950 border-slate-800 text-slate-300 hover:bg-slate-800'
                      }`}
                    >
                      {d} يوماً
                    </button>
                  ))}
                </div>
              </div>

              <div>
                <label className="block text-xs font-semibold text-slate-400 mb-1.5">
                  أو أدخل عدد الأيام يدوياً:
                </label>
                <input
                  type="number"
                  min="5"
                  max="365"
                  value={customDays}
                  onChange={(e) => setCustomDays(Number(e.target.value))}
                  className="w-full py-2.5 px-3 rounded-xl bg-slate-950 border border-slate-800 text-white text-sm focus:outline-none focus:ring-2 focus:ring-emerald-500"
                />
              </div>

              {/* Target Calculation Preview */}
              <div className="p-3.5 rounded-xl bg-emerald-950/20 border border-emerald-800/40 text-xs text-emerald-300">
                <span>المطلوب يومياً: </span>
                <span className="font-bold text-white font-mono">
                  {Math.ceil(TOTAL_PAGES / customDays)} صفحة / يومياً
                </span>
                <span className="text-[11px] text-slate-400 block mt-0.5">
                  (ما يعادل {((TOTAL_PAGES / customDays) / 20).toFixed(1)} جزء تقريباً)
                </span>
              </div>
            </div>

            <div className="flex items-center justify-end gap-2.5 pt-2">
              <button
                type="button"
                onClick={() => setShowPlanModal(false)}
                className="px-4 py-2 rounded-xl text-xs text-slate-400 hover:text-white"
              >
                {t.cancel}
              </button>
              <button
                type="button"
                onClick={handleSavePlan}
                className="px-5 py-2 rounded-xl bg-emerald-600 hover:bg-emerald-500 text-white text-xs font-bold shadow-lg shadow-emerald-950/50"
              >
                {t.startKhatmah}
              </button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};
