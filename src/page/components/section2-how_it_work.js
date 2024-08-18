import React from "react"
import HowItWorksPic from "../img/expl-pic.png"



function HowItWorks() {
    return (

    <div className="HowItWorks-div">
    <div className="HowItWorks-text">
    <h1>Hello and welcome to the Vegetarian Recipe Generator! </h1>
    <h2> Whether you're planning a delicious breakfast, lunch, or dinner to impress your vegetarian friends, or simply looking to explore new meat-free dishes, you've come to the right place. Let our generator help you discover the perfect recipe to satisfy every craving and occasion!
    </h2>
    </div>
    <div className="HowItWorks-pic">
    <img src={HowItWorksPic} alt="pic" />
    </div>

     </div>
    );
  }
  
  export default HowItWorks;