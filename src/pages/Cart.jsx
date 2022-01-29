import React, {useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import CustomLink from '../components/atoms/CustomLink';
import Item from '../components/atoms/Item';
import { itemCommonStyles, textCommonStyles, titleBarCommonStyle } from '../staticData/sharedData';
import { eventBus, showDialog } from '../utils/reusableFunctions';

import "./Cart.scss"

import DeleteProduct from "../assets/img/products/deleteProduct.svg";
import Btn from '../components/atoms/Btn';
/**
  * Set title
  */

const Cart = () => {
    const [productInData, setProductInData] = useState([]);
    const navigate = useNavigate();
    const currentProducts = ((p) => p ? JSON.parse(p) : [])(window.localStorage.getItem('products'));
    setTimeout(() => {
        eventBus.dispatch("updateTitleBody", {
            ...titleBarCommonStyle,
            ...{
                titleStyle: { marginTop: "12px", marginLeft: "25px" }, title: "MI PEDIDO",
                leftBtnAction: () => navigate(-1)
            }
        })
    }, 1);
    const deleteItem =(id)=>{

        showDialog("¿Está seguro que quiere eliminar este item de su pedido?").then((r)=>{
            // console.log(currentProducts,id);
            // console.log();
            window.localStorage.setItem('products',JSON.stringify(currentProducts.filter((v,i)=>i!==id))       )
            // console.log(id);
            window.location.reload()

            
        })
    }
    const getTotalCurrentProducts = ()=>{
       return currentProducts.reduce((vb,va)=>vb+va.totalPrice,0)
    }
    useEffect(() => {
        setProductInData(
            currentProducts.map((v, i) => (<CustomLink key={i}
                // to={`${location.pathname}/${v._id}`} 
                to={""}
                children={
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
                            <div style={{ ...itemCommonStyles.productRightCompStyle, ...{ alignItems: 'start' } }}>
                                <div >
                                    <div style={itemCommonStyles.productRightCompNameStyle}>{v.name}</div>
                                    <div style={itemCommonStyles.productRightCompPriceStyle}>${v.totalPrice}</div>
                                </div>
                                <Btn
                                    dp="flex"
                                    p="0px 13px"
                                    onClick={()=>deleteItem(i)}
                                    img={DeleteProduct}
                                ></Btn>
                                {/* <img id="productright" src={DeleteProduct} alt=""></img> */}
                            </div>
                        }
                    />
                } />)
            )
        )
    }, [])

    return <div id='cartlist'>
        {productInData}
        <div id='totalcartdiv'>
            <div style={{ width: '100%', display: 'flex', justifyContent: 'space-between' }}>
                <div style={{ ...textCommonStyles.itemsBodyTitle, ...{ paddingLeft: "22px", marginTop: '0px' } }}>Total</div>
                <div style={{ ...textCommonStyles.itemsBodyTitle, ...{ paddingRight: "22px", marginTop: '0px' } }}>${getTotalCurrentProducts()}</div>
            </div>
            <Btn h="53px" d="flex"  ai="center" bgColor="#30A178" style={{margin:'0px 19px'}} 

            text={
                <div style={{
                    height:'100%',
                    color: '#FFFFFF', display: 'flex',
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
