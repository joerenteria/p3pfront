import React from "react";
import { BrowserRouter , Route , NavLink , Switch } from "react-router-dom";
import NavBar from "./NavBar";
import ReactDOM from "react-dom";
import { useEffect, useState } from 'react';
import Home from './Home';
import Product from './Product';
import Review from './Review';
import ReviewForm from './ReviewForm';
import './App.css';
import Logo from './images/logo.png';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'

function App() {

  const[products, setProducts] = useState( [] )
  const[reviews, setReviews] = useState( [] )

  useEffect( ()=>{
    fetch("http://localhost:9292/products")
    .then(r => r.json())
    .then(fetchedProducts =>{ setProducts(fetchedProducts)
    })
  } , [] )

  useEffect( ()=>{
    fetch("http://localhost:9292/reviews")
    .then(r => r.json())
    .then(fetchedReviews =>{ setReviews(fetchedReviews)
    })
  } , [] )

  const deleteReview =(reviewToDelete)=>{
    const id = reviewToDelete.id
    fetch(`http://localhost:9292/reviews/${id}`, {
      method: 'DELETE'
    })

      let reviewsRemaining = reviews.filter(eachReview => eachReview.id != reviewToDelete.id)
      setReviews( [...reviewsRemaining] )

  }
  const addNewReview = (reviewToAdd)=>{

    const body = JSON.stringify({
      name: reviewToAdd.name,
      rating: reviewToAdd.rating,
      comment: reviewToAdd.comment,
      product_id: reviewToAdd.product_id
    })
    
    fetch("http://localhost:9292/reviews", {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body
  })
    .then((r) => r.json())
    .then((newReview) => {setReviews(reviews.concat(newReview))
})
}
  // {
  //   users.map(eachUser =>{ return <User key={eachUser.id} userProp={eachUser}  
  //     inAppJsDeleteUser={inAppJsDeleteUser} 
  //   /> })
  // }

return (
  <div className="App">
    <img class="logo" src={Logo} alt="logo"/>
   
    <BrowserRouter>
        <NavBar/>
        <FontAwesomeIcon icon="fa-solid fa-ice-cream" />
          <Switch>
            <Route path="/showproducts">
              <Product products={products}
              reviews={reviews}
              />
            </Route>

            <Route path="/showreviews">
              <Review reviews={reviews}
              deleteReview={deleteReview}
              />
            </Route>

            <Route path="/reviewform">
              <ReviewForm addNewReview={addNewReview} reviews={reviews}/>
            </Route>

            <Route path="/">
              <Home/>
            </Route>

          </Switch>
    </BrowserRouter>
   </div>

);
}

export default App;
