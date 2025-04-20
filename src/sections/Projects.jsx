import React, { useRef } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { useGSAP } from "@gsap/react";

gsap.registerPlugin(ScrollTrigger);

const Projects = () => {
  const sectionRef = useRef(null);
  const project1Ref = useRef(null);
  const project2Ref = useRef(null);
  const project3Ref = useRef(null);

  useGSAP(() => {
    gsap.fromTo(
      sectionRef.current,
      { opacity: 0 },
      { opacity: 1, duration: 1.5 }
    );

    const projects = [
      project1Ref.current,
      project2Ref.current,
      project3Ref.current,
    ];

    projects.forEach((project, index) => {
      gsap.fromTo(
        project,
        { y: 80, opacity: 0 },
        {
          y: 0,
          opacity: 1,
          duration: 1,
          delay: 0.3 * (index + 1),
          scrollTrigger: {
            trigger: project,
            // start: "top bottom-=100",
            // toggleActions: "play none none reverse",
            start: "top bottom",
            end: "top center",
            scrub: true,
          },
        }
      );
    });
  }, []);

  return (
    <div ref={sectionRef} id="projects" className="app-showcase md:px-50 px-5">
      <div className="w-full">
        <div className="showcaselayout">
          <div ref={project1Ref} className="first-project-wrapper">
            <div className="image-wrapper">
              <img src="/images/project1.png" alt="Uber-Clone" />
            </div>
            <div className="text-content">
              <h2>
                On-Demand Rides Made Simple with a Powerful, User-Friendly App
                Called Uber-Clone
              </h2>
              <p className="text-white-50 md:text-xl">
                A Web-App build with React, NodeJs, MongoDB etc for fast,
                suer-friendly experience.
              </p>
            </div>
          </div>

          <div className="project-list-wrapper overflow-hidden">
            <div ref={project2Ref} className="project">
              <div className="image-wrapper bg-[#ffefdb]">
                <img src="/images/project2.png" alt="Zentry-Clone" />
              </div>
              <h2>Zentry - Explore the world of Gaming</h2>
            </div>

            <div ref={project3Ref} className="project">
              <div className="image-wrapper bg-[#ffe7eb]">
                <img src="/images/project3.png" alt="TechMate" />
              </div>
              <h2>TechMate - Find your Developer Buddy</h2>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Projects;
