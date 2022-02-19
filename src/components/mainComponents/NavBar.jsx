import React from "react";
import "./NavBar.scss";
import Btn from "../atoms/Btn";
import buttonMenu from "../../assets/img/buttonMenu.svg";
import { eventBus } from "../../utils/reusableFunctions";
const NavBar = (props) => {
  return (
    <div id="navbar">
      {/* Left Menu Btn */}
      <Btn
        ml="16px"
        p='8px'
        onClick={() => eventBus.dispatch('showHideSideBar')}
        curHover="pointer"
        img={buttonMenu}
        imgStyle={{width:"20px"}}
        style={{color:"#000000"}}
      />
      <div id="titlenavbar">PIZZERIA DON REMOLO</div>
    </div>
  );
};
export default NavBar;
