import React, { useState } from 'react';


const ReviewForm = ({ addNewReview, reviews })=> {
console.log(reviews)

const [name, setName] = useState("");
const [rating, setRating] = useState("");
const [comment, setComment] = useState("");

const handleSubmit = (event) =>{
  event.preventDefault(console.log("do you see me?"))
  event.target.reset();
  addNewReview({name, rating, comment})
 
} 
// const resetForm = (event) =>{
//   event.target.reset();
// }

return (<div>
  <form onSubmit={handleSubmit}  className="new-review-form">
    <div className="form-title">Leave Your Review Here</div>
      <br></br>
      <input type="text" id="name" value={name} placeholder="NAME" onChange={(e) => setName(e.target.value)}/>
      <br></br>
      <br></br>
      <input type="text" id="rating" value={rating} onChange={(e) => setRating(e.target.value)} placeholder="RATING 1-10⭐️"/>
      <br></br>
      <br></br>
      <input type="text" id="comment" value={comment} onChange={(e) => setComment(e.target.value)} placeholder="LEAVE A COMMENT"/>
      <br></br>
      <br></br>
    <button type="submit"> LEAVE A REVIEW </button>
  </form>
</div>)
}
  
export default ReviewForm;