import { motion } from "framer-motion";

const AboutContent = () => {
  return (
    <motion.div
      initial={{ opacity: 0, x: 80 }}
      whileInView={{ opacity: 1, x: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.8 }}
      className="max-w-xl"
    >
      <h3 className="text-4xl md:text-5xl font-bold leading-tight">
        About
        <span className="text-cyan-400"> Me</span>
      </h3>

      <p className="mt-6 max-w-xl text-lg leading-8 text-gray-400">
        I'm <span className="font-semibold text-cyan-400">Arghyadip Roy</span>,
        a B.Tech Information Technology student passionate about Full Stack
        Development, Artificial Intelligence and modern web technologies.
      </p>

      <p className="mt-6 text-lg leading-8 text-gray-400">
        I enjoy building beautiful user interfaces, scalable web
        applications and solving real-world problems through technology.
      </p>

      <div className="mt-10 space-y-5">

        <div className="flex items-center gap-4">
          <div className="h-3 w-3 rounded-full bg-cyan-400"></div>
          <span>Full Stack Developer</span>
        </div>

        <div className="flex items-center gap-4">
          <div className="h-3 w-3 rounded-full bg-cyan-400"></div>
          <span>React Developer</span>
        </div>

        <div className="flex items-center gap-4">
          <div className="h-3 w-3 rounded-full bg-cyan-400"></div>
          <span>AI Enthusiast</span>
        </div>

        <div className="flex items-center gap-4">
          <div className="h-3 w-3 rounded-full bg-cyan-400"></div>
          <span>Problem Solver</span>
        </div>

      </div>
    </motion.div>
  );
};

export default AboutContent;