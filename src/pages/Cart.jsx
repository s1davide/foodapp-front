import React, { useState, useEffect } from 'react';
import "./Cart.scss"
import plus from "assets/img/cart/plus.svg";
import minus from "assets/img/cart/minus.svg";

import Btn from 'Components/atoms/Btn';
import { editCartItemsLocalStorage } from 'utils/commonFunctions';
/**
  * Set title
  */

const Cart = () => {
    const [cartData, setCartData] = useState({})
    const editItemCarData = (id, operation) => {
        (() => (cartData[id].count + operation > 0 ? setCartData(
            {
                ...cartData, ...{
                    [id]: {
                        ...cartData[id], ...{ count: cartData[id].count + operation }
                    }
                }
            }
        ) : (setCartData(delete cartData[id] ? { ...cartData } : { ...cartData }, 'here')))
            | editCartItemsLocalStorage({ _id: id }, operation))()
    }
    const total = () =>
        Object.values(cartData).reduce((vb, va) => vb + (va.count * va.price), 0)


    useEffect(() => {
        console.log(setCartData(JSON.parse(localStorage.getItem('cart'))));

    }, [])

    const ItemCart = (key, text, q, btnMinusClick, btnPlusClick) => <div key={key} style={{ display: 'flex', justifyContent: "space-between", margin: "15px 25px" }}><div>{text}</div>
        <div style={{ display: 'flex', alignItems: "center", justifyContent: "center" }}>
            <Btn img={minus} dp="flex" mr="10px" jc="center" h="20px" w="20px"
                style={{ border: "#8C8C8C 2px solid", borderRadius: "50px" }}
                onClick={btnMinusClick}
            /><div>{q}</div><Btn ml="10px" dp="flex" jc="center" h="20px" mr="5px" w="20px"
                style={{ border: "#8C8C8C 2px solid", borderRadius: "50px" }} img={plus}
                onClick={btnPlusClick}
            /></div>
    </div>
    return <div id='cart'>
        <div id='cartcontent'>
            <div id='carttitle' style={{
                backgroundColor: "#EE4641", height: "50px",
                borderTopLeftRadius: "10px", borderTopRightRadius: "10px",
                color: "white", fontSize: "27px", fontWeight: "bold",
                paddingTop: "12px"
            }}>Mi orden</div>
            <div id='cartlist'>
                {Object.entries(cartData).map((v, i) => ItemCart(i, v[1].name, v[1].count,
                    () => editItemCarData(v[0], -1), () => editItemCarData(v[0], +1)))}
            </div>
            <div style={{ display: "flex", justifyContent: "space-between", textAlign: "left", paddingTop: "14px", margin: "0px 22px" }}>
                <div style={{ marginBottom: '8px' }}>Total a pagar:</div> <div>${total()}</div> </div>
            <Btn h="38px" w="93%" d="flex" br="8px" ai="center" bg="#EE4641" style={{ margin: '10px 19px', }}

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
