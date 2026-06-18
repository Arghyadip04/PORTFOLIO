import { motion } from "framer-motion";

const GlowButton = ({
  children,
  href,
  download = false,
  primary = true,
  target,
  rel,
  onClick,
}) => {
  const classes = primary
    ? "bg-cyan-400 text-black hover:shadow-[0_0_35px_#22d3ee]"
    : "border border-cyan-400 text-cyan-400 hover:bg-cyan-400 hover:text-black";

  if (href) {
    return (
      <motion.a
  whileHover={{ scale: 1.05 }}
  whileTap={{ scale: 0.95 }}
  href={href}
  download={download}
  target={target}
  rel={rel}
  onClick={onClick}
  className={`rounded-full px-8 py-4 font-semibold transition-all duration-300 ${classes}`}
>
        {children}
      </motion.a>
    );
  }

  return (
    <motion.button
  whileHover={{ scale: 1.05 }}
  whileTap={{ scale: 0.95 }}
  onClick={onClick}
  className={`rounded-full px-8 py-4 font-semibold transition-all duration-300 ${classes}`}
>
  {children}
</motion.button>
  );
};

export default GlowButton;