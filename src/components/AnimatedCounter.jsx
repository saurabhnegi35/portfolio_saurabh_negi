import React from "react";
import { counterItems } from "../constants/constants";
import CountUp from "react-countup";

const AnimatedCounter = () => {
  return (
    <div id="counter" className="md:px-10 xl:mt-0 mt-32">
      <div className="mx-auto grid-4-cols p-10">
        {counterItems.map((item, index) => (
          <div className="bg-zinc-900 rounded-lg p-10 flex flex-col justify-center">
            <div
              key={index}
              className="counter-number  text-white text-5xl font-bold mb-2"
            >
              {/* 0 {item.suffix} */}
              <CountUp end={item.value} suffix={item.suffix} />
            </div>
            <div>{item.label}</div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default AnimatedCounter;
