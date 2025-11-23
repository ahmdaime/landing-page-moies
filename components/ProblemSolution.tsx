import React from 'react';
import { XCircle, CheckCircle, ArrowRight } from 'lucide-react';
import { motion } from 'framer-motion';

const ProblemSolution: React.FC = () => {
  return (
    <section className="py-20 bg-white">
      <div className="container mx-auto px-4 md:px-6">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <h2 className="text-3xl md:text-4xl font-heading font-bold text-gray-900 mb-4">
            Adakah Anda Hadapi Masalah Ini Setiap Hari?
          </h2>
          <p className="text-gray-600 text-lg">
            Menjadi guru kelas memang mencabar, terutamanya waktu pagi yang sibuk.
          </p>
        </div>

        <div className="flex flex-col md:flex-row gap-8 items-center justify-center">
          
          {/* The Problem */}
          <motion.div 
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="flex-1 bg-red-50 rounded-2xl p-8 border border-red-100 h-full w-full max-w-lg"
          >
            <div className="bg-red-100 w-12 h-12 rounded-full flex items-center justify-center mb-6">
              <XCircle className="text-red-600 w-6 h-6" />
            </div>
            <h3 className="text-2xl font-bold text-gray-900 mb-6">Cara Lama (Manual)</h3>
            <ul className="space-y-4">
              <li className="flex items-start gap-3">
                <XCircle className="text-red-500 w-5 h-5 mt-1 shrink-0" />
                <span className="text-gray-700">Habis <span className="font-bold">20-30 minit</span> isi kehadiran</span>
              </li>
              <li className="flex items-start gap-3">
                <XCircle className="text-red-500 w-5 h-5 mt-1 shrink-0" />
                <span className="text-gray-700">Typo nama murid & kena scroll dropdown</span>
              </li>
              <li className="flex items-start gap-3">
                <XCircle className="text-red-500 w-5 h-5 mt-1 shrink-0" />
                <span className="text-gray-700">Penat untick checkbox satu per satu</span>
              </li>
              <li className="flex items-start gap-3">
                <XCircle className="text-red-500 w-5 h-5 mt-1 shrink-0" />
                <span className="text-gray-700">Keliru kod sebab (D01? J02? N03?)</span>
              </li>
            </ul>
          </motion.div>

          {/* Arrow Connector (Desktop) */}
          <div className="hidden md:block text-gray-300">
            <ArrowRight size={48} />
          </div>

          {/* The Solution */}
          <motion.div 
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="flex-1 bg-green-50 rounded-2xl p-8 border border-green-100 h-full w-full max-w-lg relative overflow-hidden"
          >
            <div className="absolute top-0 right-0 bg-brand-accent text-white text-xs font-bold px-3 py-1 rounded-bl-lg">
              RECOMMENDED
            </div>
            <div className="bg-green-100 w-12 h-12 rounded-full flex items-center justify-center mb-6">
              <CheckCircle className="text-green-600 w-6 h-6" />
            </div>
            <h3 className="text-2xl font-bold text-gray-900 mb-6">Dengan MOEIS Helper</h3>
            <ul className="space-y-4">
              <li className="flex items-start gap-3">
                <CheckCircle className="text-green-600 w-5 h-5 mt-1 shrink-0" />
                <span className="text-gray-700">Siap dalam <span className="font-bold text-green-700">2 minit</span> sahaja</span>
              </li>
              <li className="flex items-start gap-3">
                <CheckCircle className="text-green-600 w-5 h-5 mt-1 shrink-0" />
                <span className="text-gray-700">Auto-match nama walaupun typo</span>
              </li>
              <li className="flex items-start gap-3">
                <CheckCircle className="text-green-600 w-5 h-5 mt-1 shrink-0" />
                <span className="text-gray-700">Sekali klik untuk process 30+ murid</span>
              </li>
              <li className="flex items-start gap-3">
                <CheckCircle className="text-green-600 w-5 h-5 mt-1 shrink-0" />
                <span className="text-gray-700">AI pilih kod sebab yang tepat</span>
              </li>
            </ul>
          </motion.div>

        </div>
      </div>
    </section>
  );
};

export default ProblemSolution;