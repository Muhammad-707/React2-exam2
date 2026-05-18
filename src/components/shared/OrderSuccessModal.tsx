import React from 'react';
import { useTranslation } from 'react-i18next';
import i1 from "@/assets/thank-you 1.png";

interface OrderSuccessModalProps {
    isOpen: boolean;
    onClose: () => void;
    orderNumber: string;
    date: string;
    total: number;
    paymentMethod: string;
    items: any[];
    shippingCost: number;
    subtotal: number;
}

export const OrderSuccessModal: React.FC<OrderSuccessModalProps> = ({
    isOpen,
    onClose,
    orderNumber,
    date,
    total,
    paymentMethod,
    items,
    shippingCost,
    subtotal
}) => {
    const { i18n } = useTranslation();

    if (!isOpen) return null;

    const getPaymentLabel = (method: string) => {
        if (method === 'cards') return "Credit Card / PayPal"; 
        if (method === 'bank') return "Direct Bank Transfer";
        return "Cash on Delivery";
    };

    return (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/40 backdrop-blur-[2px]">
            <div className="absolute inset-0" onClick={onClose} />
            <div className="relative w-full max-w-[470px] bg-white dark:bg-zinc-950 rounded-none border-b-[10px] border-[#46A358] shadow-xl flex flex-col max-h-[95vh] z-10 text-[#3D3D3D] dark:text-zinc-300 font-sans">
                <button
                    onClick={onClose}
                    className="absolute top-4 right-4 text-[#46A358] hover:opacity-80 transition-opacity z-20">
                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={2} stroke="currentColor" className="w-5 h-5">
                        <path strokeLinecap="round" strokeLinejoin="round" d="M6 18L18 6M6 6l12 12" />
                    </svg>
                </button>
                <div className="overflow-y-auto overflow-x-hidden flex flex-col">
                    <div className="bg-[#46A358]/5 dark:bg-[#46A358]/10 py-7 flex flex-col items-center justify-center border-b border-[#EAEAEA] dark:border-zinc-800">
                        <div className="w-16 h-16 text-[#46A358] mb-2 flex items-center justify-center">
                            <img className='w-fit' src={i1} alt="" />
                        </div>
                        <p className="text-zinc-500 dark:text-zinc-400 text-sm font-normal">Your order has been received</p>
                    </div>
                    <div className="grid grid-cols-4 py-4 px-6 border-b border-[#EAEAEA] dark:border-zinc-800 text-xs">
                        <div className="flex flex-col gap-0.5 border-r border-[#EAEAEA] dark:border-zinc-800 pr-2">
                            <span className="text-zinc-400 font-normal">Order Number</span>
                            <span className="font-bold text-zinc-700 dark:text-zinc-300">{orderNumber}</span>
                        </div>
                        <div className="flex flex-col gap-0.5 border-r border-[#EAEAEA] dark:border-zinc-800 px-3">
                            <span className="text-zinc-400 font-normal">Date</span>
                            <span className="font-bold text-zinc-700 dark:text-zinc-300">{date}</span>
                        </div>
                        <div className="flex flex-col gap-0.5 border-r border-[#EAEAEA] dark:border-zinc-800 px-3">
                            <span className="text-zinc-400 font-normal">Total</span>
                            <span className="font-bold text-zinc-700 dark:text-zinc-300">${total.toFixed(2)}</span>
                        </div>
                        <div className="flex flex-col gap-0.5 pl-3">
                            <span className="text-zinc-400 font-normal">Payment Method</span>
                            <span className="font-bold text-zinc-700 dark:text-zinc-300 truncate">{getPaymentLabel(paymentMethod)}</span>
                        </div>
                    </div>
                    <div className="p-6 pb-2 flex flex-col gap-3">
                        <h4 className="text-[#3D3D3D] dark:text-zinc-100 font-bold text-base">Order Details</h4>
                        <div className="flex justify-between font-bold text-sm text-[#3D3D3D] dark:text-zinc-300 border-b border-[#EAEAEA] dark:border-zinc-800 pb-2">
                            <span>Products</span>
                            <div className="flex w-[180px] justify-between pr-4">
                                <span>Qty</span>
                                <span>Subtotal</span>
                            </div>
                        </div>
                        <div className="flex flex-col max-h-[220px] overflow-y-auto divide-y divide-[#EAEAEA]/50 dark:divide-zinc-900 pr-1">
                            {items.map((item: any) => {
                                const displayedTitle = i18n.language === 'ru' 
                                    ? (item.title_ru || item.titleRu || item.title || item.name) 
                                    : (item.title || item.name);

                                return (
                                    <div key={item.id} className="flex items-center justify-between py-2.5 first:pt-0">
                                        <div className="flex items-center gap-3">
                                            <div className="w-11 h-11 bg-[#FBFBFB] dark:bg-zinc-900 border border-zinc-100 dark:border-zinc-800 rounded-none p-1 flex items-center justify-center shrink-0">
                                                <img src={item.image} alt={displayedTitle} className="max-w-full max-h-full object-contain" />
                                            </div>
                                            <div className="flex flex-col gap-0.5">
                                                <span className="text-[#3D3D3D] dark:text-zinc-200 font-medium text-sm tracking-tight">{displayedTitle}</span>
                                                <span className="text-[11px] text-zinc-400 font-normal">SKU: <span className="text-zinc-500">{item.sku}</span></span>
                                            </div>
                                        </div>
                                        <div className="flex w-[180px] items-center justify-between pr-4 shrink-0 text-sm">
                                            <span className="text-zinc-500 font-normal">(x {item.quantity})</span>
                                            <span className="text-[#46A358] font-bold text-right">${(item.price * item.quantity).toFixed(2)}</span>
                                        </div>
                                    </div>
                                );
                            })}
                        </div>
                    </div>
                    <div className="px-6 flex flex-col gap-3 text-sm text-[#3D3D3D] dark:text-zinc-300">
                        <div className="flex items-center justify-between border-t border-[#EAEAEA] dark:border-zinc-800 pt-3">
                            <span className="font-normal text-zinc-500">Shipping</span>
                            <span className="font-bold text-[#3D3D3D] dark:text-zinc-100">${shippingCost.toFixed(2)}</span>
                        </div>
                        <div className="flex items-center justify-between border-t border-[#EAEAEA] dark:border-zinc-800 pt-3 pb-4">
                            <span className="font-bold text-base text-[#3D3D3D] dark:text-zinc-100">Total</span>
                            <span className="text-[#46A358] font-bold text-lg">${total.toFixed(2)}</span>
                        </div>
                    </div>
                    <div className="px-10 pb-6 border-b border-[#EAEAEA] dark:border-zinc-800">
                        <p className="text-center text-zinc-400 font-normal text-xs leading-relaxed">
                            Your order details are also sent to your email address.
                        </p>
                    </div>
                    <div className="p-6 flex justify-center">
                        <button
                            onClick={onClose}
                            className="bg-[#46A358] hover:bg-[#3b8a4a] text-white py-3 px-8 rounded-md font-bold text-sm transition-colors shadow-sm tracking-wide">
                            Track your order
                        </button>
                    </div>
                </div>
            </div>
        </div>
    );
};