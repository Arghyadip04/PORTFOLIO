import { motion } from "framer-motion";
import { TypeAnimation } from "react-type-animation";
import GlowButton from "../../components/ui/GlowButton";
import HeroSocial from "./HeroSocial";
import HeroStats from "./HeroStats";

const HeroContent = () => {
  return (
    
    <div className="flex-1 max-w-2xl">

      {/* Small Heading */}
      <motion.p
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        className="mb-4 uppercase tracking-[8px] text-cyan-400 text-sm"
      >
        Hello, I'm
      </motion.p>

      {/* Name */}
      <motion.h1
        initial={{ opacity: 0, y: 50 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.2, duration: 0.8 }}
        className="text-5xl font-extrabold leading-tight md:text-6xl lg:text-7xl"
      >
        Arghyadip{" "}
        <span className="text-cyan-400">
          Roy
        </span>
      </motion.h1>

      {/* Typing Animation */}
      <div className="mt-6 h-10 text-2xl font-semibold text-gray-300">
        <TypeAnimation
          sequence={[
            "Full Stack Developer",
            2000,
            "React Developer",
            2000,
            "AI Enthusiast",
            2000,
            "Problem Solver",
            2000,
          ]}
          speed={50}
          repeat={Infinity}
        />
      </div>

      {/* Description */}
      <motion.p
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 0.6 }}
        className="mt-6 max-w-xl text-lg leading-8 text-gray-400"
      >
        Passionate Full Stack Developer focused on
        building fast, modern and interactive web
        applications using React, JavaScript and AI.
        I enjoy creating beautiful user experiences
        with clean, scalable code.
      </motion.p>

      {/* Buttons */}
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.8 }}
        className="mt-10 flex flex-wrap gap-5"
      >
        <GlowButton href="#projects">
  View Projects
</GlowButton>

        <GlowButton
  href="/Resume.pdf"
  target="_blank"
  rel="noopener noreferrer"
  primary={false}
>
  View Resume
</GlowButton>
      </motion.div>

      {/* Social */}
      <HeroSocial />

      {/* Stats */}
      <HeroStats />


    </div>
  );
};

export default HeroContent;