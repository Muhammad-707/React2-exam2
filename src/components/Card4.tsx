import React from 'react';

interface Card4Props {
  id: number;
  name: string;
  price: number;
  image: string;
  onClick: () => void;
}

export const Card4: React.FC<Card4Props> = ({ name, price, image, onClick }) => {
  return (
    <div 
      onClick={onClick}
      className="group cursor-pointer flex flex-col bg-white dark:bg-zinc-900 border border-transparent hover:border-zinc-100 dark:hover:border-zinc-800 p-2 rounded-xl transition-all duration-300">
      <div className="w-full aspect-square bg-[#FBFBFB] dark:bg-zinc-950 border border-zinc-50 dark:border-zinc-900 rounded-lg p-4 flex items-center justify-center overflow-hidden mb-3 relative">
        <img 
          src={image} 
          alt={name}
          className="max-w-full max-h-full object-contain transform group-hover:scale-105 transition-transform duration-300 drop-shadow-md"
        />
      </div>
      <h3 className="text-zinc-700 dark:text-zinc-300 text-sm font-medium tracking-tight truncate group-hover:text-[#46A358] transition-colors mb-1">
        {name}
      </h3>
      <span className="text-[#46A358] text-base font-bold">
        ${price.toFixed(2)}
      </span>
    </div>
  );
};