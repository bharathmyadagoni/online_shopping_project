// import React, { useState,useCallback } from "react";
import Mobile from "../Images/mobile.png";
import Shirt from "../Images/shirt.png";
import Products from "./Products";
import Shoe from "../Images/shoe.png";
import Books from "../Images/Books.png";
import Laptop from "../Images/laptop.png";
import Owen from "../Images/Electronicowen.png";
import Refrigerator from "../Images/Refrigerator.png";
import Grocery from "../Images/Grocerys.png";
import Jeans from "../Images/jeans.png";
import Watch from "../Images/watch.png";
import WashingMachine from "../Images/Washingmachine.png";
import Mixi from "../Images/Mixergrander.png";
import EngineerBook from "../Images/EngineeringBook.png";
import MedicalBook from "../Images/MedicalBook.png";
import Headset from "../Images/Headset.png";
import { Link,useParams } from "react-router-dom";
import Home from "./Home";
import img from "../Images/cart.png";
import ImageZoom from "react-image-zooom";
import Ordersummary from "./Ordersummary";
import Hiddenelements from "./Hiddenelements"


import 'react-medium-image-zoom/dist/styles.css'
const PrductData = [
  {id:1,
    ProductName: "Mobile",
    Cost: "50000",
    Image: Mobile,
    Category: "Accessories",
    Para:"Apple iPhone 14 Plus-Black",
    Brand:"Apple",
    Model:"iPhone 14 Plus",
    Color:"Black"
  },
  {id:2,Brand:"Nike",
  Color:"Black&Blue",Model:"N-S44", Para:"Nike S44-Black&Blue", ProductName: "Shoe", Cost: "2000", Image: Shoe, Category: "Dailyneeds" },
  {id:3,
    ProductName: "Shirt",
    Cost: "1500",
    Image: Shirt,
    Category: "Dailyneeds",
    Para:"Basics-Fashions-Blue",
    Brand:"Levis",
    Model:"L-123#",
    Color:"Blue"
  },
  { id:4,
    ProductName: "Laptop",
    Cost: "100000",
    Image: Laptop,
    Category: "Accessories",
    Para:"HP Ryzen7-15inch-Silver",
    Brand:"HP",
    Model:"Pavilian",
    Color:"Silver"
  },
  {id:5,Brand:"SIA",
  Color:"WhiteSmoke",Model:"H-147", Para:"HorryPotter-Books", ProductName: "Books", Cost: "400", Image: Books, Category: "Books" },
  {
    id:6,
    ProductName: "Electronic Owen",
    Cost: "10000",
    Image: Owen,
    Category: "Homeapplications",
    Para:"LG Mc12-Owen(Black) ",
    Brand:"LG",
    Model:"L-$367",
    Color:"Black"
  },
  {
    id:7,
    ProductName: "Watch",
    Cost: "5000",
    Image: Watch,
    Category: "Accessories",
    Para:"Titan t14-Gold&Black",
    Brand:"Titan",
    Model:"T-G12",
    Color:"Gold&Black"
  },
  {
    id:8,
    ProductName: "Jeans",
    Cost: "2500",
    Image: Jeans,
    Category: "Dailyneeds",
    Para:"PepeJeans-Blue",
    Brand:"Levis",
    Model:"Levies-s13",
    Color:"Blue"
  },
  {
    id:9,
    ProductName: "Grocerys",
    Cost: "2500",
    Image: Grocery,
    Category: "Homeapplications",
    Para:"Home Made Appliances",
    Brand:"Home Appliances",
    Model:"Grocerys",
    Color:"Depens Up On Change"
  },
  {
    id:10,
    ProductName: "Refrigerator",
    Cost: "20000",
    Image: Refrigerator,
    Category: "Homeapplications",
    Para:"Samsung lc14-Silver",
    Brand:"Samsung",
    Model:"SM-Lc14e",
    Color:"Silver"
  },
  {
    id:11,
    ProductName: "Washing Machine",
    Cost: "40000",
    Image: WashingMachine,
    Category: "Homeapplications",
    Para:"TCL 14ER-Silver",
    Brand:"TCL",
    Model:"Tc-$789",
    Color:"Silver"
  },
  {
    id:12,
    ProductName: "Mixer Grander",
    Cost: "8000",
    Image: Mixi,
    Category: "Homeapplications",
    Para:"Prestige E3R4Plus-Red",
    Brand:"Prestige",
    Model:"PM$-45$567",
    Color:"Red"
  },
  {
    id:13,
    ProductName: "Engineering Books",
    Cost: "1500",
    Image: EngineerBook,
    Category: "Books",
    Para:"SIA-Spectrum Engineering Books",
    Brand:"Engineering-SIA",
    Model:"Enng-344",
    Color:"Red"
  },
  {
    id:14,
    ProductName: "Medical Books",
    Cost: "9000",
    Image: MedicalBook,
    Category: "Books",
    Para:"DividJohn-Spectrums Medical Books",
    Brand:"Medical-Spectrums",
    Model:"M-5667",
    Color:"Light-Blue"
  },
  {
    id:15,
    ProductName: "Head Set",
    Cost: "500",
    Image: Headset,
    Category: "Accessories",
    Para:"Boat B13Pro-Black",
    Brand:"Boat",
    Model:"B-12$5678",
    Color:"Black"
  },
];


