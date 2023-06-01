import "./Home.css";
import Mobile from "../Images/mobile.png";
import Shirt from "../Images/shirt.png";
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
import React, { useEffect, useState } from "react";
import Home from "./Home";
import Carousel from "./Carousel" ;
import ProductInfo from "./ProductInfo";
import { Link,useParams } from "react-router-dom";
import Accesseries from "../Images/Accesseries.png";
import HomeApp from "../Images/Homeapplication.jpg";
import AllBooks from "../Images/AllBooks.png";
import Dailyneeds from "../Images/Grocerys.png";
const Products = ({
  setcondition,
  searchTerm,
  clearCart,
  Data,
  handleCountIncrement,
  counterValue,
  setSearchTerm,
  det,
  categoryItems,
  categoryProducts,
  detl,
  setCategoryProducts,
  setTotalPageCount,
  totalPageCount,
  setCounterValue,
  

  
  

  
}) => {
  const PrductData = [
    {
      id:1,
      ProductName: "Mobile",
      Cost: "50000",
      Image: Mobile,
      Category: "Accessories",
    },
    { id:2, ProductName: "Shoe", Cost: "2000", Image: Shoe, Category: "Dailyneeds" },
    {
      id:3,
      ProductName: "Shirt",
      Cost: "1500",
      Image: Shirt,
      Category: "Dailyneeds",
    },
    {id:4,
      ProductName: "Laptop",
      Cost: "100000",
      Image: Laptop,
      Category: "Accessories",
    },
    { id:5,ProductName: "Books", Cost: "400", Image: Books, Category: "Books" },
    {
      id:6,
      ProductName: "Electronic Owen",
      Cost: "10000",
      Image: Owen,
      Category: "Homeapplications",
    },
    {id:7,
      ProductName: "Watch",
      Cost: "5000",
      Image: Watch,
      Category: "Accessories",
    },
    {id:8,
      ProductName: "Jeans",
      Cost: "2500",
      Image: Jeans,
      Category: "Dailyneeds",
    },
    {id:9,
      ProductName: "Grocerys",
      Cost: "2500",
      Image: Grocery,
      Category: "Homeapplications",
    },
    {id:10,
      ProductName: "Refrigerator",
      Cost: "20000",
      Image: Refrigerator,
      Category: "Homeapplications",
    },
    {id:11,
      ProductName: "Washing Machine",
      Cost: "40000",
      Image: WashingMachine,
      Category: "Homeapplications",
    },
    {id:12,
      ProductName: "Mixer Grander",
      Cost: "8000",
      Image: Mixi,
      Category: "Homeapplications",
    },
    {id:13,
      ProductName: "Engineering Books",
      Cost: "1500",
      Image: EngineerBook,
      Category: "Books",
    },
    {id:14,
      ProductName: "Medical Books",
      Cost: "9000",
      Image: MedicalBook,
      Category: "Books",
    },
    {id:15,
      ProductName: "Head Set",
      Cost: "500",
      Image: Headset,
      Category: "Accessories",
    },
  ];

  const datas =
    categoryProducts.length > 1
      ? categoryProducts
      : JSON.parse(localStorage.getItem("bb"))
      // ? JSON.parse(localStorage.getItem("bb"))
      // : PrductData;
 
      useEffect(() => {
    setTotalPageCount(datas);
  }, [categoryItems]);

  const [currentPage, setCurrentPage] = useState(
    localStorage.getItem("page") ? localStorage.getItem("page") : 1
  );
  const [itemsPerPage, setItemsPerPage] = useState(3);
  const [sortProducts, setSortProducts] = useState("asending");
  const totalPages = totalPageCount.length / itemsPerPage;
  
  const handleClick = (page) => {
    localStorage.setItem("page", page);
    setCurrentPage(localStorage.getItem("page"));
  };
  const pageNumbers = [];
  for (let i = 1; i < totalPages + 1; i++) {
    pageNumbers.push(i);
  }
  

  const start = (currentPage - 1) * itemsPerPage;
  const end = start + itemsPerPage;

  const sortproducts = datas.sort((a, z) => {
    if (sortProducts === "asending")
      return a.ProductName.localeCompare(z.ProductName);
    else if (sortProducts === "desending")
      return z.ProductName.localeCompare(a.ProductName);
    else if (sortProducts === "highcost") return z.Cost - a.Cost;
    else if (sortProducts === "lowcost") return a.Cost - z.Cost;
  });
  return (
   
    <div>
      <Home
        value={counterValue}
        clearCart={clearCart}
        setcondition={setcondition}
        searchTerm={searchTerm}
        setSearchTerm={setSearchTerm}
        categoryItems={categoryItems}
        setCategoryProducts={setCategoryProducts}
        setCounterValue={setCounterValue}
      />
<div className="category-items  container-fluid">
        <div className="row">
          <div className="col-lg-10">
            <div className="row">
              <div className="con col-md-6 col-lg-3">
                <img
                  src={Accesseries}
                  className="items-img"
                  alt="Accesseries"
                />
                <button
                  className="b"
                  onClick={() => {
                    categoryItems("Accessories");
                  }}
                >
                  Accessories
                </button>
              </div>

              <div className="con col-md-6 col-lg-3">
                <img src={Dailyneeds} className="items-img" alt="Dailyneeds" />
                <button
                  className="b"
                  onClick={() => {
                    categoryItems("Dailyneeds");
                  }}
                >
                  Dailyneeds
                </button>
              </div>
              <div className="con col-md-6 col-lg-3">
                <img
                  src={HomeApp}
                  className="items-img"
                  alt="Homeapplications"
                />
                <button
                  className="b"
                  onClick={() => {
                    categoryItems("Homeapplications");
                  }}
                >
                  Homeapplications
                </button>
              </div>
              <div className="con col-md-6 col-lg-3">
                <img
                  src={AllBooks}
                  className="items-img"
                  height="20"
                  alt="Books"
                />
                <button
                  className="b "
                  onClick={() => {
                    categoryItems("Books");
                  }}
                >
                  Books
                </button>
              </div>
            </div>
          </div>
          <div className="col-lg-2 text-center">
            <button className="button my-5" onClick={clearCart}>
              Clear Cart
            </button>
          </div>
        </div>
      </div>


      <Carousel/>
      
      <div
        style={{
          display: "flex",
          justifyContent: "space-between",
          marginLeft: "20%",
        }}
      >
        <div>
          <h1 className={"name"}>Some Products</h1>
        </div>
        <div style={{ marginBottom: "10px", marginRight: "30px" }}>
          <h5>Sort By:</h5>
          <select
            style={{ height: "30px", width: "100px", fontSize: "10px" }}
            onChange={(event) => setSortProducts(event.target.value)}
            value={sortProducts}
          >
            <option value="asending">A-Z</option>
            <option value="desending">Z-A</option>
            <option value="highcost">High to Low Prices</option>
            <option value="lowcost">Low to High Price</option>
          </select>
        </div>
      </div>
      <div className={" container"}>
        <div className="row">
          {
            // PrductData.slice(start,end)
            // JSON.parse(localStorage.getItem("bb" || "zz"))
            sortproducts.slice(start, end).map((productDetails, index) => {
              return (
                <div className="mb-4 col-md-6 col-lg-4 px-3">
                  <div className="Products text-center" key={index}>
                    <h4 style={{color:"GrayText"}}>{productDetails.ProductName}</h4>

                    <img
                      src={productDetails.Image}
                      width="150px"
                      height="200px"
                      alt={productDetails.ProductName}
                    />
                    <h6>Cost {productDetails.Cost}-/</h6>
                    <Link to={`/details/${productDetails.id}`}><button style={{float:"left", marginLeft:"10px",border:"none",borderRadius:"10px"}}>
                      
                      <svg style={{width:"20px"}} xmlns="http://www.w3.org/2000/svg" viewBox="0 0 576 512"><path d="M288 80c-65.2 0-118.8 29.6-159.9 67.7C89.6 183.5 63 226 49.4 256c13.6 30 40.2 72.5 78.6 108.3C169.2 402.4 222.8 432 288 432s118.8-29.6 159.9-67.7C486.4 328.5 513 286 526.6 256c-13.6-30-40.2-72.5-78.6-108.3C406.8 109.6 353.2 80 288 80zM95.4 112.6C142.5 68.8 207.2 32 288 32s145.5 36.8 192.6 80.6c46.8 43.5 78.1 95.4 93 131.1c3.3 7.9 3.3 16.7 0 24.6c-14.9 35.7-46.2 87.7-93 131.1C433.5 443.2 368.8 480 288 480s-145.5-36.8-192.6-80.6C48.6 356 17.3 304 2.5 268.3c-3.3-7.9-3.3-16.7 0-24.6C17.3 208 48.6 156 95.4 112.6zM288 336c44.2 0 80-35.8 80-80s-35.8-80-80-80c-.7 0-1.3 0-2 0c1.3 5.1 2 10.5 2 16c0 35.3-28.7 64-64 64c-5.5 0-10.9-.7-16-2c0 .7 0 1.3 0 2c0 44.2 35.8 80 80 80zm0-208a128 128 0 1 1 0 256 128 128 0 1 1 0-256z"/>vi</svg> View </button> </Link>
                    <button
                      value={productDetails.ProductName}
                      className={"btnn"}
                      onClick={() => {
                        handleCountIncrement({
                          data: productDetails.ProductName,
                          Image: productDetails.Image,
                          Cost: productDetails.Cost,
                          
                        });
                      }}
                    >
                      Add to Cart
                    </button>
                  </div>
                </div>
              );
            })
          }
        </div>
      </div>
      <h1 className={"thank"}>THANK YOU FOR VISITING ONLINE SHOPPING</h1>
      <div className="container">
        <div
          style={{ marginTop: "30px" }}
          className="d-flex justify-content-center"
        >
          <div>
            {pageNumbers == 1 ? "" : <button className="page">Pages</button>}
          </div>
          <div className="">
            {pageNumbers == 1
              ? []
              : pageNumbers.map((number) => (
                  <button
                    className="pagenum  active"
                    onClick={() => handleClick(number)}
                  >
                    {number}
                  </button>
                ))}
          </div>
        </div>
      </div>
    </div>
  );
};
export default Products;
