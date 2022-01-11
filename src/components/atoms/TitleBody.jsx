import React from "react";
import "../../styles/components/atoms/TitleBody.scss";
const titlebody = (props) => {
  return (
    <div id="titlebody">
      <div style={{ marginTop: "11px", marginLeft: "20px" }}>{props.title}</div>
    </div>
  );
};

export default titlebody;
