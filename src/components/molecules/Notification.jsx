import Btn from 'components/atoms/Btn'
import React, { useEffect, useState } from 'react'
import "animate.css"
import "./Notification.scss"
import { eventBus } from 'Utils/reusableFunctions'

const Notification = () => {
    const [show, setShow] = useState(false);
    const [firstLoad, setFirstLoad] = useState(false);
    const [content, setContent] = useState();
    const [duration] = useState(1000);
    useEffect(() => {

        eventBus.on('showNotification', (data) => {

            setShow(true)
            setTimeout(() => {
                setFirstLoad(true);
            }, 1);
            setTimeout(() => {
                setShow(false);
            }, duration);
            setContent(data)

        })


    }, [duration])

    return (
        // <Reveal effect="animate__fadeInUp" effectOut="">
        <div className={`notification ${show ? 'animate__fadeInUp ' : (firstLoad ?
            'animate__fadeOutDown' : ' initialhide')}`}>
            <div className='contentNotification'>{content}</div>
            <div style={{ display: 'flex', justifyContent: 'flex-end' }}>
                <Btn dp="flex" jc="center" ai="center" p="0px 0px"
                    w="57px" h="34px" bg="transparent" color="white" br="5px"
                    fw="bold" fz="12px" onClick={() => setShow(false)}>Close</Btn>
            </div>

        </div>
        // </Reveal>
    )
}

export default Notification