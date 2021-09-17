import React, { useState } from 'react';
import { useHistory } from 'react-router-dom';

const ReviewForm = ({ addNewReview, reviews })=> {
console.log(reviews)

const history = useHistory();

const routeChange = () => {
  let path = "/showreviews"
  history.push(path)
}
const [product_id, setProductID] = useState("");
const [name, setName] = useState("");
const [rating, setRating] = useState("");
const [comment, setComment] = useState("");

const handleSubmit = (event) =>{
  event.preventDefault(console.log("do you see me?"))
  addNewReview({name, rating, comment, product_id})
  routeChange();
} 

return (<div>
  <form onSubmit={handleSubmit}  className="new-review-form">
    <div className="form-title">Leave Your Review Here</div>
      


    <select className="reviewfield" type="text" id="product_id" value={product_id} onChange={(e) => setProductID(e.target.value)}>
    <option value="">--Please choose an option--</option>
    <option value="88">Rebel - Orange Cream</option>
    <option value="89">Rebel - Birthday Cake</option>
    <option value="90">Rebel - Triple Chocolate</option>
    <option value="91">Rebel - Butter Pecan</option>
    <option value="92">Rebel - Chocolate Peanut Butter</option>
    <option value="93">Rebel - Strawbwerry</option>
    <option value="94">Keto - Vanilla</option>
    <option value="95">Keto - Cake Batter</option>
    <option value="96">Keto - Cherry Chip</option>
    <option value="97">Keto - Chocolate</option>
    <option value="98">Keto - Butter Pecan</option>
    <option value="100">Keto - Peanut Butter Cup</option>
    <option value="100">Keto - Strawberry</option>
    <option value="101">Enlightened - Black Raspberry</option>
    <option value="102">Enlightened - Triple Chocolate Brownie Dough</option>
    <option value="103">Enlightened - Ice Cream Cake</option>
    <option value="104">Enlightened - Chocolate Glazed Donut</option>
    <option value="105">Enlightened - Butter Pecan</option>
    <option value="106">Enlightened - Red Velvet Pint</option>
    <option value="107">Enlightened - Mint Chocolate Chunk</option>
    <option value="108">Enlightened - Caramel Chocolate Double Dough</option>
    </select>


    <br></br>
      <br></br>

      <input className="reviewfield" type="text" id="name" value={name} placeholder="your name" onChange={(e) => setName(e.target.value)}/>
      <br></br>
      <br></br>
      <input className="reviewfield" type="text" id="rating" value={rating} onChange={(e) => setRating(e.target.value)} placeholder="rate 1-10⭐️"/>
      <br></br>
      <br></br>
      <input className="reviewfield" type="text" id="comment" value={comment} onChange={(e) => setComment(e.target.value)} placeholder="leave a comment"/>
      <br></br>
      <br></br>
    <button className="reviewbutton" type="submit" > Submit Review</button>
  </form>
</div>)
}
  
export default ReviewForm;