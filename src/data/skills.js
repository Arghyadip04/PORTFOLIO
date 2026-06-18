import {
  FaReact,
  FaJava,
  FaPython,
  FaNodeJs,
  FaGitAlt,
} from "react-icons/fa";

import {
  SiJavascript,
  SiMongodb,
  SiTailwindcss,
  SiFirebase,
  SiExpress,
  SiMysql,
} from "react-icons/si";

const skills = [
  {
    icon: FaReact,
    name: "React",
    category: "Frontend",
    color: "text-cyan-400",
  },
  {
    icon: SiJavascript,
    name: "JavaScript",
    category: "Programming",
    color: "text-yellow-300",
  },
  {
    icon: FaJava,
    name: "Java",
    category: "Programming",
    color: "text-orange-500",
  },
  {
    icon: FaPython,
    name: "Python",
    category: "Programming",
    color: "text-blue-400",
  },
  {
    icon: FaNodeJs,
    name: "Node.js",
    category: "Backend",
    color: "text-green-500",
  },
  {
    icon: SiExpress,
    name: "Express",
    category: "Backend",
    color: "text-gray-200",
  },
  {
    icon: SiMongodb,
    name: "MongoDB",
    category: "Database",
    color: "text-green-400",
  },
  {
    icon: SiMysql,
    name: "MySQL",
    category: "Database",
    color: "text-blue-500",
  },
  {
    icon: SiFirebase,
    name: "Firebase",
    category: "Cloud",
    color: "text-orange-400",
  },
  {
    icon: SiTailwindcss,
    name: "Tailwind CSS",
    category: "Styling",
    color: "text-sky-400",
  },
  {
    icon: FaGitAlt,
    name: "Git",
    category: "Version Control",
    color: "text-red-500",
  },
];

export default skills;