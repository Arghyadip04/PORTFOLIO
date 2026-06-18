import { motion } from "framer-motion";

const HeroBackground = () => {
  return (
    <div className="absolute inset-0 -z-10 overflow-hidden">

      {/* Cyan Blob */}
      <motion.div
        animate={{
          x: [0, 120, 0],
          y: [0, -80, 0],
        }}
        transition={{
          duration: 10,
          repeat: Infinity,
          repeatType: "reverse",
        }}
        style={{
          position: "absolute",
          width: 500,
          height: 500,
          borderRadius: "50%",
          background: "#06b6d4",
          opacity: 0.25,
          filter: "blur(140px)",
          top: -150,
          left: -100,
        }}
      />

      {/* Purple Blob */}
      <motion.div
        animate={{
          x: [0, -120, 0],
          y: [0, 100, 0],
        }}
        transition={{
          duration: 12,
          repeat: Infinity,
          repeatType: "reverse",
        }}
        style={{
          position: "absolute",
          width: 550,
          height: 550,
          borderRadius: "50%",
          background: "#7c3aed",
          opacity: 0.25,
          filter: "blur(160px)",
          bottom: -150,
          right: -100,
        }}
      />

      {/* Blue Blob */}
      <motion.div
        animate={{
          scale: [1, 1.2, 1],
        }}
        transition={{
          duration: 8,
          repeat: Infinity,
        }}
        style={{
          position: "absolute",
          width: 300,
          height: 300,
          borderRadius: "50%",
          background: "#3b82f6",
          opacity: 0.2,
          filter: "blur(120px)",
          top: "35%",
          left: "45%",
        }}
      />

    </div>
  );
};

export default HeroBackground;