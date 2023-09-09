import React from "react";

function Header() {
  return (
    <header className="headerstyle bg-red">
      <div className="central flex align-middle text-center">
        <a className="text-pink text-4xl tracking-tight font-bold" href="/">
          Edu<span className="text-blue">Track</span>
        </a>
        <nav className="flex align-middle flex-grow gap-x-2 justify-center items-center">
          <a className="" href="/">
            Home
          </a>
          <a className="" href="/about">
            About
          </a>
          <a className="" href="/services">
            Services
          </a>
          <a className="" href="/review">
            Review
          </a>
          <a className="" href="/#questions">
            FAQ
          </a>
          <div style="margin-right">
            <a className="login" href="/login">
              Login
            </a>
            <a className="btn" href="/register">
              Register
            </a>
          </div>
        </nav>
      </div>
    </header>
  );
}

export default Header;
