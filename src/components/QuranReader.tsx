import React, { useState, useEffect, useMemo, useRef } from 'react';
import { 
  Search, Play, Pause, Bookmark, Check, Copy, ArrowLeft, ArrowRight, 
  Volume2, Sliders, Eye, BookOpen, Sparkles, Layers, Share2
} from 'lucide-react';
import { Ayah, Bookmark as BookmarkType, Language, Reciter, SurahInfo } from '../types';
import { SURAHS_LIST, getSurahById } from '../data/surahs';
import { translations } from '../data/translations';
import { fetchSurahAyahs } from '../services/quranService';

interface QuranReaderProps {
  language: Language;
  selectedReciter: Reciter;
  currentSurahId: number;
  onSelectSurah: (id: number) => void;
  onPlayAyahAudio: (surahId: number, ayahNumber: number) => void;
  onPlaySurahAudio: (surahId: number) => void;
  isPlayingAudio: boolean;
  activeSurahId: number | null;
  activeAyahNumber: number | null;
  onToggleBookmark: (surahId: number, ayahNumber: number, note?: string) => void;
  isBookmarked: (surahId: number, ayahNumber: number) => boolean;
  onMarkAyahRead: (surahId: number, ayahNumber: number) => void;
  isAyahRead: (surahId: number, ayahNumber: number) => boolean;
  fontSize: number;
  onChangeFontSize: (size: number) => void;
}

