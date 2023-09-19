import React from "react";
import { Link } from "react-router-dom";
import { userQ } from "~/utils/queries";
import { useQuery } from "@tanstack/react-query";
import { QRCodeSVG } from "qrcode.react";

export default function GuardianDashboard() {
  const { data, isSuccess, isError } = useQuery(userQ);

  let code = crypto.randomUUID();

  return (
    isSuccess &&
    data?.institution?.name && (
      <div className="px-6 grid gap-6">
        <section className="grid grid-cols-5 justify-center rounded-l-xl text-white bg-brand-blue overflow-hidden">
          <div className="flex flex-col justify-between col-span-3 p-8">
            <div>
              <h1 className="text-10 mb-2">Hello {data.firstname},</h1>
              <div className="text-xl">{data.institution.name}</div>
              <p className="opacity-50">{data.institution.location}.</p>
              {/* <p className="mt-6">{data.email}</p> */}
            </div>
            <p className="">Let’s keep in track with your Institution Details.</p>
          </div>
          <img className="h-25vh col-span-2 w-full" src="/images/image-12.jpeg" alt="img" />
        </section>

        <section>
          <QRCodeSVG value={code + "_" + data.id} />
        </section>

        <section className="grid grid-cols-3 items-center text-center justify-center gap-6 [&>div]:h-35 [&>div]:py-6 [&>div]:bg-brand-orange [&>div]:rounded-2 [&>div>h1]:text-7xl">
          <div>
            <h4>Total Wards</h4>
            <h1>4</h1>
          </div>
          <div>
            <h4>Total Guardian</h4>
            <h1>4</h1>
          </div>
          <div className="grid grid-cols-1 place-items-center">
            <h3 className="text-6 text-center">Need A New Guardian?</h3>
            <Link to="/guardian/guardians/create" className="btn">
              Create
            </Link>
          </div>
        </section>

        <section className="w-full flex justify-between gap-6 mb-5">
          <div className="bg-brand-litepink p-7 grid grid-cols-1 w-2/4 gap-4 rounded-2">
            <div className="flex items-center justify-between">
              <h1>Guardian</h1>
              <Link to="/guardian/guardians/profile" className="i-tabler-edit"></Link>
            </div>

            <div className="grid grid-cols-1 place-items-center">
              <img className="w-30 mb-4" src="/images/guardian.png" alt="img" />
            </div>

            <div className="grid grid-cols-1 place-items-center gap-2">
              <h1>Mr. Frank Jace</h1>
              <p>frankjace@gmail.com</p>
            </div>
          </div>

          <div className="w-4/4 bg-brand-liteorange p-7 rounded-2">
            <h3>Activities</h3>

            <table className="w-full text-left my-3">
              <thead className="text-4 text-#84868A">
                <tr>
                  <th>S/N</th>
                  <th>WARDS</th>
                  <th>DROP</th>
                  <th>PICKUP</th>
                </tr>
              </thead>
              <tbody className="text-4">
                <tr>
                  <td>1</td>
                  <td>Frank Mary</td>
                  <td>8:00AM</td>
                  <td>4:00PM</td>
                </tr>
                <tr>
                  <td>2</td>
                  <td>Frank Mary</td>
                  <td>8:00AM</td>
                  <td>4:00PM</td>
                </tr>
                <tr>
                  <td>3</td>
                  <td>Frank Mary</td>
                  <td>8:00AM</td>
                  <td>4:00PM</td>
                </tr>
                <tr>
                  <td>4</td>
                  <td>Frank Mary</td>
                  <td>8:00AM</td>
                  <td>4:00PM</td>
                </tr>
                <tr>
                  <td>5</td>
                  <td>Frank Mary</td>
                  <td>8:00AM</td>
                  <td>4:00PM</td>
                </tr>
                <tr>
                  <td>6</td>
                  <td>Frank Mary</td>
                  <td>8:00AM</td>
                  <td>4:00PM</td>
                </tr>
                <tr>
                  <td>7</td>
                  <td>Frank Mary</td>
                  <td>8:00AM</td>
                  <td>4:00PM</td>
                </tr>
              </tbody>
            </table>
          </div>
        </section>
      </div>
    )
  );
}
