"use client";

import React, { useState } from "react";
import Image from "next/image";
import { motion, AnimatePresence, useReducedMotion } from "framer-motion";
import { Container } from "@/components/ui/Container";
import { Reveal } from "@/components/ui/Reveal";
import { BedDouble, X, ZoomIn, Compass, ArrowRight } from "lucide-react";

export function Residences() {
  const [modalOpen, setModalOpen] = useState(false);
  const shouldReduceMotion = useReducedMotion();

  return (
    <section
      id="residences"
      className="bg-[#FAF7F1] text-brand-charcoal py-20 lg:py-28 border-b border-brand-creamBorder/60"
    >
      <Container>
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-14 items-center">
          {/* Left Editorial Narrative */}
          <div className="lg:col-span-5 space-y-6">
            <Reveal>
              <span className="text-xs uppercase tracking-super-wide text-brand-goldDim font-semibold block mb-2">
                RESIDENCES
              </span>
              <h2 className="font-serif text-3xl sm:text-4xl lg:text-[46px] text-brand-wine font-light leading-[1.1]">
                Thoughtfully <br />
                Designed Homes
              </h2>
            </Reveal>

            <Reveal delay={0.15}>
              <p className="text-stone-700 font-light text-sm sm:text-base leading-relaxed">
                Spacious 4BHK residences with staff room, crafted for modern families.
              </p>
            </Reveal>

            {/* Spec Tag */}
            <Reveal delay={0.25}>
              <div className="inline-flex items-center gap-3 py-2.5 px-4 rounded-xl bg-[#F4ECE1] border border-brand-creamBorder text-brand-wine">
                <BedDouble className="w-5 h-5 text-brand-goldDim" />
                <span className="text-xs font-semibold uppercase tracking-wider">
                  4BHK + STAFF ROOM
                </span>
                <span className="text-stone-400">|</span>
                <span className="text-xs font-medium uppercase tracking-wider text-stone-700">
                  3600 SQ. FT.
                </span>
              </div>
            </Reveal>

            {/* CTA Buttons */}
            <Reveal delay={0.35}>
              <div className="pt-2 flex flex-wrap items-center gap-3.5">
                <button
                  onClick={() => setModalOpen(true)}
                  className="inline-flex items-center justify-center gap-2 h-[44px] px-7 text-[11px] lg:text-xs font-semibold uppercase tracking-widest bg-brand-gold hover:bg-brand-goldLight text-brand-wine rounded-full shadow-md hover:shadow-gold-glow transition-all duration-300"
                >
                  <span>View Floor Plan</span>
                  <ZoomIn className="w-3.5 h-3.5" />
                </button>
                <a
                  href="#contact"
                  className="inline-flex items-center justify-center h-[44px] px-7 text-[11px] lg:text-xs font-medium uppercase tracking-widest bg-transparent hover:bg-brand-cream/60 text-brand-wine border border-brand-wine/40 hover:border-brand-wine rounded-full transition-all duration-300"
                >
                  Request a Call
                </a>
              </div>
            </Reveal>
          </div>

          {/* Right Architectural Residence Visual */}
          <div className="lg:col-span-7">
            <motion.div
              initial={
                shouldReduceMotion
                  ? { opacity: 0 }
                  : { opacity: 0, y: 30 }
              }
              whileInView={
                shouldReduceMotion
                  ? { opacity: 1 }
                  : { opacity: 1, y: 0 }
              }
              viewport={{ once: true, margin: "-60px" }}
              transition={{
                duration: 0.75,
                ease: [0.22, 1, 0.36, 1],
              }}
            >
              <div
                onClick={() => setModalOpen(true)}
                className="relative bg-white border border-brand-creamBorder hover:border-brand-gold/50 rounded-2xl p-3 sm:p-4 md:p-5 shadow-card-light transition-all duration-500 cursor-pointer group overflow-hidden"
              >
                {/* Compass Marker in Top Right */}
                <div className="absolute top-5 right-5 z-10 flex items-center gap-1 text-[11px] font-semibold text-brand-wine/80 bg-[#FAF7F1]/90 backdrop-blur-xs px-2.5 py-1 rounded-full border border-brand-creamBorder shadow-xs">
                  <Compass className="w-3.5 h-3.5 text-brand-goldDim" />
                  <span>N</span>
                </div>

                {/* g12.png High-Res Residence Floor Plan Visual */}
                <div className="relative w-full h-[320px] sm:h-[380px] md:h-[420px] lg:h-[440px] rounded-xl overflow-hidden bg-[#FCFAF6] flex items-center justify-center">
                  <Image
                    src="/assets/gallary/g12.png"
                    alt="CINQ by Raghava 4BHK Residence Floor Plan"
                    fill
                    sizes="(max-width: 1024px) 100vw, 58vw"
                    className="object-contain object-center transition-transform duration-700 ease-out group-hover:scale-[1.02]"
                  />
                </div>

                {/* Hover overlay hint */}
                <div className="absolute inset-0 bg-brand-wine/10 opacity-0 group-hover:opacity-100 transition-opacity rounded-2xl flex items-center justify-center pointer-events-none">
                  <span className="px-4 py-2 rounded-full bg-brand-wine text-brand-cream text-xs font-semibold tracking-wider uppercase shadow-lg flex items-center gap-1.5">
                    <ZoomIn className="w-3.5 h-3.5 text-brand-gold" />
                    Click to Expand Floor Plan
                  </span>
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </Container>

      {/* Interactive Floor Plan Lightbox Modal */}
      <AnimatePresence>
        {modalOpen && (
          <div className="fixed inset-0 z-50 flex items-center justify-center p-4 sm:p-6 lg:p-10">
            {/* Backdrop */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              onClick={() => setModalOpen(false)}
              className="fixed inset-0 bg-black/85 backdrop-blur-md"
            />

            {/* Modal Content */}
            <motion.div
              initial={
                shouldReduceMotion
                  ? { opacity: 0 }
                  : { opacity: 0, scale: 0.95, y: 20 }
              }
              animate={
                shouldReduceMotion
                  ? { opacity: 1 }
                  : { opacity: 1, scale: 1, y: 0 }
              }
              exit={
                shouldReduceMotion
                  ? { opacity: 0 }
                  : { opacity: 0, scale: 0.95, y: 20 }
              }
              transition={{ duration: 0.35, ease: [0.22, 1, 0.36, 1] }}
              className="relative bg-[#FAF7F1] rounded-2xl border border-brand-gold/40 shadow-2xl w-full max-w-5xl max-h-[90vh] overflow-y-auto p-6 sm:p-8 z-10 space-y-5"
            >
              {/* Header */}
              <div className="flex items-start justify-between pb-4 border-b border-brand-creamBorder">
                <div>
                  <span className="text-xs uppercase tracking-super-wide text-brand-goldDim font-semibold">
                    CINQ BY RAGHAVA • TYPICAL RESIDENCE
                  </span>
                  <h3 className="font-serif text-2xl sm:text-3xl font-light text-brand-wine mt-1">
                    4 BHK Luxury Residence with Staff Suite
                  </h3>
                  <p className="text-xs text-stone-600 mt-1">
                    Super Built-Up: 3,600 Sq. Ft. | 4 Beds + 4 Baths + Staff Quarters + Sky Deck
                  </p>
                </div>
                <button
                  onClick={() => setModalOpen(false)}
                  className="w-9 h-9 rounded-full bg-brand-cream hover:bg-brand-wine hover:text-white border border-brand-creamBorder flex items-center justify-center text-brand-wine transition-colors cursor-pointer"
                >
                  <X className="w-5 h-5" />
                </button>
              </div>

              {/* Large Detailed Floor Plan Image */}
              <div className="bg-white p-3 sm:p-6 rounded-xl border border-brand-creamBorder flex items-center justify-center shadow-inner relative w-full h-[55vh] sm:h-[65vh]">
                <Image
                  src="/assets/gallary/g12.png"
                  alt="CINQ by Raghava 4BHK Residence Master Floor Plan"
                  fill
                  sizes="(max-width: 1280px) 90vw, 1200px"
                  className="object-contain object-center"
                />
              </div>

              {/* Modal Footer CTA */}
              <div className="flex flex-col sm:flex-row items-center justify-between gap-4 pt-2">
                <span className="text-xs text-stone-600">
                  Custom bespoke finishes and floor adaptations available upon request.
                </span>
                <a
                  href="#contact"
                  onClick={() => setModalOpen(false)}
                  className="px-8 py-3 bg-brand-wine hover:bg-brand-wineDark text-brand-gold font-semibold text-xs uppercase tracking-widest rounded-full transition-all flex items-center gap-2"
                >
                  <span>Request Full Floor Plan PDF</span>
                  <ArrowRight className="w-4 h-4" />
                </a>
              </div>
            </motion.div>
          </div>
        )}
      </AnimatePresence>
    </section>
  );
}

