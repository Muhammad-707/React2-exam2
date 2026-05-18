import { NavLink } from "react-router-dom";
import { Home, ShoppingBag, Heart, FileText } from "lucide-react";
import { useTranslation } from "react-i18next";

interface NavItem {
  path: string;
  key: string; 
  icon: React.ComponentType<{ className?: string }>;
}

const navItems: NavItem[] = [
  { path: "/", key: "text1", icon: Home },
  { path: "/Shop", key: "text2", icon: ShoppingBag },
  { path: "/PlantCare", key: "text3", icon: Heart },
  { path: "/Blog", key: "text4", icon: FileText },
];

interface NavlistProps {
  mobile?: boolean;
  closeMenu?: () => void;
}

export default function Navlist({ mobile, closeMenu }: NavlistProps) {
  const { t } = useTranslation();

  return (
    <nav className={`flex ${mobile ? "flex-col gap-2 w-full mt-6" : "flex-row gap-8 items-center h-full"}`}>
      {navItems.map((item) => {
        const Icon = item.icon;

        return (
          <NavLink
            key={item.path}
            to={item.path}
            onClick={closeMenu}
            className={({ isActive }) => `
              relative text-[16px] transition-all duration-200 flex items-center gap-3
                ${!mobile && isActive
                ? "text-[#3D3D3D] font-bold dark:text-white after:absolute after:bottom-[-26px] after:left-0 after:w-full after:h-[3px] after:bg-[#46A358]"
                : !mobile ? "text-[#3D3D3D]/70 font-normal hover:text-[#46A358] dark:text-gray-400 dark:hover:text-[#46A358]" : ""}

              ${mobile
                ? `w-full px-4 py-3.5 rounded-xl border transition-all
                   ${isActive
                  ? "bg-[#46A358]/10 border-[#46A358]/20 text-[#46A358] font-bold dark:bg-[#46A358]/20"
                  : "bg-transparent border-transparent text-[#3D3D3D] hover:bg-gray-50 dark:text-gray-300 dark:hover:bg-zinc-900"}`
                : ""}
            `}>
            {mobile && <Icon className="w-5 h-5 opacity-80" />}
            <span>{t(item.key)}</span>
          </NavLink>
        );
      })}
    </nav>
  );
}