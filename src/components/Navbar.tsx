import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "motion/react";
import { Menu, X, ArrowUpRight, Film, ExternalLink } from "lucide-react";

interface NavbarProps {
  onOpenContact: () => void;
}

export default function Navbar({ onOpenContact }: NavbarProps) {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const scrollToSection = (id: string) => {
    setIsOpen(false);
    const element = document.getElementById(id);
    if (element) {
      const offset = 80; // Offset for navbar
      const elementPosition = element.getBoundingClientRect().top + window.scrollY;
      window.scrollTo({
        top: elementPosition - offset,
        behavior: "smooth",
      });
    }
  };

  return (
    <>
      <nav
        id="navbar"
        className={`fixed top-0 left-0 w-full z-40 transition-all duration-500 px-6 md:px-12 py-6 ${
          scrolled
            ? "bg-bg-base/98 border-b border-border-main/50 py-4"
            : "bg-transparent"
        }`}
      >
        <div className="max-w-7xl mx-auto flex items-center justify-between">
          {/* Logo Left */}
          <a
            href="#"
            onClick={(e) => {
              e.preventDefault();
              window.scrollTo({ top: 0, behavior: "smooth" });
            }}
            className="font-display font-bold tracking-cinematic text-lg md:text-xl text-text-main flex items-center gap-2 group"
          >
            <span className="w-2.5 h-2.5 rounded-full bg-text-main group-hover:scale-125 transition-transform" />
            THE EDITING CLUB
          </a>

          {/* Center Links (Fabrica Inspired style, spacious) */}
          <div className="hidden md:flex items-center gap-10 font-sans text-xs tracking-widest font-medium uppercase text-text-sub">
            <button
              onClick={() => scrollToSection("projects")}
              className="hover:text-text-main transition-colors duration-300 relative py-1 group cursor-pointer"
            >
              Projects
              <span className="absolute bottom-0 left-0 w-full h-[1px] bg-text-main scale-x-0 group-hover:scale-x-100 origin-left transition-transform duration-300" />
            </button>
            <button
              onClick={() => scrollToSection("showreel")}
              className="hover:text-text-main transition-colors duration-300 relative py-1 group cursor-pointer"
            >
              Showreel
              <span className="absolute bottom-0 left-0 w-full h-[1px] bg-text-main scale-x-0 group-hover:scale-x-100 origin-left transition-transform duration-300" />
            </button>
            <button
              onClick={() => scrollToSection("services")}
              className="hover:text-text-main transition-colors duration-300 relative py-1 group cursor-pointer"
            >
              Services
              <span className="absolute bottom-0 left-0 w-full h-[1px] bg-text-main scale-x-0 group-hover:scale-x-100 origin-left transition-transform duration-300" />
            </button>
            <button
              onClick={() => scrollToSection("experience")}
              className="hover:text-text-main transition-colors duration-300 relative py-1 group cursor-pointer"
            >
              About
              <span className="absolute bottom-0 left-0 w-full h-[1px] bg-text-main scale-x-0 group-hover:scale-x-100 origin-left transition-transform duration-300" />
            </button>
            <button
              onClick={() => scrollToSection("contact")}
              className="hover:text-text-main transition-colors duration-300 relative py-1 group cursor-pointer"
            >
              Contact
              <span className="absolute bottom-0 left-0 w-full h-[1px] bg-text-main scale-x-0 group-hover:scale-x-100 origin-left transition-transform duration-300" />
            </button>
          </div>

          {/* Right Hamburger */}
          <button
            id="nav-toggle"
            onClick={() => setIsOpen(true)}
            className="flex items-center gap-3 font-sans text-xs uppercase tracking-widest text-text-main hover:opacity-75 transition-opacity cursor-pointer group"
          >
            <span className="hidden sm:inline font-medium group-hover:underline decoration-1 underline-offset-4">
              Menu
            </span>
            <div className="w-8 h-8 rounded-full border border-border-main flex items-center justify-center bg-bg-card">
              <Menu size={14} className="text-text-main" />
            </div>
          </button>
        </div>
      </nav>

      {/* Full-Screen Minimalist Drawer Menu */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            id="fullscreen-menu"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.4 }}
            className="fixed inset-0 z-50 bg-bg-dark text-white animated-grain dark-selection-scope flex flex-col justify-between p-8 md:p-16"
          >
            {/* Header inside drawer */}
            <div className="flex items-center justify-between w-full max-w-7xl mx-auto">
              <span className="font-display font-bold text-lg md:text-xl tracking-cinematic tracking-widest text-[#FFFFFF]">
                THE EDITING CLUB
              </span>
              <button
                onClick={() => setIsOpen(false)}
                className="flex items-center gap-3 font-sans text-xs uppercase tracking-widest text-[#FFFFFF] hover:opacity-80 transition-opacity cursor-pointer"
              >
                <span>Close</span>
                <div className="w-10 h-10 rounded-full border border-neutral-800 flex items-center justify-center bg-neutral-900">
                  <X size={16} />
                </div>
              </button>
            </div>

            {/* Menu Links */}
            <div className="max-w-7xl mx-auto w-full grid grid-cols-1 md:grid-cols-2 gap-12 items-center my-auto">
              <div className="flex flex-col gap-6 md:gap-8 align-left text-left">
                <span className="font-mono text-xs uppercase tracking-widest text-neutral-500">
                  Navigation Tree
                </span>
                {[
                  { label: "Selected Projects", target: "projects" },
                  { label: "2025 Showreel", target: "showreel" },
                  { label: "Creative Services", target: "services" },
                  { label: "Studio Experience", target: "experience" },
                  { label: "Get In Touch", target: "contact" },
                ].map((item, index) => (
                  <motion.button
                    initial={{ x: -20, opacity: 0 }}
                    animate={{ x: 0, opacity: 1 }}
                    transition={{ delay: index * 0.08, duration: 0.4 }}
                    key={index}
                    onClick={() => scrollToSection(item.target)}
                    className="group flex items-baseline gap-4 hover:translate-x-3 transition-transform text-left"
                  >
                    <span className="font-mono text-sm text-neutral-600 group-hover:text-white transition-colors">
                      0{index + 1}
                    </span>
                    <span className="font-display text-4xl md:text-6xl font-bold tracking-cinematic text-neutral-300 group-hover:text-white transition-colors duration-300">
                      {item.label}
                    </span>
                    <ArrowUpRight className="opacity-0 group-hover:opacity-100 transition-opacity text-white self-center" size={24} />
                  </motion.button>
                ))}
              </div>

              {/* Extra studio info */}
              <div className="hidden md:flex flex-col gap-8 border-l border-neutral-800 pl-16">
                <div>
                  <span className="font-mono text-xs uppercase tracking-widest text-neutral-500 block mb-4">
                    The Club Vision
                  </span>
                  <p className="font-sans text-neutral-400 leading-relaxed text-sm max-w-sm">
                    We craft cinematic experiences for high-profile investigative documentaries, state-of-the-art geopolitical map animations, and corporate storytelling films. Inspired by classic print editorial guidelines and Swiss minimalism.
                  </p>
                </div>

                <div>
                  <span className="font-mono text-xs uppercase tracking-widest text-neutral-500 block mb-3">
                    Project Briefings
                  </span>
                  <button
                    onClick={() => {
                      setIsOpen(false);
                      onOpenContact();
                    }}
                    className="font-sans text-xs uppercase tracking-widest font-semibold flex items-center gap-2 border-b border-white pb-1 w-fit hover:opacity-80 transition-opacity"
                  >
                    Direct Briefing <Film size={12} />
                  </button>
                </div>

                <div>
                  <span className="font-mono text-xs uppercase tracking-widest text-neutral-500 block mb-2">
                    Studio Location
                  </span>
                  <p className="font-sans text-neutral-400 text-xs tracking-wider">
                    New Delhi • Geneva • Distributed Globally
                  </p>
                </div>
              </div>
            </div>

            {/* Footer inside drawer */}
            <div className="w-full max-w-7xl mx-auto border-t border-neutral-900 pt-8 flex flex-col md:flex-row justify-between items-center text-xs text-neutral-500 font-mono">
              <p>© MMXXVI THE EDITING CLUB. ALL RIGHTS RESERVED.</p>
              <div className="flex gap-6 mt-4 md:mt-0">
                <a href="#youtube" className="hover:text-white transition-colors flex items-center gap-1">YT <ExternalLink size={10} /></a>
                <a href="#linkedin" className="hover:text-white transition-colors flex items-center gap-1">LI <ExternalLink size={10} /></a>
                <a href="#instagram" className="hover:text-white transition-colors flex items-center gap-1">IG <ExternalLink size={10} /></a>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
