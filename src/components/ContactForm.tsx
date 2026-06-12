import React from "react";

export default function ContactForm() {
  return (
    <section id="contact" className="py-16 w-full">
      <div className="w-full max-w-[98vw] xl:max-w-[96vw] 2xl:max-w-[1720px] mx-auto px-1 sm:px-2 md:px-3">
        
        {/* Massive rounded card container - Black / Film noise */}
        <div className="w-full bg-[#0A0A0A] dark-selection-scope text-white rounded-[40px] p-8 md:p-14 animated-grain border border-neutral-900/40 shadow-2xl relative overflow-hidden">
          
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-20 relative z-10">
            
            {/* LEFT COLUMN: Large Editorial typography */}
            <div className="lg:col-span-6 flex flex-col justify-between text-left h-full">
              <div>
                <span className="font-mono text-[9px] uppercase tracking-widest text-neutral-500 block mb-6">
                  08 / STUDIO CORRESPONDENCE
                </span>

                <h2 className="font-display font-medium text-4xl sm:text-6xl uppercase tracking-cinematic tracking-widest leading-[0.95] text-[#FFFFFF]">
                  LET'S CREATE
                  <br />
                  SOMETHING
                  <br />
                  MEMORABLE.
                </h2>
              </div>
            </div>

            {/* RIGHT COLUMN: Premium Editorial Showcase Panel */}
            <div className="lg:col-span-6 flex flex-col justify-center text-left">
              <div className="flex flex-col gap-2">
                <h3 className="font-sans text-2xl sm:text-3xl md:text-4xl text-neutral-100 font-light tracking-wide leading-tight">
                  Stories are remembered.
                </h3>
                <h3 className="font-sans text-2xl sm:text-3xl md:text-4xl text-neutral-400 font-light tracking-wide leading-tight">
                  Information is forgotten.
                </h3>
              </div>

              {/* Divider line */}
              <div className="h-[1px] w-full bg-neutral-800 my-6 sm:my-8" />

              {/* SPECIALIZED IN section */}
              <div className="flex flex-col gap-4">
                <span className="font-mono text-[10px] text-neutral-500 tracking-widest uppercase">
                  SPECIALIZED IN
                </span>
                
                <ul className="flex flex-col gap-3 font-sans text-sm sm:text-base text-neutral-400 font-light">
                  <li className="flex items-center gap-3">
                    <span className="text-neutral-600">•</span>
                    <span>Documentary Editing</span>
                  </li>
                  <li className="flex items-center gap-3">
                    <span className="text-neutral-600">•</span>
                    <span>Motion Design</span>
                  </li>
                  <li className="flex items-center gap-3">
                    <span className="text-neutral-600">•</span>
                    <span>Map Animation</span>
                  </li>
                  <li className="flex items-center gap-3">
                    <span className="text-neutral-600">•</span>
                    <span>Visual Storytelling</span>
                  </li>
                  <li className="flex items-center gap-3">
                    <span className="text-neutral-600">•</span>
                    <span>High-Retention Content</span>
                  </li>
                </ul>
              </div>
            </div>

          </div>

        </div>

      </div>
    </section>
  );
}
