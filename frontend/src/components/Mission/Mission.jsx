import React from "react";
import "./mission.css";
import One from "../../assets/image 1.png";
import Two from "../../assets/image 2.png";
import Three from "../../assets/image 3.png";
import Four from "../../assets/image 4.png";

function Mission() {
  return (
    <div className="mision-container">
      <div className="mission-header">
        <h1>
          Why <span>Edu</span>Track?
        </h1>
        <h4>Flexibility and options to suit your lifestyle and schedules</h4>
        <p>
          You need it? We got it. We make tracking and keeping record of your students easy, comfortable, organized, simple and stress free. From our happiness
          guarantee to our selective tracking and recording options. We provide you the flexibility that you most desire.
        </p>
      </div>

      <div className="grid grid-cols-4 gap-1 px-5% [&>div>img]:max-w-full pb-20">
        <div>
          <img src={One} alt="img" />
          <img src={Three} alt="img" />
        </div>
        <div>
          <img src={Two} alt="img" />
          <img src={Four} alt="img" />
        </div>
        <div>
          <img src={One} alt="img" />
          <img src={Three} alt="img" />
        </div>
        <div>
          <img src={Two} alt="img" />
          <img src={Four} alt="img" />
        </div>
      </div>
    </div>
  );
}

export default Mission;
