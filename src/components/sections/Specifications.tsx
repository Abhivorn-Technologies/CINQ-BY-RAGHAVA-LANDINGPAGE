"use client";

import React, { useState } from "react";
import { Container } from "@/components/ui/Container";
import { Reveal } from "@/components/ui/Reveal";
import { SPECIFICATIONS_DATA } from "@/data/specifications";
import {
  Building2,
  Layers,
  Maximize,
  Zap,
  Droplet,
  ShieldCheck,
  Cpu,
  ArrowUpDown,
  Check,
} from "lucide-react";
import { cn } from "@/lib/utils";
import { motion, AnimatePresence } from "framer-motion";

const SPEC_ICONS: Record<string, React.ReactNode> = {
  Building2: <Building2 className="w-5 h-5 text-brand-gold" />,
  Layers: <Layers className="w-5 h-5 text-brand-gold" />,
  Maximize: <Maximize className="w-5 h-5 text-brand-gold" />,
  Zap: <Zap className="w-5 h-5 text-brand-gold" />,
  Droplet: <Droplet className="w-5 h-5 text-brand-gold" />,
  ShieldCheck: <ShieldCheck className="w-5 h-5 text-brand-gold" />,
  Cpu: <Cpu className="w-5 h-5 text-brand-gold" />,
  ArrowUpDown: <ArrowUpDown className="w-5 h-5 text-brand-gold" />,
};

// Grouping into 6 primary concise tabs
const SPEC_CATEGORIES = [
  { id: "structure", label: "Structure & Core", ids: ["structure", "doors-windows"] },
  { id: "flooring", label: "Marble & Finishes", ids: ["flooring", "bathrooms"] },
  { id: "electrical", label: "Electrical & Home Tech", ids: ["electrical", "home-automation"] },
  { id: "plumbing", label: "Water & Sustainability", ids: ["plumbing", "stp", "water-supply"] },
  { id: "elevators", label: "Lifts & Common Areas", ids: ["lifts", "common-areas"] },
  { id: "security", label: "7-Tier Safety & Fire", ids: ["security", "fire-safety"] },
];

export function Specifications() {
  const [activeTab, setActiveTab] = useState(SPEC_CATEGORIES[0].id);

  const currentCategory =
    SPEC_CATEGORIES.find((cat) => cat.id === activeTab) || SPEC_CATEGORIES[0];
  const activeSpecs = SPECIFICATIONS_DATA.filter((s) =>
    currentCategory.ids.includes(s.id)
  );

  return (
    <section
      id="specifications"
      className="bg-[#2B040D] text-stone-200 py-20 lg:py-24 border-t border-brand-gold/20 relative overflow-hidden"
    >
      <Container>
        {/* Header */}
        <div className="max-w-2xl mx-auto text-center mb-10 space-y-2">
          <Reveal>
            <span className="text-xs uppercase tracking-super-wide text-brand-gold font-semibold block">
              SPECIFICATIONS
            </span>
            <h2 className="font-serif text-3xl sm:text-4xl text-white font-light">
              Engineered for Perfection
            </h2>
            <p className="text-xs text-stone-300 font-light max-w-lg mx-auto leading-relaxed pt-1">
              Constructed with the highest grade global materials and international standards.
            </p>
          </Reveal>
        </div>

        {/* Category Tabs */}
        <div className="flex flex-wrap items-center justify-center gap-2 mb-8">
          {SPEC_CATEGORIES.map((cat) => {
            const isActive = activeTab === cat.id;
            return (
              <button
                key={cat.id}
                onClick={() => setActiveTab(cat.id)}
                className={cn(
                  "px-4 py-2 rounded-full text-xs font-medium uppercase tracking-wider transition-all duration-300",
                  isActive
                    ? "bg-brand-gold text-brand-wine font-semibold shadow-md"
                    : "bg-white/5 border border-brand-gold/30 hover:border-brand-gold text-stone-300 hover:text-white"
                )}
              >
                {cat.label}
              </button>
            );
          })}
        </div>

        {/* Tab Content Cards */}
        <AnimatePresence mode="wait">
          <motion.div
            key={activeTab}
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -10 }}
            transition={{ duration: 0.3 }}
            className="grid grid-cols-1 md:grid-cols-2 gap-5 max-w-4xl mx-auto"
          >
            {activeSpecs.map((spec) => (
              <div
                key={spec.id}
                className="bg-[#1C0207]/80 rounded-xl p-5 border border-brand-gold/25 shadow-lg space-y-3"
              >
                <div className="flex items-center justify-between">
                  <div className="flex items-center gap-2.5">
                    <div className="w-8 h-8 rounded-lg bg-brand-wine flex items-center justify-center border border-brand-gold/30">
                      {SPEC_ICONS[spec.iconName] || (
                        <Building2 className="w-4 h-4 text-brand-gold" />
                      )}
                    </div>
                    <h3 className="font-serif text-lg text-white font-medium">
                      {spec.category}
                    </h3>
                  </div>
                  <span className="text-[10px] font-sans font-semibold text-brand-gold tracking-widest">
                    #{spec.number}
                  </span>
                </div>

                <p className="text-xs text-stone-300 font-light leading-relaxed">
                  {spec.description}
                </p>

                {spec.details && (
                  <ul className="space-y-1.5 pt-2 border-t border-white/10">
                    {spec.details.map((detail, idx) => (
                      <li
                        key={idx}
                        className="text-[11px] text-stone-400 font-light flex items-start gap-2"
                      >
                        <Check className="w-3.5 h-3.5 text-brand-gold shrink-0 mt-0.5" />
                        <span>{detail}</span>
                      </li>
                    ))}
                  </ul>
                )}
              </div>
            ))}
          </motion.div>
        </AnimatePresence>
      </Container>
    </section>
  );
}

