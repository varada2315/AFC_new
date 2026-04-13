import { Link } from "wouter";
import { Shield } from "lucide-react";

export function Footer() {
  return (
    <footer className="mt-auto flex flex-col">
      {/* Disclaimer Bar */}
      <div className="bg-[#0D1B2A] border-t border-primary/20 py-4 px-4">
        <div className="container mx-auto flex flex-col md:flex-row items-center justify-between gap-4">
          <div className="flex items-center gap-3 text-sm text-gray-300">
            <Shield className="w-5 h-5 text-primary shrink-0" />
            <div>
              <p className="font-semibold text-white">IMPORTANT: INVESTMENT SUBJECT TO MARKET RISK.</p>
              <p className="text-xs opacity-80">SEBI REG NO: INH000012345 | BROKER CODE: ABC1234</p>
            </div>
          </div>
          <Link href="/contact" className="flex items-center group">
            <div className="bg-[#2E7D32] hover:bg-[#43A047] text-white px-6 py-2 rounded-l-full font-bold text-sm tracking-wider transition-colors">
              FREE CONSULTATION
            </div>
            <div className="bg-primary text-[#0D1B2A] px-4 py-2 rounded-r-full text-sm font-semibold transition-colors group-hover:bg-[#E8C96D]">
              साठी आजच संपर्क करा
            </div>
          </Link>
        </div>
      </div>

      {/* Copyright Bar */}
      <div className="bg-[#0A0A0A] py-4 text-center">
        <div className="container mx-auto flex flex-col md:flex-row items-center justify-between gap-4 text-xs text-white/50 px-4">
          <p>© {new Date().getFullYear()} Ashish Finance Services. All Rights Reserved.</p>
          <div className="flex gap-4">
            <Link href="/privacy-policy" className="hover:text-primary transition-colors">Privacy Policy</Link>
            <Link href="/terms" className="hover:text-primary transition-colors">Terms & Conditions</Link>
          </div>
        </div>
      </div>
    </footer>
  );
}
