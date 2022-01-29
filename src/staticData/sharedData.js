
import ArrowIcon from "../assets/img/titleBody/arrow.svg";

export const titleBarCommonStyle = {
    leftBtn: true,
    leftBtnStyle: {
        display: "flex",
        height: "100%",
        padding: "0px 8px 0px 8px",
        marginLeft: "20px",
    },
    leftBtnImg: ArrowIcon,
    leftBtnImgStyle: { width: "9.9px" },
}
export const itemCommonStyles = {
    productleftCompWidth: "150px",
    style: {
        borderRadius: "0px 8px 8px 0px",
        backgroundColor: "#A4DEC9",
        justifyContent: "left",
        marginTop: "40px",
        height: "100px"
    },
    productRightCompStyle: {
        display: 'flex',
        justifyContent: 'space-between', width: 'calc(100% - 150px)',
        color: '#000000',
        paddingLeft: "20px"
    },
    productRightCompNameStyle: {
        fontSize: '15px', fontWeight: '400',
        whiteSpace: 'break-spaces', lineHeight: '1'
    },
    productRightCompPriceStyle: {
        fontSize: '16px', fontWeight: '600',
        marginTop: '34px'
    }
}

export const textCommonStyles = {
    itemsBodyTitle: {
       
        fontSize: '18px',
        fontWeight:'700',
        textAlign:'left',
        paddingLeft: '36px',
        marginTop: '53px',
        marginBottom: '10px'
    }
}