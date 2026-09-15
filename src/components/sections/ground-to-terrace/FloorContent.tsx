"use client";

import React, { useState, useEffect } from "react";
import Image from "next/image";
import { motion, AnimatePresence } from "framer-motion";
import { GroundToTerraceFloor } from "@/data/groundToTerrace";
import { Sparkles, Layers, CheckCircle2 } from "lucide-react";

interface FloorContentProps {
  floor: GroundToTerraceFloor;
}

export function FloorContent({ floor }: FloorContentProps) {
  // Allow user to click a thumbnail to highlight it as the main image for the active floor
  const [activeImage, setActiveImage] = useState(floor.heroImage);
  const [activeImageAlt, setActiveImageAlt] = useState(floor.heroImageAlt);

  // Sync main image when the floor changes
  useEffect(() => {
    setActiveImage(floor.heroImage);
    setActiveImageAlt(floor.heroImageAlt);
  }, [floor]);

  return (
    <div className="w-full flex flex-col justify-between h-full">
      {/* =========================================================================
          TOP SECTION HEADER (Aligned with Left Content Column)
          ========================================================================= */}
      <div className="mb-3 lg:mb-3.5">
        <div className="inline-flex items-center space-x-1.5 px-2.5 py-0.5 rounded-full bg-brand-wine/5 border border-brand-wine/15 text-brand-wine text-[10.5px] uppercase tracking-super-wide font-semibold mb-1">
          <Sparkles className="w-3 h-3 text-brand-goldDim" />
          <span>GROUND TO TERRACE</span>
        </div>

        <h2 className="font-serif text-2xl sm:text-3xl lg:text-[32px] xl:text-[36px] text-brand-wine font-light tracking-tight leading-tight">
          A Lifestyle{" "}
          <span className="font-normal italic font-serif text-brand-goldDim">
            At Every Level
          </span>
        </h2>

        <p className="text-stone-700 text-xs sm:text-[13px] font-light max-w-2xl mt-1 leading-relaxed tracking-wide">
          From grand welcomes to elevated leisure, CINQ offers a thoughtfully
          curated experience across every floor.
        </p>
      </div>

      {/* =========================================================================
          DYNAMIC FLOOR CONTENT (Smooth Vertical Slide-Up Animation)
          ========================================================================= */}
      <div className="relative w-full flex-grow flex flex-col justify-between">
        <AnimatePresence mode="wait" initial={false}>
          <motion.div
            key={floor.id}
            id={`panel-${floor.id}`}
            role="tabpanel"
            aria-labelledby={`tab-${floor.id}`}
            initial={{ opacity: 0, y: 25, filter: "blur(3px)" }}
            animate={{ opacity: 1, y: 0, filter: "blur(0px)" }}
            exit={{ opacity: 0, y: -20, filter: "blur(3px)" }}
            transition={{
              duration: 0.5,
              ease: [0.22, 1, 0.36, 1],
            }}
            className="w-full flex flex-col space-y-2.5 sm:space-y-3"
          >
            {/* 1. LARGE MAIN FLOOR IMAGE (Full Width of Left Column) */}
            <div className="relative w-full rounded-xl sm:rounded-2xl overflow-hidden bg-stone-900 border border-brand-creamBorder shadow-lg group">
              <div className="relative h-[250px] sm:h-[280px] lg:h-[310px] xl:h-[330px] w-full overflow-hidden">
                <Image
                  src={activeImage}
                  alt={activeImageAlt}
                  fill
                  priority={floor.id === "ground"}
                  sizes="(max-width: 1024px) 100vw, 75vw"
                  className="object-cover object-center transition-transform duration-700 ease-out group-hover:scale-105"
                />

                {/* Vignette & Gradient Overlays */}
                <div className="absolute inset-0 bg-gradient-to-t from-[#160206]/95 via-[#160206]/35 to-transparent" />
                <div className="absolute inset-0 bg-gradient-to-r from-[#160206]/60 via-transparent to-transparent hidden sm:block" />

                {/* Top Floor Badge */}
                <div className="absolute top-2.5 left-2.5 sm:top-3 sm:left-3 z-10 flex items-center space-x-2">
                  <div className="bg-brand-wine/90 backdrop-blur-md text-brand-gold border border-brand-gold/40 px-2.5 py-0.5 rounded-full font-serif text-[11px] sm:text-xs font-semibold tracking-wider flex items-center space-x-1.5 shadow-md">
                    <Layers className="w-3 h-3 text-brand-gold" />
                    <span>
                      {floor.title === "Terrace Floor" || floor.title === "Ground Floor"
                        ? floor.title
                        : `Floor ${floor.title}`}
                    </span>
                  </div>
                  <span className="bg-white/20 backdrop-blur-md text-white border border-white/25 px-2 py-0.5 rounded-full text-[10px] sm:text-[10.5px] font-medium tracking-wide">
                    Level {floor.levelNumber}
                  </span>
                </div>

                {/* Bottom Overlay Content on Hero Card */}
                <div className="absolute bottom-2.5 left-2.5 right-2.5 sm:bottom-3 sm:left-3 sm:right-3 z-10 text-white">
                  <span className="text-[9.5px] sm:text-[10px] uppercase tracking-super-wide text-brand-gold font-semibold block mb-0.5">
                    {floor.tagline}
                  </span>
                  <h3 className="font-serif text-lg sm:text-xl lg:text-2xl font-light text-[#FAF7F1] leading-snug">
                    {floor.title === "Terrace Floor"
                      ? "Terrace Level Sanctuary"
                      : floor.title === "Ground Floor"
                      ? "Grand Reception & Atrium"
                      : `Floor ${floor.title} Lifestyle`}
                  </h3>
                </div>
              </div>
            </div>

            {/* 2. FLOOR OVERVIEW BOX (Full Width, Compact Layout) */}
            <div className="w-full bg-white/95 backdrop-blur-md rounded-xl sm:rounded-2xl p-2.5 sm:p-3 lg:p-3.5 border border-brand-creamBorder shadow-xs flex flex-col md:flex-row md:items-center justify-between gap-2.5">
              <div className="max-w-xl xl:max-w-2xl">
                <h4 className="text-[10px] uppercase tracking-widest text-brand-goldDim font-bold mb-0.5">
                  FLOOR OVERVIEW
                </h4>
                <p className="text-stone-700 text-xs sm:text-[12.5px] font-light leading-relaxed">
                  {floor.description}
                </p>
              </div>

              {/* Amenity Badges */}
              <div className="flex flex-wrap gap-1.5 shrink-0 md:max-w-sm">
                {floor.shortAmenities.map((amenity) => (
                  <span
                    key={amenity}
                    className="inline-flex items-center space-x-1 bg-[#FAF7F1] text-brand-wine border border-brand-creamBorder text-[10.5px] sm:text-[11px] font-medium px-2 py-0.5 rounded-full shadow-2xs"
                  >
                    <CheckCircle2 className="w-2.5 h-2.5 text-brand-goldDim shrink-0" />
                    <span>{amenity}</span>
                  </span>
                ))}
              </div>
            </div>

            {/* 3. BOTTOM AMENITY IMAGE CARDS (Full Width Aligned) */}
            <div className="w-full">
              <div className="flex items-center justify-between mb-1.5 px-0.5">
                <span className="text-[10px] uppercase tracking-widest text-stone-500 font-bold">
                  EXPERIENCES ON THIS LEVEL
                </span>
                <span className="text-[10px] text-brand-goldDim font-semibold">
                  {floor.gallery.length} Curated Amenities
                </span>
              </div>

              {/* Responsive Grid matching available items */}
              <div
                className={`w-full grid gap-2 sm:gap-2.5 xl:gap-3 ${
                  floor.gallery.length === 5
                    ? "grid-cols-2 sm:grid-cols-3 lg:grid-cols-5"
                    : floor.gallery.length === 4
                    ? "grid-cols-2 sm:grid-cols-4"
                    : floor.gallery.length === 3
                    ? "grid-cols-1 sm:grid-cols-3"
                    : "grid-cols-2 sm:grid-cols-2"
                }`}
              >
                {floor.gallery.map((item, idx) => {
                  const isCurrentThumbnail = activeImage === item.image;

                  return (
                    <button
                      key={`${item.name}-${idx}`}
                      type="button"
                      onClick={() => {
                        setActiveImage(item.image);
                        setActiveImageAlt(item.name);
                      }}
                      className={`text-left rounded-xl overflow-hidden border transition-all duration-300 relative group p-1 bg-white cursor-pointer ${
                        isCurrentThumbnail
                          ? "border-brand-gold ring-2 ring-brand-gold/40 shadow-xs scale-[1.02]"
                          : "border-brand-creamBorder/90 hover:border-brand-gold/60 hover:shadow-xs"
                      }`}
                    >
                      <div className="relative h-16 sm:h-18 lg:h-19 xl:h-20 w-full rounded-lg overflow-hidden bg-stone-100">
                        <Image
                          src={item.image}
                          alt={item.name}
                          fill
                          sizes="(max-width: 640px) 50vw, (max-width: 1024px) 33vw, 20vw"
                          className="object-cover object-center transition-transform duration-500 group-hover:scale-110"
                        />
                        <div className="absolute inset-0 bg-gradient-to-t from-black/65 via-transparent to-transparent" />
                        <span className="absolute top-1 left-1 bg-black/60 backdrop-blur-xs text-white text-[8px] uppercase tracking-wider px-1.5 py-0.5 rounded font-medium">
                          {item.tag}
                        </span>
                      </div>
                      <div className="p-1 pt-1">
                        <p className="text-[11px] sm:text-[11.5px] font-semibold text-brand-wine truncate group-hover:text-brand-goldDim transition-colors">
                          {item.name}
                        </p>
                        <p className="text-[9px] text-stone-500 font-light truncate">
                          Explore Experience
                        </p>
                      </div>
                    </button>
                  );
                })}
              </div>
            </div>
          </motion.div>
        </AnimatePresence>
      </div>
    </div>
  );
}
