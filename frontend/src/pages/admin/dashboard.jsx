import React from "react";
import { Link } from "react-router-dom";
import { userData, teachersData, studentsData, guardiansData } from "~/components/Query";

export default function Dashboard() {
  // Queries
  const { data: user, isSuccess, isError } = userData();
  const { data: teachers } = teachersData();
  const { data: students } = studentsData();
  const { data: guardians } = guardiansData();

  return (
    isSuccess &&
    user?.institution?.name && (
      <div className="px-10">
        <section className="grid grid-cols-5 justify-center rounded-xl text-white bg-brand-blue overflow-hidden">
          <div className="flex flex-col justify-between col-span-3 p-8">
            <div>
              <div className="flex justify-between mb-3">
                <h1 className="text-5xl font-800">
                  Hello <br />
                  {user.firstname},
                </h1>
                <Link to="/admin/profile/institution" className="block i-tabler-edit text-2xl opacity-50" />
              </div>
              <div className="text-xl">{user.institution.name}</div>
              <p className="opacity-50">{user.institution.location}.</p>
              {/* <p className="mt-6">{data.email}</p> */}
            </div>
            <p className="">Let’s keep in track with your Institution Details.</p>
          </div>
          <img className="h-full max-h-35vh col-span-2 w-full object-cover" src="/images/institute.jpeg" alt="img" />
        </section>

        <section className="grid grid-cols-3 items-center text-center justify-center gap-6 my-6 [&>a]:text-black [&>a]:py-6 [&>a]:bg-brand-orange [&>a]:rounded-2 [&>a>h1]:text-7xl">
          <Link to="/admin/teachers">
            {!teachers?.length && <h1>No</h1>}
            <h4>Teachers</h4>
            {!!teachers?.length && <h1>{teachers.length}</h1>}
          </Link>
          <Link to="/admin/students">
            {!students?.length && <h1>No</h1>}
            <h4>Students</h4>
            {!!students?.length && <h1>{students.length}</h1>}
          </Link>
          <Link to="/admin/students">
            {!guardians?.length && <h1>No</h1>}
            <h4>Guardians</h4>
            {!!guardians?.length && <h1>{guardians.length}</h1>}
          </Link>
        </section>

        <section className="grid grid-cols-3 gap-6 mb-12">
          <div className="bg-brand-litepink p-6 grid gap-4 rounded-2">
            <div className="flex justify-between">
              <h2>Representative</h2>
              <Link to="/admin/profile/rep" className="block i-tabler-edit text-2xl" />
            </div>
            <div className="text-center leading-8">
              <img className="rounded-full w-30" src="/images/image-11.jpeg" alt="img" />
              <h2>{user.firstname + " " + user.lastname}</h2>
              <p>{user.email}</p>
            </div>
          </div>
          <div className="col-span-2 bg-brand-liteorange p-7 rounded-2">
            <h3>Attendance History</h3>

            <table className="hidden w-full my-3">
              <thead className="text-gray-500">
                <tr className="text-left">
                  <th>S/N</th>
                  <th>NAME</th>
                  <th>CLASS</th>
                  <th>SUBJECTS</th>
                  <th>AVERAGE</th>
                </tr>
              </thead>
              <tbody>
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
              </tbody>
            </table>
          </div>
        </section>
      </div>
    )
  );
}
