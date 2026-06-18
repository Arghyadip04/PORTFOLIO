import {
  FaReact,
  FaPython,
  FaJava,
  FaNodeJs,
  FaGitAlt,
} from "react-icons/fa";

import {
  SiJavascript,
  SiMongodb,
  SiTailwindcss,
} from "react-icons/si";

const tech = [
  { icon: FaReact, name: "React", color: "text-cyan-400" },
  { icon: SiJavascript, name: "JavaScript", color: "text-yellow-400" },
  { icon: FaNodeJs, name: "Node.js", color: "text-green-500" },
  { icon: SiMongodb, name: "MongoDB", color: "text-green-400" },
  { icon: FaPython, name: "Python", color: "text-blue-400" },
  { icon: FaJava, name: "Java", color: "text-orange-500" },
  { icon: SiTailwindcss, name: "Tailwind", color: "text-sky-400" },
  { icon: FaGitAlt, name: "Git", color: "text-red-500" },
];

const TechMarquee = () => {
  return (
    <div className="overflow-hidden border-y border-white/10 bg-black/20 py-6">
      <div className="marquee flex w-max gap-16">
        {[...tech, ...tech].map((item, index) => {
          const Icon = item.icon;

          return (
            <div
              key={index}
              className="flex items-center gap-3"
            >
              <Icon className={`text-3xl ${item.color}`} />

              <span className="text-lg text-white">
                {item.name}
              </span>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default TechMarquee;