import React from "react";
import Hero from "./sections/Hero";
import Projects from "./sections/Projects";
import Navbar from "./components/Navbar";

const App = () => {
  return (
    <div>
      <Navbar />
      <Hero />
      <Projects />
    </div>
  );
};

export default App;
