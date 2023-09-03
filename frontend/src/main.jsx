import React from "react";
import ReactDOM from "react-dom/client";
// import App from "./App.jsx";
import "virtual:uno.css";
import "./assets/main.scss";
import Signin from "./Signin.jsx";

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    {/* <App /> */}
    <Signin />
  </React.StrictMode>
);
