import React, { useState, useEffect } from 'react';
import { useParams, useNavigate, Link } from 'react-router-dom';
import { Heart, Star, Mail } from 'lucide-react';
import { useDispatch } from 'react-redux';
import { addToCart } from '@/reducer/CartSlice';
import { productNamesMapping, productCategoriesMapping } from '@/contacts/products';
import { useTranslation } from 'react-i18next';

export const Section1: React.FC = () => {
  const { id } = useParams<{ id: string }>();
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const { t } = useTranslation();

  const [dbProducts, setDbProducts] = useState<any[]>([]);
  const [currentProduct, setCurrentProduct] = useState<any>({
    id: 0,
    title: '',
    price: 0,
    image: '',
    images: [],
    category: '',
    sku: '',
    tags: []
  });
  const [activeImage, setActiveImage] = useState<string>('');
  const [selectedSize, setSelectedSize] = useState<string>('S');
  const [quantity, setQuantity] = useState<number>(1);

  useEffect(() => {
    fetch('http://localhost:3000/plants')
      .then((res) => res.json())
      .then((data) => {
        const fetchedProducts = Array.isArray(data) ? data : data.plants || [];
        if (fetchedProducts.length > 0) {
          setDbProducts(fetchedProducts);
          const found = fetchedProducts.find((p: any) => p.id === Number(id)) || fetchedProducts[0];
          if (found) {
            setCurrentProduct(found);
            setActiveImage(found.images?.[0] || found.image || '');
          }
        }
      })
      .catch((err) => console.error(err));
  }, [id]);

  useEffect(() => {
    const handleProductChange = (e: Event) => {
      const customEvent = e as CustomEvent;
      const selectedProduct = customEvent.detail;
      if (selectedProduct) {
        setCurrentProduct(selectedProduct);
        setActiveImage(selectedProduct.images?.[0] || selectedProduct.image || '');
        setQuantity(1);
      }
    };

    window.addEventListener('changeProductInstant', handleProductChange);
    return () => {
      window.removeEventListener('changeProductInstant', handleProductChange);
    };
  }, []);

  const handleSidebarItemClick = (productItem: any) => {
    setCurrentProduct(productItem);
    setActiveImage(productItem.images?.[0] || productItem.image || '');
    setQuantity(1);
  };

  const recommendedProducts = dbProducts.filter(p => p.id !== currentProduct.id).slice(0, 4);
  const sidebarProducts = recommendedProducts.length === 4 ? recommendedProducts : dbProducts.slice(0, 4);

  const productNameKey = productNamesMapping[currentProduct.title] || currentProduct.title || '';
  const productCategoryKey = productCategoriesMapping[currentProduct.category] || currentProduct.category || '';

  const handleAddToCartClick = () => {
    dispatch(
      addToCart({
        id: currentProduct.id,
        title: t(productNameKey),
        name: t(productNameKey),
        price: currentProduct.price,
        image: currentProduct.images?.[0] || activeImage || currentProduct.image,
        sku: currentProduct.sku || `SKU-${currentProduct.id}`,
        quantity: quantity,
      } as any)
    );
  };

  return (
    <div className="w-full max-w-[1200px] mx-auto px-4 py-6 bg-white dark:bg-zinc-950">
      <div className="text-sm text-zinc-500 mb-8 flex items-center gap-1">
        <Link to="/" className="hover:text-[#46A358] font-semibold transition-colors">
          {t("text120")}
        </Link>
        <span>/</span>
        <span className="text-zinc-800 dark:text-zinc-200 font-bold">
          {t("text121")}
        </span>
      </div>

      <div className="flex flex-col lg:flex-row gap-12 items-start">
        <div className="w-full lg:w-[50%] flex gap-4">
          <div className="flex flex-col gap-3">
            {sidebarProducts.map((productItem) => {
              const productImg = productItem.images?.[0] || productItem.image || '';
              const isCurrent = productItem.id === currentProduct.id;
              const mappedSidebarName = productNamesMapping[productItem.title] || productItem.title;

              return (
                <button
                  key={productItem.id}
                  type="button"
                  onClick={() => handleSidebarItemClick(productItem)}
                  className={`w-20 h-20 border-2 rounded-lg overflow-hidden p-1.5 bg-[#FBFBFB] dark:bg-zinc-900 transition-all ${
                    isCurrent ? 'border-[#46A358] ring-1 ring-[#46A358]' : 'border-zinc-200 dark:border-zinc-800 hover:border-[#46A358]'
                  }`}
                >
                  <img src={productImg} alt={t(mappedSidebarName)} className="w-full h-full object-contain" />
                </button>
              );
            })}
          </div>

          <div className="flex-1 bg-[#FBFBFB] dark:bg-zinc-900 border border-zinc-100 dark:border-zinc-800 rounded-xl p-8 flex items-center justify-center relative min-h-[420px]">
            <img
              src={activeImage || currentProduct.image || ''}
              alt={t(productNameKey)}
              className="max-w-full max-h-[380px] object-contain drop-shadow-2xl transition-all duration-300 animate-fadeIn"
            />
            <button className="absolute top-4 right-4 bg-white dark:bg-zinc-800 p-2 rounded-full shadow-sm hover:text-[#46A358] border border-zinc-100 dark:border-zinc-700 transition-colors">
              <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5">
                <circle cx="11" cy="11" r="8"></circle>
                <line x1="21" y1="21" x2="16.65" y2="16.65"></line>
              </svg>
            </button>
          </div>
        </div>

        <div className="w-full lg:w-[50%] flex flex-col">
          <h1 className="text-zinc-800 dark:text-zinc-100 font-bold text-3xl mb-1.5">
            {t(productNameKey)}
          </h1>

          <div className="flex items-center justify-between border-b border-zinc-100 dark:border-zinc-800/80 pb-3 mb-4">
            <span className="text-[#46A358] text-2xl font-bold">${currentProduct.price?.toFixed(2)}</span>
            <div className="flex items-center gap-1 text-amber-400 text-sm">
              <div className="flex items-center gap-0.5">
                <Star className="w-4 h-4 fill-current" />
                <Star className="w-4 h-4 fill-current" />
                <Star className="w-4 h-4 fill-current" />
                <Star className="w-4 h-4 fill-current" />
                <Star className="w-4 h-4 text-zinc-300 dark:text-zinc-700" />
              </div>
              <span className="text-zinc-500 dark:text-zinc-400 text-xs ml-1.5">
                {t("text122")}
              </span>
            </div>
          </div>

          <div className="mb-5">
            <h4 className="text-zinc-800 dark:text-zinc-200 font-bold text-sm mb-1.5">
              {t("text123")}:
            </h4>
            <p className="text-zinc-500 dark:text-zinc-400 text-sm leading-relaxed">
              {t("text124")}
            </p>
          </div>

          <div className="mb-6">
            <h4 className="text-zinc-800 dark:text-zinc-200 font-bold text-sm mb-2">
              {t("text125")}:
            </h4>
            <div className="flex gap-2.5">
              {['S', 'M', 'L', 'XL'].map((size) => (
                <button
                  key={size}
                  type="button"
                  onClick={() => setSelectedSize(size)}
                  className={`w-9 h-9 rounded-full border text-xs font-bold flex items-center justify-center transition-all ${
                    selectedSize === size
                      ? 'border-[#46A358] text-[#46A358] bg-[#46A358]/5 ring-1 ring-[#46A358]'
                      : 'border-zinc-300 dark:border-zinc-700 text-zinc-600 dark:text-zinc-400 hover:border-zinc-400'
                  }`}
                >
                  {size}
                </button>
              ))}
            </div>
          </div>

          <div className="flex items-center gap-4 mb-7 border-b border-zinc-100 dark:border-zinc-800/80 pb-6">
            <div className="flex items-center border border-zinc-200 dark:border-zinc-800 rounded-full overflow-hidden h-10 bg-white dark:bg-zinc-900">
              <button
                type="button"
                onClick={() => setQuantity(q => Math.max(1, q - 1))}
                className="px-3.5 text-xl font-medium hover:bg-zinc-50 dark:hover:bg-zinc-800 transition-colors"
              >
                -
              </button>
              <span className="text-sm font-bold w-8 text-center text-zinc-800 dark:text-zinc-200">{quantity}</span>
              <button
                type="button"
                onClick={() => setQuantity(q => q + 1)}
                className="px-3.5 text-xl font-medium hover:bg-zinc-50 dark:hover:bg-zinc-800 transition-colors"
              >
                +
              </button>
            </div>

            <button className="bg-[#46A358] hover:bg-[#3d8e4e] text-white text-sm font-bold px-7 h-10 rounded-lg transition-colors uppercase tracking-wider shadow-sm active:scale-95 duration-150">
              {t("text126")}
            </button>

            <button
              type="button"
              onClick={handleAddToCartClick}
              className="border border-[#46A358] text-[#46A358] hover:bg-[#46A358]/5 text-sm font-bold px-6 h-10 rounded-lg transition-colors uppercase tracking-wider active:scale-95 duration-150"
            >
              {t("text127")}
            </button>

            <button className="w-10 h-10 border border-[#46A358]/30 rounded-lg flex items-center justify-center text-[#46A358] hover:bg-[#46A358]/5 transition-colors">
              <Heart className="w-5 h-5" />
            </button>
          </div>

          <div className="flex flex-col gap-2 text-xs text-zinc-400 dark:text-zinc-500">
            <p>
              <span className="text-zinc-500 dark:text-zinc-400 font-semibold">{t("text128")}:</span> {currentProduct.sku || `SKU-${currentProduct.id}`}
            </p>
            <p>
              <span className="text-zinc-500 dark:text-zinc-400 font-semibold">{t("text129")}:</span> {t(productCategoryKey)}
            </p>
            <p>
              <span className="text-zinc-500 dark:text-zinc-400 font-semibold">{t("text130")}:</span> Home, Garden, Plants
            </p>

            <div className="flex items-center gap-3 mt-2 text-zinc-700 dark:text-zinc-300">
              <span className="text-zinc-500 dark:text-zinc-400 font-semibold text-xs">
                {t("text131")}:
              </span>
              <button className="hover:text-[#46A358] transition-colors" aria-label="Share on Facebook">
                <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="w-4 h-4">
                  <path d="M18 2h-3a5 5 0 0 0-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 0 1 1-1h3z" />
                </svg>
              </button>
              <button className="hover:text-[#46A358] transition-colors" aria-label="Share on Twitter">
                <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="w-4 h-4">
                  <path d="M22 4s-.7 2.1-2 3.4c1.6 10-9.4 17.3-18 11.6 2.2.1 4.4-.6 6-2C3 15.5.5 9.6 3 5c2.2 2.6 5.6 4.1 9 4-.9-4.2 4-6.6 7-3.8 1.1 0 3-1.2 3-1.2z" />
                </svg>
              </button>
              <button className="hover:text-[#46A358] transition-colors" aria-label="Share on LinkedIn">
                <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="w-4 h-4">
                  <path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z" />
                  <rect width="4" height="12" x="2" y="9" />
                  <circle cx="4" cy="4" r="2" />
                </svg>
              </button>
              <button className="hover:text-[#46A358] transition-colors" aria-label="Share via Mail">
                <Mail className="w-4 h-4" />
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};