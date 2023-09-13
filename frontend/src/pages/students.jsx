import React from "react";
import { Link } from "react-router-dom";

function Students() {
  return (
    <>
      <div>
        <div className="mr-10vh ml-8vh">
          <div className="bg-#2375F0 rounded-2 w-1024px  h-133px">
            <div className="grid text-white pt-27px pl-48px gap-5vh">
              <h1>Manage Students</h1>
              <p>Let’s keep in track with your Institution Details.</p>
            </div>
          </div>
        </div>
        <section className="flex bg-#F8EFE2 py-10 w-1024px h-562px mr-10vh ml-8vh mt-7vh mb-10vh rounded-2">
          <div className="bg-white rounded-2 w-280px h-465px ml-45px shadow grid items-center justify-items-center">
            <img src="./images/image-16.jpeg" alt="img" />
            <p className="font-bold text-24px shadow-white">Create Students</p>
            <button className="bg-#2375F0 border-none rounded-2 w-101px h-53px">
              <Link to className="text-white" href="/">
                Create
              </Link>
            </button>
          </div>
          <div className="bg-white rounded-2 w-280px h-465px ml-40px shadow grid items-center justify-items-center">
            <img src="./images/image-14.jpeg" alt="img" />
            <p className="font-bold text-24px shadow-white">
              Update Students Info
            </p>
            <button className="bg-#2375F0 border-none rounded-2 w-101px h-53px">
              <Link to className="text-white" href="/">
                Update
              </Link>
            </button>
          </div>
          <div className="bg-white rounded-2 w-280px h-465px ml-40px shadow grid items-center justify-items-center">
            <img src="./images/image-15.jpeg" alt="img" />
            <p className="font-bold text-24px shadow-white">
              View Student Details
            </p>
            <button className="bg-#2375F0 border-none rounded-2 w-101px h-53px">
              <Link to className="text-white" href="/">
                View
              </Link>
            </button>
          </div>
        </section>
      </div>
    </>
  );
}

export default Students;
