import React from "react";
import "./About.css";
import AboutImage from "../../assets/about.png";
function About() {
  return (
    <div className="about">
      <div className="head-cont">
        <h1 className="about-header">
          About <span className="about-style">Edu</span>Track
        </h1>
      </div>
      <div className="text-cont">
        <p className="about-text">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed non
          risus. Suspendisse lectus tortor, dignissim sit amet, adipiscing nec,
          ultricies sed, dolor. Lorem ipsum dolor sit amet, consectetur
          adipiscing elit. Sed non risus. Suspendisse lectusamet, adipiscing
          nec, ultricies sed, dolor.Lorem ipsum dolor sit dolor.Lorem ipsum
          dolor sit
        </p>
      </div>
      <div className="aboutImg-cont">
        <img src={AboutImage} width={"80%"} alt="img" />
      </div>
    </div>
  );
}

export default About;
