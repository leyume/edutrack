import React from "react";
import { useLocation } from "react-router";
import Header from "./Header";
import Footer from "./Footer";
import HeaderInternal from "./HeaderInternal";
import Sidebar from "./Sidebar";

export default function Layout({ children }) {
  let location = useLocation();
  let page_exceptions = ["/", "/signin", "/signup"];

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
