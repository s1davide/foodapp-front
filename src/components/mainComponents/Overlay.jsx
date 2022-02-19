import React from "react";
import "./Overlay.scss";
import "../../animations/animations.scss";
const Overlay = (props) => {
  return (
    <div
      id="overlay"
      onClick={((f) => (f.onClick ? f.onClick : ()=>{}))(props.event?props.event:{})}
      className={props.className}
      style={{...props.style,...{zIndex:props.zIndex, 
        display:props.dp,justifyContent:props.jc, alignItems:props.ai}}}
    >
      {props.childComponent}
    </div>
  );
};

export default Overlay;
