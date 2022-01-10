import React,  { useState } from 'react';
import '../../styles/components/mainComponents/SideBar.scss';
import { FaHome, FaInfoCircle, FaInstagram, FaMapMarkerAlt } from "react-icons/fa";

const SideBar = () => {

    return (
        <div id='side-bar'>             
            <div className="menuItem">
                <FaHome  className="iconMenu"/>
                <a href="#" >Inicio</a>
            </div>
            <div className="menuItem">
                <FaInfoCircle className="iconMenu"/>
                <a href="#">Información</a>
            </div>
            <div  className="menuItem">
                <FaMapMarkerAlt  className="iconMenu"/>
                <a href="#">Ubicación</a>
            </div>
            <div  className="menuItem">
                <FaInstagram className="iconMenu"/>
                <a href="#">Instagram</a>
            </div>
            
        </div>
    )
}

export default SideBar
