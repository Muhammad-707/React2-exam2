import React from 'react';
import { useTranslation } from 'react-i18next';

export const Address: React.FC = () => {
    const { t } = useTranslation();

    return (
        <div className="w-full animate-in fade-in duration-200">
            <div className="flex justify-between items-center mb-1">
                <h3 className="text-base font-bold text-[#3D3D3D] dark:text-zinc-200">{t("text253")}</h3>
                <button className="text-[#46A358] font-medium text-sm hover:underline">{t("text269")}</button>
            </div>
            <p className="text-zinc-400 dark:text-zinc-500 text-xs font-normal mb-6">
                {t("text254")}
            </p>

            <form onSubmit={(e) => e.preventDefault()} className="grid grid-cols-1 md:grid-cols-2 gap-x-7 gap-y-5 w-full">
                <div className="flex flex-col gap-2">
                    <label className="text-sm font-normal">{t("text240")} <span className="text-red-500">*</span></label>
                    <input type="text" className="w-full h-10 px-3 text-sm bg-white dark:bg-zinc-900 border border-zinc-200 dark:border-zinc-800 rounded-md focus:outline-none focus:border-[#46A358]" />
                </div>

                <div className="flex flex-col gap-2">
                    <label className="text-sm font-normal">{t("text241")} <span className="text-red-500">*</span></label>
                    <input type="text" className="w-full h-10 px-3 text-sm bg-white dark:bg-zinc-900 border border-zinc-200 dark:border-zinc-800 rounded-md focus:outline-none focus:border-[#46A358]" />
                </div>

                <div className="flex flex-col gap-2">
                    <label className="text-sm font-normal">{t("text255")} <span className="text-red-500">*</span></label>
                    <select className="w-full h-10 px-3 text-sm bg-white dark:bg-zinc-900 border border-zinc-200 dark:border-zinc-800 rounded-md focus:outline-none focus:border-[#46A358] text-zinc-400 appearance-none bg-[url('data:image/svg+xml;charset=UTF-8,%3Csvg%20xmlns%3D%22http%3A%2F%2Fwww.w3.org%2F2000%2Fsvg%22%20width%3D%2224%22%20height%3D%2224%22%20viewBox%3D%220%200%2024%2024%22%20fill%3D%22none%22%20stroke%3D%22%23a1a1aa%22%20stroke-width%3D%222%22%20stroke-linecap%3D%22round%22%20stroke-linejoin%3D%22round%22%3E%3Cpath%20d%3D%22m6%209%206%206%206-6%22%2F%3E%3C%2Fsvg%3E')] bg-[length:18px] bg-[right_12px_center] bg-no-repeat">
                        <option>{t("text256")}</option>
                    </select>
                </div>

                <div className="flex flex-col gap-2">
                    <label className="text-sm font-normal">{t("text257")} <span className="text-red-500">*</span></label>
                    <input type="text" className="w-full h-10 px-3 text-sm bg-white dark:bg-zinc-900 border border-zinc-200 dark:border-zinc-800 rounded-md focus:outline-none focus:border-[#46A358]" />
                </div>

                <div className="flex flex-col gap-2">
                    <label className="text-sm font-normal">{t("text258")} <span className="text-red-500">*</span></label>
                    <input type="text" placeholder={t("text259")} className="w-full h-10 px-3 text-sm bg-white dark:bg-zinc-900 border border-zinc-200 dark:border-zinc-800 rounded-md focus:outline-none focus:border-[#46A358] placeholder:text-zinc-300 dark:placeholder:text-zinc-700" />
                </div>

                <div className="flex flex-col gap-2 justify-end">
                    <input type="text" placeholder={t("text260")} className="w-full h-10 px-3 text-sm bg-white dark:bg-zinc-900 border border-zinc-200 dark:border-zinc-800 rounded-md focus:outline-none focus:border-[#46A358] placeholder:text-zinc-300 dark:placeholder:text-zinc-700" />
                </div>

                <div className="flex flex-col gap-2">
                    <label className="text-sm font-normal">{t("text261")} <span className="text-red-500">*</span></label>
                    <select className="w-full h-10 px-3 text-sm bg-white dark:bg-zinc-900 border border-zinc-200 dark:border-zinc-800 rounded-md focus:outline-none focus:border-[#46A358] text-zinc-400 appearance-none bg-[url('data:image/svg+xml;charset=UTF-8,%3Csvg%20xmlns%3D%22http%3A%2F%2Fwww.w3.org%2F2000%2Fsvg%22%20width%3D%2224%22%20height%3D%2224%22%20viewBox%3D%220%200%2024%2024%22%20fill%3D%22none%22%20stroke%3D%22%23a1a1aa%22%20stroke-width%3D%222%22%20stroke-linecap%3D%22round%22%20stroke-linejoin%3D%22round%22%3E%3Cpath%20d%3D%22m6%209%206%206%206-6%22%2F%3E%3C%2Fsvg%3E')] bg-[length:18px] bg-[right_12px_center] bg-no-repeat">
                        <option>{t("text262")}</option>
                    </select>
                </div>

                <div className="flex flex-col gap-2">
                    <label className="text-sm font-normal">{t("text263")} <span className="text-red-500">*</span></label>
                    <input type="text" className="w-full h-10 px-3 text-sm bg-white dark:bg-zinc-900 border border-zinc-200 dark:border-zinc-800 rounded-md focus:outline-none focus:border-[#46A358]" />
                </div>

                <div className="flex flex-col gap-2">
                    <label className="text-sm font-normal">{t("text264")} <span className="text-red-500">*</span></label>
                    <input type="email" className="w-full h-10 px-3 text-sm bg-white dark:bg-zinc-900 border border-zinc-200 dark:border-zinc-800 rounded-md focus:outline-none focus:border-[#46A358]" />
                </div>

                <div className="flex flex-col gap-2">
                    <label className="text-sm font-normal">{t("text265")} <span className="text-red-500">*</span></label>
                    <div className="flex gap-2 w-full">
                        <select className="w-[85px] h-10 px-2 text-sm bg-white dark:bg-zinc-900 border border-zinc-200 dark:border-zinc-800 rounded-md focus:outline-none focus:border-[#46A358] appearance-none bg-[url('data:image/svg+xml;charset=UTF-8,%3Csvg%20xmlns%3D%22http%3A%2F%2Fwww.w3.org%2F2000%2Fsvg%22%20width%3D%2224%22%20height%3D%2224%22%20viewBox%3D%220%200%2024%2024%22%20fill%3D%22none%22%20stroke%3D%22%23a1a1aa%22%20stroke-width%3D%222%22%20stroke-linecap%3D%22round%22%20stroke-linejoin%3D%22round%22%3E%3Cpath%20d%3D%22m6%209%206%206%206-6%22%2F%3E%3C%2Fsvg%3E')] bg-[length:16px] bg-[right_8px_center] bg-no-repeat">
                            <option>+992</option>
                        </select>
                        <input type="tel" className="flex-grow h-10 px-3 text-sm bg-white dark:bg-zinc-900 border border-zinc-200 dark:border-zinc-800 rounded-md focus:outline-none focus:border-[#46A358]" />
                    </div>
                </div>

                <div className="md:col-span-2 mt-2">
                    <button type="submit" className="bg-[#46A358] hover:bg-[#3b8a4a] text-white px-7 py-2.5 rounded-md font-bold text-sm transition-colors shadow-sm">
                        Save Address
                    </button>
                </div>
            </form>

            <div className="border-t border-zinc-100 dark:border-zinc-900 my-10" />
            
            <div className="flex justify-between items-center mb-1">
                <h3 className="text-base font-bold text-[#3D3D3D] dark:text-zinc-200">{t("text266")}</h3>
                <button className="text-[#46A358] font-medium text-sm hover:underline">{t("text269")}</button>
            </div>
            <div className="flex items-center justify-between w-full mt-2">
                <p className="text-zinc-400 dark:text-zinc-500 text-xs font-normal">
                    {t("text267")}
                </p>
                <label className="flex items-center gap-2 text-sm font-normal cursor-pointer text-zinc-600 dark:text-zinc-400">
                    <input type="checkbox" className="w-4 h-4 rounded-full border-zinc-300 text-[#46A358] focus:ring-[#46A358] accent-[#46A358]" />
                    {t("text268")}
                </label>
            </div>
        </div>
    );
};