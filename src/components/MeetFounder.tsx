import { FOUNDER_INFO } from '../data/content';
import founderImage from '../assets/images/founder_santosh_thakur.jpg';
import { Award, CheckCircle2, ArrowRight, MessageSquare } from 'lucide-react';

interface MeetFounderProps {
  onOpenConsultation?: () => void;
}

export default function MeetFounder({ onOpenConsultation }: MeetFounderProps) {
  return (
    <section id="founder" className="py-20 sm:py-24 bg-white text-slate-900 relative overflow-hidden border-b border-slate-200">
      {/* Subtle background ambient gradients */}
      <div className="absolute top-0 right-10 w-80 h-80 bg-rose-100/40 rounded-full blur-3xl pointer-events-none" />
      <div className="absolute bottom-0 left-10 w-96 h-96 bg-slate-100/70 rounded-full blur-3xl pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Section Header Eyebrow */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-rose-50 border border-rose-200 text-rose-800 text-xs font-bold uppercase tracking-wider mb-4">
            <Award className="w-4 h-4 text-rose-600" />
            Leadership & Expertise
          </div>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-slate-900 tracking-tight">
            Meet the Founder
          </h2>
          <p className="mt-3 text-slate-600 text-base sm:text-lg">
            Direct leadership with over a decade of statutory accounting precision and specialized Australian practice support.
          </p>
        </div>

        {/* Main Founder Card */}
        <div className="bg-slate-50/90 border border-slate-200/90 rounded-3xl p-6 sm:p-10 lg:p-12 shadow-sm">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-12 items-center">
            {/* Left Column: Founder Photo & Quick Badges */}
            <div className="lg:col-span-5 flex flex-col items-center">
              <div className="relative w-full max-w-md mx-auto group">
                {/* Decorative border frame */}
                <div className="absolute -inset-2 bg-gradient-to-tr from-rose-500/20 via-slate-300 to-rose-500/20 rounded-3xl blur-sm opacity-70 group-hover:opacity-100 transition-opacity" />
                
                <div className="relative rounded-2xl overflow-hidden bg-white border-2 border-slate-200 shadow-md">
                  <img
                    src={founderImage}
                    alt={FOUNDER_INFO.name}
                    className="w-full h-auto object-cover object-center transform group-hover:scale-[1.02] transition-transform duration-500"
                    referrerPolicy="no-referrer"
                    onError={(e) => {
                      const target = e.currentTarget;
                      if (!target.dataset.triedPublic) {
                        target.dataset.triedPublic = 'true';
                        target.src = './santosh_thakur.jpg';
                      } else if (!target.dataset.triedPublicSlash) {
                        target.dataset.triedPublicSlash = 'true';
                        target.src = '/santosh_thakur.jpg';
                      }
                    }}
                  />
                  
                  {/* Photo overlay badge */}
                  <div className="absolute bottom-0 inset-x-0 bg-gradient-to-t from-slate-950/90 via-slate-900/60 to-transparent p-4 sm:p-5 text-white">
                    <div className="flex items-center gap-2">
                      <span className="w-2.5 h-2.5 rounded-full bg-emerald-400 animate-pulse" />
                      <span className="text-xs font-semibold uppercase tracking-wider text-emerald-300">
                        Active Australian Practice Specialist
                      </span>
                    </div>
                    <p className="text-sm font-bold text-white mt-0.5">
                      {FOUNDER_INFO.name}
                    </p>
                  </div>
                </div>
              </div>

              {/* Founder Quick Credential Badges */}
              <div className="w-full max-w-md mt-6 grid grid-cols-2 gap-3">
                <div className="p-3 rounded-xl bg-white border border-slate-200 text-center shadow-xs">
                  <span className="block text-xl sm:text-2xl font-black text-rose-600">10+ Yrs</span>
                  <span className="text-[11px] font-semibold text-slate-600 leading-tight block mt-0.5">Accounting & Tax Experience</span>
                </div>
                <div className="p-3 rounded-xl bg-white border border-slate-200 text-center shadow-xs">
                  <span className="block text-xl sm:text-2xl font-black text-slate-900">4.5+ Yrs</span>
                  <span className="text-[11px] font-semibold text-slate-600 leading-tight block mt-0.5">Australian Practice Support</span>
                </div>
              </div>
            </div>

            {/* Right Column: Bio, Belief & Scope */}
            <div className="lg:col-span-7 space-y-6">
              <div>
                <div className="inline-block text-xs font-bold text-rose-600 uppercase tracking-wider mb-1">
                  Accounting Professional & Founder
                </div>
                <h3 className="text-2xl sm:text-3xl font-extrabold text-slate-900">
                  {FOUNDER_INFO.name}
                </h3>
                <p className="text-sm sm:text-base font-semibold text-slate-700 mt-1 flex items-center gap-2 flex-wrap">
                  <span className="text-rose-600 font-bold">•</span>
                  <span>{FOUNDER_INFO.title}</span>
                </p>
              </div>

              {/* Guiding Principle Callout */}
              <div className="relative p-5 rounded-2xl bg-white border-l-4 border-rose-600 border-y border-r border-slate-200 shadow-xs">
                <p className="text-sm sm:text-base text-slate-800 italic font-medium leading-relaxed">
                  "{FOUNDER_INFO.belief}"
                </p>
              </div>

              {/* Comprehensive Bio */}
              <div className="space-y-4 text-sm sm:text-base text-slate-700 leading-relaxed">
                <p>
                  {FOUNDER_INFO.bioParagraph1}
                </p>
                <p>
                  {FOUNDER_INFO.bioParagraph2}
                </p>
                <p>
                  {FOUNDER_INFO.bioParagraph3}
                </p>
              </div>

              {/* Specific Competencies Grid */}
              <div className="pt-2">
                <h4 className="text-xs font-bold uppercase tracking-wider text-slate-500 mb-3">
                  Core Expertise & Technical Scope
                </h4>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-2.5 text-xs sm:text-sm text-slate-700">
                  <div className="flex items-center gap-2">
                    <CheckCircle2 className="w-4 h-4 text-emerald-600 shrink-0" />
                    <span>Australian Bookkeeping & BAS Lodgements</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <CheckCircle2 className="w-4 h-4 text-emerald-600 shrink-0" />
                    <span>100+ Bookkeeping Files Reviewed</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <CheckCircle2 className="w-4 h-4 text-emerald-600 shrink-0" />
                    <span>Quality-Control & Discrepancy Audits</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <CheckCircle2 className="w-4 h-4 text-emerald-600 shrink-0" />
                    <span>Team Training & Standard Operating Procedures</span>
                  </div>
                </div>
              </div>

              {/* Action Buttons */}
              <div className="pt-4 flex flex-wrap items-center gap-3">
                {onOpenConsultation && (
                  <button
                    type="button"
                    onClick={onOpenConsultation}
                    className="px-6 py-3 rounded-xl bg-gradient-to-r from-rose-600 to-rose-700 hover:from-rose-500 hover:to-rose-600 text-white font-bold text-sm shadow-md shadow-rose-600/20 transition-all transform hover:-translate-y-0.5 flex items-center gap-2 cursor-pointer"
                  >
                    <span>Schedule Founder Discussion</span>
                    <ArrowRight className="w-4 h-4" />
                  </button>
                )}

                <a
                  href="https://wa.me/918318435728?text=Hello%20Santosh%2C%20I%20would%20like%20to%20discuss%20bookkeeping%20and%20accounting%20support%20with%20TrueLibro."
                  target="_blank"
                  rel="noopener noreferrer"
                  className="px-5 py-3 rounded-xl bg-white hover:bg-slate-100 text-slate-800 font-semibold text-sm border border-slate-300 transition-colors flex items-center gap-2 shadow-xs cursor-pointer"
                >
                  <MessageSquare className="w-4 h-4 text-emerald-600" />
                  <span>WhatsApp Message</span>
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
