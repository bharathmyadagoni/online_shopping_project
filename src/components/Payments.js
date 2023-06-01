import React, { useState } from 'react'
import Accordion from 'react-bootstrap/Accordion';
import { Link } from 'react-router-dom';

const Payments = () => {
    const detail = (JSON.parse(localStorage.getItem("dd")))
    const [amount,setAmount] = useState(0)
    console.log(typeof(amount))
    console.log(detail)

    const upi = ()=>{
        setAmount(15)
    }
    const ctreditCard = ()=>{
        let cost = 0
        for(let i of detail){
             cost += i.Cost
        }
      let convertCost = parseInt(cost)
       setAmount(Math.floor((convertCost*10)/100))
    }
const wallet = ()=>{
    setAmount(0)
}
const netBanking =()=>{
    setAmount(0)
}
const cash =()=>{
    setAmount(0)
}

  return (
    <div  style={{display:"flex", flexDirection:"column",alignItems:"center",backgroundColor:"#FFFFE0",height:"150vh"}}>
        <h2>Payments</h2>        
      <div className='accordion'>
    <Accordion defaultActiveKey="0" className='acc'> <img src='https://www.pngmart.com/files/9/Special-offer-PNG-Photos.png' width="80px"/>  Offers 
      <Accordion.Item className='accordion-item' eventKey="0">
        <Accordion.Header className='accordion-heading p-0'>10% Cashback On any Credit Card</Accordion.Header>
        <Accordion.Body>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
          eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad
          minim veniam, quis nostrud exercitation ullamco laboris nisi ut
          aliquip ex ea commodo consequat. Duis aute irure dolor i
        </Accordion.Body>
      </Accordion.Item>
      <Accordion.Item eventKey="1">
        <Accordion.Header className='accordion-heading'>₹ 15 Off on UPI Txns Upto 5 times</Accordion.Header>
        <Accordion.Body>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
          eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad
          minim veniam, quis nostrud exercitation ullamco laboris nisi ut
          aliquip ex ea commodo consequat. Duis aute irure dolor in
        </Accordion.Body>
      </Accordion.Item>
    </Accordion>
    </div>
      <div style={{backgroundColor:"whitesmoke",width:"600px",borderRadius:"10px",marginBottom:"50px",padding:"20px",height:"370px"}}>
        <h3>All other options</h3> <hr/>
        <div style={{fontSize:"30px",}}>
        <input name='payment' onClick={cash}  className='m-2 radio' id='cash' value="cash" type="radio"/>
        <label  htmlFor='cash'>Cash&Delivery</label>
        </div>
        <div style={{fontSize:"30px",}}>
        <input onClick={upi} name='payment'  className='m-2 radio' id='UPI' value="UPI" type="radio"/>
        <label  htmlFor='upi'>UPI</label>
        </div>
        <div style={{fontSize:"30px",}}>
        <input onClick={wallet} name='payment' className='m-2 radio' type="radio" id='wallet'/>
        <label htmlFor='wallet'>Wallet / Postpaid</label>
        </div>
        <div style={{fontSize:"30px",}}>
        <input name='payment' onClick={ctreditCard} className='m-2 radio' type="radio" id='credit'/>
        <label htmlFor='credit'>Credit / Debit / ATM Card</label>
        </div>
        <div style={{fontSize:"30px",}}>
        <input onClick={netBanking} name='payment' className='m-2 radio'type="radio" id='netbanking'  />
        <label htmlFor='netbanking' >Net Banking</label>
        </div>
                    <div style={{backgroundColor:"whitesmoke",width:"600px",borderRadius:"10px",marginBottom:"20px",padding:"20px",marginTop:"20px",height:"410px"}}>
                    <h2 >PRICE DETAILS</h2> <hr/>
                    <div style={{display:"flex",justifyContent:"space-between",padding:"10px",fontWeight:"700" }}>
                    <p>Price</p>
                    <p>₹ 


                   {detail.map((item) => item.Cost++).reduce(
              (total, value) => (total + value),
              0
            )}
                    </p>
                    </div>
                    <div style={{display:"flex",justifyContent:"space-between",padding:"10px",fontWeight:"700" }}>

                    <p>Delivey Charges</p> 
                    <p><span className='text-success'>Free</span></p>
                    </div>
                    <div style={{display:"flex",justifyContent:"space-between",padding:"10px",fontWeight:"700" }}>
                    <p>Sale Fee</p>
                    <p>₹ 10</p>
                    </div>
                    <div style={{display:"flex",justifyContent:"space-between",padding:"10px",fontWeight:"700" }}>
                    <p>Offer Discount</p>
                    <p>₹ {amount}</p>
                    </div><hr/>
                    <div style={{display:"flex",justifyContent:"space-between",padding:"10px",fontWeight:"700" }}>
                    <p>Amount Payable</p>
                    <p>₹ 
      {detail.map((item) => item.Cost++).reduce(
    (total, value,index) => (total+ value-index),
    0+(10)
    )-(amount)}</p>
                    </div>
                    
                </div>
        
        <div className='ml-6 p-3'>
                 <img className='payment-img mr-4' src='https://www.freepnglogos.com/uploads/visa-card-logo-9.png' width="60px" height="30px"/>
                 <img className='payment-img mr-4' src='https://imageio.forbes.com/blogs-images/steveolenski/files/2016/07/Mastercard_new_logo-1200x865.jpg?format=jpg&width=960' width="60px" height="30px"/>
                 <img className='payment-img mr-4' src='https://upload.wikimedia.org/wikipedia/commons/0/0f/RuPay-Logo.png' width="60px" height="30px"/>
                 <img className='payment-img mr-4' src='https://getlogovector.com/wp-content/uploads/2019/10/pci-dss-compliant-logo-vector.png' width="60px" height="30px"/>
                 <img className='payment-img mr-4' src='https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSUzmUjALRvYyk-9N_cmcJviK8v6KwwizHx2_C4yBLF&s' width="60px" height="30px"/>
                    
                    </div>
                    <div className='text-center'>
                       <Link to="/Order-Success"><button className='order-button'>Confirm Your Order</button></Link>
                    </div>
    </div>
    </div>
  )
}

export default Payments
