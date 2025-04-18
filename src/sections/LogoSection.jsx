import React from "react";
import { logoIconsList } from "../constants/constants";

const LogoIcon = ({ logoIcon }) => {
  return (
    <div className="flex-none flex-center marquee-item">
      <img src={logoIcon.imgPath} alt={logoIcon.name} />
    </div>
  );
};

const LogoSection = () => {
  return (
    <div className="md:my-20 my-10 relative">
      <div className="gradient-edge" />
      <div className="gradient-edge" />

      <div className="marquee h-52">
        <div className="marquee-box md:gap-12 gap-5">
          {logoIconsList.map((logo, index) => (
            <LogoIcon key={index} logoIcon={logo} />
          ))}

          {logoIconsList.map((logo, index) => (
            <LogoIcon key={index} logoIcon={logo} />
          ))}
        </div>
      </div>
    </div>
  );
};

export default LogoSection;
