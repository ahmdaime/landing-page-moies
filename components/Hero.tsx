import React from 'react';
import { Clock, CheckCircle, Users, PlayCircle, Download } from 'lucide-react';
import { motion } from 'framer-motion';

const Hero: React.FC = () => {
  return (
    <section className="relative pt-32 pb-20 lg:pt-48 lg:pb-32 overflow-hidden bg-gradient-to-br from-blue-50 via-white to-green-50">
      <div className="container mx-auto px-4 md:px-6 relative z-10">
        <div className="flex flex-col lg:flex-row items-center gap-12 lg:gap-16">
          
          {/* Left Content */}
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="lg:w-1/2 text-center lg:text-left"
          >
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-blue-100 text-brand-blue text-sm font-semibold mb-6">
              <span className="relative flex h-2 w-2">
                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-blue-400 opacity-75"></span>
                <span className="relative inline-flex rounded-full h-2 w-2 bg-brand-blue"></span>
              </span>
              Trusted by 1000+ Malaysian Teachers
            </div>
            
            <h1 className="font-heading text-4xl md:text-5xl lg:text-6xl font-extrabold text-gray-900 leading-tight mb-6">
              Jimat <span className="text-brand-blue">28 Minit</span> Setiap Hari Dengan Automasi Kehadiran MOEIS
            </h1>
            
            <p className="text-lg md:text-xl text-gray-600 mb-8 leading-relaxed">
              Chrome extension khas untuk guru Malaysia. Copy mesej WhatsApp, auto-fill sistem MOEIS. <span className="font-semibold text-gray-800">30 minit → 2 minit.</span> Mudah, pantas, dan tepat.
            </p>

            <div className="flex flex-col sm:flex-row items-center justify-center lg:justify-start gap-4 mb-10">
              <a
                href="https://chromewebstore.google.com/detail/aopjilfeegfaadfalilcnjgehpilnenm"
                target="_blank"
                rel="noopener noreferrer"
                className="w-full sm:w-auto flex items-center justify-center gap-2 bg-brand-blue text-white px-8 py-4 rounded-xl font-bold text-lg shadow-lg hover:shadow-brand-blue/30 hover:-translate-y-1 transition-all"
              >
                <Download size={20} />
                Download FREE
              </a>
              <a 
                href="#demo"
                className="w-full sm:w-auto flex items-center justify-center gap-2 bg-white text-gray-700 border-2 border-gray-200 px-8 py-4 rounded-xl font-bold text-lg hover:border-brand-blue hover:text-brand-blue transition-all"
              >
                <PlayCircle size={20} />
                Tengok Demo
              </a>
            </div>

            <div className="grid grid-cols-3 gap-4 border-t pt-8 border-gray-200">
              <div className="text-center lg:text-left">
                <div className="flex items-center justify-center lg:justify-start gap-1 text-brand-dark font-bold text-2xl">
                  <Clock className="w-5 h-5 text-brand-orange" />
                  <span>93%</span>
                </div>
                <p className="text-sm text-gray-500">Lebih Pantas</p>
              </div>
              <div className="text-center lg:text-left">
                <div className="flex items-center justify-center lg:justify-start gap-1 text-brand-dark font-bold text-2xl">
                  <CheckCircle className="w-5 h-5 text-brand-accent" />
                  <span>100%</span>
                </div>
                <p className="text-sm text-gray-500">Accuracy (PRO)</p>
              </div>
              <div className="text-center lg:text-left">
                <div className="flex items-center justify-center lg:justify-start gap-1 text-brand-dark font-bold text-2xl">
                  <Users className="w-5 h-5 text-brand-blue" />
                  <span>1k+</span>
                </div>
                <p className="text-sm text-gray-500">Guru Guna</p>
              </div>
            </div>
          </motion.div>

          {/* Right Image */}
          <motion.div 
            initial={{ opacity: 0, x: 20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="lg:w-1/2 relative"
          >
            <div className="relative rounded-2xl overflow-hidden shadow-2xl border-4 border-white">
               {/* Using a placeholder that looks like dashboard/software */}
               <img 
                src="https://i.imgur.com/vTRvWQW.png" 
                alt="MOEIS Helper Dashboard Interface" 
                className="w-full h-auto object-cover"
              />
              {/* Floating Badge */}
              <div className="absolute bottom-6 left-6 bg-white p-4 rounded-xl shadow-lg flex items-center gap-3 animate-bounce">
                <div className="bg-green-100 p-2 rounded-full">
                  <CheckCircle className="text-green-600 w-6 h-6" />
                </div>
                <div>
                  <p className="text-xs text-gray-500 font-semibold uppercase">Status</p>
                  <p className="text-sm font-bold text-gray-800">Kehadiran Selesai!</p>
                </div>
              </div>
            </div>
            {/* Decorative blobs */}
            <div className="absolute -z-10 top-10 -right-10 w-72 h-72 bg-blue-200 rounded-full mix-blend-multiply filter blur-3xl opacity-30"></div>
            <div className="absolute -z-10 -bottom-10 -left-10 w-72 h-72 bg-green-200 rounded-full mix-blend-multiply filter blur-3xl opacity-30"></div>
          </motion.div>

        </div>
      </div>
    </section>
  );
};

export default Hero;