import { useState } from 'react';
import { BUSINESS_GUARDIAN_SERVICES, WEALTH_GUARDIAN_SERVICES } from '../data/content';
import { Shield, Sparkles, Check, ArrowRight, FileCheck, Percent, HelpCircle } from 'lucide-react';

interface ServicesSectionProps {
  onOpenConsultationWithService?: (serviceName: string) => void;
}

export default function ServicesSection({ onOpenConsultationWithService }: ServicesSectionProps) {
  const [activeTab, setActiveTab] = useState<'business' | 'wealth'>('business');

  return (
    <section id="services" className="py-20 bg-slate-50 dark:bg-black text-slate-900 dark:text-zinc-100 relative overflow-hidden transition-colors">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-12">
          <h2 className="text-3xl sm:text-4xl font-extrabold text-slate-900 dark:text-white tracking-tight">
            Comprehensive Financial, Tax & Wealth Solutions
          </h2>
          <p className="mt-4 text-slate-600 dark:text-zinc-300 text-base sm:text-lg">
            From regulatory corporate compliance to multi-generational family wealth planning,
            our panel of Chartered Accountants and Financial Advisors has you covered.
          </p>

          {/* Service Vertical Toggle Tabs */}
          <div className="mt-8 inline-flex p-1.5 rounded-2xl bg-slate-200/80 dark:bg-zinc-900 border border-slate-300/80 dark:border-zinc-800 shadow-inner">
            <button
              onClick={() => setActiveTab('business')}
              className={`flex items-center gap-2 px-6 py-3 rounded-xl text-sm font-bold transition-all cursor-pointer ${
                activeTab === 'business'
                  ? 'bg-white dark:bg-black text-slate-900 dark:text-white shadow-md'
                  : 'text-slate-600 dark:text-zinc-400 hover:text-slate-900 dark:hover:text-white'
              }`}
            >
              <Shield className={`w-4 h-4 ${activeTab === 'business' ? 'text-rose-600 dark:text-rose-400' : 'text-slate-500 dark:text-zinc-500'}`} />
              <span>1. Business Guardian</span>
              <span className="text-xs px-2 py-0.5 rounded-full bg-rose-100 dark:bg-rose-950/60 text-rose-700 dark:text-rose-300 font-semibold border border-rose-200 dark:border-rose-800/80">
                9 Services
              </span>
            </button>

            <button
              onClick={() => setActiveTab('wealth')}
              className={`flex items-center gap-2 px-6 py-3 rounded-xl text-sm font-bold transition-all cursor-pointer ${
                activeTab === 'wealth'
                  ? 'bg-white dark:bg-black text-slate-900 dark:text-white shadow-md'
                  : 'text-slate-600 dark:text-zinc-400 hover:text-slate-900 dark:hover:text-white'
              }`}
            >
              <Sparkles className={`w-4 h-4 ${activeTab === 'wealth' ? 'text-amber-600 dark:text-amber-400' : 'text-slate-500 dark:text-zinc-500'}`} />
              <span>2. Wealth Guardian</span>
              <span className="text-xs px-2 py-0.5 rounded-full bg-amber-100 dark:bg-amber-950/60 text-amber-700 dark:text-amber-300 font-semibold border border-amber-200 dark:border-amber-800/80">
                8 Services
              </span>
            </button>
          </div>
        </div>

        {/* Business Guardian Section */}
        {activeTab === 'business' && (
          <div id="business-guardian" className="space-y-8 animate-in fade-in duration-300">
            <div className="bg-rose-50/80 dark:bg-zinc-950 border border-rose-200 dark:border-rose-900/40 rounded-2xl p-6 sm:p-8 flex flex-col md:flex-row items-center justify-between gap-6">
              <div>
                <span className="text-xs font-bold uppercase tracking-wider text-rose-700 dark:text-rose-400 block mb-1">
                  Corporate & Regulatory Shield
                </span>
                <h3 className="text-xl sm:text-2xl font-bold text-slate-900 dark:text-white">
                  Business Guardian Solutions
                </h3>
                <p className="text-slate-600 dark:text-zinc-300 text-sm mt-1">
                  Dependable, expert, and high-standard accounting & statutory solutions. All mandatory books of accounts maintained for a minimum of 7 years.
                </p>
              </div>
              <button
                onClick={() => onOpenConsultationWithService?.('Business Guardian (All Services)')}
                className="shrink-0 px-6 py-3 rounded-xl bg-slate-900 dark:bg-rose-600 hover:bg-slate-800 dark:hover:bg-rose-500 text-white font-semibold text-sm transition-colors flex items-center gap-2 shadow-sm cursor-pointer"
              >
                <span>Consult a CA Today</span>
                <ArrowRight className="w-4 h-4" />
              </button>
            </div>

            {/* Grid of 9 Business Guardian Services */}
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {BUSINESS_GUARDIAN_SERVICES.map((srv) => (
                <div
                  key={srv.id}
                  id={`service-${srv.id}`}
                  className="bg-white dark:bg-zinc-950 rounded-2xl p-6 border border-slate-200 dark:border-zinc-800 hover:border-rose-400 dark:hover:border-rose-500/60 hover:shadow-lg transition-all duration-200 flex flex-col justify-between"
                >
                  <div>
                    <div className="flex items-center justify-between mb-3">
                      <span className="text-[11px] font-bold px-2.5 py-1 rounded-full bg-rose-50 dark:bg-rose-950/60 text-rose-700 dark:text-rose-300 border border-rose-100 dark:border-rose-800/80">
                        {srv.badge}
                      </span>
                      <FileCheck className="w-4 h-4 text-slate-400 dark:text-zinc-500" />
                    </div>

                    <h4 className="text-lg font-bold text-slate-900 dark:text-white mb-2">
                      {srv.title}
                    </h4>

                    <p className="text-xs text-slate-600 dark:text-zinc-300 mb-4 leading-relaxed">
                      {srv.description}
                    </p>

                    {srv.features && (
                      <ul className="space-y-2 border-t border-slate-100 dark:border-zinc-850 pt-3">
                        {srv.features.map((feat, fIdx) => (
                          <li key={fIdx} className="flex items-start gap-2 text-xs text-slate-700 dark:text-zinc-200">
                            <Check className="w-3.5 h-3.5 text-rose-600 dark:text-rose-400 shrink-0 mt-0.5" />
                            <span>{feat}</span>
                          </li>
                        ))}
                      </ul>
                    )}
                  </div>

                  <div className="mt-6 pt-4 border-t border-slate-100 dark:border-zinc-850 flex items-center justify-between">
                    <button
                      type="button"
                      onClick={() => onOpenConsultationWithService?.(srv.title)}
                      className="text-xs font-bold text-rose-600 dark:text-rose-400 hover:text-rose-700 dark:hover:text-rose-300 flex items-center gap-1 group cursor-pointer"
                    >
                      <span>Inquire for {srv.title.split(' ')[0]}</span>
                      <ArrowRight className="w-3.5 h-3.5 group-hover:translate-x-0.5 transition-transform" />
                    </button>
                  </div>
                </div>
              ))}
            </div>
          </div>
        )}

        {/* Wealth Guardian Section */}
        {activeTab === 'wealth' && (
          <div id="wealth-guardian" className="space-y-8 animate-in fade-in duration-300">
            <div className="bg-amber-50/80 dark:bg-zinc-950 border border-amber-200 dark:border-amber-900/40 rounded-2xl p-6 sm:p-8 flex flex-col md:flex-row items-center justify-between gap-6">
              <div>
                <span className="text-xs font-bold uppercase tracking-wider text-amber-700 dark:text-amber-400 block mb-1">
                  Personal Finance & Wealth Creation
                </span>
                <h3 className="text-xl sm:text-2xl font-bold text-slate-900 dark:text-white">
                  Wealth Guardian Advisory
                </h3>
                <p className="text-slate-600 dark:text-zinc-300 text-sm mt-1">
                  Expert guidance on personal wealth management, milestone protection, retirement funds, and loans.
                </p>
              </div>
              <div className="shrink-0 flex items-center gap-3">
                <div className="px-4 py-2 rounded-xl bg-amber-100 dark:bg-amber-950/60 border border-amber-300 dark:border-amber-800/80 text-amber-900 dark:text-amber-300 text-xs font-bold flex items-center gap-1.5">
                  <Percent className="w-4 h-4 text-amber-700 dark:text-amber-400" />
                  <span>Up to 35% Off Vehicle Insurance</span>
                </div>
                <button
                  onClick={() => onOpenConsultationWithService?.('Wealth Guardian Advisory')}
                  className="px-6 py-3 rounded-xl bg-slate-900 dark:bg-amber-600 hover:bg-slate-800 dark:hover:bg-amber-500 text-white font-semibold text-sm transition-colors flex items-center gap-2 shadow-sm cursor-pointer"
                >
                  <span>Book Wealth Plan</span>
                  <ArrowRight className="w-4 h-4" />
                </button>
              </div>
            </div>

            {/* Grid of 8 Wealth Guardian Services */}
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
              {WEALTH_GUARDIAN_SERVICES.map((srv) => (
                <div
                  key={srv.id}
                  id={`wealth-service-${srv.id}`}
                  className="bg-white dark:bg-zinc-950 rounded-2xl p-6 border border-slate-200 dark:border-zinc-800 hover:border-amber-400 dark:hover:border-amber-500/60 hover:shadow-lg transition-all duration-200 flex flex-col justify-between"
                >
                  <div>
                    <div className="flex items-center justify-between mb-3">
                      <span className="text-[11px] font-bold px-2.5 py-1 rounded-full bg-amber-50 dark:bg-amber-950/60 text-amber-800 dark:text-amber-300 border border-amber-200 dark:border-amber-800/80">
                        {srv.badge}
                      </span>
                      <Sparkles className="w-4 h-4 text-amber-500" />
                    </div>

                    <h4 className="text-base font-bold text-slate-900 dark:text-white mb-2">
                      {srv.title}
                    </h4>

                    <p className="text-xs text-slate-600 dark:text-zinc-300 mb-4 leading-relaxed">
                      {srv.description}
                    </p>

                    {srv.features && (
                      <ul className="space-y-2 border-t border-slate-100 dark:border-zinc-850 pt-3">
                        {srv.features.map((feat, fIdx) => (
                          <li key={fIdx} className="flex items-start gap-1.5 text-xs text-slate-700 dark:text-zinc-200">
                            <Check className="w-3.5 h-3.5 text-amber-600 dark:text-amber-400 shrink-0 mt-0.5" />
                            <span>{feat}</span>
                          </li>
                        ))}
                      </ul>
                    )}
                  </div>

                  <div className="mt-6 pt-4 border-t border-slate-100 dark:border-zinc-850 flex items-center justify-between">
                    <button
                      type="button"
                      onClick={() => onOpenConsultationWithService?.(srv.title)}
                      className="text-xs font-bold text-amber-700 dark:text-amber-400 hover:text-amber-800 dark:hover:text-amber-300 flex items-center gap-1 group cursor-pointer"
                    >
                      <span>Get Plan Details</span>
                      <ArrowRight className="w-3.5 h-3.5 group-hover:translate-x-0.5 transition-transform" />
                    </button>
                  </div>
                </div>
              ))}
            </div>
          </div>
        )}
      </div>
    </section>
  );
}
