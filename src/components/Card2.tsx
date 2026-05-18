import React from 'react';
import { ArrowRight } from 'lucide-react';
import { useTranslation } from 'react-i18next';
import { motion } from 'framer-motion';

interface Card2Props {
  titleKey: string;
  subtitleKey: string;
  descriptionKey: string;
  image: string;
}

export const Card2: React.FC<Card2Props> = ({ titleKey, subtitleKey, descriptionKey, image }) => {
  const { t } = useTranslation();

  return (
    <motion.div 
      whileHover={{ 
        y: -6,
        scale: 1.01,
        boxShadow: "0px 12px 30px rgba(0, 0, 0, 0.04)"
      }}
      transition={{ type: "spring", stiffness: 400, damping: 25 }}
      className="relative bg-[#FBFBFB] dark:bg-zinc-900/40 rounded-xl overflow-hidden flex items-center p-4 sm:p-8 h-full border border-zinc-100 dark:border-zinc-800 transition-colors"
    >
      <div className="absolute left-0 bottom-0 pointer-events-none opacity-40">
        <svg width="120" height="120" viewBox="0 0 120 120" fill="none" xmlns="http://www.w3.org/2000/svg">
          <circle cx="0" cy="120" r="100" stroke="#46A358" strokeWidth="1" />
          <circle cx="0" cy="120" r="80" stroke="#46A358" strokeWidth="1" />
        </svg>
      </div>

      <div className="w-[45%] flex justify-center items-center z-10">
        <motion.img
          whileHover={{ scale: 1.05, rotate: 1 }}
          transition={{ duration: 0.3 }}
          src={image}
          alt={t(titleKey)}
          className="max-w-full max-h-[220px] object-contain select-none"
        />
      </div>

      <div className="w-[55%] text-right flex flex-col items-end z-10">
        <h3 className="text-zinc-800 dark:text-zinc-100 font-black text-lg sm:text-xl uppercase leading-tight mb-3 select-none">
          {t(titleKey)} <br />
          <span className="text-[#46A358]">& {t(subtitleKey)}</span>
        </h3>
        <p className="text-zinc-600 dark:text-zinc-400 text-sm leading-relaxed mb-6 max-w-[320px]">
          {t(descriptionKey)}
        </p>
        <button className="bg-[#46A358] text-white text-sm font-semibold px-5 py-2.5 rounded-lg flex items-center gap-2 hover:bg-[#3d8e4e] transition-all active:scale-95 shadow-sm shadow-green-600/10">
          {t("text70a")} <ArrowRight className="w-4 h-4" />
        </button>
      </div>
    </motion.div>
  );
};