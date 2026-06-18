import { motion } from "framer-motion";
import {
  FaGithub,
  FaLinkedin,
  FaInstagram,
  FaEnvelope,
  FaArrowUp,
} from "react-icons/fa";

const Footer = () => {
  const scrollTop = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  };

  return (
    <footer className="relative mt-24 border-t border-cyan-400/10 bg-[#050505]">

      {/* Glow */}
      <div className="absolute inset-x-0 top-0 h-px bg-gradient-to-r from-transparent via-cyan-400 to-transparent" />

      <div className="mx-auto max-w-7xl px-6 py-14">

        <div className="grid gap-10 md:grid-cols-2">

          {/* Left */}

          <div>

            <motion.h2
              whileHover={{ scale: 1.03 }}
              className="text-4xl font-black"
            >
              <span className="text-cyan-400">Arghyadip</span> Roy
            </motion.h2>

            <p className="mt-4 max-w-md leading-7 text-gray-400">
              Passionate Full Stack Developer building
              modern, responsive and interactive web
              applications using React, JavaScript,
              Tailwind CSS and AI.
            </p>

          </div>

          {/* Right */}

          <div className="flex flex-col items-start md:items-end">

            <p className="mb-5 text-lg font-semibold text-white">
              Connect With Me
            </p>

            <div className="flex gap-4">

              <a
                href="https://github.com/Arghyadip04"
                target="_blank"
                rel="noreferrer"
                className="rounded-full border border-cyan-400/20 bg-white/5 p-4 transition-all duration-300 hover:-translate-y-1 hover:border-cyan-400 hover:text-cyan-400 hover:shadow-[0_0_20px_rgba(34,211,238,.35)]"
              >
                <FaGithub size={22} />
              </a>

              <a
                href="https://linkedin.com/in/arghyadip-roy"
                target="_blank"
                rel="noreferrer"
                className="rounded-full border border-cyan-400/20 bg-white/5 p-4 transition-all duration-300 hover:-translate-y-1 hover:border-cyan-400 hover:text-cyan-400 hover:shadow-[0_0_20px_rgba(34,211,238,.35)]"
              >
                <FaLinkedin size={22} />
              </a>

              <a
                href="https://www.instagram.com/_arghyadiproy_/"
                target="_blank"
                rel="noreferrer"
                className="rounded-full border border-cyan-400/20 bg-white/5 p-4 transition-all duration-300 hover:-translate-y-1 hover:border-pink-500 hover:text-pink-500 hover:shadow-[0_0_20px_rgba(236,72,153,.35)]"
              >
                <FaInstagram size={22} />
              </a>

              <a
                href="mailto:arghyadiproy0904@gmail.com"
                className="rounded-full border border-cyan-400/20 bg-white/5 p-4 transition-all duration-300 hover:-translate-y-1 hover:border-cyan-400 hover:text-cyan-400 hover:shadow-[0_0_20px_rgba(34,211,238,.35)]"
              >
                <FaEnvelope size={22} />
              </a>

            </div>

          </div>

        </div>

        <div className="my-10 h-px bg-white/10" />

<div className="flex flex-col items-center justify-between gap-4 md:flex-row">

  <p className="text-gray-500">
    © 2026 Arghyadip Roy. All Rights Reserved.
  </p>

  <p className="text-gray-500">
    Built with ❤️ using React + Tailwind CSS
  </p>

        </div>

      </div>

    </footer>
  );
};

export default Footer;