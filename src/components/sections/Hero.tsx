"use client";

import React from "react";
import Image from "next/image";
import { motion, useReducedMotion } from "framer-motion";
import { useEnquiry } from "@/context/EnquiryModalContext";

export function Hero() {
  const shouldReduceMotion = useReducedMotion();
  const { openEnquiry } = useEnquiry();

  return (
    <section
      id="hero"
      className="relative h-[82vh] min-h-[580px] max-h-[880px] w-full flex flex-col justify-between overflow-hidden bg-[#171315]"
    >
      {/* Cinematic Architectural Backdrop with subtle slow zoom */}
      <div className="absolute inset-0 z-0 overflow-hidden pointer-events-none">
        <motion.div
          className="relative w-full h-full"
          animate={
            shouldReduceMotion ? {} : { scale: [1.0, 1.035, 1.0] }
          }
          transition={{
            duration: 16,
            repeat: Infinity,
            ease: "easeInOut",
          }}
        >
          <Image
            src="/assets/hero/hero 2.png"
            alt="CINQ by Raghava Luxury Architecture"
            fill
            priority
            className="object-cover object-[center_28%] lg:object-[center_32%]"
            sizes="100vw"
          />
        </motion.div>

        {/* Subtle dark gradient behind text for supreme readability without dimming towers */}
        <div className="absolute inset-0 bg-gradient-to-t from-black/85 via-black/25 to-black/35" />
        <div className="absolute inset-0 bg-gradient-to-r from-black/75 via-black/30 to-transparent" />
      </div>

      {/* Floating Top-Right Raghava Brand Mark (border-radius: 10px) */}
      <motion.div
        initial={shouldReduceMotion ? { opacity: 0 } : { opacity: 0, scale: 0.9 }}
        animate={shouldReduceMotion ? { opacity: 1 } : { opacity: 1, scale: 1 }}
        transition={{ duration: 0.8, delay: 0.2, ease: "easeOut" }}
        className="absolute top-20 sm:top-24 right-6 sm:right-8 lg:right-12 z-20 pointer-events-auto"
      >
        <div className="rounded-[10px] bg-brand-wine/90 backdrop-blur-md border border-brand-gold/40 p-2 sm:p-2.5 shadow-2xl hover:border-brand-gold/70 transition-colors">
          <Image
            src="/assets/hero/ragahava.png"
            alt="Raghava Projects"
            width={125}
            height={44}
            priority
            className="w-[110px] sm:w-[118px] lg:w-[124px] h-auto object-contain rounded-[7px]"
          />
        </div>
      </motion.div>

      {/* Left-Aligned Hero Content */}
      <div className="relative z-10 max-w-[1440px] mx-auto px-6 sm:px-8 lg:px-12 w-full my-auto pt-24 pb-4 lg:pt-28 lg:pb-6">
        <div className="max-w-[560px] space-y-3.5 lg:space-y-4">
          {/* Eyebrow */}
          <motion.div
            initial={shouldReduceMotion ? { opacity: 0 } : { opacity: 0, y: 15 }}
            animate={shouldReduceMotion ? { opacity: 1 } : { opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.1, ease: "easeOut" }}
            className="inline-flex items-center gap-3"
          >
            <span className="h-[1px] w-8 bg-brand-gold" />
            <span className="font-sans text-[10.5px] sm:text-[11px] uppercase tracking-widest-plus text-brand-gold font-semibold">
              CINQ BY RAGHAVA
            </span>
          </motion.div>

          {/* Hero Heading */}
          <motion.h1
            initial={shouldReduceMotion ? { opacity: 0 } : { opacity: 0, y: 15 }}
            animate={shouldReduceMotion ? { opacity: 1 } : { opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.25, ease: "easeOut" }}
            className="font-serif text-4xl sm:text-5xl lg:text-[52px] xl:text-[62px] 2xl:text-[68px] leading-[1.02] font-light tracking-tight"
          >
            <span className="block text-brand-ivory">Every Level.</span>
            <span className="block text-brand-gold font-normal">
              Designed Around
            </span>
            <span className="block text-brand-ivory">Your Lifestyle.</span>
          </motion.h1>

          {/* Supporting Text */}
          <motion.p
            initial={shouldReduceMotion ? { opacity: 0 } : { opacity: 0, y: 15 }}
            animate={shouldReduceMotion ? { opacity: 1 } : { opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.4, ease: "easeOut" }}
            className="text-stone-200 text-xs sm:text-sm lg:text-[14px] font-light tracking-wide max-w-[460px] leading-relaxed drop-shadow-sm"
          >
            A landmark luxury residential address in Hyderabad&apos;s coveted
            Financial District. Five soaring towers crafted for
            multi-generational luxury.
          </motion.p>

          {/* CTA Buttons: DOWNLOAD BROCHURE + REQUEST A CALL */}
          <motion.div
            initial={shouldReduceMotion ? { opacity: 0 } : { opacity: 0, y: 15 }}
            animate={shouldReduceMotion ? { opacity: 1 } : { opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.55, ease: "easeOut" }}
            className="pt-2 flex flex-wrap items-center gap-3.5"
          >
            <button
              type="button"
              onClick={() => openEnquiry("brochure")}
              className="inline-flex items-center justify-center h-[44px] px-7 sm:px-8 text-[11px] lg:text-xs font-semibold uppercase tracking-widest bg-brand-gold hover:bg-brand-goldLight text-brand-wine rounded-full shadow-lg hover:shadow-gold-glow transition-all duration-300 whitespace-nowrap cursor-pointer"
            >
              Download Brochure
            </button>
            <button
              type="button"
              onClick={() => openEnquiry("general")}
              className="inline-flex items-center justify-center h-[44px] px-7 sm:px-8 text-[11px] lg:text-xs font-medium uppercase tracking-widest bg-transparent hover:bg-white/10 text-brand-cream border border-brand-gold/80 hover:border-brand-gold rounded-full transition-all duration-300 whitespace-nowrap cursor-pointer"
            >
              Request a Call
            </button>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
