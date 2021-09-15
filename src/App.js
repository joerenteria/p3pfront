import React from "react";
import { BrowserRouter , Route , NavLink , Switch } from "react-router-dom";
import NavBar from "./NavBar";
import ReactDOM from "react-dom";
import { useEffect, useState } from 'react';
import Home from './Home';
import Product from './Product';
import Review from './Review';
import './App.css';





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







  return (
    <div className="App">

      

      
      
        











<BrowserRouter>
        <NavBar/>

            <Switch>

                

                <Route path="/showproducts">

                  <Product
                  products={products}
                  />

                </Route>

                <Route path="/showreviews">

                  <Review
                  reviews={reviews}
                  />

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
