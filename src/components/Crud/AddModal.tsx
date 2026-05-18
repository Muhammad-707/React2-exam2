import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import type { AppDispatch } from '@/store/store';
import { addProduct } from '@/reducer/UserSlice';
import { X } from 'lucide-react';

interface IModalProps {
  isOpen: boolean;
  onClose: () => void;
}

export const AddModal: React.FC<IModalProps> = ({ isOpen, onClose }) => {
  const dispatch = useDispatch<AppDispatch>();
  
  const [title, setTitle] = useState('');
  const [titleRu, setTitleRu] = useState('');
  const [description, setDescription] = useState('');
  const [descriptionRu, setDescriptionRu] = useState('');
  const [price, setPrice] = useState('');
  const [oldPrice, setOldPrice] = useState('');
  const [category, setCategory] = useState('House Plants');
  const [imgUrl, setImgUrl] = useState('');

  if (!isOpen) return null;

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!title || !price) return;

    dispatch(addProduct({
      title,
      titleRu,
      description,
      descriptionRu,
      category,
      size: "Medium",
      price: Number(price),
      oldPrice: oldPrice ? Number(oldPrice) : null,
      discount: oldPrice ? `${Math.round(((Number(oldPrice) - Number(price)) / Number(oldPrice)) * 100)}% OFF` : null,
      rating: 5.0,
      reviews: 0,
      sku: String(Math.floor(100000000000 + Math.random() * 900000000000)),
      tags: ["Indoor"],
      images: [imgUrl || "https://images.unsplash.com/photo-1592150621744-aca64f48394a?q=80&w=500"],
      stock: 10,
      featured: false,
      popular: false,
      createdAt: new Date().toISOString()
    }));

    setTitle('');
    setTitleRu('');
    setDescription('');
    setDescriptionRu('');
    setPrice('');
    setOldPrice('');
    setImgUrl('');
    onClose();
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/40 backdrop-blur-sm p-4">
      <div className="bg-white dark:bg-zinc-950 rounded-3xl max-w-md w-full p-6 relative border border-zinc-200 dark:border-zinc-800 max-h-[90vh] overflow-y-auto">
        <button type="button" onClick={onClose} className="absolute right-4 top-4 text-zinc-400 hover:text-zinc-600">
          <X className="w-5 h-5" />
        </button>
        <h2 className="text-xl font-bold mb-4">Add New Plant</h2>
        
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
            <select value={category} onChange={e => setCategory(e.target.value)} className="w-full p-2 rounded-xl border dark:border-zinc-800 bg-transparent text-sm outline-none">
              <option value="House Plants">House Plants</option>
              <option value="Potter Plants">Potter Plants</option>
              <option value="Succulents">Succulents</option>
            </select>
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
            <input type="text" value={imgUrl} onChange={e => setImgUrl(e.target.value)} className="w-full p-2 rounded-xl border dark:border-zinc-800 bg-transparent text-sm outline-none" placeholder="https://..." />
          </div>

          <button type="submit" className="bg-[#46A358] text-white font-bold py-2.5 rounded-xl mt-2 hover:bg-[#3b8b4c] transition-all">
            Save Plant
          </button>
        </form>
      </div>
    </div>
  );
};