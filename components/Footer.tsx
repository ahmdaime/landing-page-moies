import React from 'react';
import { Send, Facebook } from 'lucide-react';

const Footer: React.FC = () => {
  return (
    <footer className="bg-gray-900 text-gray-300 py-12 border-t border-gray-800">
      <div className="container mx-auto px-4 md:px-6">
        <div className="grid md:grid-cols-4 gap-12 mb-12">
          
          {/* Brand */}
          <div className="col-span-1 md:col-span-1">
            <div className="flex items-center gap-2 mb-4 text-white">
              <div className="w-8 h-8 bg-brand-blue rounded-lg flex items-center justify-center font-bold text-lg">
                M
              </div>
              <span className="font-heading font-bold text-xl">MOEIS Helper</span>
            </div>
            <p className="text-sm text-gray-400 mb-6 leading-relaxed">
              Automasi Kehadiran MOEIS - Jimat Masa Guru Kelas. Developed by CikguAime untuk memudahkan tugas harian guru Malaysia.
            </p>
            <div className="flex gap-4">
              <a href="https://t.me/+w2Ri8NTkpyZhOTU9" className="hover:text-white transition-colors" aria-label="Telegram">
                <Send size={20} />
              </a>
              <a href="https://facebook.com" className="hover:text-white transition-colors" aria-label="Facebook">
                <Facebook size={20} />
              </a>
            </div>
          </div>

          {/* Links */}
          <div>
            <h4 className="text-white font-bold mb-4 uppercase text-sm tracking-wider">Product</h4>
            <ul className="space-y-2 text-sm">
              <li><a href="#features" className="hover:text-brand-blue transition-colors">Features</a></li>
              <li><a href="#pricing" className="hover:text-brand-blue transition-colors">Pricing</a></li>
              <li><a href="#how-it-works" className="hover:text-brand-blue transition-colors">Cara Guna</a></li>
              <li><a href="https://chrome.google.com/webstore" className="hover:text-brand-blue transition-colors">Download</a></li>
            </ul>
          </div>

          {/* Support */}
          <div>
            <h4 className="text-white font-bold mb-4 uppercase text-sm tracking-wider">Support</h4>
            <ul className="space-y-2 text-sm">
              <li><a href="#faq" className="hover:text-brand-blue transition-colors">FAQ</a></li>
              <li><a href="#" className="hover:text-brand-blue transition-colors">Documentation</a></li>
              <li><a href="https://t.me/+w2Ri8NTkpyZhOTU9" className="hover:text-brand-blue transition-colors">Hubungi Kami</a></li>
              <li><a href="#" className="hover:text-brand-blue transition-colors">Lapor Bug</a></li>
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h4 className="text-white font-bold mb-4 uppercase text-sm tracking-wider">Legal</h4>
            <ul className="space-y-2 text-sm">
              <li><a href="#" className="hover:text-brand-blue transition-colors">Privacy Policy</a></li>
              <li><a href="#" className="hover:text-brand-blue transition-colors">Terms of Service</a></li>
            </ul>
            <div className="mt-6">
                <p className="text-xs text-gray-500">Email:</p>
                <a href="mailto:aimansic97@gmail.com" className="text-sm hover:text-brand-blue">aimansic97@gmail.com</a>
            </div>
          </div>
        </div>

        <div className="border-t border-gray-800 pt-8 text-center text-sm text-gray-500 flex flex-col md:flex-row justify-between items-center">
          <p>&copy; {new Date().getFullYear()} CikguAime. All rights reserved.</p>
          <p className="mt-2 md:mt-0">Made with ❤️ in Malaysia</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;