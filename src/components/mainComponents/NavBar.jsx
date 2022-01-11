import React from "react";
import "../../styles/components/mainComponents/NavBar.scss";
import Btn from "../atoms/Btn";
import coolicon from "../../assets/img/coolicon.png";
import { sel,eventBus } from "../../utils/reusableFunctions";
const NavBar = (props) => {
  return (
    <div id="navbar">
      {/* Left Menu Btn */}
      <Btn
        ml="16px"
        onClick={() => eventBus.dispatch('showHideSideBar','')}
        curHover="pointer"
        img={coolicon}
      />
    </div>
  );
};
export default NavBar;
