"use client";

import React, { useEffect, useState } from "react";
import Link from "next/link";
import Image from "next/image";
import { Menu } from "lucide-react";
import { NAV_ITEMS } from "@/data/project";
import { MobileMenu } from "./MobileMenu";
import { cn } from "@/lib/utils";

export function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [activeSection, setActiveSection] = useState<string>("hero");
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 30);

      // Scroll spy logic to highlight active navbar link
      const sectionIds = [
        "hero",
        "about",
        "club-house",
        "gallery",
        "specifications",
        "contact",
      ];

      const scrollPosition = window.scrollY + 200;

      for (const sectionId of sectionIds) {
        const element = document.getElementById(sectionId);
        if (element) {
          const top = element.offsetTop;
          const height = element.offsetHeight;
          if (scrollPosition >= top && scrollPosition < top + height) {
            setActiveSection(sectionId);
            break;
          }
        }
      }
    };

    window.addEventListener("scroll", handleScroll, { passive: true });
    handleScroll();
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <>
      <header
        className={cn(
          "fixed top-0 left-0 w-full z-40 transition-all duration-500",
          scrolled
            ? "bg-brand-wineDark/95 backdrop-blur-md py-3 shadow-luxury"
            : "bg-transparent py-4 lg:py-5"
        )}
      >
        <div className="max-w-[1500px] w-full mx-auto px-4 sm:px-6 lg:px-8 flex items-center justify-between">
          {/* Brand Logo - Far Left (CINQ Image Asset) */}
          <Link
            href="#hero"
            aria-label="CINQ by Raghava Home"
            className="flex items-center flex-shrink-0 group select-none mr-3 lg:mr-6"
          >
            <Image
              src="/assets/hero/cinq.png"
              alt="CINQ by Raghava"
              width={125}
              height={42}
              priority
              className="w-[95px] sm:w-[110px] lg:w-[120px] h-auto object-contain brightness-100 group-hover:brightness-110 transition-all"
            />
          </Link>

          {/* Desktop Nav Items - 7 Links Centered */}
          <nav className="hidden xl:flex items-center gap-5 2xl:gap-7 text-[11px] uppercase tracking-widest text-stone-200 font-medium">
            {NAV_ITEMS.map((item) => {
              const sectionId = item.href.replace("#", "");
              const isActive = activeSection === sectionId;

              return (
                <a
                  key={item.href}
                  href={item.href}
                  className={cn(
                    "transition-all duration-300 relative py-1 whitespace-nowrap",
                    isActive
                      ? "text-brand-gold font-semibold after:w-full after:bg-brand-gold"
                      : "text-stone-200 hover:text-brand-gold after:w-0 hover:after:w-full after:bg-brand-gold",
                    "after:content-[''] after:absolute after:bottom-0 after:left-0 after:h-[1px] after:transition-all after:duration-300"
                  )}
                >
                  {item.label}
                </a>
              );
            })}
          </nav>

          {/* Right Header CTAs - PRICING + REQUEST A CALL with Equal Height & Clean Spacing */}
          <div className="flex items-center gap-3.5 lg:gap-4 flex-shrink-0 ml-3 lg:ml-6">
            {/* PRICING Button */}
            <a
              href="#contact"
              className="hidden lg:inline-flex items-center justify-center h-[44px] px-6 border border-brand-gold/60 text-stone-200 hover:text-brand-gold hover:border-brand-gold text-[11px] uppercase tracking-widest font-medium rounded-full transition-all duration-300 shadow-xs whitespace-nowrap hover:bg-white/5 select-none"
            >
              Pricing
            </a>

            {/* REQUEST A CALL Button */}
            <a
              href="#contact"
              className="hidden sm:inline-flex items-center justify-center h-[44px] px-6 bg-brand-gold hover:bg-brand-goldLight text-brand-wine text-[11px] uppercase tracking-widest font-semibold rounded-full transition-all duration-300 shadow-sm whitespace-nowrap hover:shadow-gold-glow select-none"
            >
              Request a Call
            </a>

            {/* Hamburger Button */}
            <button
              type="button"
              onClick={() => setMobileMenuOpen(true)}
              aria-label="Open mobile navigation menu"
              className="xl:hidden w-10 h-10 rounded-full border border-white/20 hover:border-brand-gold flex items-center justify-center text-white hover:text-brand-gold transition-colors shrink-0"
            >
              <Menu className="w-5 h-5" />
            </button>
          </div>
        </div>
      </header>

      {/* Mobile Drawer */}
      <MobileMenu
        isOpen={mobileMenuOpen}
        onClose={() => setMobileMenuOpen(false)}
      />
    </>
  );
}

