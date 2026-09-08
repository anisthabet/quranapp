import React, { useState, useMemo } from 'react';
import { 
  Headphones, Play, Pause, Search, User, Check, Volume2, 
  Sparkles, Filter, Music, ArrowRight
} from 'lucide-react';
import { Language, Reciter, SurahInfo } from '../types';
import { RECITERS_LIST } from '../data/reciters';
import { SURAHS_LIST } from '../data/surahs';
import { translations } from '../data/translations';

interface AudioLibraryProps {
  language: Language;
  selectedReciter: Reciter;
  onSelectReciter: (reciter: Reciter) => void;
  activeSurahId: number;
  onPlaySurah: (surahId: number) => void;
  isPlaying: boolean;
  onTogglePlay: () => void;
  onNavigateToQuran: (surahId: number) => void;
}

export const AudioLibrary: React.FC<AudioLibraryProps> = ({
  language,
  selectedReciter,
  onSelectReciter,
  activeSurahId,
  onPlaySurah,
  isPlaying,
  onTogglePlay,
  onNavigateToQuran
}) => {
  const t = translations[language];
  const [searchReciter, setSearchReciter] = useState('');
  const [searchSurah, setSearchSurah] = useState('');
  const [styleFilter, setStyleFilter] = useState<'all' | 'murattal' | 'mujawwad'>('all');

  const filteredReciters = useMemo(() => {
    return RECITERS_LIST.filter((r) => {
      const matchSearch =
        r.name_ar.includes(searchReciter) ||
        r.name_en.toLowerCase().includes(searchReciter.toLowerCase()) ||
        r.country.toLowerCase().includes(searchReciter.toLowerCase());

      const matchStyle =
        styleFilter === 'all' ||
        (styleFilter === 'murattal' && r.style.toLowerCase().includes('murattal')) ||
        (styleFilter === 'mujawwad' && r.style.toLowerCase().includes('mujawwad'));

      return matchSearch && matchStyle;
    });
  }, [searchReciter, styleFilter]);

  const filteredSurahs = useMemo(() => {
    return SURAHS_LIST.filter((s) => {
      return (
        s.name_ar.includes(searchSurah) ||
        s.name_en.toLowerCase().includes(searchSurah.toLowerCase()) ||
        s.id.toString() === searchSurah.trim()
      );
    });
  }, [searchSurah]);

  return (
    <div className="max-w-6xl mx-auto px-4 py-6 space-y-8">
      {/* Header Banner */}
      <div className="relative overflow-hidden rounded-3xl bg-gradient-to-r from-emerald-950/80 via-slate-900 to-slate-950 border border-emerald-800/30 p-6 sm:p-8 shadow-xl">
        <div className="flex flex-col md:flex-row items-center justify-between gap-6">
          <div className="space-y-3 text-center md:text-start rtl:md:text-right">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-emerald-500/10 border border-emerald-500/20 text-emerald-300 text-xs font-semibold">
              <Headphones className="w-3.5 h-3.5 text-emerald-400" />
              <span>{t.audioLibrary}</span>
            </div>
            <h1 className="text-2xl sm:text-3xl font-bold text-white tracking-tight">
              {t.listenQuran}
            </h1>
            <p className="text-xs sm:text-sm text-slate-300 max-w-xl">
              استمع لتلاوات خاشعة لكبار القراء من الحرمين الشريفين والعالم الإسلامي برواية حفص عن عاصم، مرتل ومجود وبأعلى جودة صوتية.
            </p>
          </div>

          {/* Current Reciter Quick Card */}
          <div className="flex items-center gap-3.5 bg-slate-900/90 p-4 rounded-2xl border border-emerald-500/30 min-w-[260px] shadow-xl">
            <img
              src={selectedReciter.avatarUrl}
              alt={selectedReciter.name_en}
              className="w-14 h-14 rounded-2xl object-cover border border-emerald-500/40 bg-slate-800"
              referrerPolicy="no-referrer"
              onError={(e) => {
                (e.currentTarget as HTMLImageElement).src = `https://ui-avatars.com/api/?name=${encodeURIComponent(selectedReciter.name_ar)}&background=065f46&color=ecfdf5&bold=true`;
              }}
            />
            <div>
              <span className="text-[10px] text-emerald-400 font-semibold uppercase tracking-wider block">
                القارئ النشط حالياً:
              </span>
              <h4 className="text-sm font-bold text-white font-quran text-lg">
                {selectedReciter.name_ar}
              </h4>
              <p className="text-xs text-slate-400">{selectedReciter.name_en}</p>
            </div>
          </div>
        </div>
      </div>

      {/* SECTION 1: RECITERS SELECTION ROW / GRID */}
      <div className="space-y-4">
        <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between gap-3">
          <div>
            <h2 className="text-lg font-bold text-white flex items-center gap-2">
              <User className="w-5 h-5 text-emerald-400" />
              <span>{t.readers} ({RECITERS_LIST.length})</span>
            </h2>
            <p className="text-xs text-slate-400">اختر القارئ المفضل لديك للاستماع لجميع السور بصوته</p>
          </div>

          {/* Reciter Search */}
          <div className="relative w-full sm:w-64">
            <Search className="w-4 h-4 text-slate-400 absolute left-3 rtl:right-3 rtl:left-auto top-1/2 -translate-y-1/2" />
            <input
              type="text"
              placeholder="ابحث عن قارئ..."
              value={searchReciter}
              onChange={(e) => setSearchReciter(e.target.value)}
              className="w-full pl-9 pr-3 rtl:pr-9 rtl:pl-3 py-2 rounded-xl bg-slate-900 border border-slate-800 text-white text-xs focus:outline-none focus:ring-1 focus:ring-emerald-500"
            />
          </div>
        </div>

        {/* Reciters Cards Horizontal Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-3">
          {filteredReciters.map((reciter) => {
            const isSelected = reciter.id === selectedReciter.id;
            return (
              <div
                key={reciter.id}
                id={`reciter-card-${reciter.id}`}
                onClick={() => onSelectReciter(reciter)}
                className={`p-3.5 rounded-2xl border transition-all cursor-pointer flex items-center justify-between group ${
                  isSelected
                    ? 'bg-emerald-950/40 border-emerald-500/60 shadow-lg shadow-emerald-950/40 ring-1 ring-emerald-500'
                    : 'bg-slate-900/60 border-slate-800 hover:bg-slate-800/40 hover:border-slate-700'
                }`}
              >
                <div className="flex items-center gap-3">
                  <img
                    src={reciter.avatarUrl}
                    alt={reciter.name_en}
                    className="w-12 h-12 rounded-xl object-cover border border-slate-700 group-hover:border-emerald-500/40 transition-colors bg-slate-800"
                    referrerPolicy="no-referrer"
                    onError={(e) => {
                      (e.currentTarget as HTMLImageElement).src = `https://ui-avatars.com/api/?name=${encodeURIComponent(reciter.name_ar)}&background=065f46&color=ecfdf5&bold=true`;
                    }}
                  />
                  <div>
                    <h4 className="text-sm font-bold text-white group-hover:text-emerald-300 transition-colors">
                      {reciter.name_ar}
                    </h4>
                    <p className="text-xs text-slate-400">{reciter.name_en}</p>
                    <span className="text-[10px] text-emerald-400/90 font-mono">
                      {reciter.style}
                    </span>
                  </div>
                </div>

                {isSelected ? (
                  <div className="w-6 h-6 rounded-full bg-emerald-500 text-slate-950 flex items-center justify-center">
                    <Check className="w-3.5 h-3.5 font-bold" />
                  </div>
                ) : (
                  <div className="w-6 h-6 rounded-full bg-slate-800 text-slate-400 flex items-center justify-center group-hover:bg-slate-700">
                    <Play className="w-3 h-3 fill-current" />
                  </div>
                )}
              </div>
            );
          })}
        </div>
      </div>

      {/* SECTION 2: SURAHS AUDIO PLAYLIST */}
      <div className="space-y-4 pt-4 border-t border-slate-800">
        <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between gap-3">
          <div>
            <h2 className="text-lg font-bold text-white flex items-center gap-2">
              <Music className="w-5 h-5 text-emerald-400" />
              <span>سور القرآن الكريم بصوت {selectedReciter.name_ar}</span>
            </h2>
            <p className="text-xs text-slate-400">انقر على أي سورة للاستماع الفوري أو فتح المصحف لمتابعة الآيات</p>
          </div>

          <div className="relative w-full sm:w-64">
            <Search className="w-4 h-4 text-slate-400 absolute left-3 rtl:right-3 rtl:left-auto top-1/2 -translate-y-1/2" />
            <input
              type="text"
              placeholder="ابحث عن سورة..."
              value={searchSurah}
              onChange={(e) => setSearchSurah(e.target.value)}
              className="w-full pl-9 pr-3 rtl:pr-9 rtl:pl-3 py-2 rounded-xl bg-slate-900 border border-slate-800 text-white text-xs focus:outline-none focus:ring-1 focus:ring-emerald-500"
            />
          </div>
        </div>

        {/* Surahs Audio Table */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-2.5">
          {filteredSurahs.map((surah) => {
            const isPlayingThis = isPlaying && activeSurahId === surah.id;
            const isCurrentActive = activeSurahId === surah.id;

            return (
              <div
                key={surah.id}
                className={`p-3.5 rounded-2xl border transition-all flex items-center justify-between ${
                  isPlayingThis
                    ? 'bg-emerald-950/40 border-emerald-500/60 shadow-md shadow-emerald-950/30'
                    : isCurrentActive
                    ? 'bg-slate-800/80 border-slate-700'
                    : 'bg-slate-900/60 border-slate-800/80 hover:bg-slate-800/40 hover:border-slate-700'
                }`}
              >
                {/* Play Button & Number */}
                <div className="flex items-center gap-3">
                  <button
                    onClick={() => {
                      if (isPlayingThis) {
                        onTogglePlay();
                      } else {
                        onPlaySurah(surah.id);
                      }
                    }}
                    className={`w-9 h-9 rounded-xl flex items-center justify-center transition-all ${
                      isPlayingThis
                        ? 'bg-emerald-500 text-slate-950 animate-pulse'
                        : 'bg-slate-800 text-slate-300 hover:bg-emerald-600 hover:text-white'
                    }`}
                  >
                    {isPlayingThis ? (
                      <Pause className="w-4 h-4 fill-current" />
                    ) : (
                      <Play className="w-4 h-4 fill-current translate-x-0.5 rtl:-translate-x-0.5" />
                    )}
                  </button>

                  <div>
                    <h4 className="text-xs font-bold text-white">
                      {surah.id}. {surah.name_en}
                    </h4>
                    <span className="text-[10px] text-slate-400">
                      {surah.verses_count} {t.verses}
                    </span>
                  </div>
                </div>

                {/* Right side: Arabic name & Read button */}
                <div className="flex items-center gap-2">
                  <span className="font-quran text-lg font-bold text-emerald-400">
                    {surah.name_ar}
                  </span>
                  <button
                    onClick={() => onNavigateToQuran(surah.id)}
                    className="p-1.5 rounded-lg text-slate-400 hover:text-white hover:bg-slate-800"
                    title={t.readQuran}
                  >
                    <ArrowRight className="w-3.5 h-3.5 rtl:rotate-180" />
                  </button>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
};
