"use client";

import React, { useState, useEffect, useCallback } from "react";
import { motion, AnimatePresence, useReducedMotion } from "framer-motion";
import {
  X,
  CheckCircle2,
  Send,
  Sparkles,
  Phone,
  User,
  Mail,
  MessageSquare,
  FileText,
  Tag,
} from "lucide-react";
import { openWhatsAppEnquiry } from "@/lib/whatsapp";
import { useEnquiry } from "@/context/EnquiryModalContext";

export function ContactPopup() {
  const { isOpen, enquiryType, closeEnquiry } = useEnquiry();
  const [submitted, setSubmitted] = useState(false);
  const [consent, setConsent] = useState(true);
  const [formData, setFormData] = useState({
    name: "",
    phone: "",
    email: "",
    message: "",
  });
  const [errors, setErrors] = useState<{
    name?: string;
    phone?: string;
    email?: string;
  }>({});

  const shouldReduceMotion = useReducedMotion();

  // Reset submitted state whenever modal opens or enquiryType changes
  useEffect(() => {
    if (isOpen) {
      setSubmitted(false);
      setErrors({});
    }
  }, [isOpen, enquiryType]);

  const handleClose = useCallback(() => {
    closeEnquiry();
  }, [closeEnquiry]);

  // Keyboard navigation (ESC key) & body scroll lock
  useEffect(() => {
    if (!isOpen) return;

    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === "Escape") {
        handleClose();
      }
    };

    window.addEventListener("keydown", handleKeyDown);
    const originalOverflow = document.body.style.overflow;
    document.body.style.overflow = "hidden";

    return () => {
      window.removeEventListener("keydown", handleKeyDown);
      document.body.style.overflow = originalOverflow;
    };
  }, [isOpen, handleClose]);

  const validate = () => {
    const newErrors: { name?: string; phone?: string; email?: string } = {};

    if (!formData.name.trim()) {
      newErrors.name = "Please enter your full name";
    }

    const cleanPhone = formData.phone.replace(/[^0-9+]/g, "");
    if (!cleanPhone || cleanPhone.length < 8) {
      newErrors.phone = "Please enter a valid phone number";
    }

    if (
      formData.email.trim() &&
      !/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(formData.email.trim())
    ) {
      newErrors.email = "Please enter a valid email address";
    }

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!validate()) return;

    // Send pre-filled enquiry to WhatsApp with dynamic intent
    openWhatsAppEnquiry({
      type: enquiryType,
      name: formData.name,
      phone: formData.phone,
      email: formData.email,
      message:
        formData.message ||
        (enquiryType === "brochure"
          ? "Brochure Request"
          : enquiryType === "pricing"
          ? "Pricing Details Enquiry"
          : "General Project Enquiry"),
    });

    setSubmitted(true);
  };

  // Content configurations based on enquiryType
  const getModalConfig = () => {
    switch (enquiryType) {
      case "brochure":
        return {
          badge: "BROCHURE REQUEST",
          badgeIcon: <FileText className="w-3 h-3 text-brand-gold" />,
          heading: "DOWNLOAD BROCHURE",
          subheading: "Please fill in your details to receive the CINQ by Raghava brochure.",
          ctaText: "GET BROCHURE",
          placeholderMessage: "Specify any preferred unit or tower for brochure...",
          successTitle: "THANK YOU!",
          successMessage: "Thank you for contacting the CINQ by Raghava team.",
          successSubtext: "Our team will get back to you soon.",
          brochureNote: "Our team will share the brochure with you shortly.",
        };
      case "pricing":
        return {
          badge: "PRICING DETAILS",
          badgeIcon: <Tag className="w-3 h-3 text-brand-gold" />,
          heading: "GET PRICING DETAILS",
          subheading: "Please fill in your details to receive the latest pricing information for CINQ by Raghava.",
          ctaText: "GET PRICING",
          placeholderMessage: "Mention your preferred unit size (e.g. 4BHK 3600 sq.ft.)...",
          successTitle: "THANK YOU!",
          successMessage: "Thank you for your enquiry.",
          successSubtext: "Our team will get back to you soon with the pricing details.",
          brochureNote: null,
        };
      case "general":
      default:
        return {
          badge: "GET IN TOUCH",
          badgeIcon: <Sparkles className="w-3 h-3 text-brand-gold" />,
          heading: "Your New Beginning Starts Here.",
          subheading: "Schedule a visit or speak with our team.",
          ctaText: "SUBMIT NOW",
          placeholderMessage: "Share your preferred unit or query...",
          successTitle: "THANK YOU!",
          successMessage: "Thank you for contacting the CINQ by Raghava team.",
          successSubtext: "Our team will get back to you soon.",
          brochureNote: null,
        };
    }
  };

  const config = getModalConfig();

  return (
    <AnimatePresence>
      {isOpen && (
        <div
          className="fixed inset-0 z-50 flex items-center justify-center p-4 sm:p-6 bg-black/80 backdrop-blur-md"
          onClick={handleClose}
          role="dialog"
          aria-modal="true"
          aria-labelledby="popup-heading"
        >
          <motion.div
            initial={
              shouldReduceMotion
                ? { opacity: 0 }
                : { opacity: 0, scale: 0.96, y: 15 }
            }
            animate={
              shouldReduceMotion
                ? { opacity: 1 }
                : { opacity: 1, scale: 1, y: 0 }
            }
            exit={
              shouldReduceMotion
                ? { opacity: 0 }
                : { opacity: 0, scale: 0.96, y: 10 }
            }
            transition={{ duration: 0.35, ease: [0.22, 1, 0.36, 1] }}
            onClick={(e) => e.stopPropagation()}
            className="relative w-full max-w-lg bg-[#23040C] text-[#FAF7F1] rounded-2xl sm:rounded-3xl border border-brand-gold/40 p-6 sm:p-8 shadow-2xl overflow-hidden max-h-[90vh] overflow-y-auto"
          >
            {/* Ambient luxury glows */}
            <div className="absolute top-0 right-0 w-48 h-48 bg-brand-gold/10 rounded-full blur-3xl pointer-events-none" />
            <div className="absolute bottom-0 left-0 w-48 h-48 bg-brand-wineLight/25 rounded-full blur-3xl pointer-events-none" />

            {/* Close Button */}
            <button
              type="button"
              onClick={handleClose}
              aria-label="Close enquiry popup"
              className="absolute top-4 right-4 sm:top-5 sm:right-5 w-9 h-9 rounded-full bg-white/10 hover:bg-white/20 text-stone-300 hover:text-white flex items-center justify-center border border-white/15 transition-all duration-200 cursor-pointer z-20 hover:scale-105"
            >
              <X className="w-4 h-4" />
            </button>

            {submitted ? (
              <div className="text-center py-6 sm:py-8 space-y-4 relative z-10">
                <div className="w-14 h-14 rounded-full bg-brand-gold/15 text-brand-gold flex items-center justify-center mx-auto border border-brand-gold/40">
                  <CheckCircle2 className="w-8 h-8" />
                </div>
                <h3 className="font-serif text-2xl sm:text-3xl text-white font-light tracking-wide">
                  {config.successTitle}
                </h3>
                <div className="space-y-1.5">
                  <p className="text-stone-200 text-xs sm:text-sm font-light leading-relaxed max-w-sm mx-auto">
                    {config.successMessage}
                  </p>
                  <p className="text-stone-400 text-xs sm:text-sm font-light leading-relaxed max-w-sm mx-auto">
                    {config.successSubtext}
                  </p>
                </div>

                {config.brochureNote && (
                  <div className="pt-2 pb-1">
                    <p className="text-brand-gold text-xs sm:text-[13px] font-medium max-w-xs mx-auto px-3 py-2 rounded-lg bg-brand-gold/10 border border-brand-gold/30">
                      {config.brochureNote}
                    </p>
                  </div>
                )}

                <div className="pt-3">
                  <button
                    type="button"
                    onClick={handleClose}
                    className="px-6 py-2.5 bg-brand-gold hover:bg-brand-goldLight text-brand-wine font-semibold text-xs tracking-widest uppercase rounded-full shadow-md transition-all cursor-pointer"
                  >
                    Close Window
                  </button>
                </div>
              </div>
            ) : (
              <div className="relative z-10">
                {/* Header */}
                <div className="mb-5 pr-8">
                  <div className="inline-flex items-center space-x-1.5 px-2.5 py-0.5 rounded-full bg-white/10 border border-brand-gold/30 text-brand-gold text-[10px] uppercase tracking-super-wide font-semibold mb-2">
                    {config.badgeIcon}
                    <span>{config.badge}</span>
                  </div>
                  <h3
                    id="popup-heading"
                    className="font-serif text-2xl sm:text-3xl text-white font-light leading-snug"
                  >
                    {config.heading}
                  </h3>
                  <p className="text-stone-300 text-xs font-light mt-1">
                    {config.subheading}
                  </p>
                </div>

                {/* Form */}
                <form onSubmit={handleSubmit} className="space-y-3.5">
                  {/* Full Name */}
                  <div>
                    <label className="block text-[10px] uppercase tracking-widest text-stone-300 mb-1 font-medium">
                      Full Name <span className="text-brand-gold">*</span>
                    </label>
                    <div className="relative">
                      <input
                        type="text"
                        placeholder="Enter your full name"
                        value={formData.name}
                        onChange={(e) => {
                          setFormData({ ...formData, name: e.target.value });
                          if (errors.name)
                            setErrors({ ...errors, name: undefined });
                        }}
                        className={`w-full bg-[#1A0208] border ${
                          errors.name ? "border-red-400" : "border-white/15"
                        } rounded-lg px-3.5 py-2.5 text-xs text-white placeholder-stone-500 focus:outline-none focus:border-brand-gold transition-colors`}
                      />
                      <User className="absolute right-3 top-2.5 w-4 h-4 text-stone-500 pointer-events-none" />
                    </div>
                    {errors.name && (
                      <span className="text-[10px] text-red-400 mt-0.5 block">
                        {errors.name}
                      </span>
                    )}
                  </div>

                  {/* Phone Number & Email Address */}
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                    <div>
                      <label className="block text-[10px] uppercase tracking-widest text-stone-300 mb-1 font-medium">
                        Phone Number <span className="text-brand-gold">*</span>
                      </label>
                      <div className="relative">
                        <input
                          type="tel"
                          placeholder="+91 98765 43210"
                          value={formData.phone}
                          onChange={(e) => {
                            setFormData({ ...formData, phone: e.target.value });
                            if (errors.phone)
                              setErrors({ ...errors, phone: undefined });
                          }}
                          className={`w-full bg-[#1A0208] border ${
                            errors.phone ? "border-red-400" : "border-white/15"
                          } rounded-lg px-3.5 py-2.5 text-xs text-white placeholder-stone-500 focus:outline-none focus:border-brand-gold transition-colors`}
                        />
                        <Phone className="absolute right-3 top-2.5 w-4 h-4 text-stone-500 pointer-events-none" />
                      </div>
                      {errors.phone && (
                        <span className="text-[10px] text-red-400 mt-0.5 block">
                          {errors.phone}
                        </span>
                      )}
                    </div>

                    <div>
                      <label className="block text-[10px] uppercase tracking-widest text-stone-300 mb-1 font-medium">
                        Email Address
                      </label>
                      <div className="relative">
                        <input
                          type="email"
                          placeholder="name@example.com"
                          value={formData.email}
                          onChange={(e) => {
                            setFormData({ ...formData, email: e.target.value });
                            if (errors.email)
                              setErrors({ ...errors, email: undefined });
                          }}
                          className={`w-full bg-[#1A0208] border ${
                            errors.email ? "border-red-400" : "border-white/15"
                          } rounded-lg px-3.5 py-2.5 text-xs text-white placeholder-stone-500 focus:outline-none focus:border-brand-gold transition-colors`}
                        />
                        <Mail className="absolute right-3 top-2.5 w-4 h-4 text-stone-500 pointer-events-none" />
                      </div>
                      {errors.email && (
                        <span className="text-[10px] text-red-400 mt-0.5 block">
                          {errors.email}
                        </span>
                      )}
                    </div>
                  </div>

                  {/* Message */}
                  <div>
                    <label className="block text-[10px] uppercase tracking-widest text-stone-300 mb-1 font-medium">
                      Message (Optional)
                    </label>
                    <div className="relative">
                      <input
                        type="text"
                        placeholder={config.placeholderMessage}
                        value={formData.message}
                        onChange={(e) =>
                          setFormData({ ...formData, message: e.target.value })
                        }
                        className="w-full bg-[#1A0208] border border-white/15 rounded-lg px-3.5 py-2.5 text-xs text-white placeholder-stone-500 focus:outline-none focus:border-brand-gold transition-colors"
                      />
                      <MessageSquare className="absolute right-3 top-2.5 w-4 h-4 text-stone-500 pointer-events-none" />
                    </div>
                  </div>

                  {/* Consent Checkbox */}
                  <div className="flex items-start gap-2 pt-0.5">
                    <input
                      type="checkbox"
                      id="popup-consent"
                      checked={consent}
                      onChange={(e) => setConsent(e.target.checked)}
                      className="mt-0.5 accent-brand-gold rounded cursor-pointer"
                    />
                    <label
                      htmlFor="popup-consent"
                      className="text-[10px] text-stone-400 font-light leading-tight cursor-pointer"
                    >
                      I authorise company representatives to Call, SMS, Email, or WhatsApp me about CINQ by Raghava.
                    </label>
                  </div>

                  {/* CTA Submit Button */}
                  <div className="pt-2">
                    <button
                      type="submit"
                      disabled={!consent}
                      className="w-full py-3 bg-brand-gold hover:bg-brand-goldLight disabled:opacity-50 text-brand-wine font-semibold text-xs tracking-widest uppercase rounded-lg shadow-lg hover:shadow-gold-glow transition-all duration-300 flex items-center justify-center gap-2 cursor-pointer"
                    >
                      <span>{config.ctaText}</span>
                      <Send className="w-3.5 h-3.5" />
                    </button>
                  </div>
                </form>
              </div>
            )}
          </motion.div>
        </div>
      )}
    </AnimatePresence>
  );
}
