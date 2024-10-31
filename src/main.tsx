import * as React from "react";
import * as ReactDOM from "react-dom/client";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import RootPage from "./routes/root";
import "./index.css";
import Layout from "./routes/layout";
import { Provider } from "react-redux";
import { store } from "./lib/store";

const router = createBrowserRouter([
  {
    path: "/",
    element: (
      <Layout>
        <RootPage />
      </Layout>
    ),
  },
]);

const root = ReactDOM.createRoot(
  document.getElementById("root") as HTMLElement
);

root.render(
  <React.StrictMode>
    <Provider store={store}>
      <RouterProvider router={router} />
    </Provider>
  </React.StrictMode>
);
