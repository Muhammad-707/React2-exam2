import React from 'react';

export const Loading: React.FC = () => {
  return (
    <div className="flex justify-center items-center py-20 min-h-[400px]">
      <div className="animate-spin rounded-full h-8 w-8 border-b-2 border-[#46A358]"></div>
    </div>
  );
};