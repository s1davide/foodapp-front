import React,  { useState } from 'react';
import '../../styles/components/mainComponents/SideBar.scss';
import { FaHome, FaInfoCircle, FaInstagram, FaMapMarkerAlt } from "react-icons/fa";

const SideBar = () => {
    return (
        <div id='sidebar' >             
            <div className="menuitem">
                <FaHome  className="iconmenu"/>
                <a href="#" >Inicio</a>
            </div>
            <div className="menuitem">
                <FaInfoCircle className="iconmenu"/>
                <a href="#">Información</a>
            </div>
            <div  className="menuitem">
                <FaMapMarkerAlt  className="iconmenu"/>
                <a href="#">Ubicación</a>
            </div>
            <div  className="menuitem">
                <FaInstagram className="iconmenu"/>
                <a href="#">Instagram</a>
            </div>
            
        </div>
    )
}

export default SideBar
