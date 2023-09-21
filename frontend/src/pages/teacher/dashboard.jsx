import React from "react";
import { Link } from "react-router-dom";
import { userData, subjectsData, studentsData, guardiansData, attendanceData, classesData } from "~/components/Query";

export default function TeacherDashboard() {
  // Queries
  const { data: user, isSuccess, isError } = userData();
  const { data: students } = studentsData();
  const { data: guardians } = guardiansData();
  const { data: classes } = classesData();
  const { data: subjects } = subjectsData();
  const { data: attendance } = attendanceData();
  return (
    isSuccess &&
    user?.institution?.name && (
      <div className="px-10 grid gap-6">
        <section className="grid grid-cols-5 justify-center rounded-xl text-white bg-gray-800 overflow-hidden">
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
              {/* <p className="mt-6">{user.email}</p> */}
            </div>
            <p className="">Let’s keep in track with your Institution Details.</p>
          </div>
          <img className="h-full max-h-35vh col-span-2 w-full object-cover" src="/images/institute.jpeg" alt="img" />
        </section>

        <section className="grid grid-cols-3 items-center text-center justify-center gap-6 my-6 [&>a]:text-black [&>a]:py-6 [&>a]:bg-brand-orange [&>a]:rounded-2 [&>a>h1]:text-7xl">
          <Link to="/teacher/teachers/students">
            {!students?.length && <h1>No</h1>}
            <h4>Students</h4>
            {!!students?.length && <h1>{students.length}</h1>}
          </Link>

          <Link to="/teacher/teachers/classes">
            {!classes?.length && <h1>No</h1>}
            <h4>Classes</h4>
            {!!classes?.length && <h1>{classes.length}</h1>}
          </Link>

          <Link to="/teacher/teachers/classes">
            {!subjects?.length && <h1>No</h1>}
            <h4>Subjects</h4>
            {!!subjects?.length && <h1>{subjects.length}</h1>}
          </Link>
        </section>

        <section className="grid grid-cols-3 gap-6 mb-12">
          <div className="bg-brand-litepink p-6 grid gap-4 rounded-2">
            <div className="flex justify-between">
              <h2>Teacher</h2>
              <Link to="/teacher/teachers/profile" className="block i-tabler-edit text-2xl" />
            </div>
            <div className="text-center leading-8">
              <div className="rounded-full bg-brand-pink h-20 w-20 text-3xl flex items-center justify-center text-white mx-auto mb-4">
                {user.firstname[0]}
                {user.lastname[0]}
              </div>
              <h2>{user.firstname + " " + user.lastname}</h2>
              <p>{user.email}</p>
            </div>
          </div>
          <div className="col-span-2 bg-brand-liteorange p-7 rounded-2">
            <h3 className="text-2xl">Students Highlight</h3>

            <table className="w-full my-3 mt-3">
              <thead className="text-gray-500">
                <tr className="text-left">
                  <th>Date</th>
                  <th>Student</th>
                  <th>Arrival</th>
                  <th>Departure</th>
                </tr>
              </thead>
              <tbody>
                {attendance
                  ?.reverse()
                  .slice(0, 5)
                  .map((att, i) => (
                    <tr key={i} className="[&>td]:py-1 text-sm">
                      <td>{att.date.split("T")[0]}</td>
                      <td>
                        {att.student.firstname} {att.student.lastname}
                      </td>
                      <td>
                        <div>{att.guardian_arrival?.firstname}</div>
                        <div className="text-10px">{att.arrival}</div>
                      </td>
                      <td>
                        <div>{att.guardian_departure?.firstname}</div>
                        <div className="text-10px">{att.departure}</div>
                      </td>
                    </tr>
                  ))}
              </tbody>
            </table>
          </div>
        </section>
      </div>
    )
  );
}
