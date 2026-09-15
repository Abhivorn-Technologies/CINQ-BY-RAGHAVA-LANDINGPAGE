"use client";

import React from "react";
import Image from "next/image";
import { motion, useReducedMotion } from "framer-motion";

export function Clubhouse() {
  const shouldReduceMotion = useReducedMotion();

  return (
    <section
      id="club-house"
      className="bg-[#24040C] text-[#FAF7F1] py-14 sm:py-18 lg:py-20 relative overflow-hidden border-b border-brand-gold/20"
    >
      {/* Background Architectural Ambient Accents */}
      <div className="absolute top-0 right-1/4 w-96 h-96 bg-brand-gold/5 rounded-full blur-3xl pointer-events-none" />
      <div className="absolute bottom-0 left-10 w-96 h-96 bg-brand-wineLight/20 rounded-full blur-3xl pointer-events-none" />

      {/* Main Full-Width Container matching reference layout */}
      <div className="w-full max-w-[1460px] xl:max-w-[1520px] 2xl:max-w-[1560px] mx-auto px-5 sm:px-8 lg:px-10 xl:px-12 relative z-10">
        <div className="relative rounded-3xl lg:rounded-tl-[80px] lg:rounded-tr-[80px] overflow-hidden bg-gradient-to-r from-[#2B050F] via-[#23040C] to-[#1E030A] border border-brand-gold/25 shadow-2xl p-6 sm:p-8 lg:p-10 xl:p-12">
          
          {/* Subtle Fluted/Architectural Vertical Line Texture on Left */}
          <div
            className="absolute inset-0 opacity-[0.06] pointer-events-none"
            style={{
              backgroundImage:
                "repeating-linear-gradient(90deg, #C9A46A 0, #C9A46A 1px, transparent 1px, transparent 24px)",
            }}
          />

          {/* Two-Column Grid Layout: Left Text Panel (~28-30%), Right Image (~70-72%) */}
          <div className="relative z-10 grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-10 xl:gap-12 items-center min-h-[460px] sm:min-h-[520px] lg:min-h-[560px]">
            
            {/* LEFT TEXT PANEL */}
            <motion.div
              initial={shouldReduceMotion ? {} : { opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true, margin: "-60px" }}
              transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1] }}
              className="lg:col-span-4 xl:col-span-4 flex flex-col justify-center pr-0 lg:pr-4"
            >
              {/* Eyebrow with gold accent underline */}
              <div className="mb-4">
                <span className="text-[11px] sm:text-xs uppercase tracking-super-wide text-brand-gold font-semibold block">
                  CLUB HOUSE
                </span>
                <div className="w-12 h-[1.5px] bg-brand-gold/60 mt-1.5" />
              </div>

              {/* Main Headline */}
              <h2 className="font-serif text-3xl sm:text-4xl lg:text-[42px] xl:text-[48px] text-[#FAF7F1] font-light leading-[1.12] tracking-tight">
                Crafted{" "}
                <span className="italic font-serif text-brand-goldLight font-normal">
                  for
                </span>
                <br />
                your lifestyle
              </h2>

              {/* Supporting Text */}
              <p className="text-stone-300 font-light text-xs sm:text-sm lg:text-[14.5px] leading-relaxed tracking-wide mt-4 sm:mt-5 max-w-sm">
                A world of recreation, wellness and social experiences,
                designed to bring people together.
              </p>
            </motion.div>

            {/* RIGHT CLUBHOUSE IMAGE */}
            <motion.div
              initial={shouldReduceMotion ? {} : { opacity: 0, scale: 0.96 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true, margin: "-60px" }}
              transition={{ duration: 0.9, ease: [0.22, 1, 0.36, 1] }}
              className="lg:col-span-8 xl:col-span-8 w-full h-full flex items-center"
            >
              <div className="relative w-full h-[320px] sm:h-[440px] lg:h-[500px] xl:h-[540px] rounded-2xl lg:rounded-tr-[70px] lg:rounded-br-2xl overflow-hidden border border-brand-gold/30 shadow-2xl group bg-[#1A0308]">
                <Image
                  src="/assets/club house.png"
                  alt="CINQ Grand Multi-level Clubhouse Pavilion"
                  fill
                  priority
                  sizes="(max-width: 1024px) 100vw, 70vw"
                  className="object-cover object-center transition-transform duration-1000 ease-out group-hover:scale-[1.02]"
                />

                {/* Subtle soft vignette overlay on edges */}
                <div className="absolute inset-0 bg-gradient-to-t from-[#160206]/50 via-transparent to-transparent" />
                <div className="absolute inset-0 bg-gradient-to-r from-[#2B050F]/40 via-transparent to-transparent hidden lg:block" />
              </div>
            </motion.div>

          </div>
        </div>
      </div>
    </section>
  );
}
