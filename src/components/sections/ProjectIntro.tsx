"use client";

import React from "react";
import Image from "next/image";
import { Container } from "@/components/ui/Container";
import { Reveal } from "@/components/ui/Reveal";
import { Sparkles, Users, Leaf } from "lucide-react";

export function ProjectIntro() {
  return (
    <section
      id="about"
      className="bg-[#FAF7F1] text-brand-charcoal py-20 lg:py-28 border-b border-brand-creamBorder/60"
    >
      <Container>
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-center">
          {/* Left Narrative */}
          <div className="lg:col-span-5 space-y-6">
            <Reveal>
              <div>
                <span className="text-xs uppercase tracking-super-wide text-brand-goldDim font-semibold block mb-2">
                  LUXURY LIVING
                </span>
                <h2 className="font-serif text-3xl sm:text-4xl lg:text-[46px] font-normal leading-tight text-brand-wine">
                  Luxury Living <br />
                  At CINQ By Raghava
                </h2>
              </div>
            </Reveal>

            <Reveal delay={0.15}>
              <p className="text-stone-700 font-light leading-relaxed text-sm sm:text-base">
                A rare blend of architectural brilliance, expansive spaces and
                world-class amenities, CINQ is designed for those who seek more
                from life.
              </p>
            </Reveal>

            {/* 3 Supporting Feature Points */}
            <Reveal delay={0.25}>
              <div className="grid grid-cols-3 gap-4 pt-4 border-t border-brand-creamBorder/80">
                <div className="text-center space-y-2">
                  <div className="w-11 h-11 mx-auto rounded-full bg-brand-cream/80 border border-brand-gold/30 text-brand-goldDim flex items-center justify-center shadow-sm">
                    <Sparkles className="w-5 h-5" />
                  </div>
                  <p className="text-[11px] font-semibold text-brand-wine uppercase tracking-wider leading-tight">
                    Exceptional <br />
                    Design
                  </p>
                </div>

                <div className="text-center space-y-2">
                  <div className="w-11 h-11 mx-auto rounded-full bg-brand-cream/80 border border-brand-gold/30 text-brand-goldDim flex items-center justify-center shadow-sm">
                    <Users className="w-5 h-5" />
                  </div>
                  <p className="text-[11px] font-semibold text-brand-wine uppercase tracking-wider leading-tight">
                    Thriving <br />
                    Community
                  </p>
                </div>

                <div className="text-center space-y-2">
                  <div className="w-11 h-11 mx-auto rounded-full bg-brand-cream/80 border border-brand-gold/30 text-brand-goldDim flex items-center justify-center shadow-sm">
                    <Leaf className="w-5 h-5" />
                  </div>
                  <p className="text-[11px] font-semibold text-brand-wine uppercase tracking-wider leading-tight">
                    A Healthier <br />
                    Tomorrow
                  </p>
                </div>
              </div>
            </Reveal>
          </div>

          {/* Right Architectural Visual */}
          <div className="lg:col-span-7">
            <Reveal delay={0.2}>
              <div className="relative rounded-2xl overflow-hidden shadow-2xl border border-brand-gold/25 group bg-stone-200">
                <div className="relative w-full h-[380px] sm:h-[440px] lg:h-[480px]">
                  <Image
                    src="/assets/about.png"
                    alt="Luxury Entrance at CINQ By Raghava"
                    fill
                    className="object-cover group-hover:scale-105 transition-transform duration-700 ease-out"
                    sizes="(max-width: 1024px) 100vw, 58vw"
                  />
                </div>
              </div>
            </Reveal>
          </div>
        </div>
      </Container>
    </section>
  );
}

