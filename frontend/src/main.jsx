import React, { Suspense } from "react";
import ReactDOM from "react-dom/client";
import App from "./App.jsx";
import "virtual:uno.css";
import "./assets/main.scss";

import { BrowserRouter as Router, useRoutes } from "react-router-dom";

import routes from "~react-pages";

const App = () => {
  return <Suspense fallback={<p>Loading...</p>}>{useRoutes(routes)}</Suspense>;
};

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <Router>
      <App />
      {/* <Signin /> */}
    </Router>
  </React.StrictMode>
);
