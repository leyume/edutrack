import React from "react";
import { Link } from "react-router-dom";
import { useLocation } from "react-router";

function Header() {
  let location = useLocation();

  return location.pathname == "/" ? (
    <header className="flex items-center justify-between px-5% py-5 -mb-20">
      <Link
        to="/teachers/dashboard"
        className="text-brand-pink text-4xl font-bold"
      >
        Edu<span className="text-brand-blue">Track</span>
      </Link>
      <nav className="[&>ul>li>a]:text-brand-blue [&>ul>li>a:hover]:text-brand-pink">
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
            <a href="/questions">FAQ</a>
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
  ) : (
    <header className="flex item-center justify-between px-5% py-15px shadow-lg">
      <Link to="/" className="text-brand-pink text-4xl font-bold">
        Edu<span className="text-brand-blue">Track</span>
      </Link>

      <nav className="flex items-center justify-center">
        {location.pathname == "/signin" ? (
          <>
            <p className="text-center">Don’t have an account?</p>
            <Link to="/signup" className="btn ml-4">
              Sign Up
            </Link>
          </>
        ) : (
          <>
            <p className="text-center">Already have an account?</p>
            <Link to="/signin" className="btn ml-4">
              Sign In
            </Link>
          </>
        )}
      </nav>
    </header>
  );
}

export default Header;
