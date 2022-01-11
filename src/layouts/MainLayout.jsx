import React from "react";
import { Outlet } from "react-router-dom";
import NavBar from "../components/mainComponents/NavBar";
import Overlay from "../components/mainComponents/Overlay";
import SideBar from "../components/mainComponents/SideBar";

import "../styles/layouts/MainLayout.scss";
const MainLayout = () => {
  return (
    <div id="mainlayout">
      <NavBar />
      <div id="belownavbar">
        <SideBar />
        <div id="bodycontent">
          <Overlay/>
          <Outlet />
        </div>
      </div>
    </div>
  );
};

export default MainLayout;
