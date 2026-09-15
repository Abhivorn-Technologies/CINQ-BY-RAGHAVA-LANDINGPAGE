"use client";

import React from "react";
import Image from "next/image";
import { Sparkles } from "lucide-react";
import { GALLERY_IMAGES } from "@/data/projectGallery";

export function ProjectGallery() {
  // Seamless loop array (duplicated once to create continuous 0% -> -50% marquee)
  const marqueeImages = [...GALLERY_IMAGES, ...GALLERY_IMAGES];

  return (
    <section
      id="gallery"
      className="bg-[#FAF7F1] text-brand-charcoal py-14 sm:py-18 lg:py-22 border-b border-brand-creamBorder/60 relative overflow-hidden"
    >
      {/* Subtle luxury architectural grid texture */}
      <div className="absolute inset-0 bg-[radial-gradient(#E2D3BE_1px,transparent_1px)] [background-size:32px_32px] opacity-35 pointer-events-none" />

      {/* Top Simple Section Header */}
      <div className="w-full max-w-[1460px] xl:max-w-[1520px] 2xl:max-w-[1560px] mx-auto px-5 sm:px-8 lg:px-12 relative z-10 mb-8 sm:mb-10 lg:mb-12">
        <div className="inline-flex items-center space-x-1.5 px-3 py-1 rounded-full bg-brand-wine/5 border border-brand-wine/15 text-brand-wine text-xs uppercase tracking-super-wide font-semibold mb-2.5">
          <Sparkles className="w-3.5 h-3.5 text-brand-goldDim" />
          <span>PROJECT GALLERY</span>
        </div>

        <h2 className="font-serif text-3xl sm:text-4xl lg:text-[42px] xl:text-[46px] text-brand-wine font-light tracking-tight leading-[1.15]">
          A Visual Journey{" "}
          <span className="font-normal italic font-serif text-brand-goldDim">
            Through CINQ
          </span>
        </h2>

        <p className="text-stone-700 text-xs sm:text-sm lg:text-[14.5px] font-light max-w-2xl mt-1.5 leading-relaxed tracking-wide">
          Explore the architecture, amenities and lifestyle experiences that
          define CINQ by Raghava.
        </p>
      </div>

      {/* =========================================================================
          ONE SINGLE HORIZONTAL ROW — CONTINUOUS AUTO ROLL (RIGHT → LEFT)
          ========================================================================= */}
      <div className="w-full overflow-hidden relative z-10 py-1">
        {/* Soft edge gradient fades for luxury editorial feel */}
        <div className="absolute top-0 left-0 bottom-0 w-12 sm:w-20 md:w-32 bg-gradient-to-r from-[#FAF7F1] via-[#FAF7F1]/80 to-transparent z-20 pointer-events-none" />
        <div className="absolute top-0 right-0 bottom-0 w-12 sm:w-20 md:w-32 bg-gradient-to-l from-[#FAF7F1] via-[#FAF7F1]/80 to-transparent z-20 pointer-events-none" />

        {/* Marquee Track */}
        <div className="animate-gallery-marquee flex items-center gap-4 sm:gap-5 lg:gap-6">
          {marqueeImages.map((img, index) => (
            <div
              key={`${img.id}-${index}`}
              className="flex-shrink-0 w-[260px] sm:w-[320px] md:w-[360px] lg:w-[400px] h-[175px] sm:h-[210px] md:h-[235px] lg:h-[255px] relative rounded-xl sm:rounded-2xl overflow-hidden border border-brand-creamBorder/90 bg-stone-200 shadow-sm transition-transform duration-500 hover:scale-[1.02]"
            >
              <Image
                src={img.src}
                alt={img.alt}
                fill
                sizes="(max-width: 640px) 260px, (max-width: 1024px) 360px, 400px"
                loading="lazy"
                className="object-cover object-center"
              />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
