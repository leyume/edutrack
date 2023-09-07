import React from "react";

function Vision() {
  return (
    <section className="bg-icons text-center py-20">
      <div className="vision-header">
        <h1 className="text-pxl text-brand-blue">
          What <span className="text-brand-pink">Edu</span>Track Do!
        </h1>
        <p className="w-55% mx-auto mt-8 leading-normal">
          Our comprehensive administrative management system provides schools,
          teachers and parents a flexible and efficiently streamline track
          operation over their school, students and children.
        </p>
      </div>
      <div className="vision-img-container">
        <div className="flex gap-2 mt-15">
          <div className="mt-20 ml-10">
            <h1 className="text-5xl text-brand-blue">School Admin</h1>
            <p className="w-55% mx-auto mt-4 leading-normal">
              Lorem ipsum dore helye sepum ipsum Lorem ipsum dore
            </p>
          </div>
          <img src="/images/tracking.png" alt="img" />
          <div className="mt-20 mr-12">
            <h1 className="text-5xl text-brand-blue">Teachers</h1>
            <p className="w-55% mx-auto mt-6 leading-normal">
              Lorem ipsum dore helye sepum ipsum Lorem ipsum dore
            </p>
          </div>
        </div>
        <div className="mx-auto">
          <div className="parent-div">
            <h1 className="text-5xl text-brand-blue">Parents</h1>
            <p className="w-55% mx-auto mt-8 leading-normal">
              Lorem ipsum dore helye sepum ipsum Lorem ipsum dore
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Vision;
