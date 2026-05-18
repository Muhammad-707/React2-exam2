import React from 'react';
import { motion, type Variants } from 'framer-motion';
import { Leaf, ArrowLeft, Sparkles } from 'lucide-react';
import { useTranslation } from 'react-i18next';
const containerVariants: Variants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.15, 
      delayChildren: 0.1,
    }
  }
};
const itemFadeInUp: Variants = {
  hidden: { opacity: 0, y: 30 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.8, ease: [0.25, 1, 0.5, 1] as const }
  }
};
const PlantCare: React.FC = () => {
  const { t } = useTranslation();
  return (
    <div className="w-full max-w-[1300px] mx-auto px-4 flex flex-col items-center justify-center min-h-[650px] lg:mt-0 lg:mb-0 mb-[-50px] mt-[-50px] text-zinc-800 dark:text-zinc-200 overflow-hidden">
      <motion.div
        initial="hidden"
        animate="visible"
        variants={containerVariants} 
        className="w-full max-w-[640px] text-center flex flex-col items-center bg-white dark:bg-zinc-900/30 p-8 md:p-12 rounded-3xl relative">
        <div className="absolute -top-12 -left-12 w-40 h-40 bg-[#46A358]/10 blur-3xl rounded-full pointer-events-none" />
        <div className="absolute -bottom-12 -right-12 w-40 h-40 bg-[#46A358]/5 blur-3xl rounded-full pointer-events-none" />
        <motion.div
          variants={itemFadeInUp}
          animate={{ y: [0, -6, 0] }}
          transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
          className="w-20 h-20 bg-[#46A358]/10 text-[#46A358] rounded-2xl flex items-center justify-center shadow-inner mb-6 relative select-none pointer-events-none">
          <Leaf className="w-10 h-10" />
          <span className="absolute -top-1 -right-1 text-[#46A358]">
            <Sparkles className="w-4 h-4 animate-pulse" />
          </span>
        </motion.div>
        <motion.span 
          variants={itemFadeInUp}
          className="text-[#46A358] font-bold text-xs tracking-widest uppercase bg-[#46A358]/10 px-4 py-1.5 rounded-full mb-4">
          {t("text275")}
        </motion.span>
        <motion.h1 
          variants={itemFadeInUp}
          className="text-3xl md:text-6xl font-extrabold tracking-tight mb-4 leading-tight">
          {t("text276")} <span className='text-[#46A358]'>{t("text277")}</span>
        </motion.h1>
        <motion.p 
          variants={itemFadeInUp}
          className="text-zinc-500 dark:text-zinc-400 text-sm md:text-base leading-relaxed mb-8 max-w-[460px]">
          {t("text278")}
        </motion.p>
        <motion.div variants={itemFadeInUp}>
          <motion.a
            href="shop"
            whileHover={{ y: -2 }}
            whileTap={{ scale: 0.98 }}
            className="inline-flex items-center gap-2 bg-[#46A358] text-white font-semibold text-sm px-6 py-3 rounded-xl hover:bg-[#3d8e4e] transition-all shadow-lg shadow-green-600/10">
            <ArrowLeft className="w-4 h-4" />
            {t("text279")}
          </motion.a>
        </motion.div>
      </motion.div>
    </div>
  );
};
export default PlantCare;