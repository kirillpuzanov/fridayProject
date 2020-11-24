import React from "react";
import preloader from "../../assets/preloader/loader.svg";

const style = {
    width: '60px',
    height:'60px',
    display:'block',
    margin: '0 auto'
}
export const Preloader = () => {
    return (
        <img src={preloader} alt="preloader" style={style}/>
    )
}