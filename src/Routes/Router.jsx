import React from "react";
import { RouterProvider, createBrowserRouter } from "react-router-dom";
import Main from "../Layout/Main";
import Home from "../Pages/Components/Home";

const Router = () => {
  const router = createBrowserRouter([
    {
      path: "/",
      element: <Main />,
      children: [
        {
          path: "/",
          element: <Home />,
        },
      ],
    },
  ]);
  return <RouterProvider router={router} />;
};

export default Router;
