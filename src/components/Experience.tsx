import { motion } from "motion/react";
import { STATISTICS } from "../data";
import { Award, Zap, TrendingUp, History } from "lucide-react";

export default function Experience() {
  const getStatIcon = (id: string) => {
    switch (id) {
      case "views":
        return <TrendingUp size={16} className="text-[#0A0A0A]" />;
      case "projects":
        return <Award size={16} className="text-[#0A0A0A]" />;
      case "experience":
        return <History size={16} className="text-[#0A0A0A]" />;
      case "motion-hours":
        return <Zap size={16} className="text-[#0A0A0A]" />;
      default:
        return <Award size={16} className="text-[#0A0A0A]" />;
    }
  };

  return (
    <section id="experience" className="px-4 md:px-8 py-16 w-full select-none">
      <div className="max-w-7xl mx-auto">
        
        {/* Large Typography Heading Inspired directly by Fabrica */}
        <div className="border-b border-border-main pb-8 mb-14 flex flex-col md:flex-row justify-between items-baseline gap-4 text-left">
          <div>
            <span className="font-mono text-[10px] uppercase tracking-widest text-text-sub block mb-2">
              06 / METRIC VALIDATIONS
            </span>
            <h2 className="font-display font-bold leading-none tracking-extreme text-5xl sm:text-7xl lg:text-8xl text-text-main uppercase">
              EXPERIENCE.
            </h2>
          </div>
          <div className="max-w-xs text-left md:text-right">
            <p className="font-sans text-xs text-text-sub leading-relaxed">
              Verifiable post-production analytics, organic YouTube attention spikes, and historical timelines of documentary assembly.
            </p>
          </div>
        </div>

        {/* 4 Large Minimalistic Stats Cards */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
          {STATISTICS.map((stat, idx) => (
            <motion.div
              key={stat.id}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-40px" }}
              transition={{ duration: 0.6, delay: idx * 0.12 }}
              whileHover={{ y: -6 }}
              className="bg-bg-card rounded-[32px] p-8 border border-border-main hover:shadow-xl transition-all duration-300 relative flex flex-col justify-between h-56 group text-left"
            >
              <div className="flex justify-between items-center w-full">
                {/* Icon Circle */}
                <div className="w-10 h-10 rounded-full bg-bg-base flex items-center justify-center border border-border-main/50">
                  {getStatIcon(stat.id)}
                </div>
                
                {/* Micro record label */}
                <span className="font-mono text-[8px] uppercase tracking-widest text-text-sub group-hover:text-text-main transition-colors">
                  VERIFIED_0{idx + 1}
                </span>
              </div>

              {/* Giant Metric Number */}
              <div className="my-3">
                {stat.metric && (
                  <span className="font-display font-bold text-4xl md:text-5xl tracking-tight text-text-main block">
                    {stat.metric}
                  </span>
                )}
                <span className="font-sans font-semibold text-xs text-text-main tracking-wide uppercase mt-1 block whitespace-pre-line">
                  {stat.label}
                </span>
              </div>

              {/* Lab description */}
              <p className="font-sans text-[10px] text-text-sub leading-relaxed">
                {stat.description}
              </p>

              {/* Bottom line accent */}
              <div className="absolute bottom-0 left-8 right-8 h-[2px] bg-[#0A0A0A] scale-x-0 group-hover:scale-x-100 transition-transform duration-300 origin-center" />
            </motion.div>
          ))}
        </div>

      </div>
    </section>
  );
}
