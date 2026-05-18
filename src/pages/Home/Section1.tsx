import { Swiper, SwiperSlide } from "swiper/react";
import { Pagination, Autoplay } from "swiper/modules";
import { Button } from "@/components/ui/button";
import { useTranslation } from "react-i18next";
import { motion, type Variants } from "framer-motion";

import "swiper/css";
import "swiper/css/pagination";

import i1 from "@/assets/01 1.png";
import i2 from "@/assets/01 2.png";
import i3 from "@/assets/image 1.png";
import i4 from "@/assets/image 15.png";

const containerVariants: Variants = {
    hidden: { opacity: 0 },
    visible: {
        opacity: 1,
        transition: {
            staggerChildren: 0.12, 
            delayChildren: 0.1,
        }
    }
};

const textItemVariants: Variants = {
    hidden: { opacity: 0, y: 25 },
    visible: {
        opacity: 1,
        y: 0,
        transition: { duration: 0.6, ease: [0.215, 0.610, 0.355, 1.0] }
    }
};

const imageContainerVariants: Variants = {
    hidden: { opacity: 0, x: 50, scale: 0.92 },
    visible: {
        opacity: 1,
        x: 0,
        scale: 1,
        transition: { duration: 0.85, ease: [0.16, 1, 0.3, 1], delay: 0.2 }
    }
};

