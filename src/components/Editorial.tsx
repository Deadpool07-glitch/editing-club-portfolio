import { motion } from "motion/react";
import lensImg from "../assets/images/cinematic_lens_1780859922705.png";

export default function Editorial() {
  return (
    <section id="editorial" className="px-4 md:px-8 py-20 w-full overflow-hidden select-none">
      <div className="max-w-7xl mx-auto">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-20 items-center">
          
          {/* Left Column: Large cinematic image (vintage macro lens) */}
          <div className="lg:col-span-7">
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true, margin: "-100px" }}
              transition={{ duration: 0.8 }}
              className="relative aspect-video w-full rounded-[40px] bg-[#0A0A0A] animated-grain border border-neutral-900/40 p-4 sm:p-5 flex flex-col justify-between shadow-2xl group"
            >
              <div className="relative w-full h-full rounded-[24px] md:rounded-[28px] overflow-hidden bg-black flex items-center justify-center border border-neutral-950 shadow-inner">
                <img
                  src={lensImg}
                  alt="Vintage motion picture camera prime lens"
                  referrerPolicy="no-referrer"
                  className="w-full h-full object-cover grayscale brightness-95 opacity-90 group-hover:scale-103 transition-transform duration-[1500ms]"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-transparent pointer-events-none" />
                <span className="absolute bottom-5 left-5 font-mono text-[9px] uppercase tracking-widest text-[#999999]/90">
                  MACRO REVEAL OF CREATIVE FOCUS // REC_FRAME
                </span>
                <span className="absolute top-4 left-4 font-mono text-[8px] text-[#555] tracking-widest uppercase">
                  UTC_SYNC [+]
                </span>
              </div>
            </motion.div>
          </div>

          {/* Right Column: High-end huge typography */}
          <div className="lg:col-span-5 text-left flex flex-col justify-center">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-100px" }}
              transition={{ duration: 0.7 }}
              className="flex flex-col gap-8"
            >
              <span className="font-mono text-[10px] uppercase tracking-widest text-text-sub block">
                03 / THE MANIFESTO
              </span>

              <h3 className="font-display font-bold text-5xl sm:text-7xl lg:text-8xl leading-[0.9] tracking-extreme text-text-main uppercase">
                STORIES.
                <br />
                NOT
                <br />
                VIDEOS.
              </h3>

              <div className="border-t border-border-main pt-8 max-w-sm">
                <p className="font-sans text-sm text-text-sub leading-relaxed tracking-wide">
                  Traditional social media contents are designed for fleeting distraction.
                  We build lasting narratives of geopolitical conflict and structural science that demand absolute viewer retention.
                </p>
              </div>
            </motion.div>
          </div>

        </div>
      </div>
    </section>
  );
}
