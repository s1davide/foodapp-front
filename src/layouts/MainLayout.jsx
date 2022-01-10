import React from 'react'
import {Outlet} from "react-router-dom";
import NavBar from '../components/mainComponents/NavBar';

import "../styles/layouts/MainLayout.scss";
const MainLayout = () => {
    return (
        <div>
            <NavBar />
            <Outlet />
            
        </div>
    )
}

export default MainLayout
