import React from "react";
import { Link } from "react-router-dom";

function Dashboard() {
  return (
    <div className="px-6">
      <section className="flex items-center justify-center">
        <div className="grid bg-#2375F0 w-3/5 h-45vh rounded-l-xl">
          <div>
            <div className="flex gap-65vh text-white">
              <h1 className="ml-6vh mt-16px font-bold text-5vh">
                Hello <br /> Ann,
              </h1>
              <a className="justify-items-stretch mt-4vh" href="/">
                <img src="/images/writing-icon.jpeg" alt="img" />
              </a>
            </div>
            <div className="ml-6vh text-white">
              <h4 className="font-bold text-3vh pt-2">
                St. Charles Royal Academy
              </h4>
              <p className="mt-3 text-gray-400">
                Plot 165 Downtown Toronto Canada.
              </p>
              <a className="text-white" href="/">
                <p className="mt-3">stcharlesroyalacademy@gmail.com</p>
              </a>
              <p className="mt-6vh pb-4">
                Let’s keep in track with your Institution Details.
              </p>
            </div>
          </div>
        </div>
        <img className="h-45vh w-2/5" src="/images/image-12.jpeg" alt="img" />
      </section>

      <section className="flex items-center justify-center gap-25 mt-10 font-bold">
        <div className="grid items-center justify-center bg-#FFDCB2 w-293px h-199px rounded-2">
          <h4 className="text-30px">Total Students</h4>
          <h1 className="text-center text-100px">50</h1>
        </div>
        <div className="grid items-center justify-center bg-#FFDCB2 w-293px h-199px rounded-2">
          <h4 className="text-30px">Classes</h4>
          <h1 className="text-center text-100px">3</h1>
        </div>
        <div className="grid items-center justify-center bg-#FFDCB2 w-293px h-199px rounded-2">
          <h4 className="text-30px">Total Subjects</h4>
          <h1 className="text-center text-100px">1</h1>
        </div>
      </section>
      <section className="flex">
        <div className="bg-#F41E922B w-30% h-290px ml-5 mt-5 mb-5 rounded-2">
          <div className="flex items-center justify-around pt-5 ">
            <h2 className="font-bold text-dark-900">Teacher</h2>
            <a className="" href="/">
              <img className="" src="/images/writing-icon1.jpeg" alt="img" />
            </a>
          </div>
          <div className="grid items-center justify-items-center pt-8">
            <div className="">
              <img
                className="rounded-10"
                src="/images/image-10.jpeg"
                alt="img"
              />
            </div>
            <div className="grid items-center justify-center">
              <h2 className="font-bold pt-3vh">Mrs. Ann Philip</h2>
            </div>
            <div className="mt-4">
              <a className="text-black" href="/">
                <p className="">annphilip@gmail.com</p>
              </a>
            </div>
          </div>
        </div>
        <div className="bg-#F8EFE2 w-75% h-290px rounded-2 mt-5 ml-5 mr-5 mb-5 pl-5 pt-5">
          <div>
            <h2 className="font-bold">Student Highlights</h2>
          </div>
          <div className="text-#84868A flex items-center justify-between pt-3 pb-2 pr-10">
            <p>S/N</p>
            <p>NAME</p>
            <p>CLASS</p>
          </div>
          <div className="flex items-center justify-between mb-4">
            <div>
              <p className="bg-white w-5 h-5 rounded-1 pl-1">1</p>
            </div>
            <div>
              <p>Charlie Rawal</p>
            </div>
            <p>SS 3</p>
          </div>
          <div className="flex items-center justify-between mb-4">
            <div>
              <p className="bg-white w-5 h-5 rounded-1 pl-1">2</p>
            </div>
            <div>
              <p>Ariana Agarwal</p>
            </div>
            <p>JS 2</p>
          </div>
          <div className="flex items-center justify-between mb-4">
            <div>
              <p className="bg-#fff w-5 h-5 rounded-1 pl-1">3</p>
            </div>
            <div>
              <p>Ariana Agarwal</p>
            </div>
            <p>JS 3</p>
          </div>
          <div className="flex items-center justify-between mb-4">
            <div>
              <p className="bg-#fff w-5 h-5 rounded-1 pl-1">4</p>
            </div>
            <div>
              <p>Ariana Agarwal</p>
            </div>
            <p>SS 1</p>
          </div>
          <div className="flex items-center justify-between">
            <div>
              <p className="bg-#fff w-5 h-5 rounded-1 pl-1">5</p>
            </div>
            <div>
              <p>Ariana Agarwal</p>
            </div>
            <p>SS 3</p>
          </div>
        </div>
      </section>
    </div>
  );
}

export default Dashboard;
