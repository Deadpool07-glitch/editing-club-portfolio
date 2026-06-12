import { motion } from "motion/react";
import { SOCIALS } from "../data";
import { Youtube, Instagram, Linkedin, Twitter, Globe, ArrowUpRight } from "lucide-react";

export default function Connect() {
  const getPlatformIcon = (platform: string, size = 18) => {
    switch (platform.toLowerCase()) {
      case "youtube":
        return <Youtube size={size} />;
      case "instagram":
        return <Instagram size={size} />;
      case "linkedin":
        return <Linkedin size={size} />;
      case "x / twitter":
        return <Twitter size={size} />;
      case "upwork":
        return (
          <svg viewBox="0 0 24 24" fill="currentColor" width={size} height={size} className="text-white">
            <path d="M18.561 3.281a4.912 4.912 0 00-3.414 1.343l-1.391 1.391a3.874 3.874 0 00-.516 3.653c-.309.289-.63.593-.951.89l-1.258-5.918H7.79v6.52c0 2.052-1.668 3.72-3.72 3.72s-3.72-1.668-3.72-3.72V4.64H0v6.52a6.44 6.44 0 006.431 6.432c3.551 0 6.431-2.88 6.431-6.432v-1.748l1.321 6.208h3.292c0-2.316.368-4.582 1.09-6.732a3.344 3.344 0 011.834 3.011c0 1.835-1.492 3.326-3.326 3.326h-2.13c-.365.452-.77.892-1.18 1.31l1.583 1.583c.535-.205 1.109-.323 1.727-.323h2.13a6.05 6.05 0 006.05-6.05c0-3.333-2.717-6.05-6.05-6.05z" />
          </svg>
        );
      default:
        return <Globe size={size} />;
    }
  };

  return (
    <section id="connect" className="px-4 md:px-8 py-16 w-full select-none">
      <div className="max-w-7xl mx-auto">
        
        {/* Header Title */}
        <div className="mb-12 text-left">
          <span className="font-mono text-[10px] uppercase tracking-widest text-text-sub block mb-2">
            07 / DIRECT DEPLOY CHANNELS
          </span>
          <h2 className="font-display font-bold leading-none tracking-extreme text-4xl sm:text-6xl text-text-main uppercase">
            CONNECT.
          </h2>
          <div className="w-16 h-[1px] bg-text-main mt-4" />
        </div>

        {/* Responsive Grid for YouTube, Instagram, LinkedIn, X, Behance */}
        <div className="grid grid-cols-2 md:grid-cols-5 gap-6">
          {SOCIALS.map((soc, idx) => (
            <motion.a
              key={soc.id}
              href={soc.url}
              target="_blank"
              rel="noopener noreferrer"
              initial={{ opacity: 0, scale: 0.95 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true, margin: "-40px" }}
              transition={{ duration: 0.5, delay: idx * 0.1 }}
              whileHover={{ y: -6, scale: 1.02 }}
              className="bg-bg-card rounded-[24px] p-5 border border-border-main flex flex-col justify-between h-44 hover:shadow-xl transition-all duration-300 text-left group"
            >
              {/* Icon Row */}
              <div className="flex justify-between items-center w-full">
                <div className="w-10 h-10 rounded-full bg-[#0A0A0A] text-white flex items-center justify-center border border-neutral-900 group-hover:bg-neutral-800 transition-colors">
                  {getPlatformIcon(soc.platform)}
                </div>
                
                {/* Arrow up right */}
                <span className="text-text-sub group-hover:text-text-main transition-colors opacity-60 group-hover:opacity-100">
                  <ArrowUpRight size={14} />
                </span>
              </div>

              {/* Identity Footer inside Card */}
              <div>
                <span className="font-sans font-bold text-sm tracking-wide text-text-main block uppercase">
                  {soc.platform}
                </span>
                <span className="font-mono text-[10px] text-text-sub tracking-wider block mt-0.5">
                  {soc.handle}
                </span>
              </div>
            </motion.a>
          ))}
        </div>

      </div>
    </section>
  );
}
