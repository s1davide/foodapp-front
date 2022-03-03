import React from 'react'
import "./Footer.scss"
import fb from "Img/index/footer/fb.svg";
import twitter from "Img/index/footer/twitter.svg";
import instagram from "Img/index/footer/instagram.png";
import arrowCollapse from "Img/arrowCollapse.svg"
const Footer = () => {
    /**
     * 
     * @param {Event} e 
     */
    const collapse = (e)=>{
        console.log(e.target.classList.toggle('collapsed'));        
    }
    return (
        <div id='footer'>
            <div id='upfooter'>
                <div className='columnsfooter' onClick={(e)=>collapse(e)}>
                    <div className='titlecolumnfooter'>MENÚ
                        <img src={arrowCollapse} className="arrowfooter" width="10" />
                    </div>
                    <div className='collapsible'>
                        <div>Pizzas
                        </div>
                        <div> Arma tu pizza
                        </div>
                        <div>Bebidas
                        </div>
                        <div>Complementos</div>
                    </div>

                </div>
                <div className='columnsfooter' onClick={(e)=>collapse(e)}>
                    <div className='titlecolumnfooter'>AYUDA Y SERVICIO
                        <img src={arrowCollapse} className="arrowfooter" width="10" />
                    </div>
                    <div className='collapsible'>
                        <div>Pizzas
                        </div>
                        <div> Factura Electrónica
                        </div>
                        <div>Trabaja con nosotros
                        </div>
                        <div>Preguntas frecuentes y Ayuda</div>
                    </div>

                </div>
                <div className='columnsfooter' onClick={(e)=>collapse(e)}>
                    <div className='titlecolumnfooter'>CONECTAR CON REMOLO
                        <img src={arrowCollapse} className="arrowfooter" width="10" />   </div>
                    <div className='collapsible'>
                        <div>Danos like en Facebook
                        </div>
                        <div> Siguenos en Twitter
                        </div>
                        <div>Miranos en Instagram
                        </div>
                    </div>


                </div>
            </div>
            <div id='endfooter'>© Copyright 2000  |  PIZZAS REMOLO  |
                <img src={fb} className='endfootericons' alt="facebook" />
                <img src={twitter} className='endfootericons' alt="twitter" />
                <img src={instagram} width={17} className='endfootericons' alt="instagram" />

            </div>
        </div>
    )
}

export default Footer