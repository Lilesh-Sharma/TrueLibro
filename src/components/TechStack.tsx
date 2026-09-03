import { TECH_PLATFORMS } from '../data/content';
import { Cpu, CheckCircle2, FileText, ArrowRight } from 'lucide-react';

interface TechStackProps {
  onOpenConsultation: () => void;
}

export default function TechStack({ onOpenConsultation }: TechStackProps) {
  return (
    <section id="tech-stack" className="py-20 bg-slate-100/60 text-slate-900 border-y border-slate-200/80 relative transition-colors">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-blue-50 border border-blue-200 text-blue-800 text-xs font-semibold uppercase tracking-wider mb-4">
            <Cpu className="w-4 h-4 text-blue-600" />
            Accounting Technology Expertise
          </div>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-slate-900 tracking-tight">
            Supporting the Accounting Platforms Your Firm Already Uses
          </h2>
          <p className="mt-4 text-slate-600 text-base sm:text-lg">
            <strong>Your Software. Your Process. Our Support.</strong>
            <br />
            You don't need to change the way your practice operates. Our objective is to fit into your existing technology environment and follow your established bookkeeping procedures.
          </p>
        </div>

        {/* Tech Platform Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
          {TECH_PLATFORMS.map((tech, idx) => (
            <div
              key={idx}
              className="bg-white border border-slate-200 rounded-2xl p-6 hover:border-rose-300 hover:shadow-md transition-all duration-200 flex flex-col justify-between"
            >
              <div>
                <div className="flex items-center justify-between mb-3">
                  <span className="text-xs font-bold text-slate-500 uppercase tracking-wider">
                    {tech.category === 'document' ? 'Document / OCR' : 'Core Cloud Ledger'}
                  </span>
                  <span className="text-[11px] font-semibold px-2 py-0.5 rounded-full bg-rose-50 text-rose-700 border border-rose-200">
                    {tech.highlight}
                  </span>
                </div>

                <h3 className="text-xl font-bold text-slate-900 mb-2">
                  {tech.name}
                </h3>

                <p className="text-xs text-slate-600 leading-relaxed mb-4">
                  {tech.description}
                </p>
              </div>

              <div className="pt-3 border-t border-slate-100 flex items-center justify-between text-xs text-slate-500">
                <span>Best for:</span>
                <strong className="text-slate-800">{tech.popularFor}</strong>
              </div>
            </div>
          ))}
        </div>

        {/* Workflow & Document Integration Banner */}
        <div className="mt-12 bg-white border border-slate-200 rounded-2xl p-6 sm:p-8 shadow-xs">
          <div className="flex flex-col lg:flex-row items-center justify-between gap-6">
            <div className="space-y-2 text-center lg:text-left">
              <h4 className="text-lg font-bold text-slate-900 flex items-center justify-center lg:justify-start gap-2">
                <FileText className="w-5 h-5 text-rose-600" />
                More Than Accounting Software: OCR & Digital Portals
              </h4>
              <p className="text-sm text-slate-600 max-w-3xl">
                We actively work with Hubdoc, Dext, Receipt Bank, Client Document Portals, and automated workflow tracking systems so your practice enjoys zero document friction.
              </p>
            </div>

            <button
              onClick={onOpenConsultation}
              className="shrink-0 px-6 py-3 rounded-xl bg-gradient-to-r from-rose-600 to-rose-700 hover:from-rose-500 hover:to-rose-600 text-white font-bold text-sm shadow-md transition-all flex items-center gap-2 cursor-pointer"
            >
              <span>Connect Your Tech Stack</span>
              <ArrowRight className="w-4 h-4" />
            </button>
          </div>
        </div>
      </div>
    </section>
  );
}
