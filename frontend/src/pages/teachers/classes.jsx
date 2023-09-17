import React from "react";
import { Link, useParams } from "react-router-dom";

function Classes() {
  return (
    <div className="mb-15">
      <section className="bg-brand-blue rounded-2 text-white py-6 px-6 mx-8">
        <h1>Classes</h1>
        <p className="pt-7vh">
          Let’s keep in track with your Institution Details.
        </p>
      </section>
      <section className="flex mx-8 my-5">
        <div className="grid items-center justify-items-center rounded-l-xl bg-#FFDCB2 w-20% h-35vh">
          <p className="font-bold text-5">Class Assigned</p>
          <p className="font-bold text-10 pb-15">1</p>
        </div>
        <div className="grid items-center justify-items-center rounded-r-xl bg-#F8EFE2 w-30% h-35vh mr-8">
          <p className="font-bold text-6">SS3</p>
        </div>
        <div className="grid items-center justify-items-center rounded-l-xl bg-#FFDCB2 w-20% h-35vh">
          <p className="font-bold text-5">Subject Assigned</p>
          <p className="font-bold text-10 pb-15">1</p>
        </div>
        <div className="grid items-center justify-items-center rounded-r-xl bg-#F8EFE2 w-30% h-35vh">
          <p className="font-bold text-6">BIOLOGY</p>
        </div>
      </section>
      <section className="flex mx-8 my-5">
        <div className="grid items-center justify-items-center rounded-l-xl bg-#FFDCB2 w-20% h-35vh">
          <p className="font-bold text-5">Duration</p>
          <p className="font-bold text-10 pb-15">2hrs</p>
        </div>
        <div className="grid items-center justify-items-center rounded-r-xl bg-#F8EFE2 w-30% h-35vh mr-8 font-bold text-6 px-10">
          <p>10AM</p>
          <p>-</p>
          <p>12PM</p>
        </div>
        <div className="grid items-center justify-items-center rounded-l-xl bg-#FFDCB2 w-20% h-35vh">
          <p className="font-bold text-5">Day</p>
          <p className="font-bold text-10 pb-15">4</p>
        </div>
        <div className="grid items-center justify-items-center rounded-r-xl bg-#F8EFE2 w-30% h-35vh font-bold text-6">
          <p>MONDAY</p>
          <p>WEDNESDAY</p>
          <p>FRIDAY</p>
        </div>
      </section>
    </div>
  );
}

export default Classes;
