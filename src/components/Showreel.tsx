import React, { useState, useRef } from "react";
import { motion, AnimatePresence } from "motion/react";
import { Play, Pause, Volume2, VolumeX, Maximize, RotateCcw, Radio } from "lucide-react";
import showreelCover from "../assets/images/film_showreel_1780859888229.png";

export default function Showreel() {
  const [isPlaying, setIsPlaying] = useState(false);
  const [isMuted, setIsMuted] = useState(false);
  const [progress, setProgress] = useState(0);
  const videoRef = useRef<HTMLVideoElement>(null);

  const handlePlayToggle = () => {
    if (videoRef.current) {
      if (isPlaying) {
        videoRef.current.pause();
        setIsPlaying(false);
      } else {
        videoRef.current.play().then(() => {
          setIsPlaying(true);
        }).catch((err) => {
          console.error("Video play failed:", err);
        });
      }
    } else {
      setIsPlaying(true);
    }
  };

  const handleMuteToggle = (e: React.MouseEvent) => {
    e.stopPropagation();
    if (videoRef.current) {
      videoRef.current.muted = !isMuted;
      setIsMuted(!isMuted);
    }
  };

  const handleProgressUpdate = () => {
    if (videoRef.current) {
      const current = videoRef.current.currentTime;
      const duration = videoRef.current.duration;
      if (duration > 0) {
        setProgress((current / duration) * 100);
      }
    }
  };

  const handleFullscreenOption = (e: React.MouseEvent) => {
    e.stopPropagation();
    if (videoRef.current) {
      if (videoRef.current.requestFullscreen) {
        videoRef.current.requestFullscreen();
      }
    }
  };

  const handleRestartProgress = (e: React.MouseEvent) => {
    e.stopPropagation();
    if (videoRef.current) {
      videoRef.current.currentTime = 0;
      videoRef.current.play();
      setIsPlaying(true);
    }
  };

  return (
    <section id="showreel" className="px-4 md:px-8 py-12 w-full">
      <div className="max-w-7xl mx-auto">
        <div className="mb-6 flex flex-col md:flex-row justify-between items-baseline gap-2">
          <span className="font-mono text-[10px] uppercase tracking-widest text-text-sub">
            01 / MASTER EDIT
          </span>
          <p className="font-mono text-[10px] uppercase text-text-sub flex items-center gap-1.5">
            <Radio size={10} className="text-red-500 animate-pulse" /> CURRENT CUT: BROADCAST_READY_v2.0
          </p>
        </div>

        {/* Cinematic Card element */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.7 }}
          onClick={handlePlayToggle}
          className="relative aspect-video w-full rounded-[40px] bg-[#0A0A0A] dark-selection-scope animated-grain border border-neutral-900/40 overflow-hidden group shadow-2xl cursor-pointer"
        >
          {/* Main video element (starts lazily) */}
          {isPlaying && (
            <video
              ref={videoRef}
              onTimeUpdate={handleProgressUpdate}
              onEnded={() => setIsPlaying(false)}
              className="absolute inset-0 w-full h-full object-cover"
              src="https://assets.mixkit.co/videos/preview/mixkit-aerial-view-of-thick-fog-over-a-spruce-forest-41979-large.mp4"
              playsInline
              autoPlay
            />
          )}

          {/* Fallback Static Poster Overlay */}
          <AnimatePresence>
            {!isPlaying && (
              <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                exit={{ opacity: 0 }}
                transition={{ duration: 0.5 }}
                className="absolute inset-0 w-full h-full"
              >
                <img
                  src={showreelCover}
                  alt="THE EDITING CLUB Atmospheric Selected Showreel Poster"
                  referrerPolicy="no-referrer"
                  className="w-full h-full object-cover grayscale brightness-95 opacity-80 group-hover:scale-[1.03] transition-all duration-1000 ease-out"
                />
                {/* Netflix-like Gradient scrim */}
                <div className="absolute inset-0 bg-gradient-to-t from-[#000000]/80 via-transparent to-[#000000]/60 pointer-events-none" />

                {/* Left labels */}
                <div className="absolute bottom-8 left-8 md:bottom-12 md:left-12 flex flex-col gap-1 align-left text-left text-white z-20">
                  <span className="font-mono text-xs uppercase tracking-widest text-[#999999]">
                    SELECTED REEL
                  </span>
                  <h3 className="font-display font-medium text-2xl md:text-4xl tracking-cinematic tracking-widest text-white uppercase">
                    SHOWREEL — 2025
                  </h3>
                  <p className="font-sans text-xs text-neutral-400 mt-1 max-w-sm hidden sm:block">
                    A cohesive showcase of international documentaries, geographic map visualizers, and heavy industry animations.
                  </p>
                </div>

                {/* Right side release stamp */}
                <div className="absolute top-8 right-8 z-20 hidden md:flex flex-col text-right text-white">
                  <span className="font-mono text-[9px] uppercase tracking-widest text-neutral-500">FORMAT</span>
                  <span className="font-mono text-[10px] tracking-wider font-semibold text-neutral-300">4K DCI COLOR RECON</span>
                </div>
              </motion.div>
            )}
          </AnimatePresence>

          {/* Interactive Play overlay button */}
          <div className="absolute inset-0 flex items-center justify-center z-30 pointer-events-none">
            <motion.div
              whileHover={{ scale: 1.15 }}
              whileTap={{ scale: 0.95 }}
              className="w-16 h-16 md:w-24 md:h-24 rounded-full bg-white/10 backdrop-blur-md border border-white/20 flex items-center justify-center bg-white text-black shadow-2xl transition-all duration-300 pointer-events-auto"
            >
              {isPlaying ? (
                <Pause size={24} className="text-black fill-black" />
              ) : (
                <Play size={24} className="text-black fill-black translate-x-0.5" />
              )}
            </motion.div>
          </div>

          {/* Top subtle visual prompt when playing */}
          {isPlaying && (
            <div className="absolute top-6 left-6 right-6 flex items-center justify-between z-30 select-none bg-black/40 backdrop-blur-sm p-3.5 px-6 rounded-full border border-white/10">
              <div className="flex items-center gap-2.5">
                <span className="w-1.5 h-1.5 rounded-full bg-green-500 animate-pulse" />
                <span className="font-mono text-[10px] uppercase tracking-widest text-white/90">
                  Now Playing: Selected Showreel 2025
                </span>
              </div>
              <span className="font-mono text-[9px] text-[#A0A09E] tracking-widest hidden sm:inline">
                STREAM SPEED: ORIGINAL_RENDER
              </span>
            </div>
          )}

          {/* Custom Player Controls Drawer at bottom */}
          {isPlaying && (
            <div
              className="absolute bottom-6 left-6 right-6 z-30 bg-black/50 backdrop-blur-md border border-white/15 p-4 rounded-2xl flex flex-col gap-3 select-none pointer-events-auto"
              onClick={(e) => e.stopPropagation()}
            >
              {/* Progress Slider */}
              <div className="w-full h-1.5 bg-white/20 rounded-full relative overflow-hidden">
                <div
                  className="bg-white h-full transition-all duration-100 ease-linear"
                  style={{ width: `${progress}%` }}
                />
              </div>

              {/* Function Triggers */}
              <div className="flex items-center justify-between">
                <div className="flex items-center gap-4">
                  <button
                    onClick={handlePlayToggle}
                    className="hover:opacity-75 text-white transition-opacity cursor-pointer"
                  >
                    {isPlaying ? <Pause size={14} /> : <Play size={14} />}
                  </button>

                  <button
                    onClick={handleRestartProgress}
                    className="hover:opacity-75 text-neutral-400 hover:text-white transition-colors cursor-pointer"
                    title="Re-play cut"
                  >
                    <RotateCcw size={14} />
                  </button>

                  <button
                    onClick={handleMuteToggle}
                    className="hover:opacity-75 text-white transition-opacity cursor-pointer"
                  >
                    {isMuted ? <VolumeX size={14} className="text-red-400" /> : <Volume2 size={14} />}
                  </button>
                </div>

                <div className="flex items-center gap-4">
                  <span className="font-mono text-[10px] text-neutral-300 tracking-wider">
                    {progress > 0 ? `LOCKED FRAME: ${Math.round(progress)}%` : "BUFFERING..."}
                  </span>
                  <button
                    onClick={handleFullscreenOption}
                    className="hover:opacity-75 text-neutral-400 hover:text-white transition-colors cursor-pointer"
                    title="Fullscreen"
                  >
                    <Maximize size={14} />
                  </button>
                </div>
              </div>
            </div>
          )}
        </motion.div>
      </div>
    </section>
  );
}
