import React from 'react'
import '../../styles/components/mainComponents/NavBar.scss'
import Btn from '../atoms/Btn'
import coolicon from "../../assets/img/coolicon.png";

const NavBar = (props) => {
    return (
        <div id='nav-bar'>
          {/* Left Menu Btn */}
          <Btn ml="16px" curHover="pointer" img={coolicon} /> 
        </div>
    )
}
export default NavBar