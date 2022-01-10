import React, { useState, useEffect } from "react";
import TitleBody from "../components/atoms/TitleBody";

import "../styles/pages/Index.scss";
const Index = (props) => { 
  return (
    <div className="index">
      <TitleBody title="Categorias" />
      <div>Index</div>
      <br />
      
    </div>
  );
};

export default Index;
