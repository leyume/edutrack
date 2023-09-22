import React from "react";

export default function PageLabel({ title, details, className = "" }) {
  return (
    <section className={"bg-brand-blue rounded-2 text-white py-6 px-8 leading-8 " + className}>
      <h1>{title}</h1>
      <p>{details}</p>
    </section>
  );
}
