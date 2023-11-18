import React from "react";
import { Link, useNavigate } from "react-router-dom";
import { auth, signOut } from "~/config";
import { useLocation } from "react-router";
import { useState, useEffect } from "react";
import { userData } from "~/components/Query";
import { useQueryClient } from "@tanstack/react-query";

export default function Header() {
  let location = useLocation();
  const [scrolled, setScrolled] = useState(false);
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 0) {
        setScrolled(true);
      } else {
        setScrolled(false);
      }
    };

    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  let navigate = useNavigate();
  let queryClient = useQueryClient();
  const { data, isSuccess, isError } = userData();

  const logout = async () => {
    await signOut(auth);
    await localStorage.removeItem("token");
    queryClient.removeQueries();
    navigate("/");
  };

  //Control nav hide and show
  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return location.pathname == "/" ? (
    <header className={`landing flex items-center justify-between px-5% py-5 ${scrolled ? "scrolled" : ""}`}>
      <Link to="/admin/dashboard" className="text-brand-pink text-3xl md:text-4xl font-bold">
        Edu<span className="text-brand-blue">Track</span>
      </Link>
      <nav className="[&>ul>li>a]:text-brand-blue [&>ul>li>a:hover]:text-brand-pink">
        <ul className="list-none flex gap-5">
          <li>
            <a href="/#hero">Home</a>
          </li>
          <li>
            <a href="/#about">About</a>
          </li>
          <li>
            <a href="/#services">Services</a>
          </li>
          <li>
            <a href="/#review">Review</a>
          </li>
          <li>
            <a href="/#questions">FAQ</a>
          </li>
        </ul>
      </nav>
      <div className="flex gap-4">
        {isSuccess && data?.institution?.name ? (
          <div className="flex items-center gap-3">
            <Link to="/admin/dashboard">
              <div className="rounded-full bg-brand-blue h-10 w-10 text-lg flex items-center justify-center text-white">
                {data.firstname[0]}
                {data.lastname[0]}
              </div>
              {/* <img src="/images/image-11.jpeg" alt="img" className="w-10 rounded-full" /> */}
            </Link>
            <a onClick={logout} className="i-tabler-power text-red-600 text-2xl inline-block" />
          </div>
        ) : (
          <>
            <Link to="/signin" className="btn btn-alt">
              Log in
            </Link>
            <Link to="/signup" className="btn">
              Sign up
            </Link>
          </>
        )}
      </div>
    </header>
  ) : (
    <header className="landing flex item-center justify-between px-5% py-15px shadow-lg bg-white">
      <Link to="/" className="text-brand-pink text-3xl md:text-4xl font-bold">
        Edu<span className="text-brand-blue">Track</span>
      </Link>

      <nav className={`${isMenuOpen ? 'flex' : 'hidden'} absolute md:relative top-[60px] md:top-auto left-0 md:left-auto w-full md:w-auto h-[50vh] md:h-auto bg-brand-darkgray md:bg-white md:relative md:flex flex-col md-flex-row items-center justify-center gap-4 md:gap-none animate-back-in-down md:animate-none`}>
        {location.pathname == "/signin" ? (
          <>
            <p className="text-center text-white md:text-brand-dark">Don’t have an account?</p>
            <Link to="/signup" className="btn ml-4" onClick={toggleMenu}>
              Sign Up
            </Link>
          </>
        ) : (
          <>
            <p className="text-center text-white md:text-brand-dark">Already have an account?</p>
            <Link to="/signin" className="btn ml-4" onClick={toggleMenu}>
              Sign In
            </Link>
          </>
        )}
      </nav>

      <span className={`${isMenuOpen ? "i-tabler-circle-x" : "i-tabler-menu-deep"} text-brand-pink text-4xl inline-block md:hidden cursor-pointer`}
      onClick={toggleMenu}/>
    </header>
  );
}
