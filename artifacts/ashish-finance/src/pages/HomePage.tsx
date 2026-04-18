import { useEffect, useRef, useState } from "react";
import { motion, useInView } from "framer-motion";
import { Play, Camera, Users, Banknote } from "lucide-react";
import { SiWhatsapp, SiInstagram, SiFacebook } from "react-icons/si";
import { SectionTitle } from "@/components/SectionTitle";
import ashishHeroPath from "@assets/ashish-hero.png";
import growthPhotoPath from "@assets/growth-photo.png";
import visit1Path from "@assets/visit-1.png";
import visit2Path from "@assets/visit-2.png";
import visit3Path from "@assets/visit-3.png";

// Counter Animation Component
function AnimatedCounter({ end, prefix = "", suffix = "" }: { end: number, prefix?: string, suffix?: string }) {
  const [count, setCount] = useState(0);
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-50px" });

  useEffect(() => {
    if (isInView) {
      let startTimestamp: number | null = null;
      const duration = 2000; // 2 seconds
      const step = (timestamp: number) => {
        if (!startTimestamp) startTimestamp = timestamp;
        const progress = Math.min((timestamp - startTimestamp) / duration, 1);
        // easeOutQuart
        const easeProgress = 1 - Math.pow(1 - progress, 4);
        setCount(Math.floor(easeProgress * end));
        if (progress < 1) {
          window.requestAnimationFrame(step);
        }
      };
      window.requestAnimationFrame(step);
    }
  }, [isInView, end]);

  return <span ref={ref}>{prefix}{count}{suffix}</span>;
}

