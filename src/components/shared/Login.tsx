import React, { useState } from 'react';
import { X, Eye, EyeOff } from 'lucide-react';
import { Link } from 'react-router-dom';
import { useTranslation } from 'react-i18next';

interface LoginModalProps {
    isOpen: boolean;
    onClose: () => void;
    onSwitchToRegister: () => void;
}

import i1 from "@/assets/google 1.png";
import i2 from "@/assets/facebook 1.png";

export const LoginModal: React.FC<LoginModalProps> = ({ isOpen, onClose, onSwitchToRegister }) => {
    const { t } = useTranslation();
    const [showPassword, setShowPassword] = useState(false);

    if (!isOpen) return null;

    return (
        <div className="fixed inset-0 z-[100] flex items-center justify-center p-4 bg-black/40 backdrop-blur-[2px]">
            <div className="absolute inset-0" onClick={onClose} />
            <div className="relative w-full max-w-[500px] h-[610px] bg-white dark:bg-zinc-950 rounded-none border-b-[10px] border-[#46A358] shadow-2xl flex flex-col justify-between z-10 text-[#3D3D3D] dark:text-zinc-300 font-sans p-10 pt-12 animate-in fade-in zoom-in-95 duration-200">
                <div>
                    <button 
                        onClick={onClose}
                        className="absolute top-4 right-4 text-[#46A358] hover:opacity-70 transition-opacity">
                        <X className="w-5 h-5 stroke-[1.5]" />
                    </button>
                    <div className="flex items-center justify-center gap-3 text-lg font-medium mb-8">
                        <span className="text-[#46A358] font-bold cursor-pointer">{t("text217")}</span>
                        <span className="text-zinc-300 dark:text-zinc-700 font-light">|</span>
                        <span 
                            onClick={onSwitchToRegister}
                            className="text-zinc-500 dark:text-zinc-400 hover:text-[#46A358] cursor-pointer transition-colors">
                            {t("text218")}
                        </span>
                    </div>
                    <p className="text-zinc-500 dark:text-zinc-400 text-xs font-normal mb-4">
                        {t("text219")}
                    </p>
                    <form onSubmit={(e) => e.preventDefault()} className="flex flex-col gap-4 w-full">
                        <input 
                            type="text" 
                            placeholder={t("text220")}
                            className="w-full h-10 px-3 text-sm bg-white dark:bg-zinc-900 border border-zinc-200 dark:border-zinc-800 rounded-md focus:outline-none focus:border-[#46A358] text-zinc-700 dark:text-zinc-200" />
                        <div className="relative w-full">
                            <input 
                                type={showPassword ? "text" : "password"} 
                                placeholder="***********"
                                className="w-full h-10 pl-3 pr-10 text-sm bg-white dark:bg-zinc-900 border border-zinc-200 dark:border-zinc-800 rounded-md focus:outline-none focus:border-[#46A358] text-zinc-700 dark:text-zinc-200" />
                            <button 
                                type="button" 
                                onClick={() => setShowPassword(!showPassword)}
                                className="absolute right-3 top-1/2 -translate-y-1/2 text-zinc-400 hover:text-zinc-600 dark:hover:text-zinc-300">
                                {showPassword ? (
                                    <Eye className="w-4 h-4 stroke-[1.8]" />
                                ) : (
                                    <EyeOff className="w-4 h-4 stroke-[1.8]" />
                                )}
                            </button>
                        </div>
                        <div className="text-right">
                            <button type="button" className="text-[#46A358] hover:underline text-xs font-normal">
                                {t("text221")}
                            </button>
                        </div>
                        
                        <Link 
                            to="/account"
                            onClick={onClose}
                            className="w-full bg-[#46A358] hover:bg-[#3b8a4a] text-white py-2.5 rounded-md font-bold text-sm transition-colors shadow-sm mt-2 flex items-center justify-center"
                        >
                            {t("text222")}
                        </Link>
                    </form>
                    <div className="relative flex py-4 items-center my-1">
                        <div className="flex-grow border-t border-zinc-100 dark:border-zinc-900"></div>
                        <span className="flex-shrink mx-4 text-zinc-400 dark:text-zinc-500 text-xs font-normal">{t("text223")}</span>
                        <div className="flex-grow border-t border-zinc-100 dark:border-zinc-900"></div>
                    </div>
                </div>
                <div className="flex flex-col gap-3 w-full pb-2">
                    <Link to="/account" onClick={onClose} className="w-full h-10 border border-zinc-200 dark:border-zinc-800 rounded-md flex items-center justify-center gap-5 text-sm text-zinc-500 dark:text-zinc-400 font-medium hover:bg-zinc-50 dark:hover:bg-zinc-900/50 transition-colors">
                        <img src={i1} className="w-4 h-4" alt="Google" />
                        {t("text224")}
                    </Link>
                    <Link to="/account" onClick={onClose} className="w-full h-10 border border-zinc-200 dark:border-zinc-800 rounded-md flex items-center justify-center gap-2 text-sm text-zinc-500 dark:text-zinc-400 font-medium hover:bg-zinc-50 dark:hover:bg-zinc-900/50 transition-colors">
                        <img src={i2} className="w-4 h-4" alt="Facebook" />
                        {t("text225")}
                    </Link>
                </div>
            </div>
        </div>
    );
};