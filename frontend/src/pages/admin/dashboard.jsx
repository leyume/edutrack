import React from "react";
import { Link } from "react-router-dom";
import { userQ } from "~/utils/queries";

import { useQuery } from "@tanstack/react-query";

function Dashboard() {
  // Queries
  const { data, isSuccess, isError } = useQuery(userQ);

  return (
    isSuccess &&
    data?.institution?.name && (
      <div className="px-6">
        <section className="grid grid-cols-5 justify-center rounded-l-xl text-white bg-brand-blue">
          <div className="flex flex-col justify-between col-span-3 p-8">
            <div>
              <div className="flex justify-between mb-3">
                <h1 className="text-5xl font-800">
                  Hello <br />
                  {data.firstname},
                </h1>
                <a className="block i-tabler-edit text-2xl opacity-50" />
              </div>
              <div className="text-xl">{data.institution.name}</div>
              <p className="opacity-50">{data.institution.location}.</p>
              {/* <p className="mt-6">{data.email}</p> */}
            </div>
            <p className="">
              Let’s keep in track with your Institution Details.
            </p>
          </div>
          <img
            className="h-35vh col-span-2 w-full"
            src="/images/image-12.jpeg"
            alt="img"
          />
        </section>

        <section className="grid grid-cols-3 items-center text-center justify-center gap-6 my-6 [&>div]:py-6 [&>div]:bg-brand-orange [&>div]:rounded-2 [&>div>h1]:text-7xl">
          <div>
            <h4>Teachers</h4>
            <h1>50</h1>
          </div>
          <div>
            <h4>Students</h4>
            <h1>250</h1>
          </div>
          <div>
            <h4>Guardians</h4>
            <h1>40</h1>
          </div>
        </section>

        <section className="grid grid-cols-3 gap-6 [&>div]:rounded-2 mb-12">
          <div className="bg-brand-litepink p-6">
            <div className="flex justify-between items-center">
              <h2>Representative</h2>
              <a className="block i-tabler-edit text-2xl" />
            </div>
            <div className="text-center mt-4 leading-8">
              <img
                className="rounded-full w-20"
                src="/images/image-11.jpeg"
                alt="img"
              />
              <h2>Tabitha Willson</h2>
              <p>tabitawillson@gmail.com</p>
            </div>
          </div>
          <div className="bg-brand-liteorange col-span-2">
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
        </section>
      </div>
    )
  );
}

export default Dashboard;