export default function Section1() {
    const { t } = useTranslation();

    return (
        <div className="w-full px-4 sm:px-12 mt-3">
            <div className="max-w-[1300px] mx-auto bg-[#FAFBFB] dark:bg-zinc-900/60 rounded-md relative flex flex-col justify-between overflow-hidden pb-5 border border-zinc-100/50 dark:border-zinc-800/40">
                <Swiper
                    modules={[Pagination, Autoplay]}
                    pagination={{
                        clickable: true,
                        el: ".custom-dots-container",
                    }}
                    autoplay={{
                        delay: 5500,
                        disableOnInteraction: false,
                    }}
                    speed={800} 
                    className="w-full"
                >
                    <SwiperSlide>
                        {({ isActive }) => (
                            <div className="grid grid-cols-1 md:grid-cols-12 items-center px-6 sm:px-10 md:px-14 py-8 md:py-0 min-h-[400px] md:h-[430px] gap-6">
                                <motion.div 
                                    variants={containerVariants}
                                    initial="hidden"
                                    animate={isActive ? "visible" : "hidden"}
                                    className="md:col-span-7 flex flex-col justify-center text-left z-10"
                                >
                                    <motion.span variants={textItemVariants} className="text-[11px] sm:text-[13px] font-medium tracking-[0.15em] text-[#46A358] dark:text-[#46A358] uppercase mb-1.5 block">
                                        {t("text7")}
                                    </motion.span>
                                    <motion.h1 variants={textItemVariants} className="text-[34px] sm:text-[46px] md:text-[56px] font-black text-[#3D3D3D] dark:text-white leading-[1.15] mb-3 select-none tracking-tight">
                                        {t("text8")} <br />
                                        <span className="text-[#46A358]">{t("text9")}</span>
                                    </motion.h1>
                                    <motion.p variants={textItemVariants} className="text-[13px] sm:text-[14px] text-[#727272] dark:text-gray-400 max-w-[500px] leading-relaxed mb-6 sm:mb-8">
                                        {t("text10")}
                                    </motion.p>
                                    <motion.div variants={textItemVariants}>
                                        <Button className="bg-[#46A358] hover:bg-[#3b8a4a] text-white font-bold text-[15px] px-6 py-5 rounded-md shadow-md hover:shadow-green-600/20 transition-all active:scale-95 uppercase">
                                            {t("text11")}
                                        </Button>
                                    </motion.div>
                                </motion.div>

                                <motion.div 
                                    variants={imageContainerVariants}
                                    initial="hidden"
                                    animate={isActive ? "visible" : "hidden"}
                                    className="md:col-span-5 flex justify-center items-end relative h-full min-h-[220px] md:min-h-full"
                                >
                                    <div className="relative w-full h-full flex items-center justify-center md:justify-end md:pr-4">
                                        <motion.div 
                                            animate={{ y: [0, -10, 0] }}
                                            transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
                                            className="relative"
                                        >
                                            <img src={i2} alt="" className="absolute lg:top-[299px] lg:right-[280px] top-[160px] md:top-[120px] md:right-[100px] w-fit pointer-events-none drop-shadow-xl" />
                                            <img src={i1} alt="Greenshop Plants" className="w-fit pointer-events-none drop-shadow-2xl" />
                                        </motion.div>
                                    </div>
                                </motion.div>
                            </div>
                        )}
                    </SwiperSlide>

                    <SwiperSlide>
                        {({ isActive }) => (
                            <div className="grid grid-cols-1 md:grid-cols-12 items-center px-6 sm:px-10 md:px-14 py-8 md:py-0 min-h-[400px] md:h-[430px] gap-6">
                                <motion.div 
                                    variants={containerVariants}
                                    initial="hidden"
                                    animate={isActive ? "visible" : "hidden"}
                                    className="md:col-span-7 flex flex-col justify-center text-left z-10"
                                >
                                    <motion.span variants={textItemVariants} className="text-[11px] sm:text-[13px] font-medium tracking-[0.15em] text-[#46A358] dark:text-[#46A358] uppercase mb-1.5 block">
                                        {t("text7")}
                                    </motion.span>
                                    <motion.h1 variants={textItemVariants} className="text-[34px] sm:text-[46px] md:text-[56px] font-black text-[#3D3D3D] dark:text-white leading-[1.15] mb-3 select-none tracking-tight">
                                        {t("text12")} <br />
                                        <span className="text-[#46A358]">{t("text13")}</span>
                                    </motion.h1>
                                    <motion.p variants={textItemVariants} className="text-[13px] sm:text-[14px] text-[#727272] dark:text-gray-400 max-w-[500px] leading-relaxed mb-6 sm:mb-8">
                                        {t("text10")}
                                    </motion.p>
                                    <motion.div variants={textItemVariants}>
                                        <Button className="bg-[#46A358] hover:bg-[#3b8a4a] text-white font-bold text-[15px] px-6 py-5 rounded-md shadow-md hover:shadow-green-600/20 transition-all active:scale-95 uppercase">
                                            {t("text11")}
                                        </Button>
                                    </motion.div>
                                </motion.div>

                                <motion.div 
                                    variants={imageContainerVariants}
                                    initial="hidden"
                                    animate={isActive ? "visible" : "hidden"}
                                    className="md:col-span-5 flex justify-center items-end relative h-full min-h-[220px] md:min-h-full"
                                >
                                    <div className="relative w-full h-full flex items-center justify-center md:justify-end md:pr-4">
                                        <motion.div 
                                            animate={{ y: [-5, 5, -5] }}
                                            transition={{ duration: 4.5, repeat: Infinity, ease: "easeInOut" }}
                                        >
                                            <img src={i3} alt="" className="w-[350px] pointer-events-none drop-shadow-2xl" />
                                        </motion.div>
                                    </div>
                                </motion.div>
                            </div>
                        )}
                    </SwiperSlide>

                    <SwiperSlide>
                        {({ isActive }) => (
                            <div className="grid grid-cols-1 md:grid-cols-12 items-center px-6 sm:px-10 md:px-14 py-8 md:py-0 min-h-[400px] md:h-[430px] gap-6">
                                <motion.div 
                                    variants={containerVariants}
                                    initial="hidden"
                                    animate={isActive ? "visible" : "hidden"}
                                    className="md:col-span-7 flex flex-col justify-center text-left z-10"
                                >
                                    <motion.span variants={textItemVariants} className="text-[11px] sm:text-[13px] font-medium tracking-[0.15em] text-[#46A358] dark:text-[#46A358] uppercase mb-1.5 block">
                                        {t("text7")}
                                    </motion.span>
                                    <motion.h1 variants={textItemVariants} className="text-[34px] sm:text-[46px] md:text-[56px] font-black text-[#3D3D3D] dark:text-white leading-[1.15] mb-3 select-none tracking-tight">
                                        {t("text14")} <br />
                                        <span className="text-[#46A358]">{t("text15")}</span>
                                    </motion.h1>
                                    <motion.p variants={textItemVariants} className="text-[13px] sm:text-[14px] text-[#727272] dark:text-gray-400 max-w-[500px] leading-relaxed mb-6 sm:mb-8">
                                        {t("text10")}
                                    </motion.p>
                                    <motion.div variants={textItemVariants}>
                                        <Button className="bg-[#46A358] hover:bg-[#3b8a4a] text-white font-bold text-[15px] px-6 py-5 rounded-md shadow-md hover:shadow-green-600/20 transition-all active:scale-95 uppercase">
                                            {t("text11")}
                                        </Button>
                                    </motion.div>
                                </motion.div>

                                <motion.div 
                                    variants={imageContainerVariants}
                                    initial="hidden"
                                    animate={isActive ? "visible" : "hidden"}
                                    className="md:col-span-5 flex justify-center items-end relative h-full min-h-[220px] md:min-h-full"
                                >
                                    <div className="relative w-full h-full flex items-center justify-center md:justify-end md:pr-4">
                                        <motion.div 
                                            animate={{ y: [4, -6, 4] }}
                                            transition={{ duration: 3.8, repeat: Infinity, ease: "easeInOut" }}
                                        >
                                            <img src={i4} alt="" className="w-[350px] pointer-events-none drop-shadow-2xl" />
                                        </motion.div>
                                    </div>
                                </motion.div>
                            </div>
                        )}
                    </SwiperSlide>
                </Swiper>

                <div className="flex justify-center w-full mt-2 z-20">
                    <div className="custom-dots-container flex items-center justify-center gap-2" />
                </div>
            </div>

            <style>{`
                .custom-dots-container .swiper-pagination-bullet {
                    width: 24px; /* Делаем точки в виде современных овальных треков */
                    height: 4px;
                    background-color: #46A358 !important;
                    opacity: 0.2;
                    margin: 0 !important;
                    border-radius: 9999px;
                    transition: all 0.4s cubic-bezier(0.16, 1, 0.3, 1);
                    cursor: pointer;
                }
                .custom-dots-container .swiper-pagination-bullet-active {
                    opacity: 1;
                    width: 40px; /* При активации трек плавно растягивается */
                    background-color: #46A358 !important;
                }
            `}</style>
        </div>
    );
}