import React from "react";
import "./vision.css";
import Five from "../../assets/image 5.png";
import Six from "../../assets/image 6.png";
import Seven from "../../assets/image 7.png";

function Vision() {
  return (
    <div className="vision">
      <div className="vision-header">
        <h1>
          What <span>Edu</span>Track Do!
        </h1>
        <p>
          Our comprehensive administrative management system provides schools,
          teachers and parents a flexible and efficiently streamline track
          operation over their school, students and children.
        </p>
      </div>
      <div className="vision-img-container">
        <div className="pic-1">
          <div className="site-txt">
            <h1 className="sch-ad-h">School Admin</h1>
            <p className="sch-ad-comment">
              Lorem ipsum dore helye sepum ipsum Lorem ipsum dore
            </p>
          </div>
          <div className="img-1">
            <img src={Five} alt="img" />
          </div>
          <div className="img-1">
            <img src={Six} alt="img" />
          </div>

          <div className="site-txt">
            <h1 className="teacher-h">Teachers</h1>
            <p className="teacher-comment">
              Lorem ipsum dore helye sepum <br /> ipsum Lorem ipsum dore
            </p>
          </div>
        </div>
        <div className="pic-2">
          <img src={Seven} alt="img" />
        </div>
        <svg
          className="one"
          xmlns="http://www.w3.org/2000/svg"
          width="278"
          height="41"
          viewBox="0 0 278 41"
          fill="none"
        >
          <path
            d="M0.73922 38.9306C111.939 -9.88373 175.094 -9.60352 277.22 36.6082"
            stroke="#F41E92"
            stroke-width="3"
          />
        </svg>
        <svg
          className="three"
          xmlns="http://www.w3.org/2000/svg"
          width="176"
          height="296"
          viewBox="0 0 176 296"
          fill="none"
        >
          <path
            d="M0.805758 288.041L16.3734 295.653L15.1656 278.374L0.805758 288.041ZM144.998 8.4087C145.073 12.8263 148.716 16.3509 153.133 16.281C157.551 16.2111 161.071 12.5732 160.996 8.15555C160.921 3.73792 157.278 0.213386 152.861 0.283289C148.443 0.353193 144.923 3.99106 144.998 8.4087ZM14.4713 288.603C61.8649 282.225 113.832 243.907 145.441 191.373C177.087 138.777 188.495 71.651 154.32 7.57752L151.674 8.98673C185.238 71.9162 174.109 137.905 142.87 189.824C111.593 241.805 60.3271 279.404 14.0675 285.63L14.4713 288.603Z"
            fill="#F41E92"
          />
        </svg>
        <svg
          className="two"
          xmlns="http://www.w3.org/2000/svg"
          width="165"
          height="278"
          viewBox="0 0 165 278"
          fill="none"
        >
          <path
            d="M164.583 271.277L148.523 277.743L150.935 260.595L164.583 271.277ZM25.0836 8.04737C25.159 12.465 21.6388 16.1029 17.2211 16.1728C12.8033 16.2427 9.16098 12.7182 9.08564 8.30052C9.0103 3.88288 12.5305 0.245011 16.9482 0.175107C21.366 0.105204 25.0083 3.62974 25.0836 8.04737ZM150.94 270.854C111.056 263.118 63.5035 236.274 32.7792 191.882C2.00624 147.419 -11.8194 85.4436 15.6703 7.67253L18.499 8.67535C-8.68187 85.5729 5.0415 146.536 35.2454 190.176C65.498 233.887 112.35 260.313 151.508 267.909L150.94 270.854Z"
            fill="#F41E92"
          />
        </svg>
        <div className="parent-div">
          <h1 className="parent-h">Parents</h1>
          <p className="parent-comment">
            Lorem ipsum dore helye sepum ipsum <br /> Lorem ipsum dore
          </p>
        </div>
      </div>
    </div>
  );
}

export default Vision;
