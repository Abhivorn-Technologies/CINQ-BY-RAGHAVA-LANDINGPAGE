"use client";

import React, { useState } from "react";
import { GROUND_TO_TERRACE_FLOORS } from "@/data/groundToTerrace";
import { FloorSelector } from "./ground-to-terrace/FloorSelector";
import { FloorContent } from "./ground-to-terrace/FloorContent";

export function GroundToTerrace() {
  // Ground floor is selected by default initially
  const [activeFloorId, setActiveFloorId] = useState<string>("ground");

  const activeFloor =
    GROUND_TO_TERRACE_FLOORS.find((f) => f.id === activeFloorId) ||
    GROUND_TO_TERRACE_FLOORS[GROUND_TO_TERRACE_FLOORS.length - 1]; // Fallback to Ground Floor

  return (
    <section
      id="ground-to-terrace"
      className="bg-[#FAF7F1] text-brand-charcoal py-8 sm:py-10 lg:py-12 border-b border-brand-creamBorder/60 relative overflow-hidden"
    >
      {/* Subtle luxury architectural grid texture */}
      <div className="absolute inset-0 bg-[radial-gradient(#E2D3BE_1px,transparent_1px)] [background-size:32px_32px] opacity-40 pointer-events-none" />

      {/* Large full-width container */}
      <div className="w-full max-w-[1440px] xl:max-w-[1500px] 2xl:max-w-[1540px] mx-auto px-4 sm:px-6 lg:px-8 xl:px-10 relative z-10">
        {/* Mobile Floor Selector (rendered at top for mobile/tablet) */}
        <div className="lg:hidden mb-4">
          <FloorSelector
            floors={GROUND_TO_TERRACE_FLOORS}
            activeFloorId={activeFloorId}
            onSelectFloor={setActiveFloorId}
          />
        </div>

        {/* Main Desktop Grid Layout (Equal Height Two-Column Row) */}
        <div className="grid grid-cols-1 lg:grid-cols-[minmax(0,1fr)_300px] xl:grid-cols-[minmax(0,1fr)_320px] 2xl:grid-cols-[minmax(0,1fr)_340px] gap-5 lg:gap-6 xl:gap-7 items-stretch">
          {/* Left Content Column (Heading + Main Image + Overview + Cards) */}
          <div className="w-full flex flex-col justify-between">
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
