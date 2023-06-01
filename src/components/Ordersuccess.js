import React, { useState } from 'react'


const Ordersuccess = () => {
    const [image1,setImage1] = useState("https://upload.wikimedia.org/wikipedia/commons/f/fd/A_star.png")
    const [image2,setImage2] = useState("https://upload.wikimedia.org/wikipedia/commons/f/fd/A_star.png")
    const [image3,setImage3] = useState("https://upload.wikimedia.org/wikipedia/commons/f/fd/A_star.png")
    const [image4,setImage4] = useState("https://upload.wikimedia.org/wikipedia/commons/f/fd/A_star.png")
    const [image5,setImage5] = useState("https://upload.wikimedia.org/wikipedia/commons/f/fd/A_star.png")

    const experinceImage1 = ()=>{
        setImage1("https://www.freepnglogos.com/uploads/star-png/star-vector-png-transparent-image-pngpix-21.png")
    }
    const experinceImage2 = ()=>{
        setImage2("https://www.freepnglogos.com/uploads/star-png/star-vector-png-transparent-image-pngpix-21.png")
    }
    const experinceImage3 = ()=>{
        setImage3("https://www.freepnglogos.com/uploads/star-png/star-vector-png-transparent-image-pngpix-21.png")
    }
    const experinceImage4 = ()=>{
        setImage4("https://www.freepnglogos.com/uploads/star-png/star-vector-png-transparent-image-pngpix-21.png")
    }
    const experinceImage5 = ()=>{
        setImage5("https://www.freepnglogos.com/uploads/star-png/star-vector-png-transparent-image-pngpix-21.png")
    }



  return (
    <div className='order-success text-center text-white'>
        <img className='success' src='https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQ4756bvrmX2Oo0HvgX-Z9xdFcD_Hxw1M-9gzmSU14&s' width="400px" />
      <h1 className='success-head'>Your Order Successfully Placed</h1>
      <div className='p-3 mt-5'>
      <h2 className='rate'>Rate the store</h2>
      <h5 className='share'>Share your experience</h5>
      <img onClick={experinceImage1} className='p-1' src={image1} width="80px" />
      <img onClick={experinceImage2} className='p-1' src={image2} width="80px" />
      <img onClick={experinceImage3} className='p-1' src={image3} width="80px" />
      <img onClick={experinceImage4} className='p-1' src={image4} width="80px" />
      <img onClick={experinceImage5} className='p-1' src={image5} width="80px" />
      </div>
      <h1 className='p-2 mt-5'>THANK YOU FOR VISITING ONLINE SHOPPING</h1>
    </div>
  )
}

export default Ordersuccess
