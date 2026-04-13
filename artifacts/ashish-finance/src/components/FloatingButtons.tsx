import { useState, useEffect } from "react";
import { ChevronUp } from "lucide-react";
import { SiWhatsapp } from "react-icons/si";
import { cn } from "@/lib/utils";

export function FloatingButtons() {
  const [showScrollTop, setShowScrollTop] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setShowScrollTop(window.scrollY > 300);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  return (
    <div className="fixed z-50 pointer-events-none inset-0">
      {/* Scroll to Top */}
      <button
        onClick={scrollToTop}
        className={cn(
          "absolute bottom-6 left-6 p-3 rounded-full bg-primary text-[#0D1B2A] shadow-lg shadow-black/20 pointer-events-auto transition-all duration-300 hover:scale-110 hover:bg-[#E8C96D] z-50",
          showScrollTop ? "translate-y-0 opacity-100" : "translate-y-10 opacity-0 pointer-events-none"
        )}
        aria-label="Scroll to top"
      >
        <ChevronUp size={24} strokeWidth={3} />
      </button>

      {/* WhatsApp Floating */}
      <a
        href="https://wa.me/919876543210"
        target="_blank"
        rel="noopener noreferrer"
        className="absolute bottom-6 right-6 pointer-events-auto group z-50 flex items-center gap-3"
        aria-label="Chat on WhatsApp"
      >
        {/* Tooltip */}
        <div className="bg-white text-[#1A1A1A] text-sm font-semibold px-3 py-1.5 rounded-lg shadow-md opacity-0 group-hover:opacity-100 transition-opacity whitespace-nowrap translate-x-4 group-hover:translate-x-0 duration-300">
          Chat on WhatsApp
          <div className="absolute right-[-4px] top-1/2 -translate-y-1/2 border-y-4 border-l-4 border-y-transparent border-l-white w-0 h-0"></div>
        </div>
        
        {/* Button */}
        <div className="relative">
          <div className="absolute inset-0 bg-[#25D366] rounded-full animate-ping opacity-75"></div>
          <div className="relative bg-[#25D366] text-white p-4 rounded-full shadow-xl shadow-[#25D366]/30 transition-transform group-hover:scale-110">
            <SiWhatsapp size={32} />
          </div>
        </div>
      </a>
    </div>
  );
}
