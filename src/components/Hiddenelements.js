import "./Home.css";
import Home from "./Home";
import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import Ordersummary from "./Ordersummary";

const Ulelement = ({ setcondition, Data, clearCart, changeItems ,setSearchTerm,searchTerm,setCategoryProducts}) => {
  // const datafromLocal =localStorage.getItem("dd");
//   const d = JSON.parse(localStorage.getItem("dd")) || JSON.parse(localStorage.getItem("abcd"))

  return (
    <div>
       
    
 
     <Home setcondition={setcondition} setSearchTerm={setSearchTerm} searchTerm={searchTerm} setCategoryProducts={setCategoryProducts} />
      
      <div className="cart-details"> 
      {JSON.parse(localStorage.getItem("dd")).length<1?<h1 className="cart-head">"Cart-Items Empty"</h1>:<h1 className="cart-head">Cart-Item</h1>}
        <ul> 
          {
            JSON.parse(localStorage.getItem("dd")).map((value, index) => {
              return (
                <div className="ul-ele"  key={index}>
                  <h5>{value.data}</h5>
                  <img
                    className="cart-image"
                    src={value.Image}
                    alt={value.data} 
                  />
                  <p>Price:{value.Cost}</p>
                 
                  <button className="remove-button"
                    onClick={() => {
                      changeItems();
                    }}
                  >
                    Remove Cart
                  </button>
                  
                </div>
                
              );
            })
          }
          
        </ul>
      </div>
      <div className="text-center">
        
      <Link to="/Checkout-Products"><button className="btn btn-success">Place Order</button></Link>
      </div>
    </div>
  );
};
export default Ulelement;
