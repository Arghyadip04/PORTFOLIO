import { motion } from "framer-motion";

const GlassCard = ({ children, className }) => {
  return (
    <motion.div

      whileHover={{
        y: -12,
        rotateX: 6,
        rotateY: 6,
        scale: 1.04,
      }}

      transition={{
        duration: .35,
      }}

      className={`
      rounded-3xl
      border
      border-white/10
      bg-white/5
      backdrop-blur-xl
      p-8
      hover:border-cyan-400/40
      hover:shadow-[0_0_40px_rgba(34,211,238,.25)]
      transition-all
      duration-300
      ${className}
      `}
    >
      {children}
    </motion.div>
  );
};

export default GlassCard;