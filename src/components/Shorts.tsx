import { useState, useRef } from "react";
import { motion, AnimatePresence } from "motion/react";
import { SHORTS } from "../data";
import { ShortContent } from "../types";
import { Play, Pause, Eye, X, RefreshCw, Sparkles, Smartphone } from "lucide-react";

export default function Shorts() {
  const [selectedShort, setSelectedShort] = useState<ShortContent | null>(null);
  const [isMobilePlaying, setIsMobilePlaying] = useState(true);
  const videoRef = useRef<HTMLVideoElement>(null);

  const toggleMobilePlay = () => {
    if (videoRef.current) {
      if (isMobilePlaying) {
        videoRef.current.pause();
      } else {
        videoRef.current.play();
      }
      setIsMobilePlaying(!isMobilePlaying);
    }
  };

  return (
    <section id="shorts" className="px-4 md:px-8 py-16 w-full">
      <div className="max-w-7xl mx-auto">
        
        {/* Section Header */}
        <div className="mb-12 text-left">
          <span className="font-mono text-[10px] uppercase tracking-widest text-text-sub block mb-2">
            04 / RETENTION EXPERIMENTS
          </span>
          <h2 className="font-display font-bold leading-none tracking-extreme text-4xl sm:text-6xl text-text-main uppercase">
            SHORT FORM CONTENT
          </h2>
          <div className="w-16 h-[1px] bg-text-main mt-4" />
        </div>

        {/* 3 Blocks in one horizontal row */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {SHORTS.map((item, idx) => (
            <motion.div
              key={item.id}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-50px" }}
              transition={{ duration: 0.6, delay: idx * 0.15 }}
              onClick={() => {
                setSelectedShort(item);
                setIsMobilePlaying(true);
              }}
              className="group cursor-pointer bg-bg-card rounded-[32px] overflow-hidden border border-border-main p-3 hover:shadow-xl transition-all duration-500"
            >
              {/* Cover thumbnail with Play overlay & Hover animations */}
              <div className="relative aspect-[9/16] rounded-[24px] overflow-hidden bg-neutral-950">
                <img
                  src={item.image}
                  alt={`${item.title} cover`}
                  referrerPolicy="no-referrer"
                  className="w-full h-full object-cover grayscale opacity-80 group-hover:scale-105 group-hover:grayscale-0 group-hover:opacity-100 transition-all duration-700 ease-out"
                />
                
                {/* Netflix-like overlay gradient */}
                <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-transparent" />

                {/* Simulated center play icon */}
                <div className="absolute inset-0 flex items-center justify-center">
                  <div className="w-12 h-12 rounded-full bg-white/20 backdrop-blur-md border border-white/30 flex items-center justify-center text-white scale-90 group-hover:scale-100 group-hover:bg-white group-hover:text-black transition-all duration-350">
                    <Play size={16} className="fill-current translate-x-0.5" />
                  </div>
                </div>

                {/* Duration Top-Left */}
                <span className="absolute top-4 left-4 font-mono text-[9px] text-white bg-black/60 p-1 px-2.5 rounded-full border border-white/10">
                  {item.duration}
                </span>

                {/* Views Bottom-Right badge */}
                <div className="absolute bottom-4 right-4 flex items-center gap-1.5 bg-black/55 backdrop-blur-md px-3 py-1 rounded-full border border-neutral-800 text-white select-none">
                  <Eye size={10} className="text-neutral-400" />
                  <span className="font-mono text-[9px] tracking-wider uppercase font-semibold">
                    {item.views}
                  </span>
                </div>
              </div>

              {/* Descriptions & titles */}
              <div className="p-4 align-left text-left select-none">
                <span className="font-mono text-[9px] uppercase tracking-widest text-text-sub block mb-1">
                  {item.category}
                </span>
                <h4 className="font-display font-semibold text-lg text-text-main group-hover:text-text-sub transition-colors uppercase">
                  {item.title}
                </h4>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Dynamic Vertical Mobile Playback Screen (iPhone frame look) */}
        <AnimatePresence>
          {selectedShort && (
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              onClick={() => setSelectedShort(null)}
              className="fixed inset-0 z-50 bg-[#000000]/90 backdrop-blur-xl flex items-center justify-center p-4 md:p-8"
            >
              <div
                onClick={(e) => e.stopPropagation()}
                className="relative flex flex-col items-center justify-center w-full max-w-sm"
              >
                {/* Simulated high-end dynamic iPhone container */}
                <motion.div
                  initial={{ scale: 0.9, y: 50, opacity: 0 }}
                  animate={{ scale: 1, y: 0, opacity: 1 }}
                  exit={{ scale: 0.9, y: 50, opacity: 0 }}
                  transition={{ type: "spring", damping: 24, stiffness: 170 }}
                  className="relative w-[280px] sm:w-[325px] h-[520px] sm:h-[600px] bg-neutral-950 rounded-[48px] border-[8px] border-neutral-900 shadow-2xl flex flex-col overflow-hidden select-none"
                >
                  
                  {/* Dynamic Island Speaker Node */}
                  <div className="absolute top-2 left-1/2 -translate-x-1/2 w-28 h-5.5 bg-black rounded-full z-40 flex items-center justify-center">
                    <span className="w-1.5 h-1.5 rounded-full bg-blue-500/50 absolute left-4" />
                    <span className="w-6 h-0.5 bg-neutral-800 rounded-full" />
                  </div>

                  {/* Vertical HTML5 Video loop */}
                  <video
                    ref={videoRef}
                    src="https://assets.mixkit.co/videos/preview/mixkit-misty-peaks-of-mountain-ridges-at-dawn-43183-large.mp4"
                    className="absolute inset-0 w-full h-full object-cover brightness-90 grayscale opacity-90"
                    playsInline
                    autoPlay
                    loop
                    preload="auto"
                  />

                  {/* Gradient layers to keep text legible */}
                  <div className="absolute inset-0 bg-gradient-to-b from-black/50 via-transparent to-black/75 pointer-events-none" />

                  {/* Overlay Meta Details inside phone screen */}
                  <div className="absolute top-12 left-6 right-6 flex justify-between items-center text-white z-30 font-mono text-[9px] uppercase tracking-widest">
                    <span className="flex items-center gap-1">
                      <Smartphone size={8} /> LIVE_PREVIEW
                    </span>
                    <span className="text-neutral-400">9:16 FEED</span>
                  </div>

                  {/* Play/Pause clicking trigger */}
                  <div
                    onClick={toggleMobilePlay}
                    className="absolute inset-0 flex items-center justify-center z-20 cursor-pointer"
                  >
                    {!isMobilePlaying && (
                      <div className="w-14 h-14 rounded-full bg-white/20 backdrop-blur-md border border-white/35 flex items-center justify-center text-white">
                        <Play size={20} className="fill-current translate-x-0.5 animate-pulse" />
                      </div>
                    )}
                  </div>

                  {/* Bottom details & reels stats overlay */}
                  <div className="absolute bottom-8 left-6 right-6 text-left text-white z-30 flex flex-col gap-2">
                    <div className="flex gap-2">
                      <span className="font-mono text-[8px] uppercase tracking-wider bg-white/10 backdrop-blur-sm p-1 px-2.5 rounded-full border border-white/10 text-white">
                        {selectedShort.category}
                      </span>
                      <span className="font-mono text-[8px] uppercase tracking-wider bg-yellow-500/10 backdrop-blur-sm p-1 px-2.5 rounded-full border border-yellow-500/20 text-yellow-500 flex items-center gap-1">
                        <Sparkles size={8} /> 87% AVG RETENTION
                      </span>
                    </div>

                    <h3 className="font-display font-bold text-lg tracking-wide uppercase leading-tight text-[#FFFFFF]">
                      {selectedShort.title}
                    </h3>
                    
                    <p className="font-sans text-[10px] text-neutral-400 line-clamp-2 leading-relaxed">
                      Sleek multi-layered structure with custom typography designed to maximize scroll-stop and hold audience focus for over {selectedShort.duration}.
                    </p>

                    <div className="flex items-center justify-between border-t border-white/10 pt-3 mt-1 font-mono text-[9px] text-neutral-550">
                      <span>AUDIENCE ENGAGED</span>
                      <span className="text-white font-bold font-mono">{selectedShort.views}</span>
                    </div>
                  </div>

                </motion.div>

                {/* iPhone Bottom Closing text */}
                <button
                  onClick={() => setSelectedShort(null)}
                  className="mt-6 flex items-center gap-2 bg-white/10 backdrop-blur-lg border border-white/15 px-6 py-2.5 rounded-full text-white text-xs font-sans uppercase tracking-widest hover:bg-white hover:text-black transition-all cursor-pointer shadow-lg"
                >
                  <X size={12} /> Exit Player
                </button>
              </div>
            </motion.div>
          )}
        </AnimatePresence>

      </div>
    </section>
  );
}
