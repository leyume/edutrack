import React from "react";
import { Link } from "react-router-dom";

function Students() {
  return (
    <>
      <div className="px-6">
        <section className="bg-brand-blue rounded-2 text-white py-6 px-6">
          <h1>Manage Students</h1>
          <p>Let’s keep in track with your Institution Details.</p>
        </section>

        <section className="grid grid-cols-3 gap-6 bg-brand-liteorange mt-6 py-6 px-6 rounded-2 text-center [&>div]:bg-white [&>div]:rounded-2 [&>div]:shadow [&>div]:grid [&>div]:gap-12 [&>div]:py-8 [&>div]:px-6 [&>div]:items-center [&>div]:justify-items-center">
          <div>
            <img src="./images/image-16.jpeg" alt="img" />
            <p className="font-bold text-24px shadow-white">Create Students</p>
            <Link to="/students/add" className="btn">
              Create
            </Link>
          </div>
          <div>
            <img src="./images/image-14.jpeg" alt="img" />
            <p className="font-bold text-24px shadow-white">Update Students Info</p>
            <Link to className="btn" href="/">
              Update
            </Link>
          </div>
          <div>
            <img src="./images/image-15.jpeg" alt="img" />
            <p className="font-bold text-24px shadow-white">View Student Details</p>
            <Link to className="btn" href="/">
              View
            </Link>
          </div>
        </section>
      </div>
    </>
  );
}

export default Students;
