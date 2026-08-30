import { ReactNode } from 'react';
import { PARTNERSHIP_STEPS, WHO_WE_SUPPORT } from '../data/content';
import { CheckCircle2, Building2, Briefcase, TrendingUp, Users, Workflow } from 'lucide-react';

export default function WhyUsAndProcess() {
  const iconMap: Record<string, ReactNode> = {
    Building2: <Building2 className="w-6 h-6 text-rose-600" />,
    Briefcase: <Briefcase className="w-6 h-6 text-sky-600" />,
    TrendingUp: <TrendingUp className="w-6 h-6 text-emerald-600" />,
    Users: <Users className="w-6 h-6 text-amber-600" />,
  };

  return (
    <section id="process" className="py-20 bg-white text-slate-900">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Core Philosophy Banner */}
        <div className="bg-gradient-to-r from-rose-900 via-slate-900 to-slate-900 text-white rounded-3xl p-8 sm:p-12 mb-20 shadow-xl border border-rose-900/50">
          <div className="max-w-3xl mx-auto text-center space-y-4">
            <span className="text-xs font-bold uppercase tracking-widest text-rose-400">
              Our Core Operational Approach
            </span>
            <h3 className="text-2xl sm:text-3xl font-extrabold text-white">
              Accuracy. Accountability. Clear Communication.
            </h3>
            <div className="pt-2 flex flex-wrap items-center justify-center gap-3 text-sm font-semibold text-rose-200">
              <span className="bg-white/10 px-3 py-1.5 rounded-lg">1. Understand the transaction</span>
              <span className="bg-white/10 px-3 py-1.5 rounded-lg">2. Follow the process</span>
              <span className="bg-white/10 px-3 py-1.5 rounded-lg">3. Reconcile the numbers</span>
              <span className="bg-white/10 px-3 py-1.5 rounded-lg">4. Review the work</span>
              <span className="bg-white/10 px-3 py-1.5 rounded-lg">5. Communicate clearly</span>
            </div>
            <p className="text-xs sm:text-sm text-slate-300 pt-2">
              We believe good bookkeeping is not simply about entering transactions. It is about maintaining reliable financial records that accountants, auditors, and business owners can unconditionally trust.
            </p>
          </div>
        </div>

        {/* 5-Step Partnership Section */}
        <div className="mb-20">
          <div className="text-center max-w-3xl mx-auto mb-14">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-slate-100 text-slate-700 text-xs font-bold uppercase tracking-wider mb-3">
              <Workflow className="w-4 h-4 text-rose-600" />
              Onboarding & Delivery
            </div>
            <h2 className="text-3xl sm:text-4xl font-extrabold text-slate-900 tracking-tight">
              How Our Partnership Works
            </h2>
            <p className="mt-3 text-slate-600 text-base">
              Simple. Flexible. Professional. Integrate dedicated offshore accounting capacity in days.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-5 gap-6">
            {PARTNERSHIP_STEPS.map((step) => (
              <div
                key={step.step}
                className="relative bg-slate-50 border border-slate-200 rounded-2xl p-6 hover:border-rose-300 hover:shadow-md transition-all flex flex-col justify-between"
              >
                <div>
                  <div className="text-3xl font-black text-rose-600/30 mb-2 font-mono">
                    {step.step}
                  </div>
                  <h3 className="text-base font-bold text-slate-900 mb-2">
                    {step.title}
                  </h3>
                  <p className="text-xs text-slate-600 leading-relaxed">
                    {step.description}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Who We Support Section */}
        <div>
          <div className="text-center max-w-3xl mx-auto mb-12">
            <h2 className="text-3xl font-extrabold text-slate-900 tracking-tight">
              Who We Support
            </h2>
            <p className="mt-2 text-slate-600 text-sm sm:text-base">
              Built for domestic enterprises and international accounting practices worldwide.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {WHO_WE_SUPPORT.map((item, idx) => (
              <div
                key={idx}
                className="bg-white border border-slate-200 rounded-2xl p-6 hover:shadow-lg hover:border-slate-300 transition-all flex flex-col justify-between"
              >
                <div>
                  <div className="w-12 h-12 rounded-xl bg-slate-50 border border-slate-100 flex items-center justify-center mb-4">
                    {iconMap[item.icon] || <CheckCircle2 className="w-6 h-6 text-rose-600" />}
                  </div>
                  <h3 className="text-lg font-bold text-slate-900 mb-2">
                    {item.title}
                  </h3>
                  <p className="text-xs text-slate-600 leading-relaxed">
                    {item.desc}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
