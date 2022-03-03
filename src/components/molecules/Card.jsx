import React from 'react'
import "./Card.scss"
import Btn from "Components/atoms/Btn"
import { eventBus } from 'Utils/reusableFunctions'
import { editCartItemsLocalStorage } from 'utils/commonFunctions'
const Card = (props) => {

    const addToCart = (v) => {
        eventBus.dispatch('showNotification', 'Producto agregado al carrito');
        editCartItemsLocalStorage(v, +1)
    }
    return (
        <div className={`card ${props.className ? props.className : ''}`} style={{
            ...{
                display: props.dp,
                justifyContent: props.jc,
                alignItems: props.ai,
                height: props.h,
                width: props.w,
                padding: props.p,
                marginTop: props.mt,
                marginLeft: props.ml,
                marginRight: props.mr,
                borderRadius: props.br,
                cursor: props.curHover,
                fontSize: props.fz,
                color: props.color,
                backgroundColor: props.bg,
                backgroundImage: `url(${props.imgSrc})`
            },
            ...props.style,
        }}>
            <div className='containercontentcard'>
                <div className='contentcard'>
                    <p className='titlecard'> {props.title}</p>
                    <hr />
                    <div className='textcard'>
                        {props.text}
                    </div>
                    <div className='optionscard'>
                        <Btn className="textbtn" bg="var( --background-theme)" p="3px 1px" br="4px" w="46%" color="white"
                            onClick={() => addToCart(props.allInfo)}> Añadir</Btn>
                        <Btn className="textbtn" bg="" br="4px" b="solid 1px var( --background-theme)" w="46%"
                            onClick={() => addToCart(props.allInfo)}
                            color="var( --background-theme)"> $ {props.price}</Btn>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Card