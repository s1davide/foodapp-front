import React, { useEffect, useState } from "react";
import Item from "Components/atoms/Item";

import { sel, sumPx } from "Utils/reusableFunctions";
import "./Index.scss";
import categories from "StaticData/categories";
import CustomLink from "Components/atoms/CustomLink";
import mainImg from "Img/index/pizzabg.png"
import mainImg2 from "Img/index/ingredients.png"
import Btn from "Components/atoms/Btn";
import Footer from "Components/mainComponents/Footer";
import varsScss from "Src/global.scss";
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';

const Index = (props) => {
  const rangeMatches = {
    xs: `(max-width: ${varsScss.xs})`,
    sm: `(min-width: ${sumPx(varsScss.xs, 1)}) and (max-width: ${varsScss.sm})`,
    md: `(min-width: ${sumPx(varsScss.sm, 1)}) and (max-width: ${varsScss.md})`,
    lg: `(min-width: ${sumPx(varsScss.md, 1)}) and (max-width: ${varsScss.lg})`
  }
  const editMatches = {
    xs: window.matchMedia(rangeMatches.xs).matches,
    sm: window.matchMedia(rangeMatches.md).matches
  };
  const [matches, setMatches] = useState(
    editMatches
  )

  useEffect(() => {
    window.matchMedia(rangeMatches.xs).addEventListener
      ("change", e => setMatches(editMatches))
    window.matchMedia(rangeMatches.sm).addEventListener
      ("change", e => setMatches(editMatches))
    window.matchMedia(rangeMatches.md).addEventListener
      ("change", e => setMatches(editMatches) | sel("#menunavbar").classList.remove('menunavbar-show'))
    // window.matchMedia(`(min-width: ${sumPx(varsScss.sm,1)})`).
    // addEventListener("change", e => setMatches({...structureMatches,...{md:e.matches}}))
    // window.matchMedia(`(max-width: ${varsScss.md})`).
    // addEventListener("change", e => setMatches({...matches,...{md:e}}))
  }, []);


  // <TitleBody titleStyle={{ marginTop: "12px", marginLeft: "25px" }} title="CATEGORIAS" />
  const popularItems = Object.keys(categories).map((v, i) => (
    <SwiperSlide key={i}> <CustomLink style={{ display: "contents" }} to={"/"} children={
      <Item
        clickable="true"
        text={categories[v].text}
        bgImg={categories[v].bgImg}
        mt="18px"
        h="20vw"
        className="itempopular"
        classForText="textItemPopulars"
      />
    } /></SwiperSlide>
  ));

  return (
    <div className="index">
      <div id="topmainimage" style={{ background: `url(${mainImg})` }} className={"mainimagebase"} >
        {/* <img id="mainimagetopindex" src={mainImg} /> */}
        <div id="mainimagetitle">ORDENA Y DISFRUTA TU
          PIZZA IDEAL</div>
        <CustomLink style={{ display: "contents" }} to={"/productos/pizza"} children={
          <Btn text={"Ordena YA!"} p="8px 18px" mt="38px" br="5px" color={"white"} bg={"#EE4641"} />
        }></CustomLink>
      </div>
      <div id="populars">

        <div>Recetas Mas populares</div>
        <hr size="1" style={{ color: "inherit", marginBottom: "0px" }} />
        <div id="baseitempopularsmobile" >

          {<Swiper
            spaceBetween={4}
            slidesPerView={2}
            onSlideChange={() => console.log('slide change')}
            onSwiper={(swiper) => console.log(swiper)}>
            {popularItems}
          </Swiper>}
        </div>
        <div id="baseitempopularsdesk"> {popularItems}</div>
      </div>
      <div id="secondimage" className="mainimagebase" style={{ background: `url(${mainImg2})` }} >

        <div id="secimgtext1">La mejor manera de disfrutar es con tu pizza ideal</div>
        <div id="secimgtext2">CREA TU PROPIA PIZZA!!!</div>
        <div id="secimgtext3">Muchos ingredientes, muchas combinaciones.</div>
        <CustomLink style={{ display: "contents" }} to={"/productos/pizza"} children={
          <Btn text={"Ordena YA!"} p="8px 18px" mt="38px" br="5px" color={"white"} bg={"#EE4641"} />
        }></CustomLink>
      </div>
      <Footer />
    </div>
  );
};

export default Index;
