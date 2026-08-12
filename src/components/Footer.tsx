import { ArrowUpLeft } from "lucide-react";

export default function Footer() {
  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth"
    });
  };

  return (
    <footer id="footer" className="px-6 md:px-12 pt-8 pb-6 w-full border-t border-neutral-900/60 select-none bg-bg-base">
      <div className="max-w-7xl mx-auto flex flex-col gap-6 text-left">
        
        {/* Core Layout Grid */}
        <div className="grid grid-cols-1 md:grid-cols-12 gap-6 items-start">
          
          {/* LEFT SIDE: Brand & statement */}
          <div className="md:col-span-5 flex flex-col gap-2">
            <h3 className="font-display font-semibold uppercase tracking-widest text-text-main text-[13px] sm:text-[14px]">
              THE EDITING CLUB
            </h3>
            <p className="font-sans text-[11px] sm:text-xs text-neutral-400 max-w-sm leading-relaxed tracking-wide">
              Creating high-retention documentaries, motion graphics and cinematic visual stories.
            </p>
            <span className="font-sans text-[10px] text-neutral-500 tracking-wide mt-1">
              Mumbai, India
            </span>
          </div>

          {/* CENTER: Email */}
          <div className="md:col-span-4 flex flex-col gap-1.5 font-sans">
            <span className="font-mono text-[9px] text-neutral-500 uppercase tracking-widest block">
              Email
            </span>
            <a 
              href="mailto:shekharofficial63@gmail.com" 
              className="text-[11px] sm:text-xs text-neutral-400 hover:text-white transition-colors tracking-wide w-fit"
            >
              shekharofficial63@gmail.com
            </a>
          </div>

          {/* RIGHT: Social links */}
          <div className="md:col-span-3 flex flex-col gap-1.5 font-sans">
            <span className="font-mono text-[9px] text-neutral-500 uppercase tracking-widest block">
              Social
            </span>
            <div className="flex flex-col gap-1 text-[11px] sm:text-xs text-neutral-400">
              <a href="https://youtube.com" target="_blank" rel="noopener noreferrer" className="hover:text-white transition-colors tracking-wide w-fit">YouTube</a>
              <a href="https://instagram.com" target="_blank" rel="noopener noreferrer" className="hover:text-white transition-colors tracking-wide w-fit">Instagram</a>
              <a href="https://linkedin.com" target="_blank" rel="noopener noreferrer" className="hover:text-white transition-colors tracking-wide w-fit">LinkedIn</a>
              <a href="https://upwork.com" target="_blank" rel="noopener noreferrer" className="hover:text-white transition-colors tracking-wide w-fit">Upwork</a>
            </div>
          </div>

        </div>

        {/* Bottom copyright row */}
        <div className="border-t border-neutral-950 pt-4 flex flex-row items-center justify-between text-[10px] text-neutral-500 font-mono">
          
          <div className="flex gap-1.5 items-center">
            <span>© 2025 THE EDITING CLUB</span>
          </div>

          {/* Scrolling elevator trigger */}
          <button
            onClick={scrollToTop}
            className="group flex items-center gap-2 cursor-pointer hover:text-white transition-colors"
          >
            <span className="text-[9px] uppercase tracking-wider">Back to Top</span>
            <div className="w-6 h-6 rounded-full border border-neutral-800 flex items-center justify-center bg-neutral-950 group-hover:-translate-y-0.5 transition-transform">
              <ArrowUpLeft size={10} className="rotate-45 text-neutral-400 group-hover:text-white" />
            </div>
          </button>

        </div>

      </div>
    </footer>
  );
}

