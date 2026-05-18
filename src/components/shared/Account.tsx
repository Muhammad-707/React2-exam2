import React, { useState } from 'react';
import { useTranslation } from 'react-i18next';
import { Image, Eye, EyeOff } from 'lucide-react';

export const Account: React.FC = () => {
    const { t } = useTranslation();
    const [showCurrentPass, setShowCurrentPass] = useState(false);
    const [showNewPass, setShowNewPass] = useState(false);
    const [showConfirmPass, setShowConfirmPass] = useState(false);

    return (
        <div className="w-full animate-in fade-in duration-200">
            <h3 className="text-base font-bold mb-6 pb-1 border-b border-zinc-100 dark:border-zinc-800">
                {t("text239")}
            </h3>

            <form onSubmit={(e) => e.preventDefault()} className="w-full flex flex-col gap-6">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-x-8 gap-y-5">
                    <div className="flex flex-col gap-2">
                        <label className="text-sm font-normal">
                            {t("text240")} <span className="text-red-500">*</span>
                        </label>
                        <input 
                            type="text" 
                            className="w-full h-10 px-3 border border-zinc-200 dark:border-zinc-800 rounded-md bg-white dark:bg-zinc-900 focus:outline-none focus:border-[#46A358]" 
                        />
                    </div>
                    <div className="flex flex-col gap-2">
                        <label className="text-sm font-normal">
                            {t("text241")} <span className="text-red-500">*</span>
                        </label>
                        <input 
                            type="text" 
                            className="w-full h-10 px-3 border border-zinc-200 dark:border-zinc-800 rounded-md bg-white dark:bg-zinc-900 focus:outline-none focus:border-[#46A358]" 
                        />
                    </div>
                    <div className="flex flex-col gap-2">
                        <label className="text-sm font-normal">
                            {t("text242")} <span className="text-red-500">*</span>
                        </label>
                        <input 
                            type="email" 
                            className="w-full h-10 px-3 border border-zinc-200 dark:border-zinc-800 rounded-md bg-white dark:bg-zinc-900 focus:outline-none focus:border-[#46A358]" 
                        />
                    </div>
                    <div className="flex flex-col gap-2">
                        <label className="text-sm font-normal">
                            {t("text243")} <span className="text-red-500">*</span>
                        </label>
                        <div className="flex gap-2 w-full">
                            <select className="h-10 px-2 border border-zinc-200 dark:border-zinc-800 rounded-md bg-white dark:bg-zinc-900 text-sm focus:outline-none focus:border-[#46A358]">
                                <option>+992</option>
                                <option>+966</option>
                                <option>+7</option>
                            </select>
                            <input 
                                type="tel" 
                                className="flex-grow h-10 px-3 border border-zinc-200 dark:border-zinc-800 rounded-md bg-white dark:bg-zinc-900 focus:outline-none focus:border-[#46A358]" 
                            />
                        </div>
                    </div>

                    <div className="flex flex-col gap-2">
                        <label className="text-sm font-normal">
                            {t("text244")} <span className="text-red-500">*</span>
                        </label>
                        <input 
                            type="text" 
                            className="w-full h-10 px-3 border border-zinc-200 dark:border-zinc-800 rounded-md bg-white dark:bg-zinc-900 focus:outline-none focus:border-[#46A358]" 
                        />
                    </div>

                    <div className="flex flex-col gap-2">
                        <span className="text-sm font-normal">{t("text245")}</span>
                        <div className="flex items-center gap-4">
                            <div className="w-[50px] h-[50px] rounded-full border border-zinc-200 dark:border-zinc-800 bg-[#E8F5E9]/50 dark:bg-zinc-900 flex items-center justify-center text-[#46A358]">
                                <Image className="w-5 h-5 stroke-[1.5]" />
                            </div>
                            <button 
                                type="button"
                                className="bg-[#46A358] hover:bg-[#3b8a4a] text-white px-5 h-9 rounded-md text-sm font-medium transition-colors"
                            >
                                {t("text246")}
                            </button>
                            <button 
                                type="button"
                                className="text-zinc-400 hover:text-red-500 text-sm font-medium transition-colors"
                            >
                                {t("text247")}
                            </button>
                        </div>
                    </div>
                </div>

                <div className="mt-4">
                    <h3 className="text-base font-bold mb-5 pb-1 border-b border-zinc-100 dark:border-zinc-800">
                        {t("text248")}
                    </h3>

                    <div className="max-w-[420px] flex flex-col gap-4">
                        <div className="flex flex-col gap-2">
                            <label className="text-sm font-normal">{t("text249")}</label>
                            <div className="relative w-full">
                                <input 
                                    type={showCurrentPass ? "text" : "password"} 
                                    className="w-full h-10 pl-3 pr-10 border border-zinc-200 dark:border-zinc-800 rounded-md bg-white dark:bg-zinc-900 focus:outline-none focus:border-[#46A358]" 
                                />
                                <button 
                                    type="button" 
                                    onClick={() => setShowCurrentPass(!showCurrentPass)}
                                    className="absolute right-3 top-1/2 -translate-y-1/2 text-zinc-400 hover:text-zinc-600 dark:hover:text-zinc-300"
                                >
                                    {showCurrentPass ? <Eye className="w-4 h-4" /> : <EyeOff className="w-4 h-4" />}
                                </button>
                            </div>
                        </div>

                        <div className="flex flex-col gap-2">
                            <label className="text-sm font-normal">{t("text250")}</label>
                            <div className="relative w-full">
                                <input 
                                    type={showNewPass ? "text" : "password"} 
                                    className="w-full h-10 pl-3 pr-10 border border-zinc-200 dark:border-zinc-800 rounded-md bg-white dark:bg-zinc-900 focus:outline-none focus:border-[#46A358]" 
                                />
                                <button 
                                    type="button" 
                                    onClick={() => setShowNewPass(!showNewPass)}
                                    className="absolute right-3 top-1/2 -translate-y-1/2 text-zinc-400 hover:text-zinc-600 dark:hover:text-zinc-300"
                                >
                                    {showNewPass ? <Eye className="w-4 h-4" /> : <EyeOff className="w-4 h-4" />}
                                </button>
                            </div>
                        </div>

                        <div className="flex flex-col gap-2">
                            <label className="text-sm font-normal">{t("text251")}</label>
                            <div className="relative w-full">
                                <input 
                                    type={showConfirmPass ? "text" : "password"} 
                                    className="w-full h-10 pl-3 pr-10 border border-zinc-200 dark:border-zinc-800 rounded-md bg-white dark:bg-zinc-900 focus:outline-none focus:border-[#46A358]" 
                                />
                                <button 
                                    type="button" 
                                    onClick={() => setShowConfirmPass(!showConfirmPass)}
                                    className="absolute right-3 top-1/2 -translate-y-1/2 text-zinc-400 hover:text-zinc-600 dark:hover:text-zinc-300"
                                >
                                    {showConfirmPass ? <Eye className="w-4 h-4" /> : <EyeOff className="w-4 h-4" />}
                                </button>
                            </div>
                        </div>
                    </div>
                </div>

                <div className="mt-2">
                    <button 
                        type="submit"
                        className="bg-[#46A358] hover:bg-[#3b8a4a] text-white px-6 h-10 rounded-md text-sm font-bold transition-colors shadow-sm"
                    >
                        {t("text252")}
                    </button>
                </div>
            </form>
        </div>
    );
};