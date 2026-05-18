import React, { useState, useEffect } from 'react';
import { useDispatch } from 'react-redux';
import type { AppDispatch } from '@/store/store';
import { editProduct } from '@/reducer/UserSlice';
import type { IProduct } from '@/reducer/UserSlice';
import { X } from 'lucide-react';

interface IEditProps {
  isOpen: boolean;
  onClose: () => void;
  product: IProduct | null;
}

export const EditModal: React.FC<IEditProps> = ({ isOpen, onClose, product }) => {
  const dispatch = useDispatch<AppDispatch>();

  const [title, setTitle] = useState('');
  const [titleRu, setTitleRu] = useState('');
  const [description, setDescription] = useState('');
  const [descriptionRu, setDescriptionRu] = useState('');
  const [price, setPrice] = useState('');
  const [oldPrice, setOldPrice] = useState('');
  const [category, setCategory] = useState('');
  const [imgUrl, setImgUrl] = useState('');

  useEffect(() => {
    if (product) {
      setTitle(product.title);
      setTitleRu(product.titleRu || '');
      setDescription(product.description || '');
      setDescriptionRu(product.descriptionRu || '');
      setPrice(String(product.price));
      setOldPrice(product.oldPrice ? String(product.oldPrice) : '');
      setCategory(product.category);
      setImgUrl(product.images?.[0] || '');
    }
  }, [product, isOpen]);

  if (!isOpen || !product) return null;

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();

    dispatch(editProduct({
      ...product,
      title,
      titleRu,
      description,
      descriptionRu,
      category,
      price: Number(price),
      oldPrice: oldPrice ? Number(oldPrice) : null,
      images: [imgUrl || product.images[0]],
    }));

    onClose();
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/40 backdrop-blur-sm p-4">
      <div className="bg-white dark:bg-zinc-950 rounded-3xl max-w-md w-full p-6 relative border border-zinc-200 dark:border-zinc-800 max-h-[90vh] overflow-y-auto">
        <button type="button" onClick={onClose} className="absolute right-4 top-4 text-zinc-400 hover:text-zinc-600">
          <X className="w-5 h-5" />
        </button>
        <h2 className="text-xl font-bold mb-4">Edit Plant</h2>

        <form onSubmit={handleSubmit} className="flex flex-col gap-4">
          <div className="grid grid-cols-2 gap-3">
            <div>
              <label className="text-xs font-bold text-zinc-400 block mb-1">Title (EN)</label>
              <input type="text" value={title} onChange={e => setTitle(e.target.value)} className="w-full p-2 rounded-xl border dark:border-zinc-800 bg-transparent text-sm outline-none" required />
            </div>
            <div>
              <label className="text-xs font-bold text-zinc-400 block mb-1">Название (RU)</label>
              <input type="text" value={titleRu} onChange={e => setTitleRu(e.target.value)} className="w-full p-2 rounded-xl border dark:border-zinc-800 bg-transparent text-sm outline-none" required />
            </div>
          </div>

          <div>
            <label className="text-xs font-bold text-zinc-400 block mb-1">Description (EN)</label>
            <textarea value={description} onChange={e => setDescription(e.target.value)} className="w-full p-2 rounded-xl border dark:border-zinc-800 bg-transparent text-sm outline-none h-16 resize-none" />
          </div>

          <div>
            <label className="text-xs font-bold text-zinc-400 block mb-1">Описание (RU)</label>
            <textarea value={descriptionRu} onChange={e => setDescriptionRu(e.target.value)} className="w-full p-2 rounded-xl border dark:border-zinc-800 bg-transparent text-sm outline-none h-16 resize-none" />
          </div>

          <div>
            <label className="text-xs font-bold text-zinc-400 block mb-1">Category</label>
            <input type="text" value={category} onChange={e => setCategory(e.target.value)} className="w-full p-2 rounded-xl border dark:border-zinc-800 bg-transparent text-sm outline-none" required />
          </div>

          <div className="grid grid-cols-2 gap-3">
            <div>
              <label className="text-xs font-bold text-zinc-400 block mb-1">Price ($)</label>
              <input type="number" value={price} onChange={e => setPrice(e.target.value)} className="w-full p-2 rounded-xl border dark:border-zinc-800 bg-transparent text-sm outline-none" required />
            </div>
            <div>
              <label className="text-xs font-bold text-zinc-400 block mb-1">Old Price ($)</label>
              <input type="number" value={oldPrice} onChange={e => setOldPrice(e.target.value)} className="w-full p-2 rounded-xl border dark:border-zinc-800 bg-transparent text-sm outline-none" />
            </div>
          </div>

          <div>
            <label className="text-xs font-bold text-zinc-400 block mb-1">Image URL</label>
            <input type="text" value={imgUrl} onChange={e => setImgUrl(e.target.value)} className="w-full p-2 rounded-xl border dark:border-zinc-800 bg-transparent text-sm outline-none" />
          </div>

          <button type="submit" className="bg-[#46A358] text-white font-bold py-2.5 rounded-xl mt-2 hover:bg-[#3b8b4c] transition-all">
            Update Plant
          </button>
        </form>
      </div>
    </div>
  );
};