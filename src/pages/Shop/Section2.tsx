import React, { useState } from 'react';
import { Star } from 'lucide-react';
import { useTranslation } from 'react-i18next';

type TabType = 'description' | 'reviews';

interface IReview {
  id: number;
  author: string;
  date: string;
  rating: number;
  comment: string;
}

export const Section2: React.FC = () => {
  const [activeTab, setActiveTab] = useState<TabType>('description');
  const { t } = useTranslation();

  return (
    <div className="w-full max-w-[1200px] mx-auto px-4 py-10 bg-white dark:bg-zinc-950">
      <div className="flex gap-8 border-b border-zinc-100 dark:border-zinc-800/80 pb-3 mb-6">
        <button
          type="button"
          onClick={() => setActiveTab('description')}
          className={`text-sm font-medium pb-3 -mb-[13px] transition-all relative ${
            activeTab === 'description'
              ? 'text-[#46A358] font-bold border-b-2 border-[#46A358]'
              : 'text-zinc-500 dark:text-zinc-400 hover:text-zinc-800 dark:hover:text-zinc-200'
          }`}
        >
          {t("text132")}
        </button>
        <button
          type="button"
          onClick={() => setActiveTab('reviews')}
          className={`text-sm font-medium pb-3 -mb-[13px] transition-all relative ${
            activeTab === 'reviews'
              ? 'text-[#46A358] font-bold border-b-2 border-[#46A358]'
              : 'text-zinc-500 dark:text-zinc-400 hover:text-zinc-800 dark:hover:text-zinc-200'
          }`}
        >
          {t("text133")}
        </button>
      </div>
      <div className="transition-all duration-300">
        {activeTab === 'description' ? (
          <div className="space-y-6 text-zinc-500 dark:text-zinc-400 text-sm leading-relaxed animate-fadeIn">
            <div className="space-y-4">
              <p>
                {t("text134")}
              </p>
              <p>
                {t("text135")}
              </p>
            </div>
            <div className="space-y-4 pt-2">
              <div>
                <h4 className="text-zinc-800 dark:text-zinc-200 font-bold text-sm mb-1">{t("text136")}</h4>
                <p>
                  {t("text137")}
                </p>
              </div>
              <div>
                <h4 className="text-zinc-800 dark:text-zinc-200 font-bold text-sm mb-1">{t("text138")}</h4>
                <p>
                  {t("text139")}
                </p>
              </div>
              <div>
                <h4 className="text-zinc-800 dark:text-zinc-200 font-bold text-sm mb-1">{t("text140")}</h4>
                <p>
                  {t("text141")}
                </p>
              </div>
            </div>
          </div>
        ) : (
          <div className="space-y-6 text-zinc-500 dark:text-zinc-400 text-sm leading-relaxed animate-fadeIn">
            <div className="space-y-4">
              <p>
                {t("text134")}
              </p>
              <p>
                {t("text135")}
              </p>
            </div>
            <div className="space-y-4 pt-2">
              <div>
                <h4 className="text-zinc-800 dark:text-zinc-200 font-bold text-sm mb-1">{t("text136")}</h4>
                <p>
                  {t("text137")}
                </p>
              </div>
              <div>
                <h4 className="text-zinc-800 dark:text-zinc-200 font-bold text-sm mb-1">{t("text138")}</h4>
                <p>
                  {t("text139")}
                </p>
              </div>
              <div>
                <h4 className="text-zinc-800 dark:text-zinc-200 font-bold text-sm mb-1">{t("text140")}</h4>
                <p>
                  {t("text141")}
                </p>
              </div>
            </div>
          </div>
        )}
      </div>
    </div>
  );
};