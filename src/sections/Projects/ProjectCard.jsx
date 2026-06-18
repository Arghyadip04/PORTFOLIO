import { motion } from "framer-motion";
import { FaGithub, FaExternalLinkAlt } from "react-icons/fa";
import GlassCard from "../../components/ui/GlassCard";

const ProjectCard = ({ project }) => {
  return (
    <motion.div
      whileHover={{
        y: -10,
      }}
      transition={{
        duration: 0.3,
      }}
    >
      <GlassCard className="group overflow-hidden rounded-3xl border border-white/10 p-0 transition-all duration-300 hover:border-cyan-400 hover:shadow-[0_0_40px_rgba(34,211,238,.25)]">

        {/* Image */}

        <div className="overflow-hidden">

          <motion.img
            whileHover={{
              scale: 1.08,
            }}
            transition={{
              duration: .5,
            }}
            src={project.image}
            alt={project.title}
            className="h-56 w-full object-cover"
          />

        </div>

        {/* Content */}

        <div className="p-6">

          <h3 className="text-2xl font-bold text-white">

            {project.title}

          </h3>

          <p className="mt-4 leading-7 text-gray-400">

            {project.description}

          </p>

          {/* Tech */}

          <div className="mt-5 flex flex-wrap gap-2">

            {project.tech.map((tech) => (

              <span
                key={tech}
                className="rounded-full border border-cyan-400/30 bg-cyan-400/10 px-3 py-1 text-xs font-medium text-cyan-300"
              >
                {tech}
              </span>

            ))}

          </div>

          {/* Buttons */}

          <div className="mt-8 flex gap-3">

            <a
              href={project.github}
              target="_blank"
              rel="noreferrer"
              className="flex flex-1 items-center justify-center gap-2 rounded-xl border border-cyan-400 py-3 transition-all duration-300 hover:bg-cyan-400 hover:text-black"
            >
              <FaGithub />

              GitHub

            </a>

            <a
              href={project.live}
              target="_blank"
              rel="noreferrer"
              className="flex flex-1 items-center justify-center gap-2 rounded-xl bg-cyan-400 py-3 font-medium text-black transition-all duration-300 hover:scale-105"
            >
              <FaExternalLinkAlt />

              Live Demo

            </a>

          </div>

        </div>

      </GlassCard>
    </motion.div>
  );
};

export default ProjectCard;