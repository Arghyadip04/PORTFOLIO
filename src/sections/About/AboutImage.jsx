import { motion } from "framer-motion";

const AboutImage = () => {
  return (
    <motion.div
      initial={{ opacity: 0, x: -80 }}
      whileInView={{ opacity: 1, x: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.8 }}
      className="relative flex justify-center"
    >
      {/* Glow */}

      <div className="absolute h-[420px] w-[420px] rounded-full bg-cyan-400/20 blur-[100px]" />

      {/* Border */}

      <motion.div
        animate={{
          rotate: 360,
        }}
        transition={{
          duration: 25,
          repeat: Infinity,
          ease: "linear",
        }}
        className="absolute h-[380px] w-[380px] rounded-full border border-cyan-400/30"
      />

      {/* Image */}

      <motion.img
        whileHover={{
          scale: 1.05,
        }}
        transition={{
          duration: 0.3,
        }}
        src="/Profile-Image.png"
        alt="Arghyadip"
        className="relative z-10 h-[450px] w-[400px] rounded-3xl border border-white/10 object-cover object-top shadow-[0_0_40px_rgba(34,211,238,.3)]"
      />
    </motion.div>
  );
};

export default AboutImage;