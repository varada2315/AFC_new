import { LucideIcon } from "lucide-react";
import { IconType } from "react-icons";

interface SectionTitleProps {
  title: string;
  icon?: LucideIcon | IconType;
  className?: string;
  light?: boolean;
}

export function SectionTitle({ title, icon: Icon, className = "", light = false }: SectionTitleProps) {
  return (
    <div className={`flex items-center justify-center gap-4 mb-8 ${className}`}>
      <div className={`h-[1px] w-12 md:w-24 ${light ? 'bg-white/20' : 'bg-primary/50'}`}></div>
      <div className={`flex items-center gap-2 px-4 py-2 rounded-full border ${light ? 'border-white/20 bg-white/5 text-white' : 'border-primary/20 bg-primary/5 text-primary'} uppercase tracking-widest text-sm font-bold shadow-sm`}>
        {Icon && <Icon className="w-4 h-4" />}
        <span>{title}</span>
      </div>
      <div className={`h-[1px] w-12 md:w-24 ${light ? 'bg-white/20' : 'bg-primary/50'}`}></div>
    </div>
  );
}
