import React, { useEffect, useState } from "react";
import { navLinks } from "../constants/constants";

const Navbar = () => {
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      const isScrolledDown = window.scrollY > 10;
      setIsScrolled(isScrolledDown);
    };
  
    window.addEventListener("scroll", handleScroll);
    
    // Call it once on mount in case user refreshes mid-scroll
    handleScroll();
  
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);
  return (
    <header className={`navbar ${isScrolled ? "scrolled" : "not-scrolled"}`}>
      <div className="inner">
        <a className="logo" href="hero">
          Saurabh Negi
        </a>

        <nav className="desktop">
          <ul>
            {navLinks.map(({ link, name, index }) => (
              <li key={index} className="group ">
                <a href={link}>
                  {" "}
                  <span>{name}</span>
                  <span className="underline"></span>
                </a>
              </li>
            ))}
          </ul>
        </nav>

        <a href="#contact" className="contact-btn group">
          <div className="inner">
            <span>Contact Me</span>
          </div>
        </a>
      </div>
    </header>
  );
};

export default Navbar;
