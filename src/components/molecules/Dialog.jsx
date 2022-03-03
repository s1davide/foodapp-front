import React, { useEffect } from 'react';
import { useState } from 'react';
import { eventBus } from 'Utils/reusableFunctions';
import Btn from 'Components/atoms/Btn';
import Overlay from 'Components/mainComponents/Overlay'
import "./Dialog.scss"
const Dialog = (props) => {
    const [message, setMesssage] = useState("");
    const [dialog, setDialog] = useState(false);
    useEffect(() => {
        eventBus.on('showDialog', (text) => {
            setDialog(true);
            setMesssage(text);
        })
    }, [])
    const closeDialog = (res) => {
        eventBus.dispatch('responseDialog', res);
        setTimeout(() => {
            setDialog(false);
        }, 1);
    }

    return dialog ? <div >
        <Overlay dp="flex" jc="center" ai="center" zIndex="5" childComponent={

            <div id='dialogwindow'>
                <div id='textdialog'><div>{message}</div>
                </div>
                <div  id='buttonsdialog'>
                    <Btn w="81px" p="8px" br="25px" color="#000000" bg="#FFFFFF"
                        onClick={() => closeDialog(false)}
                        text={
                            "Cancelar"
                        } />
                    <Btn w="81px" p="8px" ml="4px" br="25px" color="#FFFFFF" bg="#30A178"
                        onClick={() => closeDialog(true)} text={
                            "Confirmar"
                        } />
                </div>
            </div>
        }>

        </Overlay>
    </div> : <div></div>;
};

export default Dialog;
