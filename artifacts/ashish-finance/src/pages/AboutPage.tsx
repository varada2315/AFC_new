import { motion } from "framer-motion";
import { Target, TrendingUp, ShieldCheck, BookOpen } from "lucide-react";


export default function AboutPage() {
  return (
    <div className="flex flex-col w-full">
      {/* Hero Banner */}
      <section className="bg-[#0D1B2A] text-white py-16 px-4">
        <div className="container mx-auto text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="inline-block"
          >
            <h1 className="text-4xl md:text-5xl font-serif font-bold mb-4">About Us</h1>
            <div className="h-1 w-24 bg-primary mx-auto rounded"></div>
            <h2 className="text-xl md:text-2xl font-devanagari mt-4 text-primary">आमच्याबद्दल</h2>
          </motion.div>
        </div>
      </section>

      {/* Brand Story */}
      <section className="py-20 px-4 bg-white">
        <div className="container mx-auto max-w-6xl">
          <div className="flex flex-col lg:flex-row gap-12 items-center">
            <motion.div 
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              className="flex-1 w-full"
            >
              <div className="relative rounded-2xl overflow-hidden shadow-xl aspect-square max-w-md mx-auto lg:mx-0">
                <img src="/asheieimage.jpg" alt="Mr. Ashish Vilas Urkude" className="w-full h-full object-cover" />
                <div className="absolute inset-0 ring-1 ring-inset ring-black/10 rounded-2xl pointer-events-none"></div>
              </div>
            </motion.div>

            <motion.div 
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              className="flex-1 space-y-6"
            >
              <h3 className="text-3xl font-bold uppercase tracking-wide text-[#0D1B2A]">Our Story</h3>
              <p className="text-lg text-gray-700 leading-relaxed">
                Ashish Finance Service was started with the aim of helping people understand and grow their money through smart investment strategies. With 6+ years of experience in the stock market, Mr. Ashish Vilas Urkude provides personalized financial guidance to help you achieve your goals.
              </p>
              <div className="p-6 bg-[#F5F5F0] rounded-xl border border-gray-200 mt-6">
                <p className="font-devanagari text-lg text-gray-800 leading-relaxed border-l-4 border-primary pl-4">
                  Ashish Finance Services ची सुरुवात लोकांना स्मार्ट गुंतवणूक धोरणांद्वारे पैसे समजण्यास आणि वाढवण्यास मदत करण्याच्या उद्देशाने झाली.
                </p>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Mission & Vision */}
      <section className="py-20 px-4 bg-[#F5F5F0]">
        <div className="container mx-auto max-w-5xl">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <motion.div 
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="bg-[#0D1B2A] border border-primary p-10 rounded-2xl text-center flex flex-col items-center gap-6"
            >
              <div className="w-16 h-16 rounded-full bg-primary/20 flex items-center justify-center">
                <Target size={32} className="text-primary" />
              </div>
              <h3 className="text-2xl font-bold text-white uppercase tracking-wider">Mission</h3>
              <p className="text-gray-300">
                Our mission is to provide simple and trusted financial guidance to help people grow their wealth.
              </p>
              <p className="font-devanagari text-primary mt-2">
                सोप्या आणि विश्वासार्ह मार्गदर्शनाद्वारे लोकांची संपत्ती वाढवणे हे आमचे ध्येय आहे.
              </p>
            </motion.div>

            <motion.div 
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.2 }}
              className="bg-[#0D1B2A] border border-primary p-10 rounded-2xl text-center flex flex-col items-center gap-6"
            >
              <div className="w-16 h-16 rounded-full bg-primary/20 flex items-center justify-center">
                <TrendingUp size={32} className="text-primary" />
              </div>
              <h3 className="text-2xl font-bold text-white uppercase tracking-wider">Vision</h3>
              <p className="text-gray-300">
                Our vision is to become a trusted name in financial services and help maximum people achieve financial freedom.
              </p>
              <p className="font-devanagari text-primary mt-2">
                आर्थिक सेवांमध्ये एक विश्वासार्ह नाव बनणे आणि जास्तीत जास्त लोकांना आर्थिक स्वातंत्र्य मिळवण्यास मदत करणे.
              </p>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Why Choose Us */}
      <section className="py-20 px-4 bg-white">
        <div className="container mx-auto max-w-6xl">
          <div className="text-center mb-16">
            <h2 className="text-3xl font-bold uppercase tracking-widest text-[#0D1B2A] mb-4">Why Choose Us</h2>
            <div className="w-16 h-1 bg-primary mx-auto rounded"></div>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {[
              { icon: Target, en: "Personalized Guidance", mr: "वैयक्तिक मार्गदर्शन" },
              { icon: TrendingUp, en: "Long-Term Wealth", mr: "दीर्घकालीन संपत्ती" },
              { icon: ShieldCheck, en: "Trusted & Transparent", mr: "विश्वासार्ह" },
              { icon: BookOpen, en: "Simple Strategies", mr: "सोपे धोरण" }
            ].map((feature, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.1 }}
                className="p-6 bg-[#F5F5F0] rounded-xl text-center hover:bg-[#0D1B2A] hover:text-white transition-colors duration-300 group"
              >
                <div className="w-14 h-14 mx-auto bg-white rounded-full flex items-center justify-center mb-6 group-hover:bg-primary/20 transition-colors">
                  <feature.icon size={28} className="text-primary" />
                </div>
                <h4 className="font-bold text-lg mb-2">{feature.en}</h4>
                <p className="font-devanagari text-gray-600 group-hover:text-gray-400">{feature.mr}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Credentials Strip */}
      <section className="bg-[#0D1B2A] py-10 px-4 border-t border-primary/20">
        <div className="container mx-auto">
          <div className="flex flex-wrap justify-center gap-8 md:gap-16 opacity-80 grayscale hover:grayscale-0 transition-all duration-500">
            <div className="bg-white/10 px-8 py-3 rounded-full text-white font-bold tracking-widest border border-white/20">
              NISM CERTIFIED
            </div>
            <div className="bg-white/10 px-8 py-3 rounded-full text-white font-bold tracking-widest border border-white/20">
              ANGEL ONE AUTHORISED PERSON
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
