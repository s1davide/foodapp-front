import React from "react";
import "./Btn.scss";
const Btn = (props) => {
  const divEffect = React.createRef()
  const effectClick = (action) => {


    (() => action ? divEffect.current.classList.add('clickedanimation') | divEffect.current.classList.remove('unclickedanimation') :
      divEffect.current.classList.remove('clickedanimation') | divEffect.current.classList.add('unclickedanimation'))()


  }
  return (
    <button
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
          margin: props.m,
          marginTop: props.mt,
          marginLeft: props.ml,
          marginRight: props.mr,
          borderRadius: props.br,
          cursor: props.curHover,
          fontSize: props.fz,
          fontWeight: props.fw,
          color: props.color,
          backgroundColor: props.bg
        },
        ...props.style,
      }}
      onClick={props.onClick
      }
      onMouseDown={() => effectClick(true)}
      onMouseUp={() => effectClick(false)}
    >
      {props.text} {props.children}
      {props.img ? <img src={props.img}
        style={{ ...{ height: `calc(${props.h} -8px)`, width: `calc(${props.w} - 8px)` }, ...props.imgStyle }}
        alt={props.imgAlt} /> : ""}
      <div ref={divEffect} className="effectclick"></div>
    </button>
  );
};

export default Btn;
