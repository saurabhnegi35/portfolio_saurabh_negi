import React from "react";
import { words } from "../constants/constants";
import Button from "../components/Button";
import HeroModel from "../components/hero_model/HeroModel";
import { useGSAP } from "@gsap/react";
import gsap from "gsap";
import AnimatedCounter from "../components/AnimatedCounter";

const Hero = () => {
  useGSAP(() => {
    gsap.fromTo(
      ".hero-text h1",
      {
        y: 50,
        opacity: 0,
      },
      {
        y: 0,
        opacity: 1,
        stagger: .3,
        duration: 1,
        ease: "power2.inOut",
      }
    );
  });

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
              <p className="text-white-50 md:text-xl md:w-2/5 relative z-10 pointer-events-none">
                Hi, I'm <strong>Saurabh</strong>, a passionate developer based
                in India. I specializes in creating seamless digital
                experiences. Let's build something amazing together.
              </p>
            </p>
            <Button
              className="md:w-80 md:h-16 w-60 h-12"
              id="counter"
              text="See My Work"
            />
          </div>
        </header>

        <figure>
          <div className="hero-3d-layout ">
            <HeroModel />
          </div>
        </figure>
      </div>
      <AnimatedCounter />
    </section>
  );
};

export default Hero;
