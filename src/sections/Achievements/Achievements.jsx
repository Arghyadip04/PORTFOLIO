import { motion } from "framer-motion";
import Container from "../../components/layout/Container";
import SectionHeading from "../../components/ui/SectionHeading";
import achievements from "../../data/achievements";

const Achievements = () => {
  return (
    <section
      id="achievements"
      className="py-36 bg-[#050505]"
    >
      <Container>

        <SectionHeading
          subtitle="Highlights"
          title="Experience & Achievements"
        />

        <div className="space-y-8">

          {achievements.map((item, index) => (

            <motion.div
              key={index}
              initial={{ opacity: 0, y: 60 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.2 }}
              className="rounded-3xl border border-white/10 bg-white/5 p-8 backdrop-blur-xl hover:border-cyan-400 hover:shadow-[0_0_35px_rgba(34,211,238,.25)] transition-all"
            >

              <div className="flex flex-col md:flex-row md:items-center md:justify-between">

                <div>

                  <h3 className="text-2xl font-bold">
                    {item.title}
                  </h3>

                  <p className="mt-2 text-cyan-400">
                    {item.company}
                  </p>

                </div>

                <span className="mt-4 md:mt-0 rounded-full bg-cyan-400/20 px-4 py-2 text-cyan-400">
                  {item.year}
                </span>

              </div>

              <p className="mt-6 text-gray-400 leading-8">
                {item.description}
              </p>

            </motion.div>

          ))}

        </div>

      </Container>
    </section>
  );
};

export default Achievements;