export const QuranReader: React.FC<QuranReaderProps> = ({
  language,
  selectedReciter,
  currentSurahId,
  onSelectSurah,
  onPlayAyahAudio,
  onPlaySurahAudio,
  isPlayingAudio,
  activeSurahId,
  activeAyahNumber,
  onToggleBookmark,
  isBookmarked,
  onMarkAyahRead,
  isAyahRead,
  fontSize,
  onChangeFontSize
}) => {
  const t = translations[language];
  const [viewMode, setViewMode] = useState<'list' | 'reading'>('list');
  const [searchQuery, setSearchQuery] = useState('');
  const [filterType, setFilterType] = useState<'all' | 'makkah' | 'madinah'>('all');
  const [ayahs, setAyahs] = useState<Ayah[]>([]);
  const [loadingAyahs, setLoadingAyahs] = useState(false);
  const [showTranslation, setShowTranslation] = useState(true);
  const [mushafViewMode, setMushafViewMode] = useState<'cards' | 'continuous'>('cards');
  const [copyFeedback, setCopyFeedback] = useState<number | null>(null);

  const activeAyahRef = useRef<HTMLDivElement | null>(null);

  // Load ayahs when currentSurahId changes
  useEffect(() => {
    let isMounted = true;
    async function loadData() {
      setLoadingAyahs(true);
      try {
        const data = await fetchSurahAyahs(currentSurahId, language);
        if (isMounted) {
          setAyahs(data);
        }
      } catch (err) {
        console.error('Failed to load ayahs', err);
      } finally {
        if (isMounted) {
          setLoadingAyahs(false);
        }
      }
    }
    loadData();
    return () => {
      isMounted = false;
    };
  }, [currentSurahId, language]);

  // Scroll to active ayah when playing
  useEffect(() => {
    if (activeAyahNumber && activeAyahRef.current) {
      activeAyahRef.current.scrollIntoView({ behavior: 'smooth', block: 'center' });
    }
  }, [activeAyahNumber]);

  const currentSurah = useMemo(() => getSurahById(currentSurahId) || SURAHS_LIST[0], [currentSurahId]);

  // Filtered surahs for index list
  const filteredSurahs = useMemo(() => {
    return SURAHS_LIST.filter((s) => {
      const matchesSearch =
        s.name_ar.includes(searchQuery) ||
        s.name_en.toLowerCase().includes(searchQuery.toLowerCase()) ||
        s.id.toString() === searchQuery.trim() ||
        (s.name_translation[language] && s.name_translation[language].toLowerCase().includes(searchQuery.toLowerCase()));

      const matchesFilter = filterType === 'all' || s.revelation_place === filterType;
      return matchesSearch && matchesFilter;
    });
  }, [searchQuery, filterType, language]);

  const handleOpenSurah = (id: number) => {
    onSelectSurah(id);
    setViewMode('reading');
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const handleCopyAyah = (ayah: Ayah) => {
    const textToCopy = `${ayah.text_ar}\n\n"${ayah.translations[language] || ayah.translations.en}"\n— [Surah ${currentSurah.name_en}: ${ayah.numberInSurah}]`;
    navigator.clipboard.writeText(textToCopy);
    setCopyFeedback(ayah.numberInSurah);
    setTimeout(() => setCopyFeedback(null), 2000);
  };

  return (
    <div className="max-w-6xl mx-auto px-4 py-6 space-y-6">
      {/* Top Header / View Controller */}
      <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4 pb-2 border-b border-slate-800">
        <div>
          <h1 className="text-2xl font-bold text-white tracking-tight flex items-center gap-2.5">
            <BookOpen className="w-6 h-6 text-emerald-400" />
            <span>{viewMode === 'list' ? t.allSurahs : `${t.surah} ${currentSurah.name_ar} (${currentSurah.name_en})`}</span>
          </h1>
          <p className="text-xs text-slate-400 mt-0.5">
            {viewMode === 'list' 
              ? `${SURAHS_LIST.length} ${t.surah} • 6,236 ${t.verses} • 30 ${t.juz}`
              : `${currentSurah.verses_count} ${t.verses} • ${currentSurah.revelation_place === 'makkah' ? t.meccan : t.medinan} • ${t.juz} ${currentSurah.juz.join(', ')}`}
          </p>
        </div>

        {/* Action button toggles */}
        <div className="flex items-center gap-2 self-stretch sm:self-auto justify-between sm:justify-end">
          {viewMode === 'reading' && (
            <button
              id="back-to-surahs-btn"
              onClick={() => setViewMode('list')}
              className="flex items-center gap-1.5 px-3 py-1.5 rounded-xl bg-slate-800 hover:bg-slate-700 text-slate-200 text-xs font-medium transition-colors"
            >
              <ArrowLeft className="w-4 h-4 rtl:rotate-180" />
              <span>{t.allSurahs}</span>
            </button>
          )}

          {viewMode === 'list' && (
            <button
              id="continue-current-reading-btn"
              onClick={() => setViewMode('reading')}
              className="flex items-center gap-1.5 px-4 py-1.5 rounded-xl bg-emerald-600 hover:bg-emerald-500 text-white text-xs font-semibold shadow-md shadow-emerald-900/40 transition-colors"
            >
              <span>{t.readQuran}</span>
              <span className="font-quran">({currentSurah.name_ar})</span>
            </button>
          )}
        </div>
      </div>

      {/* VIEW MODE 1: SURAH LIST INDEX */}
      {viewMode === 'list' && (
        <div className="space-y-6">
          {/* Search & Filter Controls */}
          <div className="flex flex-col sm:flex-row gap-3 items-center justify-between">
            <div className="relative w-full sm:max-w-md">
              <Search className="w-4 h-4 text-slate-400 absolute left-3 rtl:right-3 rtl:left-auto top-1/2 -translate-y-1/2" />
              <input
                id="search-surah-input"
                type="text"
                placeholder={t.searchPlaceholder}
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                className="w-full pl-9 pr-4 rtl:pr-9 rtl:pl-4 py-2.5 rounded-xl bg-slate-900 border border-slate-800 text-slate-100 placeholder-slate-500 text-sm focus:outline-none focus:ring-2 focus:ring-emerald-500/40 focus:border-emerald-500 transition-all"
              />
            </div>

            {/* Revelation filters */}
            <div className="flex items-center gap-1.5 p-1 rounded-xl bg-slate-900 border border-slate-800 self-stretch sm:self-auto justify-center">
              <button
                id="filter-all"
                onClick={() => setFilterType('all')}
                className={`px-3 py-1.5 rounded-lg text-xs font-medium transition-colors ${
                  filterType === 'all'
                    ? 'bg-emerald-600 text-white font-semibold shadow'
                    : 'text-slate-400 hover:text-white'
                }`}
              >
                {t.allSurahs}
              </button>
              <button
                id="filter-makkah"
                onClick={() => setFilterType('makkah')}
                className={`px-3 py-1.5 rounded-lg text-xs font-medium transition-colors ${
                  filterType === 'makkah'
                    ? 'bg-emerald-600 text-white font-semibold shadow'
                    : 'text-slate-400 hover:text-white'
                }`}
              >
                {t.meccan}
              </button>
              <button
                id="filter-madinah"
                onClick={() => setFilterType('madinah')}
                className={`px-3 py-1.5 rounded-lg text-xs font-medium transition-colors ${
                  filterType === 'madinah'
                    ? 'bg-emerald-600 text-white font-semibold shadow'
                    : 'text-slate-400 hover:text-white'
                }`}
              >
                {t.medinan}
              </button>
            </div>
          </div>

          {/* Surah Grid */}
          {filteredSurahs.length === 0 ? (
            <div className="py-16 text-center text-slate-400 bg-slate-900/40 rounded-2xl border border-slate-800/80">
              <BookOpen className="w-10 h-10 text-slate-600 mx-auto mb-3" />
              <p className="text-sm">{t.noSurahFound}</p>
            </div>
          ) : (
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-3">
              {filteredSurahs.map((surah) => {
                const isSelected = surah.id === currentSurahId;
                const isPlaying = isPlayingAudio && activeSurahId === surah.id;

                return (
                  <div
                    key={surah.id}
                    id={`surah-card-${surah.id}`}
                    onClick={() => handleOpenSurah(surah.id)}
                    className={`group relative p-4 rounded-2xl border transition-all cursor-pointer flex items-center justify-between ${
                      isSelected
                        ? 'bg-emerald-950/30 border-emerald-500/40 shadow-lg shadow-emerald-950/30 ring-1 ring-emerald-500/30'
                        : 'bg-slate-900/60 border-slate-800/80 hover:bg-slate-800/50 hover:border-slate-700'
                    }`}
                  >
                    {/* Left side: Surah number & English info */}
                    <div className="flex items-center gap-3.5">
                      {/* Number Medallion */}
                      <div className={`w-11 h-11 rounded-xl flex items-center justify-center font-bold text-sm transition-colors ${
                        isPlaying
                          ? 'bg-emerald-500 text-white shadow-md shadow-emerald-600/30 animate-pulse'
                          : isSelected
                          ? 'bg-emerald-500/20 text-emerald-300 border border-emerald-500/30'
                          : 'bg-slate-800 text-slate-300 group-hover:bg-slate-700 group-hover:text-white'
                      }`}>
                        {surah.id}
                      </div>

                      <div>
                        <div className="flex items-center gap-1.5">
                          <h3 className="text-sm font-semibold text-white group-hover:text-emerald-300 transition-colors">
                            {surah.name_en}
                          </h3>
                          {isPlaying && (
                            <Volume2 className="w-3.5 h-3.5 text-emerald-400 animate-pulse" />
                          )}
                        </div>
                        <p className="text-xs text-slate-400 truncate max-w-[140px]">
                          {surah.name_translation[language] || surah.name_translation.en}
                        </p>
                        <div className="flex items-center gap-2 mt-1 text-[11px] text-slate-500">
                          <span>{surah.verses_count} {t.verses}</span>
                          <span>•</span>
                          <span>{surah.revelation_place === 'makkah' ? t.meccan : t.medinan}</span>
                        </div>
                      </div>
                    </div>

                    {/* Right side: Arabic Calligraphy Name */}
                    <div className="text-right rtl:text-left">
                      <span className="font-quran text-2xl font-bold text-emerald-400/90 group-hover:text-emerald-300 transition-colors">
                        {surah.name_ar}
                      </span>
                      <div className="text-[10px] text-slate-400 mt-1">
                        {t.juz} {surah.juz.join(', ')}
                      </div>
                    </div>
                  </div>
                );
              })}
            </div>
          )}
        </div>
      )}

      {/* VIEW MODE 2: SURAH READING VIEW */}
      {viewMode === 'reading' && (
        <div className="space-y-6">
          {/* Surah Header Card with Calligraphy and Controls */}
          <div className="relative overflow-hidden rounded-3xl bg-gradient-to-br from-emerald-950/60 via-slate-900 to-slate-950 border border-emerald-800/30 p-6 shadow-xl">
            {/* Background geometric accents */}
            <div className="absolute top-0 right-0 -mt-8 -mr-8 w-48 h-48 bg-emerald-500/5 rounded-full blur-3xl pointer-events-none" />
            <div className="absolute bottom-0 left-0 -mb-8 -ml-8 w-48 h-48 bg-teal-500/5 rounded-full blur-3xl pointer-events-none" />

            <div className="relative z-10 flex flex-col md:flex-row items-center justify-between gap-6 text-center md:text-start rtl:md:text-right">
              {/* Surah Details */}
              <div className="space-y-2">
                <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-emerald-500/10 border border-emerald-500/20 text-emerald-300 text-xs font-semibold">
                  <span>{t.surah} {currentSurah.id}</span>
                  <span>•</span>
                  <span>{currentSurah.revelation_place === 'makkah' ? t.meccan : t.medinan}</span>
                  <span>•</span>
                  <span>{currentSurah.verses_count} {t.verses}</span>
                </div>
                
                <h2 className="text-2xl md:text-3xl font-bold text-white tracking-tight">
                  {currentSurah.name_en} — <span className="font-quran text-emerald-300">{currentSurah.name_ar}</span>
                </h2>
                <p className="text-sm text-slate-300 max-w-xl">
                  {currentSurah.name_translation[language] || currentSurah.name_translation.en} • {t.juz} {currentSurah.juz.join(', ')}
                </p>
              </div>

              {/* Audio Listen Quick Button & Navigation */}
              <div className="flex flex-wrap items-center justify-center gap-2.5">
                <button
                  id="play-surah-btn"
                  onClick={() => onPlaySurahAudio(currentSurah.id)}
                  className={`flex items-center gap-2 px-4 py-2.5 rounded-xl font-semibold text-xs shadow-lg transition-all ${
                    isPlayingAudio && activeSurahId === currentSurah.id
                      ? 'bg-amber-500 text-slate-950 shadow-amber-950/40 hover:bg-amber-400'
                      : 'bg-emerald-600 text-white shadow-emerald-950/50 hover:bg-emerald-500'
                  }`}
                >
                  {isPlayingAudio && activeSurahId === currentSurah.id ? (
                    <>
                      <Pause className="w-4 h-4 fill-current" />
                      <span>{t.pause}</span>
                    </>
                  ) : (
                    <>
                      <Play className="w-4 h-4 fill-current" />
                      <span>{t.listenSurah} ({selectedReciter.name_ar.split(' ')[0]})</span>
                    </>
                  )}
                </button>

                {/* Prev / Next Surah Buttons */}
                <div className="flex items-center gap-1 bg-slate-800/80 p-1 rounded-xl border border-slate-700/60">
                  <button
                    disabled={currentSurah.id <= 1}
                    onClick={() => onSelectSurah(currentSurah.id - 1)}
                    className="p-1.5 rounded-lg text-slate-300 hover:text-white hover:bg-slate-700 disabled:opacity-30 disabled:pointer-events-none transition-colors"
                    title={t.prevSurah}
                  >
                    <ArrowLeft className="w-4 h-4 rtl:rotate-180" />
                  </button>
                  <span className="text-xs px-2 text-slate-400 font-mono">
                    {currentSurah.id}/114
                  </span>
                  <button
                    disabled={currentSurah.id >= 114}
                    onClick={() => onSelectSurah(currentSurah.id + 1)}
                    className="p-1.5 rounded-lg text-slate-300 hover:text-white hover:bg-slate-700 disabled:opacity-30 disabled:pointer-events-none transition-colors"
                    title={t.nextSurah}
                  >
                    <ArrowRight className="w-4 h-4 rtl:rotate-180" />
                  </button>
                </div>
              </div>
            </div>

            {/* Reading Preferences Bar: Font size, translation toggle, view mode */}
            <div className="mt-6 pt-4 border-t border-slate-800/80 flex flex-wrap items-center justify-between gap-3 text-xs text-slate-300">
              {/* Font Size Selector */}
              <div className="flex items-center gap-2">
                <span className="text-slate-400">{t.fontSize}:</span>
                <div className="flex items-center gap-1 bg-slate-900 px-2 py-1 rounded-lg border border-slate-800">
                  <button
                    onClick={() => onChangeFontSize(Math.max(22, fontSize - 2))}
                    className="px-2 py-0.5 hover:text-emerald-400 font-bold"
                    title="Smaller"
                  >
                    A-
                  </button>
                  <span className="font-mono text-emerald-400 px-1">{fontSize}px</span>
                  <button
                    onClick={() => onChangeFontSize(Math.min(46, fontSize + 2))}
                    className="px-2 py-0.5 hover:text-emerald-400 font-bold"
                    title="Larger"
                  >
                    A+
                  </button>
                </div>
              </div>

              {/* Translation & Transliteration Toggles */}
              <div className="flex items-center gap-3">
                <button
                  id="toggle-translation-btn"
                  onClick={() => setShowTranslation(!showTranslation)}
                  className={`flex items-center gap-1.5 px-2.5 py-1 rounded-lg border transition-colors ${
                    showTranslation
                      ? 'bg-emerald-500/15 border-emerald-500/30 text-emerald-300'
                      : 'bg-slate-900 border-slate-800 text-slate-400 hover:text-slate-200'
                  }`}
                >
                  <Eye className="w-3.5 h-3.5" />
                  <span>{t.showTranslation}</span>
                </button>

                {/* Card vs Continuous Mode */}
                <button
                  id="toggle-mushaf-view-btn"
                  onClick={() => setMushafViewMode(mushafViewMode === 'cards' ? 'continuous' : 'cards')}
                  className="flex items-center gap-1.5 px-2.5 py-1 rounded-lg bg-slate-900 border border-slate-800 text-slate-300 hover:text-white transition-colors"
                >
                  <Layers className="w-3.5 h-3.5 text-emerald-400" />
                  <span>{mushafViewMode === 'cards' ? t.verseByVerse : t.mushafMode}</span>
                </button>
              </div>
            </div>
          </div>

          {/* Bismillah Banner (except Surah 9 At-Tawbah) */}
          {currentSurah.id !== 9 && (
            <div className="py-6 text-center border-y border-emerald-900/20 bg-emerald-950/10 rounded-2xl my-4">
              <p className="font-quran text-2xl md:text-3xl text-emerald-200 tracking-wide select-none">
                بِسْمِ اللَّهِ الرَّحْمَٰنِ الرَّحِيمِ
              </p>
              {showTranslation && (
                <p className="text-xs text-slate-400 mt-1 italic">
                  {t.bismillah}
                </p>
              )}
            </div>
          )}

          {/* Verses Container */}
          {loadingAyahs ? (
            <div className="py-20 text-center text-slate-400 space-y-3">
              <div className="w-8 h-8 border-2 border-emerald-500 border-t-transparent rounded-full animate-spin mx-auto" />
              <p className="text-sm">جاري تحميل الآيات الكريمة...</p>
            </div>
          ) : (
            <>
              {/* DISPLAY OPTION 1: VERSE BY VERSE CARDS */}
              {mushafViewMode === 'cards' ? (
                <div className="space-y-4">
                  {ayahs.map((ayah) => {
                    const isPlayingCurrentAyah =
                      isPlayingAudio &&
                      activeSurahId === currentSurah.id &&
                      activeAyahNumber === ayah.numberInSurah;
                    const bookmarked = isBookmarked(currentSurah.id, ayah.numberInSurah);
                    const read = isAyahRead(currentSurah.id, ayah.numberInSurah);

                    return (
                      <div
                        key={ayah.numberInSurah}
                        ref={isPlayingCurrentAyah ? activeAyahRef : null}
                        id={`ayah-card-${currentSurah.id}-${ayah.numberInSurah}`}
                        className={`p-5 rounded-2xl border transition-all duration-300 ${
                          isPlayingCurrentAyah
                            ? 'bg-emerald-950/40 border-emerald-500 shadow-xl shadow-emerald-950/50 ring-1 ring-emerald-500'
                            : 'bg-slate-900/70 border-slate-800/80 hover:border-slate-700/80'
                        }`}
                      >
                        {/* Ayah Actions Top Bar */}
                        <div className="flex items-center justify-between pb-3 mb-4 border-b border-slate-800/60 text-xs">
                          {/* Ayah Number Pill */}
                          <div className="flex items-center gap-2">
                            <span className="w-7 h-7 rounded-lg bg-slate-800 border border-slate-700/60 text-emerald-400 font-bold text-xs flex items-center justify-center font-mono">
                              {ayah.numberInSurah}
                            </span>
                            <span className="text-slate-400 text-[11px]">
                              {t.juz} {ayah.juz} • {t.page} {ayah.page}
                            </span>
                          </div>

                          {/* Quick Actions: Play Ayah, Bookmark, Copy, Mark Read */}
                          <div className="flex items-center gap-1.5">
                            {/* Play individual ayah audio */}
                            <button
                              onClick={() => onPlayAyahAudio(currentSurah.id, ayah.numberInSurah)}
                              className={`p-1.5 rounded-lg transition-colors ${
                                isPlayingCurrentAyah
                                  ? 'bg-emerald-500 text-white'
                                  : 'text-slate-400 hover:text-emerald-300 hover:bg-slate-800'
                              }`}
                              title={t.playAyah}
                            >
                              <Play className="w-3.5 h-3.5 fill-current" />
                            </button>

                            {/* Bookmark */}
                            <button
                              onClick={() => onToggleBookmark(currentSurah.id, ayah.numberInSurah)}
                              className={`p-1.5 rounded-lg transition-colors ${
                                bookmarked
                                  ? 'bg-amber-500/20 text-amber-400 border border-amber-500/30'
                                  : 'text-slate-400 hover:text-amber-400 hover:bg-slate-800'
                              }`}
                              title={bookmarked ? t.bookmarked : t.bookmark}
                            >
                              <Bookmark className={`w-3.5 h-3.5 ${bookmarked ? 'fill-current' : ''}`} />
                            </button>

                            {/* Copy */}
                            <button
                              onClick={() => handleCopyAyah(ayah)}
                              className="p-1.5 rounded-lg text-slate-400 hover:text-white hover:bg-slate-800 transition-colors"
                              title={copyFeedback === ayah.numberInSurah ? t.copied : t.copyAyah}
                            >
                              {copyFeedback === ayah.numberInSurah ? (
                                <Check className="w-3.5 h-3.5 text-emerald-400" />
                              ) : (
                                <Copy className="w-3.5 h-3.5" />
                              )}
                            </button>

                            {/* Mark as read */}
                            <button
                              onClick={() => onMarkAyahRead(currentSurah.id, ayah.numberInSurah)}
                              className={`flex items-center gap-1 px-2 py-1 rounded-lg text-[11px] font-medium transition-colors ${
                                read
                                  ? 'bg-emerald-500/20 text-emerald-300 border border-emerald-500/30'
                                  : 'text-slate-400 hover:text-slate-200 hover:bg-slate-800'
                              }`}
                              title={read ? t.markedAsRead : t.markAsRead}
                            >
                              <Check className="w-3 h-3" />
                              <span className="hidden sm:inline">{read ? t.markedAsRead : t.markAsRead}</span>
                            </button>
                          </div>
                        </div>

                        {/* Arabic Text with custom font size */}
                        <div className="py-2 text-right rtl:text-right" dir="rtl">
                          <p 
                            className="font-quran leading-[2.2] text-slate-100 font-medium"
                            style={{ fontSize: `${fontSize}px` }}
                          >
                            {ayah.text_ar}
                            <span className="inline-flex items-center justify-center mx-2 text-emerald-400 font-quran text-lg select-none">
                              ۝{ayah.numberInSurah}
                            </span>
                          </p>
                        </div>

                        {/* Translation */}
                        {showTranslation && (
                          <div className="mt-3 pt-3 border-t border-slate-800/40 text-start">
                            <p className="text-slate-300 text-sm md:text-base leading-relaxed">
                              {ayah.translations[language] || ayah.translations.en}
                            </p>
                          </div>
                        )}
                      </div>
                    );
                  })}
                </div>
              ) : (
                /* DISPLAY OPTION 2: CONTINUOUS MUSHAF READING VIEW */
                <div className="p-8 rounded-3xl bg-slate-900/80 border border-slate-800 shadow-xl">
                  <div className="text-justify rtl:text-right leading-[2.8]" dir="rtl">
                    {ayahs.map((ayah) => {
                      const isPlayingCurrentAyah =
                        isPlayingAudio &&
                        activeSurahId === currentSurah.id &&
                        activeAyahNumber === ayah.numberInSurah;
                      const bookmarked = isBookmarked(currentSurah.id, ayah.numberInSurah);

                      return (
                        <span
                          key={ayah.numberInSurah}
                          id={`continuous-ayah-${ayah.numberInSurah}`}
                          onClick={() => onPlayAyahAudio(currentSurah.id, ayah.numberInSurah)}
                          className={`font-quran inline cursor-pointer px-1 rounded transition-colors ${
                            isPlayingCurrentAyah
                              ? 'bg-emerald-500/30 text-emerald-200 font-bold'
                              : bookmarked
                              ? 'bg-amber-500/20 text-amber-200'
                              : 'text-slate-100 hover:text-emerald-300 hover:bg-slate-800/50'
                          }`}
                          style={{ fontSize: `${fontSize}px` }}
                        >
                          {ayah.text_ar}
                          <span className="inline-flex items-center justify-center mx-1.5 text-emerald-400 text-xl select-none">
                            ۝{ayah.numberInSurah}
                          </span>
                        </span>
                      );
                    })}
                  </div>
                </div>
              )}
            </>
          )}

          {/* Bottom Surah Navigation Bar */}
          <div className="flex items-center justify-between pt-6 border-t border-slate-800">
            <button
              disabled={currentSurah.id <= 1}
              onClick={() => {
                onSelectSurah(currentSurah.id - 1);
                window.scrollTo({ top: 0, behavior: 'smooth' });
              }}
              className="flex items-center gap-2 px-4 py-2 rounded-xl bg-slate-900 border border-slate-800 text-slate-300 hover:text-white disabled:opacity-30 disabled:pointer-events-none text-xs font-medium transition-colors"
            >
              <ArrowLeft className="w-4 h-4 rtl:rotate-180" />
              <span>{t.prevSurah}</span>
            </button>

            <button
              onClick={() => {
                window.scrollTo({ top: 0, behavior: 'smooth' });
              }}
              className="text-xs text-emerald-400 hover:underline"
            >
              ↑ العودة للأعلى
            </button>

            <button
              disabled={currentSurah.id >= 114}
              onClick={() => {
                onSelectSurah(currentSurah.id + 1);
                window.scrollTo({ top: 0, behavior: 'smooth' });
              }}
              className="flex items-center gap-2 px-4 py-2 rounded-xl bg-slate-900 border border-slate-800 text-slate-300 hover:text-white disabled:opacity-30 disabled:pointer-events-none text-xs font-medium transition-colors"
            >
              <span>{t.nextSurah}</span>
              <ArrowRight className="w-4 h-4 rtl:rotate-180" />
            </button>
          </div>
        </div>
      )}
    </div>
  );
};
