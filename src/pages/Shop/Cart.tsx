import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { Link, useNavigate } from 'react-router-dom';
import { Trash2, Plus, Minus } from 'lucide-react';
import { incrementQuantity, decrementQuantity, removeFromCart } from '@/reducer/CartSlice';
import { Section4 } from '@/pages/Shop/Section4';
import { useTranslation } from 'react-i18next';
import { productNamesMapping } from '@/contacts/products';

import {
  AlertDialog,
  AlertDialogAction,
  AlertDialogCancel,
  AlertDialogContent,
  AlertDialogDescription,
  AlertDialogFooter,
  AlertDialogHeader,
  AlertDialogTitle,
  AlertDialogTrigger,
} from "@/components/ui/alert-dialog";

import { toast } from "sonner";

export const Cart: React.FC = () => {
    const dispatch = useDispatch();
    const navigate = useNavigate();
    const { t, i18n } = useTranslation();
    const { items, shippingCost } = useSelector((state: any) => state.cart);

    const isRu = i18n.language === 'ru';

    const subtotal = items.reduce((sum: number, item: any) => sum + (item.price * item.quantity), 0);
    const total = subtotal + (items.length > 0 ? shippingCost : 0);

    const handleDelete = (id: number, currentTitle: string) => {
        const productNameKey = productNamesMapping[currentTitle] || currentTitle;
        dispatch(removeFromCart(id));
        toast.success(`Product "${t(productNameKey)}" successfully deleted!`);
    };

    return (
        <>
            <div className="max-w-[1300px] mx-auto px-4 sm:px-6 py-10 bg-white dark:bg-zinc-950 transition-colors">
                <div className="text-sm text-zinc-500 dark:text-zinc-400 mb-8 font-medium">
                    <Link to="/" className="hover:text-[#46A358] font-bold text-zinc-800 dark:text-zinc-200">{t("text143")}</Link> /{' '}
                    <Link to="/shop" className="hover:text-[#46A358]">{t("text144")}</Link> /{' '}
                    <span className="text-zinc-400">{t("text145")}</span>
                </div>

                {items.length === 0 ? (
                    <div className="w-full py-16 text-center">
                        <h2 className="text-2xl font-bold text-zinc-700 dark:text-zinc-300 mb-4">{t("text146")}</h2>
                        <Link to="/shop" className="inline-block bg-[#46A358] text-white px-6 py-3 rounded-lg font-bold hover:bg-[#3b8a4a] transition-colors">
                            {t("text147")}
                        </Link>
                    </div>
                ) : (
                    <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 items-start">
                        <div className="lg:col-span-2 overflow-x-auto">
                            <table className="w-full text-left border-collapse">
                                <thead>
                                    <tr className="border-b border-zinc-100 dark:border-zinc-800 text-zinc-700 dark:text-zinc-300 text-sm font-medium pb-4">
                                        <th className="pb-4 font-semibold">{t("text148")}</th>
                                        <th className="pb-4 font-semibold">{t("text149")}</th>
                                        <th className="pb-4 font-semibold">{t("text150")}</th>
                                        <th className="pb-4 font-semibold">{t("text151")}</th>
                                        <th className="pb-4"></th>
                                    </tr>
                                </thead>
                                <tbody className="divide-y divide-zinc-50 dark:divide-zinc-900">
                                    {items.map((item: any) => {
                                        const itemTitle = isRu && item.titleRu ? item.titleRu : item.title;
                                        const productNameKey = productNamesMapping[itemTitle] || itemTitle;
                                        
                                        return (
                                            <tr key={item.id} className="align-middle">
                                                <td className="py-5 flex items-center gap-4 min-w-[220px]">
                                                    <div className="w-16 h-16 bg-[#FBFBFB] dark:bg-zinc-900 border border-zinc-100 dark:border-zinc-800 rounded-lg p-2 flex items-center justify-center overflow-hidden">
                                                        <img src={item.image} alt={t(productNameKey)} className="max-w-full max-h-full object-contain" />
                                                    </div>
                                                    <div className="flex flex-col">
                                                        <span className="text-zinc-800 dark:text-zinc-200 font-semibold text-base tracking-tight">{t(productNameKey)}</span>
                                                        <span className="text-xs text-zinc-400 dark:text-zinc-500 mt-0.5">SKU: <span className="text-zinc-500 font-medium">{item.sku}</span></span>
                                                    </div>
                                                </td>
                                                <td className="py-5 text-zinc-500 dark:text-zinc-400 font-medium text-base">
                                                    ${item.price.toFixed(2)}
                                                </td>
                                                <td className="py-5">
                                                    <div className="flex items-center gap-3.5">
                                                        <button
                                                            type="button"
                                                            onClick={() => dispatch(decrementQuantity(item.id))}
                                                            className="w-7 h-7 rounded-full bg-[#46A358] text-white flex items-center justify-center hover:bg-[#3b8a4a] transition-colors shadow-sm"
                                                        >
                                                            <Minus className="w-3.5 h-3.5 stroke-[2.5]" />
                                                        </button>
                                                        <span className="text-zinc-800 dark:text-zinc-200 font-bold text-base min-w-[14px] text-center">
                                                            {item.quantity}
                                                        </span>
                                                        <button
                                                            type="button"
                                                            onClick={() => dispatch(incrementQuantity(item.id))}
                                                            className="w-7 h-7 rounded-full bg-[#46A358] text-white flex items-center justify-center hover:bg-[#3b8a4a] transition-colors shadow-sm"
                                                        >
                                                            <Plus className="w-3.5 h-3.5 stroke-[2.5]" />
                                                        </button>
                                                    </div>
                                                </td>
                                                <td className="py-5 text-[#46A358] font-bold text-base">
                                                    ${(item.price * item.quantity).toFixed(2)}
                                                </td>
                                                <td className="py-5 text-right">
                                                    <AlertDialog>
                                                        <AlertDialogTrigger asChild>
                                                            <button type="button" className="text-zinc-400 hover:text-red-500 transition-colors p-1">
                                                                <Trash2 className="w-5 h-5 stroke-[1.8]" />
                                                            </button>
                                                        </AlertDialogTrigger>
                                                        <AlertDialogContent className="bg-white dark:bg-zinc-900 border dark:border-zinc-800">
                                                            <AlertDialogHeader>
                                                                <AlertDialogTitle className="text-zinc-900 dark:text-zinc-100 font-bold">{t("text152")}</AlertDialogTitle>
                                                                <AlertDialogDescription className="text-zinc-500 dark:text-zinc-400 text-sm">
                                                                    {t("text153")} <span className="font-semibold text-zinc-800 dark:text-zinc-200">"{t(productNameKey)}"</span> {t("text154")}
                                                                </AlertDialogDescription>
                                                            </AlertDialogHeader>
                                                            <AlertDialogFooter>
                                                                <AlertDialogCancel className="border-zinc-200 dark:border-zinc-700 text-zinc-700 dark:text-zinc-300 hover:bg-zinc-50 dark:hover:bg-zinc-800 font-semibold rounded-md">Cancel</AlertDialogCancel>
                                                                <AlertDialogAction onClick={() => handleDelete(item.id, itemTitle)} className="bg-red-500 hover:bg-red-600 text-white font-semibold rounded-md transition-colors">Delete</AlertDialogAction>
                                                            </AlertDialogFooter>
                                                        </AlertDialogContent>
                                                    </AlertDialog>
                                                </td>
                                            </tr>
                                        );
                                    })}
                                </tbody>
                            </table>
                        </div>

                        <div className="w-full bg-white dark:bg-zinc-900 border border-transparent dark:border-zinc-800 p-6 rounded-xl">
                            <h3 className="text-zinc-800 dark:text-zinc-200 font-bold text-lg border-b border-zinc-100 dark:border-zinc-800 pb-3 mb-6">{t("text155")}</h3>
                            <div className="flex flex-col gap-2 mb-8">
                                <span className="text-sm text-zinc-600 dark:text-zinc-400 font-medium">{t("text156")}</span>
                                <div className="flex items-center border border-[#46A358] dark:border-zinc-700 rounded-md overflow-hidden bg-white dark:bg-zinc-950">
                                    <input type="text" placeholder={t("text157")} className="w-full px-3 py-2.5 text-sm bg-transparent border-none outline-none text-zinc-800 dark:text-zinc-200" />
                                    <button type="button" className="bg-[#46A358] hover:bg-[#3b8a4a] text-white px-5 py-2.5 text-sm font-bold transition-colors shrink-0">{t("text158")}</button>
                                </div>
                            </div>

                            <div className="flex flex-col gap-4 mb-6">
                                <div className="flex items-center justify-between text-sm">
                                    <span className="text-zinc-600 dark:text-zinc-400 font-medium">{t("text159")}</span>
                                    <span className="text-zinc-800 dark:text-zinc-200 font-bold text-base">${subtotal.toFixed(2)}</span>
                                </div>
                                <div className="flex items-center justify-between text-sm">
                                    <span className="text-zinc-600 dark:text-zinc-400 font-medium">{t("text160")}</span>
                                    <span className="text-zinc-800 dark:text-zinc-200 font-medium text-sm">(-) 00.00</span>
                                </div>
                                <div className="flex flex-col gap-0.5">
                                    <div className="flex items-center justify-between text-sm">
                                        <span className="text-zinc-600 dark:text-zinc-400 font-medium">{t("text161")}</span>
                                        <span className="text-zinc-800 dark:text-zinc-200 font-bold text-base">${shippingCost.toFixed(2)}</span>
                                    </div>
                                    <button type="button" className="text-right text-[11px] text-[#46A358] font-semibold hover:underline block">{t("text162")}</button>
                                </div>
                            </div>

                            <div className="flex items-center justify-between border-t border-zinc-100 dark:border-zinc-800/80 pt-4 mb-6">
                                <span className="text-zinc-800 dark:text-zinc-200 font-bold text-base">{t("text163")}</span>
                                <span className="text-[#46A358] font-black text-xl">${total.toFixed(2)}</span>
                            </div>

                            <div className="flex flex-col gap-3 text-center">
                                <button
                                    type="button"
                                    onClick={() => navigate('/checkout')}
                                    className="w-full bg-[#46A358] hover:bg-[#3b8a4a] text-white py-3.5 rounded-md font-bold text-base transition-colors shadow-sm"
                                >
                                    {t("text164")}
                                </button>
                                <Link to="/shop" className="text-[#46A358] font-semibold text-sm hover:underline block mt-1">{t("text165")}</Link>
                            </div>
                        </div>
                    </div>
                )}
            </div>
            <div><Section4/></div>
        </>
    );
};