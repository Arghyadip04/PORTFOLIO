import { useEffect, useState } from "react";

const MouseSpotlight = () => {
  const [position, setPosition] = useState({ x: 0, y: 0 });

  useEffect(() => {
    const handleMove = (e) => {
      setPosition({
        x: e.clientX,
        y: e.clientY,
      });
    };

    window.addEventListener("mousemove", handleMove);

    return () => {
      window.removeEventListener("mousemove", handleMove);
    };
  }, []);

  return (
    <div
      className="pointer-events-none fixed inset-0 z-0"
      style={{
        background: `radial-gradient(
          350px at ${position.x}px ${position.y}px,
          rgba(34,211,238,0.12),
          transparent 70%
        )`,
      }}
    />
  );
};

export default MouseSpotlight;