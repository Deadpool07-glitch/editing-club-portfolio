import { useState } from "react";
import { motion } from "motion/react";
import { SERVICES } from "../data";
import { Film, Compass, Box, ChevronDown, CheckCircle, Radio } from "lucide-react";

export default function Services() {
  const [activeService, setActiveService] = useState<string | null>("doc-editing");

  // Helper mapping for service icons
  const getIcon = (id: string, size = 16) => {
    switch (id) {
      case "doc-editing":
        return <Film size={size} />;
      case "motion-design":
        return <Box size={size} />;
      case "map-animation":
        return <Compass size={size} />;
      default:
        return <Film size={size} />;
    }
  };

  return (
    <section id="services" className="py-6 w-full">
      <div className="w-full">
        
        {/* Large Rounded Dark Section with Film Grain */}
        <div className="w-full bg-[#0A0A0A] dark-selection-scope text-white rounded-[40px] p-8 md:p-14 animated-grain border border-neutral-900/40 shadow-2xl">
          
          {/* Header section inside the dark box */}
          <div className="border-b border-neutral-800 pb-10 mb-14 flex flex-col md:flex-row justify-between items-baseline gap-4 text-left">
            <div>
              <span className="font-mono text-[9px] uppercase tracking-widest text-[#999999] block mb-2">
                05 / CREATIVE SERVICES RANGE
              </span>
              <h2 className="font-display font-bold leading-none tracking-extreme text-4xl sm:text-6xl text-white uppercase">
                WHAT I DO.
              </h2>
            </div>
            <p className="font-sans text-xs text-neutral-400 max-w-xs md:text-right leading-relaxed">
              Applying premium post-production standards to high-retention digital media, geospatial cartography, and investigative narrative edits.
            </p>
          </div>

          {/* Interactive Stacked Service Blocks (Fabrica Inspired) */}
          <div className="flex flex-col border-t border-neutral-900">
            {SERVICES.map((srv, idx) => {
              const isOpen = activeService === srv.id;

              return (
                <div
                  key={srv.id}
                  className="border-b border-neutral-900 py-8 lg:py-10 transition-all duration-300"
                >
                  <button
                    onClick={() => setActiveService(isOpen ? null : srv.id)}
                    className="w-full flex items-center justify-between text-left group cursor-pointer"
                  >
                    {/* Index + Icon + Title Grouping */}
                    <div className="flex items-center gap-6 md:gap-10">
                      <span className="font-mono text-xs text-neutral-600 group-hover:text-white transition-colors">
                        0{idx + 1}
                      </span>
                      <div className="text-neutral-500 group-hover:text-white transition-colors hidden sm:block">
                        {getIcon(srv.id, 20)}
                      </div>
                      <h3 className="font-display font-semibold text-xl sm:text-2xl md:text-3xl tracking-cinematic text-neutral-300 group-hover:text-white transition-colors uppercase">
                        {srv.title}
                      </h3>
                    </div>

                    {/* Expand Trigger Indicator */}
                    <div className="flex items-center gap-4">
                      <span className="hidden md:inline font-mono text-[10px] text-neutral-500 uppercase tracking-widest group-hover:text-white transition-color">
                        {srv.tagline}
                      </span>
                      <div
                        className={`w-10 h-10 rounded-full border border-neutral-800 flex items-center justify-center bg-neutral-950 group-hover:border-neutral-700 transition-all ${
                          isOpen ? "rotate-180 bg-white text-black" : "text-white"
                        }`}
                      >
                        <ChevronDown size={14} className="transition-transform duration-300" />
                      </div>
                    </div>
                  </button>

                  {/* Accompanying description block (Framer motion animation placeholder / smooth css transition) */}
                  <motion.div
                    initial={false}
                    animate={{
                      height: isOpen ? "auto" : 0,
                      opacity: isOpen ? 1 : 0,
                      marginTop: isOpen ? 24 : 0,
                    }}
                    transition={{ duration: 0.4, ease: "easeInOut" }}
                    className="overflow-hidden align-left text-left pl-6 sm:pl-20 md:pl-24"
                  >
                    <div className="grid grid-cols-1 md:grid-cols-12 gap-8 items-start max-w-5xl">
                      {/* Short editorial copy */}
                      <div className="md:col-span-8">
                        <p className="font-sans text-xs sm:text-sm text-neutral-400 leading-relaxed max-w-2xl">
                          {srv.description}
                        </p>
                      </div>

                      {/* Tool/Skill Specs columns */}
                      <div className="md:col-span-4 flex flex-col gap-3 bg-neutral-950 p-5 rounded-2xl border border-neutral-900 shadow-md">
                        <span className="font-mono text-[9px] uppercase tracking-widest text-neutral-500 flex items-center gap-1.5 border-b border-neutral-900 pb-1.5">
                          <Radio size={10} className="text-green-500 animate-pulse" /> TECHNICAL WORKFLOWS
                        </span>
                        <div className="flex flex-col gap-2">
                          {srv.skills.map((skill, sIdx) => (
                            <div key={sIdx} className="flex items-center gap-2 font-sans text-[11px] text-neutral-300">
                              <CheckCircle size={10} className="text-neutral-600 flex-shrink-0" />
                              <span>{skill}</span>
                            </div>
                          ))}
                        </div>
                      </div>
                    </div>
                  </motion.div>
                </div>
              );
            })}
          </div>

        </div>

      </div>
    </section>
  );
}
