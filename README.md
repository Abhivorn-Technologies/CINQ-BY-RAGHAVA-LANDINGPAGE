# CINQ by RAGHAVA — Ultra-Luxury Real Estate Landing Page

A production-ready, ultra-luxury Next.js 15 landing page for **CINQ by RAGHAVA** in Financial District, Nanakramguda, Hyderabad.

Built according to the official Google Stitch UI/UX design specification (`12859507922621770968`).

---

## 🌟 Features & Sections

This website is implemented as a single, continuous, highly responsive luxury landing page featuring all 21 core sections:

1. **Sticky Glassmorphic Navigation Bar**: Transparent on hero, frosted glass on scroll, mobile drawer, smooth anchor navigation, and "Request a Call" CTA.
2. **Cinematic Hero**: Dark dusk tower backdrop, staggered entrance typography, subtle parallax, and quick statistics summary bar.
3. **About CINQ**: Editorial narrative with 4 luxury pillar badges (*Luxury Residences, Family Oriented Spaces, Wellness & Recreation, Vibrant Community*).
4. **Project Statistics**: Viewport-triggered animated counters for **7.19 Acres**, **05 Towers**, **61 Floors**, and **04 Homes / Floor**.
5. **Location & Connectivity**: 5 key connectivity hub categories with gold icons, plus a custom dark GIS map overlay with glowing arterial highway vectors and a pulsating project pin.
6. **Grand Arrival**: Full-width architectural drop-off canopy with 4 feature cards (*Vehicle Drop-Off, Water Feature, Grand Entrance, Waiting Lounge*).
7. **Master Plan**: Interactive 5-tower selector with schematic blueprint alignment over 7.19 acres.
8. **Stilt Level Hub**: 5 indoor & outdoor sport & recreation cards (*Tennis Court, Pet Garden, Play Area, Fitness Court, Basketball Court*).
9. **Tower Lounges**: Interactive 5-tower thematic lounge explorer with Framer Motion transitions:
   - **Tower 1**: Multi-Purpose Lounge
   - **Tower 2**: Business Lounge
   - **Tower 3**: Senior Citizens Lounge
   - **Tower 4**: Teen Lounge
   - **Tower 5**: Kids Adventure Lounge
10. **The Grand Clubhouse**: 50,000+ sq. ft. architectural showcase with luxury badging.
11. **Clubhouse Experiences**: 12-item luxury lifestyle amenities grid.
12. **Floor-by-Floor Navigator**: Interactive 7-level vertical selector (*Terrace down to Ground Floor*) with dynamic imagery and amenity lists.
13. **The Oasis**: Lush podium garden sanctuary overview.
14. **Oasis Amenities**: 14 aquatic and wellness amenities index tags.
15. **Oasis Experiences**: 4 immersive photo cards (*Sensory Playground, Mountain Climbing, Senior Corner, Jacuzzi + Pool Deck*).
16. **Sky Lounge**: 61st-floor panoramic rooftop terrace with skyline backdrop.
17. **Sky Experiences**: High-altitude regulation Pickleball Arena showcase and 5 rooftop wellness feature cards.
18. **Residences & Floor Plans**: Interactive tower tabs (*Towers 1 & 4, Tower 2, Tower 5*), 2D architectural floor plan schematic, verified area specifications, and enquiry CTAs.
19. **Technical Specifications**: 16 categorized system specifications with expandable interactive accordion drawers.
20. **Final Enquiry & Contact**: Private viewing lead capture form, site gallery address, telephone numbers, and directions link.
21. **Editorial Footer**: RERA registration (*P02400007890*), navigation links, legal, and social links.

---

## 🛠️ Technology Stack

- **Framework**: Next.js 15 (App Router)
- **Library**: React 19 / TypeScript
- **Styling**: Tailwind CSS with custom CINQ luxury design tokens
- **Animations**: Framer Motion (GPU-accelerated, `prefers-reduced-motion` compliant)
- **Icons**: Lucide React
- **Images**: Next.js `next/image` using 100% local assets in `public/assets/`

---

## 📁 Directory Structure

```
project-root/
├── public/
│   └── assets/
│       ├── architecture/
│       ├── clubhouse/
│       ├── hero/
│       ├── location/
│       ├── master-plan/
│       ├── oasis/
│       ├── residences/
│       ├── sky-lounge/
│       ├── specifications/
│       ├── stilt-level/
│       └── tower-lounges/
├── src/
│   ├── app/
│   │   ├── globals.css
│   │   ├── layout.tsx
│   │   └── page.tsx
│   ├── components/
│   │   ├── forms/
│   │   │   └── EnquiryForm.tsx
│   │   ├── layout/
│   │   │   ├── Footer.tsx
│   │   │   ├── MobileMenu.tsx
│   │   │   └── Navbar.tsx
│   │   ├── sections/
│   │   │   ├── Clubhouse.tsx
│   │   │   ├── ClubhouseExperiences.tsx
│   │   │   ├── ClubhouseFloors.tsx
│   │   │   ├── ContactCTA.tsx
│   │   │   ├── GrandArrival.tsx
│   │   │   ├── Hero.tsx
│   │   │   ├── Location.tsx
│   │   │   ├── MasterPlan.tsx
│   │   │   ├── Oasis.tsx
│   │   │   ├── OasisAmenities.tsx
│   │   │   ├── OasisExperiences.tsx
│   │   │   ├── ProjectIntro.tsx
│   │   │   ├── ProjectStats.tsx
│   │   │   ├── Residences.tsx
│   │   │   ├── SkyExperiences.tsx
│   │   │   ├── SkyLounge.tsx
│   │   │   ├── Specifications.tsx
│   │   │   ├── StiltLevel.tsx
│   │   │   └── TowerLounges.tsx
│   │   └── ui/
│   │       ├── AnimatedCounter.tsx
│   │       ├── Button.tsx
│   │       ├── Container.tsx
│   │       ├── ImageReveal.tsx
│   │       ├── Reveal.tsx
│   │       └── SectionHeading.tsx
│   ├── data/
│   │   ├── amenities.ts
│   │   ├── clubhouse.ts
│   │   ├── oasis.ts
│   │   ├── project.ts
│   │   ├── residences.ts
│   │   ├── skyLounge.ts
│   │   ├── specifications.ts
│   │   └── towers.ts
│   ├── lib/
│   │   ├── animations.ts
│   │   ├── constants.ts
│   │   └── utils.ts
│   └── types/
│       ├── common.ts
│       └── project.ts
├── .env.example
├── .gitignore
├── next.config.ts
├── package.json
├── postcss.config.mjs
├── tailwind.config.ts
├── tsconfig.json
└── README.md
```

---

## 🚀 Running Locally

1. **Install dependencies**:
   ```bash
   npm install
   ```

2. **Run development server**:
   ```bash
   npm run dev
   ```

3. Open [http://localhost:3000](http://localhost:3000) in your browser.

4. **Production Build**:
   ```bash
   npm run build
   npm run start
   ```
