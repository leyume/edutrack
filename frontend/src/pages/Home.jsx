import React from "react";
import About from "../components/About/About";
import Mission from "../components/Mission/Mission";
import Vision from "../components/Vision/Vision";
import Testimony from "../components/Testimony/Testimony";
import Question from "../components/Question/Question";
import Footer from "../components/Footer/Footer";

export default function Home() {
  return (
    <div>
      <div className="app h-screen">
        <header className="header">
          <div className="project-title1">
            Edu<span className="project-title2">Track</span>
          </div>
          <nav className="nav">
            <ul>
              <li>
                <a href="/">Home</a>
              </li>
              <li>
                <a href="/about">About</a>
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
          <div className="auth-buttons">
            <button className="login-button">Log in</button>
            <button className="register-button">Sign up</button>
          </div>
        </header>
        <section className="main">
          <section className="section1">
            <div className="section1-content">
              <h1>
                Keep <span className="span">track</span> of your
                <span className="span"> kids & students</span>
                <br /> school activities.
              </h1>
              <button className="button1">GET STARTED</button>
            </div>
          </section>
        </section>
      </div>
      <About />
      <Mission />
      <Vision />
      <Testimony />
      <Question />
      <Footer />
    </div>
  );
}
