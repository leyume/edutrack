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
      <div className="app h-90vh bg-cover bg-center">
        <header className="flex items-center justify-between px-5% py-5">
          <Link to="/" className="text-brand-pink text-4xl font-bold">
            Edu<span className="text-brand-blue">Track</span>
          </Link>

          <nav className="[&>ul>li>a]:text-brand-blue [&>ul>li>a:hover]:text-brand-pink">
            <ul className="list-none flex gap-5">
              <li>
                <a href="/">Home</a>
              </li>
              <li>
                <a href="/#about">About</a>
              </li>
              <li>
                <a href="/services">Services</a>
              </li>
              <li>
                <a href="/review">Review</a>
              </li>
              <li>
                <a href="/#questions">FAQ</a>
              </li>
            </ul>
          </nav>

          <div className="flex gap-4">
            <Link to="/signin" className="btn btn-alt">
              Log in
            </Link>
            <Link to="/signup" className="btn">
              Sign up
            </Link>
          </div>
        </header>
        <section className="text-center text-blue-500">
          <h1 className="text-4xl mt-8 mb-10">
            Keep <span className="text-brand-pink">track</span> of your
            <span className="text-brand-pink"> kids & students</span>
            <br /> school activities.
          </h1>
          <Link to="/signin" className="btn">
            GET STARTED
          </Link>
        </section>
      </div>
      <About />
      <Mission />
      <Vision />
      <Testimony />
      <Question />
    </div>
  );
}
