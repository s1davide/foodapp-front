import React from 'react'
import "./Spinner.scss"
const Spinner = () => {
    return (
        <svg className='spinnercircleanimation' viewBox="0 0 100 100" xmlns="http://www.w3.org/2000/svg">
            <circle className='circlespinner' cx="50" cy="50" r="46" />
        </svg>
    )
}

export default Spinner