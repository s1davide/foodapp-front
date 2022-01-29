import React from 'react';
import { Link } from "react-router-dom";
import "./CustomLink.scss"

const CustomLink = (props) => {
  return <Link className='customlink' to={props.to}>
      {props.children}
  </Link>

  ;
};

export default CustomLink;
