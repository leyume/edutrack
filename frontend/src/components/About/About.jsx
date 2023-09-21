import React from "react";
import AboutImage from "/images/about.png";

export default function About() {
  return (
    <section id="about" className="bg-icons text-center pb-15 pt-25 px-15">
      <h1 className="text-5xl text-brand-blue">
        About <span className="text-brand-pink">Edu</span>Track
      </h1>
      <p className="w-55% mx-auto mt-4 leading-normal text-4">
      Welcome to EduTrack! We're your partner in education, simplifying school management and fostering better communication. Our platform empowers schools to effortlessly track activities, manage attendance, and facilitate seamless guardian engagement. Teachers can access student data with ease, while parents stay informed about their children's progress in real-time. Our innovative QR code system ensures safe drop-offs and pick-ups. Join us on this journey to streamline education administration and strengthen the school-parent-student connection.
      </p>
      <img src={AboutImage} className="w-30%" alt="img" />
    </section>
  );
}
