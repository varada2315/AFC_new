import { useState } from "react";
import { motion } from "framer-motion";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import * as z from "zod";
import { Phone, Mail, MapPin, Clock } from "lucide-react";
import { SiWhatsapp } from "react-icons/si";
import { useToast } from "@/hooks/use-toast";
import { Form, FormControl, FormField, FormItem, FormLabel, FormMessage } from "@/components/ui/form";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { Button } from "@/components/ui/button";

const formSchema = z.object({
  fullName: z.string().min(2, "Name is required"),
  phone: z.string().min(10, "Valid phone number is required"),
  email: z.string().email("Valid email is required").optional().or(z.literal("")),
  service: z.string().min(1, "Please select a service"),
  message: z.string().optional()
});

export default function ContactPage() {
  const { toast } = useToast();
  const [isSubmitting, setIsSubmitting] = useState(false);

  const form = useForm<z.infer<typeof formSchema>>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      fullName: "",
      phone: "",
      email: "",
      service: "",
      message: ""
    }
  });

  function onSubmit(values: z.infer<typeof formSchema>) {
    setIsSubmitting(true);
    // Simulate API call
    setTimeout(() => {
      console.log(values);
      setIsSubmitting(false);
      form.reset();
      toast({
        title: "धन्यवाद! आम्ही लवकरच संपर्क करू.",
        description: "Thank you! We will contact you soon.",
        className: "bg-[#2E7D32] text-white border-none",
        duration: 3000,
      });
    }, 1000);
  }

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
            <h1 className="text-4xl md:text-5xl font-serif font-bold mb-4">Contact Us</h1>
            <div className="h-1 w-24 bg-primary mx-auto rounded"></div>
            <h2 className="text-xl md:text-2xl font-devanagari mt-4 text-primary">आमच्याशी संपर्क करा</h2>
          </motion.div>
        </div>
      </section>

      {/* Contact Info Cards */}
      <section className="py-12 px-4 -mt-8 relative z-10">
        <div className="container mx-auto max-w-6xl">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} className="bg-white rounded-xl p-6 shadow-lg border border-gray-100 flex flex-col items-center text-center">
              <div className="w-14 h-14 bg-primary/10 rounded-full flex items-center justify-center text-primary mb-4">
                <Phone size={28} />
              </div>
              <h3 className="font-bold text-lg text-[#1A1A1A]">Call Us <span className="font-devanagari font-normal text-gray-500">| फोन करा</span></h3>
              <p className="text-gray-700 mt-2 font-medium">+91 9876543210</p>
              <a href="tel:+919876543210" className="mt-4 text-sm font-bold text-[#2E7D32] border border-[#2E7D32] px-4 py-2 rounded-full hover:bg-[#2E7D32] hover:text-white transition-colors w-full">Call Now</a>
            </motion.div>

            <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.1 }} className="bg-white rounded-xl p-6 shadow-lg border border-gray-100 flex flex-col items-center text-center">
              <div className="w-14 h-14 bg-primary/10 rounded-full flex items-center justify-center text-primary mb-4">
                <Mail size={28} />
              </div>
              <h3 className="font-bold text-lg text-[#1A1A1A]">Email Us <span className="font-devanagari font-normal text-gray-500">| ईमेल करा</span></h3>
              <p className="text-gray-700 mt-2 font-medium truncate w-full">info@ashishfinanceservices.com</p>
              <a href="mailto:info@ashishfinanceservices.com" className="mt-4 text-sm font-bold text-[#0D1B2A] border border-primary px-4 py-2 rounded-full hover:bg-primary transition-colors w-full">Send Email</a>
            </motion.div>

            <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.2 }} className="bg-white rounded-xl p-6 shadow-lg border border-gray-100 flex flex-col items-center text-center">
              <div className="w-14 h-14 bg-[#25D366]/10 rounded-full flex items-center justify-center text-[#25D366] mb-4">
                <SiWhatsapp size={28} />
              </div>
              <h3 className="font-bold text-lg text-[#1A1A1A]">WhatsApp <span className="font-devanagari font-normal text-gray-500">| व्हॉट्सअ‍ॅप</span></h3>
              <p className="text-gray-700 mt-2 font-medium">+91 9876543210</p>
              <a href="https://wa.me/919876543210" target="_blank" rel="noreferrer" className="mt-4 text-sm font-bold text-[#25D366] border border-[#25D366] px-4 py-2 rounded-full hover:bg-[#25D366] hover:text-white transition-colors w-full">Chat on WhatsApp</a>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Main Content Area */}
      <section className="py-12 px-4 pb-20">
        <div className="container mx-auto max-w-6xl">
          <div className="flex flex-col lg:flex-row gap-12">
            
            {/* Left: Info */}
            <div className="lg:w-1/3 flex flex-col gap-6">
              <div className="bg-[#0D1B2A] text-white p-8 rounded-2xl border-l-4 border-primary">
                <h3 className="text-xl font-bold uppercase tracking-widest mb-6 flex items-center gap-3">
                  <MapPin className="text-primary" /> Location
                </h3>
                <p className="text-gray-300 leading-relaxed">
                  Ashish Finance Services<br />
                  Virar, Maharashtra<br />
                  India - 401303
                </p>
              </div>

              <div className="bg-white p-8 rounded-2xl shadow-md border border-gray-200">
                <h3 className="text-xl font-bold text-[#0D1B2A] uppercase tracking-widest mb-6 flex items-center gap-3">
                  <Clock className="text-primary" /> Working Hours
                </h3>
                <div className="space-y-4">
                  <div className="flex justify-between items-center border-b border-gray-100 pb-3">
                    <span className="font-medium text-gray-700">Mon - Sat</span>
                    <span className="font-bold text-[#0D1B2A]">9:00 AM - 7:00 PM</span>
                  </div>
                  <div className="flex justify-between items-center pb-2">
                    <span className="font-medium text-gray-700">Sunday</span>
                    <span className="font-bold text-red-600">By Appointment</span>
                  </div>
                  <div className="pt-2">
                    <p className="font-devanagari text-sm text-gray-500 text-center bg-[#F5F5F0] p-2 rounded">सोमवार ते शनिवार: सकाळी ९ ते संध्याकाळी ७</p>
                  </div>
                </div>
              </div>
            </div>

            {/* Right: Form */}
            <div className="lg:w-2/3">
              <div className="bg-[#0D1B2A] p-8 md:p-10 rounded-2xl border border-primary/30 shadow-2xl relative overflow-hidden">
                <div className="absolute top-0 left-0 w-full h-2 bg-gradient-to-r from-primary to-[#E8C96D]"></div>
                
                <h3 className="text-2xl font-serif text-white mb-2">Send us a message</h3>
                <p className="text-gray-400 mb-8 font-devanagari text-sm">आम्हाला संदेश पाठवा</p>

                <Form {...form}>
                  <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-6">
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                      <FormField
                        control={form.control}
                        name="fullName"
                        render={({ field }) => (
                          <FormItem>
                            <FormLabel className="text-gray-300">Full Name <span className="font-devanagari text-xs text-gray-500 ml-1">पूर्ण नाव</span></FormLabel>
                            <FormControl>
                              <Input placeholder="Your Name" className="bg-[#1a2b42] border-primary/20 text-white focus-visible:ring-primary" {...field} />
                            </FormControl>
                            <FormMessage className="text-red-400" />
                          </FormItem>
                        )}
                      />
                      <FormField
                        control={form.control}
                        name="phone"
                        render={({ field }) => (
                          <FormItem>
                            <FormLabel className="text-gray-300">Phone <span className="font-devanagari text-xs text-gray-500 ml-1">मोबाइल नंबर</span></FormLabel>
                            <FormControl>
                              <Input placeholder="Your Phone Number" className="bg-[#1a2b42] border-primary/20 text-white focus-visible:ring-primary" {...field} />
                            </FormControl>
                            <FormMessage className="text-red-400" />
                          </FormItem>
                        )}
                      />
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                      <FormField
                        control={form.control}
                        name="email"
                        render={({ field }) => (
                          <FormItem>
                            <FormLabel className="text-gray-300">Email (Optional) <span className="font-devanagari text-xs text-gray-500 ml-1">ईमेल</span></FormLabel>
                            <FormControl>
                              <Input placeholder="Your Email" className="bg-[#1a2b42] border-primary/20 text-white focus-visible:ring-primary" {...field} />
                            </FormControl>
                            <FormMessage className="text-red-400" />
                          </FormItem>
                        )}
                      />
                      <FormField
                        control={form.control}
                        name="service"
                        render={({ field }) => (
                          <FormItem>
                            <FormLabel className="text-gray-300">Service Interested In</FormLabel>
                            <Select onValueChange={field.onChange} defaultValue={field.value}>
                              <FormControl>
                                <SelectTrigger className="bg-[#1a2b42] border-primary/20 text-white focus:ring-primary">
                                  <SelectValue placeholder="Select a service" />
                                </SelectTrigger>
                              </FormControl>
                              <SelectContent className="bg-[#0D1B2A] border-primary/30 text-white">
                                <SelectItem value="stock">Stock Market Guidance</SelectItem>
                                <SelectItem value="mutual">Mutual Fund Investment</SelectItem>
                                <SelectItem value="fno">F&O Trading</SelectItem>
                                <SelectItem value="demat">Demat Account Opening</SelectItem>
                                <SelectItem value="portfolio">Portfolio Management</SelectItem>
                                <SelectItem value="planning">Financial Planning</SelectItem>
                                <SelectItem value="training">Beginner Training</SelectItem>
                              </SelectContent>
                            </Select>
                            <FormMessage className="text-red-400" />
                          </FormItem>
                        )}
                      />
                    </div>

                    <FormField
                      control={form.control}
                      name="message"
                      render={({ field }) => (
                        <FormItem>
                          <FormLabel className="text-gray-300">Message <span className="font-devanagari text-xs text-gray-500 ml-1">संदेश</span></FormLabel>
                          <FormControl>
                            <Textarea 
                              placeholder="How can we help you?" 
                              className="bg-[#1a2b42] border-primary/20 text-white min-h-[120px] focus-visible:ring-primary resize-y" 
                              {...field} 
                            />
                          </FormControl>
                          <FormMessage className="text-red-400" />
                        </FormItem>
                      )}
                    />

                    <Button 
                      type="submit" 
                      disabled={isSubmitting}
                      className="w-full bg-primary hover:bg-[#E8C96D] text-[#0D1B2A] font-bold uppercase tracking-widest py-6 rounded-lg transition-all"
                    >
                      {isSubmitting ? "Sending..." : "Send Message"}
                    </Button>
                  </form>
                </Form>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
