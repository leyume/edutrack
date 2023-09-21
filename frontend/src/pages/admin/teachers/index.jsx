import React from "react";
import { Link } from "react-router-dom";
import PageLabel from "~/components/PageLabel";

export default function Teachers() {
  return (
    <div className="px-10">
      <PageLabel title="Manage Teachers" details="Let’s keep in track with your Institution Details." />

      <section
        className="
          grid grid-cols-3 gap-6 bg-brand-liteorange mt-6 py-6 px-6 rounded-2 text-center 
          [&>div]:shadow [&>div]:bg-white [&>div]:rounded-2 [&>div]:grid [&>div]:gap-8 
          [&>div]:pt-8 [&>div]:pb-10 [&>div]:px-6 [&>div]:items-center [&>div]:justify-items-center
          [&>div>div]:text-8xl [&>div>div]:text-brand-pink [&>div>div]:-mb-1
          [&>div>p]:font-bold [&>div>p]:text-xl [&>div>p]:shadow-white
          "
      >
        <div>
          <div className="i-tabler-user-edit" />
          <p>Create Teachers</p>
          <Link to="/admin/teachers/add" className="btn">
            Create
          </Link>
        </div>
        <div>
          <div className="i-tabler-edit" />
          <p>Update Teachers Info</p>
          <Link to="/admin/teachers/search" className="btn">
            Update
          </Link>
        </div>
        <div>
          <div className="i-tabler-list-details" />
          <p>View Teacher Details</p>
          <Link to="/admin/teachers/details" className="btn">
            View
          </Link>
        </div>
      </section>
    </div>
  );
}
