import React from 'react';
import { Card3 } from '@/components/Card3';
import { useTranslation } from 'react-i18next';
import { motion, type Variants } from 'framer-motion';

import i1 from "@/assets/01 (4).png";
import i2 from "@/assets/02 (1).png";
import i3 from "@/assets/03.png";
import i4 from "@/assets/04.png";

const headerVariants: Variants = {
    hidden: { opacity: 0, y: -20 },
    visible: { 
        opacity: 1, 
        y: 0, 
        transition: { duration: 0.6, ease: "easeOut" } 
    }
};

const containerVariants: Variants = {
    hidden: {},
    visible: {
        transition: {
            staggerChildren: 0.15
        }
    }
};

const cardVariants: Variants = {
    hidden: { opacity: 0, y: 30 },
    visible: { 
        opacity: 1, 
        y: 0, 
        transition: { duration: 0.6, ease: "easeOut" } 
    }
};

export const Section4: React.FC = () => {
    const { t } = useTranslation();

    return (
        <section className="w-full max-w-[1200px] mx-auto px-4 py-16 flex flex-col items-center overflow-hidden">
            <motion.div 
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true, amount: 0.3 }}
                variants={headerVariants}
                className="text-center max-w-[500px] mb-10"
            >
                <h2 className="text-zinc-800 dark:text-zinc-100 font-bold text-3xl mb-3">
                    {t("text71")}
                </h2>
                <p className="text-zinc-500 dark:text-zinc-400 text-sm leading-relaxed">
                    {t("text72")}
                </p>
            </motion.div>
            <motion.div 
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true, amount: 0.1 }}
                variants={containerVariants}
                className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 w-full"
            >
                <motion.div variants={cardVariants} className="h-full">
                    <Card3
                        dateKey="text73"
                        readTimeKey="text74"
                        titleKey="text75"
                        descriptionKey="text76"
                        image={i1}
                    />
                </motion.div>
                <motion.div variants={cardVariants} className="h-full">
                    <Card3
                        dateKey="text78"
                        readTimeKey="text79"
                        titleKey="text80"
                        descriptionKey="text81"
                        image={i2}
                    />
                </motion.div>
                <motion.div variants={cardVariants} className="h-full">
                    <Card3
                        dateKey="text82"
                        readTimeKey="text83"
                        titleKey="text84"
                        descriptionKey="text85"
                        image={i3}
                    />
                </motion.div>
                <motion.div variants={cardVariants} className="h-full">
                    <Card3
                        dateKey="text86"
                        readTimeKey="text87"
                        titleKey="text88"
                        descriptionKey="text89"
                        image={i4}
                    />
                </motion.div>
            </motion.div>
        </section>
    );
};