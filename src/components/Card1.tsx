import React from 'react';
import { ShoppingCart, Heart, Search } from 'lucide-react';
import { Link } from 'react-router-dom';
import { useDispatch } from 'react-redux';
import { addToCart } from '@/reducer/CartSlice';
import { useTranslation } from 'react-i18next';
import { motion, type Variants } from 'framer-motion';

export interface IProduct {
  id: number;
  title: string;       
  titleRu: string;     
  description?: string;
  descriptionRu?: string;
  price: number;
  oldPrice: number | null;
  category: string;
  sku: string;
  image: string;
  images: string[];
}

interface Card1Props {
  product: IProduct;
}

const actionContainerVariants: Variants = {
  hover: {
    transition: { staggerChildren: 0.04, delayChildren: 0.02 }
  }
};

const actionBtnVariants: Variants = {
  initial: { opacity: 0, y: 10, scale: 0.9 },
  hover: { 
    opacity: 1, 
    y: 0, 
    scale: 1,
    transition: { duration: 0.3, ease: 'easeOut' }
  }
};

export const Card1: React.FC<Card1Props> = ({ product }) => {
  const dispatch = useDispatch();
  const { i18n } = useTranslation();

  const isRu = i18n.language === 'ru';
  const displayTitle = isRu && product.titleRu ? product.titleRu : product.title;

  const handleAddToCart = (e: React.MouseEvent) => {
    e.preventDefault(); 
    e.stopPropagation(); 
    
    dispatch(addToCart({
      id: product.id,
      title: displayTitle, 
      titleRu: product.titleRu || product.title,
      price: product.price,
      image: product.image,
      sku: product.sku || `SKU-${product.id}`,
    }));
  };

  return (
    <motion.div 
      initial="initial"
      whileHover="hover"
      variants={{
        initial: { y: 0, boxShadow: "0px 1px 3px rgba(0,0,0,0.02)" },
        hover: { y: -6, boxShadow: "0px 16px 32px rgba(0,0,0,0.06)" }
      }}
      transition={{ duration: 0.4, ease: [0.25, 1, 0.5, 1] }}
      className="lg:w-auto lg:h-auto h-[280px] group relative flex flex-col bg-white dark:bg-zinc-900 border-t-2 border-t-transparent hover:border-t-[#46A358] border-b border-zinc-100 dark:border-zinc-800 rounded-xl p-4 transition-colors duration-300"
    >
      <Link
        to={`/shop/${product.id}`}
        className="w-full h-[250px] bg-[#fbfbfb] dark:bg-zinc-800/30 rounded-lg overflow-hidden flex items-center justify-center p-6 mb-4 relative block"
      >
        <motion.img 
          variants={{
            initial: { scale: 1 },
            hover: { scale: 1.04 }
          }}
          transition={{ duration: 0.4, ease: "easeOut" }}
          src={product.image} 
          alt={displayTitle} 
          className="max-h-full max-w-full object-contain select-none pointer-events-none"
        />

        {product.oldPrice && (
          <span className="absolute top-3 left-3 bg-[#46A358] text-white text-xs font-semibold px-2 py-1 rounded shadow-sm">
            {Math.round(((product.oldPrice - product.price) / product.oldPrice) * 100)}% OFF
          </span>
        )}

        <motion.div 
          variants={actionContainerVariants}
          className="absolute bottom-4 left-1/2 -translate-x-1/2 flex items-center gap-2.5 z-10"
        >
          <motion.button
            variants={actionBtnVariants}
            whileHover={{ scale: 1.1 }}
            whileTap={{ scale: 0.95 }}
            type="button"
            onClick={handleAddToCart} 
            className="w-9 h-9 bg-white dark:bg-zinc-800 text-zinc-700 dark:text-zinc-200 rounded-lg flex items-center justify-center shadow-md hover:bg-[#46A358] hover:text-white dark:hover:bg-[#46A358] transition-colors duration-200"
          >
            <ShoppingCart className="w-4 h-4" />
          </motion.button>

          <motion.button
            variants={actionBtnVariants}
            whileHover={{ scale: 1.1 }}
            whileTap={{ scale: 0.95 }}
            type="button"
            onClick={(e) => e.stopPropagation()}
            className="w-9 h-9 bg-white dark:bg-zinc-800 text-zinc-700 dark:text-zinc-200 rounded-lg flex items-center justify-center shadow-md hover:bg-[#46A358] hover:text-white dark:hover:bg-[#46A358] transition-colors duration-200"
          >
            <Heart className="w-4 h-4" />
          </motion.button>

          <motion.button
            variants={actionBtnVariants}
            whileHover={{ scale: 1.1 }}
            whileTap={{ scale: 0.95 }}
            type="button"
            onClick={(e) => e.stopPropagation()}
            className="w-9 h-9 bg-white dark:bg-zinc-800 text-zinc-700 dark:text-zinc-200 rounded-lg flex items-center justify-center shadow-md hover:bg-[#46A358] hover:text-white dark:hover:bg-[#46A358] transition-colors duration-200"
          >
            <Search className="w-4 h-4" />
          </motion.button>
        </motion.div>
      </Link>

      <Link to={`/shop/${product.id}`}>
        <h3 className="text-zinc-800 dark:text-zinc-200 text-base font-normal mb-1 truncate group-hover:text-[#46A358] transition-colors duration-200">
          {displayTitle}
        </h3>
      </Link>

      <div className="flex items-center gap-3">
        <span className="text-[#46A358] font-bold text-lg">${product.price.toFixed(2)}</span>
        {product.oldPrice && (
          <span className="text-zinc-400 line-through text-sm">${product.oldPrice.toFixed(2)}</span>
        )}
      </div>
    </motion.div>
  );
};