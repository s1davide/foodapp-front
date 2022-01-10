import React, { useEffect } from "react";
import { Outlet, useLocation } from "react-router-dom";
import NavBar from "../components/mainComponents/NavBar";
import SideBar from "../components/mainComponents/SideBar";
import "../styles/layouts/MainLayout.scss";
const MainLayout = () => {
  const history = useLocation();
 
  return (
    <div>
      <NavBar />
      <div id="below-navbar">
        <SideBar />
        <div id="body-content">
          
          <Outlet />
        </div>
      </div>
    </div>
  );
};

export default MainLayout;
