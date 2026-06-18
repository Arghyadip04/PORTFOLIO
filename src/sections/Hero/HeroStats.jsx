import { motion } from "framer-motion";

const stats = [
  {
    number: "10+",
    title: "Projects",
  },
  {
    number: "3+",
    title: "Hackathons",
  },
  {
    number: "15+",
    title: "Technologies",
  },
];

const HeroStats = () => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 70 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ delay: 1.3 }}
      className="mt-14 flex flex-wrap gap-6"
    >
      {stats.map((item) => (
        <div
          key={item.title}
          className="rounded-2xl border border-white/10 bg-white/5 px-7 py-5 backdrop-blur-xl"
        >
          <h2 className="text-3xl font-black text-cyan-400">
            {item.number}
          </h2>

          <p className="mt-1 text-sm text-gray-400">
            {item.title}
          </p>
        </div>
      ))}
    </motion.div>
  );
};

export default HeroStats;