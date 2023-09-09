import React from "react";
import AboutImage from "../../assets/about.png";

function About() {
  return (
    <section id="about" className="bg-icons text-center py-20">
      <h1 className="text-5xl text-brand-blue">
        About <span className="text-brand-pink">Edu</span>Track
      </h1>
      <p className="w-55% mx-auto mt-8 leading-normal">
        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed non risus.
        Suspendisse lectus tortor, dignissim sit amet, adipiscing nec, ultricies
        sed, dolor. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed
        non risus. Suspendisse lectusamet, adipiscing nec, ultricies sed,
        dolor.Lorem ipsum dolor sit dolor.Lorem ipsum dolor sit
      </p>
      <img src={AboutImage} className="w-40%" alt="img" />
    </section>
  );
}

export default About;
