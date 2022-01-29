import React, { useEffect, useState } from "react";
import "./SideBar.scss";
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
import { Link } from "react-router-dom";

const SideBar = () => {
  const [visible, setVisible] = useState(false);
  /**
   * Show or hide sidebar
   * @param {boolean} action
   * @param {boolean} current
   */
  const actionSideBar = (action) => {
    return (
      (() => {
        setTimeout(() => {
          eventBus.dispatch("showHideOverlaySidebar", action);
        }, 1);
      })() |
      (action
        ? updateCssVar("--opacity-items", 1) |
        updateCssVar("--width-sidebar", getCssVar("--width-sidebar-base")) |
        updateCssVar("--min-width-item", "var(--min-width-item-base)") |
        updateCssVar("--item-transition-duration", "0ms") |
        action
        : updateCssVar("--opacity-items", 0) |
        updateCssVar("--width-sidebar", 0 + "px") |
        updateCssVar(
          "--item-transition-duration",
          "var(--speed-transition-sidebar)"
        ) |
        (() => {
          setTimeout(
            () =>
              getCssVar("--width-sidebar") !==
                getCssVar("--width-sidebar-base")
                ? updateCssVar("--min-width-item", "0px")
                : action,
            getCssVar("--speed-transition-sidebar").replace("ms", "")
          );
        })() |
        action)
    );
  };
  useEffect(() => {
    actionSideBar(false);
    eventBus.on("showHideSideBar", (condition) => {
     
      setVisible((currentVisible) =>
        ((c) => c.allowedShow && !currentVisible ||
          c.allowedHide && currentVisible)
          (condition ? condition : { allowedShow: true, allowedHide: true }) ?
          currentVisible ? actionSideBar(false) : actionSideBar(true)
         
          : (() => { })());
    });
  }, []);

  return (
    <div id="sidebar">
      <div className={`menuitem ${visible ? "" : "menuitem-hide"}`} onClick={() => eventBus.dispatch('showHideSideBar')}>
        <FaHome className="iconmenu" />
        <Link to="/">Inicio</Link>
      </div>
      <div className={`menuitem ${visible ? "" : "menuitem-hide"}`}>
        <FaInfoCircle className="iconmenu" />
        <Link to="#">Información</Link>
      </div>
      <div className={`menuitem ${visible ? "" : "menuitem-hide"}`}>
        <FaMapMarkerAlt className="iconmenu" />
        <Link to="#">Ubicación</Link>
      </div>
      <div className={`menuitem ${visible ? "" : "menuitem-hide"}`}>
        <FaInstagram className="iconmenu" />
        <Link to="#">Instagram</Link>
      </div>
    </div>
  );
};

export default SideBar;
