import CountUp from "react-countup";
import { useInView } from "react-intersection-observer";

const stats = [
  {
    number: 15,
    suffix: "+",
    title: "Projects",
  },
  {
    number: 5,
    suffix: "+",
    title: "Technologies",
  },
  {
    number: 2,
    suffix: "+",
    title: "Hackathons",
  },
  {
    number: 100,
    suffix: "%",
    title: "Passion",
  },
];

const StatsCounter = () => {
  const { ref, inView } = useInView({
    triggerOnce: true,
  });

  return (
    <div
      ref={ref}
      className="mt-20 grid grid-cols-2 gap-6 lg:grid-cols-4"
    >
      {stats.map((item) => (
        <div
          key={item.title}
          className="rounded-2xl border border-white/10 bg-white/5 p-6 text-center backdrop-blur-xl"
        >
          <h2 className="text-4xl font-bold text-cyan-400">
            {inView && (
              <CountUp
                end={item.number}
                duration={2}
              />
            )}
            {item.suffix}
          </h2>

          <p className="mt-2 text-gray-400">
            {item.title}
          </p>
        </div>
      ))}
    </div>
  );
};

export default StatsCounter;