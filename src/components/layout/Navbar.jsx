import { useEffect, useState } from "react";
import { motion } from "framer-motion";

const links = [
  { name: "Home", href: "#home" },
  { name: "About", href: "#about" },
  { name: "Skills", href: "#skills" },
  { name: "Projects", href: "#projects" },
  { name: "Contact", href: "#contact" },
];

const Navbar = () => {
  const [scrolled, setScrolled] = useState(false);
const [active, setActive] = useState("Home");

  useEffect(() => {
  const handleScroll = () => {
    setScrolled(window.scrollY > 30);

    let current = "Home";

    links.forEach((link) => {
      const section = document.querySelector(link.href);

      if (section) {
        const sectionTop = section.offsetTop - 150;
        const sectionHeight = section.offsetHeight;

        if (
          window.scrollY >= sectionTop &&
          window.scrollY < sectionTop + sectionHeight
        ) {
          current = link.name;
        }
      }
    });

    setActive(current);
  };

  handleScroll(); // Set active section on page load

  window.addEventListener("scroll", handleScroll);

  return () => window.removeEventListener("scroll", handleScroll);
}, []);

  return (
    <motion.header
      initial={{ y: -80 }}
      animate={{ y: 0 }}
      transition={{ duration: 0.7 }}
      className={`fixed left-0 top-0 z-50 w-full transition-all duration-300 ${
        scrolled
          ? "bg-black/60 backdrop-blur-xl border-b border-white/10 shadow-lg"
          : "bg-transparent"
      }`}
    >
      <nav className="mx-auto flex max-w-7xl items-center justify-between px-8 py-5">

        <a
          href="#home"
          className="text-3xl font-black tracking-wide"
        >
          <span className="text-cyan-400">A</span>R
        </a>

        <ul className="hidden gap-10 md:flex">
  {links.map((link) => (
    <li key={link.name}>
      <a
        href={link.href}
        className={`relative py-2 transition-all duration-300 ${
          active === link.name
            ? "text-cyan-400"
            : "text-gray-300 hover:text-cyan-400"
        }`}
      >
        {link.name}

        {active === link.name && (
          <motion.span
            layoutId="activeNav"
            transition={{
              type: "spring",
              stiffness: 400,
              damping: 30,
            }}
            className="absolute -bottom-1 left-0 h-[2px] w-full rounded-full bg-cyan-400"
          />
        )}
      </a>
    </li>
  ))}
</ul>

        <a
  href="#contact"
  className="group relative overflow-hidden rounded-full border border-cyan-400 px-6 py-1 font-semibold text-cyan-400 transition-all duration-300 hover:scale-105 hover:text-black"
>
  <span className="absolute inset-0 -translate-x-full bg-cyan-400 transition-transform duration-300 group-hover:translate-x-0"></span>

  <span className="relative z-10">
    💬 Let's Talk
  </span>
</a>

      </nav>
    </motion.header>
  );
};

export default Navbar;