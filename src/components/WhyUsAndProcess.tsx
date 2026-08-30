import { ReactNode } from 'react';
import { PARTNERSHIP_STEPS, WHO_WE_SUPPORT } from '../data/content';
import { CheckCircle2, Building2, Briefcase, TrendingUp, Users, Workflow } from 'lucide-react';

export default function WhyUsAndProcess() {
  const iconMap: Record<string, ReactNode> = {
    Building2: <Building2 className="w-6 h-6 text-rose-600 dark:text-rose-400" />,
    Briefcase: <Briefcase className="w-6 h-6 text-sky-600 dark:text-sky-400" />,
    TrendingUp: <TrendingUp className="w-6 h-6 text-emerald-600 dark:text-emerald-400" />,
    Users: <Users className="w-6 h-6 text-amber-600 dark:text-amber-400" />,
  };

  return (
    <section id="process" className="py-20 bg-white dark:bg-black text-slate-900 dark:text-zinc-100 transition-colors">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Core Philosophy Banner */}
        <div className="bg-gradient-to-r from-rose-50 via-slate-100 to-slate-50 dark:from-zinc-950 dark:via-zinc-950 dark:to-zinc-950 text-slate-900 dark:text-zinc-100 rounded-3xl p-8 sm:p-12 mb-20 shadow-sm border border-rose-200/80 dark:border-rose-900/40">
          <div className="max-w-3xl mx-auto text-center space-y-4">
            <span className="text-xs font-bold uppercase tracking-widest text-rose-700 dark:text-rose-400">
              Our Core Operational Approach
            </span>
            <h3 className="text-2xl sm:text-3xl font-extrabold text-slate-900 dark:text-white">
              Accuracy. Accountability. Clear Communication.
            </h3>
            <div className="pt-2 flex flex-wrap items-center justify-center gap-3 text-xs sm:text-sm font-semibold text-slate-800 dark:text-zinc-200">
              <span className="bg-white dark:bg-black px-3 py-1.5 rounded-lg border border-slate-200 dark:border-zinc-800 shadow-xs">1. Understand the transaction</span>
              <span className="bg-white dark:bg-black px-3 py-1.5 rounded-lg border border-slate-200 dark:border-zinc-800 shadow-xs">2. Follow the process</span>
              <span className="bg-white dark:bg-black px-3 py-1.5 rounded-lg border border-slate-200 dark:border-zinc-800 shadow-xs">3. Reconcile the numbers</span>
              <span className="bg-white dark:bg-black px-3 py-1.5 rounded-lg border border-slate-200 dark:border-zinc-800 shadow-xs">4. Review the work</span>
              <span className="bg-white dark:bg-black px-3 py-1.5 rounded-lg border border-slate-200 dark:border-zinc-800 shadow-xs">5. Communicate clearly</span>
            </div>
            <p className="text-xs sm:text-sm text-slate-600 dark:text-zinc-300 pt-2">
              We believe good bookkeeping is not simply about entering transactions. It is about maintaining reliable financial records that accountants, auditors, and business owners can unconditionally trust.
            </p>
          </div>
        </div>

        {/* 5-Step Partnership Section */}
        <div className="mb-20">
          <div className="text-center max-w-3xl mx-auto mb-14">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-slate-100 dark:bg-zinc-900 text-slate-700 dark:text-zinc-300 text-xs font-bold uppercase tracking-wider mb-3 border border-slate-200 dark:border-zinc-800">
              <Workflow className="w-4 h-4 text-rose-600 dark:text-rose-400" />
              Onboarding & Delivery
            </div>
            <h2 className="text-3xl sm:text-4xl font-extrabold text-slate-900 dark:text-white tracking-tight">
              How Our Partnership Works
            </h2>
            <p className="mt-3 text-slate-600 dark:text-zinc-300 text-base">
              Simple. Flexible. Professional. Integrate dedicated offshore accounting capacity in days.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-5 gap-6">
            {PARTNERSHIP_STEPS.map((step) => (
              <div
                key={step.step}
                className="relative bg-slate-50 dark:bg-zinc-950 border border-slate-200 dark:border-zinc-800 rounded-2xl p-6 hover:border-rose-300 dark:hover:border-zinc-700 hover:shadow-md transition-all flex flex-col justify-between"
              >
                <div>
                  <div className="text-3xl font-black text-rose-600/30 dark:text-rose-400/40 mb-2 font-mono">
                    {step.step}
                  </div>
                  <h3 className="text-base font-bold text-slate-900 dark:text-white mb-2">
                    {step.title}
                  </h3>
                  <p className="text-xs text-slate-600 dark:text-zinc-300 leading-relaxed">
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
            <h2 className="text-3xl font-extrabold text-slate-900 dark:text-white tracking-tight">
              Who We Support
            </h2>
            <p className="mt-2 text-slate-600 dark:text-zinc-300 text-sm sm:text-base">
              Built for domestic enterprises and international accounting practices worldwide.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {WHO_WE_SUPPORT.map((item, idx) => (
              <div
                key={idx}
                className="bg-white dark:bg-zinc-950 border border-slate-200 dark:border-zinc-800 rounded-2xl p-6 hover:shadow-lg hover:border-slate-300 dark:hover:border-zinc-700 transition-all flex flex-col justify-between"
              >
                <div>
                  <div className="w-12 h-12 rounded-xl bg-slate-50 dark:bg-black border border-slate-100 dark:border-zinc-800 flex items-center justify-center mb-4">
                    {iconMap[item.icon] || <CheckCircle2 className="w-6 h-6 text-rose-600 dark:text-rose-400" />}
                  </div>
                  <h3 className="text-lg font-bold text-slate-900 dark:text-white mb-2">
                    {item.title}
                  </h3>
                  <p className="text-xs text-slate-600 dark:text-zinc-300 leading-relaxed">
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
