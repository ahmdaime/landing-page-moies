import React, { useState } from 'react';
import { Copy, Check, MessageSquare } from 'lucide-react';

const WhatsAppTemplate: React.FC = () => {
  const [copied, setCopied] = useState(false);

  const template = `(DD/MM/YY - HARI)

Cuti Sakit/Tidak Sihat
1. Nama Murid - sebab (contoh: demam, sakit perut)

Bangun Lewat
1. Nama Murid

Ikut Keluarga Bercuti/Berkursus
1. Nama Murid - sebab (contoh: ikut ibu berkursus)

Ziarah Keluarga Sakit
1. Nama Murid

Kematian Ahli Keluarga
1. Nama Murid

Temu Janji Klinik/Hospital
1. Nama Murid

Masalah Pengangkutan
1. Nama Murid

Lain-lain
1. Nama Murid - sebab`;

  const exampleTemplate = `(27/11/24 - RABU)

Cuti Sakit/Tidak Sihat
1. Ahmad Faris - demam
2. Siti Nurhaliza - sakit kepala
3. Muhammad Haiqal - selesema

Bangun Lewat
1.

Ikut Keluarga Bercuti/Berkursus
1. Nur Aisyah - ikut ibu ke kursus

Ziarah Keluarga Sakit
1.

Kematian Ahli Keluarga
1.

Temu Janji Klinik/Hospital
1. Khairul Anuar - check up

Masalah Pengangkutan
1.

Lain-lain
1.`;

  const handleCopy = (text: string) => {
    navigator.clipboard.writeText(text);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  return (
    <section id="whatsapp-template" className="py-20 bg-gradient-to-br from-green-50 via-white to-blue-50">
      <div className="container mx-auto px-4 md:px-6">
        {/* Header */}
        <div className="text-center mb-12">
          <div className="inline-flex items-center gap-2 bg-green-100 text-green-700 px-4 py-2 rounded-full text-sm font-bold mb-4">
            <MessageSquare size={16} />
            Template WhatsApp
          </div>
          <h2 className="text-3xl md:text-4xl font-heading font-bold text-gray-900 mb-4">
            Template WhatsApp Untuk Guru
          </h2>
          <p className="text-gray-600 max-w-2xl mx-auto">
            Copy template ini dan hantar kepada ibu bapa. Mudah untuk mereka isi, mudah untuk extension proses!
          </p>
        </div>

        {/* Templates Grid */}
        <div className="grid lg:grid-cols-2 gap-8 max-w-6xl mx-auto">

          {/* Template Kosong */}
          <div className="bg-white rounded-2xl shadow-xl border border-gray-200 overflow-hidden">
            <div className="bg-gradient-to-r from-green-600 to-emerald-600 text-white p-6">
              <h3 className="text-xl font-bold mb-2">Template Kosong</h3>
              <p className="text-green-100 text-sm">Untuk dihantar kepada ibu bapa dalam group WhatsApp</p>
            </div>

            <div className="p-6">
              <div className="bg-gray-50 rounded-xl p-4 mb-4 border border-gray-200 relative">
                <pre className="text-sm text-gray-700 font-mono whitespace-pre-wrap leading-relaxed overflow-x-auto">
{template}
                </pre>
                <button
                  onClick={() => handleCopy(template)}
                  className="absolute top-3 right-3 bg-white hover:bg-gray-50 text-gray-700 px-3 py-2 rounded-lg shadow-md border border-gray-200 transition-all flex items-center gap-2 text-sm font-medium"
                >
                  {copied ? (
                    <>
                      <Check size={16} className="text-green-600" />
                      <span className="text-green-600">Copied!</span>
                    </>
                  ) : (
                    <>
                      <Copy size={16} />
                      Copy
                    </>
                  )}
                </button>
              </div>

              <div className="space-y-3">
                <div className="flex items-start gap-3">
                  <div className="flex-shrink-0 w-6 h-6 rounded-full bg-green-100 text-green-600 flex items-center justify-center text-sm font-bold">
                    1
                  </div>
                  <p className="text-sm text-gray-600">
                    <strong>Copy template</strong> di atas menggunakan butang "Copy"
                  </p>
                </div>
                <div className="flex items-start gap-3">
                  <div className="flex-shrink-0 w-6 h-6 rounded-full bg-green-100 text-green-600 flex items-center justify-center text-sm font-bold">
                    2
                  </div>
                  <p className="text-sm text-gray-600">
                    <strong>Hantar dalam group WhatsApp</strong> ibu bapa kelas anda
                  </p>
                </div>
                <div className="flex items-start gap-3">
                  <div className="flex-shrink-0 w-6 h-6 rounded-full bg-green-100 text-green-600 flex items-center justify-center text-sm font-bold">
                    3
                  </div>
                  <p className="text-sm text-gray-600">
                    <strong>Ibu bapa akan isi</strong> nama anak dan sebab ketidakhadiran
                  </p>
                </div>
              </div>
            </div>
          </div>

          {/* Contoh Template Terisi */}
          <div className="bg-white rounded-2xl shadow-xl border border-gray-200 overflow-hidden">
            <div className="bg-gradient-to-r from-blue-600 to-indigo-600 text-white p-6">
              <h3 className="text-xl font-bold mb-2">Contoh Terisi</h3>
              <p className="text-blue-100 text-sm">Contoh bagaimana ibu bapa akan isi template</p>
            </div>

            <div className="p-6">
              <div className="bg-gray-50 rounded-xl p-4 mb-4 border border-gray-200 relative">
                <pre className="text-sm text-gray-700 font-mono whitespace-pre-wrap leading-relaxed overflow-x-auto">
{exampleTemplate}
                </pre>
                <button
                  onClick={() => handleCopy(exampleTemplate)}
                  className="absolute top-3 right-3 bg-white hover:bg-gray-50 text-gray-700 px-3 py-2 rounded-lg shadow-md border border-gray-200 transition-all flex items-center gap-2 text-sm font-medium"
                >
                  {copied ? (
                    <>
                      <Check size={16} className="text-green-600" />
                      <span className="text-green-600">Copied!</span>
                    </>
                  ) : (
                    <>
                      <Copy size={16} />
                      Copy
                    </>
                  )}
                </button>
              </div>

              <div className="bg-blue-50 border border-blue-200 rounded-xl p-4">
                <p className="text-sm text-blue-800">
                  <strong className="block mb-2">💡 Tips:</strong>
                </p>
                <ul className="text-sm text-blue-700 space-y-1.5 ml-4">
                  <li className="flex items-start gap-2">
                    <span className="text-blue-500 flex-shrink-0">•</span>
                    <span>Jika tiada kes, tulis nombor sahaja (contoh: "1.")</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-blue-500 flex-shrink-0">•</span>
                    <span>Gunakan tanda "-" untuk pisahkan nama dan sebab</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-blue-500 flex-shrink-0">•</span>
                    <span>Extension akan auto-detect kategori yang betul</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-blue-500 flex-shrink-0">•</span>
                    <span><strong>Versi PRO</strong> boleh detect 98 sebab yang berbeza!</span>
                  </li>
                </ul>
              </div>
            </div>
          </div>

        </div>

        {/* Bottom CTA */}
        <div className="mt-12 text-center">
          <div className="bg-gradient-to-r from-brand-blue to-brand-accent rounded-2xl p-8 max-w-3xl mx-auto text-white shadow-2xl">
            <h3 className="text-2xl font-bold mb-3">Cuba Sekarang!</h3>
            <p className="mb-6 opacity-90">
              Download extension dan cuba template ini. Lihat betapa mudahnya proses pengisian kehadiran!
            </p>
            <a
              href="https://chromewebstore.google.com/detail/aopjilfeegfaadfalilcnjgehpilnenm"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-block bg-white text-brand-blue px-8 py-4 rounded-xl font-bold text-lg shadow-lg hover:shadow-xl hover:bg-gray-50 transition-all"
            >
              Download Extension Sekarang
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};

export default WhatsAppTemplate;
