import React from "react";
import Hero from "./sections/Hero";
import Projects from "./sections/Projects";
import Navbar from "./components/Navbar";
import LogoSection from "./sections/LogoSection";
import FeatureCards from "./sections/FeatureCards";
import ExperienceSection from "./sections/ExperienceSection";

const App = () => {
  return (
    <div>
      <Navbar />
      <Hero />
      <Projects />
      <LogoSection />
      <FeatureCards />
      <ExperienceSection />
    </div>
  );
};

export default App;
