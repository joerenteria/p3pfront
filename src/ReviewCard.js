import React from "react";


function ReviewCard(props) {

 

  const localDeleteHandler =()=>{  
    props.deleteReview(props.review)
  }
  
  const flavorin = props.review.product_id
    var flavorout

      if (flavorin == 88){
            flavorout = "Rebel - Orange Cream"}
            else if (flavorin == 89){
              flavorout = "Rebel - Birthday Cake"
            }
            else if (flavorin == 90){
              flavorout = "Rebel - Triple Chocolate"
            }
            else if (flavorin == 91){
              flavorout = "Rebel - Butter Pecan"
            }
            else if (flavorin == 92){
              flavorout = "Rebel - Chocolate Peanut Butter"
            }
            else if (flavorin == 93){
              flavorout = "Rebel - Strawberry"
            }
            else if (flavorin == 94){
              flavorout = "Keto - Vanilla"
            }
            else if (flavorin == 95){
              flavorout = "Keto - Cake Batter"
            }
            else if (flavorin == 96){
              flavorout = "Keto - Cherry Chip"
            }
            else if (flavorin == 97){
              flavorout = "Keto - Chocolate"
            }
            else if (flavorin == 98){
              flavorout = "Keto - Butter Pecan"
            }
            else if (flavorin == 99){
              flavorout = "Keto - Peanut Butter Cup"
            }
            else if (flavorin == 100){
              flavorout = "Keto - Strawberry"
            }
            else if (flavorin == 101){
              flavorout = "Keto - Black Raspberry"
            }
            else if (flavorin == 102){
              flavorout = "Enlightened - Triple Chocolate Brownie Dough"
            }
            else if (flavorin == 103){
              flavorout = "Enlightened - Ice Cream Cake"
            }
            else if (flavorin == 104){
              flavorout = "Enlightened - Chocolate Glazed Donut"
            }
            else if (flavorin == 105){
              flavorout = "Enlightened - Butter Pecan"
            }
            else if (flavorin == 106){
              flavorout = "Enlightened - Red Velvet Pint"
            }
            else if (flavorin == 107){
              flavorout = "Enlightened - Mint Chocolate Chunk"
            }
            else if (flavorin == 108){
              flavorout = "Enlightened - Caramel Chocolate Double Dough"
            }
           
          

          
        return (


        <div className="reviewcard">
          <h2>🍨{props.review.name}</h2>
          <br></br>
          <h2>{flavorout}</h2>
          <div className="ratingNumber">{props.review.rating} ⭐️</div>
          <br></br>
          <div>{props.review.comment}</div>
          <br></br>
          <br></br>
        <div><button className="deletebutton" onClick={localDeleteHandler}  >Delete</button></div>
        <br></br>
        </div>
            
        )
}

export default ReviewCard;
