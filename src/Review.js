import React from "react";
import { useEffect, useState } from 'react';
import ReviewCard from './ReviewCard';

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
        <ReviewCard
          review={objectIn}
          key={objectIn.id}
          deleteReview={props.deleteReview}
        />
      )
    }
  )
}





    </div>)


}
export default Review