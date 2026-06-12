import { motion } from "motion/react";
import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import Showreel from "./components/Showreel";
import Projects from "./components/Projects";
import Editorial from "./components/Editorial";
import Shorts from "./components/Shorts";
import Services from "./components/Services";
import Experience from "./components/Experience";
import Connect from "./components/Connect";
import ContactForm from "./components/ContactForm";
import Footer from "./components/Footer";

export default function App() {
  // Common global scrolling handler to contact scoping brief section
  const handleOpenContact = () => {
    const element = document.getElementById("contact");
    if (element) {
      const offset = 90; // offset of sticky navbar
      const elementPosition = element.getBoundingClientRect().top + window.scrollY;
      window.scrollTo({
        top: elementPosition - offset,
        behavior: "smooth"
      });
    }
  };

  return (
    <div className="min-h-screen bg-bg-base text-text-main font-sans selection:bg-text-main selection:text-white relative">
      
      {/* Background aesthetics line indicators representing professional grid standards */}
      <div className="fixed inset-y-0 left-6 md:left-12 w-[1px] bg-border-main/25 pointer-events-none z-0" />
      <div className="fixed inset-y-0 right-6 md:right-12 w-[1px] bg-border-main/25 pointer-events-none z-0" />
      
      {/* Floating high-end pixel compass label on side rails */}
      <div className="fixed bottom-12 left-5 z-30 font-mono text-[8px] uppercase tracking-[0.25em] rotate-270 origin-left hidden lg:block text-text-sub opacity-50 select-none">
        FINE_ART_CUTS // DOCUMENTARY_CORE
      </div>

      <div className="relative z-10 flex flex-col items-center w-full">
        
        {/* Top spacious navigation header */}
        <Navbar onOpenContact={handleOpenContact} />

        {/* 1. Massive Rounded Hero Section Container */}
        <Hero onOpenContact={handleOpenContact} />

        {/* Outer body grid alignment wrappers with custom offsets to rhythm content spacing */}
        <main className="w-full max-w-7xl mx-auto flex flex-col gap-6 md:gap-10 pb-12">
          
          {/* 2. Selected Master Showreel Stream */}
          <Showreel />

          {/* 3. 2-column Projects Poster Archive */}
          <Projects />

          {/* 4. Split Layout Stories. Not Videos. Editorial */}
          <Editorial />

          {/* 5. 3-block Horizontal Shorts Content Mobile player */}
          <Shorts />

        </main>

        {/* 6. Massive Black Rounded Core Services Accordions - Cinematic Wide Block */}
        <div className="w-full max-w-[98vw] xl:max-w-[96vw] 2xl:max-w-[1720px] mx-auto px-1 sm:px-2 md:px-3">
          <Services />
        </div>

        <main className="w-full max-w-7xl mx-auto flex flex-col gap-6 md:gap-10 pb-12">

          {/* 7. Swiss-inspired Experience Statistic grids */}
          <Experience />

          {/* 8. YouTube, Instagram and Professional Connect links */}
          <Connect />

        </main>

        {/* 9. Black Cinema scoping brief transmittal */}
        <ContactForm />

        {/* 10. Creative agency minimalist footer */}
        <Footer />

      </div>
    </div>
  );
}
