import React from 'react';
import { CheckCircle2, Zap } from 'lucide-react';
import { PRICING_TIERS } from '../constants';

interface PricingProps {
  onOpenPaymentModal: () => void;
}

const Pricing: React.FC<PricingProps> = ({ onOpenPaymentModal }) => {
  return (
    <section id="pricing" className="py-20 bg-white">
      <div className="container mx-auto px-4 md:px-6">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-heading font-bold text-gray-900 mb-4">
            Pelaburan Kecil, Penjimatan Besar
          </h2>
          <p className="text-gray-600 text-lg">
            Harga kurang dari RM 0.20 sehari untuk jimat masa 30 minit.
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-8 max-w-4xl mx-auto">
          {PRICING_TIERS.map((tier, index) => (
            <div 
              key={index} 
              className={`relative rounded-2xl p-8 border-2 flex flex-col ${
                tier.isPopular 
                  ? 'border-brand-blue bg-white shadow-xl scale-100 md:scale-105 z-10' 
                  : 'border-gray-100 bg-gray-50 shadow-sm'
              }`}
            >
              {tier.isPopular && (
                <div className="absolute top-0 left-1/2 transform -translate-x-1/2 -translate-y-1/2 bg-brand-orange text-white px-4 py-1 rounded-full text-sm font-bold shadow-md flex items-center gap-1">
                  <Zap size={14} fill="currentColor" /> MOST POPULAR
                </div>
              )}

              <div className="mb-8 text-center">
                <h3 className="text-xl font-bold text-gray-900 mb-2">{tier.name}</h3>
                <div className="flex items-baseline justify-center gap-1">
                  <span className="text-4xl font-extrabold text-gray-900">{tier.price}</span>
                  {tier.period && <span className="text-gray-500 font-medium text-sm">/{tier.period}</span>}
                </div>
                <p className="text-gray-500 mt-2">{tier.description}</p>
              </div>

              <ul className="space-y-4 mb-8 flex-grow">
                {tier.features.map((feature, idx) => (
                  <li key={idx} className="flex items-start gap-3">
                    <CheckCircle2 className={`w-5 h-5 shrink-0 ${tier.isPopular ? 'text-brand-blue' : 'text-gray-400'}`} />
                    <span className="text-gray-700 text-sm">{feature}</span>
                  </li>
                ))}
              </ul>

              {tier.isFree ? (
                <a
                  href="https://chrome.google.com/webstore"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-full block text-center py-4 rounded-xl font-bold transition-colors bg-white border border-gray-300 text-gray-700 hover:bg-gray-50"
                >
                  {tier.cta}
                </a>
              ) : (
                <button
                  onClick={onOpenPaymentModal}
                  className="w-full block text-center py-4 rounded-xl font-bold transition-colors bg-brand-blue text-white hover:bg-brand-dark shadow-lg hover:shadow-brand-blue/40"
                >
                  {tier.cta}
                </button>
              )}
              
              {!tier.isFree && (
                 <p className="text-center text-xs text-gray-400 mt-4">
                   7-Day Money-Back Guarantee
                 </p>
              )}
            </div>
          ))}
        </div>

        {/* ROI Note */}
        <div className="mt-16 bg-green-50 rounded-xl p-6 max-w-3xl mx-auto text-center border border-green-100">
          <p className="text-green-800 font-medium">
            💡 <span className="font-bold">ROI Calculator:</span> Jimat 28 minit/hari × 20 hari = <span className="font-bold">9.3 jam sebulan!</span> Berapa nilai masa rehat anda?
          </p>
        </div>
      </div>
    </section>
  );
};

export default Pricing;