"use client";

import React from "react";
import { AnimatedCounter } from "@/components/ui/AnimatedCounter";
import { Reveal } from "@/components/ui/Reveal";
import { PROJECT_STATS } from "@/data/project";

export function ProjectStats() {
  return (
    <section
      id="statistics"
      className="bg-brand-wine min-h-[140px] lg:h-[148px] py-6 lg:py-0 border-y border-brand-gold/25 relative overflow-hidden z-20 flex items-center"
    >
      {/* Subtle architectural gradient texture */}
      <div className="absolute inset-0 bg-gradient-to-r from-brand-wineDark/80 via-transparent to-brand-wineDark/80 pointer-events-none" />

      <div className="max-w-[1440px] mx-auto px-6 sm:px-8 lg:px-12 w-full relative z-10">
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-6 lg:gap-0 lg:divide-x lg:divide-brand-gold/20">
          {PROJECT_STATS.map((stat, idx) => (
            <Reveal key={stat.label} delay={idx * 0.08}>
              <div className="lg:px-8 text-center space-y-1 group">
                <p className="text-[10px] sm:text-[10.5px] uppercase tracking-super-wide text-brand-gold font-medium">
                  {stat.label}
                </p>
                <div className="flex items-baseline justify-center space-x-2 font-serif text-3xl sm:text-4xl lg:text-[38px] xl:text-[42px] font-normal text-brand-gold leading-none">
                  <AnimatedCounter
                    value={stat.numericValue}
                    decimals={stat.decimals ?? 0}
                    duration={1.8}
                  />
                  <span className="font-sans text-xs sm:text-[13px] font-medium tracking-widest text-brand-gold uppercase">
                    {stat.suffix?.trim()}
                  </span>
                </div>
              </div>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}

