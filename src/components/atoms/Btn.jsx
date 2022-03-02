import React from "react";
import "./Btn.scss";
const Btn = (props) => {
  return (
    <div
      id={props.id}
      className={"btn " + props.className}
      style={{
        ...{
          display: props.dp,
          justifyContent: props.jc,
          alignItems: props.ai,
          height: props.h,
          width: props.w,
          border: props.b,
          padding: props.p,
          marginTop: props.mt,
          marginLeft: props.ml,
          marginRight: props.mr,
          borderRadius: props.br,
          cursor: props.curHover,
          fontSize: props.fz,
          color: props.color,
          backgroundColor: props.bg
        },
        ...props.style,
      }}
      onClick={props.onClick}
    >
      {props.text} {props.children}
      {props.img ? <img src={props.img}
        style={{ ...{ height: `calc(${props.h} -8px)`, width: `calc(${props.w} - 8px)` }, ...props.imgStyle }}
        alt={props.imgAlt} /> : ""}
    </div>
  );
};

export default Btn;
