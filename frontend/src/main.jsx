import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App.jsx";
import "./index.css";
import { RouterProvider, createBrowserRouter } from "react-router-dom";
import Registration1 from "./pages/Registration1.jsx";
import Registration2 from "./pages/Registration2.jsx";
import Registration3 from "./pages/Registration3.jsx";

const router = createBrowserRouter([
  { path: "/", element: <App /> },
  { path: "/registrationBasic", element: <Registration1 /> },
  { path: "/registrationExplorer", element: <Registration2 /> },
  { path: "/registrationEnthusiast", element: <Registration3 /> },
]);

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
);
