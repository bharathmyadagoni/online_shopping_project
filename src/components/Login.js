import React from 'react'
export default function Login() {
  return (
  <div className='log-in'>
    <div className='text-center pt-3 pl-3 ml-2' style={{backgroundColor:"cyan",height:"30vh",margin:"20px",width:"350px",}}>
   
      <form>
        <h4>Log in Details</h4>
       <div className="input-container">
         <h6>Username </h6>
         <input type="text"  required />
        
       </div>
       <div className="input-container">
         <h6>Password </h6>
         <input type="password" required />
       </div>
       <div className="button-container">
         <input type="submit" />
       </div>
      <p>You Don't Have Account<a href='/Singup'>Click Here!</a></p>
     </form>
     
    </div>
    </div>
  )
}
