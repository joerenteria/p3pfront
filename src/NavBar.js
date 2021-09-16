import React from "react";
import { NavLink } from "react-router-dom";


function NavBar() {
    

    return(


    <div className="navbar" >


        <div className="navlink">
            <NavLink
                to="/"
                exact
            >
                Home
            </NavLink>
        </div>          

        <div className="navlink">
            <NavLink
                to="/showproducts"
                
            >
                Products
            </NavLink>
        </div> 

        <div className="navlink">
            <NavLink
                to="/showreviews"
                
            >
                Reviews
            </NavLink>
        </div> 

        <div className="navlink">
            <NavLink
                to="/reviewform"
                
            >
                Review Form
            </NavLink>
        </div> 
        

    </div>
)
}

export default NavBar;