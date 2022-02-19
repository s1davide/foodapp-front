import React from "react";
import "./Btn.scss";
const Btn = (props) => {
  return (
    <div
      className="btn"
      style={{
        ...{
          display:props.dp,
          justifyContent:props.jc,
          alignItems:props.ai,
          height:props.h,
          width:props.w,
          padding: props.p,
          marginLeft: props.ml,
          marginRight: props.mr,
          borderRadius: props.br,
          cursor: props.curHover,
          fontSize:props.fz,
          color: props.color,
          backgroundColor:props.bgColor
        },
        ...props.style,
      }}
      onClick={props.onClick}
    >
      {props.text}
      {props.img ? <img src={props.img} 
      style={{...{height:`calc(${props.h} -8px)`,width:`calc(${props.w} - 8px)`},...props.imgStyle}}
       alt={props.imgAlt} /> : ""}
    </div>
  );
};

export default Btn;
