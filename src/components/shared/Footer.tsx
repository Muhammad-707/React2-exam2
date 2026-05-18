import { MapPin, Mail, Phone } from "lucide-react";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { useTranslation } from "react-i18next";

import i1 from "@/assets/Vector (39).png";
import i3 from "@/assets/Group 18.png";
import i4 from "@/assets/Group 19 (1).png";
import i5 from "@/assets/Frame (23).png";
import i6 from "@/assets/Frame (24).png";
import i7 from "@/assets/VISA-Logo-2006-768x432.png";
import i8 from "@/assets/002-american-express.webp";

export default function Footer() {
    const { t } = useTranslation();

    return (
        <footer className="bg-[#FBFBFB] max-w-[1300px] mx-auto w-full dark:bg-zinc-950 text-[#3D3D3D] dark:text-gray-300 transition-colors mt-20">
            <div className="px-4 sm:px-12 pt-12 pb-8 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
                <div className="flex flex-col lg:items-start items-center lg:text-start text-center pr-4 border-r-0 lg:border-r border-gray-200/60 dark:border-zinc-800">
                    <div className="w-16 h-16 bg-[#46A358]/10 rounded-full flex items-center justify-center mb-4">
                        <div>
                            <img className="w-fit" src={i5} alt="" />
                            <img className="w-fit" src={i6} alt="" />
                        </div>
                    </div>
                    <h3 className="text-[17px] font-bold text-[#3D3D3D] dark:text-white mb-2">
                        {t("text90")}
                    </h3>
                    <p className="text-[14px] text-[#727272] dark:text-gray-400 leading-relaxed">
                        {t("text91")}
                    </p>
                </div>

                <div className="flex flex-col lg:items-start items-center lg:text-start text-center pr-4 border-r-0 lg:border-r border-gray-200/60 dark:border-zinc-800">
                    <div className="w-16 h-16 bg-[#46A358]/10 rounded-full flex items-center justify-center mb-4">
                        <img className="w-fit" src={i3} alt="" />
                    </div>
                    <h3 className="text-[17px] font-bold text-[#3D3D3D] dark:text-white mb-2">
                        {t("text92")}
                    </h3>
                    <p className="text-[14px] text-[#727272] dark:text-gray-400 leading-relaxed">
                        {t("text91")}
                    </p>
                </div>

                <div className="flex flex-col lg:items-start items-center lg:text-start text-center pr-4">
                    <div className="w-16 h-16 bg-[#46A358]/10 rounded-full flex items-center justify-center mb-4">
                        <img className="w-fit" src={i4} alt="" />
                    </div>
                    <h3 className="text-[17px] font-bold text-[#3D3D3D] dark:text-white mb-2">
                        {t("text93")}
                    </h3>
                    <p className="text-[14px] text-[#727272] dark:text-gray-400 leading-relaxed">
                        {t("text91")}
                    </p>
                </div>

                <div className="flex flex-col justify-between">
                    <div>
                        <h3 className="text-[18px] font-bold text-[#3D3D3D] dark:text-white mb-3">
                            {t("text94")}
                        </h3>
                        <div className="flex w-full items-center mb-4 shadow-sm rounded-md overflow-hidden">
                            <Input
                                type="email"
                                placeholder={t("text95")}
                                className="rounded-r-none border-r-0 focus-visible:ring-0 bg-white dark:bg-zinc-900 text-[14px] h-11"
                            />
                            <Button className="bg-[#46A358] hover:bg-[#3b8a4a] text-white rounded-l-none font-bold px-6 h-11 transition-colors">
                                {t("text96")}
                            </Button>
                        </div>
                    </div>
                    <p className="text-[13px] text-[#727272] dark:text-gray-400 leading-relaxed">
                        {t("text97")}
                    </p>
                </div>
            </div>

            <div className="bg-[#46A358]/10 dark:bg-zinc-900/50 border-y border-[#46A358]/20 dark:border-zinc-800 transition-colors px-4 sm:px-12">
                <div className="py-6 grid grid-cols-1 md:grid-cols-3 lg:grid-cols-4 gap-6 items-center">
                    <div className="flex items-center gap-2">
                        <img className="w-fit" src={i1} alt="" />
                        <span className="text-[19px] font-black tracking-wider text-[#46A358]">
                            GREENSHOP
                        </span>
                    </div>

                    <div className="flex items-center gap-3 text-[14px]">
                        <MapPin className="w-5 h-5 text-[#46A358] shrink-0" />
                        <span>{t("text98")}</span>
                    </div>

                    <div className="flex items-center gap-3 text-[14px]">
                        <Mail className="w-5 h-5 text-[#46A358] shrink-0" />
                        <a href={`mailto:${t("text99")}`} className="hover:text-[#46A358] transition-colors">
                            {t("text99")}
                        </a>
                    </div>

                    <div className="flex items-center gap-3 text-[14px]">
                        <Phone className="w-5 h-5 text-[#46A358] shrink-0" />
                        <a href="tel:+8801911717490" className="hover:text-[#46A358] transition-colors">
                            +88 01911 717 490
                        </a>
                    </div>
                </div>
            </div>

            <div className="px-4 sm:px-12 py-12 grid grid-cols-2 md:grid-cols-4 gap-8 border-b dark:border-zinc-900">
                <div>
                    <h4 className="text-[16px] font-bold text-[#3D3D3D] dark:text-white mb-4">
                        {t("text100")}
                    </h4>
                    <ul className="space-y-3 text-[14px] text-[#727272] dark:text-gray-400">
                        <li><a href="#" className="hover:text-[#46A358] transition-colors">{t("text100")}</a></li>
                        <li><a href="#" className="hover:text-[#46A358] transition-colors">{t("text101")}</a></li>
                        <li><a href="#" className="hover:text-[#46A358] transition-colors">{t("text102")}</a></li>
                        <li><a href="#" className="hover:text-[#46A358] transition-colors">{t("text103")}</a></li>
                        <li><a href="#" className="hover:text-[#46A358] transition-colors">{t("text104")}</a></li>
                    </ul>
                </div>
                <div>
                    <h4 className="text-[16px] font-bold text-[#3D3D3D] dark:text-white mb-4">
                        {t("text105")}
                    </h4>
                    <ul className="space-y-3 text-[14px] text-[#727272] dark:text-gray-400">
                        <li><a href="#" className="hover:text-[#46A358] transition-colors">{t("text106")}</a></li>
                        <li><a href="#" className="hover:text-[#46A358] transition-colors">{t("text107")}</a></li>
                        <li><a href="#" className="hover:text-[#46A358] transition-colors">{t("text108")}</a></li>
                        <li><a href="#" className="hover:text-[#46A358] transition-colors">{t("text109")}</a></li>
                        <li><a href="#" className="hover:text-[#46A358] transition-colors">{t("text110")}</a></li>
                    </ul>
                </div>
                <div>
                    <h4 className="text-[16px] font-bold text-[#3D3D3D] dark:text-white mb-4">
                        {t("text111")}
                    </h4>
                    <ul className="space-y-3 text-[14px] text-[#727272] dark:text-gray-400">
                        <li><a href="#" className="hover:text-[#46A358] transition-colors">{t("text112")}</a></li>
                        <li><a href="#" className="hover:text-[#46A358] transition-colors">{t("text113")}</a></li>
                        <li><a href="#" className="hover:text-[#46A358] transition-colors">{t("text114")}</a></li>
                        <li><a href="#" className="hover:text-[#46A358] transition-colors">{t("text115")}</a></li>
                        <li><a href="#" className="hover:text-[#46A358] transition-colors">{t("text116")}</a></li>
                    </ul>
                </div>
                <div className="col-span-2 md:col-span-1">
                    <h4 className="text-[16px] font-bold text-[#3D3D3D] dark:text-white mb-4">
                        {t("text117")}
                    </h4>
                    <div className="flex gap-3 mb-6">
                        <a href="#" className="w-10 h-10 rounded-md border border-[#46A358]/20 flex items-center justify-center text-[#46A358] hover:bg-[#46A358] hover:text-white transition-all">
                            <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                                <path d="M18 2h-3a5 5 0 0 0-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 0 1 1-1h3z"></path>
                            </svg>
                        </a>
                        <a href="#" className="w-10 h-10 rounded-md border border-[#46A358]/20 flex items-center justify-center text-[#46A358] hover:bg-[#46A358] hover:text-white transition-all">
                            <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                                <rect x="2" y="2" width="20" height="20" rx="5" ry="5"></rect>
                                <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z"></path>
                                <line x1="17.5" y1="6.5" x2="17.51" y2="6.5"></line>
                            </svg>
                        </a>
                        <a href="#" className="w-10 h-10 rounded-md border border-[#46A358]/20 flex items-center justify-center text-[#46A358] hover:bg-[#46A358] hover:text-white transition-all">
                            <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                                <path d="M22 4s-.7 2.1-2 3.4c1.6 10-9.4 17.3-18 11.6 2.2.1 4.4-.6 6-2C3 15.5.5 9.6 3 5c2.2 2.6 5.6 4.1 9 4-.9-4.2 4-6.6 7-3.8 1.1 0 3-1.2 3-1.2z"></path>
                            </svg>
                        </a>
                        <a href="#" className="w-10 h-10 rounded-md border border-[#46A358]/20 flex items-center justify-center text-[#46A358] hover:bg-[#46A358] hover:text-white transition-all">
                            <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                                <path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z"></path>
                                <rect x="2" y="9" width="4" height="12"></rect>
                                <circle cx="4" cy="4" r="2"></circle>
                            </svg>
                        </a>
                        <a href="#" className="w-10 h-10 rounded-md border border-[#46A358]/20 flex items-center justify-center text-[#46A358] hover:bg-[#46A358] hover:text-white transition-all">
                            <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                                <path d="M22.54 6.42a2.78 2.78 0 0 0-1.94-2C18.88 4 12 4 12 4s-6.88 0-8.6.46a2.78 2.78 0 0 0-1.94 2A29 29 0 0 0 1 11.75a29 29 0 0 0 .46 5.33A2.78 2.78 0 0 0 3.4 19c1.72.46 8.6.46 8.6.46s6.88 0 8.6-.46a2.78 2.78 0 0 0 1.94-2 29 29 0 0 0 .46-5.25 29 29 0 0 0-.46-5.33z"></path>
                                <polygon points="9.75 15.02 15.5 11.75 9.75 8.48 9.75 15.02"></polygon>
                            </svg>
                        </a>
                    </div>
                    <h4 className="text-[16px] font-bold text-[#3D3D3D] dark:text-white mb-4">
                        {t("text118")}
                    </h4>
                    <div className="flex items-center gap-5 transition-all select-none">
                        <div className="lg:w-30 w-15 flex items-center justify-center hover:scale-105 transition-transform cursor-pointer">
                            <img src="https://upload.wikimedia.org/wikipedia/commons/b/b5/PayPal.svg" alt="PayPal" className="h-full w-full object-contain"/>
                        </div>
                        <div className="lg:w-16 w-12 flex items-center justify-center hover:scale-105 transition-transform cursor-pointer">
                            <img src="https://upload.wikimedia.org/wikipedia/commons/2/2a/Mastercard-logo.svg" alt="Mastercard" className="h-full w-full object-contain"/>
                        </div>
                        <div className="lg:w-20 w-15 flex items-center justify-center hover:scale-105 transition-transform cursor-pointer">
                            <img src={i7} alt="Visa" className="h-full w-full object-contain"/>
                        </div>
                        <div className="lg:w-25 w-15 flex items-center justify-center hover:scale-105 transition-transform cursor-pointer">
                            <img src={i8} alt="American Express" className="h-full w-full object-contain rounded-sm"/>
                        </div>
                    </div>
                </div>
            </div>
            <div className="py-6 text-center text-[14px] text-[#3D3D3D] dark:text-zinc-500 px-4 sm:px-12">
                <div>
                    {t("text119")}
                </div>
            </div>
        </footer>
    );
}