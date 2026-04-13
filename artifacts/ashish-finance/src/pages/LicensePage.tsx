import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { FileText, X } from "lucide-react";

const licenses = [
  {
    id: 1,
    name: "NISM Series VIII — Equity Derivatives",
    nameMr: "NISM इक्विटी डेरिव्हेटिव्ह्ज",
    issuer: "NISM",
    certNo: "NISM-123456",
    valid: "Dec 2025"
  },
  {
    id: 2,
    name: "NISM Series V-A — Mutual Fund Distributors",
    nameMr: "NISM म्युच्युअल फंड वितरक",
    issuer: "NISM",
    certNo: "NISM-789012",
    valid: "Mar 2026"
  },
  {
    id: 3,
    name: "Angel One Authorised Person Certificate",
    nameMr: "एंजल वन अधिकृत व्यक्ती",
    issuer: "Angel One",
    certNo: "AP-456789",
    valid: "Dec 2025"
  },
  {
    id: 4,
    name: "SEBI Registration Certificate",
    nameMr: "SEBI नोंदणी प्रमाणपत्र",
    issuer: "SEBI",
    certNo: "INH000012345",
    valid: "Ongoing"
  }
];

export default function LicensePage() {
  const [selectedCert, setSelectedCert] = useState<number | null>(null);

  // Handle escape key to close lightbox
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === "Escape") setSelectedCert(null);
    };
    window.addEventListener("keydown", handleKeyDown);
    return () => window.removeEventListener("keydown", handleKeyDown);
  }, []);

  return (
    <div className="flex flex-col w-full bg-[#F5F5F0] min-h-screen">
      {/* Hero Banner */}
      <section className="bg-[#0D1B2A] text-white py-16 px-4">
        <div className="container mx-auto text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="inline-block"
          >
            <h1 className="text-4xl md:text-5xl font-serif font-bold mb-4">Licenses & Certifications</h1>
            <div className="h-1 w-24 bg-primary mx-auto rounded mb-4"></div>
            <h2 className="text-xl font-devanagari text-primary mb-2">परवाने आणि प्रमाणपत्रे</h2>
            <p className="text-gray-300 max-w-2xl mx-auto mt-4">
              Our credentials that make us a trusted financial advisor<br />
              <span className="font-devanagari text-sm">आमची विश्वासार्हता सिद्ध करणारी प्रमाणपत्रे</span>
            </p>
          </motion.div>
        </div>
      </section>

      {/* Licenses Grid */}
      <section className="py-20 px-4 flex-grow">
        <div className="container mx-auto max-w-5xl">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-12">
            {licenses.map((license, i) => (
              <motion.div
                key={license.id}
                initial={{ opacity: 0, scale: 0.95 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.1 }}
                className="bg-[#0D1B2A] border border-primary/30 rounded-2xl overflow-hidden shadow-lg relative group"
              >
                {/* Verified Badge */}
                <div className="absolute top-4 right-4 bg-[#2E7D32] text-white text-xs font-bold px-3 py-1 rounded-full tracking-wider z-10 shadow-sm">
                  VERIFIED ✓
                </div>

                {/* Placeholder Image Area */}
                <div className="h-48 bg-gradient-to-br from-[#1a2b42] to-[#0D1B2A] border-b border-primary/20 flex items-center justify-center relative overflow-hidden">
                  {/* Subtle pattern */}
                  <div className="absolute inset-0 opacity-5" style={{ backgroundImage: 'radial-gradient(#C9A84C 1px, transparent 1px)', backgroundSize: '20px 20px' }}></div>
                  <FileText size={64} className="text-primary/40" />
                  <div className="absolute inset-0 bg-black/40 opacity-0 group-hover:opacity-100 transition-opacity flex items-center justify-center backdrop-blur-sm">
                    <button 
                      onClick={() => setSelectedCert(license.id)}
                      className="bg-primary text-[#0D1B2A] font-bold px-6 py-2 rounded-full transform translate-y-4 group-hover:translate-y-0 transition-all duration-300"
                    >
                      View Certificate
                    </button>
                  </div>
                </div>

                {/* Details */}
                <div className="p-6">
                  <h3 className="text-xl font-bold text-white mb-1">{license.name}</h3>
                  <h4 className="font-devanagari text-primary mb-4 text-sm">{license.nameMr}</h4>
                  
                  <div className="space-y-2 text-sm">
                    <div className="flex justify-between border-b border-white/10 pb-2">
                      <span className="text-gray-400">Issuer</span>
                      <span className="text-white font-medium">{license.issuer}</span>
                    </div>
                    <div className="flex justify-between border-b border-white/10 pb-2">
                      <span className="text-gray-400">Certificate No</span>
                      <span className="text-white font-medium">{license.certNo}</span>
                    </div>
                    <div className="flex justify-between pb-2">
                      <span className="text-gray-400">Valid Until</span>
                      <span className="text-[#E8C96D] font-bold">{license.valid}</span>
                    </div>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>

          <div className="text-center italic text-gray-500 max-w-2xl mx-auto">
            <p>All licenses are regularly renewed and compliant with SEBI regulations.</p>
            <p className="font-devanagari text-sm mt-1">सर्व परवाने नियमितपणे नूतनीकरण केले जातात आणि SEBI नियमांचे पालन केले जाते.</p>
          </div>
        </div>
      </section>

      {/* Lightbox Modal */}
      <AnimatePresence>
        {selectedCert !== null && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-[100] bg-black/90 backdrop-blur-sm flex items-center justify-center p-4"
            onClick={() => setSelectedCert(null)}
          >
            <button 
              className="absolute top-6 right-6 text-white hover:text-primary transition-colors bg-white/10 rounded-full p-2"
              onClick={(e) => { e.stopPropagation(); setSelectedCert(null); }}
            >
              <X size={24} />
            </button>
            
            <motion.div 
              initial={{ scale: 0.9, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              exit={{ scale: 0.9, opacity: 0 }}
              onClick={(e) => e.stopPropagation()}
              className="w-full max-w-3xl aspect-[1.4/1] bg-[#0D1B2A] border-4 border-primary rounded-xl flex flex-col items-center justify-center p-8 text-center relative overflow-hidden shadow-2xl shadow-primary/20"
            >
              <div className="absolute inset-0 opacity-5" style={{ backgroundImage: 'radial-gradient(#C9A84C 1px, transparent 1px)', backgroundSize: '20px 20px' }}></div>
              <div className="border-2 border-primary/40 p-12 w-full h-full flex flex-col items-center justify-center bg-[#0D1B2A]/50 z-10">
                <FileText size={80} className="text-primary mb-6" />
                <h3 className="text-2xl font-serif text-white mb-2">
                  {licenses.find(l => l.id === selectedCert)?.name}
                </h3>
                <p className="text-primary font-mono tracking-widest">
                  {licenses.find(l => l.id === selectedCert)?.certNo}
                </p>
                <div className="mt-8 px-6 py-2 bg-green-900/30 text-green-400 border border-green-500/30 rounded font-bold tracking-widest text-sm">
                  VALID & VERIFIED
                </div>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}
