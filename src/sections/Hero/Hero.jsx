import { motion } from "framer-motion";
import HeroBackground from "./HeroBackground";
import HeroContent from "./HeroContent";
import HeroImage from "./HeroImage";

const Hero = () => {
  return (
    <section
  id="home"
  className="relative min-h-screen scroll-mt-24 overflow-hidden bg-[#050505]"
>
      {/* Background Animation */}
      <HeroBackground />

      {/* Extra Premium Glow */}
      <div className="absolute inset-0 -z-10 overflow-hidden">
        <div className="absolute left-1/4 top-20 h-80 w-80 rounded-full bg-cyan-500/20 blur-[140px]" />

        <div className="absolute right-20 bottom-20 h-96 w-96 rounded-full bg-violet-500/10 blur-[170px]" />
      </div>

      {/* Main Content */}
      <motion.div
        initial={{ opacity: 0, y: 40 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 1 }}
        className="relative z-10 mx-auto flex min-h-screen max-w-7xl flex-col items-center justify-between px-6 pt-20 lg:flex-row lg:px-12"
      >
        <HeroContent />

        <HeroImage />
      </motion.div>

      {/* Scroll Indicator */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 2 }}
        className="absolute bottom-10 left-1/2 -translate-x-1/2"
      >
        <div className="flex flex-col items-center gap-3">

          <span className="text-xs uppercase tracking-[6px] text-gray-500">
            Scroll Down
          </span>

          <div className="flex h-14 w-8 justify-center rounded-full border border-cyan-400/60">

            <motion.div
              animate={{
                y: [0, 20, 0],
              }}
              transition={{
                repeat: Infinity,
                duration: 1.6,
              }}
              className="mt-2 h-3 w-3 rounded-full bg-cyan-400 shadow-[0_0_15px_#22d3ee]"
            />

          </div>

        </div>
      </motion.div>
    </section>
  );
};

export default Hero;