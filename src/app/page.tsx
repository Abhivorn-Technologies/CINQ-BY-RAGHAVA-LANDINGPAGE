import { Navbar } from "@/components/layout/Navbar";
import { Footer } from "@/components/layout/Footer";
import { Hero } from "@/components/sections/Hero";
import { ProjectStats } from "@/components/sections/ProjectStats";
import { ProjectIntro } from "@/components/sections/ProjectIntro";
import { Highlights } from "@/components/sections/Highlights";
import { Clubhouse } from "@/components/sections/Clubhouse";
import { GroundToTerrace } from "@/components/sections/GroundToTerrace";
import { Residences } from "@/components/sections/Residences";
import { Amenities } from "@/components/sections/Amenities";
import { ProjectGallery } from "@/components/sections/ProjectGallery";
import { Location } from "@/components/sections/Location";
import { Contact } from "@/components/sections/Contact";
import { Specifications } from "@/components/sections/Specifications";
import { ContactPopup } from "@/components/ui/ContactPopup";

export default function Home() {
  return (
    <div className="flex flex-col min-h-screen bg-[#171315]">
      <Navbar />

      <main className="flex-grow">
        <Hero />
        <ProjectStats />
        <ProjectIntro />
        <Highlights />
        <Clubhouse />
        <GroundToTerrace />
        <ProjectGallery />
        <Residences />
        <Amenities />
        <Location />
        <Specifications />
        <Contact />
      </main>

      <Footer />
      <ContactPopup />
    </div>
  );
}

