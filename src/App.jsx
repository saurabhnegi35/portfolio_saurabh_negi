import React from "react";
import Hero from "./sections/Hero";
import Projects from "./sections/Projects";
import Navbar from "./components/Navbar";
import LogoSection from "./sections/LogoSection";
import FeatureCards from "./sections/FeatureCards";

const App = () => {
  return (
    <div>
      <Navbar />
      <Hero />
      <Projects />
      <LogoSection />
      <FeatureCards />
    </div>
  );
};

export default App;
