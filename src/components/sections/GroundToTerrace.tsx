"use client";

import React, { useState } from "react";
import { GROUND_TO_TERRACE_FLOORS } from "@/data/groundToTerrace";
import { FloorSelector } from "./ground-to-terrace/FloorSelector";
import { FloorContent } from "./ground-to-terrace/FloorContent";
import { Sparkles } from "lucide-react";

export function GroundToTerrace() {
  // Ground floor is selected by default initially
  const [activeFloorId, setActiveFloorId] = useState<string>("ground");

  const activeFloor =
    GROUND_TO_TERRACE_FLOORS.find((f) => f.id === activeFloorId) ||
    GROUND_TO_TERRACE_FLOORS[GROUND_TO_TERRACE_FLOORS.length - 1]; // Fallback to Ground Floor

  return (
    <section
      id="ground-to-terrace"
      className="bg-[#FAF7F1] text-brand-charcoal py-10 sm:py-14 lg:py-16 border-b border-brand-creamBorder/60 relative overflow-hidden"
    >
      {/* Subtle luxury architectural grid texture */}
      <div className="absolute inset-0 bg-[radial-gradient(#E2D3BE_1px,transparent_1px)] [background-size:32px_32px] opacity-40 pointer-events-none" />

      {/* Large full-width container */}
      <div className="w-full max-w-[1440px] xl:max-w-[1500px] 2xl:max-w-[1540px] mx-auto px-4 sm:px-6 lg:px-8 xl:px-10 relative z-10">
        {/* Top Section Header */}
        <div className="mb-6 lg:mb-8">
          <div className="inline-flex items-center space-x-1.5 px-2.5 py-0.5 rounded-full bg-brand-wine/5 border border-brand-wine/15 text-brand-wine text-[10.5px] uppercase tracking-super-wide font-semibold mb-1.5">
            <Sparkles className="w-3 h-3 text-brand-goldDim" />
            <span>GROUND TO TERRACE</span>
          </div>

          <h2 className="font-serif text-2xl sm:text-3xl lg:text-[34px] xl:text-[38px] text-brand-wine font-light tracking-tight leading-tight">
            A Lifestyle{" "}
            <span className="font-normal italic font-serif text-brand-goldDim">
              At Every Level
            </span>
          </h2>

          <p className="text-stone-700 text-xs sm:text-[13px] font-light max-w-2xl mt-1.5 leading-relaxed tracking-wide">
            From grand welcomes to elevated leisure, CINQ offers a thoughtfully
            curated experience across every floor.
          </p>
        </div>

        {/* Mobile Floor Selector (rendered at top for mobile/tablet) */}
        <div className="lg:hidden mb-5">
          <FloorSelector
            floors={GROUND_TO_TERRACE_FLOORS}
            activeFloorId={activeFloorId}
            onSelectFloor={setActiveFloorId}
          />
        </div>

        {/* Main Desktop Grid Layout (Equal Height Two-Column Row) */}
        <div className="grid grid-cols-1 lg:grid-cols-[minmax(0,1fr)_320px] xl:grid-cols-[minmax(0,1fr)_340px] 2xl:grid-cols-[minmax(0,1fr)_360px] gap-5 lg:gap-6 xl:gap-7 items-stretch">
          {/* Left Content Column (Main Image + Overview + Cards) */}
          <div className="w-full flex flex-col justify-between h-full">
            <FloorContent floor={activeFloor} />
          </div>

          {/* Right Navigation Column (Stretches naturally to Left Column's height) */}
          <div className="hidden lg:flex flex-col h-full">
            <FloorSelector
              floors={GROUND_TO_TERRACE_FLOORS}
              activeFloorId={activeFloorId}
              onSelectFloor={setActiveFloorId}
            />
          </div>
        </div>
      </div>
    </section>
  );
}
