import Container from "../../components/layout/Container";
import SectionHeading from "../../components/ui/SectionHeading";
import projects from "../../data/projects";
import ProjectCard from "./ProjectCard";

const Projects = () => {
  return (
    <section
      id="projects"
      className="scroll-mt-24"
    >
      <Container>

        <SectionHeading
          subtitle="My Work"
          title="Featured Projects"
        />

        <div className="grid gap-8 lg:grid-cols-3">

          {projects.map((project) => (

            <ProjectCard
              key={project.id}
              project={project}
            />

          ))}

        </div>

      </Container>
    </section>
  );
};

export default Projects;