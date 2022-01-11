import React, { useEffect } from "react";
import { Outlet } from "react-router-dom";
import NavBar from "../components/mainComponents/NavBar";
import SideBar from "../components/mainComponents/SideBar";

import "../styles/layouts/MainLayout.scss";
const MainLayout = () => {

 
  return (
    <div>
      <NavBar />
      <div id="belownavbar">
        <SideBar />
        <div id="bodycontent">
          <Outlet />
        </div>
      </div>
    </div>
  );
};

export default MainLayout;
