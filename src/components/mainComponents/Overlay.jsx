import React from "react";
import "../../styles/components/mainComponents/Overlay.scss";
import "../../styles/animations.scss";
const Overlay = (props) => {
  return (
    <div
      id="overlay"
      onClick={((f) => (f.onClick ? f.onClick : false))(props.event)}
      className={props.className}
      style={props.style}
    >
      {props.childComponent}
    </div>
  );
};

export default Overlay;
