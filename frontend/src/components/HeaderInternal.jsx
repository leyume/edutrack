import React from "react";
import { Link, useNavigate } from "react-router-dom";
import { auth, signOut } from "../config";

export default function HeaderInternal() {
  let navigate = useNavigate();

  const logout = async () => {
    await signOut(auth);
    await localStorage.removeItem("token");
    navigate("/");
  };

  return (
    <header className="flex items-center justify-end gap-20px mt-20px mr-8 mb-6">
      <h3>St. Charles Royal Academy</h3>
      <img src="/images/image-11.jpeg" alt="img" />
      <a onClick={logout}>
        <img src="/images/vector-1.jpeg" alt="img" />
      </a>
    </header>
  );
}
