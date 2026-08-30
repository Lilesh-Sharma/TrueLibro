import { useState, useEffect } from 'react';
import BrandLogo from './BrandLogo';
import { BUSINESS_INFO } from '../data/content';
import { Phone, Mail, Clock, MessageSquare, Menu, X, ArrowRight, Shield } from 'lucide-react';

interface NavbarProps {
  onOpenConsultation: () => void;
}

export default function Navbar({ onOpenConsultation }: NavbarProps) {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    { label: 'Business Guardian', href: '#business-guardian' },
    { label: 'Wealth Guardian', href: '#wealth-guardian' },
    { label: 'International Bookkeeping', href: '#international-bookkeeping' },
    { label: 'Tech Stack', href: '#tech-stack' },
    { label: 'Certifications', href: '#certifications' },
    { label: 'Process', href: '#process' },
    { label: 'Contact', href: '#contact' },
  ];

  return (
    <header className="sticky top-0 z-40 w-full transition-all duration-300">
      {/* Top micro bar with contact info */}
      <div className="bg-slate-900 text-slate-300 text-xs py-2 px-4 border-b border-slate-800">
        <div className="max-w-7xl mx-auto flex flex-col sm:flex-row items-center justify-between gap-2">
          <div className="flex flex-wrap items-center justify-center sm:justify-start gap-4 sm:gap-6">
            <a
              href={`tel:${BUSINESS_INFO.contact.phone}`}
              className="flex items-center gap-1.5 hover:text-white transition-colors"
            >
              <Phone className="w-3.5 h-3.5 text-rose-500" />
              <span>{BUSINESS_INFO.contact.phoneFormatted}</span>
            </a>
            <a
              href={`mailto:${BUSINESS_INFO.contact.email}`}
              className="flex items-center gap-1.5 hover:text-white transition-colors"
            >
              <Mail className="w-3.5 h-3.5 text-rose-500" />
              <span>{BUSINESS_INFO.contact.email}</span>
            </a>
            <div className="hidden md:flex items-center gap-1.5 text-slate-400">
              <Clock className="w-3.5 h-3.5 text-slate-500" />
              <span>Mon-Sat: 10AM - 8PM</span>
            </div>
          </div>

          <div className="flex items-center gap-4">
            <span className="hidden lg:inline text-slate-400">
              🇮🇳 India Office • Serving Australia & Worldwide
            </span>
            <a
              href={`https://wa.me/${BUSINESS_INFO.contact.whatsapp}?text=${encodeURIComponent(
                'Hello TrueLibro Team, I am interested in your Accounting & Bookkeeping services.'
              )}`}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-1.5 text-emerald-400 hover:text-emerald-300 font-semibold transition-colors"
            >
              <MessageSquare className="w-3.5 h-3.5 text-emerald-400" />
              <span>WhatsApp Us</span>
            </a>
          </div>
        </div>
      </div>

      {/* Main navigation */}
      <nav
        className={`w-full transition-all duration-300 ${
          isScrolled
            ? 'bg-white/95 backdrop-blur-md shadow-md py-3 border-b border-slate-200/80'
            : 'bg-white py-4 border-b border-slate-200'
        }`}
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex items-center justify-between">
          <a href="#" className="flex items-center" aria-label="TrueLibro Home">
            <BrandLogo showTagline />
          </a>

          {/* Desktop Nav Links */}
          <div className="hidden xl:flex items-center gap-7 text-sm font-medium text-slate-700">
            {navLinks.map((link) => (
              <a
                key={link.href}
                href={link.href}
                className="hover:text-rose-600 transition-colors py-1 relative group"
              >
                {link.label}
                <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-rose-600 transition-all duration-200 group-hover:w-full" />
              </a>
            ))}
          </div>

          {/* Action buttons */}
          <div className="hidden sm:flex items-center gap-3">
            <a
              href="#international-bookkeeping"
              className="inline-flex items-center gap-1.5 px-4 py-2 text-xs font-bold text-slate-700 hover:text-slate-900 bg-slate-100 hover:bg-slate-200 rounded-xl transition-colors"
            >
              <Shield className="w-3.5 h-3.5 text-rose-600" />
              Offshore Team
            </a>

            <button
              onClick={onOpenConsultation}
              className="inline-flex items-center gap-2 px-4 sm:px-5 py-2.5 rounded-xl bg-gradient-to-r from-rose-600 to-rose-700 hover:from-rose-500 hover:to-rose-600 text-white font-semibold text-xs sm:text-sm shadow-md shadow-rose-600/20 hover:shadow-rose-600/30 transition-all transform hover:-translate-y-0.5"
            >
              <span>Talk to Our Team</span>
              <ArrowRight className="w-4 h-4" />
            </button>
          </div>

          {/* Mobile menu button */}
          <button
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            className="xl:hidden p-2 rounded-xl text-slate-700 hover:bg-slate-100 transition-colors"
            aria-label="Toggle navigation menu"
          >
            {isMobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>

        {/* Mobile Dropdown Menu */}
        {isMobileMenuOpen && (
          <div className="xl:hidden bg-white border-t border-slate-200 px-4 pt-4 pb-6 space-y-3 shadow-xl animate-in slide-in-from-top duration-200">
            {navLinks.map((link) => (
              <a
                key={link.href}
                href={link.href}
                onClick={() => setIsMobileMenuOpen(false)}
                className="block px-3 py-2 rounded-lg text-base font-semibold text-slate-800 hover:bg-rose-50 hover:text-rose-600 transition-colors"
              >
                {link.label}
              </a>
            ))}
            <div className="pt-3 border-t border-slate-100 flex flex-col gap-2">
              <button
                onClick={() => {
                  setIsMobileMenuOpen(false);
                  onOpenConsultation();
                }}
                className="w-full py-3 rounded-xl bg-rose-600 text-white font-bold text-center text-sm shadow-md"
              >
                Request Free Consultation
              </button>
            </div>
          </div>
        )}
      </nav>
    </header>
  );
}
