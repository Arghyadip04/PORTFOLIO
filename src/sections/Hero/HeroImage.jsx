import { motion } from "framer-motion";
import {
  FaReact,
  FaJava,
  FaPython,
  FaNodeJs,
} from "react-icons/fa";

import {
  SiMongodb,
  SiJavascript,
} from "react-icons/si";

const HeroImage = () => {
  return (
    <div className="relative flex h-[500px] w-[500px] items-center justify-center overflow-visible">

  {/* Glow */}
  <div className="absolute h-[380px] w-[380px] rounded-full bg-cyan-400/25 blur-[120px]"></div>
  <motion.div
  animate={{
    scale: [1, 1.08, 1],
    opacity: [0.5, 0.9, 0.5],
  }}
  transition={{
    duration: 3,
    repeat: Infinity,
  }}
  className="absolute h-[340px] w-[340px] rounded-full border border-cyan-400/40"
/>

  {/* Rotating Ring */}
  <div className="absolute h-[320px] w-[320px] animate-spin rounded-full border-2 border-cyan-400/40 [animation-duration:15s]"></div>

  {/* Second Ring */}
  <div className="absolute h-[300px] w-[300px] rounded-full border border-cyan-300 shadow-[0_0_25px_#22d3ee]"></div>

  {/* Profile Image */}
  <img
    src="/Profile-Image.png"
    alt="Arghyadip Roy"
    className="relative z-20 h-[230px] w-[230px] rounded-full object-cover object-top shadow-[0_0_40px_rgba(34,211,238,.45)] md:h-[280px] md:w-[280px]"
  />

      {/* Floating Icons */}

      <motion.div
        animate={{
          y: [0, -10, 0],
        }}
        transition={{
          repeat: Infinity,
          duration: 3,
        }}
        className="absolute left-2 top-20 z-30 rounded-xl bg-white/10 p-4 backdrop-blur-xl"
      >
        <FaReact
          size={32}
          className="text-cyan-400"
        />
      </motion.div>

      <motion.div
        animate={{
          y: [0, 10, 0],
        }}
        transition={{
          repeat: Infinity,
          duration: 4,
        }}
        className="absolute right-2 top-16 z-30 rounded-xl bg-white/10 p-4 backdrop-blur-xl"
      >
        <FaJava
          size={30}
          className="text-orange-400"
        />
      </motion.div>

      <motion.div
        animate={{
          y: [0, -12, 0],
        }}
        transition={{
          repeat: Infinity,
          duration: 5,
        }}
        className="absolute bottom-12 left-4 z-30 rounded-xl bg-white/10 p-4 backdrop-blur-xl"
      >
        <FaPython
          size={30}
          className="text-yellow-400"
        />
      </motion.div>

      <motion.div
        animate={{
          y: [0, 10, 0],
        }}
        transition={{
          repeat: Infinity,
          duration: 4,
        }}
        className="absolute bottom-12 right-4 z-30 rounded-xl bg-white/10 p-4 backdrop-blur-xl"
      >
        <FaNodeJs
          size={30}
          className="text-green-400"
        />
      </motion.div>

      <motion.div
        animate={{
          x: [0, 10, 0],
        }}
        transition={{
          repeat: Infinity,
          duration: 5,
        }}
        className="absolute top-1/2 left-0 z-30 rounded-xl bg-white/10 p-4 backdrop-blur-xl"
      >
        <SiJavascript
          size={28}
          className="text-yellow-300"
        />
      </motion.div>

      <motion.div
        animate={{
          x: [0, -10, 0],
        }}
        transition={{
          repeat: Infinity,
          duration: 5,
        }}
        className="absolute top-1/2 -right-10 rounded-xl bg-white/5 p-4 backdrop-blur-xl"
      >
        <SiMongodb
          size={28}
          className="text-green-500"
        />
      </motion.div>

    </div>
  );
};

export default HeroImage;