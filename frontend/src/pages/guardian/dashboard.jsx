import React from "react";
import { Link } from "react-router-dom";
import { QRCodeSVG } from "qrcode.react";
import { userData, teachersData, studentsData, guardiansData, attendanceData } from "~/components/Query";

export default function GuardianDashboard() {
  const { data: user, isSuccess, isError } = userData();
  const { data: teachers } = teachersData();
  const { data: students } = studentsData();
  const { data: guardians } = guardiansData();
  const { data: attendance } = attendanceData();

  console.log({ user });

  let code = crypto.randomUUID();

  return (
    isSuccess &&
    user?.institution?.name && (
      <div className="px-10 grid gap-6">
        <section className="grid grid-cols-5 justify-center rounded-xl text-white bg-pink-700 overflow-hidden">
          <div className="flex flex-col justify-between col-span-3 p-8">
            <div>
              <h1 className="text-10 mb-2">Hello {user.firstname},</h1>
              <div className="text-xl">{user.institution.name}</div>
              <p className="opacity-50">{user.institution.location}.</p>
              {/* <p className="mt-6">{data.email}</p> */}
            </div>
            <p className="">Let’s keep in track with your Institution Details.</p>
          </div>
          <img className="h-30vh col-span-2 w-full object-cover" src="/images/institute.jpeg" alt="img" />
        </section>

        {/* <section>
          <QRCodeSVG value={code + "_" + data.id} />
        </section> */}

        <section className="grid grid-cols-3 items-center text-center justify-center gap-6 [&>div]:h-35 [&>div]:py-6 [&>div]:bg-brand-orange [&>div]:rounded-2 [&>div>h1]:text-7xl">
          <div>
            <h4>Total Wards</h4>
            <h1>{user?.wards?.length}</h1>
          </div>
          <div>
            <h4>Total Guardian</h4>
            <h1>1</h1>
          </div>
          <div className="grid grid-cols-1 place-items-center">
            <h3 className="text-6 text-center">Your QRCode</h3>
            <Link to="/guardian/qrcode" className="btn">
              View
            </Link>
          </div>
        </section>

        <section className="grid grid-cols-3 gap-6 mb-12">
          <div className="bg-brand-litepink p-6 grid gap-4 rounded-2">
            <div className="flex justify-between">
              <h2>Guardian</h2>
              <Link to="/guardian/guardians/profile" className="block i-tabler-edit text-2xl" />
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
            <h3 className="text-2xl">Attendance History</h3>

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
                  ?.filter((aa) => aa.guardian_arrival_id == user.id || aa.guardian_departure_id == user.id)
                  .reverse()
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
