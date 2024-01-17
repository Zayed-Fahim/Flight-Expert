import React from "react";
import HomeNavbar from "../Pages/Components/HomeNavbar";
import { Outlet } from "react-router-dom";

const Main = () => {
  return (
    <div>
      <HomeNavbar />
      <Outlet />
    </div>
  );
};

export default Main;
