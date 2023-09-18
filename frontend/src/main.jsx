import React, { Suspense } from "react";
import ReactDOM from "react-dom/client";
import "virtual:uno.css";
import "./assets/main.scss";

import { BrowserRouter as Router, useRoutes } from "react-router-dom";

import routes from "~react-pages";
import Layout from "./components/Layout";

import { QueryClient, QueryClientProvider } from "@tanstack/react-query";

const queryClient = new QueryClient({
  defaultOptions: {
    queries: {
      refetchOnWindowFocus: false,
      // refetchOnmount: false,
      // refetchOnReconnect: false,
      // retry: false,
      staleTime: 1000 * 10 * 60,
    },
  },
});

const App = () => {
  return <Suspense fallback={<p>Loading...</p>}>{useRoutes(routes)}</Suspense>;
};

ReactDOM.createRoot(document.getElementById("root")).render(
  <QueryClientProvider client={queryClient}>
    <Router>
      <Layout>
        <App />
      </Layout>
    </Router>
  </QueryClientProvider>
);
{
  /* <React.StrictMode></React.StrictMode> */
}
