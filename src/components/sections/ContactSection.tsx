'use client';

import React, { useState } from 'react';
import { PortfolioData, Language } from '@/types/portfolio';
import { SectionHeader } from '@/components/ui/SectionHeader';
import { Mail, Phone, MapPin, Send, MessageSquare, CheckCircle2 } from 'lucide-react';

interface ContactSectionProps {
  data: PortfolioData;
  lang: Language;
}

export const ContactSection: React.FC<ContactSectionProps> = ({ data, lang }) => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    service: 'obs-operator',
    message: '',
  });
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!formData.name || !formData.email || !formData.message) return;

    const subject = encodeURIComponent(`[Portfolio Inquiry] ${formData.service} from ${formData.name}`);
    const body = encodeURIComponent(
      `Name: ${formData.name}\nEmail: ${formData.email}\nService: ${formData.service}\n\nMessage:\n${formData.message}`
    );
    window.open(`mailto:${data.email}?subject=${subject}&body=${body}`, '_blank');
    setSubmitted(true);
  };

  return (
    <section id="contact" className="py-24 relative overflow-hidden bg-cyber-grid">
      <div className="absolute bottom-0 left-1/2 -translate-x-1/2 w-[500px] h-[500px] bg-cyan-500/10 rounded-full blur-[140px] pointer-events-none"></div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <SectionHeader
          badgeText="START A PROJECT"
          badgeIcon={<MessageSquare className="w-3.5 h-3.5" />}
          titlePrefix={lang === 'id' ? 'Mari Berkolaborasi ' : "Let's Build Something "}
          titleHighlight={lang === 'id' ? 'Bersama' : 'Extraordinary'}
          subtitle={
            lang === 'id'
              ? 'Diskusikan kebutuhan Operator LCD/OBS, Desain Grafis, atau Web Development untuk proyek dan event Anda.'
              : 'Open for live production management, graphic design collaterals, and modern web applications.'
          }
        />

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10">
          {/* Left Info Column */}
          <div className="lg:col-span-5 space-y-6">
            <div className="glass-panel rounded-3xl p-8 border border-white/10 space-y-6">
              <h3 className="text-xl font-bold text-white mb-2">
                {lang === 'id' ? 'Saluran Komunikasi Langsung' : 'Direct Channels'}
              </h3>
              <p className="text-xs text-gray-300 leading-relaxed">
                {lang === 'id'
                  ? 'Saya merespons setiap pesan dalam waktu kurang dari 24 jam. Jangan ragu untuk mendiskusikan ide Anda.'
                  : 'I usually respond to inquiries within 24 hours. Feel free to reach out via email or WhatsApp.'}
              </p>

              <div className="space-y-4 pt-2">
                <a
                  href={`mailto:${data.email}`}
                  className="flex items-center gap-4 p-3.5 rounded-2xl bg-white/[0.03] border border-white/5 hover:border-cyan-500/30 hover:bg-cyan-950/20 transition-all group"
                >
                  <div className="p-3 rounded-xl bg-cyan-500/10 text-cyan-400 border border-cyan-500/20 group-hover:scale-110 transition-transform">
                    <Mail className="w-5 h-5" />
                  </div>
                  <div>
                    <div className="text-[10px] font-mono text-gray-400 uppercase">Email</div>
                    <div className="text-sm font-semibold text-white group-hover:text-cyan-300">{data.email}</div>
                  </div>
                </a>

                <a
                  href={data.socials.whatsapp}
                  target="_blank"
                  rel="noreferrer"
                  className="flex items-center gap-4 p-3.5 rounded-2xl bg-white/[0.03] border border-white/5 hover:border-green-500/30 hover:bg-green-950/20 transition-all group"
                >
                  <div className="p-3 rounded-xl bg-green-500/10 text-green-400 border border-green-500/20 group-hover:scale-110 transition-transform">
                    <Phone className="w-5 h-5" />
                  </div>
                  <div>
                    <div className="text-[10px] font-mono text-gray-400 uppercase">WhatsApp</div>
                    <div className="text-sm font-semibold text-white group-hover:text-green-300">Hubungi via Chat</div>
                  </div>
                </a>

                <div className="flex items-center gap-4 p-3.5 rounded-2xl bg-white/[0.03] border border-white/5">
                  <div className="p-3 rounded-xl bg-purple-500/10 text-purple-400 border border-purple-500/20">
                    <MapPin className="w-5 h-5" />
                  </div>
                  <div>
                    <div className="text-[10px] font-mono text-gray-400 uppercase">
                      {lang === 'id' ? 'Lokasi Kampus' : 'Base Location'}
                    </div>
                    <div className="text-sm font-semibold text-white">{data.location}</div>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Right Form Column */}
          <div className="lg:col-span-7">
            <div className="glass-panel rounded-3xl p-8 border border-white/10 relative overflow-hidden">
              {submitted ? (
                <div className="text-center py-12 space-y-4 animate-in fade-in">
                  <div className="w-16 h-16 rounded-full bg-cyan-500/20 text-cyan-400 border border-cyan-500/30 flex items-center justify-center mx-auto">
                    <CheckCircle2 className="w-8 h-8" />
                  </div>
                  <h3 className="text-2xl font-bold text-white">
                    {lang === 'id' ? 'Pesan Terkirim!' : 'Message Dispatched!'}
                  </h3>
                  <p className="text-sm text-gray-300 max-w-md mx-auto">
                    {lang === 'id'
                      ? 'Terima kasih telah menghubungi saya. Klien email Anda telah terbuka dan pesan akan segera saya tinjau.'
                      : 'Thank you for reaching out. Your email client has launched and I will get back to you shortly.'}
                  </p>
                  <button
                    onClick={() => setSubmitted(false)}
                    className="px-6 py-2.5 rounded-xl bg-white/10 hover:bg-white/20 text-xs font-mono text-cyan-300 font-bold transition-all cursor-pointer"
                  >
                    {lang === 'id' ? 'Kirim Pesan Lain' : 'Send Another Message'}
                  </button>
                </div>
              ) : (
                <form onSubmit={handleSubmit} className="space-y-5">
                  <h3 className="text-xl font-bold text-white mb-4">
                    {lang === 'id' ? 'Kirim Formulir Pesan' : 'Dispatch an Inquiry'}
                  </h3>

                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    <div className="space-y-1.5">
                      <label className="text-xs font-mono text-gray-400">
                        {lang === 'id' ? 'Nama Lengkap *' : 'Full Name *'}
                      </label>
                      <input
                        type="text"
                        required
                        value={formData.name}
                        onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                        placeholder="John Doe"
                        className="w-full px-4 py-3 rounded-xl bg-white/5 border border-white/10 text-white text-xs placeholder:text-gray-600 focus:border-cyan-500 focus:bg-white/10 outline-none transition-all"
                      />
                    </div>

                    <div className="space-y-1.5">
                      <label className="text-xs font-mono text-gray-400">
                        {lang === 'id' ? 'Alamat Email *' : 'Email Address *'}
                      </label>
                      <input
                        type="email"
                        required
                        value={formData.email}
                        onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                        placeholder="john@example.com"
                        className="w-full px-4 py-3 rounded-xl bg-white/5 border border-white/10 text-white text-xs placeholder:text-gray-600 focus:border-cyan-500 focus:bg-white/10 outline-none transition-all"
                      />
                    </div>
                  </div>

                  <div className="space-y-1.5">
                    <label className="text-xs font-mono text-gray-400">
                      {lang === 'id' ? 'Kategori Kebutuhan' : 'Service Interest'}
                    </label>
                    <select
                      value={formData.service}
                      onChange={(e) => setFormData({ ...formData, service: e.target.value })}
                      className="w-full px-4 py-3 rounded-xl bg-[#0d121d] border border-white/10 text-white text-xs focus:border-cyan-500 outline-none transition-all"
                    >
                      <option value="obs-operator">Operator LCD & OBS Live Stage</option>
                      <option value="graphic-design">Graphic Design & Event Visual Branding</option>
                      <option value="web-dev">Web Development & UI/UX Design</option>
                      <option value="other">Kolaborasi / Lainnya</option>
                    </select>
                  </div>

                  <div className="space-y-1.5">
                    <label className="text-xs font-mono text-gray-400">
                      {lang === 'id' ? 'Pesan / Rincian Acara *' : 'Message / Event Brief *'}
                    </label>
                    <textarea
                      required
                      rows={4}
                      value={formData.message}
                      onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                      placeholder={
                        lang === 'id'
                          ? 'Ceritakan tentang kebutuhan acara atau proyek Anda...'
                          : 'Tell me about your event or project vision...'
                      }
                      className="w-full px-4 py-3 rounded-xl bg-white/5 border border-white/10 text-white text-xs placeholder:text-gray-600 focus:border-cyan-500 focus:bg-white/10 outline-none transition-all resize-none"
                    />
                  </div>

                  <button
                    type="submit"
                    className="w-full py-3.5 rounded-xl bg-gradient-to-r from-cyan-500 to-blue-600 hover:from-cyan-400 hover:to-blue-500 text-black font-bold text-xs flex items-center justify-center gap-2 shadow-lg shadow-cyan-500/25 transition-all hover:scale-[1.01] active:scale-95 cursor-pointer"
                  >
                    <span>{lang === 'id' ? 'KIRIM PESAN SEKARANG' : 'TRANSMIT MESSAGE'}</span>
                    <Send className="w-4 h-4" />
                  </button>
                </form>
              )}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
