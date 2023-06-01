import './App.css';
import Home from './components/Home';
import Product from './components/Products';
import Ulelement from './components/Hiddenelements';
import { useState} from 'react';
import { BrowserRouter, Route,  Routes,useParams} from 'react-router-dom';
import Mobile from "./Images/mobile.png"
import Shirt from "./Images/shirt.png"
import Shoe from "./Images/shoe.png"
import Books from "./Images/Books.png"
import Laptop from "./Images/laptop.png"
import Owen from "./Images/Electronicowen.png"
import Refrigerator from "./Images/Refrigerator.png"
import Grocery from "./Images/Grocerys.png"
import Jeans from "./Images/jeans.png"
import Watch from "./Images/watch.png"
import WashingMachine from "./Images/Washingmachine.png"
import Mixi from "./Images/Mixergrander.png"
import EngineerBook from "./Images/EngineeringBook.png"
import MedicalBook from "./Images/MedicalBook.png"
import Headset from "./Images/Headset.png"
import ProductInfo from './components/ProductInfo';
import Search from './components/Search';
import Login from './components/Login';
import Checkoutpage from './components/Checkoutpage'
import Ordersummary from './components/Ordersummary';
import Payments from './components/Payments';
import Ordersuccess from './components/Ordersuccess';
function App() {

const PrductData = [{id:1,ProductName: "Mobile", Cost:"50000" ,Image:Mobile,Category:"Accessories" },{id:2,ProductName: "Shoe", Cost:"2000",Image:Shoe,Category:"Dailyneeds"},{id:3,ProductName: "Shirt", Cost:"1500",Image:Shirt,Category:"Dailyneeds"},{id:4,ProductName: "Laptop", Cost:"100000",Image:Laptop,Category:"Accessories"},{id:5,ProductName: "Books", Cost:"400",Image:Books,Category:"Books"},{id:6,ProductName: "Electronic Owen", Cost:"10000",Image:Owen,Category:"Homeapplications"},{id:7,ProductName: "Watch", Cost:"5000",Image:Watch,Category:"Accessories"},{id:8,ProductName: "Jeans", Cost:"2500",Image:Jeans,Category:"Dailyneeds"},{id:9,ProductName: "Grocerys", Cost:"2500",Image:Grocery,Category:"Homeapplications"},{id:10,ProductName: "Refrigerator", Cost:"20000",Image:Refrigerator,Category:"Homeapplications"},{id:11,ProductName: "Washing Machine", Cost:"40000",Image:WashingMachine,Category:"Homeapplications"},{id:12,ProductName: "Mixer Grander", Cost:"8000",Image:Mixi,Category:"Homeapplications"},{id:13,ProductName:"Engineering Books",Cost:"1500",Image:EngineerBook,Category:"Books"},{id:14,ProductName:"Medical Books",Cost:"9000",Image:MedicalBook,Category:"Books"},{id:15,ProductName:"Head Set",Cost:"500",Image:Headset,Category:"Accessories"}]


  const [condition,setcondition]=useState(false)
  const [Data,setData] =useState([])
  const [searchTerm,setSearchTerm] = useState("")
  const [counterValue,setCounterValue] = useState(0)
  const [categoryProducts , setCategoryProducts] =useState([])
  const [totalPageCount,setTotalPageCount]=useState(PrductData)

  const handleCountIncrement = (inputData) =>{
    console.log(inputData)
    setData([...Data,inputData])
    setCounterValue(counterValue + 1)
    localStorage.setItem("button",counterValue+1)
    localStorage.setItem("dd",JSON.stringify([...Data,inputData]))

}

const changeItems = (item)=>{
  setCounterValue(counterValue-1)
  localStorage.setItem("button",counterValue-1)
  const items =Data.splice(item,1);
  localStorage.setItem("dd",JSON.stringify([...Data]))
}




const clearCart = () => {
  setCounterValue(0)
  setData([])
  localStorage.setItem("button",0)
  localStorage.setItem("dd",JSON.stringify([]))
}


   
    const det = PrductData.filter((eachItem)=>{
      return(
      eachItem.ProductName.toLowerCase().includes(searchTerm.toLowerCase()) || eachItem.Category.toLowerCase().includes(searchTerm.toLowerCase())
      )
    })
    localStorage.setItem("bb",JSON.stringify(det))


const categoryItems=(categoryItem)=>{
const detl = PrductData.filter((each)=>each.Category===categoryItem)
setCategoryProducts([...detl])

localStorage.setItem("zz",JSON.stringify(detl))
}


  return(
    <div>
    <BrowserRouter>
      <Routes>
        <Route path='/' element = 
      {condition ?<Ulelement setcondition={setcondition} Data={Data} clearCart={clearCart}  changeItems={changeItems} categoryItems={categoryItems} setCategoryProducts={setCategoryProducts} setSearchTerm={setSearchTerm} searchTerm={searchTerm}/>:
      <>
      
     <Product totalPageCount={totalPageCount} setTotalPageCount={setTotalPageCount} det={det} setCategoryProducts={setCategoryProducts}  setSearchTerm={setSearchTerm} categoryProducts={categoryProducts} setcondition={setcondition} clearCart={clearCart} counterValue={counterValue} handleCountIncrement={handleCountIncrement} Data={Data} setCounterValue={setCounterValue} searchTerm={searchTerm} categoryItems={categoryItems} PrductData={PrductData}  />
     </>
      }  />
      {/* <Route path="/" element={<Home/>} /> */}
      <Route path='/details/:id' element={condition ?<Ulelement setcondition={setcondition} Data={Data} clearCart={clearCart}  changeItems={changeItems} categoryItems={categoryItems}/>: 
      <ProductInfo setcondition={setcondition} handleCountIncrement={handleCountIncrement} setSearchTerm={setSearchTerm} setCategoryProducts={setCategoryProducts} /> 
      } />
      <Route path='/Login' element={<Login/>} />
      <Route path='/Checkout-Products' element={<Checkoutpage/>}/>
      <Route path='/CheckOut.OrderSummary' element={<Ordersummary />}/>
      <Route path='/Products-payment' element ={<Payments/>} />
      <Route path='/Order-Success' element={<Ordersuccess/>} />
      </Routes>
      
      </BrowserRouter>
    </div>


  );
}

export default App;
    