import React from "react";
import img1 from "./img1.png";
import img2 from "./img2.png";
import img3 from "./img3.png";
import img4 from "./img4.png";
import img5 from "./img5.png";
import img6 from "./img6.png";
import img7 from "./img7.png";
import img8 from "./img8.png";
import img9 from "./img9.png";

import "./BringYourOwnBusiness.css"

export default (props) => (
    <div>
    <h1 className="Bring-your-own-business__title">Bring Your Own Business</h1>
    <div className="Bring-your-own-business">
        <figure className="Bring-your-own-business__img">
            <img className="Bring-your-own-business__img__icon" src={img1} alt="icon 1"/>
            <img className="Bring-your-own-business__img__icon" src={img2} alt="icon 2"/>
            <img className="Bring-your-own-business__img__icon" src={img3} alt="icon 3"/>
            <img className="Bring-your-own-business__img__icon" src={img4} alt="icon 4"/>
        </figure>
        <figure>
             <img className="Bring-your-own-business__img__car" src={img9} alt="car imagem"/>
        </figure>
        <figure className="Bring-your-own-business__img">
            <img className="Bring-your-own-business__img__icon" src={img5} alt="icon 5"/>
            <img className="Bring-your-own-business__img__icon" src={img6} alt="icon 6"/>
            <img className="Bring-your-own-business__img__icon" src={img7} alt="icon 7"/>
            <img className="Bring-your-own-business__img__icon" src={img8} alt="icon 8"/>
        </figure>     
        
    </div>

</div>

);
