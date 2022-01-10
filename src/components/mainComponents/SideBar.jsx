import React,  { useState } from 'react';
import '../../styles/components/mainComponents/SideBar.scss';
import { FaHome, FaInfoCircle, FaInstagram, FaMapMarkerAlt } from "react-icons/fa";

const SideBar = () => {
    return (
        <div id='sidebar' >             
            <div className="menu-item">
                <FaHome  className="icon-menu"/>
                <a href="#" >Inicio</a>
            </div>
            <div className="menu-item">
                <FaInfoCircle className="icon-menu"/>
                <a href="#">Información</a>
            </div>
            <div  className="menu-item">
                <FaMapMarkerAlt  className="icon-menu"/>
                <a href="#">Ubicación</a>
            </div>
            <div  className="menu-item">
                <FaInstagram className="icon-menu"/>
                <a href="#">Instagram</a>
            </div>
            
        </div>
    )
}

export default SideBar
