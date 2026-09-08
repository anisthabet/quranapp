import React, { useState, useEffect, useRef } from 'react';
import { Navbar } from './components/Navbar';
import { QuranReader } from './components/QuranReader';
import { AudioLibrary } from './components/AudioLibrary';
import { AdhkarSection } from './components/AdhkarSection';
import { KhatmahTracker } from './components/KhatmahTracker';
import { IslamicCalendar } from './components/IslamicCalendar';
import { DeveloperSection } from './components/DeveloperSection';
import { QuranAudioPlayer } from './components/QuranAudioPlayer';
import { Language, ReadingProgress, Reciter } from './types';
import { 
  getStoredFontSize, getStoredLanguage, getStoredProgress, 
  getStoredReciter, saveStoredFontSize, saveStoredLanguage, 
  saveStoredProgress, saveStoredReciter 
} from './services/storageService';
import { getAyahAudioUrl, getSurahAudioUrl } from './data/reciters';
import { getSurahById } from './data/surahs';
import { translations } from './data/translations';

export default function App() {
  // Navigation tab state
  const [currentTab, setCurrentTab] = useState<'quran' | 'audio' | 'adhkar' | 'tracker' | 'calendar' | 'developer'>('quran');
  
  // Language & Direction state
  const [language, setLanguage] = useState<Language>(getStoredLanguage);
  
  // Reading & Audio states
  const [selectedReciter, setSelectedReciter] = useState<Reciter>(getStoredReciter);
  const [currentSurahId, setCurrentSurahId] = useState<number>(1);
  const [fontSize, setFontSize] = useState<number>(getStoredFontSize);
  const [progress, setProgress] = useState<ReadingProgress>(getStoredProgress);

  // Audio playback engine
  const audioRef = useRef<HTMLAudioElement | null>(null);
  const [isPlaying, setIsPlaying] = useState<boolean>(false);
  const [activeSurahId, setActiveSurahId] = useState<number>(1);
  const [activeAyahNumber, setActiveAyahNumber] = useState<number | null>(null);
  const [currentTime, setCurrentTime] = useState<number>(0);
  const [duration, setDuration] = useState<number>(0);
  const [playbackSpeed, setPlaybackSpeed] = useState<number>(1);
  const [repeatMode, setRepeatMode] = useState<'none' | 'ayah' | 'surah'>('none');
  const [volume, setVolume] = useState<number>(1);
  const [isPlayerExpanded, setIsPlayerExpanded] = useState<boolean>(false);

  // Notification toast state
  const [toastMessage, setToastMessage] = useState<string | null>(null);

  const showToast = (msg: string) => {
    setToastMessage(msg);
    setTimeout(() => {
      setToastMessage(null);
    }, 2800);
  };

  // Sync language with HTML document dir & lang
  useEffect(() => {
    const isRtl = language === 'ar' || language === 'ur';
    document.documentElement.dir = isRtl ? 'rtl' : 'ltr';
    document.documentElement.lang = language;
    saveStoredLanguage(language);
  }, [language]);

  // Sync progress changes to localStorage
  useEffect(() => {
    saveStoredProgress(progress);
  }, [progress]);

  // Sync reciter changes
  const handleSelectReciter = (reciter: Reciter) => {
    setSelectedReciter(reciter);
    saveStoredReciter(reciter);
    showToast(`تم تعيين القارئ: ${reciter.name_ar}`);
    
    // If currently playing, update source with new reciter
    if (isPlaying) {
      playSurahAudio(activeSurahId, reciter);
    }
  };

  // Sync font size changes
  const handleChangeFontSize = (size: number) => {
    setFontSize(size);
    saveStoredFontSize(size);
  };

  // Initialize Audio Element
  useEffect(() => {
    const audio = new Audio();
    audioRef.current = audio;

    const handleTimeUpdate = () => {
      setCurrentTime(audio.currentTime);
    };

    const handleLoadedMetadata = () => {
      setDuration(audio.duration || 0);
    };

    const handleEnded = () => {
      if (repeatMode === 'ayah' && activeAyahNumber !== null) {
        audio.currentTime = 0;
        audio.play().catch(() => {});
      } else if (repeatMode === 'surah') {
        audio.currentTime = 0;
        audio.play().catch(() => {});
      } else {
        setIsPlaying(false);
      }
    };

    const handleError = () => {
      setIsPlaying(false);
    };

    audio.addEventListener('timeupdate', handleTimeUpdate);
    audio.addEventListener('loadedmetadata', handleLoadedMetadata);
    audio.addEventListener('ended', handleEnded);
    audio.addEventListener('error', handleError);

    return () => {
      audio.pause();
      audio.removeEventListener('timeupdate', handleTimeUpdate);
      audio.removeEventListener('loadedmetadata', handleLoadedMetadata);
      audio.removeEventListener('ended', handleEnded);
      audio.removeEventListener('error', handleError);
    };
  }, [repeatMode, activeAyahNumber]);

  // Audio Playback Controllers
  const playSurahAudio = (surahId: number, reciter: Reciter = selectedReciter) => {
    if (!audioRef.current) return;
    const url = getSurahAudioUrl(reciter, surahId);
    audioRef.current.src = url;
    audioRef.current.playbackRate = playbackSpeed;
    audioRef.current.volume = volume;
    setActiveSurahId(surahId);
    setActiveAyahNumber(null);

    audioRef.current
      .play()
      .then(() => {
        setIsPlaying(true);
      })
      .catch((err) => {
        console.warn('Audio play request interrupted:', err);
      });
  };

  const playAyahAudio = (surahId: number, ayahNumber: number) => {
    if (!audioRef.current) return;
    const url = getAyahAudioUrl(selectedReciter, surahId, ayahNumber);
    audioRef.current.src = url;
    audioRef.current.playbackRate = playbackSpeed;
    audioRef.current.volume = volume;
    setActiveSurahId(surahId);
    setActiveAyahNumber(ayahNumber);

    audioRef.current
      .play()
      .then(() => {
        setIsPlaying(true);
      })
      .catch((err) => {
        console.warn('Ayah audio play interrupted:', err);
      });
  };

  const handleTogglePlay = () => {
    if (!audioRef.current) return;
    if (isPlaying) {
      audioRef.current.pause();
      setIsPlaying(false);
    } else {
      if (!audioRef.current.src || audioRef.current.src === '') {
        playSurahAudio(activeSurahId);
      } else {
        audioRef.current
          .play()
          .then(() => setIsPlaying(true))
          .catch(() => {});
      }
    }
  };

  const handleSeek = (time: number) => {
    if (audioRef.current) {
      audioRef.current.currentTime = time;
      setCurrentTime(time);
    }
  };

  const handleChangeSpeed = (speed: number) => {
    setPlaybackSpeed(speed);
    if (audioRef.current) {
      audioRef.current.playbackRate = speed;
    }
  };

  const handleToggleRepeat = () => {
    const modes: ('none' | 'ayah' | 'surah')[] = ['none', 'ayah', 'surah'];
    const nextIdx = (modes.indexOf(repeatMode) + 1) % modes.length;
    setRepeatMode(modes[nextIdx]);
  };

  const handleChangeVolume = (vol: number) => {
    setVolume(vol);
    if (audioRef.current) {
      audioRef.current.volume = vol;
    }
  };

  // Bookmark Management
  const handleToggleBookmark = (surahId: number, ayahNumber: number, note?: string) => {
    const surah = getSurahById(surahId);
    const existingIdx = progress.bookmarks.findIndex(
      (b) => b.surahId === surahId && b.ayahNumber === ayahNumber
    );

    if (existingIdx >= 0) {
      // Remove bookmark
      setProgress((prev) => ({
        ...prev,
        bookmarks: prev.bookmarks.filter((_, idx) => idx !== existingIdx)
      }));
      showToast('تمت إزالة الآية من العلامات المرجعية');
    } else {
      // Add bookmark
      const newBm = {
        id: `bm-${Date.now()}`,
        surahId,
        surahNameAr: surah?.name_ar || 'سورة',
        surahNameEn: surah?.name_en || 'Surah',
        ayahNumber,
        timestamp: new Date().toISOString(),
        note: note || undefined
      };
      setProgress((prev) => ({
        ...prev,
        bookmarks: [newBm, ...prev.bookmarks]
      }));
      showToast(`تم حفظ العلامة المرجعية: سورة ${surah?.name_ar} (آية ${ayahNumber})`);
    }
  };

  const isBookmarked = (surahId: number, ayahNumber: number): boolean => {
    return progress.bookmarks.some(
      (b) => b.surahId === surahId && b.ayahNumber === ayahNumber
    );
  };

  // Mark Ayah Read
  const handleMarkAyahRead = (surahId: number, ayahNumber: number) => {
    const key = `${surahId}:${ayahNumber}`;
    const todayStr = new Date().toISOString().split('T')[0];

    setProgress((prev) => {
      const isAlreadyRead = !!prev.completedAyahs[key];
      const updatedAyahs = { ...prev.completedAyahs };
      if (isAlreadyRead) {
        delete updatedAyahs[key];
      } else {
        updatedAyahs[key] = true;
      }

      const isAlreadyActiveToday = prev.lastActiveDate === todayStr;
      const newStreak = isAlreadyActiveToday ? prev.streakDays : prev.streakDays + 1;

      return {
        ...prev,
        lastReadSurah: surahId,
        lastReadAyah: ayahNumber,
        completedAyahs: updatedAyahs,
        streakDays: newStreak,
        lastActiveDate: todayStr
      };
    });
  };

  const isAyahRead = (surahId: number, ayahNumber: number): boolean => {
    return !!progress.completedAyahs[`${surahId}:${ayahNumber}`];
  };

  const handleNavigateToSurah = (surahId: number, ayahNumber?: number) => {
    setCurrentSurahId(surahId);
    setCurrentTab('quran');
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const t = translations[language];

  return (
    <div className="min-h-screen bg-[#070d12] text-slate-100 flex flex-col font-sans selection:bg-emerald-500/30 selection:text-emerald-200">
      {/* Top Main Navigation */}
      <Navbar
        currentTab={currentTab}
        onSelectTab={setCurrentTab}
        language={language}
        onSelectLanguage={setLanguage}
        readingProgress={progress}
        isPlayingAudio={isPlaying}
        activeSurahName={getSurahById(activeSurahId)?.name_ar}
        onTogglePlayerDrawer={() => setIsPlayerExpanded(!isPlayerExpanded)}
      />

      {/* Main App Content View Switcher */}
      <main className="flex-1 pb-28">
        {currentTab === 'quran' && (
          <QuranReader
            language={language}
            selectedReciter={selectedReciter}
            currentSurahId={currentSurahId}
            onSelectSurah={setCurrentSurahId}
            onPlayAyahAudio={playAyahAudio}
            onPlaySurahAudio={playSurahAudio}
            isPlayingAudio={isPlaying}
            activeSurahId={activeSurahId}
            activeAyahNumber={activeAyahNumber}
            onToggleBookmark={handleToggleBookmark}
            isBookmarked={isBookmarked}
            onMarkAyahRead={handleMarkAyahRead}
            isAyahRead={isAyahRead}
            fontSize={fontSize}
            onChangeFontSize={handleChangeFontSize}
          />
        )}

        {currentTab === 'audio' && (
          <AudioLibrary
            language={language}
            selectedReciter={selectedReciter}
            onSelectReciter={handleSelectReciter}
            activeSurahId={activeSurahId}
            onPlaySurah={playSurahAudio}
            isPlaying={isPlaying}
            onTogglePlay={handleTogglePlay}
            onNavigateToQuran={handleNavigateToSurah}
          />
        )}

        {currentTab === 'adhkar' && (
          <AdhkarSection language={language} />
        )}

        {currentTab === 'tracker' && (
          <KhatmahTracker
            language={language}
            progress={progress}
            onUpdateProgress={setProgress}
            onNavigateToSurah={handleNavigateToSurah}
          />
        )}

        {currentTab === 'calendar' && (
          <IslamicCalendar language={language} />
        )}

        {currentTab === 'developer' && (
          <DeveloperSection language={language} />
        )}

        {/* Global Developer & Charity Footer */}
        <footer className="mt-16 pt-8 pb-12 border-t border-slate-900 text-center text-xs text-slate-500 space-y-2">
          <p className="flex items-center justify-center gap-1.5 flex-wrap">
            <span>{t.appName}</span>
            <span>•</span>
            <button
              id="footer-developer-link"
              onClick={() => {
                setCurrentTab('developer');
                window.scrollTo({ top: 0, behavior: 'smooth' });
              }}
              className="text-emerald-400 hover:text-emerald-300 font-medium underline underline-offset-4 decoration-emerald-500/40 hover:decoration-emerald-400 transition-colors"
            >
              {language === 'ar' ? 'تطوير: أنيس ثابت (Anis Thabet)' : 'Developed by Anis Thabet'}
            </button>
            <span>•</span>
            <span className="text-slate-400">{t.developerContinuousCharity}</span>
          </p>
        </footer>
      </main>

      {/* Persistent Audio Player at bottom */}
      <QuranAudioPlayer
        language={language}
        selectedReciter={selectedReciter}
        onSelectReciter={handleSelectReciter}
        activeSurahId={activeSurahId}
        onSelectSurah={playSurahAudio}
        isPlaying={isPlaying}
        onTogglePlay={handleTogglePlay}
        currentTime={currentTime}
        duration={duration}
        onSeek={handleSeek}
        playbackSpeed={playbackSpeed}
        onChangeSpeed={handleChangeSpeed}
        repeatMode={repeatMode}
        onToggleRepeat={handleToggleRepeat}
        volume={volume}
        onChangeVolume={handleChangeVolume}
        isExpanded={isPlayerExpanded}
        onToggleExpand={() => setIsPlayerExpanded(!isPlayerExpanded)}
        activeAyahNumber={activeAyahNumber}
      />

      {/* Floating Notification Toast */}
      {toastMessage && (
        <div className="fixed bottom-20 left-1/2 -translate-x-1/2 z-50 px-4 py-2 rounded-2xl bg-emerald-600 text-white text-xs font-semibold shadow-2xl shadow-emerald-950/80 border border-emerald-400/40 animate-bounce">
          {toastMessage}
        </div>
      )}
    </div>
  );
}
