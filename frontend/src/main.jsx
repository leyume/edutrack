import React, { Suspense } from "react";
import ReactDOM from "react-dom/client";
import "virtual:uno.css";
import "./assets/main.scss";

import { BrowserRouter as Router, useRoutes } from "react-router-dom";

import routes from "~react-pages";
import Layout from "./components/Layout";

const App = () => {
  return <Suspense fallback={<p>Loading...</p>}>{useRoutes(routes)}</Suspense>;
};

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <Router>
      <Layout>
        <App />
      </Layout>
    </Router>
  </React.StrictMode>
);
