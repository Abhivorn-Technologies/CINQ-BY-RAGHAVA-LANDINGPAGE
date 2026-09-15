"use client";

import React from "react";
import Image from "next/image";
import { motion, useReducedMotion } from "framer-motion";
import { Container } from "@/components/ui/Container";
import { LOCATION_CATEGORIES } from "@/data/project";
import {
  Hospital,
  GraduationCap,
  Briefcase,
  Film,
  Compass,
} from "lucide-react";

const LOCATION_ICONS: Record<string, React.ReactNode> = {
  Hospital: <Hospital className="w-4 h-4 text-brand-goldDim" />,
  GraduationCap: <GraduationCap className="w-4 h-4 text-brand-goldDim" />,
  Briefcase: <Briefcase className="w-4 h-4 text-brand-goldDim" />,
  Film: <Film className="w-4 h-4 text-brand-goldDim" />,
  Compass: <Compass className="w-4 h-4 text-brand-goldDim" />,
};

export function Location() {
  const shouldReduceMotion = useReducedMotion();

  return (
    <section
      id="location"
      className="bg-[#FAF7F1] text-brand-charcoal py-20 lg:py-28 relative overflow-hidden border-b border-brand-creamBorder/60"
    >
      <Container>
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-14 items-center">
          {/* Left Side: Header, Narrative & Clean List Items */}
          <motion.div
            initial={
              shouldReduceMotion ? { opacity: 0 } : { opacity: 0, x: -40 }
            }
            whileInView={
              shouldReduceMotion ? { opacity: 1 } : { opacity: 1, x: 0 }
            }
            viewport={{ once: true, margin: "-60px" }}
            transition={{ duration: 0.8, ease: "easeOut" }}
            className="lg:col-span-5 space-y-6"
          >
            {/* Heading & Eyebrow */}
            <div>
              <span className="text-xs uppercase tracking-super-wide text-brand-goldDim font-semibold block mb-2">
                LOCATION
              </span>
              <h2 className="font-serif text-3xl sm:text-4xl lg:text-[46px] font-normal text-brand-wine leading-[1.1]">
                Closer to what <br />
                matters most
              </h2>
              <p className="text-stone-700 font-light text-sm sm:text-base leading-relaxed pt-3">
                Live at the centre of growth, opportunity and convenience.
                CINQ keeps you effortlessly connected to the best of Hyderabad.
              </p>
            </div>

            {/* Five Location Points */}
            <div className="space-y-3 pt-2">
              {LOCATION_CATEGORIES.map((cat, idx) => (
                <motion.div
                  key={cat.id}
                  initial={
                    shouldReduceMotion ? { opacity: 0 } : { opacity: 0, y: 15 }
                  }
                  whileInView={
                    shouldReduceMotion ? { opacity: 1 } : { opacity: 1, y: 0 }
                  }
                  viewport={{ once: true, margin: "-30px" }}
                  transition={{
                    duration: 0.5,
                    delay: idx * 0.08,
                    ease: "easeOut",
                  }}
                  className="flex items-start space-x-3.5 p-3 rounded-xl bg-white/90 hover:bg-white transition-all duration-300 border border-brand-creamBorder shadow-sm"
                >
                  <div className="w-8 h-8 rounded-full bg-brand-cream/80 text-brand-goldDim flex items-center justify-center shrink-0 mt-0.5 border border-brand-gold/30">
                    {LOCATION_ICONS[cat.iconName]}
                  </div>
                  <div className="space-y-0.5">
                    <h4 className="text-xs sm:text-sm font-semibold text-brand-wine tracking-wide">
                      {cat.category}
                    </h4>
                    <p className="text-[11px] sm:text-xs text-stone-600 font-light leading-relaxed">
                      {cat.items}
                    </p>
                  </div>
                </motion.div>
              ))}
            </div>
          </motion.div>

          {/* Right Side: Standalone Location Visual with Subtle Reveal */}
          <div className="lg:col-span-7">
            <motion.div
              initial={
                shouldReduceMotion ? { opacity: 0 } : { opacity: 0, y: 40 }
              }
              whileInView={
                shouldReduceMotion ? { opacity: 1 } : { opacity: 1, y: 0 }
              }
              viewport={{ once: true, margin: "-60px" }}
              transition={{
                duration: 0.9,
                ease: [0.22, 1, 0.36, 1],
              }}
              className="relative w-full h-[380px] sm:h-[440px] lg:h-[480px] rounded-2xl overflow-hidden border border-brand-gold/30 shadow-2xl bg-stone-200"
            >
              <Image
                src="/assets/location/location.png"
                alt="CINQ by Raghava Strategic Location & Skyline Connectivity"
                fill
                priority
                className="object-cover object-center hover:scale-[1.02] transition-transform duration-700 ease-out"
                sizes="(max-width: 1024px) 100vw, 58vw"
              />
            </motion.div>
          </div>
        </div>
      </Container>
    </section>
  );
}

