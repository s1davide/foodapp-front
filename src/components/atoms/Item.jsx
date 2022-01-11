import React from "react";
import "../../styles/components/atoms/Item.scss";
const Item = (props) => {
  return (
    <div draggable="false" id="item">
      <img
        draggable="false"
        id="imgitem"
        title={props.title}
        src={props.bgImg}
      />
      <div id="textitem">{props.text}</div>
    </div>
  );
};

export default Item;
