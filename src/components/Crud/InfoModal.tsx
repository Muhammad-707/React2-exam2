import React from 'react';
import { useTranslation } from 'react-i18next';
import type { IProduct } from '@/reducer/UserSlice';
import { X, Tag } from 'lucide-react';

interface IInfoProps { 
  isOpen: boolean; 
  onClose: () => void; 
  product: IProduct | null; 
}

export const InfoModal: React.FC<IInfoProps> = ({ isOpen, onClose, product }) => {
  const { i18n } = useTranslation();

  if (!isOpen || !product) return null;

  const isRu = i18n.language === 'ru';
  const displayedTitle = isRu && product.titleRu ? product.titleRu : product.title;
  const displayedDescription = isRu && product.descriptionRu ? product.descriptionRu : product.description;
  const productImage = product.images && product.images.length > 0 ? product.images[0] : 'https://via.placeholder.com/150';

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/40 backdrop-blur-sm">
      <div className="w-full max-w-sm bg-white dark:bg-zinc-950 border border-zinc-200 dark:border-zinc-900 rounded-2xl p-6 relative flex flex-col items-center text-center">
        <button type="button" onClick={onClose} className="absolute right-4 top-4 text-zinc-400 hover:text-zinc-600 dark:hover:text-zinc-200">
          <X className="w-5 h-5" />
        </button>
        
        <div className="w-40 h-40 bg-zinc-100 dark:bg-zinc-900 rounded-2xl mb-4 overflow-hidden flex items-center justify-center relative">
          <img src={productImage} alt={displayedTitle} className="max-h-[85%] object-contain" />
          {product.discount && (
            <span className="absolute top-2 left-2 bg-[#46A358] text-white text-xs font-bold px-2 py-0.5 rounded">
              {product.discount}% OFF
            </span>
          )}
        </div>
        
        <span className="text-xs font-bold text-[#46A358] bg-[#46A358]/10 px-3 py-1 rounded-full mb-2 flex items-center gap-1">
          <Tag className="w-3 h-3" />
          {product.category}
        </span>
        
        <h3 className="text-xl font-bold mb-1">{displayedTitle}</h3>
        
        <div className="flex gap-2 items-center justify-center mt-1">
          <span className="text-[#46A358] font-black text-lg">${product.price}</span>
          {product.oldPrice && <span className="text-zinc-400 line-through text-sm">${product.oldPrice}</span>}
        </div>

        {displayedDescription && (
          <p className="text-xs text-zinc-500 dark:text-zinc-400 mt-3 px-2 line-clamp-3">
            {displayedDescription}
          </p>
        )}
        
        <div className="w-full flex justify-between items-center text-[11px] text-zinc-400 mt-5 pt-3 border-t border-zinc-100 dark:border-zinc-900">
          <span>SKU: {product.sku || 'N/A'}</span>
          <span>ID: {product.id}</span>
        </div>
      </div>
    </div>
  );
};