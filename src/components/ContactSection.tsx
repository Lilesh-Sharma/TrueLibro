import { useState, FormEvent } from 'react';
import { BUSINESS_INFO, FAQS } from '../data/content';
import { MapPin, Phone, Mail, Clock, MessageSquare, ChevronDown, Send, CheckCircle2, Shield, RefreshCw } from 'lucide-react';

export default function ContactSection() {
  const [openFaq, setOpenFaq] = useState<number | null>(0);
  const [contactName, setContactName] = useState('');
  const [contactEmail, setContactEmail] = useState('');
  const [contactPhone, setContactPhone] = useState('');
  const [contactMessage, setContactMessage] = useState('');
  const [submitted, setSubmitted] = useState(false);

  const generateMailtoUrl = () => {
    const subject = encodeURIComponent(`New Inquiry from ${contactName.trim() || 'Website Visitor'} - TrueLibro`);
    const body = encodeURIComponent(
      `Hello TrueLibro Team,\n\n` +
      `I am reaching out via the TrueLibro website with the following details:\n\n` +
      `• Full Name: ${contactName.trim()}\n` +
      `• Email Address: ${contactEmail.trim()}\n` +
      `• Phone / WhatsApp: ${contactPhone.trim() || 'Not provided'}\n\n` +
      `Requirements / Message:\n` +
      `${contactMessage.trim()}\n\n` +
      `---\n` +
      `Sent from TrueLibro Client Portal`
    );
    return `mailto:${BUSINESS_INFO.contact.email}?subject=${subject}&body=${body}`;
  };

  const handleContactSubmit = (e: FormEvent) => {
    e.preventDefault();
    const mailtoUrl = generateMailtoUrl();
    
    // Automatically open user's default email client
    window.location.href = mailtoUrl;
    
    // Display the Thank You confirmation
    setSubmitted(true);
  };

  const getDirectWhatsAppUrl = () => {
    const msg = `Hi TrueLibro, I am ${contactName || 'reaching out from your website'}. Phone: ${contactPhone || 'N/A'}. Query: ${contactMessage || 'I would like to inquire about accounting / offshore bookkeeping services.'}`;
    return `https://wa.me/${BUSINESS_INFO.contact.whatsapp}?text=${encodeURIComponent(msg)}`;
  };

  const handleReset = () => {
    setContactName('');
    setContactEmail('');
    setContactPhone('');
    setContactMessage('');
    setSubmitted(false);
  };

  return (
    <section id="contact" className="py-20 bg-slate-50 text-slate-900 relative transition-colors">
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
                <div className="w-10 h-10 rounded-xl bg-rose-50 text-rose-600 flex items-center justify-center shrink-0 mt-1 border border-rose-100">
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
                <div className="w-10 h-10 rounded-xl bg-sky-50 text-sky-600 flex items-center justify-center shrink-0 mt-1 border border-sky-100">
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
                <div className="w-10 h-10 rounded-xl bg-emerald-50 text-emerald-600 flex items-center justify-center shrink-0 mt-1 border border-emerald-100">
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
                <div className="w-10 h-10 rounded-xl bg-amber-50 text-amber-600 flex items-center justify-center shrink-0 mt-1 border border-amber-100">
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
              {!submitted ? (
                <>
                  <h3 className="text-xl font-bold text-slate-900 mb-2">
                    Send a Direct Message
                  </h3>
                  <p className="text-xs text-slate-600 mb-6">
                    Fill in your details below. Clicking <strong>Send Message</strong> will automatically open your email app with your prefilled details to send directly to our team.
                  </p>

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
                          className="w-full px-3.5 py-2.5 rounded-xl border border-slate-300 bg-white text-slate-900 placeholder:text-slate-400 focus:outline-none focus:ring-2 focus:ring-rose-500 text-sm"
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
                          className="w-full px-3.5 py-2.5 rounded-xl border border-slate-300 bg-white text-slate-900 placeholder:text-slate-400 focus:outline-none focus:ring-2 focus:ring-rose-500 text-sm"
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
                        className="w-full px-3.5 py-2.5 rounded-xl border border-slate-300 bg-white text-slate-900 placeholder:text-slate-400 focus:outline-none focus:ring-2 focus:ring-rose-500 text-sm"
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
                        className="w-full px-3.5 py-2.5 rounded-xl border border-slate-300 bg-white text-slate-900 placeholder:text-slate-400 focus:outline-none focus:ring-2 focus:ring-rose-500 text-sm resize-none"
                      />
                    </div>

                    <div className="flex flex-col sm:flex-row gap-3 pt-2">
                      <button
                        type="submit"
                        className="flex-1 py-3 rounded-xl bg-gradient-to-r from-rose-600 to-rose-700 hover:from-rose-500 hover:to-rose-600 text-white font-bold text-sm shadow-md transition-colors flex items-center justify-center gap-2 cursor-pointer"
                      >
                        <Send className="w-4 h-4" />
                        <span>Send Message</span>
                      </button>

                      <a
                        href={getDirectWhatsAppUrl()}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="py-3 px-6 rounded-xl bg-emerald-600 hover:bg-emerald-500 text-white font-bold text-sm shadow-md transition-colors flex items-center justify-center gap-2 cursor-pointer"
                      >
                        <MessageSquare className="w-4 h-4" />
                        <span>Send via WhatsApp</span>
                      </a>
                    </div>
                  </form>
                </>
              ) : (
                <div className="text-center py-6 sm:py-8 space-y-5 animate-in fade-in zoom-in-95 duration-300">
                  <div className="w-16 h-16 bg-emerald-100 text-emerald-600 rounded-full flex items-center justify-center mx-auto border border-emerald-200 shadow-xs">
                    <CheckCircle2 className="w-10 h-10" />
                  </div>
                  
                  <div>
                    <span className="text-xs font-bold text-emerald-700 uppercase tracking-wider bg-emerald-50 px-3 py-1 rounded-full border border-emerald-200">
                      Email Drafted & Opened
                    </span>
                    <h4 className="text-2xl font-black text-slate-900 mt-2">
                      Thank You, {contactName || 'Valued Client'}!
                    </h4>
                    <p className="text-sm text-slate-600 max-w-md mx-auto mt-2 leading-relaxed">
                      We have prepared your message and opened your email app to send to <strong className="text-slate-800">{BUSINESS_INFO.contact.email}</strong>. Once sent, our team will review your inquiry and respond within 24 business hours.
                    </p>
                  </div>

                  {/* Summary Recap Box */}
                  <div className="text-left bg-slate-50 border border-slate-200 rounded-2xl p-4 sm:p-5 text-xs sm:text-sm space-y-2 max-w-lg mx-auto shadow-xs">
                    <div className="font-bold text-slate-800 border-b border-slate-200 pb-2">
                      Inquiry Summary
                    </div>
                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-2 text-slate-700">
                      <div><strong className="text-slate-900">Name:</strong> {contactName}</div>
                      <div><strong className="text-slate-900">Email:</strong> {contactEmail}</div>
                      {contactPhone && <div><strong className="text-slate-900">Phone:</strong> {contactPhone}</div>}
                    </div>
                    {contactMessage && (
                      <div className="pt-2 text-slate-600 border-t border-slate-200 text-xs">
                        <strong className="text-slate-800 block mb-1">Message:</strong>
                        <p className="bg-white p-2.5 rounded-lg border border-slate-200 text-slate-700 whitespace-pre-wrap">
                          {contactMessage}
                        </p>
                      </div>
                    )}
                  </div>

                  {/* Actions after sending */}
                  <div className="pt-2 flex flex-wrap items-center justify-center gap-3">
                    <a
                      href={generateMailtoUrl()}
                      className="px-5 py-2.5 rounded-xl bg-rose-600 hover:bg-rose-700 text-white font-bold text-xs shadow-md transition-colors flex items-center gap-2 cursor-pointer"
                    >
                      <Mail className="w-4 h-4" />
                      <span>Re-open in Email App</span>
                    </a>

                    <a
                      href={getDirectWhatsAppUrl()}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="px-5 py-2.5 rounded-xl bg-emerald-600 hover:bg-emerald-700 text-white font-bold text-xs shadow-md transition-colors flex items-center gap-2 cursor-pointer"
                    >
                      <MessageSquare className="w-4 h-4" />
                      <span>Also WhatsApp Us</span>
                    </a>

                    <button
                      type="button"
                      onClick={handleReset}
                      className="px-5 py-2.5 rounded-xl bg-slate-100 hover:bg-slate-200 text-slate-700 font-semibold text-xs transition-colors flex items-center gap-2 border border-slate-200 cursor-pointer"
                    >
                      <RefreshCw className="w-3.5 h-3.5" />
                      <span>Send Another Message</span>
                    </button>
                  </div>
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
                        className="w-full px-4 py-3.5 text-left flex items-center justify-between text-xs sm:text-sm font-bold text-slate-900 hover:bg-slate-50 transition-colors cursor-pointer"
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
