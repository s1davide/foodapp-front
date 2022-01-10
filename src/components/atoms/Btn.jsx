import React, { useState } from "react";
import "../../styles/components/atoms/Btn.scss";
const Btn = (props) => {

  const [sidebar, setSidebar] = useState(false);

  const showSidebar = () => setSidebar(!sidebar);
  
  return (
    <div
      className="btn"
      style={{
        marginLeft: props.ml,
        marginRight: props.mr,
        cursor: props.curHover,
      }}
      onClick={showSidebar}
    >
      {props.img ? <img src={props.img} /> : ""}
    </div>
  );
};

export default Btn;
