import React from "react";
import { Link, useParams } from "react-router-dom";

function Student() {
  let { id } = useParams();

  return (
    <>
      <h1>Student ID: {id}</h1>
    </>
  );
}

export default Student;
