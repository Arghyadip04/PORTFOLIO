import { motion } from "framer-motion";

const SectionHeading = ({ title, subtitle }) => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 40 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.8 }}
      className="mb-20 text-center"
    >
      <span className="inline-block rounded-full border border-cyan-400/30 bg-cyan-400/10 px-5 py-2 text-sm font-medium uppercase tracking-[4px] text-cyan-400">
        {subtitle}
      </span>

      <h2 className="mt-6 text-4xl font-bold md:text-6xl">
        {title}
      </h2>

      <div className="mx-auto mt-6 h-1 w-24 rounded-full bg-cyan-400"></div>

      <div className="mx-auto mt-2 h-1 w-12 rounded-full bg-cyan-400/50"></div>
    </motion.div>
  );
};

export default SectionHeading;