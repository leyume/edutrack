import React from "react";
import { Link } from "react-router-dom";

export default function Teachers() {
  return (
    <>
      <div className="px-6">
        <section>
          <div className="bg-brand-blue rounded-2 text-white py-6 px-6">
            <h1>Manage Teachers</h1>
            <p className="pt-7vh">
              Let’s keep in track with your Institution Details.
            </p>
          </div>
        </section>
        <section className="grid grid-cols-3 gap-6 bg-brand-liteorange mt-6 py-6 px-6 rounded-2 text-center [&>div]:bg-white [&>div]:rounded-2 [&>div]:shadow [&>div]:grid [&>div]:gap-12 [&>div]:py-8 [&>div]:px-6 [&>div]:items-center [&>div]:justify-items-center">
          <div>
            <img src="/images/image-13.jpeg" alt="img" />
            <p className="font-bold text-24px shadow-white">Create Teachers</p>
            <Link to="/teachers/add" className="btn">
              Create
            </Link>
          </div>
          <div>
            <img src="/images/image-14.jpeg" alt="img" />
            <p className="font-bold text-24px shadow-white">
              Update Teachers Info
            </p>

            <Link to="/teachers/update" className="btn">
              Update
            </Link>
          </div>
          <div>
            <img src="/images/image-15.jpeg" alt="img" />
            <p className="font-bold text-24px shadow-white">
              View Teachers Details
            </p>
            <Link to="/teachers/[id]" className="btn">
              View
            </Link>
          </div>
        </section>
      </div>
    </>
  );
}
