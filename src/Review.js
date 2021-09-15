import React from "react";


function Review(props){

    return(<div>
{
  props.reviews.map(
    function(objectIn){
      return(
                <div className="reviewcard">
                   <h2>{objectIn.name}</h2>
                    <div>{objectIn.rating} STARS</div>
                    <div>{objectIn.comment}</div>
                    <div><a href="#">Delete review</a></div>
                </div>
            )
    }
  )
}
    </div>)


}
export default Review