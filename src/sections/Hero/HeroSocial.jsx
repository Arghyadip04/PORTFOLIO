import { FaGithub, FaInstagram, FaLinkedin } from "react-icons/fa";

const HeroSocial = () => {
  return (
    <div className="mt-10 flex gap-6">

      <a
        href="https://github.com/Arghyadip04"
        target="_blank"
        rel="noreferrer"
        className="text-2xl transition duration-300 hover:scale-125 hover:text-cyan-400"
      >
        <FaGithub />
      </a>

      <a
        href="https://www.linkedin.com/in/arghyadiproy0904/"
        target="_blank"
        rel="noreferrer"
        className="text-2xl transition duration-300 hover:scale-125 hover:text-cyan-400"
      >
        <FaLinkedin />
      </a>

      <a
        href="https://www.instagram.com/_arghyadiproy_/"
        target="_blank"
        rel="noreferrer"
        className="text-2xl transition duration-300 hover:scale-125 hover:text-pink-500"
      >
        <FaInstagram />
      </a>

    </div>
  );
};

export default HeroSocial;