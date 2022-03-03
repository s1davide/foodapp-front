import React, { useState, useEffect } from "react";
import { Outlet } from "react-router-dom";
import NavBar from "Components/mainComponents/NavBar";
import Overlay from "Components/mainComponents/Overlay";
import SideBar from "Components/mainComponents/SideBar";
import "./MainLayout.scss";
import animations from "Utils/animations";
import { eventBus } from "Utils/reusableFunctions";
import Notification from "components/molecules/Notification";

const MainLayout = (props) => {
  const [showOverlay, setShowOverlay] = useState(false);
  useEffect(() => {


    eventBus.on("showOverlay", (action) => {
      setShowOverlay((currentAction) => action !== currentAction ? action : currentAction);
    });

  }, []);

  return (
    <div id="mainlayout">

      <NavBar />
      <SideBar />

      <div id="belownavbar">
        {/* <TitleBody
        leftBtn={titleBodyInfo.leftBtn}
        leftBtnStyle={titleBodyInfo.leftBtnStyle}
        leftBtnImg={titleBodyInfo.leftBtnImg}
        leftBtnAction={titleBodyInfo.leftBtnAction}
        leftBtnImgStyle={titleBodyInfo.leftBtnImgStyle}
        rightBtn={titleBodyInfo.rightBtn}
        rightBtnStyle={titleBodyInfo.rightBtnStyle}
        title={titleBodyInfo.title}
        titleStyle={titleBodyInfo.titleStyle}
      /> */}
        <div id="bodycontent">
          <Notification></Notification>


          <Overlay
            zIndex="6"
            // event={{ onClick: () => eventBus.dispatch('showHideSideBar',{ allowedShow: false, allowedHide: true }) }}
            style={{
              ...(showOverlay ? animations.fadeIn('var(--speed-transition-sidebar)') :
                animations.fadeOut('var(--speed-transition-sidebar)')),
              ...{ height: '100%' }
            }}
            id="overlaybody"
          />
          <Outlet />
        </div>
      </div>
    </div>
  );
};

export default MainLayout;
