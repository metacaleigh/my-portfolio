import React from "react";
import LogoImage from "./CSlogo.png";


const Logo = () => {
    return(
    <div className="logo-image-div">
        <img className="logo-image" src={LogoImage} alt="Caleigh Steill"/>
    </div>
    )
}

export default Logo;