import { motion } from "framer-motion";
import { useEffect, useState } from "react";

const CustomCursor = () => {
  const [mouse, setMouse] = useState({
    x: -100,
    y: -100,
  });

  const [hover, setHover] = useState(false);

  useEffect(() => {
    const move = (e) => {
      setMouse({
        x: e.clientX,
        y: e.clientY,
      });
    };

    const addHover = () => setHover(true);
    const removeHover = () => setHover(false);

    window.addEventListener("mousemove", move);

    const elements = document.querySelectorAll("a,button");

    elements.forEach((el) => {
      el.addEventListener("mouseenter", addHover);
      el.addEventListener("mouseleave", removeHover);
    });

    return () => {
      window.removeEventListener("mousemove", move);

      elements.forEach((el) => {
        el.removeEventListener("mouseenter", addHover);
        el.removeEventListener("mouseleave", removeHover);
      });
    };
  }, []);

  return (
    <>
      {/* Outer Ring */}

      <motion.div
        animate={{
          x: mouse.x,
          y: mouse.y,
          scale: hover ? 2 : 1,
        }}
        transition={{
          type: "spring",
          stiffness: 220,
          damping: 18,
        }}
        className="pointer-events-none fixed left-0 top-0 z-[9999] h-10 w-10 -translate-x-1/2 -translate-y-1/2 rounded-full border border-cyan-400"
      />

      {/* Inner Dot */}

      <motion.div
        animate={{
          x: mouse.x,
          y: mouse.y,
        }}
        transition={{
          type: "spring",
          stiffness: 700,
          damping: 35,
        }}
        className="pointer-events-none fixed left-0 top-0 z-[9999] h-2.5 w-2.5 -translate-x-1/2 -translate-y-1/2 rounded-full bg-cyan-400"
      />
    </>
  );
};

export default CustomCursor;