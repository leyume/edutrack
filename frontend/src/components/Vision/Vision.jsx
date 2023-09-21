import React from "react";

function Vision() {
  return (
    <section id="services" className="bg-icons text-center pt-25 pb-15 px-15">
      <div className="grid grid-cols-1 place-items-center gap-4">
        <h1 className="text-5xl text-brand-blue">
          What <span className="text-brand-pink">Edu</span>Track Do!
        </h1>
        <p className="w-55% leading-normal text-4">
          Our comprehensive administrative management system provides schools,
          teachers and parents a flexible and efficiently streamline track
          operation over their school, students and children.
        </p>
      </div>
      <div className="mt-10 w-full">
        <div className="flex gap-2">
          <div className="mt-10 ml-15 text-left">
            <h1 className="text-3xl text-brand-blue">School Admin</h1>
            <div className="mx-auto mt-2 leading-normal grid gap-2">
              <p>Manage School Data. </p>
              <p>Track Teachers Attendance.</p>
              <p>Track Student Attendance.</p>
              <p>Generate School Reports.</p>
              <p>Manage Teachers and Guardians Access.</p>
            </div>
          </div>
          <img src="/images/tracking.png" alt="img" className="w-95 mx-20"/>
          <div className="mt-10 mr-12 text-right">
            <h1 className="text-3xl text-brand-blue">Teachers</h1>
            <div className="mx-auto mt-2 leading-normal grid gap-2">
              <p>Manage Students Information.</p>
              <p>Take Attendance.</p>
              <p>Generate Students Reports.</p>
              <p>View Students Progress.</p>
              <p>Communicate with Guardians</p>
            </div>
          </div>
        </div>
        <div className="mx-auto mt-6">
            <h1 className="text-3xl text-brand-blue mt-6">Guardians</h1>
            <div className="mx-auto mt-2 leading-normal grid gap-2">
              <p>Track Wards Attendance.</p>
              <p>Assign Drop and Pickup.</p>
              <p>Assign more Guradians.</p>
              <p>Access Wards Records.</p>
              <p>Ensure Wards Safety.</p>           
            </div>
        </div>
      </div>
    </section>
  );
}

export default Vision;
