import React from "react";
import Link from "next/link";
import Image from "next/image";
import { PROJECT_INFO, NAV_ITEMS } from "@/data/project";

export function Footer() {
  return (
    <footer className="bg-[#120205] border-t border-brand-gold/15 py-12 text-stone-400 font-light">
      <div className="max-w-[1440px] mx-auto px-6 sm:px-8 lg:px-12">
        <div className="flex flex-col md:flex-row items-center justify-between gap-8 pb-8 border-b border-white/10">
          {/* Logo */}
          <Link href="#hero" className="flex items-center group">
            <Image
              src="/assets/hero/cinq.png"
              alt="CINQ by Raghava"
              width={130}
              height={42}
              className="h-8 sm:h-9 w-auto object-contain brightness-100 group-hover:brightness-110 transition-all"
            />
          </Link>

          {/* Nav Anchors */}
          <nav className="flex flex-wrap items-center justify-center gap-6 sm:gap-8 text-[11px] uppercase tracking-widest text-stone-300">
            {NAV_ITEMS.map((item) => (
              <a
                key={item.href}
                href={item.href}
                className="hover:text-brand-gold transition-colors"
              >
                {item.label}
              </a>
            ))}
          </nav>
        </div>

        {/* Bottom copyright, developer credit & RERA */}
        <div className="pt-6 flex flex-col md:flex-row items-center justify-between gap-4 text-[10.5px] text-stone-500 text-center md:text-left">
          <p>© 2026 CINQ by Raghava. All rights reserved.</p>

          {/* Developed By Credit with Premium Shimmer Effect */}
          <div className="flex items-center justify-center gap-1.5 text-stone-400 text-[11px]">
            <span>Developed by</span>
            <a
              href="https://www.abhivorn.com"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="Abhivorn Technologies Pvt Ltd"
              className="animate-text-shimmer font-semibold hover:brightness-125 transition-all"
            >
              Abhivorn Technologies Pvt Ltd.
            </a>
          </div>

          <p className="text-brand-gold/70 font-medium tracking-wide">
            TS RERA REG. NO: {PROJECT_INFO.rera.number}
          </p>
        </div>
      </div>
    </footer>
  );
}

