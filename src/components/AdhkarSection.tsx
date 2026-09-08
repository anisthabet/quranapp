import React, { useState } from 'react';
import { 
  Sun, Moon, Compass, CloudMoon, BookOpen, HeartHandshake, 
  RotateCcw, Check, Copy, Sparkles, Volume2, Bookmark, CheckCircle2,
  ChevronRight, Award
} from 'lucide-react';
import { DhikrCategory, DhikrItem, Language } from '../types';
import { ADHKAR_CATEGORIES, ADHKAR_ITEMS } from '../data/adhkar';
import { translations } from '../data/translations';

interface AdhkarSectionProps {
  language: Language;
}

const CATEGORY_ICONS: Record<string, React.FC<{ className?: string }>> = {
  Sun,
  Moon,
  Compass,
  CloudMoon,
  BookOpen,
  HeartHandshake
};

export const AdhkarSection: React.FC<AdhkarSectionProps> = ({ language }) => {
  const t = translations[language];
  const [activeCategoryId, setActiveCategoryId] = useState<string>('morning');
  const [counts, setCounts] = useState<Record<string, number>>({});
  const [copiedId, setCopiedId] = useState<string | null>(null);
  const [favorites, setFavorites] = useState<Record<string, boolean>>({});
  const [tasbihTotal, setTasbihTotal] = useState<number>(0);
  const [tasbihDhikrIndex, setTasbihDhikrIndex] = useState<number>(0);

  const TASBIH_PHRASES = [
    { ar: 'سُبْحَانَ اللَّهِ', en: 'SubhanAllah', tr: 'Glory be to Allah' },
    { ar: 'الْحَمْدُ لِلَّهِ', en: 'Alhamdulillah', tr: 'Praise be to Allah' },
    { ar: 'لَا إِلَهَ إِلَّا اللَّهُ', en: 'La ilaha illallah', tr: 'None worthy of worship but Allah' },
    { ar: 'اللَّهُ أَكْبَرُ', en: 'Allahu Akbar', tr: 'Allah is the Greatest' },
    { ar: 'أَسْتَغْفِرُ اللَّهَ وَأَتُوبُ إِلَيْهِ', en: 'Astaghfirullah', tr: 'I ask Allah for forgiveness' },
    { ar: 'لَا حَوْلَ وَلَا قُوَّةَ إِلَّا بِاللَّهِ', en: 'La hawla wa la quwwata illa billah', tr: 'No power nor strength except with Allah' }
  ];

  const currentCategory = ADHKAR_CATEGORIES.find((c) => c.id === activeCategoryId) || ADHKAR_CATEGORIES[0];
  const categoryItems = ADHKAR_ITEMS.filter((item) => item.categoryId === activeCategoryId);

  const handleIncrementCount = (id: string, targetCount: number) => {
    setCounts((prev) => {
      const current = prev[id] || 0;
      if (current < targetCount) {
        return { ...prev, [id]: current + 1 };
      }
      return prev;
    });
  };

  const handleResetItem = (id: string) => {
    setCounts((prev) => ({ ...prev, [id]: 0 }));
  };

  const handleResetCategory = () => {
    const updated = { ...counts };
    categoryItems.forEach((item) => {
      updated[item.id] = 0;
    });
    setCounts(updated);
  };

  const handleCopyDhikr = (item: DhikrItem) => {
    const textToCopy = `${item.title_ar}\n\n${item.text_ar}\n\n"${item.translations[language] || item.translations.en}"\n\n[المصدر: ${item.source || ''}]`;
    navigator.clipboard.writeText(textToCopy);
    setCopiedId(item.id);
    setTimeout(() => setCopiedId(null), 2000);
  };

  // Calculate completed count in current category
  const completedCount = categoryItems.filter((item) => {
    const current = counts[item.id] || 0;
    return current >= item.targetCount;
  }).length;

  const completionPercent = categoryItems.length > 0 
    ? Math.round((completedCount / categoryItems.length) * 100) 
    : 0;

  return (
    <div className="max-w-5xl mx-auto px-4 py-6 space-y-8">
      {/* Header Banner */}
      <div className="relative overflow-hidden rounded-3xl bg-gradient-to-r from-emerald-950/70 via-slate-900 to-slate-950 border border-emerald-800/30 p-6 sm:p-8 shadow-xl">
        <div className="flex flex-col md:flex-row items-center justify-between gap-6">
          <div className="space-y-2 text-center md:text-start rtl:md:text-right">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-emerald-500/10 border border-emerald-500/20 text-emerald-300 text-xs font-semibold">
              <Sparkles className="w-3.5 h-3.5 text-emerald-400" />
              <span>{t.adhkarSubtitle}</span>
            </div>
            <h1 className="text-2xl sm:text-3xl font-bold text-white tracking-tight">
              {t.adhkarAndDoua}
            </h1>
            <p className="text-xs sm:text-sm text-slate-300 max-w-xl">
              حصن المسلم اليومي من أذكار الصباح والمساء، أدعية بعد الصلوات، وأدعية من القرآن والسنة النبوية الشريفة مع عدادات تسبيح تفاعلية.
            </p>
          </div>

          {/* Quick Progress Ring */}
          <div className="flex items-center gap-4 bg-slate-900/80 p-4 rounded-2xl border border-slate-800">
            <div className="relative w-16 h-16 flex items-center justify-center">
              <svg className="w-full h-full -rotate-90" viewBox="0 0 36 36">
                <path
                  className="text-slate-800"
                  strokeWidth="3.5"
                  stroke="currentColor"
                  fill="none"
                  d="M18 2.0845 a 15.9155 15.9155 0 0 1 0 31.831 a 15.9155 15.9155 0 0 1 0 -31.831"
                />
                <path
                  className="text-emerald-500 transition-all duration-500"
                  strokeDasharray={`${completionPercent}, 100`}
                  strokeWidth="3.5"
                  strokeLinecap="round"
                  stroke="currentColor"
                  fill="none"
                  d="M18 2.0845 a 15.9155 15.9155 0 0 1 0 31.831 a 15.9155 15.9155 0 0 1 0 -31.831"
                />
              </svg>
              <span className="absolute font-bold text-xs text-white">
                {completionPercent}%
              </span>
            </div>
            <div>
              <span className="text-xs text-slate-400 block">{currentCategory.translations[language] || currentCategory.name_en}</span>
              <span className="text-sm font-bold text-emerald-400">
                {completedCount} / {categoryItems.length} {t.completedDhikr}
              </span>
            </div>
          </div>
        </div>
      </div>

      {/* Category Pills Switcher */}
      <div className="flex items-center gap-2 overflow-x-auto pb-2 scrollbar-none">
        {ADHKAR_CATEGORIES.map((cat) => {
          const Icon = CATEGORY_ICONS[cat.icon] || Sun;
          const isActive = cat.id === activeCategoryId;
          return (
            <button
              key={cat.id}
              id={`adhkar-tab-${cat.id}`}
              onClick={() => setActiveCategoryId(cat.id)}
              className={`flex items-center gap-2 px-4 py-2.5 rounded-2xl text-xs font-semibold whitespace-nowrap transition-all border ${
                isActive
                  ? 'bg-emerald-600 text-white border-emerald-500 shadow-md shadow-emerald-950/40'
                  : 'bg-slate-900 text-slate-400 border-slate-800 hover:text-white hover:bg-slate-800'
              }`}
            >
              <Icon className="w-4 h-4" />
              <span>{cat.translations[language] || cat.name_en}</span>
            </button>
          );
        })}
      </div>

      {/* Main Dhikr Cards List */}
      <div className="space-y-4">
        <div className="flex items-center justify-between pb-2">
          <h2 className="text-lg font-bold text-white flex items-center gap-2">
            <span>{currentCategory.translations[language] || currentCategory.name_en}</span>
            <span className="text-xs font-normal text-slate-400">({categoryItems.length})</span>
          </h2>

          <button
            onClick={handleResetCategory}
            className="flex items-center gap-1.5 text-xs text-slate-400 hover:text-white bg-slate-900 border border-slate-800 px-3 py-1.5 rounded-xl transition-colors"
          >
            <RotateCcw className="w-3.5 h-3.5" />
            <span>{t.resetCount}</span>
          </button>
        </div>

        {categoryItems.map((item) => {
          const currentCount = counts[item.id] || 0;
          const isFinished = currentCount >= item.targetCount;
          const isFav = favorites[item.id];

          return (
            <div
              key={item.id}
              id={`dhikr-card-${item.id}`}
              className={`p-6 rounded-3xl border transition-all duration-300 ${
                isFinished
                  ? 'bg-emerald-950/20 border-emerald-500/40 shadow-lg shadow-emerald-950/20'
                  : 'bg-slate-900/70 border-slate-800/80 hover:border-slate-700'
              }`}
            >
              {/* Card Header: Title & Actions */}
              <div className="flex items-center justify-between pb-3 border-b border-slate-800/60 mb-4">
                <div className="flex items-center gap-2.5">
                  <span className={`w-8 h-8 rounded-xl flex items-center justify-center text-xs font-bold font-mono transition-colors ${
                    isFinished
                      ? 'bg-emerald-500 text-slate-950'
                      : 'bg-slate-800 text-emerald-400 border border-slate-700'
                  }`}>
                    {item.targetCount}x
                  </span>
                  <div>
                    <h3 className="text-sm font-bold text-white">{item.title_ar}</h3>
                    <p className="text-[11px] text-slate-400">{item.title_en}</p>
                  </div>
                </div>

                <div className="flex items-center gap-2">
                  <button
                    onClick={() => handleCopyDhikr(item)}
                    className="p-1.5 rounded-lg text-slate-400 hover:text-white hover:bg-slate-800 transition-colors"
                    title={copiedId === item.id ? t.copied : t.copyAyah}
                  >
                    {copiedId === item.id ? (
                      <Check className="w-4 h-4 text-emerald-400" />
                    ) : (
                      <Copy className="w-4 h-4" />
                    )}
                  </button>
                  <button
                    onClick={() => handleResetItem(item.id)}
                    className="p-1.5 rounded-lg text-slate-400 hover:text-slate-200 hover:bg-slate-800 transition-colors"
                    title={t.resetCount}
                  >
                    <RotateCcw className="w-3.5 h-3.5" />
                  </button>
                </div>
              </div>

              {/* Main Arabic Dhikr Text */}
              <div 
                onClick={() => handleIncrementCount(item.id, item.targetCount)}
                className="py-3 text-right rtl:text-right cursor-pointer select-none group"
                dir="rtl"
              >
                <p className="font-quran text-2xl md:text-3xl leading-[2.2] text-slate-100 group-hover:text-emerald-200 transition-colors">
                  {item.text_ar}
                </p>
              </div>

              {/* Transliteration */}
              {item.transliteration && (
                <p className="text-xs text-emerald-400/90 font-mono italic my-2">
                  {item.transliteration}
                </p>
              )}

              {/* Translation */}
              <p className="text-xs sm:text-sm text-slate-300 leading-relaxed mt-2 pt-2 border-t border-slate-800/40">
                {item.translations[language] || item.translations.en}
              </p>

              {/* Virtue & Source Footnote */}
              {item.virtue && (
                <div className="mt-3 p-3 rounded-2xl bg-slate-950/50 border border-slate-800/60 text-xs text-amber-300/90 flex items-start gap-2">
                  <Sparkles className="w-4 h-4 text-amber-400 flex-shrink-0 mt-0.5" />
                  <div>
                    <span className="font-semibold">{t.virtue}: </span>
                    <span>{item.virtue[language] || item.virtue.en}</span>
                    {item.source && (
                      <span className="text-slate-500 block mt-0.5 font-mono text-[10px]">
                        [{item.source}]
                      </span>
                    )}
                  </div>
                </div>
              )}

              {/* Tap to Count Big Action Button */}
              <div className="mt-5 pt-3 flex items-center justify-between">
                <span className="text-xs text-slate-400 font-mono">
                  {currentCount} / {item.targetCount} {t.times}
                </span>

                <button
                  id={`count-btn-${item.id}`}
                  onClick={() => handleIncrementCount(item.id, item.targetCount)}
                  disabled={isFinished}
                  className={`flex items-center gap-2 px-5 py-2.5 rounded-2xl font-bold text-xs transition-all active:scale-95 shadow-lg ${
                    isFinished
                      ? 'bg-emerald-500/20 text-emerald-300 border border-emerald-500/40 cursor-default'
                      : 'bg-emerald-600 hover:bg-emerald-500 text-white shadow-emerald-950/40'
                  }`}
                >
                  {isFinished ? (
                    <>
                      <CheckCircle2 className="w-4 h-4" />
                      <span>{t.completedDhikr}</span>
                    </>
                  ) : (
                    <>
                      <span>{t.tapToCount}</span>
                      <span className="w-5 h-5 rounded-full bg-white/20 flex items-center justify-center font-mono text-[11px]">
                        +{item.targetCount - currentCount}
                      </span>
                    </>
                  )}
                </button>
              </div>
            </div>
          );
        })}
      </div>

      {/* DIGITAL TASBIH COMPONENT SECTION */}
      <div className="pt-8 border-t border-slate-800">
        <div className="p-6 sm:p-8 rounded-3xl bg-slate-900/90 border border-slate-800 text-center space-y-6 shadow-xl">
          <div className="space-y-1">
            <h2 className="text-xl font-bold text-white">{t.digitalTasbih}</h2>
            <p className="text-xs text-slate-400">
              المسبحة الإلكترونية الحرة للذكر والاستغفار في أي وقت
            </p>
          </div>

          {/* Active Phrase Selector */}
          <div className="flex items-center justify-center gap-2 flex-wrap">
            {TASBIH_PHRASES.map((phrase, idx) => (
              <button
                key={idx}
                onClick={() => setTasbihDhikrIndex(idx)}
                className={`px-3 py-1.5 rounded-xl text-xs font-semibold transition-colors ${
                  tasbihDhikrIndex === idx
                    ? 'bg-emerald-600 text-white shadow-md'
                    : 'bg-slate-800 text-slate-300 hover:bg-slate-700'
                }`}
              >
                <span className="font-quran text-sm">{phrase.ar}</span>
              </button>
            ))}
          </div>

          {/* Selected Phrase Display */}
          <div className="py-2">
            <h3 className="font-quran text-3xl sm:text-4xl font-bold text-emerald-300 mb-1">
              {TASBIH_PHRASES[tasbihDhikrIndex].ar}
            </h3>
            <p className="text-xs text-slate-400 font-mono">
              {TASBIH_PHRASES[tasbihDhikrIndex].en} • {TASBIH_PHRASES[tasbihDhikrIndex].tr}
            </p>
          </div>

          {/* Giant Interactive Tap Circle */}
          <div className="flex flex-col items-center justify-center">
            <button
              id="tasbih-tap-circle"
              onClick={() => setTasbihTotal((prev) => prev + 1)}
              className="w-40 h-40 sm:w-48 sm:h-48 rounded-full bg-gradient-to-b from-emerald-600 to-teal-800 hover:from-emerald-500 hover:to-teal-700 text-white flex flex-col items-center justify-center shadow-2xl shadow-emerald-950/60 border-4 border-emerald-400/30 active:scale-95 transition-transform select-none cursor-pointer"
            >
              <span className="text-4xl sm:text-5xl font-mono font-black tracking-tight">
                {tasbihTotal}
              </span>
              <span className="text-[11px] font-semibold tracking-wider uppercase text-emerald-200 mt-1">
                {t.tapToCount}
              </span>
            </button>
          </div>

          {/* Controls: Reset Tasbih */}
          <div className="flex items-center justify-center gap-4 text-xs text-slate-400">
            <button
              onClick={() => setTasbihTotal(0)}
              className="flex items-center gap-1.5 px-3 py-1.5 rounded-xl bg-slate-800 hover:bg-slate-700 text-slate-300 transition-colors"
            >
              <RotateCcw className="w-3.5 h-3.5" />
              <span>{t.resetCount}</span>
            </button>
            <span className="font-mono">
              الدورات المكتملة: {Math.floor(tasbihTotal / 33)} دورة (33)
            </span>
          </div>
        </div>
      </div>
    </div>
  );
};
