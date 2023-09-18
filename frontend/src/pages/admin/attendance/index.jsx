import React from "react";
import { Link } from "react-router-dom";
import PageLabel from "~/components/PageLabel";

function Attendance() {
  return (
    <>
      <div className="px-6">
        <PageLabel title="Manage Attendance" details="Let’s keep in track with your Institution Details." />

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
