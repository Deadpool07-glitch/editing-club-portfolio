import { motion } from "motion/react";


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
              className="relative aspect-video w-full rounded-[40px] overflow-hidden border border-neutral-900/40 shadow-2xl group"
            >
            <div className="relative w-full h-full">
              <video
                 controls
                preload="metadata"
                className="w-full h-full object-cover cursor-pointer"
              >
                <source src="https://res.cloudinary.com/dvb4j8sfk/video/upload/v1781462822/1751384416182_bfmror.mp4" type="video/mp4" />
              </video>
              <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-transparent pointer-events-none" />
              <span className="absolute bottom-5 left-5 font-mono text-[9px] uppercase tracking-widest text-[#999999]/90 pointer-events-none">
                MACRO REVEAL OF CREATIVE FOCUS // REC_FRAME
              </span>
              <span className="absolute top-4 left-4 font-mono text-[8px] text-[#555] tracking-widest uppercase pointer-events-none">
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
                03 / NARRATIVE DESIGN
              </span>
              <h3 className="font-display font-bold text-5xl sm:text-7xl lg:text-8xl leading-[0.9] tracking-extreme text-text-main uppercase">
                CLARITY.
<br />
CREATES.
<br />
RETENTION.
              </h3>
              <div className="border-t border-border-main pt-8 max-w-sm">
                <p className="font-sans text-sm text-text-sub leading-relaxed tracking-wide">
                  Strong documentaries are not built on information alone.
                  <br />
                  They are built on structure, pacing and storytelling.
                  <br />
                  <br />
                  Complex ideas. Clear narratives.
                  <br />
                  Lasting retention.
                </p>
              </div>
            </motion.div>
          </div>
          
        </div>
      </div>
    </section>
  );
}
