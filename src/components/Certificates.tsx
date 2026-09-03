import { useState } from 'react';
import { CERTIFICATIONS_DATA } from '../data/content';
import { CertificationItem } from '../types';
import { Award, CheckCircle2, ShieldCheck, ExternalLink, X, FileCheck2, UserCheck, Calendar } from 'lucide-react';

export default function Certificates() {
  const [selectedCert, setSelectedCert] = useState<CertificationItem | null>(null);

  return (
    <section id="certifications" className="py-20 bg-white text-slate-900 relative overflow-hidden transition-colors">
      {/* Background glow */}
      <div className="absolute top-0 right-1/4 w-96 h-96 bg-rose-100/50 rounded-full blur-3xl pointer-events-none" />
      <div className="absolute bottom-0 left-1/4 w-96 h-96 bg-sky-100/50 rounded-full blur-3xl pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-rose-50 border border-rose-200 text-rose-800 text-xs font-semibold uppercase tracking-wider mb-4">
            <Award className="w-4 h-4 text-rose-600" />
            Verified Professional Credentials
          </div>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-slate-900 tracking-tight">
            Skills Backed by International Certifications
          </h2>
          <p className="mt-4 text-slate-600 text-base sm:text-lg">
            We believe international accounting firms and business owners should see the exact qualifications,
            software mastery, and verified technology expertise driving their bookkeeping.
          </p>
        </div>

        {/* Certificate Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {CERTIFICATIONS_DATA.map((cert) => {
            const isXero = cert.issuer === 'Xero';
            return (
              <div
                key={cert.id}
                id={`cert-card-${cert.id}`}
                className="group relative bg-slate-50/80 border border-slate-200 rounded-2xl p-6 hover:border-rose-300 hover:shadow-md hover:bg-white transition-all duration-300 flex flex-col justify-between shadow-xs cursor-pointer"
                onClick={() => setSelectedCert(cert)}
              >
                <div>
                  {/* Badge Top Header */}
                  <div className="flex items-center justify-between mb-4">
                    <span
                      className={`text-xs font-bold px-2.5 py-1 rounded-full uppercase tracking-wider ${
                        isXero
                          ? 'bg-sky-100 text-sky-800 border border-sky-200'
                          : 'bg-emerald-100 text-emerald-800 border border-emerald-200'
                      }`}
                    >
                      {cert.issuer}
                    </span>
                    <span className="text-xs text-slate-500 flex items-center gap-1 font-medium">
                      <ShieldCheck className="w-4 h-4 text-emerald-600" />
                      Verified
                    </span>
                  </div>

                  {/* Certificate Title */}
                  <h3 className="text-lg font-bold text-slate-900 group-hover:text-rose-600 transition-colors">
                    {cert.title}
                  </h3>

                  {/* Holder */}
                  <div className="mt-3 flex items-center gap-2 text-sm text-slate-700">
                    <UserCheck className="w-4 h-4 text-slate-400 shrink-0" />
                    <span>Issued to: <strong className="text-slate-900">{cert.recipient}</strong></span>
                  </div>

                  {/* Description snippet */}
                  <p className="mt-3 text-xs text-slate-600 line-clamp-3 leading-relaxed">
                    {cert.description}
                  </p>
                </div>

                <div className="mt-6 pt-4 border-t border-slate-200/80 flex items-center justify-between">
                  <span className="text-xs text-slate-500 font-mono">
                    {cert.issueDate}
                  </span>
                  <button
                    type="button"
                    className="inline-flex items-center gap-1 text-xs font-semibold text-rose-600 hover:text-rose-700 group-hover:translate-x-0.5 transition-transform cursor-pointer"
                  >
                    View Details
                    <ExternalLink className="w-3.5 h-3.5" />
                  </button>
                </div>
              </div>
            );
          })}
        </div>

        {/* Business Registrations Banner */}
        <div className="mt-12 bg-slate-50 border border-slate-200 rounded-2xl p-6 sm:p-8 flex flex-col lg:flex-row items-center justify-between gap-6 shadow-xs">
          <div className="space-y-2 text-center lg:text-left">
            <h4 className="text-lg font-bold text-slate-900 flex items-center justify-center lg:justify-start gap-2">
              <FileCheck2 className="w-5 h-5 text-rose-600" />
              Statutory Business Registrations & Standards
            </h4>
            <p className="text-sm text-slate-600">
              Udyam Registered Enterprise • Certified GST Practitioner • PAN Registered Entity • Strict 7-Year Accounting Data Retention
            </p>
          </div>
          <a
            href="#contact"
            className="shrink-0 px-6 py-3 rounded-xl bg-rose-600 hover:bg-rose-500 text-white font-semibold text-sm transition-colors shadow-md shadow-rose-600/20 flex items-center gap-2"
          >
            Request Engagement Credentials
            <CheckCircle2 className="w-4 h-4" />
          </a>
        </div>
      </div>

      {/* Certificate Detailed Modal */}
      {selectedCert && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/85 backdrop-blur-sm animate-in fade-in duration-200">
          <div
            className="relative w-full max-w-2xl bg-white text-slate-900 rounded-3xl p-6 sm:p-8 shadow-2xl border border-slate-200 overflow-hidden"
            onClick={(e) => e.stopPropagation()}
          >
            {/* Modal Close Button */}
            <button
              onClick={() => setSelectedCert(null)}
              className="absolute top-4 right-4 p-2 rounded-full bg-slate-100 hover:bg-slate-200 text-slate-600 hover:text-slate-900 transition-colors cursor-pointer"
              aria-label="Close modal"
            >
              <X className="w-5 h-5" />
            </button>

            {/* Certificate Visual Header */}
            <div className={`p-6 rounded-2xl mb-6 text-center ${
              selectedCert.issuer === 'Xero' 
                ? 'bg-gradient-to-br from-sky-50 to-blue-100 border border-sky-200' 
                : 'bg-gradient-to-br from-emerald-50 to-teal-100 border border-emerald-200'
            }`}>
              <div className="inline-block px-3 py-1 rounded-full text-xs font-bold uppercase tracking-wider mb-2 bg-white/80 text-slate-800 shadow-sm border border-slate-200/50">
                {selectedCert.issuer} Certified Partner
              </div>
              <h3 className="text-2xl font-black text-slate-900">
                {selectedCert.title}
              </h3>
              <p className="text-sm font-semibold text-slate-600 mt-1">
                {selectedCert.level}
              </p>
            </div>

            {/* Certificate Details */}
            <div className="space-y-4 text-sm">
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 bg-slate-50 p-4 rounded-xl border border-slate-100">
                <div>
                  <span className="text-xs text-slate-500 font-semibold uppercase block">Awarded To</span>
                  <span className="text-base font-bold text-slate-900">{selectedCert.recipient}</span>
                </div>
                <div>
                  <span className="text-xs text-slate-500 font-semibold uppercase block">Issuer / Authority</span>
                  <span className="text-base font-bold text-slate-900">{selectedCert.issuer} Accounting</span>
                </div>
                <div className="flex items-center gap-2">
                  <Calendar className="w-4 h-4 text-rose-500 shrink-0" />
                  <div>
                    <span className="text-xs text-slate-500 font-medium block">Issue Date</span>
                    <span className="font-semibold text-slate-800">{selectedCert.issueDate}</span>
                  </div>
                </div>
                <div className="flex items-center gap-2">
                  <ShieldCheck className="w-4 h-4 text-emerald-500 shrink-0" />
                  <div>
                    <span className="text-xs text-slate-500 font-medium block">Verification Status</span>
                    <span className="font-semibold text-slate-800">Verified & Authenticated</span>
                  </div>
                </div>
              </div>

              {selectedCert.signatory && (
                <div className="bg-slate-50 p-3.5 rounded-xl border border-slate-100 text-xs text-slate-700">
                  <span className="font-bold text-slate-900">Authorized Signatory:</span> {selectedCert.signatory}
                </div>
              )}

              <div>
                <h5 className="font-bold text-slate-900 mb-1">Competency Scope</h5>
                <p className="text-slate-600 text-xs sm:text-sm leading-relaxed">
                  {selectedCert.description}
                </p>
              </div>
            </div>

            <div className="mt-6 flex justify-end gap-3">
              <button
                type="button"
                onClick={() => setSelectedCert(null)}
                className="px-5 py-2.5 rounded-xl bg-slate-900 hover:bg-slate-800 text-white text-sm font-semibold transition-colors border border-slate-700 cursor-pointer"
              >
                Close Verification
              </button>
            </div>
          </div>
        </div>
      )}
    </section>
  );
}
