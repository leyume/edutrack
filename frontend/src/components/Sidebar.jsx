import React from "react";
import { Link } from "react-router-dom";

export default function Sidebar() {
  return (
    <aside className="bg-#E5E2EA w-60 p-6 fixed h-screen top-0">
      <Link to="/" className="text-brand-pink text-4xl font-bold">
        Edu<span className="text-brand-blue">Track</span>
      </Link>
      <nav className="[&>ul>li:hover]:bg-#2375F0 [&>ul>li>:hover]:text-white [&>ul>li>a]:text-dark-900 [&>ul>li>a]:block [&>ul>li]:rounded-2 [&>ul>li>a]:p-15px mt-30px text-black">
        <ul className="list-none">
          <li>
            <Link to="/dashboard">Dashboard</Link>
          </li>
          <li>
            <Link to="/teachers">Manage Teachers</Link>
          </li>
          <li>
            <a href="/">Manage Students</a>
          </li>
          <li>
            <a href="/">Attendance</a>
          </li>
          <li>
            <a href="/">Profile</a>
          </li>
        </ul>
      </nav>
    </aside>
  );
}
