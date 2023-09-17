import React from "react";
import { Link, useParams } from "react-router-dom";

function Teacher() {
  let { id } = useParams();

  return (
    <>
      <h1>Teacher ID: {id}</h1>
    </>
  );
}

export default Teacher;
