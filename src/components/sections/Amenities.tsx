"use client";

import React, { useRef } from "react";
import Image from "next/image";
import { Container } from "@/components/ui/Container";
import { Reveal } from "@/components/ui/Reveal";
import { ChevronLeft, ChevronRight } from "lucide-react";

interface AmenityItem {
  id: string;
  name: string;
  image: string;
}

const AMENITIES_LIST: AmenityItem[] = [
  {
    id: "clubhouse",
    name: "CLUBHOUSE",
    image: "/assets/gallary/g7.png",
  },
  {
    id: "swimming-pool",
    name: "SWIMMING POOL",
    image: "/assets/oasis/jacuzzi-pooldeck.webp",
  },
  {
    id: "tennis-court",
    name: "TENNIS COURT",
    image: "/assets/stilt-level/tennis-court.webp",
  },
  {
    id: "kids-lounge",
    name: "KIDS LOUNGE",
    image: "/assets/gallary/g10.png",
  },
  {
    id: "gym",
    name: "GYM",
    image: "/assets/stilt-level/fitness-court.webp",
  },
  {
    id: "sky-lounge",
    name: "SKY LOUNGE",
    image: "/assets/sky-lounge/sky-lounge-terrace.webp",
  },
  {
    id: "co-working",
    name: "CO-WORKING LOUNGE",
    image: "/assets/gallary/g11.png",
  },
  {
    id: "sensory-playground",
    name: "SENSORY PLAYGROUND",
    image: "/assets/oasis/sensory-playground.webp",
  },
];

export function Amenities() {
  const scrollRef = useRef<HTMLDivElement>(null);

  const handleScroll = (direction: "left" | "right") => {
    if (!scrollRef.current) return;
    const scrollAmount = direction === "left" ? -340 : 340;
    scrollRef.current.scrollBy({ left: scrollAmount, behavior: "smooth" });
  };

  return (
    <section
      id="amenities"
      className="bg-[#2D040E] text-stone-200 py-20 lg:py-28 relative overflow-hidden border-y border-brand-gold/20"
    >
      <Container>
        {/* Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-10 gap-4">
          <Reveal>
            <div>
              <span className="text-xs uppercase tracking-super-wide text-brand-gold font-semibold block mb-2">
                PREMIUM AMENITIES
              </span>
              <h2 className="font-serif text-3xl sm:text-4xl lg:text-[46px] text-white font-light">
                Experiences <br className="sm:hidden" />
                Beyond Ordinary
              </h2>
            </div>
          </Reveal>

          <div className="flex items-center justify-between md:justify-end gap-4">
            <span className="text-[10px] sm:text-[11px] uppercase tracking-super-wide text-brand-gold font-medium hidden sm:inline-block">
              WELLNESS, LEISURE, COMMUNITY, ALL IN ONE ADDRESS.
            </span>
            <div className="flex items-center space-x-2">
              <button
                onClick={() => handleScroll("left")}
                aria-label="Previous amenities"
                className="w-10 h-10 rounded-full border border-brand-gold/40 hover:border-brand-gold hover:bg-brand-gold hover:text-brand-wine text-brand-gold flex items-center justify-center transition-all duration-300"
              >
                <ChevronLeft className="w-4 h-4" />
              </button>
              <button
                onClick={() => handleScroll("right")}
                aria-label="Next amenities"
                className="w-10 h-10 rounded-full border border-brand-gold/40 hover:border-brand-gold hover:bg-brand-gold hover:text-brand-wine text-brand-gold flex items-center justify-center transition-all duration-300"
              >
                <ChevronRight className="w-4 h-4" />
              </button>
            </div>
          </div>
        </div>

        {/* Horizontal Scrolling Gallery */}
        <div
          ref={scrollRef}
          className="flex gap-4 sm:gap-5 overflow-x-auto pb-4 pt-1 snap-x scroll-smooth custom-scrollbar -mx-4 px-4 sm:mx-0 sm:px-0"
        >
          {AMENITIES_LIST.map((item, idx) => (
            <Reveal key={item.id} delay={idx * 0.06}>
              <div className="flex-shrink-0 w-[240px] sm:w-[270px] lg:w-[290px] group snap-start">
                <div className="relative h-[180px] sm:h-[200px] lg:h-[210px] rounded-xl overflow-hidden border border-brand-gold/30 shadow-lg bg-black/40">
                  <Image
                    src={item.image}
                    alt={item.name}
                    fill
                    className="object-cover group-hover:scale-110 transition-transform duration-700 ease-out"
                    sizes="290px"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-transparent opacity-80 group-hover:opacity-60 transition-opacity" />
                </div>
                <div className="pt-3 text-center">
                  <span className="inline-block text-[11px] uppercase tracking-widest font-semibold text-brand-gold group-hover:text-brand-goldLight transition-colors">
                    {item.name}
                  </span>
                </div>
              </div>
            </Reveal>
          ))}
        </div>
      </Container>
    </section>
  );
}
