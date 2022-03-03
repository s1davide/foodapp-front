import React, { useEffect, useState } from 'react';
import { useNavigate, useParams } from 'react-router-dom';
import "./ProductDetail.scss"
import { eventBus, getAPI } from 'Utils/reusableFunctions';
import Btn from 'Components/atoms/Btn';
import Plus from "Assets/img/productList/Plus.svg"
import Minus from "Assets/img/productList/Minus.svg"
import { textCommonStyles, titleBarCommonStyle } from 'StaticData/sharedData';


const ProductDetail = () => {
  const params = useParams();
  const navigate = useNavigate();
  const [loaded, setLoaded] = useState(false);
  const [productData, setProductData] = useState({});
  const [selectedQ, setSelectedQ] = useState(1);
  const [listAditionals, setListAditionals] = useState({});
  const [observations, setObservations] = useState("");
  /**
   * Load Title module
   */

  setTimeout(() => {
    eventBus.dispatch("updateTitleBody", productData.nombre ? {
      ...titleBarCommonStyle,
      ...{
        leftBtnAction: () => navigate(-1),
        titleStyle: { marginTop: "12px", marginLeft: "25px" }, title: productData.nombre
      }
    } : {
      titleStyle: { marginTop: "12px", marginLeft: "25px" }, title: "CARGANDO..."
    })
  }, 1);
  /**
   * Get Data from API
   */
  useEffect(() => {
    getAPI("https://foodappteam7.herokuapp.com/productos").then((r) => {
      (
        setLoaded((currentLoaded) =>
          !loaded ?
            setProductData(r.find((v) => v._id == params.product)) | true : currentLoaded))
      setLoaded(true);

    })
  })
  const getSumAddtionals = () => {
    return Object.values(listAditionals).reduce((vb, va) =>
      vb + va
      , 0)
  }
  const getTotalPrice = () => {
    return getSumAddtionals() + (productData.precio * selectedQ)
  }
  const addToCart = () => {
    const currentProducts = ((p) => p ? JSON.parse(p) : [])(window.localStorage.getItem('products'));

    window.localStorage.setItem('products', JSON.stringify(currentProducts.concat([
      {
        idProduct: params.product,
        category: params.category,
        additionals: listAditionals,
        image: productData.image,
        name: productData.nombre,
        quant: selectedQ,
        observations: observations,
        totalPrice: getTotalPrice()
      }
    ])))
    navigate('/cart')
  }
  /**
   * Component 
   */
  return <div id='productdetail'>
    <img src={productData.image} width="70%" />
    {/* Seccion opcional */}
    <div style={textCommonStyles.itemsBodyTitle}
    >Opcional:</div>
    {((t) => t ? t.length > 0 ? t.map((v, i) => {
      return <div style={{
        display: 'flex',
        marginTop: '4px',
        justifyContent: 'space-between',
        padding: '8px 50px'
      }} key={i}>
        <div>
          <input id={`optional${i}`}
            value="2" type="checkbox"
            onChange={(evt) =>
              ((cV, v) => setListAditionals({ ...listAditionals, ...{ [`optional${i}`]: cV[`optional${i}`] ? 0 : parseInt(v) } }))
                (listAditionals, evt.target.value)} />
          <label htmlFor={`optional${i}`}>{v}</label>
        </div>
        <div>
          $2
        </div>
      </div>
    }) : <div style={{ marginTop: '18px' }}>No disponible</div> : '')(productData.tags)}
    {/* Input comentario */}
    <div style={{ ...textCommonStyles.itemsBodyTitle, ...{ marginTop: '18px' } }}>
      Observaciones</div>
    <div className='itemproddetail'>
      <input id='inputcomentpd' onChange={(evt) => setObservations(evt.target.value)} type="text" />
    </div>
    <div className='itemproddetail' style={{ justifyContent: 'space-between', marginTop: '30px' }} >
      <div style={{ display: 'flex', alignItems: 'center' }}>
        <Btn img={Minus} w="30px" h="30px" dp="flex" jc="center"
          bg="#30A178" style={{ borderRadius: '3px' }} imgStyle={{ width: '14px' }}
          onClick={selectedQ > 1 ? () => setSelectedQ(selectedQ - 1) : () => { }}
        />
        <div style={{ margin: '0px 10px' }}>{selectedQ}</div>
        <Btn img={Plus} w="30px" h="30px" dp="flex" jc="center"
          bg="#30A178" style={{ borderRadius: '3px' }} imgStyle={{ width: '14px' }}
          onClick={() => setSelectedQ(selectedQ + 1)} />
      </div>
      <Btn p="8px" w="50%"
        onClick={addToCart}
        bg="#30A178" style={{
          borderRadius: '10px', fontSize: '14px',
          fontWeight: '700'
        }}
        imgStyle={{ width: '14px' }}
        text={<div style={{
          color: '#FFFFFF', display: 'flex',
          justifyContent: 'space-between', padding: '0px 8px',
        }}>
          <div>Agregar</div> <div>
            ${getTotalPrice()}
          </div></div>} />
    </div>
  </div>;
};

export default ProductDetail;
