import React from "react"
import logoColazione from "../img/avocado-icon.png";
import logoCena from "../img/salad-icon.png"
import logoPranzo from "../img/pasta-icon.png"



function TypeOfRecepies(props) {


    return (
       
        <div className="typeOfRecepies-div">

            <div className="typeOfRecepies-card">
            <a href="link">
            <img src={logoColazione} alt="img-icon" id="logocolazione" />        
            </a>
            </div>

            <div className="typeOfRecepies-card">
            <a href="link">
            <img src={logoPranzo} alt="img-icon" id="logopranzo" />
            </a>
            </div>

            <div className="typeOfRecepies-card">
            <a href="link">
            <img src={logoCena} alt="img-icon" id="logocena" />
            </a>
            </div>
            
        </div>
    );
  }
  
  export default TypeOfRecepies;