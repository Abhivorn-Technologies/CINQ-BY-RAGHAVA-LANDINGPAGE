"use client";

import React from "react";
import { Container } from "@/components/ui/Container";
import { Reveal } from "@/components/ui/Reveal";
import { PROJECT_HIGHLIGHTS } from "@/data/project";
import { BedDouble, Building2, Sparkles, Crown } from "lucide-react";

const HIGHLIGHT_ICONS: Record<string, React.ReactNode> = {
  BedDouble: <BedDouble className="w-6 h-6 text-brand-goldDim stroke-[1.5]" />,
  Building2: <Building2 className="w-6 h-6 text-brand-goldDim stroke-[1.5]" />,
  Sparkles: <Sparkles className="w-6 h-6 text-brand-goldDim stroke-[1.5]" />,
  Crown: <Crown className="w-6 h-6 text-brand-goldDim stroke-[1.5]" />,
};

export function Highlights() {
  return (
    <section className="bg-[#FAF7F1] text-brand-charcoal py-16 lg:py-20 border-b border-brand-creamBorder/60">
      <Container>
        {/* Section Header */}
        <div className="flex flex-col sm:flex-row sm:items-end justify-between mb-8 lg:mb-10 gap-2">
          <Reveal>
            <h2 className="font-serif text-3xl sm:text-4xl text-brand-wine font-light">
              Project Highlights
            </h2>
          </Reveal>
          <Reveal delay={0.1}>
            <span className="text-[10px] sm:text-[11px] uppercase tracking-super-wide text-brand-goldDim font-semibold">
              A HIGHER STANDARD OF LUXURY
            </span>
          </Reveal>
        </div>

        {/* 4 Cards Grid */}
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-4 lg:gap-5">
          {PROJECT_HIGHLIGHTS.map((item, idx) => (
            <Reveal key={item.id} delay={idx * 0.08}>
              <div className="bg-[#F4ECE1]/70 hover:bg-white transition-all duration-300 rounded-2xl p-6 sm:p-7 border border-brand-creamBorder/90 shadow-sm hover:shadow-md hover:border-brand-gold/40 text-center flex flex-col items-center justify-center min-h-[140px] group">
                <div className="mb-3.5 transform group-hover:scale-110 transition-transform duration-300">
                  {HIGHLIGHT_ICONS[item.iconName] || (
                    <Sparkles className="w-6 h-6 text-brand-goldDim stroke-[1.5]" />
                  )}
                </div>
                <h3 className="text-xs sm:text-sm font-semibold tracking-wider text-brand-wine uppercase">
                  {item.title}
                </h3>
                <p className="text-[11px] sm:text-xs text-stone-600 font-light mt-0.5 tracking-wide uppercase">
                  {item.subtitle}
                </p>
              </div>
            </Reveal>
          ))}
        </div>
      </Container>
    </section>
  );
}
