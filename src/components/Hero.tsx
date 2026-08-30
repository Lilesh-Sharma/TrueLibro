import AnimatedCounter from './AnimatedCounter';
import { HERO_STATS } from '../data/content';
import { ShieldCheck, ArrowRight, CheckCircle2, Award, Globe, FileSpreadsheet, Building } from 'lucide-react';

interface HeroProps {
  onOpenConsultation: () => void;
}

export default function Hero({ onOpenConsultation }: HeroProps) {
  return (
    <section className="relative overflow-hidden bg-gradient-to-b from-slate-100/90 via-slate-50 to-white dark:from-black dark:via-black dark:to-black text-slate-900 dark:text-zinc-100 pt-12 pb-20 lg:pt-16 lg:pb-24 border-b border-slate-200/60 dark:border-zinc-850 transition-colors">
      {/* Subtle geometric background accents */}
      <div className="absolute inset-0 opacity-40 dark:opacity-20 pointer-events-none">
        <div className="absolute top-12 left-10 w-72 h-72 rounded-full bg-rose-200/50 dark:bg-rose-600/10 blur-3xl" />
        <div className="absolute bottom-10 right-10 w-96 h-96 rounded-full bg-sky-200/40 dark:bg-sky-600/10 blur-3xl" />
        <div className="absolute inset-0 bg-[radial-gradient(#cbd5e1_1px,transparent_1px)] dark:bg-[radial-gradient(#27272a_1px,transparent_1px)] [background-size:24px_24px]" />
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
          {/* Main Hero Copy */}
          <div className="lg:col-span-7 space-y-6 text-center lg:text-left">
            {/* Top Motto Badge */}
            <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-rose-50 dark:bg-rose-950/50 border border-rose-200 dark:border-rose-800/80 text-rose-800 dark:text-rose-300 text-xs sm:text-sm font-semibold tracking-wide shadow-sm">
              <ShieldCheck className="w-4 h-4 text-rose-600 dark:text-rose-400" />
              <span>"Business is Vision, Accounting is Foundation"</span>
            </div>

            {/* Main Headline */}
            <h1 className="text-3xl sm:text-5xl lg:text-6xl font-black tracking-tight text-slate-900 dark:text-white leading-tight">
              Your Trusted Partner in{' '}
              <span className="text-rose-600 dark:text-rose-500">
                Finance, Tax Compliance & Wealth Creation
              </span>
            </h1>

            {/* Subheading */}
            <p className="text-base sm:text-lg text-slate-600 dark:text-zinc-300 max-w-2xl mx-auto lg:mx-0 leading-relaxed">
              TrueLibro provides dependable, CA-backed tax accounting, business incorporation, and personal wealth advisory
              alongside seamless <strong className="text-slate-800 dark:text-white">offshore bookkeeping support for Australian and international accounting firms</strong>.
            </p>

            {/* Value Highlights */}
            <div className="flex flex-wrap items-center justify-center lg:justify-start gap-4 text-xs sm:text-sm text-slate-700 dark:text-zinc-200">
              <span className="flex items-center gap-1.5 font-semibold bg-white/80 dark:bg-zinc-900/90 px-3 py-1 rounded-lg border border-slate-200/80 dark:border-zinc-800 shadow-xs">
                <CheckCircle2 className="w-4 h-4 text-emerald-600 dark:text-emerald-400" />
                Chartered Accountants & Legal Panel
              </span>
              <span className="flex items-center gap-1.5 font-semibold bg-white/80 dark:bg-zinc-900/90 px-3 py-1 rounded-lg border border-slate-200/80 dark:border-zinc-800 shadow-xs">
                <CheckCircle2 className="w-4 h-4 text-emerald-600 dark:text-emerald-400" />
                Xero & QuickBooks Certified
              </span>
              <span className="flex items-center gap-1.5 font-semibold bg-white/80 dark:bg-zinc-900/90 px-3 py-1 rounded-lg border border-slate-200/80 dark:border-zinc-800 shadow-xs">
                <CheckCircle2 className="w-4 h-4 text-emerald-600 dark:text-emerald-400" />
                Australian BAS & GST Coding
              </span>
            </div>

            {/* CTA Buttons */}
            <div className="flex flex-col sm:flex-row items-center justify-center lg:justify-start gap-4 pt-2">
              <button
                onClick={onOpenConsultation}
                className="w-full sm:w-auto px-8 py-4 rounded-xl bg-gradient-to-r from-rose-600 to-rose-700 hover:from-rose-500 hover:to-rose-600 text-white font-bold text-base shadow-lg shadow-rose-600/20 hover:shadow-rose-600/30 transition-all transform hover:-translate-y-0.5 flex items-center justify-center gap-2 cursor-pointer"
              >
                <span>Partner With TrueLibro</span>
                <ArrowRight className="w-5 h-5" />
              </button>

              <a
                href="#international-bookkeeping"
                className="w-full sm:w-auto px-7 py-4 rounded-xl bg-white dark:bg-zinc-900 hover:bg-slate-50 dark:hover:bg-zinc-800 text-slate-800 dark:text-zinc-100 border border-slate-200 dark:border-zinc-800 text-base font-semibold transition-all shadow-sm flex items-center justify-center gap-2"
              >
                <Globe className="w-4 h-4 text-sky-600 dark:text-sky-400" />
                <span>Explore International Support</span>
              </a>
            </div>
          </div>

          {/* Right Hero Interactive Feature Card */}
          <div className="lg:col-span-5">
            <div className="relative bg-white/95 dark:bg-zinc-950 backdrop-blur-xl border border-slate-200/90 dark:border-zinc-800 rounded-3xl p-6 sm:p-8 shadow-xl space-y-6">
              {/* Card top banner */}
              <div className="flex items-center justify-between pb-4 border-b border-slate-100 dark:border-zinc-850">
                <div className="flex items-center gap-2.5">
                  <div className="w-10 h-10 rounded-xl bg-rose-50 dark:bg-rose-950/60 border border-rose-100 dark:border-rose-800/80 flex items-center justify-center text-rose-600 dark:text-rose-400 font-bold">
                    TL
                  </div>
                  <div>
                    <h3 className="text-sm font-bold text-slate-900 dark:text-white">TrueLibro Practice Hub</h3>
                    <p className="text-xs text-slate-500 dark:text-zinc-400">Offshore & Domestic Advisory</p>
                  </div>
                </div>
                <span className="text-xs px-2.5 py-1 rounded-full bg-emerald-50 dark:bg-emerald-950/60 text-emerald-700 dark:text-emerald-300 border border-emerald-200 dark:border-emerald-800/80 font-semibold">
                  Active Support
                </span>
              </div>

              {/* Core Offerings Pill list */}
              <div className="space-y-3">
                <div className="p-3.5 rounded-xl bg-slate-50/80 dark:bg-black/90 border border-slate-200/80 dark:border-zinc-800 flex items-start gap-3 hover:border-slate-300 dark:hover:border-zinc-700 transition-colors">
                  <FileSpreadsheet className="w-5 h-5 text-sky-600 dark:text-sky-400 shrink-0 mt-0.5" />
                  <div>
                    <h4 className="text-sm font-bold text-slate-900 dark:text-white">Australian Practice Support</h4>
                    <p className="text-xs text-slate-600 dark:text-zinc-300 mt-0.5">
                      Xero, QBO, MYOB, BAS workpapers, bank reconciliations & month-end reviews.
                    </p>
                  </div>
                </div>

                <div className="p-3.5 rounded-xl bg-slate-50/80 dark:bg-black/90 border border-slate-200/80 dark:border-zinc-800 flex items-start gap-3 hover:border-slate-300 dark:hover:border-zinc-700 transition-colors">
                  <Building className="w-5 h-5 text-amber-600 dark:text-amber-400 shrink-0 mt-0.5" />
                  <div>
                    <h4 className="text-sm font-bold text-slate-900 dark:text-white">Business Guardian Solutions</h4>
                    <p className="text-xs text-slate-600 dark:text-zinc-300 mt-0.5">
                      GST returns, Corporate incorporation, Tax planning, FSSAI, MSME & Trademark.
                    </p>
                  </div>
                </div>

                <div className="p-3.5 rounded-xl bg-slate-50/80 dark:bg-black/90 border border-slate-200/80 dark:border-zinc-800 flex items-start gap-3 hover:border-slate-300 dark:hover:border-zinc-700 transition-colors">
                  <Award className="w-5 h-5 text-rose-600 dark:text-rose-400 shrink-0 mt-0.5" />
                  <div>
                    <h4 className="text-sm font-bold text-slate-900 dark:text-white">Wealth Guardian Advisory</h4>
                    <p className="text-xs text-slate-600 dark:text-zinc-300 mt-0.5">
                      Retirement, savings, child education & vehicle insurance with up to 35% savings.
                    </p>
                  </div>
                </div>
              </div>

              {/* Bottom Quick Call */}
              <div className="pt-2">
                <a
                  href="#contact"
                  className="w-full py-3 rounded-xl bg-rose-50 dark:bg-rose-950/40 hover:bg-rose-100 dark:hover:bg-rose-950/70 border border-rose-200 dark:border-rose-800/80 text-rose-700 dark:text-rose-300 text-xs font-bold flex items-center justify-center gap-2 transition-colors"
                >
                  <span>Request Custom Engagement Scope</span>
                  <ArrowRight className="w-3.5 h-3.5" />
                </a>
              </div>
            </div>
          </div>
        </div>

        {/* Animated Key Metrics Banner */}
        <div className="mt-16 pt-10 border-t border-slate-200 dark:border-zinc-850 grid grid-cols-2 lg:grid-cols-4 gap-6 sm:gap-8 text-center">
          {HERO_STATS.map((stat, idx) => (
            <div key={idx} className="p-4 rounded-2xl bg-white/90 dark:bg-zinc-950 border border-slate-200/80 dark:border-zinc-800 shadow-xs">
              <div className="text-2xl sm:text-4xl lg:text-5xl font-black text-rose-600 dark:text-rose-400 tracking-tight">
                <AnimatedCounter
                  value={stat.value}
                  prefix={stat.prefix}
                  suffix={stat.suffix}
                  decimals={stat.decimals}
                />
              </div>
              <div className="text-xs sm:text-sm font-bold text-slate-800 dark:text-zinc-100 mt-1">
                {stat.label}
              </div>
              {stat.sublabel && (
                <div className="text-[11px] text-slate-500 dark:text-zinc-400 mt-0.5 hidden sm:block">
                  {stat.sublabel}
                </div>
              )}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
