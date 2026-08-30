import { useState, FormEvent } from 'react';
import { BUSINESS_INFO } from '../data/content';
import { X, Send, CheckCircle2, Phone, Mail, MessageSquare } from 'lucide-react';

interface ConsultationModalProps {
  isOpen: boolean;
  onClose: () => void;
  defaultService?: string;
}

export default function ConsultationModal({ isOpen, onClose, defaultService = '' }: ConsultationModalProps) {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [phone, setPhone] = useState('');
  const [service, setService] = useState(defaultService || 'Australian Bookkeeping Support');
  const [software, setSoftware] = useState('Xero');
  const [message, setMessage] = useState('');
  const [isSubmitted, setIsSubmitted] = useState(false);

  if (!isOpen) return null;

  const handleSubmit = (e: FormEvent) => {
    e.preventDefault();
    setIsSubmitted(true);
  };

  const resetForm = () => {
    setName('');
    setEmail('');
    setPhone('');
    setMessage('');
    setIsSubmitted(false);
    onClose();
  };

  const generateWhatsAppLink = () => {
    const text = `Hello TrueLibro Team,%0A%0AName: ${encodeURIComponent(name || 'Interested Client')}%0AEmail: ${encodeURIComponent(email || 'N/A')}%0APhone: ${encodeURIComponent(phone || 'N/A')}%0AService: ${encodeURIComponent(service)}%0APreferred Software: ${encodeURIComponent(software)}%0AMessage: ${encodeURIComponent(message || 'I would like to discuss bookkeeping & accounting support.')}`;
    return `https://wa.me/${BUSINESS_INFO.contact.whatsapp}?text=${text}`;
  };

  const generateMailtoLink = () => {
    const subject = encodeURIComponent(`Inquiry for ${service} - TrueLibro`);
    const body = encodeURIComponent(`Hello TrueLibro Team,

Name: ${name}
Phone: ${phone}
Email: ${email}
Service of Interest: ${service}
Accounting Software: ${software}

Message / Requirements:
${message}
`);
    return `mailto:${BUSINESS_INFO.contact.email}?subject=${subject}&body=${body}`;
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/80 backdrop-blur-sm animate-in fade-in duration-200">
      <div
        className="relative w-full max-w-xl bg-white text-slate-900 rounded-3xl p-6 sm:p-8 shadow-2xl border border-slate-200 overflow-hidden"
        onClick={(e) => e.stopPropagation()}
      >
        <button
          onClick={onClose}
          className="absolute top-4 right-4 p-2 rounded-full bg-slate-100 hover:bg-slate-200 text-slate-600 hover:text-slate-900 transition-colors"
          aria-label="Close dialog"
        >
          <X className="w-5 h-5" />
        </button>

        {!isSubmitted ? (
          <div>
            <div className="mb-6">
              <span className="text-xs font-bold px-2.5 py-1 rounded-full bg-rose-100 text-rose-800 uppercase tracking-wider">
                Direct Engagement Request
              </span>
              <h3 className="text-2xl font-black text-slate-900 mt-2">
                Talk to Our Accounting Panel
              </h3>
              <p className="text-xs sm:text-sm text-slate-600 mt-1">
                Tell us about your bookkeeping workload, accounting software, or compliance requirements.
              </p>
            </div>

            <form onSubmit={handleSubmit} className="space-y-4 text-sm">
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div>
                  <label className="block text-xs font-bold text-slate-700 mb-1">Your Name *</label>
                  <input
                    type="text"
                    required
                    placeholder="e.g. John Smith"
                    value={name}
                    onChange={(e) => setName(e.target.value)}
                    className="w-full px-3.5 py-2.5 rounded-xl border border-slate-300 focus:outline-none focus:ring-2 focus:ring-rose-500 text-sm"
                  />
                </div>

                <div>
                  <label className="block text-xs font-bold text-slate-700 mb-1">Email Address *</label>
                  <input
                    type="email"
                    required
                    placeholder="e.g. john@practice.com.au"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    className="w-full px-3.5 py-2.5 rounded-xl border border-slate-300 focus:outline-none focus:ring-2 focus:ring-rose-500 text-sm"
                  />
                </div>
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div>
                  <label className="block text-xs font-bold text-slate-700 mb-1">Phone / WhatsApp</label>
                  <input
                    type="tel"
                    placeholder="+61 ... or +91 ..."
                    value={phone}
                    onChange={(e) => setPhone(e.target.value)}
                    className="w-full px-3.5 py-2.5 rounded-xl border border-slate-300 focus:outline-none focus:ring-2 focus:ring-rose-500 text-sm"
                  />
                </div>

                <div>
                  <label className="block text-xs font-bold text-slate-700 mb-1">Primary Software</label>
                  <select
                    value={software}
                    onChange={(e) => setSoftware(e.target.value)}
                    className="w-full px-3.5 py-2.5 rounded-xl border border-slate-300 focus:outline-none focus:ring-2 focus:ring-rose-500 text-sm bg-white"
                  >
                    <option value="Xero">Xero</option>
                    <option value="QuickBooks Online">QuickBooks Online</option>
                    <option value="MYOB">MYOB</option>
                    <option value="SaaSu">SaaSu</option>
                    <option value="Tally Prime">Tally Prime</option>
                    <option value="Other">Other Platform</option>
                  </select>
                </div>
              </div>

              <div>
                <label className="block text-xs font-bold text-slate-700 mb-1">Service Required</label>
                <select
                  value={service}
                  onChange={(e) => setService(e.target.value)}
                  className="w-full px-3.5 py-2.5 rounded-xl border border-slate-300 focus:outline-none focus:ring-2 focus:ring-rose-500 text-sm bg-white"
                >
                  <option value="Australian Bookkeeping Support">Australian Bookkeeping Support</option>
                  <option value="Xero / QBO Offshore Team">Xero / QBO Offshore Team</option>
                  <option value="GST Registration & Compliance">GST Registration & Compliance</option>
                  <option value="Company Registration & MCA">Company Registration & MCA</option>
                  <option value="Income Tax & CA Advisory">Income Tax & CA Advisory</option>
                  <option value="Wealth Guardian Planning">Wealth Guardian (Savings / Retirement)</option>
                  <option value="Vehicle / Health Insurance">Vehicle / Health Insurance (Up to 35% off)</option>
                  <option value="Loan & Project Financing">Loan & Project Financing</option>
                </select>
              </div>

              <div>
                <label className="block text-xs font-bold text-slate-700 mb-1">Message / Requirements</label>
                <textarea
                  rows={3}
                  placeholder="Tell us about your clients, workload, or required assistance..."
                  value={message}
                  onChange={(e) => setMessage(e.target.value)}
                  className="w-full px-3.5 py-2.5 rounded-xl border border-slate-300 focus:outline-none focus:ring-2 focus:ring-rose-500 text-sm resize-none"
                />
              </div>

              <div className="pt-2 flex flex-col sm:flex-row gap-3">
                <button
                  type="submit"
                  className="flex-1 py-3 px-5 rounded-xl bg-gradient-to-r from-rose-600 to-rose-700 hover:from-rose-500 hover:to-rose-600 text-white font-bold text-sm shadow-md transition-all flex items-center justify-center gap-2"
                >
                  <Send className="w-4 h-4" />
                  <span>Submit Inquiry</span>
                </button>

                <a
                  href={generateWhatsAppLink()}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="py-3 px-5 rounded-xl bg-emerald-600 hover:bg-emerald-500 text-white font-bold text-sm shadow-md transition-all flex items-center justify-center gap-2"
                >
                  <MessageSquare className="w-4 h-4" />
                  <span>WhatsApp Instantly</span>
                </a>
              </div>
            </form>
          </div>
        ) : (
          <div className="text-center py-6 space-y-4">
            <div className="w-16 h-16 bg-emerald-100 text-emerald-600 rounded-full flex items-center justify-center mx-auto">
              <CheckCircle2 className="w-10 h-10" />
            </div>

            <h3 className="text-2xl font-bold text-slate-900">
              Thank You, {name || 'Valued Client'}!
            </h3>

            <p className="text-sm text-slate-600 max-w-md mx-auto">
              Your inquiry for <strong>{service}</strong> has been received by TrueLibro. Our panel will get back to you within 24 business hours.
            </p>

            <div className="pt-4 flex flex-col sm:flex-row items-center justify-center gap-3">
              <a
                href={generateMailtoLink()}
                className="px-5 py-2.5 rounded-xl bg-slate-900 text-white text-xs font-semibold hover:bg-slate-800 flex items-center gap-2"
              >
                <Mail className="w-4 h-4" />
                <span>Open in Email App</span>
              </a>

              <button
                type="button"
                onClick={resetForm}
                className="px-5 py-2.5 rounded-xl bg-slate-100 text-slate-700 text-xs font-semibold hover:bg-slate-200"
              >
                Close Window
              </button>
            </div>
          </div>
        )}
      </div>
    </div>
  );
}
