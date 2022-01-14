import React from "react";
import Item from "../components/atoms/Item";
import TitleBody from "../components/atoms/TitleBody";
import "../styles/pages/Index.scss";
import { Link } from "react-router-dom";
import categories from "../staticData/categories";
const Index = (props) => {
  const lItems = Object.keys(categories).map((v, i) => (
    <Link key={i} to={"/productos/" + v}>
      <Item
        clickable="true"
        title={categories[v].text}
        text={categories[v].text}
        bgImg={categories[v].bgImg}
      />
    </Link>
  ));

  return (
    <div className="index">
      <TitleBody titleStyle={{ marginTop: "11px" }} title="Categorias" />
      <div className="listitems">{lItems}</div>
    </div>
  );
};

export default Index;
