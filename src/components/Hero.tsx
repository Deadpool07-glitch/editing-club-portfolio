import { motion } from "motion/react";
import { ArrowDown, Mail, PhoneCall } from "lucide-react";
const portraitImg = "https://i.ibb.co/h1HLHYrx/Screenshot-2026-06-11-at-12-30-29-AM.png";

interface HeroProps {
  onOpenContact: () => void;
}

export default function Hero({ onOpenContact }: HeroProps) {
  // Let's create helper smooth scrolls
  const scrollToProjects = () => {
    const element = document.getElementById("projects");
    if (element) {
      const offset = 80;
      const elementPosition = element.getBoundingClientRect().top + window.scrollY;
      window.scrollTo({
        top: elementPosition - offset,
        behavior: "smooth",
      });
    }
  };

  return (
    <header className="px-4 md:px-8 pt-24 pb-8 w-full">
      {/* Massive Rounded Main Container */}
      <motion.div
        id="hero-container"
        initial={{ opacity: 0, y: 30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, ease: "easeOut" }}
        className="relative w-full h-[85vh] min-h-[580px] md:h-[88vh] rounded-[40px] bg-[#0A0A0A] dark-selection-scope text-white overflow-hidden animated-grain border border-neutral-900/40 shadow-2xl p-8 md:p-14 flex flex-col justify-between"
      >
        {/* TOP LEVEL CONTENT ROW: LEFT SIDE TEXT, RIGHT SIDE PORTRAIT */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start h-full pb-10">
          {/* LEFT COLUMN: BRAND INSCRIPTION (huge typography) */}
          <div className="lg:col-span-6 flex flex-col justify-start h-full pt-4">
            <div>
              {/* Massive Title with premium letter-spacing */}
              <h1 className="font-display font-extrabold leading-[0.8] text-[13vw] sm:text-[11vw] lg:text-[8.5vw] xl:text-[9vw] text-[#FFFFFF] flex flex-col uppercase select-none tracking-normal">
                <motion.span
                  initial={{ opacity: 0, x: -30 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: 0.2, duration: 0.6 }}
                >
                  THE
                </motion.span>
                <motion.span
                  initial={{ opacity: 0, x: -30 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: 0.3, duration: 0.6 }}
                >
                  EDITING
                </motion.span>
                <motion.span
                  initial={{ opacity: 0, x: -30 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: 0.4, duration: 0.6 }}
                >
                  CLUB
                </motion.span>
              </h1>

              {/* Small Brand Statement / Tagline */}
              <p className="font-sans text-xs md:text-sm text-neutral-400/90 tracking-widest uppercase mt-5 select-none font-medium">
                Crafting documentaries people remember.
              </p>

              {/* Sub-roles immediately underneath title */}
              <div className="mt-8 flex flex-col gap-1.5 font-mono text-xs uppercase tracking-widest text-[#999999]">
                <div className="flex items-center gap-2">
                  <span className="w-1.5 h-1.5 rounded-full bg-neutral-600" />
                  <span>Documentary Editor</span>
                </div>
                <div className="flex items-center gap-2">
                  <span className="w-1.5 h-1.5 rounded-full bg-neutral-600" />
                  <span>Motion Designer</span>
                </div>
                <div className="flex items-center gap-2">
                  <span className="w-1.5 h-1.5 rounded-full bg-neutral-600" />
                  <span>Visual Storyteller</span>
                </div>
              </div>

              {/* Merged Intro Text with generous breathing room */}
              <div className="mt-10 md:mt-12 lg:mt-[135px] select-none">
                <p className="font-sans text-[16px] sm:text-[18px] lg:text-[20px] leading-[1.6] text-neutral-400 font-light max-w-[540px] tracking-wide">
                  From geopolitics to business documentaries, crafting stories designed for retention, impact and cinematic immersion.
                </p>
              </div>
            </div>
          </div>

          {/* RIGHT COLUMN: LARGE PROFESSIONAL PORTRAIT & DETAILS */}
          <div className="lg:col-span-6 flex flex-col items-center lg:items-end justify-center h-full w-full relative">
            <div className="w-full max-w-[280px] sm:max-w-[340px] md:max-w-[420px] lg:max-w-md flex flex-col items-start gap-4">
              <motion.div
                initial={{ scale: 1.05, opacity: 0 }}
                animate={{ scale: 1, opacity: 1 }}
                transition={{ delay: 0.5, duration: 0.9, ease: "easeOut" }}
                className="relative w-full h-[50vh] sm:h-[55vh] lg:h-[60vh] rounded-[32px] overflow-hidden ..."
              >
                <img
                  src={portraitImg}
                  alt="THE EDITING CLUB Film Director & Editor Portrait"
                  referrerPolicy="no-referrer"
                  className="w-full h-[115%] object-cover object-top translate-y-[6%] opacity-100 transition-all duration-1000 ease-out"
                />
              </motion.div>

              {/* PERSONAL BRANDING DIRECTLY BELOW PORTRAIT */}
              <div className="w-full text-left flex flex-col select-none">
                <h3 className="font-sans font-semibold text-[#FFFFFF] text-[32px] sm:text-[34px] lg:text-[36px] tracking-wider uppercase leading-none">
                  CHANDRASHEKHAR
                </h3>
                
                <p className="font-sans text-[18px] sm:text-[19px] lg:text-[20px] text-neutral-400 font-normal mt-[12px] leading-tight">
                  Video Editor<br />& Motion Graphics Designer
                </p>
                
                <a
                  href="mailto:shekharofficial63@gmail.com"
                  className="font-mono text-[14px] sm:text-[15px] text-[#888] hover:text-[#FFF] transition-colors mt-[10px] uppercase tracking-wide cursor-pointer"
                >
                  shekharofficial63@gmail.com
                </a>
              </div>
            </div>
          </div>
        </div>

        {/* BOTTOM SECTION: ELEGANT INTEGRAL BORDER WITH COGNITIVE MINIMAL DECOR */}
        <div className="border-t border-neutral-900/60 pt-4 mt-2">
          {/* Entirely clean or empty footer floor as instructed */}
        </div>
      </motion.div>
    </header>
  );
}
