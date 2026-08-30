import { useState } from 'react';
import { BUSINESS_GUARDIAN_SERVICES, WEALTH_GUARDIAN_SERVICES } from '../data/content';
import { Shield, Sparkles, Check, ArrowRight, FileCheck, Percent, HelpCircle } from 'lucide-react';

interface ServicesSectionProps {
  onOpenConsultationWithService?: (serviceName: string) => void;
}

export default function ServicesSection({ onOpenConsultationWithService }: ServicesSectionProps) {
  const [activeTab, setActiveTab] = useState<'business' | 'wealth'>('business');

  return (
    <section id="services" className="py-20 bg-slate-50 relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-12">
          <h2 className="text-3xl sm:text-4xl font-extrabold text-slate-900 tracking-tight">
            Comprehensive Financial, Tax & Wealth Solutions
          </h2>
          <p className="mt-4 text-slate-600 text-base sm:text-lg">
            From regulatory corporate compliance to multi-generational family wealth planning,
            our panel of Chartered Accountants and Financial Advisors has you covered.
          </p>

          {/* Service Vertical Toggle Tabs */}
          <div className="mt-8 inline-flex p-1.5 rounded-2xl bg-slate-200/80 border border-slate-300/80 shadow-inner">
            <button
              onClick={() => setActiveTab('business')}
              className={`flex items-center gap-2 px-6 py-3 rounded-xl text-sm font-bold transition-all ${
                activeTab === 'business'
                  ? 'bg-white text-slate-900 shadow-md'
                  : 'text-slate-600 hover:text-slate-900'
              }`}
            >
              <Shield className={`w-4 h-4 ${activeTab === 'business' ? 'text-rose-600' : 'text-slate-500'}`} />
              <span>1. Business Guardian</span>
              <span className="text-xs px-2 py-0.5 rounded-full bg-rose-100 text-rose-700 font-semibold">
                9 Services
              </span>
            </button>

            <button
              onClick={() => setActiveTab('wealth')}
              className={`flex items-center gap-2 px-6 py-3 rounded-xl text-sm font-bold transition-all ${
                activeTab === 'wealth'
                  ? 'bg-white text-slate-900 shadow-md'
                  : 'text-slate-600 hover:text-slate-900'
              }`}
            >
              <Sparkles className={`w-4 h-4 ${activeTab === 'wealth' ? 'text-amber-600' : 'text-slate-500'}`} />
              <span>2. Wealth Guardian</span>
              <span className="text-xs px-2 py-0.5 rounded-full bg-amber-100 text-amber-700 font-semibold">
                8 Services
              </span>
            </button>
          </div>
        </div>

        {/* Business Guardian Section */}
        {activeTab === 'business' && (
          <div id="business-guardian" className="space-y-8 animate-in fade-in duration-300">
            <div className="bg-rose-50/80 border border-rose-200 rounded-2xl p-6 sm:p-8 flex flex-col md:flex-row items-center justify-between gap-6">
              <div>
                <span className="text-xs font-bold uppercase tracking-wider text-rose-700 block mb-1">
                  Corporate & Regulatory Shield
                </span>
                <h3 className="text-xl sm:text-2xl font-bold text-slate-900">
                  Business Guardian Solutions
                </h3>
                <p className="text-slate-600 text-sm mt-1">
                  Dependable, expert, and high-standard accounting & statutory solutions. All mandatory books of accounts maintained for a minimum of 7 years.
                </p>
              </div>
              <button
                onClick={() => onOpenConsultationWithService?.('Business Guardian (All Services)')}
                className="shrink-0 px-6 py-3 rounded-xl bg-slate-900 hover:bg-slate-800 text-white font-semibold text-sm transition-colors flex items-center gap-2"
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
                  className="bg-white rounded-2xl p-6 border border-slate-200 hover:border-rose-400 hover:shadow-lg transition-all duration-200 flex flex-col justify-between"
                >
                  <div>
                    <div className="flex items-center justify-between mb-3">
                      <span className="text-[11px] font-bold px-2.5 py-1 rounded-full bg-rose-50 text-rose-700 border border-rose-100">
                        {srv.badge}
                      </span>
                      <FileCheck className="w-4 h-4 text-slate-400" />
                    </div>

                    <h4 className="text-lg font-bold text-slate-900 mb-2">
                      {srv.title}
                    </h4>

                    <p className="text-xs text-slate-600 mb-4 leading-relaxed">
                      {srv.description}
                    </p>

                    {srv.features && (
                      <ul className="space-y-2 border-t border-slate-100 pt-3">
                        {srv.features.map((feat, fIdx) => (
                          <li key={fIdx} className="flex items-start gap-2 text-xs text-slate-700">
                            <Check className="w-3.5 h-3.5 text-rose-600 shrink-0 mt-0.5" />
                            <span>{feat}</span>
                          </li>
                        ))}
                      </ul>
                    )}
                  </div>

                  <div className="mt-6 pt-4 border-t border-slate-100 flex items-center justify-between">
                    <button
                      type="button"
                      onClick={() => onOpenConsultationWithService?.(srv.title)}
                      className="text-xs font-bold text-rose-600 hover:text-rose-700 flex items-center gap-1 group"
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
            <div className="bg-amber-50/80 border border-amber-200 rounded-2xl p-6 sm:p-8 flex flex-col md:flex-row items-center justify-between gap-6">
              <div>
                <span className="text-xs font-bold uppercase tracking-wider text-amber-700 block mb-1">
                  Personal Finance & Wealth Creation
                </span>
                <h3 className="text-xl sm:text-2xl font-bold text-slate-900">
                  Wealth Guardian Advisory
                </h3>
                <p className="text-slate-600 text-sm mt-1">
                  Expert guidance on personal wealth management, milestone protection, retirement funds, and loans.
                </p>
              </div>
              <div className="shrink-0 flex items-center gap-3">
                <div className="px-4 py-2 rounded-xl bg-amber-100 border border-amber-300 text-amber-900 text-xs font-bold flex items-center gap-1.5">
                  <Percent className="w-4 h-4 text-amber-700" />
                  <span>Up to 35% Off Vehicle Insurance</span>
                </div>
                <button
                  onClick={() => onOpenConsultationWithService?.('Wealth Guardian Advisory')}
                  className="px-6 py-3 rounded-xl bg-slate-900 hover:bg-slate-800 text-white font-semibold text-sm transition-colors flex items-center gap-2"
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
                  className="bg-white rounded-2xl p-6 border border-slate-200 hover:border-amber-400 hover:shadow-lg transition-all duration-200 flex flex-col justify-between"
                >
                  <div>
                    <div className="flex items-center justify-between mb-3">
                      <span className="text-[11px] font-bold px-2.5 py-1 rounded-full bg-amber-50 text-amber-800 border border-amber-200">
                        {srv.badge}
                      </span>
                      <Sparkles className="w-4 h-4 text-amber-500" />
                    </div>

                    <h4 className="text-base font-bold text-slate-900 mb-2">
                      {srv.title}
                    </h4>

                    <p className="text-xs text-slate-600 mb-4 leading-relaxed">
                      {srv.description}
                    </p>

                    {srv.features && (
                      <ul className="space-y-2 border-t border-slate-100 pt-3">
                        {srv.features.map((feat, fIdx) => (
                          <li key={fIdx} className="flex items-start gap-1.5 text-xs text-slate-700">
                            <Check className="w-3.5 h-3.5 text-amber-600 shrink-0 mt-0.5" />
                            <span>{feat}</span>
                          </li>
                        ))}
                      </ul>
                    )}
                  </div>

                  <div className="mt-6 pt-4 border-t border-slate-100 flex items-center justify-between">
                    <button
                      type="button"
                      onClick={() => onOpenConsultationWithService?.(srv.title)}
                      className="text-xs font-bold text-amber-700 hover:text-amber-800 flex items-center gap-1 group"
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
