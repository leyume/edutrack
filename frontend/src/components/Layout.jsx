import React, { useEffect } from "react";
import { useLocation, useNavigate } from "react-router";
import Header from "./Header";
import Footer from "./Footer";
import HeaderInternal from "./HeaderInternal";
import Sidebar from "./Sidebar";
import { auth, onAuthStateChanged } from "../config";

export default function Layout({ children }) {
  let location = useLocation();
  let navigate = useNavigate();
  let page_exceptions = ["/", "/signin", "/signup"];

  useEffect(() => {
    console.log("EFFFECCCTTTTTTT");
    if (page_exceptions.indexOf(location.pathname) < 0) loggedin();
  }, [location]);

  const loggedin = () => {
    onAuthStateChanged(auth, (user) => {
      if (user) {
        // const uid = user.uid;
        console.log({ user });
      } else {
        navigate("/signin");
      }
    });
  };

  return (
    <>
      {page_exceptions.indexOf(location.pathname) > -1 ? (
        <>
          <Header />
          {children}
        </>
      ) : (
        <>
          <HeaderInternal />
          <Sidebar />
          <main className="bg-white min-h-70vh ml-60">{children}</main>
        </>
      )}
      <Footer />
    </>
  );
}
