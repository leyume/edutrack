import React, { useState, useEffect } from "react";
import testimonials from "./TestimonyData";

function Testimony() {
  const [currentTestimonialIndex, setCurrentTestimonialIndex] = useState(0);

  const handleLeftArrowClick = () => {
    setCurrentTestimonialIndex(
      (currentTestimonialIndex - 1 + testimonials.length) % testimonials.length
    );
  };

  const handleRightArrowClick = () => {
    setCurrentTestimonialIndex((currentTestimonialIndex + 1) % testimonials.length);
  };

// Setting the width of the testimonial container based on the screen width
const containerStyle = {
  width: (window.innerWidth || document.documentElement.clientWidth || document.body.clientWidth) <= 760
    ? `${(testimonials.length + 0.1) * (100 / 2)}%`
    : `${(testimonials.length + 0.1) * (100 / 4)}%`,
  transform: `translateX(-${(currentTestimonialIndex / testimonials.length) * 100}%)`,
  transition: "transform 0.5s ease-in-out",
};
  
   return (
    <section id="review" className="bg-brand-gray pt-25 pb-15 relative px-[5%] grid grid-cols-1">
      <h3 className="text-brand-blue text-center text-4xl md:text-5xl mb-4">Testimonials</h3>
      <p className="text-brand-pink text-center text-lg md:text-2xl tracking-tight text-center">
        What our users say about us.
      </p>

      <section className="overflow-hidden w-full my-5 py-5">
        <div className="flex gap-2 md:gap-4" style={containerStyle}>
          {testimonials.map((testimonial, index) => (
            <div
              key={index}
              className="rounded-5 bg-white p-2 md:p-4 min-h-50 shadow-md"
              style={{ flex: `0 0 ${100 / testimonials.length}%` }}
            >
              <div className="flex items-center mb-3">
                <img src={testimonial.img} alt="img" className="w-8 md:w-13" />
                <h4 className="text-sm lg:text-2xl ml-1 md:ml-5">{testimonial.name}</h4>
              </div>

              <div className="flex mb-3 w-full">
                <img src="/images/icon.jpeg" alt="img" className="w-4 md:w-8 h-4 md:h-8 mr-1" />
                <p className="text-xs text-sm text-left ml-3b w-full">{testimonial.text}</p>
              </div>

              <div className="flex items-center ml-4 md:ml-10 text-2 md:text-5 text-brand-pink">
                <span className="i-tabler-star-filled" />
                <span className="i-tabler-star-filled" />
                <span className="i-tabler-star-filled" />
                <span className="i-tabler-star-filled" />
                <span className="i-tabler-star-half-filled" />
              </div>
            </div>
          ))}
        </div>
      </section>
      <section className="flex items-center mx-auto text-7 md:text-10 text-brand-pink grid gap-8 mb-20 md:mb-60">
        <span
          className="i-tabler-arrow-big-left-filled cursor-pointer"
          onClick={handleLeftArrowClick}
        />
        <span
          className="i-tabler-arrow-big-right-filled cursor-pointer"
          onClick={handleRightArrowClick}
        />
      </section>

      <div className="w-full px-[5%] lg:px-20 xl:px-50 py-5 md:py-10 grid grid-cols-1 place-items-center gap-4 text-center relative sm:absolute bottom-auto sm:bottom--30">
        <h3 className="text-2xl md:text-3xl mb-5 text-brand-pink">We are trusted by</h3>
        <div className="grid grid-cols-1 sm:grid-cols-3 gap-6 text-black text-center p-5">
          <div className="bg-white shadow-md rounded-5 p-5 md:p-10 grid gap-4 grid-cols-1 place-items-center">
            <div className="text-2xl md:text-3xl flex items-center gap-4">
              <span className="i-tabler-school text-brand-blue text-2xl md:text-4xl lg:text-5xl" />{" "}
              <h1>500+</h1>
            </div>
            <p className="text-4 md:text-5">Schools</p>
          </div>

          <div className="bg-white shadow-md rounded-5 p-5 md:p-10 grid gap-4 grid-cols-1 place-items-center">
            <div className="text-2xl md:text-3xl flex items-center gap-4">
              <span className="i-tabler-book text-brand-blue text-3xl md:text-4xl lg:text-5xl" />{" "}
              <h1>1500+</h1>
            </div>
            <p className="text-4 md:text-5">Teachers</p>
          </div>

          <div className="bg-white shadow-md rounded-5 p-5 md:p-10 grid gap-4 grid-cols-1 place-items-center">
            <div className="text-2xl md:text-3xl flex items-center gap-4">
              <span className="i-tabler-user-circle text-brand-blue text-3xl md:text-4xl lg:text-5xl" />{" "}
              <h1>99,000</h1>
            </div>
            <p className="text-4 md:text-5">Guardians</p>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Testimony;