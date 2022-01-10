import React from 'react'
import "../../styles/components/atoms/titlebody.scss"
const titlebody = (props) => {
    return (
        <div id='titlebody'>
           <div style={{marginTop: "11px"}}>{props.title}</div> 
        </div>
    )
}

export default titlebody
