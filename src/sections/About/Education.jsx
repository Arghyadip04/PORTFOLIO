import { motion } from "framer-motion";
import education from "../../data/education";

const Education = () => {
  return (
    <section className="mt-36">

      <div className="mb-16 text-center">

        <p className="text-cyan-400 uppercase tracking-[5px] text-sm">
          Education
        </p>

        <h2 className="mt-4 text-4xl font-bold">
          My Academic Journey
        </h2>

      </div>

      <div className="relative mx-auto max-w-4xl">

        {/* Timeline */}

        <div className="absolute left-6 top-0 h-full w-1 rounded-full bg-gradient-to-b from-cyan-400 via-sky-500 to-violet-500"></div>

        {education.map((item, index) => (

          <motion.div
            key={item.id}
            initial={{
              opacity: 0,
              x: -50,
            }}
            whileInView={{
              opacity: 1,
              x: 0,
            }}
            viewport={{
              once: true,
            }}
            transition={{
              delay: index * .2,
            }}
            className="relative mb-16 ml-16"
          >

            {/* Icon */}

            <div className="absolute -left-16 flex h-12 w-12 items-center justify-center rounded-full border-4 border-[#050505] bg-cyan-400 text-xl shadow-[0_0_25px_rgba(34,211,238,.6)]">

              {item.icon}

            </div>

            {/* Card */}

            <div className="rounded-3xl border border-white/10 bg-white/5 p-8 backdrop-blur-xl transition-all duration-300 hover:-translate-y-2 hover:border-cyan-400 hover:shadow-[0_0_35px_rgba(34,211,238,.3)]">

              <span className="rounded-full bg-cyan-400/20 px-4 py-2 text-sm text-cyan-400">

                {item.year}

              </span>

              <h3 className="mt-6 text-2xl font-bold">

                {item.title}

              </h3>

              <p className="mt-3 text-lg text-gray-300">

                {item.institute}

              </p>

              <p className="mt-2 text-gray-400">

                {item.degree}

              </p>

            </div>

          </motion.div>

        ))}

      </div>

    </section>
  );
};

export default Education;