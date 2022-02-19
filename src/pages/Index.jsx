import React, {  useEffect } from "react";
import Item from "../components/atoms/Item";
import TitleBody from "../components/atoms/TitleBody";
import { eventBus } from "../utils/reusableFunctions";
import "./Index.scss";
import categories from "../staticData/categories";
import CustomLink from "../components/atoms/CustomLink";
const Index = (props) => { 
    setTimeout(() => {
      eventBus.dispatch("updateTitleBody", {
        titleStyle: { marginTop: "12px", marginLeft: "25px" }, title: "CATEGORIAS"
      })
    }, 1);    
  // <TitleBody titleStyle={{ marginTop: "12px", marginLeft: "25px" }} title="CATEGORIAS" />
  const lItems = Object.keys(categories).map((v, i) => (
    <CustomLink key={i} to={"/productos/" + v} children={
      <Item
        clickable="true"
        title={categories[v].text}
        text={categories[v].text}
        bgImg={categories[v].bgImg}
        style={{
          marginTop: "55px", height: "75.6px",
          borderRadius: '25px'
        }}
      />
    } />


  ));

  return (
    <div className="index">

      <div className="listitems">{lItems}</div>
    </div>
  );
};

export default Index;
