import React, { useEffect, useState } from 'react'
import {Link, useParams } from "react-router-dom";
import Checkoutpage from './Checkoutpage'
import ProductInfo from './ProductInfo'
import Hiddenelements from './Hiddenelements'

const Ordersummary = () => {
    const checkDetails =(JSON.parse(localStorage.getItem("checkDetails")))
    const details = JSON.parse(localStorage.getItem("productsData")) 
    const detail = JSON.parse(localStorage.getItem("dd"))
    const [use, setUse] = useState([])
   
    console.log(detail)


   


  return (
    <div style={{backgroundColor:"#FFFFE0",height:"200vh",backgroundSize:"cover",textAlign:"center",display:"flex",flexDirection:"column",alignItems:'center'}}>
      <h1>Order Summary</h1>
      <div style={{backgroundColor:"whitesmoke",width:"400px",borderRadius:"10px",marginBottom:"15px"}}>
      <h2 style={{marginRight:"70px",}}>Deliver To :</h2><hr/>
      
        { checkDetails.map((ea)=>{
            return(
       <div style={{marginLeft:"50px",lineHeight:"0.8",fontWeight:"500",marginRight:"5px"}}>
       <h4>{ea.name}</h4>
       <p>{ea.address}</p>
       <p>{ea.street}</p>
       <p>{ea.town},{ea.city},{ea.state},{ea.pincode}</p>
       <h6>Cell No. {ea.phoneNumber}</h6>
       </div>
            )
        })
       
}

      </div>
      <div >
        
        { detail.map((each)=>{
            return(
                <>
                <div style={{backgroundColor:"whitesmoke",width:"400px",borderRadius:"10px",marginBottom:"15px"}}>
                <h2 style={{marginRight:"40px",}}>Product & Price Details:</h2><hr/>
                <h3>{each.ProductName}</h3>
                <img style={{width:"120px"}} src={each.Image}/>
                <h5>₹ {each.Cost}</h5> 
                    <div style={{display:"flex",justifyContent:"space-between",padding:"30px",fontWeight:"700" }}>
                    <p>Price</p>
                    <p>₹ {each.Cost}</p>
                    </div>
                    <div style={{display:"flex",justifyContent:"space-between",padding:"20px",fontWeight:"700" }}>

                    <p>Delivey Charges</p> 
                    <p><span>Free Delivey</span></p>
                    </div>
                    <p style={{fontWeight:"800",padding:"10px"}}>Total Amount ₹ {each.Cost}</p>
                </div>
                
                </>
                
              )
        })}   
      </div>
<h2 className='total'>Total Items Amount ₹ {detail.map((item) => item.Cost++).reduce(
              (total, value) => total + value,
              0
            )
            }</h2>
<Link to="/Products-payment"><button className='bg-primary text-white mt-4'  style={{width:"120px",height:"40px",border:"none",borderRadius:"8px",fontWeight:"600"}}>Continue</button></Link>
</div>
  )
}

export default Ordersummary
