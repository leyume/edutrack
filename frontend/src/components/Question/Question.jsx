import React from "react";

function Question() {
  return (
    <div id="questions" className="w-full h-full flex-shrink-0 pt-30 pb-10">
      <div className="text-center">
        <h1 className="text-brand-blue text-15 text-center">
          Frequently Asked Questions.
        </h1>
        <p className="text-brand-pink text-10 text-center mt-2">
          Below are some of the frequently asked question by our users.
        </p>
      </div>
      <div className="h-20 justify-center items-center rounded-6 bg-#e6e4eb mx-80 mt-10">
        <div className="flex gap-66%">
          <p className="mt-8 ml-10">What is EduTrack?</p>
          <a href="/">
            <p className="text-brand-pink text-6 mt-6">&#8744;</p>
          </a>
        </div>
      </div>
      <div className="h-20 justify-center items-center rounded-6 bg-#e6e4eb mx-80 mt-10">
        <div className="flex gap-56%">
          <p className="mt-8 ml-10">How do I register my school?</p>
          <a href="/">
            <p className="text-brand-pink text-6 mt-6">&#8744;</p>
          </a>
        </div>
      </div>
      <div className="h-20 justify-center items-center rounded-6 bg-#e6e4eb mx-80 mt-10">
        <div className="flex gap-24%">
          <p className="mt-8 ml-10">
            Can parents have access to their children academic information?
          </p>
          <a href="/">
            <p className="text-brand-pink text-6 mt-6">&#8744;</p>
          </a>
        </div>
      </div>
      <div className="h-20 justify-center items-center rounded-6 bg-#e6e4eb mx-80 mt-10">
        <div className="flex gap-59%">
          <p className="mt-8 ml-10">How can a parent register?</p>
          <a href="/">
            <p className="text-brand-pink text-6 mt-6">&#8744;</p>
          </a>
        </div>
      </div>
      <div className="h-20 justify-center items-center rounded-6 bg-#e6e4eb mx-80 mt-10">
        <div className="flex gap-35%">
          <p className="mt-8 ml-10">
            Can anybody have access to any student infomation?
          </p>
          <a href="/">
            <p className="text-brand-pink text-6 mt-6">&#8744;</p>
          </a>
        </div>
      </div>
      <div className="h-20 justify-center items-center rounded-6 bg-#e6e4eb mx-80 mt-10">
        <div className="flex gap-29%">
          <p className="mt-8 ml-10">
            Can I download my child academic report from EduTrack?
          </p>
          <a href="/">
            <p className="text-brand-pink text-6 mt-6">&#8744;</p>
          </a>
        </div>
      </div>
      <a href="/" className="ml-90%">
        <img src="./images/arrow-up.jpeg" alt="img" className="h-9 mt-10" />
      </a>
    </div>
  );
}

export default Question;
