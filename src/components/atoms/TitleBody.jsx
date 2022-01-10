import React from 'react'
import "../../styles/components/atoms/TitleBody.scss"
const TitleBody = (props) => {
    return (
        <div id='title-body'>
           <div style={{marginTop: "11px"}}>{props.title}</div> 
        </div>
    )
}

export default TitleBody
