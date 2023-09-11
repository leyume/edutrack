import React from "react";
import { Link } from "react-router-dom";

export default function HeaderInternal() {
  return (
    <header className="flex items-center justify-end gap-20px mt-20px mr-8 mb-6">
      <h3>St. Charles Royal Academy</h3>
      <img src="./images/image 11.jpeg" alt="img" />
      <a href="/">
        <img src="./images/vector 1.jpeg" alt="img" />
      </a>
    </header>
  );
}
