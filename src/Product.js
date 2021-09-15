import React from "react";


function Product(props){

    return(<div>
{
  props.products.map(
    function(objectIn){
      return(
                <div className="icecreamcard">
                    <img className="icecreamimage" src={objectIn.image} alt={objectIn.flavor} />
                    <h2>{objectIn.brand}</h2>
                    <div>{objectIn.flavor}</div>
                    <div><a href="#">See reviews</a></div>
                    <div><a href="#">Add a review</a></div>
                </div>
            )
    }
  )
}
    </div>)
}
export default Product