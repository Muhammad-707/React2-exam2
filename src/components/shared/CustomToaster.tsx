import React from "react";
import { Toaster as SonnerToaster } from "sonner";
import type { ToasterProps } from "sonner";

export const CustomToaster: React.FC<ToasterProps> = (props) => {
  return (
    <SonnerToaster
      position="top-center"
      hotkey={["alt", "T"]}
      expand={false}
      richColors
      toastOptions={{
        className: "group !w-auto !min-w-[400px] !max-w-max !whitespace-nowrap !bg-white dark:!bg-zinc-950 !border-l-4 !border-l-[#46A358] !border-y-zinc-200/50 !border-r-zinc-200/50 dark:!border-y-zinc-900 dark:!border-r-zinc-900 !text-zinc-800 dark:!text-zinc-100 !rounded-xl !px-6 !py-4 !shadow-[0_0_30px_5px_rgba(70,163,88,0.4)] !text-[15px] !font-bold !tracking-tight !flex !items-center !gap-3",
      }}
      {...props}
    />
  );
};