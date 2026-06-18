import { motion } from "framer-motion";
import {
  FaGithub,
  FaLinkedin,
  FaInstagram,
  FaEnvelope,
} from "react-icons/fa";

import Container from "../../components/layout/Container";
import SectionHeading from "../../components/ui/SectionHeading";

const Contact = () => {
  return (
    <section
      id="contact"
      className="scroll-mt-24 py-24 bg-[#050505]"
    >
      <Container>
        <SectionHeading
          subtitle="Let's Connect"
          title="Contact Me"
        />

        <div className="mt-16 grid gap-16 lg:grid-cols-2">
          {/* Left Side */}

          <motion.div
            initial={{ opacity: 0, x: -60 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
          >
            <h2 className="text-4xl font-bold">
              Let's Build Something Amazing 🚀
            </h2>

            <p className="mt-6 leading-8 text-gray-400">
              Whether you have a project, internship opportunity,
              hackathon idea, or just want to connect,
              feel free to reach out.
            </p>

            <div className="mt-10 space-y-6">

              <a
                href="mailto:arghyadiproy0904@gmail.com"
                className="flex items-center gap-4 transition hover:text-cyan-400"
              >
                <FaEnvelope className="text-2xl text-cyan-400" />
                arghyadiproy0904@gmail.com
              </a>

              <a
                href="https://github.com/Arghyadip04"
                target="_blank"
                rel="noreferrer"
                className="flex items-center gap-4 transition hover:text-cyan-400"
              >
                <FaGithub className="text-2xl text-cyan-400" />
                GitHub
              </a>

              <a
                href="https://linkedin.com/in/arghyadip-roy"
                target="_blank"
                rel="noreferrer"
                className="flex items-center gap-4 transition hover:text-cyan-400"
              >
                <FaLinkedin className="text-2xl text-cyan-400" />
                LinkedIn
              </a>

              <a
                href="https://www.instagram.com/_arghyadiproy_/"
                target="_blank"
                rel="noreferrer"
                className="flex items-center gap-4 transition hover:text-cyan-400"
              >
                <FaInstagram className="text-2xl text-cyan-400" />
                Instagram
              </a>

            </div>
          </motion.div>

          {/* Right Side */}

          <motion.form
            action="https://formspree.io/f/myzojgrl"
            method="POST"
            initial={{ opacity: 0, x: 60 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="rounded-3xl border border-white/10 bg-white/5 p-8 backdrop-blur-xl"
          >
            <input
              type="text"
              name="name"
              required
              placeholder="Your Name"
              className="mb-5 w-full rounded-xl border border-white/10 bg-[#111] p-4 outline-none transition-all duration-300 focus:border-cyan-400 focus:shadow-[0_0_20px_rgba(34,211,238,.25)]"
            />

            <input
              type="email"
              name="email"
              required
              placeholder="Email Address"
              className="mb-5 w-full rounded-xl border border-white/10 bg-[#111] p-4 outline-none transition-all duration-300 focus:border-cyan-400 focus:shadow-[0_0_20px_rgba(34,211,238,.25)]"
            />

            <textarea
              rows="6"
              name="message"
              required
              placeholder="Your Message"
              className="mb-6 w-full rounded-xl border border-white/10 bg-[#111] p-4 outline-none transition-all duration-300 focus:border-cyan-400 focus:shadow-[0_0_20px_rgba(34,211,238,.25)]"
            />

            <button
              type="submit"
              className="w-full rounded-xl bg-cyan-400 py-4 text-lg font-bold text-black transition-all duration-300 hover:scale-[1.02] hover:shadow-[0_0_30px_rgba(34,211,238,.45)]"
            >
              🚀 Send Message
            </button>
          </motion.form>
        </div>
      </Container>
    </section>
  );
};

export default Contact;