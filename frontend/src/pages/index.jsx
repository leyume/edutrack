import React from "react";
import { Link } from "react-router-dom";
import About from "../components/About/About";
import Mission from "../components/Mission/Mission";
import Vision from "../components/Vision/Vision";
import Testimony from "../components/Testimony/Testimony";
import Question from "../components/Question/Question";

export default function Home() {
  return (
    <div>
      <section className="hero pt-20 h-98vh bg-cover bg-center">
        <div className="text-center text-brand-blue">
          <h1 className="text-4xl mt-8 mb-10">
            Keep <span className="text-brand-pink">track</span> of your
            <span className="text-brand-pink"> kids & students</span>
            <br /> school activities.
          </h1>
          <Link to="/signin" className="btn">
            GET STARTED
          </Link>
        </div>
      </section>
      <About />
      <Mission />
      <Vision />
      <Testimony />
      <Question />
    </div>
  );
}
