import React, { useState } from 'react';
import { useHistory } from 'react-router';

const ReviewForm = (props)=> {
console.log(props)

const [name, setName] = useState("");
const [rating, setRating] = useState("");
const [comment, setComment] = useState("");


const changeName=(event)=>{ 
  setName(event.target.value)
  console.log(event.target.value)
} 
const changeRating=(event)=>{ 
  setRating(event.target.value)
  console.log(event.target.value)
} 
const changeComment=(event)=>{ 
  setComment(event.target.value)
  console.log(event.target.value)
} 
const history = useHistory();

const handleSubmit=(event)=>{
  event.preventDefault(console.log("do you see me?"))


let thisReviewForm =
  {
    name: name,
    rating: rating,
    comment: comment
  };

  props.addNewReview(thisReviewForm)
//this is a passed in function from Review component
fetch("http://localhost:9292/reviews", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(thisReviewForm),
    })
      .then((r) => r.json())
      .then((newForm) => {props.addNewReview(newForm);
                      ///function passed in from Review
        history.push("/Review");
 });
} 

return (<div>
  <form onSubmit={handleSubmit} className="new-review-form">
    <div className="form-title">Leave Your Review Here</div>
      <br></br>
      <input onChange={changeName} placeholder="NAME"/>
      <br></br>
      <br></br>
      <input onChange={changeRating} placeholder="RATING 1-10⭐️"/>
      <br></br>
      <br></br>
      <input onChange={changeComment} placeholder="LEAVE A COMMENT"/>
      <br></br>
      <br></br>
    <input type="submit" value="LEAVE REVIEW" />
  </form>
</div>)
}
  
export default ReviewForm;