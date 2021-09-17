import React, { useState } from 'react';


const ReviewForm = ({ addNewReview, reviews })=> {
console.log(reviews)

const [product_id, setProductID] = useState("");
const [name, setName] = useState("");
const [rating, setRating] = useState("");
const [comment, setComment] = useState("");

const handleSubmit = (event) =>{
  event.preventDefault(console.log("do you see me?"))
  event.target.reset();
  addNewReview({name, rating, comment, product_id})
 
} 
// const resetForm = (event) =>{
//   event.target.reset();
// }

return (<div>
  <form onSubmit={handleSubmit}  className="new-review-form">
    <div className="form-title">Leave Your Review Here</div>
      


    <select className="reviewfield" type="text" id="product_id" value={product_id} onChange={(e) => setProductID(e.target.value)}>
    <option value="">--Please choose an option--</option>
    <option value="52">Rebel - Orange Cream"</option>
    <option value="53">Rebel - Birthday Cake</option>
    <option value="54">Rebel - Triple Chocolate</option>
    <option value="55">Rebel - Butter Pecan</option>
    <option value="56">Rebel - Chocolate Peanut Butter</option>
    <option value="57">Rebel - Strawbwerry</option>
    <option value="58">Keto - Cake Batter</option>
    <option value="59">Keto - Cherry Chip</option>
    <option value="60">Keto - Chocolate</option>
    <option value="61">Keto - Butter Pecan</option>
    <option value="62">Keto - Peanut Butter Cup</option>
    <option value="63">Keto - Strawberry</option>
    <option value="64">Enlightened - Triple Chocolate Brownie Dough</option>
    <option value="65">Enlightened - Ice Cream Cake</option>
    <option value="66">ChocEnlightened - Chocolate Glazed Donut"</option>
    <option value="67">Enlightened - Butter Pecan</option>
    <option value="68">Enlightened - Red Velvet Piny</option>
    <option value="69">Enlightened - Mint Chocolate Chunk</option>
    </select>


    <br></br>
      <br></br>

      <input className="reviewfield" type="text" id="name" value={name} placeholder="NAME" onChange={(e) => setName(e.target.value)}/>
      <br></br>
      <br></br>
      <input className="reviewfield" type="text" id="rating" value={rating} onChange={(e) => setRating(e.target.value)} placeholder="RATING 1-10⭐️"/>
      <br></br>
      <br></br>
      <input className="reviewfield" type="text" id="comment" value={comment} onChange={(e) => setComment(e.target.value)} placeholder="LEAVE A COMMENT"/>
      <br></br>
      <br></br>
    <button className="reviewbutton" type="submit"> LEAVE A REVIEW </button>
  </form>
</div>)
}
  
export default ReviewForm;