import React, { useState, useEffect } from "react";
import { Outlet } from "react-router-dom";
import NavBar from "../components/mainComponents/NavBar";
import Overlay from "../components/mainComponents/Overlay";
import SideBar from "../components/mainComponents/SideBar";
import "./MainLayout.scss";
import animations from "../utils/animations";
import { eventBus } from "../utils/reusableFunctions";
import TitleBody from "../components/atoms/TitleBody";
import Dialog from "../components/molecules/Dialog";

const MainLayout = (props) => {
  const [showOverlay, setShowOverlay] = useState(false);
  const [titleBodyInfo, setTitleBodyInfo] = useState({});
  useEffect(() => {
    eventBus.on("showHideOverlaySidebar", (action) => {
      setShowOverlay(() => action);
    });
    eventBus.on("updateTitleBody",(data)=>{
      // console.log(data);      
        setTitleBodyInfo(()=>data)  
    })
  }, []);

  return (
    <div id="mainlayout">
       
      <NavBar />
      <SideBar />
      
      <div id="belownavbar">
      <TitleBody
        leftBtn={titleBodyInfo.leftBtn}
        leftBtnStyle={titleBodyInfo.leftBtnStyle}
        leftBtnImg={titleBodyInfo.leftBtnImg}
        leftBtnAction={titleBodyInfo.leftBtnAction}
        leftBtnImgStyle={titleBodyInfo.leftBtnImgStyle}

        rightBtn={titleBodyInfo.rightBtn}
        rightBtnStyle={titleBodyInfo.rightBtnStyle}

        title={titleBodyInfo.title}
        titleStyle={titleBodyInfo.titleStyle}
      />
        <div id="bodycontent">
          <Overlay
          zIndex="2"
            event={{ onClick: () => eventBus.dispatch('showHideSideBar',{ allowedShow: false, allowedHide: true }) }}
            style={{...(showOverlay ? animations.fadeIn('var(--speed-transition-sidebar)') :
              animations.fadeOut('var(--speed-transition-sidebar)')),
              ...{height:'100%' }}}
            id="overlaybody"
          />
          <Outlet />
        </div>
      </div>
    </div>
  );
};

export default MainLayout;
