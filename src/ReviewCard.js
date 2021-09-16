import React from "react";



function ReviewCard(props) {

        const localDeleteHandler =()=>{  
            props.deleteReview(props.review)
          }
          
        return (

        <div className="reviewcard">
          <h2>{props.review.name}</h2>
          <div>{props.review.rating} STARS</div>
          <div>{props.review.comment}</div>
        <div><button onClick={localDeleteHandler}>Delete</button></div>
        </div>
            
        )
}

export default ReviewCard;
