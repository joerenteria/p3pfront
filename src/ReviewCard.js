import React from "react";



function ReviewCard(props) {

        const localDeleteHandler =()=>{  
            props.deleteReview(props.review)
          }



          const flavorin = props.review.product_id
          var flavorout

          if (flavorin == 52){
            flavorout = "Rebel - Orange Cream"}
            else if (flavorin == 53){
              flavorout = "Rebel - Birthday Cake"
            }
            else if (flavorin == 54){
              flavorout = "Rebel - Triple Chocolate"
            }
            else if (flavorin == 55){
              flavorout = "Rebel - Butter Pecan"
            }
            else if (flavorin == 56){
              flavorout = "Rebel - Chocolate Peanut Butter"
            }
            else if (flavorin == 57){
              flavorout = "Rebel - Strawberry"
            }
            else if (flavorin == 58){
              flavorout = "Keto - Cake Batter"
            }
            else if (flavorin == 59){
              flavorout = "Keto - Cherry Chip"
            }
            else if (flavorin == 60){
              flavorout = "Keto - Chocolate"
            }
            else if (flavorin == 61){
              flavorout = "Keto - Butter Pecan"
            }
            else if (flavorin == 62){
              flavorout = "Keto - Peanut Butter Cup"
            }
            else if (flavorin == 63){
              flavorout = "Keto - Strawberry"
            }
            else if (flavorin == 64){
              flavorout = "Enlightened - Triple Chocolate Brownie Dough"
            }
            else if (flavorin == 65){
              flavorout = "Enlightened - Ice Cream Cake"
            }
            else if (flavorin == 66){
              flavorout = "Enlightened - Chocolate Glazed Donut"
            }
            else if (flavorin == 67){
              flavorout = "Enlightened - Butter Pecan"
            }
            else if (flavorin == 68){
              flavorout = "Enlightened - Red Velvet Pint"
            }
            else if (flavorin == 69){
              flavorout = "Enlightened - Mint Chocolate Chunk"
            }
          
          

          
        return (


        <div className="reviewcard">
          <h2>{props.review.name}</h2>
          <h2>{flavorout}</h2>
          <div>{props.review.rating} STARS</div>
          <div>{props.review.comment}</div>
        <div><button onClick={localDeleteHandler}>Delete</button></div>
        </div>
            
        )
}

export default ReviewCard;
