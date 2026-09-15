"use client";

import React from "react";
import { GroundToTerraceFloor } from "@/data/groundToTerrace";
import { ChevronRight, Sparkles, Building2 } from "lucide-react";

interface FloorSelectorProps {
  floors: GroundToTerraceFloor[];
  activeFloorId: string;
  onSelectFloor: (floorId: string) => void;
}

export function FloorSelector({
  floors,
  activeFloorId,
  onSelectFloor,
}: FloorSelectorProps) {
  return (
    <>
      {/* =========================================================================
          DESKTOP VERTICAL SELECTOR (Right side, stretches 100% to match Left height)
          ========================================================================= */}
      <div className="hidden lg:flex flex-col justify-between h-full w-full bg-[#23040C] text-stone-100 rounded-2xl p-3 sm:p-3.5 xl:p-4 border border-brand-gold/35 shadow-xl relative overflow-hidden backdrop-blur-md">
        {/* Subtle architectural luxury glow */}
        <div className="absolute top-0 right-0 w-40 h-40 bg-brand-gold/8 rounded-full blur-3xl pointer-events-none" />
        <div className="absolute bottom-0 left-0 w-40 h-40 bg-brand-wineLight/25 rounded-full blur-3xl pointer-events-none" />

        {/* Panel Header */}
        <div className="pb-2 mb-1 border-b border-brand-gold/20 relative z-10 shrink-0">
          <div className="flex items-center space-x-1.5 text-brand-gold mb-0.5">
            <Sparkles className="w-3 h-3 text-brand-gold" />
            <span className="text-[9.5px] uppercase tracking-super-wide font-semibold">
              GROUND TO TERRACE
            </span>
          </div>
          <h3 className="font-serif text-lg xl:text-xl text-[#FAF7F1] font-light leading-tight">
            Floor Navigation
          </h3>
          <p className="text-[10.5px] xl:text-[11px] text-stone-300 font-light mt-0.5 tracking-wide">
            A unique experience on every floor.
          </p>
        </div>

        {/* Vertical Floor List — Strict Order: T, 5, 4, 3, 2, 1, G */}
        <div
          role="tablist"
          aria-label="CINQ Floor Selector"
          className="flex-1 flex flex-col justify-between space-y-1 relative z-10 my-0.5"
        >
          {floors.map((floor) => {
            const isActive = floor.id === activeFloorId;

            return (
              <button
                key={floor.id}
                role="tab"
                id={`tab-${floor.id}`}
                aria-selected={isActive}
                aria-controls={`panel-${floor.id}`}
                aria-label={`Select ${floor.title}: ${floor.shortAmenities.join(", ")}`}
                onClick={() => onSelectFloor(floor.id)}
                className={`w-full text-left rounded-xl p-1.5 xl:p-2 transition-all duration-300 relative group flex items-center justify-between border cursor-pointer ${
                  isActive
                    ? "bg-gradient-to-r from-brand-wine to-[#500B1D] text-white border-brand-gold shadow-[0_2px_12px_-2px_rgba(201,164,106,0.4)] translate-x-1"
                    : "bg-[#1B0208]/75 hover:bg-[#320612]/90 text-stone-300 border-white/5 hover:border-brand-gold/40 hover:text-white"
                }`}
              >
                <div className="flex items-center space-x-2 xl:space-x-2.5 min-w-0">
                  {/* Floor Identifier badge */}
                  <div
                    className={`w-7.5 h-7.5 xl:w-8 xl:h-8 rounded-md flex items-center justify-center font-serif text-xs xl:text-sm font-bold shrink-0 transition-all duration-300 ${
                      isActive
                        ? "bg-brand-gold text-brand-wine shadow-xs scale-105"
                        : "bg-white/10 text-brand-gold group-hover:bg-brand-gold/20"
                    }`}
                  >
                    {floor.label}
                  </div>

                  {/* Floor Title and short amenities list */}
                  <div className="min-w-0 pr-1">
                    <div className="flex items-center space-x-1.5">
                      <span
                        className={`text-[11.5px] xl:text-xs font-medium tracking-wide truncate ${
                          isActive
                            ? "text-[#FAF7F1] font-semibold"
                            : "text-stone-200 group-hover:text-white"
                        }`}
                      >
                        {floor.title === "Terrace Floor" || floor.title === "Ground Floor"
                          ? floor.title
                          : `Floor ${floor.title}`}
                      </span>
                    </div>
                    <p
                      className={`text-[9.5px] xl:text-[10px] truncate tracking-wide mt-0.25 ${
                        isActive
                          ? "text-brand-goldLight font-normal"
                          : "text-stone-400 group-hover:text-stone-300"
                      }`}
                    >
                      {floor.shortAmenities.slice(0, 3).join(" • ")}
                      {floor.shortAmenities.length > 3 && "..."}
                    </p>
                  </div>
                </div>

                {/* Right Arrow indicator for active item */}
                <div
                  className={`shrink-0 pl-1 transition-all duration-300 ${
                    isActive
                      ? "opacity-100 translate-x-0 text-brand-gold scale-105"
                      : "opacity-0 -translate-x-2 text-stone-500 group-hover:opacity-70 group-hover:translate-x-0"
                  }`}
                >
                  <ChevronRight className="w-3.5 h-3.5 stroke-[2.5]" />
                </div>
              </button>
            );
          })}
        </div>

        {/* Bottom Elevation Note */}
        <div className="pt-1.5 mt-1 border-t border-brand-gold/15 flex items-center justify-between text-[10px] text-stone-400 font-light tracking-wide relative z-10 shrink-0">
          <div className="flex items-center space-x-1">
            <Building2 className="w-3 h-3 text-brand-gold" />
            <span>Vertical Scale</span>
          </div>
          <span className="text-brand-gold font-medium uppercase tracking-widest text-[9.5px] xl:text-[10px]">
            61 Storeys • 5 Towers
          </span>
        </div>
      </div>

      {/* =========================================================================
          MOBILE / TABLET HORIZONTAL SELECTOR (< lg)
          ========================================================================= */}
      <div className="lg:hidden w-full mb-6">
        <div className="bg-[#23040C] p-3 sm:p-3.5 rounded-2xl border border-brand-gold/30 shadow-lg">
          <div className="flex items-center justify-between mb-2.5 px-1">
            <span className="text-[10px] uppercase tracking-super-wide text-brand-gold font-semibold">
              SELECT FLOOR
            </span>
            <span className="text-[11px] text-stone-300 font-serif">
              T to Ground (Top to Bottom)
            </span>
          </div>

          {/* Horizontal scroll tabs — Strict Order: T, 5, 4, 3, 2, 1, G */}
          <div
            role="tablist"
            aria-label="CINQ Floor Selector Mobile"
            className="flex items-center space-x-2 overflow-x-auto pb-1.5 custom-scrollbar"
          >
            {floors.map((floor) => {
              const isActive = floor.id === activeFloorId;

              return (
                <button
                  key={floor.id}
                  role="tab"
                  id={`mobile-tab-${floor.id}`}
                  aria-selected={isActive}
                  aria-controls={`panel-${floor.id}`}
                  aria-label={`Select ${floor.title}`}
                  onClick={() => onSelectFloor(floor.id)}
                  className={`flex-shrink-0 flex items-center space-x-2 px-3 py-2 rounded-xl text-xs font-medium transition-all duration-200 border cursor-pointer ${
                    isActive
                      ? "bg-brand-gold text-brand-wine border-brand-gold shadow-md font-bold"
                      : "bg-[#190207] text-stone-300 border-white/10 hover:border-brand-gold/40 hover:text-white"
                  }`}
                >
                  <span className="font-serif text-sm font-bold">{floor.label}</span>
                  <span className="text-[11px] tracking-wide whitespace-nowrap">
                    {floor.label === "T"
                      ? "Terrace"
                      : floor.label === "G"
                      ? "Ground"
                      : `Fl ${floor.label}`}
                  </span>
                </button>
              );
            })}
          </div>
        </div>
      </div>
    </>
  );
}
