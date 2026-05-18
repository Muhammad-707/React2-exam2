import React, { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Card1 } from '@/components/Card1';
import type { IProduct } from '@/components/Card1';
import { filterActions } from '@/reducer/filterSlice';
import { ChevronRight, ChevronLeft } from 'lucide-react';
import { useTranslation } from 'react-i18next';
import { motion, AnimatePresence, type Variants } from 'framer-motion';

import i1 from "@/assets/Super Sale.png";
import i2 from "@/assets/image 122.png";

const categoryMapping: { [key: string]: string } = {
  'All Plants': 'text34',
  'House Plants': 'text17',
  'Potter Plants': 'text18',
  'Seeds': 'text19',
  'Small Plants': 'text20',
  'Big Plants': 'text21',
  'Succulents': 'text22',
  'Trerrariums': 'text23',
  'Gardening': 'text24',
  'Accessories': 'text25'
};

const fadeInUp: Variants = {
  hidden: { opacity: 0, y: 30 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.8, ease: [0.25, 1, 0.5, 1] }
  }
};

const containerVariants: Variants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      delayChildren: 0.50,
      staggerChildren: 0.10,
    }
  }
};

const cardAnimationVariants: Variants = {
  hidden: { opacity: 0, y: 40, scale: 0.97 },
  visible: {
    opacity: 1,
    y: 0,
    scale: 1,
    transition: { duration: 0.6, ease: [0.25, 1, 0.5, 1] }
  },
  exit: {
    opacity: 0, scale: 0.97, y: 20,
    transition: { duration: 0.2, ease: "easeInOut" }
  }
};

