import React from "react";
import "../../styles/components/mainComponents/NavBar.scss";
import Btn from "../atoms/Btn";
import coolicon from "../../assets/img/coolicon.png";

const NavBar = (props) => {
  return (
    <div id="navbar">
      {/* Left Menu Btn */}
      <Btn
        ml="16px"
        onClick={() => alert("epa")}
        curHover="pointer"
        img={coolicon}
      />
    </div>
  );
};
export default NavBar;
