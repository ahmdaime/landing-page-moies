import React from 'react';
import { Check, X } from 'lucide-react';

const Comparison: React.FC = () => {
  const comparisonData = [
    { feature: "WhatsApp Parsing", free: true, pro: true },
    { feature: "Auto Name Matching", free: true, pro: true },
    { feature: "20+ Sebab Umum (Demam/Cuti)", free: true, pro: true },
    { feature: "Preview Before Apply", free: true, pro: true },
    { feature: "Privacy: Local Processing", free: true, pro: false, textPro: "Secure Cloud" },
    { feature: "AI-Powered Categorization (Grok)", free: false, pro: true },
    { feature: "Detect Rare Cases (Interview/IC)", free: false, pro: true },
    { feature: "Learn Custom Mappings", free: false, pro: true },
    { feature: "Usage Analytics", free: false, pro: true },
    { feature: "Priority Support", free: false, pro: true },
  ];

  return (
    <section className="py-20 bg-gray-50">
      <div className="container mx-auto px-4 md:px-6">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-heading font-bold text-gray-900 mb-4">
            Pilih Versi Yang Sesuai
          </h2>
          <p className="text-gray-600">
            Mulakan dengan percuma, upgrade bila anda perlukan kuasa AI sepenuhnya.
          </p>
        </div>

        <div className="max-w-4xl mx-auto bg-white rounded-2xl shadow-lg overflow-hidden border border-gray-200">
          <div className="overflow-x-auto">
            <table className="w-full">
              <thead>
                <tr className="bg-gray-50 border-b border-gray-200">
                  <th className="text-left py-5 px-6 text-gray-600 font-medium w-1/2">Feature</th>
                  <th className="text-center py-5 px-6 text-gray-800 font-bold text-xl w-1/4">FREE</th>
                  <th className="text-center py-5 px-6 text-brand-blue font-bold text-xl w-1/4 bg-blue-50">PRO</th>
                </tr>
              </thead>
              <tbody>
                {comparisonData.map((row, idx) => (
                  <tr key={idx} className={`border-b border-gray-100 hover:bg-gray-50 transition-colors ${idx % 2 === 0 ? 'bg-white' : 'bg-white'}`}>
                    <td className="py-4 px-6 text-gray-700 font-medium">{row.feature}</td>
                    <td className="py-4 px-6 text-center">
                      <div className="flex justify-center">
                        {row.free ? (
                          <Check className="text-green-500 w-6 h-6" />
                        ) : (
                          <X className="text-gray-300 w-6 h-6" />
                        )}
                      </div>
                    </td>
                    <td className="py-4 px-6 text-center bg-blue-50/50">
                      <div className="flex justify-center items-center gap-2">
                        {row.pro ? (
                          <Check className="text-brand-blue w-6 h-6" />
                        ) : (
                          <span className="text-sm text-gray-500">{row.textPro || "-"}</span>
                        )}
                      </div>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Comparison;