export default function HomePage() {
  return (
    <div className="flex flex-col w-full overflow-hidden">
      
      {/* Hero Section */}
      <section className="bg-[#0D1B2A] text-white pt-12 pb-20 px-4 md:px-8 lg:pt-20 lg:pb-32 relative">
        {/* Background glow effect */}
        <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-primary/10 rounded-full blur-[100px] pointer-events-none"></div>
        
        <div className="container mx-auto max-w-6xl">
          <div className="flex flex-col lg:flex-row items-center gap-12 lg:gap-8">
            
            {/* Left Col */}
            <motion.div 
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              className="flex-1 space-y-6 lg:max-w-[55%]"
            >
              <div className="inline-flex items-center gap-2 bg-[#2E7D32]/20 border border-[#2E7D32]/30 text-[#43A047] px-4 py-1.5 rounded-full text-xs font-bold tracking-widest mb-2">
                <div className="w-2 h-2 rounded-full bg-[#25D366] animate-pulse"></div>
                CONNECT ON WHATSAPP
              </div>
              
              <h1 className="text-4xl md:text-5xl lg:text-6xl font-serif font-bold leading-tight">
                MR. ASHISH VILAS URKUDE
              </h1>
              
              <h2 className="text-xl md:text-2xl font-bold uppercase tracking-wide text-primary">
                Stock Market Authorised Person
              </h2>
              
              <p className="text-lg md:text-xl text-gray-300 max-w-lg leading-relaxed">
                6+ YEAR EXPERIENCE IN STOCK MARKET. Guiding you towards financial freedom with proven strategies and personalized advice.
              </p>
              
              <div className="pt-4">
                <a 
                  href="https://wa.me/919876543210" 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-3 bg-[#2E7D32] hover:bg-[#43A047] text-white px-8 py-4 rounded-full font-bold text-sm tracking-wider transition-all duration-300 hover:shadow-lg hover:shadow-[#2E7D32]/30 hover:-translate-y-1"
                >
                  <SiWhatsapp size={24} />
                  CLICK HERE TO START INVESTMENT
                </a>
              </div>
            </motion.div>
            
            {/* Right Col */}
            <motion.div 
              initial={{ opacity: 0, scale: 0.95 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.8, delay: 0.2 }}
              className="flex-1 w-full lg:max-w-[45%] relative"
            >
              <div className="relative aspect-[3/4] max-w-md mx-auto rounded-2xl overflow-hidden border-2 border-primary/30 shadow-2xl shadow-black/50">
                <div className="absolute inset-0 bg-gradient-to-t from-[#0D1B2A] via-transparent to-transparent z-10"></div>
                <img 
                  src={ashishHeroPath} 
                  alt="Mr. Ashish Vilas Urkude" 
                  className="w-full h-full object-cover"
                />
                {/* Decorative Elements */}
                <div className="absolute top-4 left-4 border-l-2 border-t-2 border-primary w-12 h-12 z-20"></div>
                <div className="absolute bottom-4 right-4 border-r-2 border-b-2 border-primary w-12 h-12 z-20"></div>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Video Section */}
      <section className="py-20 px-4 bg-[#F5F5F0]">
        <div className="container mx-auto max-w-5xl">
          <SectionTitle title="MY INTRO VIDEO" icon={Play} />
          
          <motion.div 
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.6 }}
            className="relative w-full max-w-[750px] mx-auto aspect-video rounded-xl overflow-hidden shadow-2xl shadow-black/10 border-4 border-white bg-[#0D1B2A]"
          >
            <iframe 
              width="100%" 
              height="100%" 
              src="https://www.youtube.com/embed/dQw4w9WgXcQ?rel=0" 
              title="Introduction Video" 
              frameBorder="0" 
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" 
              allowFullScreen
              className="w-full h-full"
            ></iframe>
          </motion.div>
        </div>
      </section>

      {/* Introduction Section */}
      <section className="py-20 px-4 bg-white border-y border-gray-200">
        <div className="container mx-auto max-w-6xl">
          <SectionTitle title="INTRODUCTION / INFORMATION" icon={Users} />
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-12 items-center">
            
            {/* Col 1: Marathi Text */}
            <motion.div 
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              className="bg-[#F5F5F0] p-8 rounded-2xl border border-gray-200"
            >
              <p className="font-devanagari text-lg leading-relaxed text-[#1A1A1A]">
                <strong className="text-xl text-primary font-serif mb-2 block">Ashish Finance Services</strong> 
                मध्ये आपले स्वागत आहे. आम्ही तुम्हाला योग्य मार्गदर्शन करून तुमचे आर्थिक ध्येय पूर्ण करण्यात मदत करतो.
              </p>
            </motion.div>

            {/* Col 2: Services List */}
            <motion.div 
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="flex flex-col gap-6"
            >
              <div className="flex items-center gap-4 bg-white p-4 rounded-xl shadow-sm border border-gray-100 hover:border-primary/50 transition-colors">
                <div className="w-10 h-10 rounded-full bg-blue-100 flex items-center justify-center shrink-0">
                  <div className="w-4 h-4 rounded-full bg-blue-500"></div>
                </div>
                <span className="font-bold text-[#1A1A1A]">Mutual Fund Investment</span>
              </div>
              <div className="flex items-center gap-4 bg-white p-4 rounded-xl shadow-sm border border-gray-100 hover:border-primary/50 transition-colors">
                <div className="w-10 h-10 rounded-full bg-blue-100 flex items-center justify-center shrink-0">
                  <div className="w-4 h-4 rounded-full bg-blue-500"></div>
                </div>
                <span className="font-bold text-[#1A1A1A]">SIP Planning</span>
              </div>
              <div className="flex items-center gap-4 bg-white p-4 rounded-xl shadow-sm border border-gray-100 hover:border-primary/50 transition-colors">
                <div className="w-10 h-10 rounded-full bg-green-100 flex items-center justify-center shrink-0">
                  <div className="w-4 h-4 rounded-full bg-green-500"></div>
                </div>
                <span className="font-bold text-[#1A1A1A]">Stock Market Guidance</span>
              </div>
              <div className="flex items-center gap-4 bg-white p-4 rounded-xl shadow-sm border border-gray-100 hover:border-primary/50 transition-colors">
                <div className="w-10 h-10 rounded-full bg-purple-100 flex items-center justify-center shrink-0">
                  <div className="w-4 h-4 rounded-full bg-purple-500"></div>
                </div>
                <span className="font-bold text-[#1A1A1A]">Insurance Services</span>
              </div>
            </motion.div>

            {/* Col 3: Image */}
            <motion.div 
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              className="relative aspect-square rounded-2xl overflow-hidden border border-primary/30 p-2 bg-white"
            >
              <div className="w-full h-full rounded-xl overflow-hidden">
                <img src={growthPhotoPath} alt="Financial Growth" className="w-full h-full object-cover" />
              </div>
            </motion.div>

          </div>
        </div>
      </section>

      {/* Visiting / Stats Section */}
      <section className="py-20 px-4 bg-[#0D1B2A] text-white">
        <div className="container mx-auto max-w-6xl">
          <SectionTitle title="VISITING / PHOTO" icon={Camera} light />
          
          <div className="flex flex-col lg:flex-row gap-12 mt-12">
            
            {/* Left: Photos */}
            <div className="flex-[2] w-full overflow-hidden">
              {/* Desktop layout: standard CSS grid */}
              <div className="hidden md:grid grid-cols-3 gap-4">
                {[visit1Path, visit2Path, visit3Path].map((img, i) => (
                  <motion.div 
                    key={`desk-${i}`}
                    initial={{ opacity: 0, scale: 0.9 }}
                    whileInView={{ opacity: 1, scale: 1 }}
                    viewport={{ once: true }}
                    transition={{ delay: i * 0.15 }}
                    className="aspect-[3/4] relative rounded-xl overflow-hidden border border-white/10 hover:border-primary transition-colors duration-300 group"
                  >
                    <div className="absolute inset-0 bg-[#0D1B2A]/20 group-hover:bg-transparent transition-colors z-10"></div>
                    <img src={img} alt={`Office Visit ${i+1}`} className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700" />
                  </motion.div>
                ))}
              </div>

              {/* Mobile layout: auto-sliding carousel (infinite marquee) */}
              <div className="flex md:hidden w-full relative">
                <motion.div
                  className="flex"
                  animate={{ x: ["0%", "-50%"] }}
                  transition={{ 
                    ease: "linear", 
                    duration: 12, 
                    repeat: Infinity 
                  }}
                  style={{ width: "max-content" }}
                >
                  {/* Set 1 */}
                  <div className="flex gap-4 pr-4">
                    {[visit1Path, visit2Path, visit3Path].map((img, i) => (
                      <div 
                        key={`mob-1-${i}`}
                        className="w-[80vw] sm:w-[60vw] aspect-video relative rounded-xl overflow-hidden border border-white/10"
                      >
                        <div className="absolute inset-0 bg-[#0D1B2A]/10 z-10 pointer-events-none"></div>
                        <img src={img} alt={`Office Visit ${i+1}`} className="w-full h-full object-cover" />
                      </div>
                    ))}
                  </div>
                  {/* Set 2 (Duplicate for seamless loop) */}
                  <div className="flex gap-4 pr-4">
                    {[visit1Path, visit2Path, visit3Path].map((img, i) => (
                      <div 
                        key={`mob-2-${i}`}
                        className="w-[80vw] sm:w-[60vw] aspect-video relative rounded-xl overflow-hidden border border-white/10"
                      >
                        <div className="absolute inset-0 bg-[#0D1B2A]/10 z-10 pointer-events-none"></div>
                        <img src={img} alt={`Office Visit ${i+1}`} className="w-full h-full object-cover" />
                      </div>
                    ))}
                  </div>
                </motion.div>
              </div>
            </div>

            {/* Right: Stats */}
            <div className="flex-1 flex flex-col gap-6 justify-center">
              <motion.div 
                initial={{ opacity: 0, x: 20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                className="bg-white/5 border border-primary/30 p-8 rounded-2xl flex flex-col items-center text-center relative overflow-hidden"
              >
                <div className="absolute top-0 right-0 p-4 opacity-10">
                  <Users size={64} className="text-primary" />
                </div>
                <Users size={32} className="text-primary mb-4" />
                <div className="text-5xl font-serif font-bold text-primary mb-2">
                  <AnimatedCounter end={1000} suffix="+" />
                </div>
                <div className="text-sm tracking-widest uppercase font-bold text-white/80">Happy Customers</div>
              </motion.div>

              <motion.div 
                initial={{ opacity: 0, x: 20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ delay: 0.2 }}
                className="bg-white/5 border border-primary/30 p-8 rounded-2xl flex flex-col items-center text-center relative overflow-hidden"
              >
                <div className="absolute top-0 right-0 p-4 opacity-10">
                  <Banknote size={64} className="text-primary" />
                </div>
                <Banknote size={32} className="text-primary mb-4" />
                <div className="text-5xl font-serif font-bold text-primary mb-2">
                  <AnimatedCounter end={500} prefix="₹" suffix="+" />
                </div>
                <div className="text-sm tracking-widest uppercase font-bold text-white/80">SIP Investors</div>
              </motion.div>
            </div>

          </div>
        </div>
      </section>

      {/* Social Media & Contact Section */}
      <section className="py-20 px-4 bg-[#F5F5F0]">
        <div className="container mx-auto max-w-5xl">
          <div className="flex flex-col md:flex-row gap-12 md:gap-0">
            
            {/* Social Media */}
            <div className="flex-1 md:pr-12 md:border-r border-gray-300">
              <h3 className="text-center font-bold uppercase tracking-widest text-lg mb-8">SOCIAL MEDIA</h3>
              <div className="flex flex-col gap-4">
                <a href="https://www.instagram.com/ashishfinanceservices" target="_blank" rel="noreferrer" className="block group">
                  <div className="bg-white p-6 rounded-2xl border border-gray-200 shadow-sm flex items-center gap-6 transition-all duration-300 group-hover:-translate-y-1 group-hover:shadow-md">
                    <div className="w-16 h-16 rounded-2xl bg-gradient-to-tr from-[#FD1D1D] via-[#E1306C] to-[#833AB4] flex items-center justify-center text-white shrink-0 shadow-inner">
                      <SiInstagram size={32} />
                    </div>
                    <div>
                      <div className="font-bold text-lg text-[#1A1A1A] mb-1">INSTAGRAM</div>
                      <p className="text-sm text-[#555555]">Follow for daily investment tips</p>
                    </div>
                  </div>
                </a>
                
                <a href="https://www.facebook.com/ashishfinanceservices" target="_blank" rel="noreferrer" className="block group">
                  <div className="bg-white p-6 rounded-2xl border border-gray-200 shadow-sm flex items-center gap-6 transition-all duration-300 group-hover:-translate-y-1 group-hover:shadow-md">
                    <div className="w-16 h-16 rounded-2xl bg-[#1877F2] flex items-center justify-center text-white shrink-0 shadow-inner">
                      <SiFacebook size={32} />
                    </div>
                    <div>
                      <div className="font-bold text-lg text-[#1A1A1A] mb-1">FACEBOOK</div>
                      <p className="text-sm text-[#555555]">Follow for daily investment tips</p>
                    </div>
                  </div>
                </a>
              </div>
            </div>

            {/* Quick Contact Info */}
            <div className="flex-1 md:pl-12 flex flex-col justify-center">
              <h3 className="text-center md:text-left font-bold uppercase tracking-widest text-lg mb-8">CONTACT</h3>
              <div className="space-y-6">
                <div className="flex items-start gap-4">
                  <div className="w-10 h-10 rounded-full bg-primary/10 flex items-center justify-center text-primary shrink-0">
                    <span className="font-serif font-bold text-xl">📍</span>
                  </div>
                  <div>
                    <div className="font-bold text-[#1A1A1A]">Address</div>
                    <div className="text-[#555555]">Virar, Maharashtra, India</div>
                  </div>
                </div>
                <div className="flex items-start gap-4">
                  <div className="w-10 h-10 rounded-full bg-primary/10 flex items-center justify-center text-primary shrink-0">
                    <span className="font-serif font-bold text-xl">📞</span>
                  </div>
                  <div>
                    <div className="font-bold text-[#1A1A1A]">Phone</div>
                    <div className="text-[#555555]">+91 9876543210</div>
                  </div>
                </div>
                <div className="flex items-start gap-4">
                  <div className="w-10 h-10 rounded-full bg-primary/10 flex items-center justify-center text-primary shrink-0">
                    <span className="font-serif font-bold text-xl">✉️</span>
                  </div>
                  <div>
                    <div className="font-bold text-[#1A1A1A]">Email</div>
                    <div className="text-[#555555]">info@ashishfinanceservices.com</div>
                  </div>
                </div>
              </div>
            </div>
            
          </div>
        </div>
      </section>

    </div>
  );
}
