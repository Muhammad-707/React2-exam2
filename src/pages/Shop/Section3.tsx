import React, { useEffect, useState } from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Pagination, Autoplay } from 'swiper/modules';
import 'swiper/css';
import 'swiper/css/pagination';
import { Card4 } from '@/components/Card4';
import { productNamesMapping } from '@/contacts/products';
import { useTranslation } from 'react-i18next';

interface Section3Props {
  currentProductId?: number;
}

export const Section3: React.FC<Section3Props> = ({ currentProductId }) => {
  const { t } = useTranslation();
  const [dbProducts, setDbProducts] = useState<any[]>([]);

  useEffect(() => {
    fetch('http://localhost:3000/plants')
      .then((res) => res.json())
      .then((data) => {
        const fetchedProducts = Array.isArray(data) ? data : data.plants || [];
        setDbProducts(fetchedProducts);
      })
      .catch((err) => console.error(err));
  }, []);

  const displayProducts = dbProducts
    .filter(p => p.id !== currentProductId)
    .slice(0, 18);

  const handleProductClick = (product: any) => {
    const event = new CustomEvent('changeProductInstant', { detail: product });
    window.dispatchEvent(event);
    
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <div className="w-full max-w-[1200px] mx-auto px-4 py-12 bg-white dark:bg-zinc-950 related-products-swiper">
      <div className="border-b border-zinc-100 dark:border-zinc-800/80 pb-3 mb-8">
        <h2 className="text-[#46A358] font-bold text-17px md:text-lg tracking-wide uppercase">
          {t("text142")}
        </h2>
      </div>
      <Swiper
        modules={[Pagination, Autoplay]}
        spaceBetween={24}
        slidesPerView={5}
        slidesPerGroup={5}
        autoplay={{
          delay: 4000,
          disableOnInteraction: false,
        }}
        pagination={{
          clickable: true,
          el: '.custom-swiper-pagination',
        }}
        breakpoints={{
          320: { slidesPerView: 2, slidesPerGroup: 2, spaceBetween: 12 },
          640: { slidesPerView: 3, slidesPerGroup: 3, spaceBetween: 16 },
          768: { slidesPerView: 4, slidesPerGroup: 4, spaceBetween: 20 },
          1024: { slidesPerView: 5, slidesPerGroup: 5, spaceBetween: 24 },
        }}
        className="w-full pb-4"
      >
        {displayProducts.map((product) => {
          const productNameKey = productNamesMapping[product.title] || product.title;

          return (
            <SwiperSlide key={product.id}>
              <Card4
                id={product.id}
                name={t(productNameKey)}
                price={product.price}
                image={product.images?.[0] || product.image || ''}
                onClick={() => handleProductClick(product)}
              />
            </SwiperSlide>
          );
        })}
      </Swiper>
      <div className="custom-swiper-pagination flex items-center justify-center gap-2 mt-8" />
      <style>{`
        .related-products-swiper .custom-swiper-pagination .swiper-pagination-bullet {
          width: 10px !important;
          height: 10px !important;
          background: transparent !important;
          border: 1.5px solid #46A358 !important;
          opacity: 1 !important;
          transition: all 0.3s ease;
          margin: 0 4px !important;
          border-radius: 50%;
          cursor: pointer;
        }
        .related-products-swiper .custom-swiper-pagination .swiper-pagination-bullet-active {
          background: #46A358 !important;
          border-color: #46A358 !important;
        }
      `}</style>
    </div>
  );
};