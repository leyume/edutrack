import React from "react";
import "./mission.css";
import One from "/images/image 1.png";
import Two from "/images/image 2.png";
import Three from "/images/image 3.png";
import Four from "/images/image 4.png";

function Mission() {
  return (
    <div className="py-20">
      <div className="grid grid-cols-1 gap-3 mb-4 place-items-center text-center px-15">
        <h1 className="text-brand-blue text-5xl">
          Why <span className="text-brand-pink">Edu</span>Track?
        </h1>
        <p className="text-5 text-brand-blue">Flexibility and options to suit your lifestyle and schedules</p>
        <p className="w-55% leading-normal">
          You need it? We got it. We make tracking and keeping record of your students easy, comfortable, organized, simple and stress free. From our happiness
          guarantee to our selective tracking and recording options. We provide you the flexibility that you most desire.
        </p>
      </div>
      <div className="mx-auto overflow-hidden">
      <div className="grid grid-cols-4 place-items-center gap-x-5  [&>div>img]:w-full [&>div>img]:h-full">
        <div className="h-80">
          <img src={One} alt="img" />
        </div>
        <div className="h-60 mr-3">
          <img src={Two} alt="img" />
        </div>
        <div className="h-60 ml-3">
          <img src={Three} alt="img" />
        </div>
        <div className="h-80">
          <img src={Four} alt="img" />
        </div>

        <div className="h-60">
          <img src={Two} alt="img" />
        </div>
        <div className="h-80">
          <img src={One} alt="img" />
        </div>
       
        <div className="h-80">
          <img src={Four} alt="img" />
        </div>

        <div className="h-60">
          <img src={Three} alt="img" />
        </div>
      </div>
      </div>
    </div>
  );
}

export default Mission;
