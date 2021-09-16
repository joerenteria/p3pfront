import React from "react";
import ReviewCard from './ReviewCard';

function Review(props){
console.log("Show me review", props)

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