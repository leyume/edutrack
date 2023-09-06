import React from "react";

function Testimony() {
  return (
    <div className="bg-#E5E2EA text-center py-20 h-250">
      <h3 className="text-brand-blue text-5xl mb-10">Testimonials</h3>
      <p className="text-brand-pink text-4xl tracking-tight text-center">
        What our users say about us.
      </p>
      <div className="flex h-37%">
        <div className="rounded-10 w-30%  bg-#fff mt-5% ml-10 h-90%">
          <div className="text-1xl mb-30%">
            <div className="flex gap-8% ml-10 mt-5">
              <img src="/images/image 8.jpeg" alt="img" />
              <h4 className="mt-6 text-100% text-2xl">Fredrick Rosemary</h4>
            </div>
            <div className="flex">
              <img src="/images/icon.jpeg" alt="img" className="w-6 h-8 ml-2" />
              <p className="mt-5 leading-normal text-100%">
                Excepteur sint occaecat non proident, sunt in culpa qui officia
                deserunt mollit anim id est laborum. Duis aute irure dolor
              </p>
            </div>
            <div>
              <img
                src="/images/star-icon.jpeg"
                alt="img"
                className="mt-10 mr-45"
              />
            </div>
          </div>
        </div>
        <div className="rounded-10 w-30% bg-#fff mt-5% ml-10 h-90%">
          <div className="text-1xl mb-30%">
            <div className="flex gap-8% ml-10 mt-5">
              <img src="/images/image 9.jpeg" alt="img" />
              <h4 className="mt-6 text-100% text-2xl">Willson Micheal</h4>
            </div>
            <div className="flex">
              <img src="/images/icon.jpeg" alt="img" className="w-6 h-8 ml-2" />
              <p className="mt-5 leading-normal text-100%">
                Excepteur sint occaecat non proident, sunt in culpa qui officia
                deserunt mollit anim id est laborum. Duis aute irure dolor in
                reprehenderit in voluptate velit esse cillium dolore eu fugiat
                nulla pariatur
              </p>
            </div>
            <div>
              <img
                src="/images/star-icon.jpeg"
                alt="img"
                className="mt-5 mr-45"
              />
            </div>
          </div>
        </div>
        <div className="rounded-10 w-30% bg-#fff mt-5% ml-10 h-90%">
          <div className="text-1xl mb-30% mt-5">
            <div className="flex gap-8% ml-10">
              <img src="/images/image 10.jpeg" alt="img" />
              <h4 className="mt-6 text-100% text-2xl">Jackson Jennifer</h4>
            </div>
            <div className="flex">
              <img src="/images/icon.jpeg" alt="img" className="w-6 h-8 ml-2" />
              <p className="mt-5 leading-normal text-100%">
                Excepteur sint occaecat non proident, sunt in culpa qui officia
                deserunt mollit anim id est laborum. Duis aute irure dolor in
                reprehenderit in voluptate velit esse cillium dolore eu fugiat
                nulla pariatur
              </p>
            </div>
            <div>
              <img
                src="/images/star-icon.jpeg"
                alt="img"
                className="mt-5 mr-45"
              />
            </div>
          </div>
        </div>
      </div>
      <div className=" text-brand-pink text-4xl tracking-tight text-center mt-30">
        <p className="mb-15">We are trusted by</p>
        <div className="flex">
          <div className="bg-#fff w-95 h-40 rounded-10 shadow-md ml-15 pt-0.1">
            <div className="bg-#2375F0 w-18 h-18 rounded-15 ml-6 mt-10 flex gap-4 pl-3">
              <div>
                <img src="/images/hat.jpeg" alt="img" className="mt-2 pr-2" />
              </div>
              <div className="text-#16161B mt-4">
                <h1 className="mb-2">500+</h1>
                <p>Schools</p>
              </div>
            </div>
          </div>
          <div className="bg-#fff w-95 h-40 rounded-10 shadow-md ml-15 pt-0.1">
            <div className="bg-#2375F0; w-20 h-20 rounded-15 ml-1 mt-10 flex pl-4">
              <div>
                <img
                  src="/images/book-icon.jpeg"
                  alt="img"
                  className="mt-2 pr-2"
                />
              </div>
              <div className="text-#16161B mt-4">
                <h1 className="mb-2">15,000+</h1>
                <p>Teacher</p>
              </div>
            </div>
          </div>
          <div className="bg-#fff w-95 h-40 rounded-10 shadow-md ml-15 pt-0.1">
            <div className="bg-#2375F0; w-20 h-20 rounded-15 mt-10 flex pl-4">
              <div>
                <img
                  src="/images/group-icon.jpeg"
                  alt="img"
                  className="mt-2 pr-2 w-20"
                />
              </div>
              <div className="text-#16161B mt-4">
                <h1 className="mb-2">99,000+</h1>
                <p>Parent</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Testimony;
