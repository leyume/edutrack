import React from "react";
import { Link } from "react-router-dom";
import fetchAPI from "~/utils/fetchAPI";

import { useQuery } from "@tanstack/react-query";

function Dashboard() {
  // Queries
  const { data, isSuccess, isError } = useQuery({
    queryKey: ["user"],
    queryFn: async () => await fetchAPI("user"),
  });

  return (
    isSuccess &&
    data?.institution?.name && (
      <div className="px-6">
        <section className="flex items-center justify-center">
          <div className="grid bg-#2375F0 w-3/5 h-40vh rounded-l-xl">
            <div>
              <div className="flex  text-white">
                <h1 className="ml-6vh mt-16px font-900">
                  Hello {data.firstname},
                </h1>
                <a className="justify-items-stretch mt-4vh" href="/">
                  <img src="/images/writing-icon.jpeg" alt="img" />
                </a>
              </div>
              <div className="ml-6vh text-white">
                <h4>{data.institution.name}</h4>
                <p className="mt-8 text-gray-400">
                  {data.institution.location}.
                </p>
                <a className="text-white" href="/">
                  <p className="mt-6">{data.email}</p>
                </a>
                <p className="mt-25vh pb-4">
                  Let’s keep in track with your Institution Details.
                </p>
              </div>
            </div>
          </div>
          <img className="h-40vh w-2/5" src="/images/image-12.jpeg" alt="img" />
        </section>

        <div className="flex items-center justify-center gap-20">
          <div className="bg-#FFDCB2 w-35 h-35 ml-5 mt-5 rounded-2">
            <h4 className="text-center pt-7">Teachers</h4>
            <h1 className="text-center">50</h1>
          </div>
          <div className="bg-#FFDCB2 w-35 h-35 ml-5 mt-5 rounded-2">
            <h4 className="text-center pt-7">Students</h4>
            <h1 className="text-center">250</h1>
          </div>
          <div className="bg-#FFDCB2 w-35 h-35 ml-5 mt-5 rounded-2">
            <h4 className="text-center pt-7">Guardians</h4>
            <h1 className="text-center">40</h1>
          </div>
          <div className="bg-#FFDCB2 w-35 h-35 ml-5 mt-5 rounded-2">
            <h4 className="text-center pt-7">Summary Chart</h4>
            <img className="ml-5" src="/images/chart-icon.jpeg" alt="img" />
          </div>
        </div>
        <div className="flex">
          <div className="bg-#F41E922B w-30% h-290px ml-5 mt-5 mb-5 rounded-2">
            <div className="flex items-center justify-center pt-5 gap-23%">
              <h2 className="font-bold text-dark-900">Representative</h2>
              <a className="" href="/">
                <img className="" src="/images/writing-icon1.jpeg" alt="img" />
              </a>
            </div>
            <div className="">
              <div className="grid items-center justify-center pt-10">
                <img
                  className="rounded-10"
                  src="/images/image-11.jpeg"
                  alt="img"
                />
              </div>
              <div className="grid items-center justify-center">
                <h2 className="font-bold pt-3vh">Mrs. Tabitha Willson</h2>
                <a className="text-dark-900" href="/">
                  <p className="mt-3vh ml-3vh">tabitawillson@gmail.com</p>
                </a>
              </div>
            </div>
          </div>
          <div className="bg-#F8EFE2 w-75% h-290px rounded-2 mt-5 ml-5 mr-5 mb-5 pl-5 pt-5">
            <div>
              <h2 className="font-bold">Students Performance Leader Board</h2>
            </div>
            <div className="text-#84868A flex items-center justify-between pt-3 pb-2 pr-10">
              <p>RANK</p>
              <p>NAME</p>
              <p>CLASS</p>
              <p>SUBJECT</p>
              <p>AVERAGE</p>
            </div>
            <div className="flex items-center justify-between mb-4">
              <div className="flex gap-2">
                <p className="bg-white w-5 h-5 rounded-1 pl-1">1</p>
                <img src="/images/polygon-1.jpeg" alt="img" />
              </div>
              <div className="flex gap-2">
                <img
                  className="rounded-2"
                  src="/images/ellipse-11.jpeg"
                  alt="img"
                />
                <p>Charlie Rawal</p>
              </div>
              <p className="pr-9vh">SS 3</p>
              <p className="mr-13vh">24</p>
              <p className="mr-9vh text-#3BAFA8">99.8</p>
            </div>
            <div className="flex items-center justify-between mb-4">
              <div className="flex gap-2">
                <p className="bg-white w-5 h-5 rounded-1 pl-1">2</p>
                <img className="" src="/images/polygon-2.jpeg" alt="img" />
              </div>
              <div className="flex gap-2">
                <img
                  className="rounded-2"
                  src="/images/ellipse-12.jpeg"
                  alt="img"
                />
                <p>Ariana Agarwal</p>
              </div>
              <p className="pr-9vh">JS 2</p>
              <p className="pr-13vh">20</p>
              <p className="mr-9vh text-#3BAFA8">87.5</p>
            </div>
            <div className="flex items-center justify-between mb-4">
              <div className="flex gap-2">
                <p className="bg-#fff w-5 h-5 rounded-1 pl-1">3</p>
                <img className="" src="/images/polygon-2.jpeg" alt="img" />
              </div>
              <div className="flex gap-2">
                <img
                  className="rounded-2"
                  src="/images/ellipse-12.jpeg"
                  alt="img"
                />
                <p>Ariana Agarwal</p>
              </div>
              <p className="pr-9vh">JS 3</p>
              <p className="mr-13vh">20</p>
              <p className="mr-9vh text-#3BAFA8">78.2</p>
            </div>
            <div className="flex items-center justify-between mb-4">
              <div className="flex gap-2">
                <p className="bg-#fff w-5 h-5 rounded-1 pl-1">4</p>
                <img className="" src="/images/polygon-2.jpeg" alt="img" />
              </div>
              <div className="flex gap-2">
                <img
                  className="rounded-2"
                  src="/images/ellipse-12.jpeg"
                  alt="img"
                />
                <p>Ariana Agarwal</p>
              </div>
              <p className="pr-9vh">SS 1</p>
              <p className="mr-13vh">22</p>
              <p className="mr-9vh text-#3BAFA8">50.5</p>
            </div>
            <div className="flex items-center justify-between">
              <div className="flex gap-2">
                <p className="bg-#fff w-5 h-5 rounded-1 pl-1">5</p>
                <img className="" src="/images/polygon-2.jpeg" alt="img" />
              </div>
              <div className="flex gap-2">
                <img
                  className="rounded-2"
                  src="/images/ellipse-12.jpeg"
                  alt="img"
                />
                <p>Ariana Agarwal</p>
              </div>
              <p className="pr-9vh">SS 3</p>
              <p className="mr-13vh">24</p>
              <p className="mr-9vh text-#3BAFA8">48.8</p>
            </div>
          </div>
        </div>
      </div>
    )
  );
}

export default Dashboard;
