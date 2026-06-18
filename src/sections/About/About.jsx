import Container from "../../components/layout/Container";
import SectionHeading from "../../components/ui/SectionHeading";
import AboutImage from "./AboutImage";
import AboutContent from "./AboutContent";
import Education from "./Education";

const About = () => {
  return (
    <section
      id="about"
      className="scroll-mt-24"
    >
      <Container>

        <SectionHeading
          subtitle="Know Me"
          title="About Me"
        />

        {/* About Row */}

        <div className="grid items-center gap-28 lg:grid-cols-2">

          <AboutImage />

          <AboutContent />

        </div>

        {/* Education */}

        <div className="mt-40">

          <Education />

        </div>

      </Container>
    </section>
  );
};

export default About;