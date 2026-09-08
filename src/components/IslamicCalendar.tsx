import React, { useState, useMemo } from 'react';
import { 
  Calendar as CalendarIcon, ChevronLeft, ChevronRight, Moon, 
  Sparkles, Star, Clock, Heart, Award, Info
} from 'lucide-react';
import { Language } from '../types';
import { 
  HIJRI_MONTHS, ISLAMIC_EVENTS, getHijriDate, isWhiteDay 
} from '../data/islamicCalendar';
import { translations } from '../data/translations';

interface IslamicCalendarProps {
  language: Language;
}

export const IslamicCalendar: React.FC<IslamicCalendarProps> = ({ language }) => {
  const t = translations[language];
  const [offsetDays, setOffsetDays] = useState<number>(0);
  const [selectedEventId, setSelectedEventId] = useState<string | null>(null);

  // Today's dates with offset
  const todayHijri = useMemo(() => getHijriDate(new Date(), offsetDays), [offsetDays]);

  // Weekday names
  const WEEKDAYS = [
    { ar: 'الأحد', en: 'Sun', fr: 'Dim', ur: 'اتوار', id: 'Min', tr: 'Paz' },
    { ar: 'الإثنين', en: 'Mon', fr: 'Lun', ur: 'پیر', id: 'Sen', tr: 'Pzt' },
    { ar: 'الثلاثاء', en: 'Tue', fr: 'Mar', ur: 'منگل', id: 'Sel', tr: 'Sal' },
    { ar: 'الأربعاء', en: 'Wed', fr: 'Mer', ur: 'بدھ', id: 'Rab', tr: 'Çar' },
    { ar: 'الخميس', en: 'Thu', fr: 'Jeu', ur: 'جمعرات', id: 'Kam', tr: 'Per' },
    { ar: 'الجمعة', en: 'Fri', fr: 'Ven', ur: 'جمعہ', id: 'Jum', tr: 'Cum' },
    { ar: 'السبت', en: 'Sat', fr: 'Sam', ur: 'ہفتہ', id: 'Sab', tr: 'Cmt' }
  ];

  // Generate days in current Hijri month (approx 29 or 30 days)
  const monthDays = useMemo(() => {
    const days = [];
    const currentMonth = todayHijri.month;
    const currentYear = todayHijri.year;

    // Approximate days in month (29 or 30)
    const totalDaysInMonth = 30;

    for (let day = 1; day <= totalDaysInMonth; day++) {
      // Calculate Gregorian date offset for each day
      const dayDiff = day - todayHijri.day;
      const gregDate = new Date(todayHijri.gregorianDate.getTime() + dayDiff * 86400000);
      const isToday = day === todayHijri.day;
      const isWhite = isWhiteDay(day);

      // Check if there is an Islamic event on this day
      const eventOnDay = ISLAMIC_EVENTS.find(
        (e) => e.hijriMonth === currentMonth && e.hijriDay === day
      );

      days.push({
        day,
        month: currentMonth,
        year: currentYear,
        dayOfWeek: gregDate.getDay(),
        gregorianDate: gregDate,
        isToday,
        isWhite,
        event: eventOnDay
      });
    }
    return days;
  }, [todayHijri]);

  // Find next upcoming event
  const upcomingEvents = useMemo(() => {
    return ISLAMIC_EVENTS.map((event) => {
      let monthDiff = event.hijriMonth - todayHijri.month;
      if (monthDiff < 0 || (monthDiff === 0 && event.hijriDay < todayHijri.day)) {
        monthDiff += 12;
      }
      const daysUntil = monthDiff * 30 + (event.hijriDay - todayHijri.day);
      return { ...event, daysUntil };
    }).sort((a, b) => a.daysUntil - b.daysUntil);
  }, [todayHijri]);

  const nextUpcoming = upcomingEvents[0];

  return (
    <div className="max-w-5xl mx-auto px-4 py-6 space-y-8">
      {/* Top Banner Card: Today's Hijri & Gregorian Date */}
      <div className="relative overflow-hidden rounded-3xl bg-gradient-to-r from-emerald-950/80 via-slate-900 to-slate-950 border border-emerald-800/30 p-6 sm:p-8 shadow-xl">
        <div className="flex flex-col md:flex-row items-center justify-between gap-6">
          <div className="space-y-3 text-center md:text-start rtl:md:text-right">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-emerald-500/10 border border-emerald-500/20 text-emerald-300 text-xs font-semibold">
              <Moon className="w-3.5 h-3.5 text-emerald-400" />
              <span>{t.hijriCalendar}</span>
            </div>

            {/* Giant Hijri Date */}
            <div>
              <h1 className="text-3xl sm:text-4xl md:text-5xl font-bold text-white font-quran tracking-wide leading-tight">
                {todayHijri.day} {todayHijri.monthName.ar} {todayHijri.year} هـ
              </h1>
              <p className="text-sm sm:text-base text-emerald-400/90 font-medium mt-1">
                {todayHijri.day} {todayHijri.monthName[language] || todayHijri.monthName.en} {todayHijri.year} AH
              </p>
            </div>

            {/* Gregorian Date */}
            <p className="text-xs text-slate-400 flex items-center justify-center md:justify-start gap-2">
              <CalendarIcon className="w-3.5 h-3.5 text-slate-500" />
              <span>
                {todayHijri.gregorianDate.toLocaleDateString(language === 'ar' ? 'ar-SA' : 'en-US', {
                  weekday: 'long',
                  year: 'numeric',
                  month: 'long',
                  day: 'numeric'
                })}
              </span>
            </p>
          </div>

          {/* Sighting Adjustment Controls */}
          <div className="flex flex-col items-center gap-2 bg-slate-900/90 p-4 rounded-2xl border border-slate-800 min-w-[200px]">
            <span className="text-[11px] text-slate-400">{t.moonSightingOffset}:</span>
            <div className="flex items-center gap-2">
              <button
                onClick={() => setOffsetDays((prev) => Math.max(-2, prev - 1))}
                className="w-8 h-8 rounded-lg bg-slate-800 hover:bg-slate-700 text-white font-bold flex items-center justify-center text-sm"
                title="يوم للخلف"
              >
                -1
              </button>
              <span className="font-mono text-emerald-400 font-bold px-2">
                {offsetDays > 0 ? `+${offsetDays}` : offsetDays} {t.daysStreak}
              </span>
              <button
                onClick={() => setOffsetDays((prev) => Math.min(2, prev + 1))}
                className="w-8 h-8 rounded-lg bg-slate-800 hover:bg-slate-700 text-white font-bold flex items-center justify-center text-sm"
                title="يوم للأمام"
              >
                +1
              </button>
            </div>
            {offsetDays !== 0 && (
              <button
                onClick={() => setOffsetDays(0)}
                className="text-[10px] text-slate-500 hover:text-slate-300 underline"
              >
                إعادة ضبط
              </button>
            )}
          </div>
        </div>
      </div>

      {/* Next Upcoming Major Event Alert */}
      {nextUpcoming && (
        <div className="p-4 sm:p-5 rounded-2xl bg-gradient-to-r from-amber-500/10 via-amber-600/5 to-transparent border border-amber-500/30 flex items-center justify-between gap-4">
          <div className="flex items-center gap-3">
            <div className="w-10 h-10 rounded-xl bg-amber-500/20 text-amber-400 flex items-center justify-center flex-shrink-0">
              <Sparkles className="w-5 h-5" />
            </div>
            <div>
              <div className="flex items-center gap-2">
                <span className="text-[10px] uppercase font-bold tracking-wider px-2 py-0.5 rounded bg-amber-500/20 text-amber-300">
                  {t.nextEvent}
                </span>
                <h3 className="text-sm font-bold text-white">
                  {nextUpcoming.title[language] || nextUpcoming.title.ar}
                </h3>
              </div>
              <p className="text-xs text-slate-300 mt-0.5">
                {nextUpcoming.hijriDay} {HIJRI_MONTHS[nextUpcoming.hijriMonth].ar} • {nextUpcoming.description[language] || nextUpcoming.description.ar}
              </p>
            </div>
          </div>

          <div className="text-center flex-shrink-0 bg-slate-900/80 px-3.5 py-2 rounded-xl border border-slate-800">
            <span className="text-lg font-black text-amber-400 font-mono">
              {nextUpcoming.daysUntil}
            </span>
            <span className="text-[10px] text-slate-400 block">{t.daysRemaining}</span>
          </div>
        </div>
      )}

      {/* Month Days Grid */}
      <div className="p-6 rounded-3xl bg-slate-900/90 border border-slate-800 space-y-4 shadow-xl">
        <div className="flex items-center justify-between pb-2 border-b border-slate-800">
          <div>
            <h2 className="text-lg font-bold text-white font-quran">
              شهر {todayHijri.monthName.ar} ({todayHijri.year} هـ)
            </h2>
            <p className="text-xs text-slate-400">
              {todayHijri.monthName[language] || todayHijri.monthName.en} • {todayHijri.gregorianDate.toLocaleString('default', { month: 'long', year: 'numeric' })}
            </p>
          </div>

          {/* Legend Badges */}
          <div className="hidden sm:flex items-center gap-3 text-xs">
            <div className="flex items-center gap-1.5 text-slate-400">
              <div className="w-3 h-3 rounded bg-emerald-500" />
              <span>{t.today}</span>
            </div>
            <div className="flex items-center gap-1.5 text-slate-400">
              <div className="w-3 h-3 rounded bg-amber-500/40 border border-amber-400" />
              <span>{t.whiteDays}</span>
            </div>
          </div>
        </div>

        {/* Day Headers (Sun - Sat) */}
        <div className="grid grid-cols-7 gap-2 text-center text-xs font-bold text-slate-400 py-1">
          {WEEKDAYS.map((w, idx) => (
            <div key={idx} className={idx === 5 ? 'text-emerald-400' : ''}>
              {w[language] || w.en}
            </div>
          ))}
        </div>

        {/* Calendar Grid Cells */}
        <div className="grid grid-cols-7 gap-2">
          {/* Leading empty spaces for first day of month alignment */}
          {Array.from({ length: monthDays[0]?.dayOfWeek || 0 }).map((_, i) => (
            <div key={`empty-${i}`} className="min-h-[70px] rounded-2xl bg-slate-950/20" />
          ))}

          {monthDays.map((d) => {
            const isFriday = d.dayOfWeek === 5;
            return (
              <div
                key={d.day}
                id={`calendar-day-${d.day}`}
                className={`min-h-[70px] sm:min-h-[85px] p-2 rounded-2xl border transition-all flex flex-col justify-between relative ${
                  d.isToday
                    ? 'bg-emerald-600 text-white border-emerald-400 shadow-lg shadow-emerald-950/60 ring-2 ring-emerald-400'
                    : d.isWhite
                    ? 'bg-amber-500/10 border-amber-500/30 text-amber-200'
                    : d.event
                    ? 'bg-purple-950/30 border-purple-500/30 text-purple-200'
                    : 'bg-slate-950/50 border-slate-800/80 text-slate-200 hover:border-slate-700'
                }`}
              >
                {/* Top: Hijri Day Number */}
                <div className="flex items-center justify-between">
                  <span className={`text-base sm:text-lg font-bold font-mono ${d.isToday ? 'text-white' : isFriday ? 'text-emerald-400' : ''}`}>
                    {d.day}
                  </span>

                  {d.isToday && (
                    <span className="w-2 h-2 rounded-full bg-white animate-pulse" />
                  )}

                  {d.isWhite && !d.isToday && (
                    <span className="text-[10px] px-1 py-0.2 rounded bg-amber-500/20 text-amber-300">
                      أبيض
                    </span>
                  )}
                </div>

                {/* Event or Friday Indicator */}
                {d.event && (
                  <div className="text-[9px] sm:text-[10px] truncate font-medium text-purple-300">
                    {d.event.title[language] || d.event.title.ar}
                  </div>
                )}

                {/* Bottom: Gregorian Day Number */}
                <div className={`text-[10px] font-mono text-end ${d.isToday ? 'text-emerald-100' : 'text-slate-500'}`}>
                  {d.gregorianDate.getDate()} {d.gregorianDate.toLocaleString('default', { month: 'short' })}
                </div>
              </div>
            );
          })}
        </div>
      </div>

      {/* Islamic Major Events Directory */}
      <div className="space-y-4">
        <h2 className="text-xl font-bold text-white flex items-center gap-2">
          <Star className="w-5 h-5 text-amber-400" />
          <span>{t.islamicEvents}</span>
        </h2>

        <div className="grid grid-cols-1 sm:grid-cols-2 gap-3.5">
          {ISLAMIC_EVENTS.map((event) => (
            <div
              key={event.id}
              className="p-4 rounded-2xl bg-slate-900 border border-slate-800 hover:border-slate-700 transition-colors space-y-2"
            >
              <div className="flex items-center justify-between">
                <h3 className="text-sm font-bold text-white flex items-center gap-2">
                  <span>{event.title[language] || event.title.ar}</span>
                  {event.isHoliday && (
                    <span className="text-[10px] px-1.5 py-0.5 rounded bg-emerald-500/20 text-emerald-300">
                      عطلة
                    </span>
                  )}
                </h3>

                <span className="text-xs font-mono font-semibold text-emerald-400">
                  {event.hijriDay} {HIJRI_MONTHS[event.hijriMonth]?.ar}
                </span>
              </div>

              <p className="text-xs text-slate-300 leading-relaxed">
                {event.description[language] || event.description.ar}
              </p>

              {event.virtue && (
                <div className="p-2.5 rounded-xl bg-slate-950/60 border border-slate-800 text-[11px] text-amber-300/90 flex items-start gap-1.5">
                  <Sparkles className="w-3.5 h-3.5 text-amber-400 flex-shrink-0 mt-0.5" />
                  <span>{event.virtue[language] || event.virtue.ar}</span>
                </div>
              )}
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};
