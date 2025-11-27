import React, { useState } from 'react';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import ProblemSolution from './components/ProblemSolution';
import HowItWorks from './components/HowItWorks';
import WhatsAppTemplate from './components/WhatsAppTemplate';
import Features from './components/Features';
import Comparison from './components/Comparison';
import Pricing from './components/Pricing';
import Testimonials from './components/Testimonials';
import FAQ from './components/FAQ';
import Footer from './components/Footer';
import PaymentModal from './components/PaymentModal';
import { Download } from 'lucide-react';

function App() {
  const [isPaymentModalOpen, setIsPaymentModalOpen] = useState(false);

  return (
    <div className="font-sans text-gray-900">
      <Navbar />
      
      <main>
        <Hero />
        <ProblemSolution />
        <HowItWorks />
        <WhatsAppTemplate />
        <Features />
        <Comparison />
        <Pricing onOpenPaymentModal={() => setIsPaymentModalOpen(true)} />
        <Testimonials />
        
        {/* Video Demo Section (Placeholder) */}
        <section id="demo" className="py-20 bg-black text-white text-center">
          <div className="container mx-auto px-4">
            <h2 className="text-3xl font-bold mb-8">Lihat Bagaimana Ia Berfungsi</h2>
            <div className="max-w-4xl mx-auto aspect-video bg-gray-800 rounded-xl flex items-center justify-center border border-gray-700 shadow-2xl">
              <div className="text-center">
                <p className="text-gray-400 mb-2">Video Demo Placeholder</p>
                <button className="bg-white/10 hover:bg-white/20 rounded-full p-4 transition-colors">
                  <svg className="w-12 h-12 text-white" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M8 5v14l11-7z" />
                  </svg>
                </button>
              </div>
            </div>
          </div>
        </section>

        <FAQ />

        {/* Final CTA */}
        <section className="py-20 bg-gradient-to-r from-brand-blue to-brand-accent text-white text-center">
          <div className="container mx-auto px-4">
            <h2 className="text-3xl md:text-5xl font-extrabold mb-6 font-heading">
              Mulakan Penambahbaikan Hari Ini!
            </h2>
            <p className="text-xl md:text-2xl opacity-90 mb-10 max-w-2xl mx-auto">
              Join 1000+ guru yang sudah jimat masa dengan MOEIS Kehadiran Helper.
            </p>
            <div className="flex flex-col sm:flex-row justify-center gap-4">
              <a
                href="https://chromewebstore.google.com/detail/aopjilfeegfaadfalilcnjgehpilnenm"
                target="_blank"
                rel="noopener noreferrer"
                className="bg-white text-brand-blue px-8 py-4 rounded-xl font-bold text-lg shadow-lg hover:shadow-xl hover:bg-gray-50 transition-all flex items-center justify-center gap-2"
              >
                <Download size={20} />
                Download FREE Extension
              </a>
              <button 
                onClick={() => setIsPaymentModalOpen(true)}
                className="bg-brand-orange text-white border-2 border-brand-orange px-8 py-4 rounded-xl font-bold text-lg hover:bg-orange-600 hover:border-orange-600 transition-all"
              >
                Get PRO License - RM 10
              </button>
            </div>
            <p className="mt-6 text-sm opacity-80">
              Compatible with MOEIS (moeispel.moe.gov.my) • Secure & Private
            </p>
          </div>
        </section>
      </main>

      <Footer />
      
      {/* Payment Popup Modal */}
      <PaymentModal 
        isOpen={isPaymentModalOpen} 
        onClose={() => setIsPaymentModalOpen(false)} 
      />
    </div>
  );
}

export default App;