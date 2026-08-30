import BrandLogo from './BrandLogo';
import { BUSINESS_INFO } from '../data/content';
import { Phone, Mail, MapPin, ShieldCheck, Heart } from 'lucide-react';

export default function Footer() {
  return (
    <footer className="bg-slate-950 text-slate-400 text-xs border-t border-slate-900">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-10">
          {/* Col 1 & 2: Brand & Mission */}
          <div className="lg:col-span-2 space-y-4">
            <BrandLogo isLight showTagline />
            <p className="text-slate-400 text-xs leading-relaxed max-w-sm">
              {BUSINESS_INFO.tagline}. High-standard accounting, corporate statutory compliance, and dedicated offshore bookkeeping support for Australian and global practices.
            </p>
            <div className="p-3 rounded-xl bg-slate-900 border border-slate-800 text-slate-300 text-[11px]">
              <strong className="text-white block mb-0.5">"{BUSINESS_INFO.motto}"</strong>
              Mandatory books of accounts maintained for a minimum of 7 years.
            </div>
          </div>

          {/* Col 3: Business Guardian */}
          <div className="space-y-3">
            <h4 className="text-white font-bold text-sm tracking-wide">Business Guardian</h4>
            <ul className="space-y-2">
              <li><a href="#business-guardian" className="hover:text-rose-400 transition-colors">GST Registration & Compliance</a></li>
              <li><a href="#business-guardian" className="hover:text-rose-400 transition-colors">Company Incorporation</a></li>
              <li><a href="#business-guardian" className="hover:text-rose-400 transition-colors">Taxation & ITR Advisory</a></li>
              <li><a href="#business-guardian" className="hover:text-rose-400 transition-colors">FSSAI License</a></li>
              <li><a href="#business-guardian" className="hover:text-rose-400 transition-colors">MSME - Udyam Aadhar</a></li>
              <li><a href="#business-guardian" className="hover:text-rose-400 transition-colors">IEC Import & Export Code</a></li>
              <li><a href="#business-guardian" className="hover:text-rose-400 transition-colors">Trademark Registration</a></li>
            </ul>
          </div>

          {/* Col 4: Wealth & International */}
          <div className="space-y-3">
            <h4 className="text-white font-bold text-sm tracking-wide">Wealth & Offshore</h4>
            <ul className="space-y-2">
              <li><a href="#international-bookkeeping" className="hover:text-rose-400 transition-colors">Australian Practice Support</a></li>
              <li><a href="#international-bookkeeping" className="hover:text-rose-400 transition-colors">Xero & QBO Bookkeeping</a></li>
              <li><a href="#international-bookkeeping" className="hover:text-rose-400 transition-colors">Bank & Credit Card Recs</a></li>
              <li><a href="#international-bookkeeping" className="hover:text-rose-400 transition-colors">BAS Preparation Workpapers</a></li>
              <li><a href="#wealth-guardian" className="hover:text-rose-400 transition-colors">Vehicle Insurance (Up to 35% off)</a></li>
              <li><a href="#wealth-guardian" className="hover:text-rose-400 transition-colors">Health & Child Education Plans</a></li>
              <li><a href="#wealth-guardian" className="hover:text-rose-400 transition-colors">Home & Business Loans</a></li>
            </ul>
          </div>

          {/* Col 5: Contact Coordinates */}
          <div className="space-y-3">
            <h4 className="text-white font-bold text-sm tracking-wide">Direct Contact</h4>
            <div className="space-y-2 text-slate-300">
              <div className="flex items-start gap-2">
                <MapPin className="w-4 h-4 text-rose-500 shrink-0 mt-0.5" />
                <span className="text-[11px] leading-tight">
                  Khorabar Urf Soobabazar, Deoria Road, Gorakhpur - 273010, UP, India
                </span>
              </div>
              <div className="flex items-center gap-2">
                <Phone className="w-4 h-4 text-rose-500 shrink-0" />
                <a href={`tel:${BUSINESS_INFO.contact.phone}`} className="hover:text-white transition-colors">
                  {BUSINESS_INFO.contact.phoneFormatted}
                </a>
              </div>
              <div className="flex items-center gap-2">
                <Mail className="w-4 h-4 text-rose-500 shrink-0" />
                <a href={`mailto:${BUSINESS_INFO.contact.email}`} className="hover:text-white transition-colors">
                  {BUSINESS_INFO.contact.email}
                </a>
              </div>
            </div>

            <div className="pt-2 flex items-center gap-2 text-emerald-400 text-[11px]">
              <ShieldCheck className="w-4 h-4" />
              <span>Certified Xero & QBO ProAdvisors</span>
            </div>
          </div>
        </div>

        {/* Developer Credit & Portfolio Referral Banner */}
        <div className="mt-12 pt-8 border-t border-slate-800/80">
          <div className="rounded-2xl bg-slate-800/60 border border-slate-700/60 p-5 sm:p-6 flex flex-col sm:flex-row items-center justify-between gap-4">
            <div className="flex items-center gap-3 text-center sm:text-left">
              <div className="w-10 h-10 rounded-xl bg-slate-700/80 border border-slate-600/60 flex items-center justify-center text-slate-300 font-bold text-sm shrink-0">
                LS
              </div>
              <div>
                <p className="text-xs sm:text-sm font-semibold text-slate-200">
                  To create a website like this, reach <strong className="text-white">Lilesh Sharma</strong>
                </p>
                <p className="text-[11px] text-slate-400 mt-0.5">
                  Web Development, Modern UI/UX Design & Practice Solutions
                </p>
              </div>
            </div>

            <a
              href="https://www.linkedin.com/in/lilesh-sharma-391473150/"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 px-4 py-2.5 rounded-xl bg-slate-700 hover:bg-slate-600 text-slate-100 hover:text-white text-xs font-semibold transition-all border border-slate-600/70 shadow-sm shrink-0"
            >
              <span>Connect on LinkedIn</span>
              <svg className="w-3.5 h-3.5 fill-current" viewBox="0 0 24 24">
                <path d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.79-1.75-1.764s.784-1.764 1.75-1.764 1.75.79 1.75 1.764-.783 1.764-1.75 1.764zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z"/>
              </svg>
            </a>
          </div>
        </div>

        {/* Bottom copyright */}
        <div className="mt-8 pt-6 border-t border-slate-800/60 flex flex-col sm:flex-row items-center justify-between gap-4 text-slate-400 text-[11px]">
          <p>© {new Date().getFullYear()} TrueLibro (True Libro). All rights reserved.</p>
          <div className="flex flex-wrap items-center justify-center gap-3 text-slate-400">
            <span>Udyam Registered</span>
            <span>•</span>
            <span>GST Practitioner</span>
            <span>•</span>
            <span>PAN Registered Business</span>
          </div>
        </div>
      </div>
    </footer>
  );
}
