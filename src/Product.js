import React from "react";
import { useHistory } from "react-router-dom";

function Product(props){
console.log(props)

const history = useHistory();

const routeChange = () =>{
  history.push("/reviewform");
}
// const routeChangeToReviewPage = () =>{
//   history.push("/showreviews");
// }

return(<div>
{
  props.products.map(
    function(objectIn){
      return(
                <div className="icecreamcard">
                    <img className="icecreamimage" src={objectIn.image} alt={objectIn.flavor} />
                    <h2>{objectIn.brand}</h2>
                    <div>{objectIn.flavor}</div>
                    <div><a href='#' onClick={routeChange}>Add a review</a></div>
                  
                </div>
            )
    }
  )
}
    </div>)
}
export default Product