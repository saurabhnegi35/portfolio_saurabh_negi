import React from "react";

const Projects = () => {
  return (
    <div id="project" className="app-showcase px-10">
      <div className="w-full">
        <div className="showcaselayout">
          <div className="first-project-wrapper">
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
            <div className="project">
              <div className="image-wrapper bg-[#ffefdb]">
                <img src="/images/project2.png" alt="Zentry-Clone" />
              </div>
              <h2>Zentry - Explore the world of Gaming</h2>
            </div>

            <div className="project">
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
