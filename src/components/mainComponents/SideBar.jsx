import React, { useEffect, useState } from "react";
import "../../styles/components/mainComponents/SideBar.scss";
import {
  FaHome,
  FaInfoCircle,
  FaInstagram,
  FaMapMarkerAlt,
} from "react-icons/fa";
import {
  eventBus,
  updateCssVar,
  getCssVar,
} from "../../utils/reusableFunctions";

const SideBar = () => {
  const [visible, setVisible] = useState(true);

  useEffect(() => {
    eventBus.on("showHideSideBar", () => {
      setVisible((currentVisible) =>
        currentVisible
          ? updateCssVar("--opacity-items", 0) |
            updateCssVar("--width-sidebar", 0 + "px") |
            false
          : updateCssVar("--opacity-items", 1) |
            updateCssVar("--width-sidebar", getCssVar("--width-sidebar-base")) |
            true
      );
    });
  }, []);

  return (
    <div id="sidebar" className={visible ? "" : "sidebar-hide"}>
      <div className="menuitem">
        <FaHome className="iconmenu" />
        <a href="#">Inicio</a>
      </div>
      <div className="menuitem">
        <FaInfoCircle className="iconmenu" />
        <a href="#">Información</a>
      </div>
      <div className="menuitem">
        <FaMapMarkerAlt className="iconmenu" />
        <a href="#">Ubicación</a>
      </div>
      <div className="menuitem">
        <FaInstagram className="iconmenu" />
        <a href="#">Instagram</a>
      </div>
    </div>
  );
};

export default SideBar;
