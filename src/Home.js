import React from "react";
import { useHistory } from "react-router-dom"
import Pexels from "./pexels-kindel-media-8093893.mp4"

function Home(){
    const history = useHistory();
    const routeChange = () =>{
        let path = "/showproducts"
        history.push(path);
    }
    return(
        <div className="Home">
        <video autoPlay loop muted id='video'
        style={{
            position: "absolute",
            width: "100%",
            left: "50%",
            top: "50%",
            height: "100%",
            objectFit: "cover",
            transform: "translate(-50%, -50%)",
            zIndex: "-1"

        }} >
            <source src={Pexels} type="video/mp4"/>
        </video>
        <div className="box">
            <h1> Did you think eating Keto meant you'd never have ice cream again?</h1>
        </div>
        <div className="box2">
            <h1>Think again...</h1>
            <button className="enterbutton" onClick={routeChange}>Enter↪</button> 
        </div>
        
      
    </div>)
}
export default Home