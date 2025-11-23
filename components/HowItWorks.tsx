import React from 'react';
import { MessageSquare, Search, CheckCheck } from 'lucide-react';

const HowItWorks: React.FC = () => {
  const steps = [
    {
      id: 1,
      title: "Copy WhatsApp",
      desc: "Salin mesej senarai ketidakhadiran dari group WhatsApp ibu bapa.",
      icon: <MessageSquare className="w-8 h-8 text-white" />,
      color: "bg-blue-500"
    },
    {
      id: 2,
      title: "Paste & Analisa",
      desc: "Buka extension, tampal mesej tadi. Klik 'Analisa' untuk AI process data.",
      icon: <Search className="w-8 h-8 text-white" />,
      color: "bg-indigo-500"
    },
    {
      id: 3,
      title: "Apply ke MOEIS",
      desc: "Semak preview dan klik 'Apply'. Extension akan isi semua secara automatik!",
      icon: <CheckCheck className="w-8 h-8 text-white" />,
      color: "bg-green-500"
    }
  ];

  return (
    <section id="how-it-works" className="py-20 bg-gray-50">
      <div className="container mx-auto px-4 md:px-6">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-heading font-bold text-gray-900 mb-4">
            Mudah Seperti 1-2-3
          </h2>
          <p className="text-gray-600 max-w-2xl mx-auto">
            Tiada setting yang pening. Direka khas untuk guru yang bukan pakar IT.
          </p>
        </div>

        {/* Steps Grid */}
        <div className="grid md:grid-cols-3 gap-8 relative mb-20">
          {/* Connecting Line (Desktop) */}
          <div className="hidden md:block absolute top-12 left-[16%] right-[16%] h-1 bg-gray-200 -z-10"></div>

          {steps.map((step) => (
            <div key={step.id} className="flex flex-col items-center text-center group">
              <div className={`w-24 h-24 rounded-2xl ${step.color} flex items-center justify-center shadow-lg mb-6 transform group-hover:scale-110 transition-transform duration-300`}>
                {step.icon}
              </div>
              <div className="bg-white p-6 rounded-xl shadow-sm border border-gray-100 w-full h-full">
                <div className="inline-block px-3 py-1 rounded-full bg-gray-100 text-gray-500 text-sm font-bold mb-3">
                  Langkah {step.id}
                </div>
                <h3 className="text-xl font-bold text-gray-900 mb-3">{step.title}</h3>
                <p className="text-gray-600 leading-relaxed">{step.desc}</p>
              </div>
            </div>
          ))}
        </div>

        {/* Screenshots Showcase */}
        <div className="bg-white rounded-3xl shadow-xl overflow-hidden border border-gray-200">
          <div className="grid md:grid-cols-2 gap-0 divide-y md:divide-y-0 md:divide-x divide-gray-200">
            
            {/* Image 1: Extension Interface */}
            <div className="p-8 lg:p-12 flex flex-col items-center bg-gray-50/50">
              <div className="text-center mb-6">
                <span className="bg-indigo-600 text-white px-3 py-1 rounded-full text-xs font-bold uppercase tracking-wide mb-2 inline-block">
                  Langkah 2
                </span>
                <h3 className="text-xl font-bold text-gray-900">Paparan Extension</h3>
                <p className="text-gray-500 text-sm mt-2">Extension menganalisis teks WhatsApp dan mengasingkan nama & sebab secara automatik.</p>
              </div>
              <div className="relative group w-full max-w-md">
                <div className="absolute -inset-1 bg-gradient-to-r from-blue-600 to-indigo-600 rounded-lg blur opacity-25 group-hover:opacity-50 transition duration-1000 group-hover:duration-200"></div>
                <img 
                  src="https://i.imgur.com/WjTveyg.png" 
                  alt="Paparan Extension MOEIS Helper" 
                  className="relative rounded-lg shadow-2xl w-full border border-gray-200 transform group-hover:scale-[1.02] transition-transform duration-300"
                />
              </div>
            </div>

            {/* Image 2: MOEIS Interface (Updated for PRO Context) */}
            <div className="p-8 lg:p-12 flex flex-col items-center bg-white">
              <div className="text-center mb-6">
                <div className="flex gap-2 justify-center mb-2">
                  <span className="bg-green-600 text-white px-3 py-1 rounded-full text-xs font-bold uppercase tracking-wide">
                    Langkah 3
                  </span>
                  <span className="bg-brand-orange text-white px-3 py-1 rounded-full text-xs font-bold uppercase tracking-wide">
                    PRO FEATURE
                  </span>
                </div>
                <h3 className="text-xl font-bold text-gray-900">Hasil Analisa Lanjutan</h3>
                <p className="text-gray-500 text-sm mt-2">
                  Versi PRO boleh mengesan sebab unik (seperti "Ujian Sekolah", "Urusan Kerajaan") dan mengisi kod yang tepat secara automatik.
                </p>
              </div>
              <div className="relative group w-full max-w-md">
                <div className="absolute -inset-1 bg-gradient-to-r from-green-500 to-emerald-600 rounded-lg blur opacity-25 group-hover:opacity-50 transition duration-1000 group-hover:duration-200"></div>
                <img 
                  src="https://i.imgur.com/dL7r9JU.png" 
                  alt="Paparan Sistem MOEIS yang telah diisi dengan features PRO" 
                  className="relative rounded-lg shadow-2xl w-full border border-gray-200 transform group-hover:scale-[1.02] transition-transform duration-300"
                />
              </div>
            </div>

          </div>
          
          <div className="bg-gray-900 text-white p-4 text-center text-sm">
            <span className="opacity-80">Gambar di atas adalah paparan sebenar penggunaan extension (Data murid dikaburkan untuk privasi)</span>
          </div>
        </div>

      </div>
    </section>
  );
};

export default HowItWorks;