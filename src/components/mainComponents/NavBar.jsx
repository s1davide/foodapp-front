import React from "react";
import "./NavBar.scss";
import Btn from "Components/atoms/Btn";
import btnicon from "Img/navbar/btnicon.svg";
import varsScss from "Src/global.scss";
import Logo from "Img/Logo.png"
import { sel } from "Utils/reusableFunctions";
import CustomLink from "components/atoms/CustomLink";
const NavBar = (props) => {
  window.matchMedia(`(max-width: ${varsScss.sm})`).
    addEventListener("change", e => !e.matches ? () => sel("#menunavbar").classList.contains('menunavbar-show') ?
      sel("#menunavbar").classList.remove('menunavbar-show') : '' : '')
  return (
    <div id="navbar">
      {/* Left Menu Btn */}
      {/* <Btn
        ml="16px"
        p='8px'
        onClick={() => eventBus.dispatch('showHideSideBar')}
        curHover="pointer"
        img={buttonMenu}
        imgStyle={{width:"20px"}}
        style={{color:"#000000"}}
      /> */}

      <div id="titlenavbar"><img src={Logo} style={{ marginRight: "8px" }} /> <div>PIZZERIA DON REMOLO</div>


      </div>
      <div id="menunavbar">

        <div onClick={() => sel("#menunavbar").classList.remove('menunavbar-show')} >
          <CustomLink to="/productos/pizza" style={{ display: "contents", color: "white" }}>
            Pizzas
          </CustomLink>
        </div>
        <div >
          Arma tu pizza
          {/* <CustomLink to="/productos/pizza" style={{ display: "contents", color: "white" }}>
        
          </CustomLink> */}
        </div>
        <div onClick={() => sel("#menunavbar").classList.remove('menunavbar-show')}>
          <CustomLink to="/productos/drink" style={{ display: "contents", color: "white" }}>
            Bebidas
          </CustomLink>
        </div>
        <div onClick={() => sel("#menunavbar").classList.remove('menunavbar-show')}>
          <CustomLink to="/productos/complement" style={{ display: "contents", color: "white" }}>
            Complementos
          </CustomLink>
        </div>
        <div onClick={() => sel("#menunavbar").classList.remove('menunavbar-show')}>
          <CustomLink to="/cart" style={{ display: "contents", color: "white" }}>
            Mi orden
          </CustomLink>
        </div>
      </div>
      <Btn id="mobilebtn" onClick={() => sel("#menunavbar").classList.toggle('menunavbar-show')} img={btnicon}></Btn>
    </div>
  );
};
export default NavBar;
