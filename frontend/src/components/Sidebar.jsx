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
            <Link to="/dashboard">
              <img className="mr-2vh" src="./images/menu-icon.jpeg" alt="img" />
              Dashboard
            </Link>
          </li>
          <li>
            <Link to="/teachers">
              <img
                className="mr-2vh"
                src="./images/canvasstudent.jpeg"
                alt="img"
              />
              Manage Teachers
            </Link>
          </li>
          <li>
            <Link to="/students">
              <img
                className="mr-2vh"
                src="./images/student-icon1.jpeg"
                alt="img"
              />
              Manage Students
            </Link>
          </li>
          <li>
            <Link to="/attendance">
              <img
                className="mr-2vh"
                src="./images/report-icon.jpeg"
                alt="img"
              />
              Attendance
            </Link>
          </li>
          <li>
            <Link to="/profile">
              <img
                className="mr-2vh"
                src="./images/student-icon.jpeg"
                alt="img"
              />
              Profile
            </Link>
          </li>
        </ul>
      </nav>
    </aside>
  );
}
