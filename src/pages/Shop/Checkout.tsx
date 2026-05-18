import React, { useState } from 'react';
import { useSelector } from 'react-redux';
import { Link } from 'react-router-dom';
import { useTranslation } from 'react-i18next';

import i7 from "@/assets/VISA-Logo-2006-768x432.png";
import i8 from "@/assets/002-american-express.webp";

import { OrderSuccessModal } from '@/components/shared/OrderSuccessModal';

export const Checkout: React.FC = () => {
    const { t, i18n } = useTranslation();
    const { items, shippingCost } = useSelector((state: any) => state.cart);
    const [paymentMethod, setPaymentMethod] = useState<string>('cash');

    const [isModalOpen, setIsModalOpen] = useState<boolean>(false);
    const [mockOrderNumber, setMockOrderNumber] = useState<string>('19586687');
    const [mockDate, setMockDate] = useState<string>('15 Sep, 2021');

    const subtotal = items.reduce((sum: number, item: any) => sum + (item.price * item.quantity), 0);
    const total = subtotal + (items.length > 0 ? shippingCost : 0);

    const handlePlaceOrder = (e: React.FormEvent) => {
        e.preventDefault(); 
        const generatedId = Math.floor(10000000 + Math.random() * 90000000).toString();
        const currentDate = new Date().toLocaleDateString('en-US', {
            day: 'numeric',
            month: 'short',
            year: 'numeric'
        });

        setMockOrderNumber(generatedId);
        setMockDate(currentDate);
        setIsModalOpen(true);
    };

    return (
        <div className="max-w-[1300px] mx-auto px-4 sm:px-6 py-10 bg-white dark:bg-zinc-950 transition-colors">
            <div className="text-sm text-zinc-500 dark:text-zinc-400 mb-10 font-medium">
                <Link to="/" className="hover:text-[#46A358] font-bold text-zinc-800 dark:text-zinc-200">Home</Link> /{' '}
                <Link to="/shop" className="hover:text-[#46A358]">Shop</Link> /{' '}
                <span className="text-zinc-400">Checkout</span>
            </div>
            <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-start">
                <div className="lg:col-span-7 flex flex-col gap-6">
                    <h2 className="text-zinc-800 dark:text-zinc-100 font-bold text-lg border-b border-zinc-100 dark:border-zinc-900 pb-3">
                        Billing Details
                    </h2>
                    <form onSubmit={handlePlaceOrder} className="grid grid-cols-1 sm:grid-cols-2 gap-6 text-sm">
                        <div className="flex flex-col gap-2">
                            <label className="text-zinc-700 dark:text-zinc-400 font-medium">First Name <span className="text-red-500">*</span></label>
                            <input type="text" className="w-full border border-zinc-200 dark:border-zinc-800 rounded-md px-4 py-2.5 bg-transparent outline-none focus:border-[#46A358] dark:focus:border-[#46A358] text-zinc-800 dark:text-zinc-200" />
                        </div>
                        <div className="flex flex-col gap-2">
                            <label className="text-zinc-700 dark:text-zinc-400 font-medium">Last Name <span className="text-red-500">*</span></label>
                            <input type="text" className="w-full border border-zinc-200 dark:border-zinc-800 rounded-md px-4 py-2.5 bg-transparent outline-none focus:border-[#46A358] dark:focus:border-[#46A358] text-zinc-800 dark:text-zinc-200" />
                        </div>
                        <div className="flex flex-col gap-2">
                            <label className="text-zinc-700 dark:text-zinc-400 font-medium">Country / Region <span className="text-red-500">*</span></label>
                            <select className="w-full border border-zinc-200 dark:border-zinc-800 rounded-md px-4 py-2.5 bg-transparent outline-none focus:border-[#46A358] text-zinc-500 dark:text-zinc-400">
                                <option value="">Select a country / region</option>
                                <option value="US">United States</option>
                                <option value="TJ">Tajikistan</option>
                                <option value="RU">Russia</option>
                            </select>
                        </div>
                        <div className="flex flex-col gap-2">
                            <label className="text-zinc-700 dark:text-zinc-400 font-medium">Town / City <span className="text-red-500">*</span></label>
                            <input type="text" className="w-full border border-zinc-200 dark:border-zinc-800 rounded-md px-4 py-2.5 bg-transparent outline-none focus:border-[#46A358] dark:focus:border-[#46A358] text-zinc-800 dark:text-zinc-200" />
                        </div>
                        <div className="flex flex-col gap-2">
                            <label className="text-zinc-700 dark:text-zinc-400 font-medium">Street Address <span className="text-red-500">*</span></label>
                            <input type="text" placeholder="House number and street name" className="w-full border border-zinc-200 dark:border-zinc-800 rounded-md px-4 py-2.5 bg-transparent outline-none focus:border-[#46A358] dark:focus:border-[#46A358] text-zinc-800 dark:text-zinc-200 placeholder-zinc-300 dark:placeholder-zinc-700" />
                        </div>
                        <div className="flex flex-col gap-2 justify-end">
                            <input type="text" placeholder="Appartment, suite, unit, etc. (optional)" className="w-full border border-zinc-200 dark:border-zinc-800 rounded-md px-4 py-2.5 bg-transparent outline-none focus:border-[#46A358] dark:focus:border-[#46A358] text-zinc-800 dark:text-zinc-200 placeholder-zinc-300 dark:placeholder-zinc-700" />
                        </div>
                        <div className="flex flex-col gap-2">
                            <label className="text-zinc-700 dark:text-zinc-400 font-medium">State <span className="text-red-500">*</span></label>
                            <select className="w-full border border-zinc-200 dark:border-zinc-800 rounded-md px-4 py-2.5 bg-transparent outline-none focus:border-[#46A358] text-zinc-500 dark:text-zinc-400">
                                <option value="">Select a state</option>
                            </select>
                        </div>
                        <div className="flex flex-col gap-2">
                            <label className="text-zinc-700 dark:text-zinc-400 font-medium">Zip <span className="text-red-500">*</span></label>
                            <input type="text" className="w-full border border-zinc-200 dark:border-zinc-800 rounded-md px-4 py-2.5 bg-transparent outline-none focus:border-[#46A358] dark:focus:border-[#46A358] text-zinc-800 dark:text-zinc-200" />
                        </div>
                        <div className="flex flex-col gap-2">
                            <label className="text-zinc-700 dark:text-zinc-400 font-medium">Email Address <span className="text-red-500">*</span></label>
                            <input type="email" className="w-full border border-zinc-200 dark:border-zinc-800 rounded-md px-4 py-2.5 bg-transparent outline-none focus:border-[#46A358] dark:focus:border-[#46A358] text-zinc-800 dark:text-zinc-200" />
                        </div>
                        <div className="flex flex-col gap-2">
                            <label className="text-zinc-700 dark:text-zinc-400 font-medium">Phone Number <span className="text-red-500">*</span></label>
                            <div className="flex gap-2">
                                <select className="border border-zinc-200 dark:border-zinc-800 rounded-md px-2 py-2.5 bg-transparent outline-none text-zinc-700 dark:text-zinc-300">
                                    <option>+966</option>
                                    <option>+992</option>
                                    <option>+7</option>
                                </select>
                                <input type="tel" className="w-full border border-zinc-200 dark:border-zinc-800 rounded-md px-4 py-2.5 bg-transparent outline-none focus:border-[#46A358] dark:focus:border-[#46A358] text-zinc-800 dark:text-zinc-200" />
                            </div>
                        </div>
                        <div className="sm:col-span-2 flex items-center gap-2 mt-2">
                            <input type="checkbox" id="different-address" className="w-4 h-4 accent-[#46A358]" />
                            <label htmlFor="different-address" className="text-zinc-700 dark:text-zinc-300 font-medium select-none cursor-pointer">Ship to a different address?</label>
                        </div>

                        <div className="sm:col-span-2 flex flex-col gap-2 mt-4">
                            <label className="text-zinc-700 dark:text-zinc-400 font-medium">Order notes (optional)</label>
                            <textarea rows={4} className="w-full border border-zinc-200 dark:border-zinc-800 rounded-md px-4 py-3 bg-transparent outline-none focus:border-[#46A358] dark:focus:border-[#46A358] text-zinc-800 dark:text-zinc-200 resize-none" />
                        </div>
                        <button type="submit" id="checkout-submit-btn" className="hidden" />
                    </form>
                </div>
                <div className="lg:col-span-5 flex flex-col gap-6">
                    <h2 className="text-zinc-800 dark:text-zinc-100 font-bold text-lg border-b border-zinc-100 dark:border-zinc-900 pb-3">
                        Your Order
                    </h2>
                    <div className="flex justify-between text-sm font-semibold text-zinc-700 dark:text-zinc-300 pb-2 border-b border-zinc-100 dark:border-zinc-900">
                        <span>Products</span>
                        <span>Subtotal</span>
                    </div>
                    <div className="flex flex-col gap-4 max-h-[320px] overflow-y-auto pr-2 divide-y divide-zinc-50 dark:divide-zinc-900">
                        {items.map((item: any) => {
                            const displayedTitle = i18n.language === 'ru' 
                                ? (item.titleRu || item.title || item.name) 
                                : (item.title || item.name);

                            return (
                                <div key={item.id} className="flex items-center justify-between pt-4 first:pt-0 gap-4">
                                    <div className="flex items-center gap-3">
                                        <div className="w-16 h-16 bg-[#FBFBFB] dark:bg-zinc-900 border border-zinc-100 dark:border-zinc-800 rounded-lg p-2 flex items-center justify-center overflow-hidden shrink-0">
                                            <img src={item.image} alt={displayedTitle} className="max-w-full max-h-full object-contain" />
                                        </div>
                                        <div className="flex flex-col">
                                            <span className="text-zinc-800 dark:text-zinc-200 font-bold text-sm tracking-tight">{displayedTitle}</span>
                                            <span className="text-xs text-zinc-400 mt-0.5">SKU: <span className="text-zinc-500">{item.sku}</span></span>
                                        </div>
                                        <span className="text-xs text-zinc-400 font-medium ml-2 shrink-0">(x {item.quantity})</span>
                                    </div>
                                    <span className="text-[#46A358] font-bold text-base shrink-0">${(item.price * item.quantity).toFixed(2)}</span>
                                </div>
                            );
                        })}
                    </div>
                    <div className="text-right text-xs text-zinc-700 dark:text-zinc-400 font-medium mt-2">
                        Have a coupon code? <span className="text-[#46A358] hover:underline cursor-pointer font-bold">Click here</span>
                    </div>
                    <div className="flex flex-col gap-4 border-t border-zinc-100 dark:border-zinc-900 pt-4 text-sm font-medium">
                        <div className="flex items-center justify-between">
                            <span className="text-zinc-600 dark:text-zinc-400">Subtotal</span>
                            <span className="text-zinc-800 dark:text-zinc-200 font-bold text-base">${subtotal.toFixed(2)}</span>
                        </div>
                        <div className="flex items-center justify-between">
                            <span className="text-zinc-600 dark:text-zinc-400">Coupon Discount</span>
                            <span className="text-zinc-800 dark:text-zinc-200">(-) 00.00</span>
                        </div>
                        <div className="flex flex-col gap-0.5">
                            <div className="flex items-center justify-between">
                                <span className="text-zinc-600 dark:text-zinc-400">Shipping</span>
                                <span className="text-zinc-800 dark:text-zinc-200 font-bold">${shippingCost.toFixed(2)}</span>
                            </div>
                            <span className="text-right text-[10px] text-[#46A358] font-bold cursor-pointer hover:underline">View shipping charge</span>
                        </div>
                        <div className="flex items-center justify-between border-t border-zinc-100 dark:border-zinc-900 pt-4">
                            <span className="text-zinc-800 dark:text-zinc-200 font-bold text-base">Total</span>
                            <span className="text-[#46A358] font-black text-lg">${total.toFixed(2)}</span>
                        </div>
                    </div>
                    <div className="flex flex-col gap-3 mt-4 text-sm font-semibold text-zinc-700 dark:text-zinc-300">
                        <h4 className="font-bold text-zinc-800 dark:text-zinc-200 mb-1">Payment Method</h4>
                        <label className={`flex items-center justify-between border rounded-md px-3.5 py-1.5 cursor-pointer transition-all ${paymentMethod === 'cards' ? 'border-[#46A358] bg-green-50/10' : 'border-zinc-200 dark:border-zinc-800'}`}>
                            <div className="flex items-center gap-2.5">
                                <input type="radio" name="payment" checked={paymentMethod === 'cards'} onChange={() => setPaymentMethod('cards')} className="accent-[#46A358] w-4 h-4" />
                                <div className="flex items-center gap-5 transition-all select-none">
                                    <div className="lg:w-15 w-15 flex items-center justify-center hover:scale-105 transition-transform cursor-pointer">
                                        <img src="https://upload.wikimedia.org/wikipedia/commons/b/b5/PayPal.svg" alt="PayPal" className="h-full w-full object-contain" />
                                    </div>
                                    <div className="lg:w-7 w-12 flex items-center justify-center hover:scale-105 transition-transform cursor-pointer">
                                        <img src="https://upload.wikimedia.org/wikipedia/commons/2/2a/Mastercard-logo.svg" alt="Mastercard" className="h-full w-full object-contain" />
                                    </div>
                                    <div className="lg:w-10 w-15 flex items-center justify-center hover:scale-105 transition-transform cursor-pointer">
                                        <img src={i7} alt="Visa" className="h-full w-full object-contain" />
                                    </div>
                                    <div className="lg:w-10 w-15 flex items-center justify-center hover:scale-105 transition-transform cursor-pointer">
                                        <img src={i8} alt="American Express" className="h-full w-full object-contain rounded-sm" />
                                    </div>
                                </div>
                            </div>
                        </label>
                        <label className={`flex items-center gap-2.5 border rounded-md p-3.5 cursor-pointer transition-all ${paymentMethod === 'bank' ? 'border-[#46A358] bg-green-50/10' : 'border-zinc-200 dark:border-zinc-800'}`}>
                            <input type="radio" name="payment" checked={paymentMethod === 'bank'} onChange={() => setPaymentMethod('bank')} className="accent-[#46A358] w-4 h-4" />
                            <span>Direct Bank Transfer</span>
                        </label>
                        <label className={`flex items-center gap-2.5 border rounded-md p-3.5 cursor-pointer transition-all ${paymentMethod === 'cash' ? 'border-[#46A358] bg-green-50/10' : 'border-zinc-200 dark:border-zinc-800'}`}>
                            <input type="radio" name="payment" checked={paymentMethod === 'cash'} onChange={() => setPaymentMethod('cash')} className="accent-[#46A358] w-4 h-4" />
                            <span>Cash on Delivery</span>
                        </label>
                    </div>
                    <button
                        type="button"
                        onClick={() => document.getElementById('checkout-submit-btn')?.click()}
                        className="w-full bg-[#46A358] hover:bg-[#3b8a4a] text-white py-3.5 rounded-md font-bold text-base transition-colors mt-4 shadow-sm"
                    >
                        Place Order
                    </button>
                </div>
            </div>
            <OrderSuccessModal
                isOpen={isModalOpen}
                onClose={() => setIsModalOpen(false)}
                orderNumber={mockOrderNumber}
                date={mockDate}
                total={total}
                paymentMethod={paymentMethod}
                items={items}
                shippingCost={shippingCost}
                subtotal={subtotal}
            />
        </div>
    );
};