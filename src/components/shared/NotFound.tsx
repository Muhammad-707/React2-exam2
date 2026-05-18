import React from "react";
import { Link } from "react-router-dom";
import { useTranslation } from "react-i18next";
import { Home, MessageSquare } from "lucide-react";
export default function NotFound() {
  const { t } = useTranslation();
  return (
    <div className="min-h-screen flex flex-col items-center justify-center relative overflow-hidden bg-[#0a1e12] dark:bg-[#040d08] select-none font-sans transition-colors duration-300">
      <div className="absolute inset-0 z-0 pointer-events-none opacity-90">
        <svg className="w-full h-full" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1920 1080" preserveAspectRatio="xMidYMid slice">
          <defs>
            <linearGradient id="grad1" x1="0%" y1="0%" x2="100%" y2="100%">
              <stop offset="0%" stopColor="#1e5131" stopOpacity="0.4" />
              <stop offset="100%" stopColor="#081d11" stopOpacity="0.8" />
            </linearGradient>
            <linearGradient id="grad2" x1="100%" y1="0%" x2="0%" y2="100%">
              <stop offset="0%" stopColor="#46A358" stopOpacity="0.25" />
              <stop offset="50%" stopColor="#1b492b" stopOpacity="0.6" />
              <stop offset="100%" stopColor="#05140b" stopOpacity="0.9" />
            </linearGradient>
            <radialGradient id="glowLeft" cx="20%" cy="40%" r="40%">
              <stop offset="0%" stopColor="#46A358" stopOpacity="0.35" />
              <stop offset="100%" stopColor="#46A358" stopOpacity="0" />
            </radialGradient>
            <radialGradient id="glowRight" cx="85%" cy="65%" r="45%">
              <stop offset="0%" stopColor="#348447" stopOpacity="0.3" />
              <stop offset="100%" stopColor="#348447" stopOpacity="0" />
            </radialGradient>
          </defs>
          <rect width="1920" height="1080" fill="#0b2214" />
          <rect width="1920" height="1080" fill="url(#glowLeft)" />
          <rect width="1920" height="1080" fill="url(#glowRight)" />
          <g stroke="#ffffff" strokeWidth="1" strokeOpacity="0.08" fill="url(#grad1)">
            <polygon points="0,0 450,200 300,540 0,400" />
            <polygon points="450,200 960,0 700,450 300,540" fill="url(#grad2)" fillOpacity="0.7" />
            <polygon points="960,0 1470,200 1220,480 700,450" />
            <polygon points="1470,200 1920,0 1920,400 1220,480" fill="url(#grad2)" fillOpacity="0.6" />
            <polygon points="700,450 960,150 1220,480 960,700" fill="#143f24" fillOpacity="0.5" strokeOpacity="0.15" />
            <polygon points="300,540 700,450 960,700 500,900" fill="url(#grad2)" fillOpacity="0.5" />
            <polygon points="1220,480 1620,540 1420,900 960,700" fill="url(#grad1)" fillOpacity="0.6" />
            <polygon points="0,400 300,540 500,900 0,1080" />
            <polygon points="500,900 960,700 960,1080 0,1080" fill="url(#grad2)" fillOpacity="0.8" />
            <polygon points="960,700 1420,900 1920,1080 960,1080" />
            <polygon points="1620,540 1920,400 1920,1080 1420,900" fill="url(#grad2)" fillOpacity="0.7" />
          </g>
          <path d="M960,250 C910,350 910,500 960,600 C1010,500 1010,350 960,250 Z" fill="#46A358" fillOpacity="0.12" stroke="#46A358" strokeWidth="1" strokeOpacity="0.2" />
          <path d="M720,400 C680,480 690,580 740,650 C770,570 770,470 720,400 Z" fill="#46A358" fillOpacity="0.08" stroke="#46A358" strokeWidth="1" strokeOpacity="0.15" />
          <path d="M1200,400 C1240,480 1230,580 1180,650 C1150,570 1150,470 1200,400 Z" fill="#46A358" fillOpacity="0.08" stroke="#46A358" strokeWidth="1" strokeOpacity="0.15" />
        </svg>
      </div>
      <div className="relative z-10 text-center px-4 max-w-3xl mx-auto flex flex-col items-center justify-center animate-in fade-in slide-in-from-bottom-12 duration-700">
        <h1 className="text-[14rem] sm:text-[18rem] md:text-[25rem] font-black leading-none text-white/10 dark:text-white/5 tracking-tight select-none">
          404
        </h1>
        <div className="backdrop-blur-xl bg-white/[0.92] dark:bg-zinc-900/[0.90] border border-white/60 dark:border-zinc-800/40 rounded-[32px] p-8 md:p-14 -mt-20 md:-mt-36 max-w-[620px] shadow-[0_30px_70px_-10px_rgba(0,0,0,0.45)] flex flex-col items-center">
          <h2 className="text-3xl md:text-[38px] font-bold text-[#1a1a1a] dark:text-zinc-100 mb-4 tracking-tight flex items-center gap-2">
            {t("text270", "Страница")} <span className="text-[#46A358]">{t("text271", "не найдена")}</span>
          </h2>
          <div className="w-14 h-[3px] bg-[#46A358] rounded-full mb-6"></div>
          <p className="text-[#727272] dark:text-zinc-400 text-base md:text-[17px] mb-10 max-w-md text-center leading-relaxed font-normal">
            {t("text272", "Похоже, запрашиваемый адрес не существует, или страница была перемещена в другой раздел.")}
          </p>
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4 w-full sm:w-auto">
            <Link
              to="/"
              className="w-full sm:w-auto inline-flex items-center justify-center gap-2 bg-[#46A358] hover:bg-[#3b8a4a] text-white px-7 h-12 rounded-xl font-semibold text-sm transition-all duration-200 shadow-md shadow-[#46A358]/20 hover:scale-[1.01]"
            >
              <Home className="w-4 h-4 stroke-[2.5]" />
              {t("text273", "На главную")}
            </Link>
            <Link
              to="/Contact"
              className="w-full sm:w-auto inline-flex items-center justify-center gap-2 border border-zinc-200 dark:border-zinc-700 bg-white dark:bg-zinc-800 text-[#1a1a1a] dark:text-zinc-200 hover:bg-zinc-50 dark:hover:bg-zinc-700/50 px-7 h-12 rounded-xl font-semibold text-sm transition-all duration-200 shadow-sm hover:scale-[1.01]"
            >
              <MessageSquare className="w-4 h-4 text-[#46A358] stroke-[2.5]" />
              {t("text274", "Связаться с нами")}
            </Link>
          </div>
        </div>
      </div>
      <div className="absolute inset-5 border-2 border-[#46A358]/30 pointer-events-none z-10 rounded-2xl hidden md:block"></div>
    </div>
  );
}