import React from "react";
import { useEffect, useState } from 'react';
import ReviewForm from './ReviewForm';

function Review(props){
console.log("Show me review", props)

const[reviews, setReviews] = useState( [] )

useEffect( ()=>{
  fetch("http://localhost:9292/reviews")
  .then(r => r.json())
  .then(fetchedReviews =>{ setReviews(fetchedReviews)
  })
} , [] )

const addNewReview = (newReview) => {
  setReviews([...reviews, newReview])
}

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
<ReviewForm addNewReview={addNewReview}/>
    </div>)


}
export default Review