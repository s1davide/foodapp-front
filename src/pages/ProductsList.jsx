import React, { useEffect, useState } from "react";
import "./ProductsList.scss";

import { useParams, useLocation } from "react-router-dom";
import { eventBus, getAPI } from "Utils/reusableFunctions";

import Card from "Components/molecules/Card"


const ProductsList = () => {
  const params = useParams();
  const location = useLocation();
  const [loaded, setLoaded] = useState(false);
  const [apiData, setApiData] = useState([]);



  useEffect(() => {
    console.log('useEffect');

    setTimeout(() => {
      console.log(loaded);
      setLoaded(false);
      (() => setLoaded((cL) => !cL ? eventBus.dispatch('showOverlay', true) | cL : cL))()
    }, 1);
    Promise.all([getAPI("https://fodaap.herokuapp.com/category"), getAPI("https://fodaap.herokuapp.com/product")])
      .then((r) => {
        eventBus.dispatch('showOverlay', false);
        setLoaded(true)
        setApiData(
          r[1].filter((v) => v.category._id === r[0].find((v) => v.name.toLowerCase() === params.category)._id)
            .map((v, i) => (
              // <CustomLink key={i} to={`${location.pathname}/${v._id}`} children={
              <Card
                key={i}
                title={v.name}
                text={v.description}
                price={v.price}
                imgSrc={v.image}
                allInfo={v}
                className="cardproduct"
              />
              // } />
            ))
        );
      });
  }, [location]); // eslint-disable-line react-hooks/exhaustive-deps
  return (
    <div id="productlist">
      {apiData}
      {/* <Card imgSrc="https://cdn.metro-online.com/nextcms/-/media/Project/MCW/ES_Makro/Info-y-servicios/productos/Carnes/Hamburguesas/cabecera-hamburguesas.jpg?rev=7dd9e72878aa48e196463a299207cc59&w=1416&hash=C038802C37A9657E2AB459F5478B8FDD"></Card> */}
    </div>
  );
};

export default ProductsList;
