"use client";

import React, { useState } from "react";
import { Container } from "@/components/ui/Container";
import { Reveal } from "@/components/ui/Reveal";
import { PROJECT_INFO } from "@/data/project";
import {
  Phone,
  Mail,
  MapPin,
  ShieldCheck,
  CheckCircle2,
  Send,
  Sparkles,
} from "lucide-react";
import { openWhatsAppEnquiry } from "@/lib/whatsapp";

export function Contact() {
  const [formSubmitted, setFormSubmitted] = useState(false);
  const [consent, setConsent] = useState(true);
  const [errors, setErrors] = useState<{ name?: string; phone?: string }>({});
  const [formData, setFormData] = useState({
    name: "",
    phone: "",
    email: "",
    message: "",
  });

  const handleFormSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    const newErrors: { name?: string; phone?: string } = {};

    if (!formData.name.trim()) {
      newErrors.name = "Please enter your full name";
    }
    const cleanPhone = formData.phone.replace(/[^0-9+]/g, "");
    if (!cleanPhone || cleanPhone.length < 8) {
      newErrors.phone = "Please enter a valid phone number";
    }

    if (Object.keys(newErrors).length > 0) {
      setErrors(newErrors);
      return;
    }

    setErrors({});

    // Open WhatsApp with prefilled message
    openWhatsAppEnquiry({
      name: formData.name,
      phone: formData.phone,
      email: formData.email,
      message: formData.message || "Website Contact Form Enquiry",
    });

    setFormSubmitted(true);
  };

  return (
    <section
      id="contact"
      className="bg-[#24040B] text-stone-200 py-20 lg:py-28 relative overflow-hidden border-t border-brand-gold/20"
    >
      <Container>
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-center">
          {/* Left: Contact Info & VIP Invitation */}
          <div className="lg:col-span-5 space-y-7">
            <Reveal>
              <span className="text-xs uppercase tracking-super-wide text-brand-gold font-semibold block mb-2 flex items-center gap-2">
                <Sparkles className="w-3.5 h-3.5 text-brand-gold" />
                <span>EXPERIENCE CINQ</span>
              </span>
              <h2 className="font-serif text-3xl sm:text-4xl lg:text-[44px] text-white font-light leading-[1.15]">
                Your New Beginning <br />
                Starts Here.
              </h2>
            </Reveal>

            <Reveal delay={0.15}>
              <p className="text-stone-300 font-light text-sm sm:text-base leading-relaxed">
                Connect with our senior relationship team to schedule a private
                preview of the experience gallery, architectural scale model, and
                luxury residence layouts.
              </p>
            </Reveal>

            {/* Direct Contact Points */}
            <Reveal delay={0.25}>
              <div className="space-y-4 pt-2 border-t border-brand-gold/20">
                <div className="flex items-start gap-4">
                  <div className="w-10 h-10 rounded-xl bg-brand-gold/10 border border-brand-gold/30 flex items-center justify-center text-brand-gold shrink-0 mt-0.5">
                    <Phone className="w-4 h-4" />
                  </div>
                  <div>
                    <span className="text-[11px] uppercase tracking-wider text-stone-400 block font-medium">
                      Direct Enquiries
                    </span>
                    <a
                      href="tel:+916281245149"
                      className="text-sm sm:text-base text-white hover:text-brand-gold font-medium transition-colors"
                    >
                      {PROJECT_INFO.contact.phonePrimary}
                    </a>
                  </div>
                </div>

                <div className="flex items-start gap-4">
                  <div className="w-10 h-10 rounded-xl bg-brand-gold/10 border border-brand-gold/30 flex items-center justify-center text-brand-gold shrink-0 mt-0.5">
                    <MapPin className="w-4 h-4" />
                  </div>
                  <div>
                    <span className="text-[11px] uppercase tracking-wider text-stone-400 block font-medium">
                      Experience Centre & Site
                    </span>
                    <p className="text-xs sm:text-sm text-stone-300 font-light leading-snug">
                      {PROJECT_INFO.address.full}
                    </p>
                  </div>
                </div>

                <div className="flex items-center gap-3 pt-2 text-xs text-brand-gold font-medium">
                  <ShieldCheck className="w-4 h-4 shrink-0" />
                  <span>TS RERA REG. NO: {PROJECT_INFO.rera.number}</span>
                </div>
              </div>
            </Reveal>
          </div>

          {/* Right: Contact / Enquiry Form */}
          <div className="lg:col-span-7">
            <Reveal delay={0.2}>
              <div className="bg-[#2E050E]/90 backdrop-blur-md rounded-2xl border border-brand-gold/30 p-6 sm:p-8 md:p-10 shadow-2xl space-y-6">
                <div>
                  <span className="text-xs uppercase tracking-super-wide text-brand-gold font-semibold block mb-1">
                    GET IN TOUCH
                  </span>
                  <h3 className="font-serif text-2xl sm:text-3xl text-white font-light">
                    Request a Private Callback
                  </h3>
                  <p className="text-xs text-stone-400 font-light mt-1">
                    Please fill out the form below. Our relationship advisory team will connect with you.
                  </p>
                </div>

                {formSubmitted ? (
                  <div className="text-center py-10 space-y-3">
                    <div className="w-14 h-14 rounded-full bg-brand-gold/20 text-brand-gold flex items-center justify-center mx-auto border border-brand-gold/50 shadow-gold-glow">
                      <CheckCircle2 className="w-7 h-7" />
                    </div>
                    <h4 className="font-serif text-2xl text-white">Thank You</h4>
                    <p className="text-xs text-stone-300 font-light max-w-sm mx-auto leading-relaxed">
                      Your enquiry has been received. A senior relationship manager will connect with you shortly.
                    </p>
                    <button
                      onClick={() => {
                        setFormSubmitted(false);
                        setFormData({ name: "", phone: "", email: "", message: "" });
                      }}
                      className="text-xs uppercase tracking-widest text-brand-gold hover:underline pt-3 inline-block font-semibold"
                    >
                      Submit Another Query
                    </button>
                  </div>
                ) : (
                  <form onSubmit={handleFormSubmit} className="space-y-4">
                    {/* Row 1: Name & Phone */}
                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                      <div>
                        <input
                          type="text"
                          placeholder="Full Name *"
                          value={formData.name}
                          onChange={(e) => {
                            setFormData({ ...formData, name: e.target.value });
                            if (errors.name) setErrors({ ...errors, name: undefined });
                          }}
                          className={`w-full bg-[#1C0207] border ${
                            errors.name ? "border-red-400" : "border-white/15"
                          } rounded-lg px-4 py-3 text-xs text-white placeholder-stone-500 focus:outline-none focus:border-brand-gold transition-colors`}
                        />
                        {errors.name && (
                          <span className="text-[10px] text-red-400 mt-1 block">
                            {errors.name}
                          </span>
                        )}
                      </div>
                      <div>
                        <input
                          type="tel"
                          placeholder="Phone Number *"
                          value={formData.phone}
                          onChange={(e) => {
                            setFormData({ ...formData, phone: e.target.value });
                            if (errors.phone) setErrors({ ...errors, phone: undefined });
                          }}
                          className={`w-full bg-[#1C0207] border ${
                            errors.phone ? "border-red-400" : "border-white/15"
                          } rounded-lg px-4 py-3 text-xs text-white placeholder-stone-500 focus:outline-none focus:border-brand-gold transition-colors`}
                        />
                        {errors.phone && (
                          <span className="text-[10px] text-red-400 mt-1 block">
                            {errors.phone}
                          </span>
                        )}
                      </div>
                    </div>

                    {/* Row 2: Email & Message */}
                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                      <div>
                        <input
                          type="email"
                          placeholder="Email Address"
                          value={formData.email}
                          onChange={(e) =>
                            setFormData({ ...formData, email: e.target.value })
                          }
                          className="w-full bg-[#1C0207] border border-white/15 rounded-lg px-4 py-3 text-xs text-white placeholder-stone-500 focus:outline-none focus:border-brand-gold transition-colors"
                        />
                      </div>
                      <div>
                        <input
                          type="text"
                          placeholder="Message / Preferred Time (Optional)"
                          value={formData.message}
                          onChange={(e) =>
                            setFormData({ ...formData, message: e.target.value })
                          }
                          className="w-full bg-[#1C0207] border border-white/15 rounded-lg px-4 py-3 text-xs text-white placeholder-stone-500 focus:outline-none focus:border-brand-gold transition-colors"
                        />
                      </div>
                    </div>

                    {/* Row 3: Consent Checkbox */}
                    <div className="flex items-start gap-2.5 pt-1">
                      <input
                        type="checkbox"
                        id="consent-check"
                        checked={consent}
                        onChange={(e) => setConsent(e.target.checked)}
                        className="mt-0.5 accent-brand-gold rounded cursor-pointer"
                      />
                      <label
                        htmlFor="consent-check"
                        className="text-[10px] text-stone-400 font-light leading-tight cursor-pointer"
                      >
                        I authorise company representatives to Call, SMS, Email, or WhatsApp me about CINQ by Raghava products and offers.
                      </label>
                    </div>

                    {/* CTA Submit Button */}
                    <div className="pt-2">
                      <button
                        type="submit"
                        disabled={!consent}
                        className="w-full py-4 bg-brand-gold hover:bg-brand-goldLight disabled:opacity-50 text-brand-wine font-semibold text-xs tracking-widest uppercase rounded-lg shadow-lg hover:shadow-gold-glow transition-all duration-300 flex items-center justify-center gap-2"
                      >
                        <span>SUBMIT NOW</span>
                        <Send className="w-3.5 h-3.5" />
                      </button>
                    </div>
                  </form>
                )}
              </div>
            </Reveal>
          </div>
        </div>
      </Container>
    </section>
  );
}
