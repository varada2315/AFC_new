import { FileText } from "lucide-react";

export default function TermsPage() {
  return (
    <div className="flex flex-col w-full bg-white min-h-screen">
      <section className="bg-[#0D1B2A] text-white py-16 px-4">
        <div className="container mx-auto text-center">
          <FileText size={48} className="text-primary mx-auto mb-6" />
          <h1 className="text-3xl md:text-5xl font-serif font-bold mb-4">Terms & Conditions</h1>
          <h2 className="text-xl font-devanagari text-primary">नियम व अटी</h2>
        </div>
      </section>

      <section className="py-16 px-4">
        <div className="container mx-auto max-w-4xl prose prose-slate lg:prose-lg">
          <p className="text-sm text-gray-500 uppercase tracking-widest mb-8">Last Updated: March 2024</p>
          
          <div className="space-y-12 text-gray-800">
            <div>
              <h3 className="text-2xl font-bold text-[#0D1B2A] mb-4">1. Agreement to Terms</h3>
              <p>These Terms of Use constitute a legally binding agreement made between you, whether personally or on behalf of an entity ("you") and Ashish Finance Services ("Company", "we", "us", or "our"), concerning your access to and use of the website as well as any other media form, media channel, mobile website or mobile application related, linked, or otherwise connected thereto.</p>
            </div>

            <div>
              <h3 className="text-2xl font-bold text-[#0D1B2A] mb-4">2. Services</h3>
              <p>Ashish Finance Services provides investment advisory, mutual fund distribution, and demat account opening assistance as an authorised person of Angel One. We do not handle direct cash transactions on behalf of clients. All investments are made directly by the client into their respective demat or mutual fund accounts.</p>
            </div>

            <div className="bg-red-50 p-6 rounded-xl border border-red-100">
              <h3 className="text-2xl font-bold text-red-800 mb-4">3. Investment Disclaimer</h3>
              <p className="font-bold">INVESTMENTS IN SECURITIES MARKET ARE SUBJECT TO MARKET RISKS. READ ALL THE RELATED DOCUMENTS CAREFULLY BEFORE INVESTING.</p>
              <p className="mt-2 text-sm text-red-700">Past performance of any investment strategy or product does not guarantee future returns. The information provided by Ashish Finance Services is for educational and advisory purposes and should not be construed as guaranteed profit schemes.</p>
            </div>

            <div>
              <h3 className="text-2xl font-bold text-[#0D1B2A] mb-4">4. Liability</h3>
              <p>In no event will we or our directors, employees, or agents be liable to you or any third party for any direct, indirect, consequential, exemplary, incidental, special, or punitive damages, including lost profit, lost revenue, loss of data, or other damages arising from your use of our advisory services.</p>
            </div>

            <div>
              <h3 className="text-2xl font-bold text-[#0D1B2A] mb-4">5. Governing Law</h3>
              <p>These terms shall be governed by and defined following the laws of India. Ashish Finance Services and yourself irrevocably consent that the courts of Maharashtra shall have exclusive jurisdiction to resolve any dispute which may arise in connection with these terms.</p>
            </div>

            <div className="bg-[#F5F5F0] p-6 rounded-xl border border-gray-200 mt-12">
              <h3 className="text-xl font-bold text-[#0D1B2A] mb-2">6. Contact Us</h3>
              <p className="mb-0">In order to resolve a complaint regarding the Site or to receive further information regarding use of the Site, please contact us at <strong>info@ashishfinanceservices.com</strong>.</p>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
