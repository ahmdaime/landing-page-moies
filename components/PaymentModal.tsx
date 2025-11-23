import React from 'react';
import { X, Copy, Send, Check } from 'lucide-react';

interface PaymentModalProps {
  isOpen: boolean;
  onClose: () => void;
}

const PaymentModal: React.FC<PaymentModalProps> = ({ isOpen, onClose }) => {
  const [copied, setCopied] = React.useState(false);

  if (!isOpen) return null;

  const handleCopy = () => {
    navigator.clipboard.writeText('153039127745');
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  return (
    <div className="fixed inset-0 z-[100] flex items-center justify-center p-4">
      {/* Backdrop */}
      <div 
        className="absolute inset-0 bg-black/60 backdrop-blur-sm transition-opacity"
        onClick={onClose}
      ></div>

      {/* Modal Content */}
      <div className="relative bg-white rounded-2xl shadow-2xl w-full max-w-md overflow-hidden animate-in fade-in zoom-in duration-200">
        
        {/* Header */}
        <div className="bg-brand-blue p-6 text-white flex justify-between items-start">
          <div>
            <h3 className="text-xl font-bold font-heading">Langgan PRO Version</h3>
            <p className="text-blue-100 text-sm mt-1">Langkah terakhir untuk jimat masa!</p>
          </div>
          <button 
            onClick={onClose}
            className="text-blue-100 hover:text-white transition-colors bg-white/10 rounded-full p-1"
          >
            <X size={20} />
          </button>
        </div>

        <div className="p-6 space-y-6">
          
          {/* Step 1: Payment */}
          <div>
            <div className="flex items-center gap-2 mb-3">
              <div className="w-6 h-6 rounded-full bg-blue-100 text-brand-blue flex items-center justify-center font-bold text-sm">1</div>
              <h4 className="font-bold text-gray-900">Buat Pembayaran (RM 10)</h4>
            </div>
            
            <div className="bg-gray-50 border border-gray-200 rounded-xl p-4">
              <div className="flex justify-between items-center mb-1">
                <span className="text-xs font-bold text-gray-500 uppercase tracking-wider">Maybank</span>
                <span className="text-xs font-bold text-gray-500 uppercase tracking-wider">Individual License</span>
              </div>
              
              <div className="flex items-center justify-between mt-2 mb-3">
                <code className="text-xl font-mono font-bold text-gray-900 tracking-wide">
                  153039127745
                </code>
                <button 
                  onClick={handleCopy}
                  className="p-2 hover:bg-gray-200 rounded-lg transition-colors text-gray-600"
                  title="Copy Account Number"
                >
                  {copied ? <Check size={18} className="text-green-600" /> : <Copy size={18} />}
                </button>
              </div>
              
              <div className="text-sm text-gray-600 border-t border-gray-200 pt-2">
                <p>Nama: <span className="font-semibold text-gray-900">AHMAD AIMAN MOHAMED</span></p>
              </div>
            </div>
          </div>

          {/* Step 2: Confirmation */}
          <div>
            <div className="flex items-center gap-2 mb-3">
              <div className="w-6 h-6 rounded-full bg-blue-100 text-brand-blue flex items-center justify-center font-bold text-sm">2</div>
              <h4 className="font-bold text-gray-900">Hantar Resit</h4>
            </div>
            <p className="text-sm text-gray-600 mb-3">
              Sertai channel Telegram rasmi kami dan lampirkan resit pembayaran anda di sana untuk pengaktifan lesen.
            </p>
            
            <a 
              href="https://t.me/+w2Ri8NTkpyZhOTU9" 
              target="_blank" 
              rel="noopener noreferrer"
              className="w-full flex items-center justify-center gap-2 bg-[#0088cc] text-white py-3 rounded-xl font-bold hover:bg-[#0077b5] transition-colors shadow-lg shadow-blue-200"
            >
              <Send size={18} />
              Join Telegram & Hantar Resit
            </a>
          </div>

        </div>

        <div className="bg-gray-50 p-4 text-center border-t border-gray-100">
          <p className="text-xs text-gray-500">
            Lesen akan diaktifkan dalam tempoh 24 jam selepas pengesahan.
          </p>
        </div>
      </div>
    </div>
  );
};

export default PaymentModal;