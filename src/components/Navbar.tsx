import React, { useState } from 'react';
import { BookOpen, Headphones, Heart, Calendar as CalendarIcon, Award, Globe, Sparkles, ChevronDown, Check, Code2 } from 'lucide-react';
import { Language, ReadingProgress } from '../types';
import { translations } from '../data/translations';

interface NavbarProps {
  currentTab: 'quran' | 'audio' | 'adhkar' | 'tracker' | 'calendar' | 'developer';
  onSelectTab: (tab: 'quran' | 'audio' | 'adhkar' | 'tracker' | 'calendar' | 'developer') => void;
  language: Language;
  onSelectLanguage: (lang: Language) => void;
  readingProgress: ReadingProgress;
  isPlayingAudio: boolean;
  activeSurahName?: string;
  onTogglePlayerDrawer: () => void;
}

const LANGUAGES_CONFIG: { code: Language; label: string; nativeName: string; dir: 'rtl' | 'ltr' }[] = [
  { code: 'ar', label: 'Arabic', nativeName: 'العربية', dir: 'rtl' },
  { code: 'en', label: 'English', nativeName: 'English', dir: 'ltr' },
  { code: 'fr', label: 'French', nativeName: 'Français', dir: 'ltr' },
  { code: 'ur', label: 'Urdu', nativeName: 'اردو', dir: 'rtl' },
  { code: 'id', label: 'Indonesian', nativeName: 'Bahasa Indonesia', dir: 'ltr' },
  { code: 'tr', label: 'Turkish', nativeName: 'Türkçe', dir: 'ltr' }
];

