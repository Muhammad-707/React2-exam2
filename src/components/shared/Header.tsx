import { Search, ShoppingCart, Menu, LogOut } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Sheet, SheetContent, SheetTrigger, SheetTitle } from "@/components/ui/sheet";
import Navlist from "./Navlist";
import { ModeToggle } from "./ModeToggle";
import { useState } from "react";
import { Link } from "react-router-dom";
import { useSelector } from "react-redux";
import { useTranslation } from 'react-i18next';
import { LoginModal } from "@/components/shared/Login";
import { RegisterModal } from "@/components/shared/Register";
import Translator from "./Translator";
import i1 from "@/assets/Vector (39).png";

export default function Header() {
    const { t } = useTranslation();
    const [isOpen, setIsOpen] = useState(false);
    const [isLoginOpen, setIsLoginOpen] = useState(false);
    const [isRegisterOpen, setIsRegisterOpen] = useState(false);
    const cartItems = useSelector((state: any) => state.cart?.items || []);
    const totalQuantity = cartItems.reduce((sum: number, item: any) => sum + item.quantity, 0);

    const handleSwitchToRegister = () => {
        setIsLoginOpen(false);
        setIsRegisterOpen(true);
    };

    const handleSwitchToLogin = () => {
        setIsRegisterOpen(false);
        setIsLoginOpen(true);
    };

    return (
        <header className="w-full border-b border-[#46A358]/20 bg-white dark:bg-zinc-950 dark:border-zinc-800 transition-colors sticky top-0 z-50">
            <div className="max-w-[1300px] mx-auto px-4 sm:px-6 h-20 flex items-center justify-between">
                <Link to="/" className="flex items-center gap-2 cursor-pointer shrink-0">
                    <img className="w-fit" src={i1} alt="" />
                    <span className="text-[19px] font-black tracking-wider text-[#46A358]">
                        GREENSHOP
                    </span>
                </Link>

                <div className="hidden md:flex h-full items-center">
                    <Navlist />
                </div>

                <div className="flex items-center gap-2 sm:gap-4">
                    <button className="p-2 text-[#3D3D3D] dark:text-gray-200 hover:text-[#46A358] dark:hover:text-[#46A358] transition-colors">
                        <Search className="w-5 h-5 stroke-[1.8]" />
                    </button>

                    <Link to="/cart" className="relative p-2 text-[#3D3D3D] dark:text-gray-200 hover:text-[#46A358] dark:hover:text-[#46A358] transition-colors mr-1 block">
                        <ShoppingCart className="w-5 h-5 stroke-[1.8]" />
                        {totalQuantity > 0 && (
                            <span className="absolute top-1 right-1 bg-[#46A358] text-white text-[9px] font-bold rounded-full w-4 h-4 flex items-center justify-center border border-white dark:border-zinc-950 animate-in fade-in zoom-in-50 duration-200">
                                {totalQuantity}
                            </span>
                        )}
                    </Link>
                    <ModeToggle />
                    <div className="hidden md:block">
                        <Translator />
                    </div>

                    <Button
                        onClick={() => setIsLoginOpen(true)}
                        className="hidden sm:flex bg-[#46A358] hover:bg-[#3b8a4a] text-white font-medium rounded-md px-5 py-4 gap-1.5 text-[15px] transition-colors shadow-sm h-9">
                        <LogOut className="w-4 h-4 scale-x-[-1]" />
                        {t("text5")}
                    </Button>

                    <div className="md:hidden flex items-center">
                        <Sheet open={isOpen} onOpenChange={setIsOpen}>
                            <SheetTrigger asChild>
                                <Button variant="ghost" size="icon" className="text-[#3D3D3D] dark:text-gray-200 hover:bg-gray-100 dark:hover:bg-zinc-900 rounded-xl">
                                    <Menu className="w-6 h-6" />
                                </Button>
                            </SheetTrigger>
                            <SheetContent side="right" className="w-[85vw] max-w-[360px] p-6 bg-white dark:bg-zinc-950 flex flex-col justify-between rounded-l-2xl border-l dark:border-zinc-800">
                                <div>
                                    <div className="flex items-center justify-between pb-4 border-b dark:border-zinc-900">
                                        <SheetTitle className="text-left text-[#46A358] font-black tracking-wider text-lg">
                                            GREENSHOP
                                        </SheetTitle>
                                    </div>
                                    <Navlist mobile closeMenu={() => setIsOpen(false)} />
                                </div>

                                <div className="pt-4 border-t dark:border-zinc-900 flex flex-col gap-3">
                                    <div className="flex justify-start w-full px-1">
                                        <Translator />
                                    </div>

                                    <Button
                                        onClick={() => {
                                            setIsOpen(false);
                                            setIsLoginOpen(true);
                                        }}
                                        className="w-full bg-[#46A358] hover:bg-[#3b8a4a] text-white font-medium py-6 rounded-xl gap-2 text-base shadow-sm">
                                        {t("text5a")}
                                    </Button>
                                    <p className="text-center text-xs text-gray-400 dark:text-zinc-500 font-medium mt-1">
                                        © {new Date().getFullYear()} {t("text5a")}
                                    </p>
                                </div>
                            </SheetContent>
                        </Sheet>
                    </div>
                </div>
            </div>

            <LoginModal
                isOpen={isLoginOpen}
                onClose={() => setIsLoginOpen(false)}
                onSwitchToRegister={handleSwitchToRegister}
            />
            <RegisterModal
                isOpen={isRegisterOpen}
                onClose={() => setIsRegisterOpen(false)}
                onSwitchToLogin={handleSwitchToLogin}
            />
        </header>
    );
}