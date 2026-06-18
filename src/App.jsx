import { useEffect, useState } from "react";

import Navbar from "./components/layout/Navbar";
import ScrollProgress from "./components/common/ScrollProgress";
import ScrollToTop from "./components/common/ScrollToTop";
import CustomCursor from "./components/common/CustomCursor";
import Loader from "./components/common/Loader";
import TechMarquee from "./components/common/TechMarquee";

import Hero from "./sections/Hero/Hero";
import About from "./sections/About/About";
import Skills from "./sections/Skills/Skills";
import Projects from "./sections/Projects/Projects";
import Achievements from "./sections/Achievements/Achievements";
import Contact from "./sections/Contact/Contact";
import Footer from "./sections/Footer/Footer";
import MouseSpotlight from "./components/common/MouseSpotlight";
import { motion } from "framer-motion";

function App() {
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => {
      setLoading(false);
    }, 2200);

    return () => clearTimeout(timer);
  }, []);

  if (loading) {
    return <Loader />;
  }

  return (
  <motion.div
    initial={{ opacity: 0, scale: 0.98 }}
    animate={{ opacity: 1, scale: 1 }}
    transition={{ duration: 0.8 }}
    className="bg-[#050505] text-white overflow-x-hidden"
  >
    <MouseSpotlight />

    <CustomCursor />

    <ScrollProgress />

    <Navbar />

    <Hero />

    <TechMarquee />

    <About />

    <Skills />

    <Projects />

    <Achievements />

    <Contact />

    <ScrollToTop />

    <Footer />
  </motion.div>
) }

export default App;