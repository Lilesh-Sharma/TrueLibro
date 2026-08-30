import { useState, FormEvent } from 'react';
import { BUSINESS_INFO, FAQS } from '../data/content';
import { MapPin, Phone, Mail, Clock, MessageSquare, ChevronDown, Send, CheckCircle2, Shield } from 'lucide-react';

export default function ContactSection() {
  const [openFaq, setOpenFaq] = useState<number | null>(0);
  const [contactName, setContactName] = useState('');
  const [contactEmail, setContactEmail] = useState('');
  const [contactPhone, setContactPhone] = useState('');
  const [contactMessage, setContactMessage] = useState('');
  const [submitted, setSubmitted] = useState(false);

  const handleContactSubmit = (e: FormEvent) => {
    e.preventDefault();
    setSubmitted(true);
  };

  const getDirectWhatsAppUrl = () => {
    const msg = `Hi TrueLibro, I am ${contactName || 'reaching out from your website'}. Phone: ${contactPhone || 'N/A'}. Query: ${contactMessage || 'I would like to inquire about accounting / offshore bookkeeping services.'}`;
    return `https://wa.me/${BUSINESS_INFO.contact.whatsapp}?text=${encodeURIComponent(msg)}`;
  };

  return (
    <section id="contact" className="py-20 bg-slate-50 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Title */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <span className="text-xs font-bold uppercase tracking-wider px-3 py-1 rounded-full bg-rose-100 text-rose-800 border border-rose-200">
            Let's Start a Conversation
          </span>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-slate-900 tracking-tight mt-3">
            Contact TrueLibro
          </h2>
          <p className="mt-3 text-slate-600 text-base">
            Tell us about your current bookkeeping workload, accounting software, and support requirements.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10">
          {/* Left Column: Contact Cards & Office Details */}
          <div className="lg:col-span-5 space-y-6">
            <div className="bg-white rounded-3xl p-6 sm:p-8 border border-slate-200 shadow-sm space-y-6">
              <h3 className="text-xl font-bold text-slate-900 flex items-center gap-2">
                <Shield className="w-5 h-5 text-rose-600" />
                Office & Direct Coordinates
              </h3>

              {/* Address */}
              <div className="flex items-start gap-4">
                <div className="w-10 h-10 rounded-xl bg-rose-50 text-rose-600 flex items-center justify-center shrink-0 mt-1">
                  <MapPin className="w-5 h-5" />
                </div>
                <div>
                  <h4 className="text-xs font-bold text-slate-400 uppercase tracking-wider">Office Address</h4>
                  <p className="text-sm font-semibold text-slate-800 mt-1 leading-snug">
                    {BUSINESS_INFO.contact.address}
                  </p>
                </div>
              </div>

              {/* Phone */}
              <div className="flex items-start gap-4">
                <div className="w-10 h-10 rounded-xl bg-sky-50 text-sky-600 flex items-center justify-center shrink-0 mt-1">
                  <Phone className="w-5 h-5" />
                </div>
                <div>
                  <h4 className="text-xs font-bold text-slate-400 uppercase tracking-wider">Phone / Consultation</h4>
                  <a
                    href={`tel:${BUSINESS_INFO.contact.phone}`}
                    className="text-base font-bold text-slate-900 hover:text-rose-600 transition-colors block mt-0.5"
                  >
                    {BUSINESS_INFO.contact.phone}
                  </a>
                </div>
              </div>

              {/* Email */}
              <div className="flex items-start gap-4">
                <div className="w-10 h-10 rounded-xl bg-emerald-50 text-emerald-600 flex items-center justify-center shrink-0 mt-1">
                  <Mail className="w-5 h-5" />
                </div>
                <div>
                  <h4 className="text-xs font-bold text-slate-400 uppercase tracking-wider">Official Email</h4>
                  <a
                    href={`mailto:${BUSINESS_INFO.contact.email}`}
                    className="text-sm font-bold text-slate-900 hover:text-rose-600 transition-colors block mt-0.5"
                  >
                    {BUSINESS_INFO.contact.email}
                  </a>
                </div>
              </div>

              {/* Hours */}
              <div className="flex items-start gap-4 pt-2 border-t border-slate-100">
                <div className="w-10 h-10 rounded-xl bg-amber-50 text-amber-600 flex items-center justify-center shrink-0 mt-1">
                  <Clock className="w-5 h-5" />
                </div>
                <div className="text-xs space-y-1">
                  <h4 className="font-bold text-slate-400 uppercase tracking-wider">Business Operating Hours</h4>
                  <p className="font-semibold text-slate-700">{BUSINESS_INFO.contact.hours.weekdays}</p>
                  <p className="text-slate-600">{BUSINESS_INFO.contact.hours.sunday}</p>
                </div>
              </div>
            </div>

            {/* Quick WhatsApp Action Banner */}
            <div className="bg-gradient-to-r from-emerald-600 to-teal-700 text-white rounded-3xl p-6 shadow-lg flex items-center justify-between gap-4">
              <div>
                <h4 className="font-bold text-base">Instant WhatsApp Support</h4>
                <p className="text-xs text-emerald-100 mt-0.5">Chat with an expert accountant right now</p>
              </div>
              <a
                href={`https://wa.me/${BUSINESS_INFO.contact.whatsapp}?text=${encodeURIComponent('Hello TrueLibro, I would like to consult with your accounting team.')}`}
                target="_blank"
                rel="noopener noreferrer"
                className="px-4 py-2.5 rounded-xl bg-white text-emerald-800 font-bold text-xs hover:bg-emerald-50 transition-colors flex items-center gap-1.5 shrink-0"
              >
                <MessageSquare className="w-4 h-4 text-emerald-600" />
                <span>Chat Now</span>
              </a>
            </div>
          </div>

          {/* Right Column: Contact Form & FAQ */}
          <div className="lg:col-span-7 space-y-8">
            {/* Direct Message Form Card */}
            <div className="bg-white rounded-3xl p-6 sm:p-8 border border-slate-200 shadow-sm">
              <h3 className="text-xl font-bold text-slate-900 mb-2">
                Send a Direct Message
              </h3>
              <p className="text-xs text-slate-600 mb-6">
                Fill in the details below and we will get back to you with custom service options.
              </p>

              {!submitted ? (
                <form onSubmit={handleContactSubmit} className="space-y-4 text-sm">
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    <div>
                      <label className="block text-xs font-bold text-slate-700 mb-1">Your Full Name *</label>
                      <input
                        type="text"
                        required
                        value={contactName}
                        onChange={(e) => setContactName(e.target.value)}
                        placeholder="John Doe"
                        className="w-full px-3.5 py-2.5 rounded-xl border border-slate-300 focus:outline-none focus:ring-2 focus:ring-rose-500 text-sm"
                      />
                    </div>
                    <div>
                      <label className="block text-xs font-bold text-slate-700 mb-1">Email Address *</label>
                      <input
                        type="email"
                        required
                        value={contactEmail}
                        onChange={(e) => setContactEmail(e.target.value)}
                        placeholder="john@example.com"
                        className="w-full px-3.5 py-2.5 rounded-xl border border-slate-300 focus:outline-none focus:ring-2 focus:ring-rose-500 text-sm"
                      />
                    </div>
                  </div>

                  <div>
                    <label className="block text-xs font-bold text-slate-700 mb-1">Contact / WhatsApp Number</label>
                    <input
                      type="tel"
                      value={contactPhone}
                      onChange={(e) => setContactPhone(e.target.value)}
                      placeholder="+91 ... or +61 ..."
                      className="w-full px-3.5 py-2.5 rounded-xl border border-slate-300 focus:outline-none focus:ring-2 focus:ring-rose-500 text-sm"
                    />
                  </div>

                  <div>
                    <label className="block text-xs font-bold text-slate-700 mb-1">Requirements / Questions *</label>
                    <textarea
                      required
                      rows={4}
                      value={contactMessage}
                      onChange={(e) => setContactMessage(e.target.value)}
                      placeholder="Please mention your business type, bookkeeping volume, or consultation needs..."
                      className="w-full px-3.5 py-2.5 rounded-xl border border-slate-300 focus:outline-none focus:ring-2 focus:ring-rose-500 text-sm resize-none"
                    />
                  </div>

                  <div className="flex flex-col sm:flex-row gap-3 pt-2">
                    <button
                      type="submit"
                      className="flex-1 py-3 rounded-xl bg-slate-900 hover:bg-slate-800 text-white font-bold text-sm shadow-md transition-colors flex items-center justify-center gap-2"
                    >
                      <Send className="w-4 h-4" />
                      <span>Send Message</span>
                    </button>

                    <a
                      href={getDirectWhatsAppUrl()}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="py-3 px-6 rounded-xl bg-emerald-600 hover:bg-emerald-500 text-white font-bold text-sm shadow-md transition-colors flex items-center justify-center gap-2"
                    >
                      <MessageSquare className="w-4 h-4" />
                      <span>Send via WhatsApp</span>
                    </a>
                  </div>
                </form>
              ) : (
                <div className="text-center py-8 space-y-3">
                  <CheckCircle2 className="w-12 h-12 text-emerald-500 mx-auto" />
                  <h4 className="text-lg font-bold text-slate-900">Message Received</h4>
                  <p className="text-xs text-slate-600 max-w-sm mx-auto">
                    Thank you for reaching out to TrueLibro. We will review your requirements and respond promptly.
                  </p>
                  <button
                    onClick={() => setSubmitted(false)}
                    className="mt-2 text-xs font-bold text-rose-600 hover:underline"
                  >
                    Send another message
                  </button>
                </div>
              )}
            </div>

            {/* Frequently Asked Questions */}
            <div className="bg-white rounded-3xl p-6 sm:p-8 border border-slate-200 shadow-sm space-y-4">
              <h3 className="text-lg font-bold text-slate-900 mb-2">
                Frequently Asked Questions
              </h3>

              <div className="space-y-3">
                {FAQS.map((faq, idx) => {
                  const isOpen = openFaq === idx;
                  return (
                    <div
                      key={idx}
                      className="border border-slate-200 rounded-2xl overflow-hidden transition-colors"
                    >
                      <button
                        type="button"
                        onClick={() => setOpenFaq(isOpen ? null : idx)}
                        className="w-full px-4 py-3.5 text-left flex items-center justify-between text-xs sm:text-sm font-bold text-slate-900 hover:bg-slate-50"
                      >
                        <span>{faq.q}</span>
                        <ChevronDown
                          className={`w-4 h-4 text-slate-500 transition-transform duration-200 ${
                            isOpen ? 'rotate-180 text-rose-600' : ''
                          }`}
                        />
                      </button>
                      {isOpen && (
                        <div className="px-4 pb-4 pt-1 text-xs text-slate-600 leading-relaxed border-t border-slate-100 bg-slate-50/50">
                          {faq.a}
                        </div>
                      )}
                    </div>
                  );
                })}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
