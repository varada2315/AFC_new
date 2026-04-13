import { motion } from "framer-motion";
import { Link } from "wouter";
import { TrendingUp, Briefcase, RefreshCw, Landmark, PieChart, Calendar, GraduationCap } from "lucide-react";

const services = [
  {
    icon: TrendingUp,
    title: "Stock Market Investment Guidance",
    titleMr: "शेअर बाजार गुंतवणूक मार्गदर्शन",
    desc: "Expert advice for profitable stock investments"
  },
  {
    icon: Briefcase,
    title: "Mutual Fund Investment",
    titleMr: "म्युच्युअल फंड गुंतवणूक",
    desc: "Grow wealth with diversified mutual funds"
  },
  {
    icon: RefreshCw,
    title: "F&O Trading Support",
    titleMr: "F&O ट्रेडिंग सपोर्ट",
    desc: "Professional futures & options trading guidance"
  },
  {
    icon: Landmark,
    title: "Demat Account Opening (Angel One)",
    titleMr: "डिमॅट खाते उघडणे",
    desc: "Open your demat account with Angel One"
  },
  {
    icon: PieChart,
    title: "Portfolio Management Guidance",
    titleMr: "पोर्टफोलिओ व्यवस्थापन",
    desc: "Manage and optimize your investment portfolio"
  },
  {
    icon: Calendar,
    title: "Financial Planning",
    titleMr: "आर्थिक नियोजन",
    desc: "Plan your financial future with confidence"
  },
  {
    icon: GraduationCap,
    title: "Beginner Investment Training",
    titleMr: "नवीन गुंतवणूकदारांसाठी प्रशिक्षण",
    desc: "Learn investing from scratch with expert guidance"
  }
];

export default function ServicesPage() {
  return (
    <div className="flex flex-col w-full bg-[#F5F5F0]">
      {/* Hero Banner */}
      <section className="bg-[#0D1B2A] text-white py-16 px-4">
        <div className="container mx-auto text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="inline-block"
          >
            <h1 className="text-4xl md:text-5xl font-serif font-bold mb-4">Our Services</h1>
            <div className="h-1 w-24 bg-primary mx-auto rounded"></div>
            <h2 className="text-xl md:text-2xl font-devanagari mt-4 text-primary">आमच्या सेवा</h2>
          </motion.div>
        </div>
      </section>

      {/* Services Grid */}
      <section className="py-20 px-4">
        <div className="container mx-auto max-w-6xl">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {services.map((service, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.1 }}
                className="bg-[#0D1B2A] rounded-2xl p-8 border-t-4 border-primary shadow-lg hover:-translate-y-2 hover:shadow-primary/20 hover:shadow-2xl transition-all duration-300 flex flex-col h-full group"
              >
                <div className="w-16 h-16 rounded-full bg-primary/10 flex items-center justify-center mb-6 group-hover:bg-primary/20 transition-colors">
                  <service.icon size={32} className="text-primary" />
                </div>
                
                <h3 className="text-xl font-bold text-white mb-2">{service.title}</h3>
                <h4 className="font-devanagari text-primary mb-4 text-sm">{service.titleMr}</h4>
                
                <p className="text-gray-400 mb-8 flex-grow">{service.desc}</p>
                
                <Link href="/contact" className="inline-block w-full text-center py-3 rounded-full border border-primary text-primary font-bold uppercase tracking-wider text-sm hover:bg-primary hover:text-[#0D1B2A] transition-colors mt-auto">
                  Enquire Now →
                </Link>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Banner */}
      <section className="bg-gradient-to-br from-[#C9A84C] to-[#E8C96D] py-16 px-4">
        <div className="container mx-auto text-center">
          <h2 className="text-3xl md:text-4xl font-bold text-[#0D1B2A] mb-2 uppercase tracking-wide">Start Your Investment Journey Today</h2>
          <h3 className="text-xl font-devanagari text-[#0D1B2A]/80 mb-8 font-bold">आजच सुरुवात करा</h3>
          
          <Link href="/contact" className="inline-block bg-[#2E7D32] hover:bg-[#43A047] text-white px-8 py-4 rounded-full font-bold tracking-widest shadow-xl transition-all hover:scale-105">
            CONTACT US
          </Link>
        </div>
      </section>
    </div>
  );
}
