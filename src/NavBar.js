import React from "react";
import { NavLink } from "react-router-dom";


function NavBar() {
    

    return(


    <div className="navbar" >


        <div className="navlink1">
            <NavLink className="button"
                to="/"
                exact
            >
                Home
            </NavLink>
        </div>          

        <div className="navlink2">
            <NavLink className="button"
                to="/showproducts"
                
            >
                Products
            </NavLink>
        </div> 

        <div className="navlink3">
            <NavLink className="button"
                to="/showreviews"
                
            >
                See Reviews
            </NavLink>
        </div> 

        <div className="navlink4">
            <NavLink className="button"
                to="/reviewform"
                
            >
                Add a Review
            </NavLink>
        </div> 

        
        

    </div>
)
}

export default NavBar;