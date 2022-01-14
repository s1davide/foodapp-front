import React, { useState, useEffect } from "react";
import { Outlet } from "react-router-dom";
import NavBar from "../components/mainComponents/NavBar";
import Overlay from "../components/mainComponents/Overlay";
import SideBar from "../components/mainComponents/SideBar";
import "../styles/layouts/MainLayout.scss";
import animations from "../utils/animations";
import { eventBus } from "../utils/reusableFunctions";

const MainLayout = () => {
  const [showOverlay, setShowOverlay] = useState(false);
  useEffect(() => {
    eventBus.on("showHideOverlaySidebar", (action) => {
      setShowOverlay(() => action);
    });
  }, []);
 
  return (
    <div id="mainlayout">
      <NavBar />
      <div id="belownavbar">
        <SideBar />
        <div id="bodycontent">
          <Overlay
            event={{ onClick: ()=>eventBus.dispatch('showHideSideBar') }}
            style={showOverlay ? animations.fadeIn : animations.fadeOut}
            id="overlaybody"
          />
          <Outlet />
        </div>
      </div>
    </div>
  );
};

export default MainLayout;
