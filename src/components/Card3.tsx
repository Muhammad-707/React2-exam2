import React from 'react';
import { ArrowRight } from 'lucide-react';
import { useTranslation } from 'react-i18next';
import { motion } from 'framer-motion';

interface Card3Props {
    dateKey: string;
    readTimeKey: string;
    titleKey: string;
    descriptionKey: string;
    image: string;
}

export const Card3: React.FC<Card3Props> = ({ dateKey, readTimeKey, titleKey, descriptionKey, image }) => {
    const { t } = useTranslation();

    return (
        <motion.div 
            whileHover={{ 
                y: -8,
                boxShadow: "0px 12px 24px rgba(0, 0, 0, 0.04)"
            }}
            transition={{ type: "spring", stiffness: 400, damping: 30 }}
            className="bg-[#FBFBFB] dark:bg-zinc-900/40 border border-zinc-100 dark:border-zinc-800/60 rounded-xl overflow-hidden transition-colors flex flex-col h-full"
        >
            <div className="w-full h-[200px] bg-[#F5F5F5] dark:bg-zinc-800/30 flex items-center justify-center overflow-hidden">
                <img
                    src={image}
                    alt={t(titleKey)}
                    className="w-full h-full object-cover hover:scale-105 transition-transform duration-500 ease-out select-none"
                />
            </div>
            <div className="p-4 sm:p-6 flex flex-col flex-1">
                <div className="text-[#46A358] text-xs font-medium mb-2 flex items-center gap-1">
                    <span>{t(dateKey)}</span>
                    <span className="text-zinc-300 dark:text-zinc-700">|</span>
                    <span>{t(readTimeKey)}</span>
                </div>
                <h3 className="text-zinc-800 dark:text-zinc-100 font-bold text-lg leading-snug mb-2 line-clamp-2 select-none">
                    {t(titleKey)}
                </h3>
                <p className="text-zinc-500 dark:text-zinc-400 text-sm leading-relaxed mb-4 line-clamp-2 flex-1">
                    {t(descriptionKey)}
                </p>
                <button className="text-zinc-700 dark:text-zinc-300 font-semibold text-sm flex items-center gap-1.5 hover:text-[#46A358] dark:hover:text-[#46A358] transition-colors group w-fit mt-auto">
                    {t("text77")}
                    <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
                </button>
            </div>
        </motion.div>
    );
};