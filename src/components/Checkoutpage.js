import { Link,useNavigate} from 'react-router-dom'
import React,{useState,} from 'react'
import Ordersummary from './Ordersummary'
const Checkoutpage = () => {
  const [name,setName] = useState()
  const [phoneNumber,setPhoneNumber] = useState("")
  const [state,setState] = useState("")
  const [pincode,setPincode] = useState("")
  const[city,setCity] = useState("")
  const [town,setTown] = useState("")
  const [address,setAddress] = useState("")
  const [street,setStreet] = useState("")
  const [user,setUser] = useState([])
  const [show,setShow] = useState(true)

  const navigate = useNavigate()
  const submitDetails = ()=>{
    
    const userData = [{
      name,
      phoneNumber,
      pincode,
      state,
      city,
      town,
      address,
      street
  }]
  // navigate("/CheckOut.OrderSummary")
    setUser([...user,...userData])
    setName("")
    setPhoneNumber("")
    setAddress("")
    setShow(false)
    alert("Successfully Adding Your Delivery Address Click On Countinue")
}
  console.log(user)
  localStorage.setItem("checkDetails",JSON.stringify(user))

  return (
    <div style={{display:"flex",flexDirection:"column",alignItems:"center",backgroundColor:"#FFFFE0",height:"100vh"}} className=''>
      <form >
      <h2 className='mt-3'>Add Delivery Address</h2>
      <div className='p-3'>
      <input value={name} onChange={(event)=>{setName(event.target.value)}}style={{width:"400px"}} className='form-control ' type="text" required placeholder='Full Name (Required)*'/>
      </div>
      <div className='p-2'>
      <input style={{width:"400px"}} onChange={(event)=>{setPhoneNumber(event.target.value)}} className='form-control' type="number" required placeholder='Phone number (Required)*'/>
      </div>
      <div className='p-3 mt-2'>
      <input onChange={(event)=>{setPincode(event.target.value)}}  style={{width:"200px"}} className='mr-2' type="number" required placeholder='Pincode (Required)*'/>
      <select onChange={(event)=>{setState(event.target.value)}}  style={{width:"200px"}} className='' type="select"  required placeholder='State (Required)*'>
      <option>Telangana</option>
      <option>Tamilnadu</option>
      <option>Andra</option> </select>
      </div>
      <div className='mt-3'>
      <input onChange={(event)=>{setCity(event.target.value)}} style={{width:"200px"}} className='mr-2' type="text" required placeholder='City (Required)*'/>
      <input onChange={(event)=>{setTown(event.target.value)}}  style={{width:"200px"}} className='' type="text" required placeholder='Town (Required)*'/>

      </div>
      <div className='p-3'>
      <input onChange={(event)=>{setAddress(event.target.value)}} style={{width:"400px"}} className='form-control' type="text" required placeholder='House No., Building Name (Required)*'/>
      </div>
      <input onChange={(event)=>{setStreet(event.target.value)}} style={{width:"400px"}} className='form-control' type="text" required placeholder='Road name,Area, Colony (Required)*'/>
      <div className='p-3'>
        
      { show ?(<button onClick={submitDetails} className='bg-primary text-white'  style={{width:"120px",height:"40px",border:"none",borderRadius:"8px",fontWeight:"600"}}  type="submit" value="Next">Add</button>):
       (<Link to="/CheckOut.OrderSummary"><button className='bg-primary text-white'  style={{width:"120px",height:"40px",border:"none",borderRadius:"8px",fontWeight:"600"}}>Continue</button></Link> )}
      
       
      
      </div>
      </form>
      

    </div>
  )
}

export default Checkoutpage
