import React from "react";
import { words } from "../constants/constants";

const Hero = () => {
  return (
    <section id="hero" className="relative overflow-hidden">
      <div className="absolute z-10 left-0 top-0">
        <img src="/images/bg.png" alt="bg" />
      </div>

      <div className="hero-layout">
        <header className="flex flex-col justify-center md:w-full w-screen md:px-10 px-5">
          <div className="flex flex-col gap-7">
            <div className="hero-text">
              <h1>
                Transforming{" "}
                <span className="slide">
                  <span className="wrapper">
                    {words.map((word, index) => (
                      <span
                        key={index}
                        className="flex items-center md:gap-3 gap-1 pb-3"
                      >
                        <img
                          src={word.imgPath}
                          alt={word.text}
                          className="xl:size-12 md:size-10 size-7 md:p-2 p-1 rounded-full bg-white-50"
                        />

                        <span>{word.text}</span>
                      </span>
                    ))}
                  </span>
                </span>
              </h1>
              <h1>into Impactful</h1>
              <h1>Digital Experiences</h1>
            </div>
            <p className="text-white-50 md:text-xl relative z-10 pointer-events-none">
              <p className="text-white-50 md:text-xl relative z-10 pointer-events-none">
                Hi, I'm <strong>Saurabh</strong>, a passionate developer based
                in India. I specializes in creating seamless digital
                experiences. Let's build something amazing together.
              </p>
            </p>
          </div>
        </header>
      </div>
    </section>
  );
};

export default Hero;
