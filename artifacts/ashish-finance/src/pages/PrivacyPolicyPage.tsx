import { Shield } from "lucide-react";

export default function PrivacyPolicyPage() {
  return (
    <div className="flex flex-col w-full bg-white min-h-screen">
      <section className="bg-[#0D1B2A] text-white py-16 px-4">
        <div className="container mx-auto text-center">
          <Shield size={48} className="text-primary mx-auto mb-6" />
          <h1 className="text-3xl md:text-5xl font-serif font-bold mb-4">Privacy Policy</h1>
          <h2 className="text-xl font-devanagari text-primary">गोपनीयता धोरण</h2>
        </div>
      </section>

      <section className="py-16 px-4">
        <div className="container mx-auto max-w-4xl prose prose-slate lg:prose-lg">
          <p className="text-sm text-gray-500 uppercase tracking-widest mb-8">Last Updated: March 2024</p>
          
          <div className="space-y-12 text-gray-800">
            <div>
              <h3 className="text-2xl font-bold text-[#0D1B2A] mb-4">1. Data We Collect</h3>
              <p>Ashish Finance Services collects personal information that you voluntarily provide to us when you express an interest in obtaining information about us or our products and services. The personal information that we collect depends on the context of your interactions with us, the choices you make and the products and features you use.</p>
              <ul className="list-disc pl-6 mt-4 space-y-2">
                <li>Names and Contact Data (phone numbers, email addresses)</li>
                <li>Financial Information necessary for account opening (PAN, Aadhar)</li>
                <li>Investment preferences and risk profile data</li>
              </ul>
            </div>

            <div>
              <h3 className="text-2xl font-bold text-[#0D1B2A] mb-4">2. How We Use It</h3>
              <p>We use personal information collected via our website for a variety of business purposes described below:</p>
              <ul className="list-disc pl-6 mt-4 space-y-2">
                <li>To facilitate Demat account creation process with Angel One</li>
                <li>To provide investment advisory services</li>
                <li>To send administrative information to you</li>
                <li>To request feedback and contact you about your use of our services</li>
              </ul>
            </div>

            <div>
              <h3 className="text-2xl font-bold text-[#0D1B2A] mb-4">3. Third Parties</h3>
              <p>We only share information with your consent, to comply with laws, to provide you with services, to protect your rights, or to fulfill business obligations. Primary third parties include:</p>
              <ul className="list-disc pl-6 mt-4 space-y-2">
                <li>Angel One (for Demat account opening)</li>
                <li>Mutual Fund AMCs (for processing investments)</li>
                <li>Regulatory bodies (SEBI, NISM) when required by law</li>
              </ul>
            </div>

            <div>
              <h3 className="text-2xl font-bold text-[#0D1B2A] mb-4">4. Your Rights</h3>
              <p>You have the right to review, change, or terminate your account at any time. You can also request that we delete your personal information. Please note that regulatory requirements may mandate us to retain certain financial records for a specified period.</p>
            </div>

            <div className="bg-[#F5F5F0] p-6 rounded-xl border border-gray-200 mt-12">
              <h3 className="text-xl font-bold text-[#0D1B2A] mb-2">5. Contact Us</h3>
              <p className="mb-0">If you have questions or comments about this notice, you may email us at <strong>info@ashishfinanceservices.com</strong> or contact us by post at our Virar office.</p>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
