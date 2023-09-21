import React, { useState, useEffect } from "react";

function Testimony() {
  const testimonials = [
    {
      name: "Fredrick Rosemary",
      text: "I highly recommend EduTrack to all schools. It's intuitive, and the support team is fantastic. Our parents are thrilled with the system.",
      img: "/images/image-8.jpeg",
    },
    {
      name: "Willson Micheal",
      text: "As a parent, EduTrack gives me peace of mind knowing that I can easily access my child's records and attendance. It's a game-changer.",
      img: "/images/image-9.jpeg",
    },
    {
      name: "Jackson Jennifer",
      text: "I've been using EduTrack for a year now, and I'm amazed at how much it streamlines our school operations. The QR code pickup feature is a lifesaver!",
      img: "/images/image-10.jpeg",
    },
    
    {
      name: "Jackson Jennifer",
      text: "EduTrack has improved our school's communication with parents and guardians. The feedback we've received from them has been overwhelmingly positive.",
      img: "/images/image-10.jpeg",
    },
    {
      name: "Jackson Jennifer",
      text: "EduTrack is the best school management system I've ever used. It's made our administrative tasks so much easier and more efficient.",
      img: "/images/image-10.jpeg",
    },
    {
      name: "Jackson Jennifer",
      text: "EduTrack has revolutionized the way we manage our school. It's incredibly user-friendly, and our teachers love the attendance management feature.",
      img: "/images/image-10.jpeg",
    },
    
  ];

   return (
    <section id="review" className="bg-brand-gray pt-25 pb-15 relative px-15 grid grid-cols-1">
      <h3 className="text-brand-blue text-center text-5xl mb-4">Testimonials</h3>
      <p className="text-brand-pink text-center text-2xl tracking-tight text-center">
        What our users say about us.
      </p>

      <section className="overflow-hidden w-full my-5 py-5">
        <div className="flex items-center gap-4 w-180% ">
          {testimonials.map((testimonial, index) => (
            <div
              key={index}
              className="rounded-5 bg-white p-5 h-60 w-1/3 shadow-md"
            >
              <div className="flex items-center mb-3">
                <img src={testimonial.img} alt="img" className="w-13" />
                <h4 className="text-2xl ml-5">{testimonial.name}</h4>
              </div>

              <div className="flex mb-3">
                <img src="/images/icon.jpeg" alt="img" className="w-6 h-8 ml-2" />
                <p className="text-left ml-3">{testimonial.text}</p>
              </div>

              <div className="flex items-center ml-10 text-5 text-brand-pink">
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
      <section className="flex items-center mx-auto text-10 text-brand-pink grid gap-8 mb-40">
        <span
          className="i-tabler-arrow-big-left-filled cursor-pointer"
        />
        <span
          className="i-tabler-arrow-big-right-filled cursor-pointer"
        />
      </section>

      <div className="px-50 py-10 grid grid-cols-1 place-items-center gap-4 text-center absolute bottom--30 left-20">
        <h3 className="text-3xl mb-5 text-brand-pink">We are trusted by</h3>
        <div className="grid grid-cols-3 gap-6 text-black text-center">
          <div className="bg-white shadow-md rounded-5 p-10 grid gap-4 grid-cols-1 place-items-center">
            <div className="text-3xl flex items-center gap-4">
              <span className="i-tabler-school text-brand-blue text-5xl" />{" "}
              <h1>500+</h1>
            </div>
            <p className="text-6">Schools</p>
          </div>

          <div className="bg-white shadow-md rounded-5 p-10 grid gap-4 grid-cols-1 place-items-center">
            <div className="text-3xl flex items-center gap-4">
              <span className="i-tabler-book text-brand-blue text-5xl" />{" "}
              <h1>1500+</h1>
            </div>
            <p className="text-6">Teachers</p>
          </div>

          <div className="bg-white shadow-md rounded-5 p-10 grid gap-4 grid-cols-1 place-items-center">
            <div className="text-3xl flex items-center gap-4">
              <span className="i-tabler-user-circle text-brand-blue text-5xl" />{" "}
              <h1>99,000</h1>
            </div>
            <p className="text-6">Guardians</p>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Testimony;