export const Section2: React.FC = () => {
  const dispatch = useDispatch();
  const { t, i18n } = useTranslation();

  const {
    activeCategory = 'All Plants',
    priceRange = [0, 250],
    currentPriceRange = [0, 250],
    sortBy = 'default'
  } = useSelector((state: any) => state.filters || {});

  const [dbProducts, setDbProducts] = useState<IProduct[]>([]);
  const [filteredProducts, setFilteredProducts] = useState<IProduct[]>([]);
  const [currentPage, setCurrentPage] = useState<number>(1);
  const [isLoading, setIsLoading] = useState<boolean>(true);
  const itemsPerPage = 9;

  useEffect(() => {
    setIsLoading(true);
    fetch('http://localhost:3000/plants')
      .then((res) => {
        if (!res.ok) throw new Error("Network error or wrong port");
        return res.json();
      })
      .then((data) => {
        if (Array.isArray(data)) {
          setDbProducts(data);
        } else if (data && Array.isArray(data.plants)) {
          setDbProducts(data.plants);
        }
      })
      .catch((err) => console.error("Error fetching plants:", err))
      .finally(() => setIsLoading(false));
  }, []);

  const getCategoryCount = (categoryName: string) => {
    if (categoryName === 'All Plants') return dbProducts.length;
    return dbProducts.filter(p => p.category && p.category.toLowerCase() === categoryName.toLowerCase()).length;
  };

  useEffect(() => {
    let result = [...dbProducts];

    if (activeCategory && activeCategory !== 'All Plants') {
      result = result.filter((p) => p.category && p.category.toLowerCase() === activeCategory.toLowerCase());
    }

    if (priceRange && priceRange.length === 2) {
      result = result.filter((p) => p.price >= priceRange[0] && p.price <= priceRange[1]);
    }

    if (sortBy === 'alphabet') {
      const isRu = i18n.language === 'ru';
      result.sort((a, b) => {
        const titleA = isRu && a.titleRu ? a.titleRu : a.title || '';
        const titleB = isRu && b.titleRu ? b.titleRu : b.title || '';
        return titleA.localeCompare(titleB);
      });
    }

    setFilteredProducts(result);
    setCurrentPage(1);
  }, [dbProducts, activeCategory, priceRange, sortBy, i18n.language]);

  const indexOfLastItem = currentPage * itemsPerPage;
  const indexOfFirstItem = indexOfLastItem - itemsPerPage;
  const currentItems = filteredProducts.slice(indexOfFirstItem, indexOfLastItem);
  const totalPages = Math.ceil(filteredProducts.length / itemsPerPage);

  const minPrice = currentPriceRange ? currentPriceRange[0] : 0;
  const maxPrice = currentPriceRange ? currentPriceRange[1] : 250;

  return (
    <section className="w-full max-w-[1300px] mx-auto px-4 py-12 flex flex-col md:flex-row gap-12 overflow-hidden">
      <motion.div
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.1 }}
        variants={fadeInUp}
        className="w-full md:w-[310px] shrink-0 flex flex-col gap-8"
      >
        <div className="bg-[#fbfbfb] dark:bg-zinc-900/40 p-6 rounded-2xl border border-zinc-100/80 dark:border-zinc-800/40 shadow-sm">
          <h3 className="text-zinc-800 dark:text-zinc-100 font-bold text-lg mb-4 tracking-tight">{t("text16")}</h3>
          <div className="flex flex-col gap-1 relative">
            {[
              'All Plants', 'House Plants', 'Potter Plants', 'Seeds', 'Small Plants',
              'Big Plants', 'Succulents', 'Trerrariums', 'Gardening', 'Accessories'
            ].map((catName) => {
              const count = getCategoryCount(catName);
              const translationKey = categoryMapping[catName] || catName;
              const isSelected = activeCategory === catName;

              return (
                <button
                  key={catName}
                  onClick={() => dispatch(filterActions.setCategory(catName))}
                  className={`flex items-center justify-between text-sm w-full py-2 px-3 rounded-lg relative transition-colors duration-300 ${isSelected ? 'text-[#46A358] font-bold' : 'text-zinc-600 dark:text-zinc-400 hover:text-zinc-900 dark:hover:text-zinc-200'
                    }`}
                >
                  {isSelected && (
                    <motion.div
                      layoutId="activeCategoryBg"
                      className="absolute inset-0 bg-[#46A358]/6 dark:bg-[#46A358]/10 rounded-lg -z-10"
                      transition={{ type: "spring", stiffness: 380, damping: 30 }}
                    />
                  )}
                  <span className="relative z-10">{t(translationKey)}</span>
                  <span className={`text-xs relative z-10 ${isSelected ? 'text-[#46A358]' : 'text-zinc-400'}`}>
                    ({count})
                  </span>
                </button>
              );
            })}
          </div>
        </div>

        <div className="bg-[#fbfbfb] dark:bg-zinc-900/40 p-6 rounded-2xl border border-zinc-100/80 dark:border-zinc-800/40 shadow-sm">
          <h3 className="text-zinc-800 dark:text-zinc-100 font-bold text-lg mb-4 tracking-tight">{t("text26")}</h3>
          <div className="px-2 flex flex-col gap-2 relative">
            <div className="relative w-full h-6 flex items-center">
              <input
                type="range" min="0" max="250" value={minPrice}
                onChange={(e) => {
                  const val = Number(e.target.value);
                  if (val < maxPrice - 5) dispatch(filterActions.setCurrentPriceRange([val, maxPrice]));
                }}
                className="absolute w-full appearance-none bg-transparent h-2 pointer-events-none"
                style={{ WebkitAppearance: 'none', zIndex: minPrice > 125 ? 40 : 30 }}
              />
              <input
                type="range" min="0" max="250" value={maxPrice}
                onChange={(e) => {
                  const val = Number(e.target.value);
                  if (val > minPrice + 5) dispatch(filterActions.setCurrentPriceRange([minPrice, val]));
                }}
                className="absolute w-full appearance-none bg-transparent h-2 pointer-events-none"
                style={{ WebkitAppearance: 'none', zIndex: minPrice > 125 ? 30 : 40 }}
              />
              <div className="w-full h-1.5 bg-zinc-200 dark:bg-zinc-800 rounded-lg absolute z-10"></div>
              <div
                className="h-1.5 bg-[#46A358] absolute z-20 rounded-lg transition-all duration-150"
                style={{
                  left: `${(minPrice / 250) * 100}%`,
                  width: `${((maxPrice - minPrice) / 250) * 100}%`
                }}
              ></div>
            </div>
            <style>{`
              input[type="range"]::-webkit-slider-thumb {
                pointer-events: auto; width: 16px; height: 16px; border-radius: 50%;
                background: #46A358; border: 2px solid #fff; cursor: pointer;
                -webkit-appearance: none; box-shadow: 0 2px 4px rgba(70,163,88,0.3);
                transition: transform 0.1s ease;
              }
              input[type="range"]::-webkit-slider-thumb:hover { transform: scale(1.15); }
              input[type="range"]::-moz-range-thumb {
                pointer-events: auto; width: 16px; height: 16px; border-radius: 50%;
                background: #46A358; border: 2px solid #fff; cursor: pointer;
                box-shadow: 0 2px 4px rgba(70,163,88,0.3); transition: transform 0.1s ease;
              }
              input[type="range"]::-moz-range-thumb:hover { transform: scale(1.15); }
            `}</style>
            <div className="flex flex-col gap-3 mt-2">
              <span className="text-zinc-600 dark:text-zinc-400 text-sm">
                {t("text27")}: <strong className="text-[#46A358]">${minPrice} — ${maxPrice}</strong>
              </span>
              <button
                onClick={() => dispatch(filterActions.applyPriceFilter())}
                className="bg-[#46A358] text-white text-sm font-semibold w-24 py-2 rounded-lg hover:bg-[#3d8e4e] active:scale-95 transition-all shadow-md shadow-green-600/10 text-center"
              >
                {t("text28")}
              </button>
            </div>
          </div>
        </div>

        <motion.div
          whileHover={{ y: -4 }}
          className="relative w-full overflow-hidden rounded-2xl bg-gradient-to-b from-[#EBF6EE] to-[#F3FBF6] dark:from-zinc-900 dark:to-zinc-900/40 p-6 text-center flex flex-col items-center border border-zinc-100 dark:border-zinc-800/50 shadow-sm"
        >
          <img src={i1} alt="Super Sale" className="mb-2 mt-[-23px] w-fit select-none pointer-events-none" />
          <h4 className="text-zinc-800 dark:text-zinc-200 font-extrabold text-xl uppercase tracking-wider">{t("text33")}</h4>
          <motion.img
            animate={{ y: [0, -6, 0] }}
            transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
            src={i2} alt="plants banner" className="w-fit pt-2 object-contain select-none pointer-events-none filter drop-shadow-lg"
          />
        </motion.div>
      </motion.div>

      <div className="flex-1 flex flex-col justify-between min-h-[950px] gap-8">
        <motion.div
          initial="hidden" whileInView="visible" viewport={{ once: true, amount: 0.05 }} variants={fadeInUp}
          className="flex flex-col gap-6 w-full"
        >
          <div className="flex items-center justify-between border-b border-zinc-100 dark:border-zinc-800/60 pb-3">
            <div className="flex gap-6 text-sm font-medium">
              <button className="text-[#46A358] border-b-2 border-[#46A358] pb-3 -mb-[14px]">{t("text34")}</button>
              <button className="text-zinc-500 hover:text-zinc-800 dark:hover:text-zinc-200 transition-colors">{t("text35")}</button>
              <button className="text-zinc-500 hover:text-zinc-800 dark:hover:text-zinc-200 transition-colors">{t("text36")}</button>
            </div>
            <div className="flex items-center text-sm">
              <button
                onClick={() => dispatch(filterActions.setSortBy(sortBy === 'alphabet' ? 'default' : 'alphabet'))}
                className={`font-semibold text-sm px-4 py-1.5 rounded-lg border transition-all active:scale-95 ${sortBy === 'alphabet'
                    ? 'bg-[#46A358] text-white border-[#46A358] shadow-md shadow-green-600/10'
                    : 'bg-white dark:bg-zinc-800 border-zinc-200 dark:border-zinc-700 text-zinc-800 dark:text-zinc-200 hover:border-[#46A358] hover:text-[#46A358]'
                  }`}
              >
                {sortBy === 'alphabet' ? t("text38") : t("text37")}
              </button>
            </div>
          </div>

          <motion.div layout className="min-h-[600px] flex flex-col justify-start">
            <AnimatePresence mode="popLayout">
              {isLoading ? (
                <div className="w-full text-center py-24 flex flex-col items-center justify-center">
                  <div className="animate-spin rounded-full h-10 w-10 border-b-2 border-[#46A358]"></div>
                  <p className="text-zinc-400 text-sm mt-4">Загрузка товаров...</p>
                </div>
              ) : currentItems.length > 0 ? (
                <motion.div
                  key={`${activeCategory}-${currentPage}-${sortBy}-${priceRange?.join('-')}`}
                  variants={containerVariants}
                  initial="hidden"
                  animate="visible"
                  exit="hidden"
                  className="grid grid-cols-2 sm:grid-cols-2 lg:grid-cols-3 gap-x-4 sm:gap-x-6 gap-y-0"
                >
                  {currentItems.map((product, index) => {
                    const isLeftColumnMobile = index % 2 === 0;

                    return (
                      <motion.div
                        key={product.id}
                        layout
                        variants={cardAnimationVariants}
                        transition={{ type: "spring", stiffness: 280, damping: 32 }}
                        className={`mb-6 ${isLeftColumnMobile ? 'max-sm:-mt-4' : 'max-sm:mt-6'}`}
                      >
                        <Card1 product={product} />
                      </motion.div>
                    );
                  })}
                </motion.div>
              ) : (
                <motion.div
                  key="no-items" initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} exit={{ opacity: 0 }}
                  className="w-full text-center py-24 flex flex-col items-center justify-center bg-[#fbfbfb] dark:bg-zinc-900/20 rounded-2xl border border-dashed border-zinc-200 dark:border-zinc-800 p-8"
                >
                  <motion.span animate={{ scale: [1, 1.15, 1] }} transition={{ repeat: Infinity, duration: 2 }} className="text-4xl mb-3">🌱</motion.span>
                  <h3 className="text-zinc-800 dark:text-zinc-200 font-bold text-lg mb-1">Растения не найдены</h3>
                  <p className="text-zinc-500 dark:text-zinc-400 text-sm max-w-[320px]">
                    Мы не нашли товары в диапазоне цен (${minPrice} — ${maxPrice}). Попробуйте изменить фильтр!
                  </p>
                </motion.div>
              )}
            </AnimatePresence>
          </motion.div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 15 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ delay: 0.1 }}
          className="flex items-center justify-end gap-2 pt-4 border-t border-transparent w-full"
        >
          {totalPages > 1 ? (
            <>
              <button
                disabled={currentPage === 1} onClick={() => setCurrentPage(p => p - 1)}
                className="w-9 h-9 border border-zinc-200 dark:border-zinc-800 rounded-lg flex items-center justify-center text-zinc-600 dark:text-zinc-400 hover:border-[#46A358] hover:text-[#46A358] disabled:opacity-30 disabled:hover:text-zinc-400 disabled:hover:border-zinc-200 active:scale-90 transition-all bg-white dark:bg-zinc-900"
              >
                <ChevronLeft className="w-4 h-4" />
              </button>

              {Array.from({ length: totalPages }).map((_, index) => (
                <button
                  key={index} onClick={() => setCurrentPage(index + 1)}
                  className={`w-9 h-9 rounded-lg text-sm font-semibold transition-all active:scale-90 ${currentPage === index + 1
                      ? 'bg-[#46A358] text-white shadow-md shadow-green-600/20'
                      : 'border border-zinc-200 dark:border-zinc-800 text-zinc-600 dark:text-zinc-400 hover:border-[#46A358] hover:text-[#46A358] bg-white dark:bg-zinc-900'
                    }`}
                >
                  {index + 1}
                </button>
              ))}

              <button
                disabled={currentPage === totalPages} onClick={() => setCurrentPage(p => p + 1)}
                className="w-9 h-9 border border-zinc-200 dark:border-zinc-800 rounded-lg flex items-center justify-center text-zinc-600 dark:text-zinc-400 hover:border-[#46A358] hover:text-[#46A358] disabled:opacity-30 disabled:hover:text-zinc-400 disabled:hover:border-zinc-200 active:scale-90 transition-all bg-white dark:bg-zinc-900"
              >
                <ChevronRight className="w-4 h-4" />
              </button>
            </>
          ) : <div className="h-9"></div>}
        </motion.div>
      </div>
    </section>
  );
};