import React from "react";
import { useState } from "react";

function Question() {
  const [expandedIndex, setExpandedIndex] = useState(-1);

  const FAQ = [
    {
      question: "What is EduTrack?",
      answer:
        "EduTrack is a comprehensive school management system designed to streamline and enhance the operations of educational institutions. It provides a one-stop solution for schools to efficiently manage various aspects of their daily activities. EduTrack offers features for teachers to easily access student information, record attendance, and manage class schedules. Parents and guardians can also benefit from EduTrack by accessing their child's records, including subjects, attendance, and even tracking the drop-off and pick-up of their children using QR codes. Additionally, schools can use EduTrack to improve communication with parents, making it a powerful tool for enhancing the overall educational experience.",
    },
    {
      question: "How can I register my school with EduTrack?",
      answer:
        "Registering your school with EduTrack is a straightforward process. Visit our website and click on the 'Sign Up' button. Fill in the required information, including your school's details, representative and contact information. Once your registration is complete, our support team will reach out to you to guide you through the setup process and provide any assistance you may need.",
    },
    {
      question: "Is EduTrack suitable for all types of educational institutions?",
      answer:
        "Yes, EduTrack is designed to cater to a wide range of educational institutions, including schools, colleges, and universities. Whether you run a small primary school or a large university, EduTrack's flexible features can be customized to meet your institution's specific needs.",
    },
    {
      question: " How secure is the data stored on EduTrack?",
      answer:
        "At EduTrack, we prioritize data security. We employ state-of-the-art security measures to protect all data stored on our platform. This includes encryption, regular security audits, and strict access controls. We also ensure compliance with data protection regulations to safeguard the privacy and security of your school's information.",
    },
    {
      question: "Can anybody have unauthorised access to any wards information",
      answer:
        "No, unauthorized access to student information is strictly prevented within the EduTrack platform. We prioritize the security and privacy of student data. Access to student information is typically restricted to authorized users such as teachers, school administrators, and parents or guardians with appropriate permissions.",
    },
  ];

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
    <section id="questions" className="grid grid-cols-1 place-items-center w-full pt-42 pb-20">
      <h1 className="text-brand-blue text-4xl text-center">Frequently Asked Questions.</h1>
      <p className="text-brand-pink text-2xl text-center mt-2">Below are some of the frequently asked questions by our users.</p>

      <section className="w-50% my-5">
        {FAQ.map((faq, index) => (
          <div className="bg-brand-gray p-5 rounded-3 mb-4" key={index}>
            <div className="flex items-center justify-between text-5">
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
                (expandedIndex === index ? "text-4 pt-2" : "text-0 pt-0")
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
