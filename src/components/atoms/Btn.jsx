import React from "react";

const Btn = (props) => {
  return (
    <div>{props.img ? <img src={props.img}  /> : ""}</div>
  );
};

export default Btn;