export default function ProductInfo({setcondition,handleCountIncrement,setCategoryProducts,searchTerm,setSearchTerm,
})
 {
  const {id} =useParams()
  console.log(id)
const userDetails = PrductData.find((each)=>
    each.id == id
)

localStorage.setItem("dd",JSON.stringify([userDetails]))
  return (
    <div  style={{backgroundColor:"cadetblue",backgroundSize:"cover",height:"100%",color:"white",width:"100vw"}} className="p-3" >
            <div>
      <Home setcondition={setcondition} setSearchTerm={setSearchTerm} setCategoryProducts={setCategoryProducts} />
            </div>
            <div className="container">
            {/* <Link to={userDetails.id} key={id}> */}
                <div className="row" style={{display:"flex",marginTop:"40px",padding:"20px"}}>
                <div className="col-md-6 col-sm-12 col-lg-6">
            <h1 style={{color:"white", fontSize: "45px",textAlign:"center" }}>{userDetails.ProductName}</h1>
            <p  style={{color:"white",textAlign:"center",fontSize:"30px"}}>{userDetails.Para}</p>
            <ImageZoom className="product-img"
              style={{ backgroundColor: "azure",borderRadius:"8px" }}
              src={userDetails.Image}
              width="450px"
              height="500px" zoom="200"
            /> 
     <h2 style={{color:"white",textAlign:"center",fontSize:"50px"}} className="p-3">₹ {userDetails.Cost}/-</h2>
            <div className="text-center">{ 
          
           <button
                      className={"cartbutton"}
                      onClick={ 
                        () => {
                        handleCountIncrement(
                            { 
                                data:userDetails.ProductName,
                                Image: userDetails.Image,
                                Cost:userDetails.Cost,
                        }
                        )
                      }
                    }
                    >
                      Add to Cart
                    </button>
                    
                }
            
                <Link to="/Checkout-Products"><button className="cartbutton ml-2">Buy Now</button></Link>
                
                </div>

            </div>
            <div style={{display:"flex",alignItems:"center"}}>
                <div style={{marginLeft:"30px"}}>
            <ul  style={{color:"white",listStyle:"none",fontSize:"30px"}}>
            <li style={{fontSize:"40px",fontWeight:"bold"}}>Product Details :</li>
              <li>Brand: {userDetails.Brand}</li>
              <li>Model Name: {userDetails.Model}</li>
              <li>Colour : {userDetails.Color}</li>
            </ul>
            </div>
            </div>
            </div>
            <div style={{color:"white",padding:"5px",fontSize:"30px"}}>
            <h2 style={{fontSize:"40px"}}>Descriptions :</h2>
            <p style={{lineHeight:"1.5"}}>
            There are several things to consider in order to help your book achieve its greatest potential discoverability. Readers, librarians, and retailers can't purchase a book they can't find, and your book metadata is responsible for whether or not your book pops up when they type in search terms relevant to your book. Book metadata may sound complicated, but it consists of all the information that describes your book, including: your title, subtitle, series name, price, trim size, author name, book description, and more. There are two metadata fields for your book description: the long book description and the short book description. Although both play a role in driving traffic to your book, they have distinct differences. 
            </p>
            </div>
            {/* </Link> */}
          </div>
                
    </div>
    
  );
}
