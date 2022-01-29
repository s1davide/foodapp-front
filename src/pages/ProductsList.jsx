import React, { useEffect, useState } from "react";
import "./ProductsList.scss";

import { useParams, useNavigate, useLocation } from "react-router-dom";
import categories from "../staticData/categories";
import { eventBus, getAPI } from "../utils/reusableFunctions";
import Item from "../components/atoms/Item";

import ArrowIconRight from "../assets/img/products/arrowRight.svg";

import CustomLink from "../components/atoms/CustomLink";

import { itemCommonStyles, titleBarCommonStyle } from "../staticData/sharedData";

const ProductsList = () => {
  const params = useParams();
  const navigate = useNavigate();
  const location = useLocation();
  const [apiData, setApiData] = useState([]);
  /**
   * Set title
   */
  setTimeout(() => {
    eventBus.dispatch("updateTitleBody", {
      ...titleBarCommonStyle,
      ...{
        titleStyle: { marginTop: "12px", marginLeft: "25px" }, title: categories[params.category].text,
        leftBtnAction: () => navigate(-1)
      }
    })
  }, 1);

  useEffect(() => {
    getAPI("https://foodappteam7.herokuapp.com/productos").then((r) => {
      setApiData(
        r
          .filter((v) => v.categoria === params.category.replace("-", " "))
          .map((v, i) => (
            <CustomLink key={i} to={`${location.pathname}/${v._id}`} children={
              <Item
                key={i}
                leftComponent={
                  <div id="productleftPlist"
                    style={{
                      backgroundImage: `url('${v.image}')`,
                      width: itemCommonStyles.productleftCompWidth,
                    }}></div>
                }
                style={itemCommonStyles.style}
                rightComponent={
                  <div style={itemCommonStyles.productRightCompStyle}>
                    <div >
                      <div style={itemCommonStyles.productRightCompNameStyle}>{v.nombre}</div>
                      <div style={itemCommonStyles.productRightCompPriceStyle}>${v.precio}</div>
                    </div>
                    <img id="productright" src={ArrowIconRight} alt=""></img>
                  </div>
                }
              />
            } />
          ))
      );
    });
  }, []); // eslint-disable-line react-hooks/exhaustive-deps
  return (
    <div id="productlist">
      {apiData}
    </div>
  );
};

export default ProductsList;
