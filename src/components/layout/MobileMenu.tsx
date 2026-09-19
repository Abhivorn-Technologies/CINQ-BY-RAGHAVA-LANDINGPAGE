"use client";

import React from "react";
import Image from "next/image";
import { motion, AnimatePresence } from "framer-motion";
import { X, Phone, MapPin } from "lucide-react";
import { NAV_ITEMS, PROJECT_INFO } from "@/data/project";
import { useEnquiry } from "@/context/EnquiryModalContext";

interface MobileMenuProps {
  isOpen: boolean;
  onClose: () => void;
}

export function MobileMenu({ isOpen, onClose }: MobileMenuProps) {
  const { openEnquiry } = useEnquiry();

  return (
    <AnimatePresence>
      {isOpen && (
        <>
          {/* Backdrop */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={onClose}
            className="fixed inset-0 bg-black/80 backdrop-blur-md z-50 xl:hidden"
          />

          {/* Drawer */}
          <motion.div
            initial={{ x: "100%" }}
            animate={{ x: 0 }}
            exit={{ x: "100%" }}
            transition={{ type: "spring", damping: 30, stiffness: 300 }}
            className="fixed top-0 right-0 bottom-0 w-full max-w-sm bg-brand-wine border-l border-brand-gold/30 z-50 p-6 flex flex-col justify-between overflow-y-auto"
          >
            {/* Header */}
            <div className="flex items-center justify-between pb-6 border-b border-white/10">
              <Image
                src="/assets/hero/cinq.png"
                alt="CINQ by Raghava"
                width={130}
                height={40}
                className="h-8 w-auto object-contain"
              />
              <button
                onClick={onClose}
                aria-label="Close navigation menu"
                className="w-10 h-10 rounded-full border border-white/20 flex items-center justify-center text-stone-300 hover:text-brand-gold hover:border-brand-gold transition-colors cursor-pointer"
              >
                <X className="w-5 h-5" />
              </button>
            </div>

            {/* Nav Links */}
            <nav className="flex flex-col space-y-3.5 py-6">
              {NAV_ITEMS.map((item, idx) => (
                <a
                  key={item.href}
                  href={item.href}
                  onClick={onClose}
                  className="font-serif text-xl sm:text-2xl text-stone-200 hover:text-brand-gold font-light transition-colors flex items-center justify-between group"
                >
                  <span>{item.label}</span>
                  <span className="text-xs font-sans text-stone-500 group-hover:text-brand-gold transition-colors">
                    0{idx + 1}
                  </span>
                </a>
              ))}
            </nav>

            {/* Footer / CTAs: PRICING + REQUEST A CALL */}
            <div className="pt-5 border-t border-white/10 space-y-3">
              <button
                type="button"
                onClick={() => {
                  onClose();
                  openEnquiry("pricing");
                }}
                className="w-full block text-center py-2.5 bg-transparent border border-brand-gold/60 hover:bg-white/10 text-brand-gold font-semibold text-xs tracking-widest uppercase rounded-full transition-all cursor-pointer"
              >
                Pricing
              </button>

              <button
                type="button"
                onClick={() => {
                  onClose();
                  openEnquiry("general");
                }}
                className="w-full block text-center py-3 bg-brand-gold hover:bg-brand-goldLight text-brand-wine font-semibold text-xs tracking-widest uppercase rounded-full shadow-lg transition-all cursor-pointer"
              >
                Request a Call
              </button>

              <div className="space-y-2 text-xs text-stone-400 font-light pt-2">
                <div className="flex items-center gap-2">
                  <Phone className="w-3.5 h-3.5 text-brand-gold shrink-0" />
                  <a
                    href="tel:+916281245149"
                    className="hover:text-brand-gold transition-colors"
                  >
                    {PROJECT_INFO.contact.phonePrimary}
                  </a>
                </div>
                <div className="flex items-center gap-2">
                  <MapPin className="w-3.5 h-3.5 text-brand-gold shrink-0" />
                  <span>Financial District, Nanakramguda</span>
                </div>
              </div>
            </div>
          </motion.div>
        </>
      )}
    </AnimatePresence>
  );
}