export const Navbar: React.FC<NavbarProps> = ({
  currentTab,
  onSelectTab,
  language,
  onSelectLanguage,
  readingProgress,
  isPlayingAudio,
  activeSurahName,
  onTogglePlayerDrawer
}) => {
  const [langDropdownOpen, setLangDropdownOpen] = useState(false);
  const t = translations[language];

  const currentLangObj = LANGUAGES_CONFIG.find((l) => l.code === language) || LANGUAGES_CONFIG[0];

  const navItems = [
    { 
      id: 'quran', 
      label: t.navQuran, 
      shortLabel: language === 'ar' ? 'القرآن' : (language === 'fr' ? 'Coran' : (language === 'ur' ? 'قرآن' : (language === 'id' ? 'Quran' : (language === 'tr' ? 'Kuran' : 'Quran')))), 
      icon: BookOpen 
    },
    { 
      id: 'audio', 
      label: t.navAudio, 
      shortLabel: language === 'ar' ? 'الصوتيات' : (language === 'fr' ? 'Audio' : (language === 'ur' ? 'آڈیو' : (language === 'id' ? 'Audio' : (language === 'tr' ? 'Ses' : 'Audio')))), 
      icon: Headphones 
    },
    { 
      id: 'adhkar', 
      label: t.navAdhkar, 
      shortLabel: language === 'ar' ? 'الأذكار' : (language === 'fr' ? 'Adhkar' : (language === 'ur' ? 'اذکار' : (language === 'id' ? 'Dzikir' : (language === 'tr' ? 'Zikirler' : 'Adhkar')))), 
      icon: Heart 
    },
    { 
      id: 'tracker', 
      label: t.navTracker, 
      shortLabel: language === 'ar' ? 'الختمة' : (language === 'fr' ? 'Suivi' : (language === 'ur' ? 'ختم' : (language === 'id' ? 'Khatam' : (language === 'tr' ? 'Takip' : 'Tracker')))), 
      icon: Award 
    },
    { 
      id: 'calendar', 
      label: t.navCalendar, 
      shortLabel: language === 'ar' ? 'التقويم' : (language === 'fr' ? 'Calendrier' : (language === 'ur' ? 'کیلنڈر' : (language === 'id' ? 'Kalender' : (language === 'tr' ? 'Takvim' : 'Calendar')))), 
      icon: CalendarIcon 
    },
    { 
      id: 'developer', 
      label: t.navDeveloper, 
      shortLabel: language === 'ar' ? 'المطور' : (language === 'fr' ? 'Dév' : (language === 'ur' ? 'ڈویلپر' : (language === 'id' ? 'Dev' : (language === 'tr' ? 'Geliştirici' : 'Dev')))), 
      icon: Code2 
    }
  ] as const;

  return (
    <header className="sticky top-0 z-40 bg-[#0b1319]/90 backdrop-blur-md border-b border-emerald-900/30">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-18">
          {/* Brand / Logo */}
          <div className="flex items-center space-x-3 rtl:space-x-reverse cursor-pointer" onClick={() => onSelectTab('quran')}>
            <div className="w-10 h-10 rounded-xl bg-gradient-to-br from-emerald-500 to-teal-700 flex items-center justify-center shadow-lg shadow-emerald-950/50 border border-emerald-400/20">
              <span className="text-xl font-bold text-emerald-100 font-quran">۞</span>
            </div>
            <div>
              <div className="flex items-center gap-1.5">
                <span className="font-bold text-lg text-emerald-50 tracking-tight">{t.appName}</span>
                <span className="text-[10px] uppercase font-semibold tracking-wider px-1.5 py-0.5 rounded bg-emerald-500/10 text-emerald-400 border border-emerald-500/20">
                  Pro
                </span>
              </div>
              <p className="text-xs text-slate-400 hidden 2xl:block truncate max-w-[220px]">
                {t.appSubtitle}
              </p>
            </div>
          </div>

          {/* Desktop Navigation Links */}
          <nav className="hidden lg:flex items-center gap-1 xl:gap-1.5 bg-slate-900/60 p-1 xl:p-1.5 rounded-2xl border border-slate-800">
            {navItems.map((item) => {
              const Icon = item.icon;
              const isActive = currentTab === item.id;
              return (
                <button
                  key={item.id}
                  id={`nav-tab-${item.id}`}
                  onClick={() => onSelectTab(item.id)}
                  className={`flex items-center gap-1.5 xl:gap-2 px-2.5 xl:px-3.5 py-1.5 xl:py-2 rounded-xl text-xs xl:text-sm font-medium transition-all whitespace-nowrap ${
                    isActive
                      ? 'bg-emerald-600 text-white shadow-md shadow-emerald-900/40 font-semibold'
                      : 'text-slate-400 hover:text-slate-100 hover:bg-slate-800/60'
                  }`}
                >
                  <Icon className={`w-3.5 h-3.5 xl:w-4 xl:h-4 flex-shrink-0 ${isActive ? 'text-emerald-100' : 'text-slate-400'}`} />
                  <span>{item.label}</span>
                </button>
              );
            })}
          </nav>

          {/* Right Action Items: Streak, Audio pill, Language Dropdown */}
          <div className="flex items-center gap-2">
            {/* Reading Streak Badge (hidden on lg, visible on xl+) */}
            <button
              id="streak-badge-btn"
              onClick={() => onSelectTab('tracker')}
              className="hidden xl:flex items-center gap-1.5 px-3 py-1.5 rounded-xl bg-amber-500/10 border border-amber-500/20 text-amber-300 text-xs font-semibold hover:bg-amber-500/20 transition-colors"
              title={`${readingProgress.streakDays} ${t.daysStreak}`}
            >
              <Sparkles className="w-3.5 h-3.5 text-amber-400" />
              <span>{readingProgress.streakDays} {t.daysStreak}</span>
            </button>

            {/* Now Playing Mini Pill */}
            {isPlayingAudio && (
              <button
                id="mini-player-pill"
                onClick={onTogglePlayerDrawer}
                className="flex items-center gap-2 px-3 py-1.5 rounded-xl bg-emerald-500/15 border border-emerald-500/30 text-emerald-300 text-xs font-medium hover:bg-emerald-500/25 transition-all animate-pulse"
              >
                <div className="flex items-end gap-0.5 h-3.5">
                  <span className="w-1 bg-emerald-400 animate-bounce h-full rounded-full" style={{ animationDelay: '0ms' }} />
                  <span className="w-1 bg-emerald-400 animate-bounce h-2/3 rounded-full" style={{ animationDelay: '150ms' }} />
                  <span className="w-1 bg-emerald-400 animate-bounce h-4/5 rounded-full" style={{ animationDelay: '300ms' }} />
                </div>
                <span className="hidden md:inline max-w-[90px] truncate">{activeSurahName || t.nowPlaying}</span>
              </button>
            )}

            {/* Language Selector Dropdown */}
            <div className="relative">
              <button
                id="language-selector-btn"
                onClick={() => setLangDropdownOpen(!langDropdownOpen)}
                className="flex items-center gap-1.5 px-3 py-2 rounded-xl bg-slate-900 border border-slate-800 text-slate-300 hover:text-white hover:border-slate-700 text-xs font-medium transition-colors"
              >
                <Globe className="w-3.5 h-3.5 text-emerald-400" />
                <span>{currentLangObj.nativeName}</span>
                <ChevronDown className="w-3.5 h-3.5 text-slate-400" />
              </button>

              {langDropdownOpen && (
                <>
                  <div
                    className="fixed inset-0 z-40"
                    onClick={() => setLangDropdownOpen(false)}
                  />
                  <div className="absolute right-0 rtl:left-0 rtl:right-auto mt-2 w-48 rounded-xl bg-slate-900 border border-slate-800 shadow-2xl z-50 py-1.5 backdrop-blur-xl">
                    <div className="px-3 py-1.5 text-[11px] font-semibold text-slate-400 uppercase tracking-wider border-b border-slate-800">
                      {t.language}
                    </div>
                    {LANGUAGES_CONFIG.map((lang) => {
                      const isSelected = language === lang.code;
                      return (
                        <button
                          key={lang.code}
                          onClick={() => {
                            onSelectLanguage(lang.code);
                            setLangDropdownOpen(false);
                          }}
                          className={`w-full flex items-center justify-between px-3 py-2 text-xs text-start transition-colors ${
                            isSelected
                              ? 'bg-emerald-600/15 text-emerald-300 font-semibold'
                              : 'text-slate-300 hover:bg-slate-800/70 hover:text-white'
                          }`}
                        >
                          <div className="flex flex-col">
                            <span>{lang.nativeName}</span>
                            <span className="text-[10px] text-slate-400">{lang.label}</span>
                          </div>
                          {isSelected && <Check className="w-3.5 h-3.5 text-emerald-400" />}
                        </button>
                      );
                    })}
                  </div>
                </>
              )}
            </div>
          </div>
        </div>
      </div>

      {/* Mobile Bottom Navigation Bar */}
      <div className="lg:hidden border-t border-slate-800/80 bg-[#070e14]/95 backdrop-blur-md px-1 py-1.5 flex items-center justify-between gap-0.5">
        {navItems.map((item) => {
          const Icon = item.icon;
          const isActive = currentTab === item.id;
          return (
            <button
              key={item.id}
              id={`mobile-nav-tab-${item.id}`}
              onClick={() => onSelectTab(item.id)}
              className={`flex-1 min-w-0 flex flex-col items-center justify-center gap-1 py-1 px-1 rounded-xl text-[10.5px] font-medium transition-all ${
                isActive 
                  ? 'text-emerald-300 bg-emerald-500/15 font-semibold shadow-sm shadow-emerald-950/40' 
                  : 'text-slate-400 hover:text-slate-200 hover:bg-slate-900/60'
              }`}
            >
              <Icon className={`w-4 h-4 flex-shrink-0 transition-transform ${isActive ? 'text-emerald-400 scale-110' : 'text-slate-400'}`} />
              <span className="truncate w-full text-center leading-tight tracking-tight px-0.5">{item.shortLabel}</span>
            </button>
          );
        })}
      </div>
    </header>
  );
};
