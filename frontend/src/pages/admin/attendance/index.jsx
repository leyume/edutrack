import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import PageLabel from "~/components/PageLabel";
import { QrScanner } from "react-qrcode-scanner";

function Attendance() {
  const [scan, setScan] = useState(false);
  const navigate = useNavigate();

  const handleScan = (value) => {
    // console.log({ value });
    setScan(false);
    navigate("/admin/attendance/" + value);
  };

  const handleError = (error) => console.log({ error });

  return (
    <>
      <div className="px-10">
        <div className="flex gap-6">
          <PageLabel title="Manage Attendance" details="Let’s keep in track with your Institution Details." className="flex-grow" />
          <a onClick={() => setScan(true)} className="grid grid-cols-2 w-48 b b-solid b-gray-300 rounded-lg pl-2.5 items-center">
            <b className="text-brand-pink">Click Here to Scan Attendance</b>
            <img src="/images/qr.png" alt="qrcode" className="w-full p-2" />
          </a>
        </div>

        {scan && (
          <section onClick={() => setScan(false)} className="fixed top-0 left-0 h-screen w-screen bg-black bg-opacity-80 z-1000">
            <QrScanner onScan={handleScan} onError={handleError} />
          </section>
        )}

        <section
          className="
          grid grid-cols-2 gap-6 bg-brand-liteorange mt-6 py-6 px-6 rounded-2 text-center 
          [&>div]:shadow [&>div]:bg-white [&>div]:rounded-2 [&>div]:grid [&>div]:gap-8 
          [&>div]:pt-8 [&>div]:pb-10 [&>div]:px-6 [&>div]:items-center [&>div]:justify-items-center
          [&>div>div]:text-8xl [&>div>div]:text-brand-pink [&>div>div]:-mb-1
          [&>div>p]:font-bold [&>div>p]:text-xl [&>div>p]:shadow-white
          "
        >
          <div>
            <div className="i-tabler-school" />
            <p>Students' Attendance</p>
            <Link to="/admin/attendance" className="btn">
              Create
            </Link>
          </div>
          <div>
            <div className="i-tabler-user-edit" />
            <p>Teachers' Attendance</p>
            <Link to="/admin/attendance" className="btn">
              Update
            </Link>
          </div>
        </section>
      </div>
    </>
  );
}

export default Attendance;
