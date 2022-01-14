import React from "react";
import "../../styles/components/atoms/Btn.scss";
const Btn = (props) => {
  return (
    <div
      className="btn"
      style={{
        ...{
          marginLeft: props.ml,
          marginRight: props.mr,
          cursor: props.curHover,
        },
        ...props.style,
      }}
      onClick={props.onClick}
    >
      {props.img ? <img src={props.img} alt="" /> : ""}
    </div>
  );
};

export default Btn;
