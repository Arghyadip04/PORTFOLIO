import { motion } from "framer-motion";
import Container from "../../components/layout/Container";
import SectionHeading from "../../components/ui/SectionHeading";
import GlassCard from "../../components/ui/GlassCard";
import skills from "../../data/skills";

const Skills = () => {
  return (
    <section
  id="skills"
  className="scroll-mt-24 py-20 bg-[#070707]"
>
      <Container>
        <SectionHeading
          subtitle="What I Know"
          title="Technical Skills"
        />

        <div className="grid grid-cols-2 gap-5 md:grid-cols-3 xl:grid-cols-4">

          {skills.map((skill, index) => {
            const Icon = skill.icon;

            return (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.05 }}
              >
                <GlassCard className="h-full rounded-3xl p-6 transition-all duration-300 hover:-translate-y-2 hover:border-cyan-400 hover:shadow-[0_0_30px_rgba(34,211,238,.25)]">

                  <Icon
                    className={`text-4xl ${skill.color}`}
                  />

                  <h3 className="mt-4 text-xl font-bold">
                    {skill.name}
                  </h3>

                  <p className="mt-1 text-sm text-gray-400">
                    {skill.category}
                  </p>

                </GlassCard>
              </motion.div>
            );
          })}

        </div>
      </Container>
    </section>
  );
};

export default Skills;