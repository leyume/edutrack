import React from "react";

import { Link } from "react-router-dom";

function Footer() {
  return (
    <footer className="items-center justify-between  py-10 bg-#2C2C2C">
      <div className="flex items-center justify-between ml-25 mr-25">
        <a href="/" className="text-brand-pink text-4xl font-bold">
          Edu<span className="text-#E5E2EA">Track</span>
        </a>
        <nav className="[&>ul>li>a]:text-#E5E2EA [&>ul>li>a:hover]:text-brand-pink">
          <ul className="list-none flex gap-5">
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
              <a href="/faq">FAQ</a>
            </li>
          </ul>
        </nav>

        <div className="flex gap-4">
          <a href to="/signin" className="btn btn-alt">
            Log in
          </a>
          <a href="/signup" className="btn">
            Sign up
          </a>
        </div>
      </div>
      <hr style={{ borderColor: "red" }} className="mt-10 mr-20 ml-20 mb-10" />
      <div className="flex gap-48%">
        <div>
          <p className="ml-20">
            Copyright (c) 2023 <span className="text-brand-pink">Edu</span>
            Track. All Rights Reserved
          </p>
        </div>
        <div>
          <a href="/">
            <img src="./images/facebook-icon.jpeg" alt="img" />
          </a>
          <a href="/">
            <img src="./images/twitter-icon.jpeg" alt="img" />
          </a>
          <a href="/">
            <img src="./images/linkedin-icon.jpeg" alt="img" />
          </a>
          <a href="/">
            <img src="./images/youtube-icon.jpeg" alt="img" />
          </a>
          <a href="/">
            <img src="./images/instagram-icon.jpeg" alt="img" />
          </a>
        </div>
      </div>
    </footer>
  );
}

export default Footer;
