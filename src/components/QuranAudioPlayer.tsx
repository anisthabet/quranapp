import React, { useState } from 'react';
import { 
  Play, Pause, SkipBack, SkipForward, Volume2, VolumeX, RotateCcw, 
  Repeat, User, Check, ChevronUp, ChevronDown, ListMusic, Music
} from 'lucide-react';
import { Language, Reciter, SurahInfo } from '../types';
import { RECITERS_LIST } from '../data/reciters';
import { SURAHS_LIST, getSurahById } from '../data/surahs';
import { translations } from '../data/translations';

interface QuranAudioPlayerProps {
  language: Language;
  selectedReciter: Reciter;
  onSelectReciter: (reciter: Reciter) => void;
  activeSurahId: number;
  onSelectSurah: (id: number) => void;
  isPlaying: boolean;
  onTogglePlay: () => void;
  currentTime: number;
  duration: number;
  onSeek: (time: number) => void;
  playbackSpeed: number;
  onChangeSpeed: (speed: number) => void;
  repeatMode: 'none' | 'ayah' | 'surah';
  onToggleRepeat: () => void;
  volume: number;
  onChangeVolume: (vol: number) => void;
  isExpanded: boolean;
  onToggleExpand: () => void;
  activeAyahNumber: number | null;
}

export const QuranAudioPlayer: React.FC<QuranAudioPlayerProps> = ({
  language,
  selectedReciter,
  onSelectReciter,
  activeSurahId,
  onSelectSurah,
  isPlaying,
  onTogglePlay,
  currentTime,
  duration,
  onSeek,
  playbackSpeed,
  onChangeSpeed,
  repeatMode,
  onToggleRepeat,
  volume,
  onChangeVolume,
  isExpanded,
  onToggleExpand,
  activeAyahNumber
}) => {
  const t = translations[language];
  const [showReciterModal, setShowReciterModal] = useState(false);
  const [showSurahModal, setShowSurahModal] = useState(false);

  const currentSurah: SurahInfo = getSurahById(activeSurahId) || SURAHS_LIST[0];

  const formatTime = (seconds: number) => {
    if (isNaN(seconds) || seconds < 0) return '00:00';
    const mins = Math.floor(seconds / 60);
    const secs = Math.floor(seconds % 60);
    return `${String(mins).padStart(2, '0')}:${String(secs).padStart(2, '0')}`;
  };

  const progressPercent = duration > 0 ? Math.min(100, (currentTime / duration) * 100) : 0;

  const handleNextSurah = () => {
    if (activeSurahId < 114) {
      onSelectSurah(activeSurahId + 1);
    }
  };

  const handlePrevSurah = () => {
    if (activeSurahId > 1) {
      onSelectSurah(activeSurahId - 1);
    }
  };

  return (
    <>
      {/* PERSISTENT FLOATING AUDIO BAR AT BOTTOM */}
      <div className="fixed bottom-0 left-0 right-0 z-50 bg-[#091016]/95 border-t border-emerald-900/40 backdrop-blur-xl shadow-2xl transition-all">
        {/* Top Slim Progress Bar (seekable) */}
        <div 
          className="relative w-full h-1.5 bg-slate-800 cursor-pointer group"
          onClick={(e) => {
            const rect = e.currentTarget.getBoundingClientRect();
            const clickPos = (e.clientX - rect.left) / rect.width;
            if (duration > 0) {
              onSeek(clickPos * duration);
            }
          }}
        >
          <div 
            className="h-full bg-gradient-to-r from-emerald-500 to-teal-400 group-hover:from-emerald-400 group-hover:to-teal-300 transition-all relative"
            style={{ width: `${progressPercent}%` }}
          >
            <div className="absolute right-0 top-1/2 -translate-y-1/2 w-3 h-3 rounded-full bg-emerald-300 shadow opacity-0 group-hover:opacity-100 transition-opacity" />
          </div>
        </div>

        <div className="max-w-7xl mx-auto px-4 py-2.5 sm:py-3">
          <div className="flex items-center justify-between gap-3">
            {/* Left: Current Surah & Reciter Details */}
            <div className="flex items-center gap-3 min-w-0 max-w-[260px] sm:max-w-xs">
              <div 
                className="w-10 h-10 sm:w-12 sm:h-12 rounded-xl overflow-hidden border border-emerald-500/30 flex-shrink-0 relative cursor-pointer"
                onClick={onToggleExpand}
              >
                <img 
                  src={selectedReciter.avatarUrl} 
                  alt={selectedReciter.name_en} 
                  className="w-full h-full object-cover bg-slate-800"
                  referrerPolicy="no-referrer"
                  onError={(e) => {
                    (e.currentTarget as HTMLImageElement).src = `https://ui-avatars.com/api/?name=${encodeURIComponent(selectedReciter.name_ar)}&background=065f46&color=ecfdf5&bold=true`;
                  }}
                />
                <div className="absolute inset-0 bg-emerald-950/20 hover:bg-transparent transition-colors" />
              </div>

              <div className="truncate">
                <div className="flex items-center gap-1.5">
                  <h4 
                    onClick={() => setShowSurahModal(true)}
                    className="font-bold text-sm text-white hover:text-emerald-300 cursor-pointer truncate"
                  >
                    {currentSurah.name_en}
                  </h4>
                  <span className="font-quran text-emerald-400 text-sm hidden sm:inline">
                    ({currentSurah.name_ar})
                  </span>
                  {activeAyahNumber && (
                    <span className="text-[10px] px-1.5 py-0.5 rounded bg-emerald-500/20 text-emerald-300 font-mono">
                      {t.ayah} {activeAyahNumber}
                    </span>
                  )}
                </div>

                <div 
                  onClick={() => setShowReciterModal(true)}
                  className="text-xs text-slate-400 hover:text-slate-200 cursor-pointer flex items-center gap-1 mt-0.5 truncate"
                >
                  <User className="w-3 h-3 text-emerald-400" />
                  <span className="truncate">{selectedReciter.name_ar}</span>
                </div>
              </div>
            </div>

            {/* Center: Main Playback Controls & Time */}
            <div className="flex flex-col items-center gap-1 flex-1 max-w-md">
              <div className="flex items-center gap-3 sm:gap-4">
                {/* Previous Surah */}
                <button
                  id="audio-prev-btn"
                  onClick={handlePrevSurah}
                  disabled={activeSurahId <= 1}
                  className="text-slate-400 hover:text-white disabled:opacity-30 transition-colors p-1"
                  title={t.prevSurah}
                >
                  <SkipBack className="w-4 h-4 rtl:rotate-180" />
                </button>

                {/* Play / Pause Main Button */}
                <button
                  id="audio-main-play-btn"
                  onClick={onTogglePlay}
                  className="w-10 h-10 sm:w-11 sm:h-11 rounded-full bg-emerald-500 hover:bg-emerald-400 text-slate-950 flex items-center justify-center shadow-lg shadow-emerald-900/50 transition-transform active:scale-95"
                >
                  {isPlaying ? (
                    <Pause className="w-5 h-5 fill-current" />
                  ) : (
                    <Play className="w-5 h-5 fill-current translate-x-0.5 rtl:-translate-x-0.5" />
                  )}
                </button>

                {/* Next Surah */}
                <button
                  id="audio-next-btn"
                  onClick={handleNextSurah}
                  disabled={activeSurahId >= 114}
                  className="text-slate-400 hover:text-white disabled:opacity-30 transition-colors p-1"
                  title={t.nextSurah}
                >
                  <SkipForward className="w-4 h-4 rtl:rotate-180" />
                </button>
              </div>

              {/* Time display */}
              <div className="hidden sm:flex items-center gap-2 text-[11px] text-slate-400 font-mono">
                <span>{formatTime(currentTime)}</span>
                <span>/</span>
                <span>{formatTime(duration)}</span>
              </div>
            </div>

            {/* Right: Repeat, Speed, Reciter Switcher, Expand */}
            <div className="flex items-center gap-1.5 sm:gap-2">
              {/* Repeat Mode */}
              <button
                id="audio-repeat-btn"
                onClick={onToggleRepeat}
                className={`p-2 rounded-xl text-xs transition-colors hidden md:flex items-center gap-1 ${
                  repeatMode !== 'none'
                    ? 'bg-emerald-500/20 text-emerald-300 border border-emerald-500/30'
                    : 'text-slate-400 hover:text-white'
                }`}
                title={`${t.repeat}: ${repeatMode}`}
              >
                <Repeat className="w-4 h-4" />
                <span className="text-[10px] uppercase font-bold">
                  {repeatMode === 'none' ? '' : repeatMode === 'ayah' ? '1' : '∞'}
                </span>
              </button>

              {/* Speed Controller */}
              <button
                id="audio-speed-btn"
                onClick={() => {
                  const speeds = [0.75, 1, 1.25, 1.5];
                  const nextIdx = (speeds.indexOf(playbackSpeed) + 1) % speeds.length;
                  onChangeSpeed(speeds[nextIdx]);
                }}
                className="px-2 py-1.5 rounded-xl bg-slate-900 border border-slate-800 text-slate-300 text-xs font-mono font-semibold hover:text-white transition-colors"
                title={t.speed}
              >
                {playbackSpeed}x
              </button>

              {/* Reciter Selector Modal Trigger */}
              <button
                id="select-reciter-btn"
                onClick={() => setShowReciterModal(true)}
                className="p-2 rounded-xl bg-slate-900 border border-slate-800 text-slate-300 hover:text-white hover:border-slate-700 transition-colors"
                title={t.selectReciter}
              >
                <User className="w-4 h-4 text-emerald-400" />
              </button>

              {/* Expand / Minimize Full View */}
              <button
                onClick={onToggleExpand}
                className="p-2 rounded-xl text-slate-400 hover:text-white transition-colors"
                title="Expand Player"
              >
                {isExpanded ? <ChevronDown className="w-4 h-4" /> : <ChevronUp className="w-4 h-4" />}
              </button>
            </div>
          </div>
        </div>
      </div>

      {/* MODAL: RECITER SELECTOR */}
      {showReciterModal && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/80 backdrop-blur-sm">
          <div className="bg-slate-900 border border-slate-800 rounded-3xl w-full max-w-2xl max-h-[85vh] overflow-hidden flex flex-col shadow-2xl">
            {/* Modal Header */}
            <div className="p-5 border-b border-slate-800 flex items-center justify-between">
              <div className="flex items-center gap-2">
                <Music className="w-5 h-5 text-emerald-400" />
                <h3 className="text-lg font-bold text-white">{t.selectReciter}</h3>
              </div>
              <button
                onClick={() => setShowReciterModal(false)}
                className="text-slate-400 hover:text-white text-xs px-3 py-1.5 rounded-lg bg-slate-800"
              >
                {t.close}
              </button>
            </div>

            {/* Reciter List Grid */}
            <div className="p-5 overflow-y-auto space-y-2.5">
              {RECITERS_LIST.map((reciter) => {
                const isSelected = reciter.id === selectedReciter.id;
                return (
                  <div
                    key={reciter.id}
                    id={`reciter-option-${reciter.id}`}
                    onClick={() => {
                      onSelectReciter(reciter);
                      setShowReciterModal(false);
                    }}
                    className={`p-3.5 rounded-2xl border transition-all cursor-pointer flex items-center justify-between ${
                      isSelected
                        ? 'bg-emerald-950/40 border-emerald-500 shadow-md shadow-emerald-950/40'
                        : 'bg-slate-950/40 border-slate-800/80 hover:bg-slate-800/40 hover:border-slate-700'
                    }`}
                  >
                    <div className="flex items-center gap-3.5">
                      <img
                        src={reciter.avatarUrl}
                        alt={reciter.name_en}
                        className="w-12 h-12 rounded-xl object-cover border border-slate-700 bg-slate-800"
                        referrerPolicy="no-referrer"
                        onError={(e) => {
                          (e.currentTarget as HTMLImageElement).src = `https://ui-avatars.com/api/?name=${encodeURIComponent(reciter.name_ar)}&background=065f46&color=ecfdf5&bold=true`;
                        }}
                      />
                      <div>
                        <h4 className="text-sm font-bold text-white group-hover:text-emerald-300">
                          {reciter.name_ar}
                        </h4>
                        <p className="text-xs text-slate-400">{reciter.name_en}</p>
                        <div className="flex items-center gap-2 mt-1 text-[11px] text-slate-500">
                          <span className="text-emerald-400/90">{reciter.style}</span>
                          <span>•</span>
                          <span>{reciter.country}</span>
                        </div>
                      </div>
                    </div>

                    {isSelected && (
                      <div className="w-6 h-6 rounded-full bg-emerald-500 text-slate-950 flex items-center justify-center">
                        <Check className="w-4 h-4 font-bold" />
                      </div>
                    )}
                  </div>
                );
              })}
            </div>
          </div>
        </div>
      )}

      {/* MODAL: SURAH QUICK SELECTOR */}
      {showSurahModal && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/80 backdrop-blur-sm">
          <div className="bg-slate-900 border border-slate-800 rounded-3xl w-full max-w-xl max-h-[85vh] overflow-hidden flex flex-col shadow-2xl">
            <div className="p-5 border-b border-slate-800 flex items-center justify-between">
              <div className="flex items-center gap-2">
                <ListMusic className="w-5 h-5 text-emerald-400" />
                <h3 className="text-lg font-bold text-white">{t.allSurahs} (1-114)</h3>
              </div>
              <button
                onClick={() => setShowSurahModal(false)}
                className="text-slate-400 hover:text-white text-xs px-3 py-1.5 rounded-lg bg-slate-800"
              >
                {t.close}
              </button>
            </div>

            <div className="p-4 overflow-y-auto grid grid-cols-2 gap-2">
              {SURAHS_LIST.map((surah) => (
                <button
                  key={surah.id}
                  onClick={() => {
                    onSelectSurah(surah.id);
                    setShowSurahModal(false);
                  }}
                  className={`p-2.5 rounded-xl border text-start flex items-center justify-between transition-colors ${
                    surah.id === activeSurahId
                      ? 'bg-emerald-600 text-white border-emerald-500 font-semibold'
                      : 'bg-slate-950/40 border-slate-800 text-slate-300 hover:bg-slate-800'
                  }`}
                >
                  <span className="text-xs">{surah.id}. {surah.name_en}</span>
                  <span className="font-quran text-sm text-emerald-400">{surah.name_ar}</span>
                </button>
              ))}
            </div>
          </div>
        </div>
      )}
    </>
  );
};
