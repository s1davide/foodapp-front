import React from "react";
import { Outlet } from "react-router-dom";
import NavBar from "../components/mainComponents/NavBar";
import SideBar from "../components/mainComponents/SideBar";

import "../styles/layouts/MainLayout.scss";
const MainLayout = () => {
  return (
    <div>
      <NavBar />
      <div id="below-navbar">
        <SideBar />
        <Outlet />
      </div>
    </div>
  );
};

export default MainLayout;
