import React from "react";
import "./TitleBody.scss";
import Btn from "Components/atoms/Btn";
const titlebody = (props) => {
  return (
    <div
      id="titlebody"
      style={
        props.flexColumn
          ? { flexDirection: "column" }
          : props.flexRow
          ? { flexDirection: "arrow" }
          : {}
      }
    >
      {props.leftBtn ? (
        <Btn
          style={props.leftBtnStyle}
          img={props.leftBtnImg}
          imgStyle={props.leftBtnImgStyle}
          p='8px'
          curHover="pointer"
          onClick={props.leftBtnAction}
        />
      ) : (
        ""
      )}
      <div
        style={{
          ...{ marginLeft: "20px", whiteSpace: "nowrap" },
          ...props.titleStyle,
        }}
      >
        <div>{props.title}</div>
      </div>
      {props.rightBtn ? (
        <Btn
          style={props.rightBtnStyle}
          img={props.rightBtnImg}
          curHover="pointer"
          onClick={props.rightBtnAction}
        />
      ) : (
        ""
      )}
    </div>
  );
};

export default titlebody;
