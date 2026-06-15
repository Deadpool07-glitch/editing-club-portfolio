import { useState } from "react";
import { motion, AnimatePresence } from "motion/react";
import { PROJECTS } from "../data";
import { Project } from "../types";
import { X, Calendar, Focus, ArrowUpRight, Award, Film, Sliders, ChevronRight } from "lucide-react";
import motionGlobeImg from "../assets/images/motion_globe_1780859905568.png";

export default function Projects() {
  const [selectedProject, setSelectedProject] = useState<Project | null>(null);
  const [hoveredId, setHoveredId] = useState<string | null>(null);

  // Resolve custom image routes e.g. MOTION_GLOBE
  const getProjectImage = (proj: Project) => {
    if (proj.image === "MOTION_GLOBE") {
      return motionGlobeImg;
    }
    return proj.image;
  };

  return (
    <section id="projects" className="px-4 md:px-8 py-16 w-full">
      <div className="max-w-7xl mx-auto">
        
        {/* Spacious Title Header inspired directly by Fabrica */}
        <div className="border-b border-border-main pb-8 mb-16 flex flex-col md:flex-row justify-between items-baseline gap-4">
          <div>
            <span className="font-mono text-[10px] uppercase tracking-widest text-text-sub block mb-2">
              02 / SELECTED WORK ARCHIVE
            </span>
            <h2 className="font-display font-bold leading-none tracking-extreme text-5xl sm:text-7xl lg:text-8xl text-text-main uppercase">
              PROJECTS.
            </h2>
          </div>
          <div className="max-w-xs text-left md:text-right">
            <p className="font-sans text-xs text-text-sub leading-relaxed">
              Curated compilation of military visual analyses, geopolitical maps, economic features, and dynamic studio brand reels compiled between 22-25.
            </p>
          </div>
        </div>

        {/* 2 columns, 3 rows grid, gap: 40px under Fabrica design specs */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-x-10 gap-y-12">
          {PROJECTS.map((project, idx) => (
            <motion.div
              key={project.id}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-50px" }}
              transition={{ duration: 0.6, delay: (idx % 2) * 0.15 }}
              onMouseEnter={() => setHoveredId(project.id)}
              onMouseLeave={() => setHoveredId(null)}
              onClick={() => setSelectedProject(project)}
              className="group cursor-pointer flex flex-col gap-6"
            >
              {/* Image/Video poster with rounded corners (40px or large, cinematic aspect ratio) */}
              <div id={`project-card-${project.id}`} className="relative aspect-video sm:aspect-16/10 rounded-[30px] md:rounded-[40px] overflow-hidden bg-neutral-900 border border-border-main shadow-md group transform-gpu">
                <video
                  src={project.video}
                  autoPlay
                  muted
                  loop
                  playsInline
                  preload="metadata"
                  className="absolute inset-0 w-full h-full object-cover"
                />

                {/* Year Indicator Top-Right Badge */}
                <div className="absolute top-6 right-6 font-mono text-[10px] tracking-widest text-[#FFFFFF] bg-[#0A0A0A]/85 p-1.5 px-3 rounded-full border border-[#FFFFFF]/10 select-none pointer-events-none">
                  {project.year}
                </div>
              </div>

              {/* Title & Metadata row */}
              <div className="flex justify-between items-start px-3 select-none">
                <div className="align-left text-left">
                  <h3 className="font-display font-medium text-2xl md:text-3xl tracking-tight text-text-main group-hover:text-text-sub transition-colors duration-500 uppercase leading-snug">
                    {project.name}
                  </h3>
                  <p className="font-mono text-[10px] md:text-xs uppercase tracking-wider text-neutral-500 mt-1.5">
                    {project.category}
                  </p>
                </div>
                <div className="font-mono text-xs text-text-sub group-hover:translate-x-2 transition-transform duration-300 self-center">
                  →
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Cinematic Inspection Modal Panel */}
        <AnimatePresence>
          {selectedProject && (
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              onClick={() => setSelectedProject(null)}
              className="fixed inset-0 z-50 bg-[#000000]/98 flex items-center justify-center p-4 md:p-8 overflow-y-auto dark-selection-scope text-white"
            >
              <motion.div
                initial={{ scale: 0.95, y: 30 }}
                animate={{ scale: 1, y: 0 }}
                exit={{ scale: 0.95, y: 30 }}
                transition={{ type: "spring", damping: 25, stiffness: 180 }}
                onClick={(e) => e.stopPropagation()}
                className="bg-bg-dark rounded-[30px] md:rounded-[36px] overflow-hidden max-w-5xl w-full border border-neutral-800 shadow-2xl relative animated-grain flex flex-col"
              >
                
                {/* Visual Cover Player Header (Full width, aspect-video 16:9, object-contain, no crop) */}
                <div className="relative w-full aspect-video bg-black flex items-center justify-center border-b border-neutral-900">
                  {selectedProject.video ? (
                    <video
                      src={selectedProject.video}
                      poster={getProjectImage(selectedProject)}
                      autoPlay
                      controls
                      loop
                      muted
                      playsInline
                      className="w-full h-full object-contain"
                    />
                  ) : (
                    <img
                      src={getProjectImage(selectedProject)}
                      alt={selectedProject.name}
                      referrerPolicy="no-referrer"
                      className="w-full h-full object-contain"
                    />
                  )}
                  
                  {/* Close trigger button */}
                  <button
                    onClick={() => setSelectedProject(null)}
                    className="absolute top-4 right-4 md:top-6 md:right-6 w-10 h-10 rounded-full border border-neutral-800 flex items-center justify-center bg-neutral-900/90 text-neutral-400 hover:text-white hover:bg-neutral-800 transition-colors cursor-pointer z-50 backdrop-blur-md shadow-lg"
                    title="Close case study"
                  >
                    <X size={16} />
                  </button>
                </div>

                {/* Narrative Details Below Player */}
                <div className="p-6 md:p-10 flex flex-col gap-6 max-h-[45vh] overflow-y-auto text-left">
                  
                  {/* Title and Category Row */}
                  <div className="flex flex-col md:flex-row justify-between items-start md:items-center gap-4 border-b border-neutral-900 pb-5">
                    <div>
                      <span className="font-mono text-[9px] uppercase tracking-widest text-neutral-500 block mb-1">
                        {selectedProject.year} / {selectedProject.category}
                      </span>
                      <h2 className="font-display font-bold text-2xl md:text-4xl tracking-tight text-white uppercase leading-none">
                        {selectedProject.name}
                      </h2>
                    </div>
                    
                    {/* Operational Action */}
                    <button
                      onClick={() => {
                        setSelectedProject(null);
                        const element = document.getElementById("contact");
                        if (element) {
                          element.scrollIntoView({ behavior: "smooth" });
                        }
                      }}
                      className="w-full md:w-auto font-sans text-xs uppercase tracking-widest font-semibold bg-white text-black p-3 md:p-3.5 px-6 rounded-full hover:bg-neutral-200 transition-colors flex items-center justify-center gap-2 cursor-pointer shadow-lg self-stretch md:self-auto"
                    >
                      Request Case Briefing <ChevronRight size={12} />
                    </button>
                  </div>

                  {/* Details Grid */}
                  <div className="grid grid-cols-1 md:grid-cols-12 gap-6 md:gap-8">
                    
                    {/* Description and tags (7 columns) */}
                    <div className="md:col-span-7 flex flex-col gap-5">
                      <div>
                        <span className="font-mono text-[9px] uppercase tracking-widest text-[#999999] block mb-2">
                          CHRONOLOGY CONCEPT BRIEF
                        </span>
                        <p className="font-sans text-xs sm:text-sm text-neutral-300 leading-relaxed">
                          {selectedProject.description}
                        </p>
                      </div>

                      <div>
                        <span className="font-mono text-[9px] uppercase tracking-widest text-[#999999] block mb-2.5">
                          DEVELOPMENT CREATIVE SCOPE
                        </span>
                        <div className="flex flex-wrap gap-1.5">
                          {selectedProject.tags.map((tag, idx) => (
                            <span
                              key={idx}
                              className="bg-neutral-950 border border-neutral-850 p-2 px-3 rounded-xl font-mono text-[9px] tracking-wider text-neutral-400"
                            >
                              {tag}
                            </span>
                          ))}
                        </div>
                      </div>
                    </div>

                    {/* Metadata & specs columns (5 columns) */}
                    <div className="md:col-span-5 flex flex-col gap-5">
                      
                      {/* Timeline / analysis table */}
                      <div className="bg-neutral-950 border border-neutral-900 p-5 rounded-2xl flex flex-col gap-3">
                        <span className="font-mono text-[9px] tracking-wider text-neutral-500 uppercase flex items-center gap-1.5 border-b border-neutral-850 pb-2">
                          <Award size={10} className="text-yellow-500" /> DIRECTORS CUT CONFIG
                        </span>
                        <div className="flex flex-col gap-2 font-sans text-xs">
                          <div className="flex justify-between items-center border-b border-neutral-900 pb-1.5">
                            <span className="text-neutral-400">Pacing Ratio:</span>
                            <span className="font-mono text-[10px] text-white">Dynamic 3:1 Tension Pattern</span>
                          </div>
                          <div className="flex justify-between items-center border-b border-neutral-900 pb-1.5">
                            <span className="text-neutral-400">Color Palette:</span>
                            <span className="font-mono text-[10px] text-white">Soot & Zinc High-contrast</span>
                          </div>
                          <div className="flex justify-between items-center">
                            <span className="text-neutral-400">Map Data Scale:</span>
                            <span className="font-mono text-[10px] text-white">WGS 84 Ortho Dem</span>
                          </div>
                        </div>
                      </div>

                      {/* Technical Specs foot bar */}
                      <div className="flex justify-between items-center font-mono text-[9px] text-neutral-500 uppercase tracking-widest px-1">
                        <span className="flex items-center gap-1"><Calendar size={12} /> PRO_RES_4K MASTER</span>
                        <span className="text-neutral-700">•</span>
                        <span>EDIT_LAB #0294</span>
                      </div>
                    </div>

                  </div>
                </div>

              </motion.div>
            </motion.div>
          )}
        </AnimatePresence>

      </div>
    </section>
  );
}
