import React from 'react';
import { FEATURES } from '../constants';
import { FeatureItem } from '../types';

const Features: React.FC = () => {
  return (
    <section id="features" className="py-20 bg-white">
      <div className="container mx-auto px-4 md:px-6">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-heading font-bold text-gray-900 mb-4">
            Features Yang Memudahkan Kerja Anda
          </h2>
          <p className="text-gray-600 text-lg max-w-2xl mx-auto">
            Lebih daripada sekadar copy-paste. Sistem pintar ini memahami konteks ketidakhadiran.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
          {FEATURES.map((feature: FeatureItem, index) => (
            <div 
              key={index}
              className="bg-white p-6 rounded-xl border border-gray-100 shadow-sm hover:shadow-md transition-shadow duration-300 flex flex-col h-full"
            >
              <div className="flex justify-between items-start mb-4">
                <div className="p-3 bg-blue-50 rounded-lg">
                  {feature.icon}
                </div>
                {feature.isPro && (
                  <span className="bg-brand-orange text-white text-xs font-bold px-2 py-1 rounded uppercase tracking-wider">
                    PRO
                  </span>
                )}
              </div>
              <h3 className="text-lg font-bold text-gray-900 mb-2">{feature.title}</h3>
              <p className="text-gray-600 text-sm leading-relaxed">{feature.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Features;