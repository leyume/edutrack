import React from "react";
import { useState } from "react";
import FAQ from "./FaqData";

function Question() {
  const [expandedIndex, setExpandedIndex] = useState(-1);

  const toggleQuestion = (index) => {
    if (expandedIndex === index) {
      // Clicking on the currently expanded question should close it.
      setExpandedIndex(-1);
    } else {
      // Clicking on a different question should expand it.
      setExpandedIndex(index);
    }
  };

  return (
    <section id="questions" className="grid grid-cols-1 place-items-center w-full pt-24 md:pt-42 pb-20">
      <h1 className="text-brand-blue text-3xl md:text-4xl text-center w-90%">Frequently Asked Questions.</h1>
      <p className="text-brand-pink text-lg md:text-2xl text-center mt-2 w-90%">Below are some of the frequently asked questions by our users.</p>

      <section className="w-90% md:w-50% my-5">
        {FAQ.map((faq, index) => (
          <div className="bg-brand-gray p-5 rounded-3 mb-4" key={index}>
            <div className="flex items-center justify-between text-4 md:text-5">
              <p>{faq.question}</p>
              <span
                className={`text-3xl text-brand-pink cursor-pointer ${
                  expandedIndex === index ? "i-tabler-arrow-badge-up-filled" : "i-tabler-arrow-badge-down-filled"
                }`}
                onClick={() => toggleQuestion(index)}
              />
            </div>
            {/* {expandedIndex === index && <p className="text-4 leading-normal text-justify pt-2 text-gray-800">{faq.answer}</p>} */}
            <p
              className={
                "leading-normal text-justify text-gray-800 overflow-hidden transition-all duration-500 " +
                (expandedIndex === index ? "text-3 md:text-4 pt-2" : "text-0 pt-0")
              }
            >
              {faq.answer}
            </p>
          </div>
        ))}
      </section>
    </section>
  );
}

export default Question;
