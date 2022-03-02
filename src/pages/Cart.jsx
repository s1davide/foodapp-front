import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import CustomLink from 'Components/atoms/CustomLink';
import Item from 'Components/atoms/Item';
import { itemCommonStyles, textCommonStyles, titleBarCommonStyle } from 'StaticData/sharedData';
import { eventBus, showDialog } from 'Utils/reusableFunctions';
import "./Cart.scss"
import plus from "assets/img/cart/plus.svg";
import minus from "assets/img/cart/minus.svg";
import DeleteProduct from "Assets/img/products/deleteProduct.svg";
import Btn from 'Components/atoms/Btn';
/**
  * Set title
  */

const Cart = () => {
    const navigate = useNavigate();
    const [productInData, setProductInData] = useState([]);
    const [loaded, setLoaded] = useState(false);


    useEffect(() => {


    }, [])

    const ItemCart = () => <div style={{ display: 'flex', justifyContent: "space-between", margin: "15px 25px" }}><div>Text</div>
        <div style={{ display: 'flex', alignItems: "center", justifyContent: "center" }}>
            <Btn img={minus} dp="flex" mr="10px" jc="center" h="20px" w="20px"
                style={{ border: "#8C8C8C 2px solid", borderRadius: "50px" }}
            /><div>1</div><Btn ml="10px" dp="flex" jc="center" h="20px" img={minus} mr="5px" w="20px"
                style={{ border: "#8C8C8C 2px solid", borderRadius: "50px" }} img={plus} /></div>
    </div>
    return <div id='cart'>
        {productInData}
        <div id='cartcontent'>
            <div style={{
                backgroundColor: "#EE4641", height: "50px",
                borderTopLeftRadius: "10px", borderTopRightRadius: "10px",
                color: "white", fontSize: "27px", fontWeight: "bold"
            }}>Mi orden</div>
            <div id='cartlist'>
                <ItemCart></ItemCart>
            </div>
            <div style={{ display: "flex", justifyContent: "space-between", textAlign: "left", margin: "0px 22px" }}> <div>Total a pagar:</div> <div>$15</div> </div>
            <Btn h="38px" d="flex" br="8px" ai="center" bg="#EE4641" style={{ margin: '10px 19px', }}

                text={
                    <div style={{
                        height: '100%',
                        color: 'white', display: 'flex',
                        justifyContent: 'center', alignItems: 'center',
                        padding: '0px 8px'
                    }}>
                        <div>Confirmar Pedido</div>

                    </div>
                } >
            </Btn>
        </div>




    </div>;
};

export default Cart;
