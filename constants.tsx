import React from 'react';
import { Wand2, Brain, Zap, Eye, Shield, Wifi, Star, BarChart } from 'lucide-react';
import { FeatureItem, TestimonialItem, FAQItem, PricingTier } from './types';

export const FEATURES: FeatureItem[] = [
  {
    title: "Smart Name Matching",
    description: "Fuzzy matching tolerates typos. 'Fiyyaz' akan match dengan 'FIYYAZ NUR AMSYAR BIN...'",
    icon: <Wand2 className="w-6 h-6 text-brand-blue" />,
  },
  {
    title: "Auto-Categorization",
    description: "AI detect kategori & sebab dengan tepat: Demam → D0010075, Buat IC → J0010027.",
    icon: <Brain className="w-6 h-6 text-brand-blue" />,
  },
  {
    title: "Batch Processing",
    description: "Process 10, 20, atau 50 nama murid sekaligus dalam beberapa saat sahaja.",
    icon: <Zap className="w-6 h-6 text-brand-blue" />,
  },
  {
    title: "Preview Before Apply",
    description: "Semak semua padanan nama dan sebab sebelum apply ke sistem MOEIS.",
    icon: <Eye className="w-6 h-6 text-brand-blue" />,
  },
  {
    title: "100% Private & Secure",
    description: "FREE version memproses data secara local (100% dalam browser).",
    icon: <Shield className="w-6 h-6 text-brand-blue" />,
  },
  {
    title: "Works with Slow Internet",
    description: "Auto-retry mechanism yang bijak, menunggu MOEIS loading dropdowns.",
    icon: <Wifi className="w-6 h-6 text-brand-blue" />,
  },
  {
    title: "Support Rare Cases",
    description: "Grok AI detect ujian sekolah, buat IC, orientation day, dan kes unik lain.",
    icon: <Star className="w-6 h-6 text-brand-orange" />,
    isPro: true,
  },
  {
    title: "Usage Analytics",
    description: "Track penjimatan masa, API calls remaining dan tarikh luput lesen anda.",
    icon: <BarChart className="w-6 h-6 text-brand-orange" />,
    isPro: true,
  },
];

export const TESTIMONIALS: TestimonialItem[] = [
  {
    name: "Cikgu Nurul Ain",
    role: "Guru Kelas Tahun 3",
    school: "SK Bandar Baru",
    quote: "Sebelum ni habis 30-40 minit isi kehadiran. Sekarang 2-3 minit je! Extension ni betul-betul life-saver untuk guru kelas. Highly recommended!",
    image: "https://picsum.photos/seed/ain/100/100",
  },
  {
    name: "Ustaz Muhammad Faiz",
    role: "Guru Kelas Tahun 5",
    school: "Sekolah Agama Integrasi",
    quote: "AI dia sangat accurate! Buat IC pun detect sebagai J0010027 (Urusan Kerajaan). Sebelum ni rule-based version selalu detect salah. Worth every penny!",
    image: "https://picsum.photos/seed/faiz/100/100",
  },
  {
    name: "Cikgu Azman",
    role: "Guru Kelas Tahun 2",
    school: "SK Taman Melati",
    quote: "Setup pun senang je, dalam 5 minit dah boleh guna. Interface sangat user-friendly even untuk cikgu yang tak tech-savvy.",
    image: "https://picsum.photos/seed/azman/100/100",
  },
];

export const FAQS: FAQItem[] = [
  {
    question: "Adakah extension ini selamat?",
    answer: "Ya, 100% selamat. FREE version memproses semua data secara 'local' dalam browser anda. PRO version hanya menghantar teks WhatsApp yang dianonymize untuk pemprosesan AI, data TIDAK disimpan. Extension ini juga verified oleh Chrome Web Store.",
  },
  {
    question: "Boleh cuba FREE dulu sebelum beli PRO?",
    answer: "Sudah tentu! Kami galakkan anda download versi FREE dahulu. Bila anda sudah nampak penjimatan masa dan mahukan 'accuracy' yang lebih tinggi untuk kes-kes jarang berlaku, anda boleh upgrade ke PRO.",
  },
  {
    question: "Apa beza FREE dengan PRO?",
    answer: "FREE menggunakan 'rule-based matching' (ketepatan 80-90%) yang sesuai untuk kes biasa seperti sakit/demam. PRO menggunakan Grok AI (ketepatan ~100%) yang boleh mengesan sebab yang kompleks seperti 'Ujian Sekolah', 'Buat IC/Passport', dan belajar dari input anda.",
  },
  {
    question: "Macam mana cara bayar untuk PRO license?",
    answer: "Hubungi kami di Telegram. Pembayaran boleh dibuat melalui Online Banking/DuitNow. License key akan dihantar dalam masa 24 jam selepas pengesahan.",
  },
  {
    question: "Extension ni compatible dengan semua sekolah?",
    answer: "Ya, selagi sekolah anda menggunakan sistem MOEIS (moeispel.moe.gov.my), extension ini akan berfungsi untuk mengisi kehadiran.",
  },
];

export const PRICING_TIERS: PricingTier[] = [
  {
    name: "Basic / FREE",
    price: "RM 0",
    description: "Perfect untuk cuba & kes biasa",
    features: [
      "WhatsApp parsing",
      "Rule-based categorization",
      "Support 20+ sebab umum",
      "Preview sebelum apply",
      "100% Local Processing",
    ],
    cta: "Download FREE",
    isFree: true,
  },
  {
    name: "Individual PRO",
    price: "RM 10",
    period: "per 60 hari",
    description: "Paling popular & jimat",
    features: [
      "Semua features FREE",
      "Grok AI Categorization (100% Accurate)",
      "Detect rare cases (IC, Interview)",
      "Custom mapping learning",
      "Usage Analytics",
      "Priority Support",
    ],
    cta: "Dapatkan PRO License",
    isPopular: true,
  },
];
