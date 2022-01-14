import React from "react";
import "../../styles/components/atoms/Item.scss";
const Item = (props) => {
  return (
    <div draggable="false" id="item" style={props.style}>
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
      <div id="textitem">{props.text}</div>
      {props.rightComponent ? props.rightComponent : ""}
    </div>
  );
};

export default Item;
