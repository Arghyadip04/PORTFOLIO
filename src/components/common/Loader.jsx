import { motion, AnimatePresence } from "framer-motion";
import { useEffect, useState } from "react";

const names = [
  "A",
  "AR",
  "ARG",
  "ARGH",
  "ARGHY",
  "ARGHYA",
  "ARGHYAD",
  "ARGHYADI",
  "ARGHYADIP",
  "ARGHYADIP ROY",
];

const Loader = () => {
  const [index, setIndex] = useState(0);

  useEffect(() => {
    if (index < names.length - 1) {
      const timer = setTimeout(() => {
        setIndex(index + 1);
      }, 180);

      return () => clearTimeout(timer);
    }
  }, [index]);

  return (
    <div className="fixed inset-0 z-[99999] flex flex-col items-center justify-center overflow-hidden bg-[#050505]">

      {/* Background Glow */}

      <div className="absolute h-[500px] w-[500px] rounded-full bg-cyan-400/10 blur-[150px]" />

      <AnimatePresence mode="wait">

        <motion.h1
          key={names[index]}
          initial={{
            opacity: 0,
            y: 40,
            scale: .9,
          }}
          animate={{
            opacity: 1,
            y: 0,
            scale: 1,
          }}
          exit={{
            opacity: 0,
            y: -30,
          }}
          transition={{
            duration: .35,
          }}
          className="bg-gradient-to-r from-cyan-400 via-sky-400 to-violet-500 bg-clip-text text-center text-6xl font-black tracking-[8px] text-transparent md:text-8xl"
        >
          {names[index]}
        </motion.h1>

      </AnimatePresence>

      <motion.div
        initial={{
          width: 0,
        }}
        animate={{
          width: 220,
        }}
        transition={{
          duration: 2,
        }}
        className="mt-8 h-[3px] rounded-full bg-gradient-to-r from-cyan-400 via-sky-500 to-violet-500 shadow-[0_0_25px_#22d3ee]"
      />

      <motion.p
        initial={{
          opacity: 0,
        }}
        animate={{
          opacity: 1,
        }}
        transition={{
          delay: 1.2,
        }}
        className="mt-8 tracking-[6px] text-cyan-400"
      >
        FULL STACK DEVELOPER
      </motion.p>

      <motion.p
        animate={{
          opacity: [0.3, 1, 0.3],
        }}
        transition={{
          repeat: Infinity,
          duration: 1.5,
        }}
        className="mt-5 text-gray-500"
      >
        Loading Portfolio...
      </motion.p>

    </div>
  );
};

export default Loader;