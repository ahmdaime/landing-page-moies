import React, { useState } from 'react';
import { X, Copy, Check, Upload, Loader2 } from 'lucide-react';
import { submitPurchase } from '../supabase-purchase';

interface PaymentModalProps {
  isOpen: boolean;
  onClose: () => void;
}

type Step = 'payment' | 'form' | 'success';

const PaymentModal: React.FC<PaymentModalProps> = ({ isOpen, onClose }) => {
  const [copied, setCopied] = useState(false);
  const [step, setStep] = useState<Step>('payment');
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [error, setError] = useState<string | null>(null);

  // Form state
  const [formData, setFormData] = useState({
    fullName: '',
    email: '',
    phone: ''
  });
  const [receiptFile, setReceiptFile] = useState<File | null>(null);

  if (!isOpen) return null;

  const handleCopy = () => {
    navigator.clipboard.writeText('153039127745');
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  const handleFileChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0];
    if (file) {
      // Validate file type
      const validTypes = ['image/jpeg', 'image/png', 'image/webp', 'application/pdf'];
      if (!validTypes.includes(file.type)) {
        setError('Sila upload fail JPG, PNG, WebP atau PDF sahaja.');
        return;
      }
      // Validate file size (5MB)
      if (file.size > 5 * 1024 * 1024) {
        setError('Saiz fail melebihi 5MB.');
        return;
      }
      setReceiptFile(file);
      setError(null);
    }
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setError(null);

    // Validate
    if (!formData.fullName.trim()) {
      setError('Sila masukkan nama penuh.');
      return;
    }
    if (!formData.email.trim() || !formData.email.includes('@')) {
      setError('Sila masukkan email yang sah.');
      return;
    }
    if (!receiptFile) {
      setError('Sila upload resit pembayaran.');
      return;
    }

    setIsSubmitting(true);

    try {
      await submitPurchase({
        productSlug: 'moeis-kehadiran',
        customerName: formData.fullName.trim(),
        customerEmail: formData.email.trim(),
        customerPhone: formData.phone.trim() || undefined,
        receiptFile: receiptFile
      });

      setStep('success');
    } catch (err: any) {
      setError(err.message || 'Gagal menghantar. Sila cuba lagi.');
    } finally {
      setIsSubmitting(false);
    }
  };

  const handleClose = () => {
    setStep('payment');
    setFormData({ fullName: '', email: '', phone: '' });
    setReceiptFile(null);
    setError(null);
    onClose();
  };

  return (
    <div className="fixed inset-0 z-[100] flex items-center justify-center p-4">
      {/* Backdrop */}
      <div
        className="absolute inset-0 bg-black/60 backdrop-blur-sm transition-opacity"
        onClick={handleClose}
      ></div>

      {/* Modal Content */}
      <div className="relative bg-white rounded-2xl shadow-2xl w-full max-w-md overflow-hidden animate-in fade-in zoom-in duration-200 max-h-[90vh] overflow-y-auto">

        {/* Header */}
        <div className="bg-brand-blue p-6 text-white flex justify-between items-start sticky top-0">
          <div>
            <h3 className="text-xl font-bold font-heading">
              {step === 'success' ? 'Berjaya!' : 'Langgan PRO Version'}
            </h3>
            <p className="text-blue-100 text-sm mt-1">
              {step === 'payment' && 'Langkah 1: Buat pembayaran'}
              {step === 'form' && 'Langkah 2: Isi maklumat & upload resit'}
              {step === 'success' && 'Permohonan anda telah dihantar'}
            </p>
          </div>
          <button
            onClick={handleClose}
            className="text-blue-100 hover:text-white transition-colors bg-white/10 rounded-full p-1"
          >
            <X size={20} />
          </button>
        </div>

        <div className="p-6">

          {/* Step 1: Payment Info */}
          {step === 'payment' && (
            <div className="space-y-6">
              <div>
                <div className="flex items-center gap-2 mb-3">
                  <div className="w-6 h-6 rounded-full bg-blue-100 text-brand-blue flex items-center justify-center font-bold text-sm">1</div>
                  <h4 className="font-bold text-gray-900">Buat Pembayaran (RM 10)</h4>
                </div>

                <div className="bg-gray-50 border border-gray-200 rounded-xl p-4">
                  <div className="flex justify-between items-center mb-1">
                    <span className="text-xs font-bold text-gray-500 uppercase tracking-wider">Maybank</span>
                    <span className="text-xs font-bold text-gray-500 uppercase tracking-wider">60 Hari License</span>
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

              <button
                onClick={() => setStep('form')}
                className="w-full bg-brand-blue text-white py-3 rounded-xl font-bold hover:bg-blue-700 transition-colors"
              >
                Saya Sudah Bayar &rarr;
              </button>
            </div>
          )}

          {/* Step 2: Form */}
          {step === 'form' && (
            <form onSubmit={handleSubmit} className="space-y-4">
              {error && (
                <div className="bg-red-50 border border-red-200 text-red-700 px-4 py-3 rounded-lg text-sm">
                  {error}
                </div>
              )}

              <div>
                <label className="block text-sm font-medium text-gray-700 mb-1">
                  Nama Penuh *
                </label>
                <input
                  type="text"
                  value={formData.fullName}
                  onChange={(e) => setFormData({...formData, fullName: e.target.value})}
                  placeholder="Contoh: Ahmad bin Ali"
                  className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-brand-blue focus:border-transparent"
                  required
                />
              </div>

              <div>
                <label className="block text-sm font-medium text-gray-700 mb-1">
                  Email *
                </label>
                <input
                  type="email"
                  value={formData.email}
                  onChange={(e) => setFormData({...formData, email: e.target.value})}
                  placeholder="contoh@email.com"
                  className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-brand-blue focus:border-transparent"
                  required
                />
              </div>

              <div>
                <label className="block text-sm font-medium text-gray-700 mb-1">
                  No. Telefon (Optional)
                </label>
                <input
                  type="tel"
                  value={formData.phone}
                  onChange={(e) => setFormData({...formData, phone: e.target.value})}
                  placeholder="012-3456789"
                  className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-brand-blue focus:border-transparent"
                />
              </div>

              <div>
                <label className="block text-sm font-medium text-gray-700 mb-1">
                  Upload Resit Pembayaran *
                </label>
                <div className="relative border-2 border-dashed border-gray-300 rounded-lg p-4 text-center hover:border-brand-blue transition-colors">
                  <input
                    type="file"
                    accept="image/*,.pdf"
                    onChange={handleFileChange}
                    className="absolute inset-0 w-full h-full opacity-0 cursor-pointer"
                  />
                  {receiptFile ? (
                    <div className="flex items-center justify-center gap-2 text-green-600">
                      <Check size={20} />
                      <span className="font-medium">{receiptFile.name}</span>
                    </div>
                  ) : (
                    <div className="text-gray-500">
                      <Upload size={24} className="mx-auto mb-2" />
                      <p className="text-sm">Klik untuk upload resit</p>
                      <p className="text-xs text-gray-400">JPG, PNG atau PDF (Max 5MB)</p>
                    </div>
                  )}
                </div>
              </div>

              <div className="flex gap-3 pt-2">
                <button
                  type="button"
                  onClick={() => setStep('payment')}
                  className="flex-1 bg-gray-100 text-gray-700 py-3 rounded-xl font-medium hover:bg-gray-200 transition-colors"
                >
                  &larr; Kembali
                </button>
                <button
                  type="submit"
                  disabled={isSubmitting}
                  className="flex-1 bg-brand-blue text-white py-3 rounded-xl font-bold hover:bg-blue-700 transition-colors disabled:opacity-50 disabled:cursor-not-allowed flex items-center justify-center gap-2"
                >
                  {isSubmitting ? (
                    <>
                      <Loader2 size={18} className="animate-spin" />
                      Menghantar...
                    </>
                  ) : (
                    'Hantar'
                  )}
                </button>
              </div>
            </form>
          )}

          {/* Step 3: Success */}
          {step === 'success' && (
            <div className="text-center space-y-4">
              <div className="w-16 h-16 bg-green-100 rounded-full flex items-center justify-center mx-auto">
                <Check size={32} className="text-green-600" />
              </div>

              <div>
                <h4 className="text-lg font-bold text-gray-900">Permohonan Berjaya!</h4>
                <p className="text-gray-600 mt-2">
                  License key akan dihantar ke email anda selepas pengesahan admin.
                </p>
              </div>

              <div className="bg-blue-50 border border-blue-200 rounded-lg p-4 text-left">
                <p className="text-sm text-blue-800">
                  <strong>Nota:</strong> Proses pengesahan biasanya mengambil masa kurang dari 24 jam.
                  Sila semak inbox dan folder spam anda.
                </p>
              </div>

              <a
                href="https://t.me/+w2Ri8NTkpyZhOTU9"
                target="_blank"
                rel="noopener noreferrer"
                className="block w-full bg-[#0088cc] text-white py-3 rounded-xl font-bold hover:bg-[#0077b5] transition-colors"
              >
                Join Telegram Support Group
              </a>

              <button
                onClick={handleClose}
                className="w-full bg-gray-100 text-gray-700 py-3 rounded-xl font-medium hover:bg-gray-200 transition-colors"
              >
                Tutup
              </button>
            </div>
          )}

        </div>
      </div>
    </div>
  );
};

export default PaymentModal;
