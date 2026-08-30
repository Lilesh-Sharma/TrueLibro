import AnimatedCounter from './AnimatedCounter';
import { AUSTRALIAN_SUPPORT_ITEMS } from '../data/content';
import { Globe, Check, Layers, Clock, Zap, ArrowRight, ShieldCheck } from 'lucide-react';

interface InternationalSupportProps {
  onOpenConsultation: () => void;
}

export default function InternationalSupport({ onOpenConsultation }: InternationalSupportProps) {
  return (
    <section id="international-bookkeeping" className="py-20 bg-white dark:bg-black text-slate-900 dark:text-zinc-100 relative transition-colors">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-rose-100 dark:bg-rose-950/60 text-rose-800 dark:text-rose-300 text-xs font-bold uppercase tracking-wider mb-4 border border-rose-200 dark:border-rose-800/80">
            <Globe className="w-4 h-4 text-rose-600 dark:text-rose-400" />
            Global Offshore Practice Extension
          </div>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-slate-900 dark:text-white tracking-tight">
            Reliable Bookkeeping Support for Accounting Firms & Businesses Worldwide
          </h2>
          <p className="mt-4 text-slate-600 dark:text-zinc-300 text-base sm:text-lg">
            <strong>Scale Your Practice. Extend Your Team. Stay Focused on Your Clients.</strong>
            <br />
            We work as an extension of your team, managing day-to-day bookkeeping, reconciliations, reporting, and accounting workloads without the cost and complexity of hiring in-house.
          </p>
        </div>

        {/* Feature Hero Card: Australian Accounting Practice Experience */}
        <div className="bg-gradient-to-br from-slate-100/90 via-rose-50/40 to-slate-50 dark:from-zinc-950 dark:via-black dark:to-zinc-950 text-slate-900 dark:text-zinc-100 rounded-3xl p-8 sm:p-12 shadow-md border border-slate-200 dark:border-zinc-800 relative overflow-hidden mb-16">
          <div className="absolute -right-20 -bottom-20 w-80 h-80 bg-rose-200/40 dark:bg-rose-600/10 rounded-full blur-3xl pointer-events-none" />

          <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-center relative z-10">
            <div className="lg:col-span-7 space-y-6">
              <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-sky-100 dark:bg-sky-950/60 text-sky-800 dark:text-sky-300 text-xs font-semibold border border-sky-200 dark:border-sky-800/80">
                🇦🇺 Australian Bookkeeping Expertise
              </div>

              <h3 className="text-2xl sm:text-3xl font-black text-slate-900 dark:text-white">
                Built to Support Australian Accounting Practices
              </h3>

              <p className="text-slate-600 dark:text-zinc-300 text-sm sm:text-base leading-relaxed">
                TrueLibro has practical experience supporting Australian accounting workflows and cloud-based accounting platforms.
                Our team understands the importance of accurate bookkeeping, bank reconciliations, GST coding, BAS-related bookkeeping support, payroll transactions, and financial reporting.
              </p>

              {/* Animated benefits */}
              <div className="grid grid-cols-2 sm:grid-cols-3 gap-4 pt-2">
                <div className="p-3.5 rounded-xl bg-white dark:bg-zinc-900/90 border border-slate-200 dark:border-zinc-800 shadow-xs">
                  <div className="text-xl sm:text-2xl font-black text-rose-600 dark:text-rose-400">
                    <AnimatedCounter value={55} prefix="Save up to " suffix="%" />
                  </div>
                  <div className="text-xs text-slate-700 dark:text-zinc-200 font-semibold mt-0.5">Staffing & Overhead Costs</div>
                </div>

                <div className="p-3.5 rounded-xl bg-white dark:bg-zinc-900/90 border border-slate-200 dark:border-zinc-800 shadow-xs">
                  <div className="text-xl sm:text-2xl font-black text-emerald-600 dark:text-emerald-400">
                    <AnimatedCounter value={24} suffix="-48 Hrs" />
                  </div>
                  <div className="text-xs text-slate-700 dark:text-zinc-200 font-semibold mt-0.5">Reconciliation SLA</div>
                </div>

                <div className="p-3.5 rounded-xl bg-white dark:bg-zinc-900/90 border border-slate-200 dark:border-zinc-800 shadow-xs col-span-2 sm:col-span-1">
                  <div className="text-xl sm:text-2xl font-black text-sky-600 dark:text-sky-400">
                    <AnimatedCounter value={100} suffix="%" />
                  </div>
                  <div className="text-xs text-slate-700 dark:text-zinc-200 font-semibold mt-0.5">White-Label Behind Your Brand</div>
                </div>
              </div>

              <div className="pt-2 flex flex-wrap gap-4">
                <button
                  onClick={onOpenConsultation}
                  className="px-6 py-3 rounded-xl bg-rose-600 hover:bg-rose-500 text-white font-bold text-sm shadow-md shadow-rose-600/20 transition-all flex items-center gap-2 cursor-pointer"
                >
                  <span>Partner With TrueLibro</span>
                  <ArrowRight className="w-4 h-4" />
                </button>
                <a
                  href="#tech-stack"
                  className="px-6 py-3 rounded-xl bg-white dark:bg-zinc-900 hover:bg-slate-100 dark:hover:bg-zinc-800 text-slate-700 dark:text-zinc-200 font-semibold text-sm border border-slate-200 dark:border-zinc-800 transition-colors shadow-xs"
                >
                  View Supported Software
                </a>
              </div>
            </div>

            {/* Checklist of Australian Services */}
            <div className="lg:col-span-5 bg-white/95 dark:bg-zinc-950 rounded-2xl p-6 border border-slate-200 dark:border-zinc-800 shadow-sm space-y-3">
              <h4 className="text-sm font-bold text-slate-900 dark:text-white flex items-center gap-2 pb-2 border-b border-slate-100 dark:border-zinc-850">
                <ShieldCheck className="w-4 h-4 text-emerald-600 dark:text-emerald-400" />
                Our Australian Bookkeeping Support Includes:
              </h4>

              <div className="grid grid-cols-1 gap-2 max-h-80 overflow-y-auto pr-1">
                {AUSTRALIAN_SUPPORT_ITEMS.map((item, idx) => (
                  <div key={idx} className="flex items-start gap-2 text-xs text-slate-700 dark:text-zinc-200">
                    <Check className="w-3.5 h-3.5 text-emerald-600 dark:text-emerald-400 shrink-0 mt-0.5" />
                    <span>{item}</span>
                  </div>
                ))}
              </div>

              <p className="text-[11px] text-slate-500 dark:text-zinc-400 pt-2 border-t border-slate-100 dark:border-zinc-850 leading-relaxed italic">
                *Note: BAS, tax and compliance services are provided as bookkeeping/accounting support to the extent permitted under applicable laws and client engagement arrangements.
              </p>
            </div>
          </div>
        </div>

        {/* How We Help You Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          <div className="p-6 rounded-2xl bg-slate-50 dark:bg-zinc-950 border border-slate-200 dark:border-zinc-800 hover:border-rose-300 dark:hover:border-zinc-700 hover:shadow-md transition-all">
            <div className="w-10 h-10 rounded-xl bg-rose-100 dark:bg-rose-950/60 text-rose-600 dark:text-rose-400 flex items-center justify-center font-bold mb-4">
              <Zap className="w-5 h-5" />
            </div>
            <h4 className="font-bold text-slate-900 dark:text-white text-base mb-2">Reduce Bookkeeping Workload</h4>
            <p className="text-xs text-slate-600 dark:text-zinc-300 leading-relaxed">
              Eliminate routine data-entry bottleneck so your senior accountants can focus on high-value client advisory.
            </p>
          </div>

          <div className="p-6 rounded-2xl bg-slate-50 dark:bg-zinc-950 border border-slate-200 dark:border-zinc-800 hover:border-rose-300 dark:hover:border-zinc-700 hover:shadow-md transition-all">
            <div className="w-10 h-10 rounded-xl bg-sky-100 dark:bg-sky-950/60 text-sky-600 dark:text-sky-400 flex items-center justify-center font-bold mb-4">
              <Layers className="w-5 h-5" />
            </div>
            <h4 className="font-bold text-slate-900 dark:text-white text-base mb-2">Increase Team Capacity</h4>
            <p className="text-xs text-slate-600 dark:text-zinc-300 leading-relaxed">
              Take on new business and clients without the immediate fixed salary overhead of hiring local staff.
            </p>
          </div>

          <div className="p-6 rounded-2xl bg-slate-50 dark:bg-zinc-950 border border-slate-200 dark:border-zinc-800 hover:border-rose-300 dark:hover:border-zinc-700 hover:shadow-md transition-all">
            <div className="w-10 h-10 rounded-xl bg-emerald-100 dark:bg-emerald-950/60 text-emerald-600 dark:text-emerald-400 flex items-center justify-center font-bold mb-4">
              <Clock className="w-5 h-5" />
            </div>
            <h4 className="font-bold text-slate-900 dark:text-white text-base mb-2">Catch-Up & Cleanup Books</h4>
            <p className="text-xs text-slate-600 dark:text-zinc-300 leading-relaxed">
              Overdue, incomplete, or messy historical ledgers brought thoroughly up to date with zero stress.
            </p>
          </div>

          <div className="p-6 rounded-2xl bg-slate-50 dark:bg-zinc-950 border border-slate-200 dark:border-zinc-800 hover:border-rose-300 dark:hover:border-zinc-700 hover:shadow-md transition-all">
            <div className="w-10 h-10 rounded-xl bg-amber-100 dark:bg-amber-950/60 text-amber-600 dark:text-amber-400 flex items-center justify-center font-bold mb-4">
              <ShieldCheck className="w-5 h-5" />
            </div>
            <h4 className="font-bold text-slate-900 dark:text-white text-base mb-2">Your Brand & Relationship</h4>
            <p className="text-xs text-slate-600 dark:text-zinc-300 leading-relaxed">
              We work seamlessly in the background as an invisible engine behind your firm's brand and client relationships.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
