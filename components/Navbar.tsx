import React, { useState, useEffect } from 'react';
import { Menu, X, Download } from 'lucide-react';

const Navbar: React.FC = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    { name: 'Features', href: '#features' },
    { name: 'Cara Guna', href: '#how-it-works' },
    { name: 'Harga', href: '#pricing' },
    { name: 'FAQ', href: '#faq' },
  ];

  return (
    <nav className={`fixed w-full z-50 transition-all duration-300 ${isScrolled ? 'bg-white/90 backdrop-blur-md shadow-md py-3' : 'bg-transparent py-5'}`}>
      <div className="container mx-auto px-4 md:px-6 flex justify-between items-center">
        
        {/* Logo */}
        <a href="#" className="flex items-center gap-2">
          <div className="w-8 h-8 bg-brand-blue rounded-lg flex items-center justify-center text-white font-bold text-xl">
            M
          </div>
          <span className={`font-heading font-bold text-lg md:text-xl ${isScrolled ? 'text-gray-900' : 'text-gray-900'}`}>
            MOEIS Helper
          </span>
        </a>

        {/* Desktop Nav */}
        <div className="hidden md:flex items-center gap-8">
          {navLinks.map((link) => (
            <a 
              key={link.name} 
              href={link.href}
              className="text-gray-600 hover:text-brand-blue font-medium transition-colors"
            >
              {link.name}
            </a>
          ))}
          <a
            href="https://chromewebstore.google.com/detail/aopjilfeegfaadfalilcnjgehpilnenm"
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center gap-2 bg-brand-blue text-white px-5 py-2 rounded-full font-medium hover:bg-brand-dark transition-colors shadow-lg hover:shadow-xl transform hover:-translate-y-0.5"
          >
            <Download size={18} />
            Download FREE
          </a>
        </div>

        {/* Mobile Menu Button */}
        <button 
          className="md:hidden text-gray-700"
          onClick={() => setIsOpen(!isOpen)}
          aria-label="Toggle menu"
        >
          {isOpen ? <X size={28} /> : <Menu size={28} />}
        </button>
      </div>

      {/* Mobile Menu */}
      {isOpen && (
        <div className="md:hidden bg-white border-t absolute w-full shadow-lg">
          <div className="flex flex-col p-4 space-y-4">
            {navLinks.map((link) => (
              <a 
                key={link.name} 
                href={link.href}
                className="text-gray-700 font-medium py-2 border-b border-gray-100"
                onClick={() => setIsOpen(false)}
              >
                {link.name}
              </a>
            ))}
            <a
              href="https://chromewebstore.google.com/detail/aopjilfeegfaadfalilcnjgehpilnenm"
              target="_blank"
              rel="noopener noreferrer"
              className="bg-brand-blue text-white px-4 py-3 rounded-lg font-bold text-center flex items-center justify-center gap-2"
            >
              <Download size={18} />
              Download FREE Now
            </a>
          </div>
        </div>
      )}
    </nav>
  );
};

export default Navbar;