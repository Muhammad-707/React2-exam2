import React from 'react';
import { useTranslation } from 'react-i18next';
import type { IProduct } from '@/reducer/UserSlice';
import { Edit2, Trash2, Eye, Heart } from 'lucide-react';

interface IItemProps {
  product: IProduct;
  isTable: boolean;
  onEdit: () => void;
  onDelete: () => void;
  onInfo: () => void;
}

export const UserItem: React.FC<IItemProps> = ({ product, isTable, onEdit, onDelete, onInfo }) => {
  const { i18n } = useTranslation();
  
  const isRu = i18n.language === 'ru';
  
  const currentTitle = isRu && product.titleRu ? product.titleRu : product.title;
  const currentCategory = product.category; 
  const mainImage = product.images?.[0] || "https://images.unsplash.com/photo-1592150621744-aca64f48394a?q=80&w=500";

  if (isTable) {
    return (
      <tr className="border-b border-zinc-100 dark:border-zinc-900 hover:bg-zinc-50/50 dark:hover:bg-zinc-900/30 transition-all">
        <td className="p-4">
          <img src={mainImage} alt="" className="w-10 h-10 object-contain rounded-lg" />
        </td>
        <td className="p-4 font-bold text-zinc-800 dark:text-zinc-200">{currentTitle}</td>
        <td className="p-4 text-sm font-medium text-zinc-500">{currentCategory}</td>
        <td className="p-4 font-extrabold text-[#46A358]">${product.price}</td>
        <td className="p-4">
          <div className="flex gap-2 justify-end">
            <button type="button" onClick={onInfo} className="p-2 bg-zinc-100 dark:bg-zinc-900 rounded-lg hover:text-blue-500">
              <Eye className="w-4 h-4" />
            </button>
            <button type="button" onClick={onEdit} className="p-2 bg-zinc-100 dark:bg-zinc-900 rounded-lg hover:text-amber-500">
              <Edit2 className="w-4 h-4" />
            </button>
            <button type="button" onClick={onDelete} className="p-2 bg-zinc-100 dark:bg-zinc-900 rounded-lg hover:text-red-500">
              <Trash2 className="w-4 h-4" />
            </button>
          </div>
        </td>
      </tr>
    );
  }

  return (
    <div className="bg-[#fbfbfb] dark:bg-zinc-900/30 border border-zinc-100 dark:border-zinc-800/60 rounded-3xl p-4 flex flex-col relative group transition-all duration-300 hover:shadow-md">
      <div className="w-full aspect-square bg-white dark:bg-zinc-900/40 rounded-2xl mb-4 flex items-center justify-center relative overflow-hidden">
        <img src={mainImage} alt={currentTitle} className="max-h-[85%] object-contain" />
        <button type="button" className="absolute top-3 right-3 p-2 bg-white dark:bg-zinc-950 rounded-full border border-zinc-100 dark:border-zinc-900 text-zinc-400 hover:text-red-500 shadow-sm">
          <Heart className="w-4 h-4" />
        </button>
        <div className="absolute inset-x-0 bottom-3 flex justify-center gap-2 opacity-0 group-hover:opacity-100 transition-all duration-300 translate-y-2 group-hover:translate-y-0">
          <button type="button" onClick={onInfo} className="p-2.5 bg-white dark:bg-zinc-950 border border-zinc-100 dark:border-zinc-900 rounded-xl hover:text-blue-500 shadow-md">
            <Eye className="w-4.5 h-4.5" />
          </button>
          <button type="button" onClick={onEdit} className="p-2.5 bg-white dark:bg-zinc-950 border border-zinc-100 dark:border-zinc-900 rounded-xl hover:text-amber-500 shadow-md">
            <Edit2 className="w-4.5 h-4.5" />
          </button>
          <button type="button" onClick={onDelete} className="p-2.5 bg-white dark:bg-zinc-950 border border-zinc-100 dark:border-zinc-900 rounded-xl hover:text-red-500 shadow-md">
            <Trash2 className="w-4.5 h-4.5" />
          </button>
        </div>
      </div>
      <h4 className="font-medium text-zinc-700 dark:text-zinc-300 text-sm md:text-base truncate">{currentTitle}</h4>
      <div className="flex items-center gap-2 mt-1">
        <span className="text-[#46A358] font-bold text-base">${product.price}</span>
        {product.oldPrice && <span className="text-zinc-400 line-through text-xs">${product.oldPrice}</span>}
      </div>
    </div>
  );
};