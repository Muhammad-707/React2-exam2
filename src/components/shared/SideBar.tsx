import React from 'react';
import { NavLink, Outlet } from 'react-router-dom';
import { useTranslation } from 'react-i18next';
import {
    User,
    MapPin,
    ShoppingBag,
    Heart,
    BarChart2,
    Download,
    LifeBuoy,
    LogOut
} from 'lucide-react';

export const SideBar: React.FC = () => {
    const { t } = useTranslation();

    return (
        <div className="max-w-[1300px] mx-auto px-4 py-10 font-sans text-[#3D3D3D] dark:text-zinc-300">
            <div className="flex flex-col md:flex-row gap-8 items-start">
                <div className="w-full md:w-[280px] bg-[#FBFBFB] dark:bg-zinc-900/40 p-2 border border-zinc-100 dark:border-zinc-800/50">
                    <h2 className="text-lg font-bold px-4 pt-3 pb-4 border-b border-zinc-100 dark:border-zinc-800">
                        {t("text230")}
                    </h2>
                    <nav className="flex flex-col gap-1 mt-3">
                        <NavLink
                            to="details"
                            end 
                            className={({ isActive }) => `
                                flex items-center gap-3 px-4 py-3 text-sm font-medium transition-all w-full text-left rounded-sm
                                ${isActive
                                    ? 'text-[#46A358] border-l-[4px] border-[#46A358] bg-white dark:bg-zinc-900 font-bold shadow-sm pl-3'
                                    : 'text-zinc-500 dark:text-zinc-400 hover:text-[#46A358] hover:bg-zinc-50 dark:hover:bg-zinc-900/30'
                                }
                            `}
                        >
                            {({ isActive }) => (
                                <>
                                    <User className={`w-4 h-4 ${isActive ? 'text-[#46A358] stroke-[2.5]' : 'text-zinc-400 stroke-[1.8]'}`} />
                                    {t("text231")}
                                </>
                            )}
                        </NavLink>

                        <NavLink
                            to="address"
                            className={({ isActive }) => `
                                flex items-center gap-3 px-4 py-3 text-sm font-medium transition-all w-full text-left rounded-sm
                                ${isActive
                                    ? 'text-[#46A358] border-l-[4px] border-[#46A358] bg-white dark:bg-zinc-900 font-bold shadow-sm pl-3'
                                    : 'text-zinc-500 dark:text-zinc-400 hover:text-[#46A358] hover:bg-zinc-50 dark:hover:bg-zinc-900/30'
                                }
                            `}
                        >
                            {({ isActive }) => (
                                <>
                                    <MapPin className={`w-4 h-4 ${isActive ? 'text-[#46A358] stroke-[2.5]' : 'text-zinc-400 stroke-[1.8]'}`} />
                                    {t("text232")}
                                </>
                            )}
                        </NavLink>

                        <NavLink
                            to="orders"
                            className={({ isActive }) => `
                                flex items-center gap-3 px-4 py-3 text-sm font-medium transition-all w-full text-left rounded-sm
                                ${isActive
                                    ? 'text-[#46A358] border-l-[4px] border-[#46A358] bg-white dark:bg-zinc-900 font-bold shadow-sm pl-3'
                                    : 'text-zinc-500 dark:text-zinc-400 hover:text-[#46A358] hover:bg-zinc-50 dark:hover:bg-zinc-900/30'
                                }
                            `}
                        >
                            {({ isActive }) => (
                                <>
                                    <ShoppingBag className={`w-4 h-4 ${isActive ? 'text-[#46A358] stroke-[2.5]' : 'text-zinc-400 stroke-[1.8]'}`} />
                                    {t("text233")}
                                </>
                            )}
                        </NavLink>

                        <NavLink
                            to="wishlist"
                            className={({ isActive }) => `
                                flex items-center gap-3 px-4 py-3 text-sm font-medium transition-all w-full text-left rounded-sm
                                ${isActive
                                    ? 'text-[#46A358] border-l-[4px] border-[#46A358] bg-white dark:bg-zinc-900 font-bold shadow-sm pl-3'
                                    : 'text-zinc-500 dark:text-zinc-400 hover:text-[#46A358] hover:bg-zinc-50 dark:hover:bg-zinc-900/30'
                                }
                            `}
                        >
                            {({ isActive }) => (
                                <>
                                    <Heart className={`w-4 h-4 ${isActive ? 'text-[#46A358] stroke-[2.5]' : 'text-zinc-400 stroke-[1.8]'}`} />
                                    {t("text234")}
                                </>
                            )}
                        </NavLink>

                        <NavLink
                            to="reports"
                            className={({ isActive }) => `
                                flex items-center gap-3 px-4 py-3 text-sm font-medium transition-all w-full text-left rounded-sm
                                ${isActive
                                    ? 'text-[#46A358] border-l-[4px] border-[#46A358] bg-white dark:bg-zinc-900 font-bold shadow-sm pl-3'
                                    : 'text-zinc-500 dark:text-zinc-400 hover:text-[#46A358] hover:bg-zinc-50 dark:hover:bg-zinc-900/30'
                                }
                            `}
                        >
                            {({ isActive }) => (
                                <>
                                    <BarChart2 className={`w-4 h-4 ${isActive ? 'text-[#46A358] stroke-[2.5]' : 'text-zinc-400 stroke-[1.8]'}`} />
                                    {t("text235")}
                                </>
                            )}
                        </NavLink>

                        <NavLink
                            to="downloads"
                            className={({ isActive }) => `
                                flex items-center gap-3 px-4 py-3 text-sm font-medium transition-all w-full text-left rounded-sm
                                ${isActive
                                    ? 'text-[#46A358] border-l-[4px] border-[#46A358] bg-white dark:bg-zinc-900 font-bold shadow-sm pl-3'
                                    : 'text-zinc-500 dark:text-zinc-400 hover:text-[#46A358] hover:bg-zinc-50 dark:hover:bg-zinc-900/30'
                                }
                            `}
                        >
                            {({ isActive }) => (
                                <>
                                    <Download className={`w-4 h-4 ${isActive ? 'text-[#46A358] stroke-[2.5]' : 'text-zinc-400 stroke-[1.8]'}`} />
                                    {t("text236")}
                                </>
                            )}
                        </NavLink>

                        <NavLink
                            to="support"
                            className={({ isActive }) => `
                                flex items-center gap-3 px-4 py-3 text-sm font-medium transition-all w-full text-left rounded-sm
                                ${isActive
                                    ? 'text-[#46A358] border-l-[4px] border-[#46A358] bg-white dark:bg-zinc-900 font-bold shadow-sm pl-3'
                                    : 'text-zinc-500 dark:text-zinc-400 hover:text-[#46A358] hover:bg-zinc-50 dark:hover:bg-zinc-900/30'
                                }
                            `}
                        >
                            {({ isActive }) => (
                                <>
                                    <LifeBuoy className={`w-4 h-4 ${isActive ? 'text-[#46A358] stroke-[2.5]' : 'text-zinc-400 stroke-[1.8]'}`} />
                                    {t("text237")}
                                </>
                            )}
                        </NavLink>

                        <div className="border-t border-zinc-100 dark:border-zinc-800 mt-2 pt-2">
                            <button className="flex items-center gap-3 px-4 py-3 text-sm font-medium text-[#46A358] hover:opacity-80 transition-opacity w-full text-left">
                                <LogOut className="w-4 h-4 text-[#46A358] stroke-[2.2]" />
                                {t("text238")}
                            </button>
                        </div>
                    </nav>
                </div>

                <div className="flex-grow w-full">
                    <Outlet />
                </div>

            </div>
        </div>
    );
};