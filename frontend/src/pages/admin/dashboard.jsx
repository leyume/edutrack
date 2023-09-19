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
            <p className="">Let’s keep in track with your Institution Details.</p>
          </div>
          <img className="h-70 col-span-2 w-full" src="/images/image-12.jpeg" alt="img" />
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

        <section className="w-full flex justify-between gap-6 mb-5">
          <div className="bg-brand-litepink p-7 grid grid-cols-1 w-2/4 gap-4 rounded-2">
            <div className="flex justify-between items-center">
              <h2>Representative</h2>
              <a className="block i-tabler-edit text-2xl" />
            </div>
            <div className="text-center mt-4 leading-8">
              <img className="rounded-full w-20" src="/images/image-11.jpeg" alt="img" />
              <h2>Tabitha Willson</h2>
              <p>tabitawillson@gmail.com</p>
            </div>
          </div>
          
            <div className="w-4/4 bg-brand-liteorange p-7 rounded-2">
              <h3>Students Performance Leader Board</h3>
    
              <table className="w-full text-center my-3">
                  <thead className="text-4 text-#84868A">
                      <tr>
                      <th>S/N</th>
                      <th>NAME</th>
                      <th>CLASS</th>
                      <th>SUBJECTS</th>
                      <th>AVERAGE</th>
                      </tr>
                  </thead>
                  <tbody className="text-4">
                      <tr>
                          <td>1</td>
                          <td>Charlie Rawal</td>
                          <td>SS 3</td>
                          <td>24</td>
                          <td>99.8</td>
                      </tr>
                      <tr>
                          <td>2</td>
                          <td>Ariana Agarwal</td>
                          <td>JS 2</td>
                          <td>20</td>
                          <td>87.5</td>
                      </tr>
                      <tr>
                          <td>2</td>
                          <td>Ariana Agarwal</td>
                          <td>JS 2</td>
                          <td>20</td>
                          <td>87.5</td>
                      </tr>
                      <tr>
                          <td>2</td>
                          <td>Ariana Agarwal</td>
                          <td>JS 2</td>
                          <td>20</td>
                          <td>87.5</td>
                      </tr>
                      <tr>
                          <td>2</td>
                          <td>Ariana Agarwal</td>
                          <td>JS 2</td>
                          <td>20</td>
                          <td>87.5</td>
                      </tr>
                      <tr>
                          <td>2</td>
                          <td>Ariana Agarwal</td>
                          <td>JS 2</td>
                          <td>20</td>
                          <td>87.5</td>
                      </tr>
                      <tr>
                          <td>2</td>
                          <td>Ariana Agarwal</td>
                          <td>JS 2</td>
                          <td>20</td>
                          <td>87.5</td>
                      </tr>
                      <tr>
                          <td>2</td>
                          <td>Ariana Agarwal</td>
                          <td>JS 2</td>
                          <td>20</td>
                          <td>87.5</td>
                      </tr>
                      <tr>
                          <td>2</td>
                          <td>Ariana Agarwal</td>
                          <td>JS 2</td>
                          <td>20</td>
                          <td>87.5</td>
                      </tr>
                      <tr>
                          <td>2</td>
                          <td>Ariana Agarwal</td>
                          <td>JS 2</td>
                          <td>20</td>
                          <td>87.5</td>
                      </tr>
                  </tbody>
              </table>
          </div>
        </section>
      </div>
    )
  );
}

export default Dashboard;
