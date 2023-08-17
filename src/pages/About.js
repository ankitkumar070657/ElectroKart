import { aboutcards } from "../assets/data";
import React from "react";

const About = () => {
  return (
    <div className="max-w-[1520px] m-auto px-4 py-4">
      <h1 className="text-[#3e5b7e] font-bold text-2xl text-center py-2">
        {" "}
        About Us{" "}
      </h1>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5 py-5 px-2">
        {aboutcards.map((item) => {
          return (
            <div
              key={item.id}
              className="p-4 flex-col justify-center items-center hover:scale-105 duration-300 border-2 my-2 bg-slate-300 shadow-black shadow-2xl"
            >
              
              <p className="font-bold">{item.heading}</p>
              {item.data}
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default About;
