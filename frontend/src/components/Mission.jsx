import React from "react";
// import "./mission.css";
import One from "/images/image 1.png";
import Two from "/images/image 2.png";
import Three from "/images/image 3.png";
import Four from "/images/image 4.png";

function Mission() {
  return (
    <div className="py-20">
      <div className="grid grid-cols-1 gap-3 mb-4 place-items-center text-center px-5%">
        <h1 className="text-brand-blue text-4xl md:text-5xl">
          Why <span className="text-brand-pink">Edu</span>Track?
        </h1>
        <p className="text-lg md:text-xl text-brand-blue">Flexibility and options to suit your lifestyle and schedules</p>
        <p className="w-full md:w-55% leading-normal text-sm md:text-[15px]">
          You need it? We got it. We make tracking and keeping record of your students easy, comfortable, organized, simple and stress free. From our happiness
          guarantee to our selective tracking and recording options. We provide you the flexibility that you most desire.
        </p>
      </div>
      <div className="mx-auto overflow-hidden">
          <div className="grid grid-cols-4 place-items-center gap-x-1 md:gap-x-4 [&>div>img]:w-full [&>div>img]:h-full">
            <div>
              <img src={One} alt="img"/>
            </div>

            <div>
              <img src={Two} alt="img"/>
            </div>
            
            <div>
              <img src={Three} alt="img"/>
            </div>

            <div>
              <img src={Four} alt="img"/>
            </div>

            <div>
            <img src={Two} alt="img"/>
          </div>
          <div>
            <img src={One} alt="img"/>
          </div>

          <div>
            <img src={Four} alt="img"/>
          </div>

          <div>
            <img src={Three} alt="img"/>
          </div>
        </div>
        
      </div>
    </div>
  );
}

export default Mission;
