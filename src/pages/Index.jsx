import React from "react";
import Item from "../components/atoms/Item";
import TitleBody from "../components/atoms/TitleBody";
import Category1 from "../assets/img/categories/Category1.png";
import Category2 from "../assets/img/categories/Category2.png";
import Category3 from "../assets/img/categories/Category3.png";

import "../styles/pages/Index.scss";
const Index = (props) => {
  const lItems = [
    { text: "ANTOJOS DULCES Y SALADOS", bgImg: Category1 },
    {
      text: "BEBIDAS SIN ALCOHOL",
      bgImg: Category2,
    },
    { text: "BEBIDAS ALCOHOLICAS", bgImg: Category3 },
  ].map((v,i) => <Item key={i} text={v.text} bgImg={v.bgImg} />);
 const rO = new ResizeObserver(e=>{

 })
 
  return (
    <div className="index">
      <TitleBody title="Categorias" />
      <div className="listitems">
        {lItems}
      </div>
    </div>
  );
};

export default Index;
