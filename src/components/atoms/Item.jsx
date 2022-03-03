import React from "react";
import "./Item.scss";
const Item = (props) => {
  return (
    <div draggable="false" className={props.className} id="item"
      style={{ ...{  display:props.dp,
        justifyContent:props.jc,
        alignItems:props.ai,
        height:props.h,
        width:props.w,
        padding: props.p,
        marginTop: props.mt,
        marginLeft: props.ml,
        marginRight: props.mr,
        borderRadius: props.br,
        cursor: props.curHover,
        fontSize:props.fz,
        color: props.color,
        backgroundColor:props.bg }, ...props.style }}>
      {props.leftComponent ? props.leftComponent : ""}
      {props.bgImg ? (
        <img
          draggable="false"
          id="imgitem"
          alt=""
          title={props.title}
          src={props.bgImg}
        />
      ) : (
        ""
      )}
      {props.text ? <div id="textitem" style={props.styleText} className={props.classForText}>{props.text}</div> : ''}
      {props.rightComponent ? props.rightComponent : ""}
    </div>
  );
};

export default Item;
