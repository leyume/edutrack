import React from "react";
import { Link } from "react-router-dom";
import PageLabel from "~/components/PageLabel";

export default function Profile() {
  return (
    <div className="px-6">
      <PageLabel
        title="Profile"
        details="Let’s keep in track with your Institution Details."
      />

      <section className="grid grid-cols-2 gap-6 mt-6 mb-12">
        <div className="grid items-center justify-items-center bg-brand-litepink mb-50px rounded-2">
          <div className="flex items-center justify-between gap-40vh mt-10vh">
            <h3>Representative</h3>
            <Link to="/">
              <img src="/images/writing-icon1.jpeg" alt="img" />
            </Link>
          </div>
          <div className="grid items-center justify-items-center ___ gap-3vh mb-10vh">
            <img className="rounded-8" src="/images/image-11.jpeg" alt="img" />
            <h1 className="font-bold">Mrs. Tabitha Willson</h1>
            <p>tabitawillson@gmail.com</p>
          </div>
        </div>
        <div className="grid bg-brand-blue mb-200px rounded-2">
          <div className="flex items-start justify-between pt-85px pl-5vh pr-5vh">
            <h1 className="font-bold text-15 text-white pr-10vh">
              Hello Tabitha,
            </h1>
            <Link to="/">
              <img src="/images/writing-icon.jpeg" alt="img" />
            </Link>
          </div>
          <h4 className="text-white font-bold text-28px pl-5vh">
            St. Charles Royal Academy
          </h4>
          <div>
            <p className="font-16px pl-5vh text-#FFFFFF80">
              Plot 165 Downtown Toronto Canada.
            </p>
            <p className="text-white pl-5vh">stcharlesroyalacademy@gmail.com</p>
          </div>
          <p className="text-white font-16px pl-5vh">
            Let’s keep in track with your Institution Details
          </p>
        </div>
      </section>
    </div>
  );
}
