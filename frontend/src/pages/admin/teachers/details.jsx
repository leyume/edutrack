import React from "react";
import { Link } from "react-router-dom";

const StudentsDetails = () => {
  return (
    <main className="flex items-center flex-col px-10% mb-10">
      <section className="flex items-center justify-between">
        <img className="w-30 mb-4" src="/images/teacher.png" alt="img" />
      </section>

      <section className="grid grid-cols-2 gap-6 w-full items-center">
        <div className="w-100% grid gap-8 text-5">
          <p>
            <b>First Name:</b> <span>Janefrancis Nginika</span>
          </p>

          <p>
            <b>Class:</b> <span>SS 3</span>
          </p>

          <p>
            <b>Subject:</b> <span>Computer Science</span>
          </p>

          <p>
            <b>Role:</b> <span>Form Teacher</span>
          </p>
        </div>

        <div className="w-100% grid gap-8 text-5">
          <p>
            <b>Last Name:</b> <span>Dimaku</span>
          </p>

          <p>
            <b>Gender:</b> <span>Female</span>
          </p>

          <p>
            <b>Status:</b> <span>Active</span>
          </p>

          <p>
            <b>Guardian Email:</b> <span>janefrancis@gmail.com</span>
          </p>
        </div>

        <div className="col-span-2 flex justify-center gap-4">
          <Link to="" className="btn">
            Edit
          </Link>
          <Link to="" className="btn">
            Dashbord
          </Link>
        </div>
      </section>
    </main>
  );
};

export default StudentsDetails;
