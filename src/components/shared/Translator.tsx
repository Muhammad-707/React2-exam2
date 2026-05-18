import { Globe } from "lucide-react";
import { useState, useEffect } from "react";
import { useTranslation } from "react-i18next";
export default function Translator() {
    const { i18n } = useTranslation();
    const [lang, setLang] = useState(() => {
        const saved = localStorage.getItem("i18nextLng");
        if (saved) return saved.slice(0, 2);
        return "en";
    });
    useEffect(() => {
        if (i18n.language) {
            setLang(i18n.language.slice(0, 2));
        }
    }, [i18n.language]);
    function TranslateClick(language: string) {
        i18n.changeLanguage(language);
        localStorage.setItem("i18nextLng", language);
        setLang(language);
    }
    const toggleLanguage = () => {
        const nextLang = lang.startsWith("en") ? "ru" : "en";
        TranslateClick(nextLang);
    };
    return (
        <button 
            onClick={toggleLanguage}
            type="button"
            className="flex items-center gap-1.5 px-2.5 py-1.5 rounded-lg border border-gray-200 dark:border-zinc-800 hover:border-[#46A358] dark:hover:border-[#46A358] bg-gray-50/50 dark:bg-zinc-900/50 text-xs font-bold tracking-wider text-[#3D3D3D] dark:text-gray-200 transition-all uppercase active:scale-95 select-none min-w-[55px] justify-center"
        >
            <Globe className="w-3.5 h-3.5 text-[#46A358] stroke-[2]" />
            <span>{lang.startsWith("ru") ? "ru" : "en"}</span>
        </button>
    );
}