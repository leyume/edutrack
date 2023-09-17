import React from "react";
import { Link } from "react-router-dom";

function Profile() {
  return (
    <>
      <div className="mr-5vh ml-8vh">
        <div className="bg-#2375F0 rounded-2 w-100%  h-133px">
          <div className="grid text-white pt-2vh pl-48px gap-45%">
            <h1 className="font-bold">Profile</h1>
            <p>Let’s keep in track with your Institution Details.</p>
          </div>
        </div>
      </div>
      <section className="flex gap-5vh">
        <div className="grid items-center justify-items-center bg-#F41E922B w-45% h-509px mb-10vh mt-8vh ml-8vh rounded-2">
          <div className="flex items-center gap-40vh">
            <h3>Representative</h3>
            <Link to="/">
              <img src="/images/writing-icon1.jpeg" alt="img" />
            </Link>
          </div>
          <div className="grid items-center justify-items-center ___ gap-3vh">
            <img className="rounded-8" src="/images/image-11.jpeg" alt="img" />
            <h1 className="font-bold">Mrs. Tabitha Willson</h1>
            <p>tabitawillson@gmail.com</p>
          </div>
        </div>
        <div className="grid bg-#2375F0 w-45% h-509px mt-8vh rounded-2">
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
    </>
  );
}

export default Profile;
