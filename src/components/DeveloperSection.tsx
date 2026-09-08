import React, { useState } from 'react';
import { 
  Mail, 
  Copy, 
  Check, 
  Sparkles, 
  Send, 
  ShieldCheck, 
  Heart,
  Globe2,
  CheckCircle2,
  Code2,
  Download,
  Smartphone
} from 'lucide-react';
import { Language } from '../types';
import { translations } from '../data/translations';

interface DeveloperSectionProps {
  language: Language;
}

export const DeveloperSection: React.FC<DeveloperSectionProps> = ({ language }) => {
  const t = translations[language];
  const [copiedEmail, setCopiedEmail] = useState(false);

  const developerEmail = 'anisthabet126@gmail.com';

  const handleCopyEmail = () => {
    navigator.clipboard.writeText(developerEmail);
    setCopiedEmail(true);
    setTimeout(() => setCopiedEmail(false), 2200);
  };

  return (
    <div className="max-w-4xl mx-auto px-4 sm:px-6 py-8 space-y-8 animate-fadeIn">
      {/* Developer Hero Card */}
      <div className="relative overflow-hidden rounded-3xl bg-gradient-to-br from-slate-900/95 via-[#0c1820] to-emerald-950/40 border border-emerald-500/30 p-6 sm:p-8 shadow-2xl shadow-emerald-950/60">
        <div className="absolute top-0 right-0 w-80 h-80 bg-emerald-500/10 rounded-full blur-3xl pointer-events-none -mr-20 -mt-20" />
        <div className="absolute bottom-0 left-0 w-64 h-64 bg-teal-500/10 rounded-full blur-2xl pointer-events-none -ml-20 -mb-20" />

        <div className="relative z-10 flex flex-col md:flex-row items-center md:items-start gap-6 justify-between text-center md:text-start">
          <div className="flex flex-col sm:flex-row items-center gap-6">
            {/* Developer Monogram / Code Badge */}
            <div className="relative flex-shrink-0">
              <div className="w-24 h-24 sm:w-28 sm:h-28 rounded-3xl overflow-hidden shadow-2xl shadow-emerald-950/70 border-2 border-emerald-500/40 bg-gradient-to-br from-emerald-900/50 via-slate-900 to-teal-950/70 flex flex-col items-center justify-center p-3 group hover:border-emerald-400 transition-colors">
                <Code2 className="w-8 h-8 sm:w-9 sm:h-9 text-emerald-400 mb-1 group-hover:scale-110 transition-transform" />
                <span className="text-white font-bold text-sm sm:text-base tracking-widest font-mono">
                  AT
                </span>
              </div>

              {/* Online Active Indicator */}
              <span className="absolute bottom-1 right-1 rtl:right-auto rtl:left-1 w-4 h-4 bg-emerald-500 border-2 border-slate-900 rounded-full flex items-center justify-center shadow-md">
                <span className="w-1.5 h-1.5 bg-white rounded-full animate-ping" />
              </span>
            </div>

            {/* Identity Info */}
            <div className="space-y-2">
              <div className="flex flex-wrap items-center justify-center md:justify-start gap-2.5">
                <h1 className="text-2xl sm:text-3xl font-bold text-white tracking-tight">
                  {language === 'ar' ? 'أنيس ثابت' : 'Anis Thabet'}
                </h1>
                <span className="px-2.5 py-0.5 rounded-full bg-emerald-500/20 text-emerald-300 border border-emerald-500/40 text-xs font-semibold">
                  {language === 'ar' ? 'المطور والمصمم' : 'Lead Developer & Creator'}
                </span>
              </div>
              <p className="text-sm sm:text-base text-emerald-400 font-medium">
                {t.developerRole}
              </p>
              <div className="flex items-center justify-center md:justify-start gap-2 text-xs text-slate-400">
                <Globe2 className="w-3.5 h-3.5 text-emerald-400/80" />
                <span>Noor Al-Quran & Adhkar Pro</span>
                <span>•</span>
                <span className="text-slate-300 font-medium">Web & Full Stack</span>
              </div>
            </div>
          </div>

          {/* Contact Action Buttons */}
          <div className="flex flex-wrap items-center gap-3 w-full md:w-auto justify-center">
            <a
              id="dev-download-apk-btn"
              href="/NoorAlQuran.apk"
              download="NoorAlQuran.apk"
              className="flex-1 sm:flex-none flex items-center justify-center gap-2 px-5 py-2.5 rounded-xl bg-amber-500/20 hover:bg-amber-500/30 border border-amber-500/40 text-amber-300 text-sm font-semibold shadow-lg shadow-amber-950/30 transition-all hover:scale-[1.02] active:scale-[0.98]"
            >
              <Smartphone className="w-4 h-4 text-amber-400" />
              <span>{language === 'ar' ? 'تحميل تطبيق أندرويد (APK)' : 'Download Android App (APK)'}</span>
              <Download className="w-3.5 h-3.5 text-amber-400/80" />
            </a>

            <a
              id="dev-send-email-btn"
              href={`mailto:${developerEmail}?subject=Noor%20Al-Quran%20Platform%20Inquiry`}
              className="flex-1 sm:flex-none flex items-center justify-center gap-2 px-5 py-2.5 rounded-xl bg-emerald-600 hover:bg-emerald-500 text-white text-sm font-semibold shadow-lg shadow-emerald-900/50 transition-all hover:scale-[1.02] active:scale-[0.98]"
            >
              <Send className="w-4 h-4" />
              <span>{t.developerSendEmail}</span>
            </a>

            <button
              id="dev-copy-email-btn"
              onClick={handleCopyEmail}
              className="flex items-center justify-center gap-2 px-4 py-2.5 rounded-xl bg-slate-800/80 hover:bg-slate-700/80 border border-slate-700 text-slate-200 text-sm font-medium transition-all hover:text-white"
              title={developerEmail}
            >
              {copiedEmail ? (
                <>
                  <Check className="w-4 h-4 text-emerald-400" />
                  <span className="text-emerald-400 text-xs">{t.developerCopied}</span>
                </>
              ) : (
                <>
                  <Copy className="w-4 h-4 text-slate-400" />
                  <span className="text-xs">{t.developerCopyEmail}</span>
                </>
              )}
            </button>
          </div>
        </div>

        {/* Continuous Charity Ribbon */}
        <div className="mt-6 pt-5 border-t border-slate-800/80 flex flex-col sm:flex-row items-center justify-between gap-3 text-xs text-slate-300">
          <div className="flex items-center gap-2 text-emerald-300 font-medium">
            <Heart className="w-4 h-4 text-rose-400 fill-rose-400/20" />
            <span>{t.developerContinuousCharity}</span>
          </div>
          <div className="flex items-center gap-2 font-mono text-slate-300 text-[11px] bg-slate-950/60 px-3 py-1.5 rounded-xl border border-slate-800">
            <Mail className="w-3.5 h-3.5 text-emerald-400" />
            <span>{developerEmail}</span>
          </div>
        </div>
      </div>

      {/* Bio & Project Description Cards */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        {/* Developer Bio */}
        <div className="rounded-3xl bg-slate-900/60 border border-slate-800/80 p-6 sm:p-7 space-y-4 shadow-lg">
          <div className="flex items-center gap-2.5 text-emerald-400">
            <Sparkles className="w-5 h-5" />
            <h2 className="text-base font-bold text-white">
              {language === 'ar' ? 'نبذة عن المطور والرؤية' : 'About the Creator & Vision'}
            </h2>
          </div>
          <p className="text-sm text-slate-300 leading-relaxed">
            {t.developerBio}
          </p>
          <div className="p-4 rounded-2xl bg-emerald-950/20 border border-emerald-500/20 text-xs text-emerald-200/90 leading-relaxed">
            {t.developerMission}
          </div>
        </div>

        {/* Quality Principles */}
        <div className="rounded-3xl bg-slate-900/60 border border-slate-800/80 p-6 sm:p-7 space-y-4 shadow-lg">
          <div className="flex items-center gap-2.5 text-emerald-400">
            <ShieldCheck className="w-5 h-5" />
            <h2 className="text-base font-bold text-white">
              {language === 'ar' ? 'مبادئ وأهداف المنصة' : 'Platform Standards & Goals'}
            </h2>
          </div>
          <ul className="space-y-3 text-xs text-slate-300">
            <li className="flex items-start gap-2.5">
              <CheckCircle2 className="w-4 h-4 text-emerald-400 flex-shrink-0 mt-0.5" />
              <span>{language === 'ar' ? 'منصة نقية خالية تماماً من الإعلانات والمشتتات احتراماً لكتاب الله ولخشوع القارئ.' : 'Completely ad-free sanctuary dedicated to Quran recitation and spiritual focus.'}</span>
            </li>
            <li className="flex items-start gap-2.5">
              <CheckCircle2 className="w-4 h-4 text-emerald-400 flex-shrink-0 mt-0.5" />
              <span>{language === 'ar' ? 'اعتماد الرسم العثماني الدقيق مع علامات الوقف والترجمات المعتمدة بعدة لغات.' : 'Authentic Uthmani Quranic script with certified multilingual translations.'}</span>
            </li>
            <li className="flex items-start gap-2.5">
              <CheckCircle2 className="w-4 h-4 text-emerald-400 flex-shrink-0 mt-0.5" />
              <span>{language === 'ar' ? 'تلاوات صوتية نقية لكبار القراء مع توفير صورهم الحقيقية المعتمدة.' : 'Verified studio-quality recitations from renowned reciters with real portraits.'}</span>
            </li>
            <li className="flex items-start gap-2.5">
              <CheckCircle2 className="w-4 h-4 text-emerald-400 flex-shrink-0 mt-0.5" />
              <span>{language === 'ar' ? 'حفظ الخصوصية التامة: تقدم الختمة والملاحظات محفوظة محلياً على جهازك دون جمع بيانات.' : 'Full client-side privacy: reading progress and bookmarks are stored securely on your own device.'}</span>
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
};
