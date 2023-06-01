import "./Home.css";
import img from "../Images/cart.png";
import React, { useState } from "react";
import { Link } from "react-router-dom";
import Search from "./Search";


const Home = ({
 setCategoryProducts,
 setcondition,
 searchTerm,
 setSearchTerm,

}) => {
  return (
    <div>
      <nav className="navbar navbar-expand-lg bg-primary fixed-top text-white p-3" id="navbar">
        <div className="container">
          <a class="navbar-brand text-white" id="head-name" href="/">
            Online Shopping
          </a>
          <button
            class="navbar-toggler"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#navbarSupportedContent"
            aria-controls="navbarSupportedContent"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
          <span class="navbar-toggler-icon">≡</span>
          </button>

          <div class="collapse navbar-collapse" id="navbarSupportedContent">
            <ul class="navbar-nav me-auto mb-2 mb-lg-0">
              <li class="nav-item">
                <li class="nav-link">
                  <Link id="product" to="/">
                    Home
                  </Link>
                </li>
              </li>
              <li class="nav-item dropdown">
          <a class="nav-link dropdown-toggle text-white" href="#" id="navbarDropdown" role="button" data-bs-toggle="dropdown" aria-expanded="false">
            More
          </a>
          <ul class="dropdown-menu"  aria-labelledby="navbarDropdown">
            <li><a class="dropdown-item" id="more" href="#">Notification Preferance</a></li>
            <li><hr class="dropdown-divider" /></li>
            <li><a class="dropdown-item"id="more" href="#">24/7 Coustomercare Service</a></li>
            <li><hr class="dropdown-divider" /></li>
            <li><a class="dropdown-item" id="more" href="#">Download App</a></li>
          </ul>
        </li>
            </ul>
            <form class="d-flex">
              <Search
                class="form-control me-2"
                id="search"
                type="search"
                placeholder="Search"
                aria-label="Search"
                searchTerm={searchTerm}
                setSearchTerm={setSearchTerm}
                setCategoryProducts={setCategoryProducts}
              />

              <button
                className={"iconbutton"}
                onClick={() => {
                  setcondition((data) => !data);
                }}
              >
                <a href="" class={"a"}>
                  {localStorage.getItem("button")}
                </a>
                <img
                  className={"icon"}
                  src={img}
                  width="40"
                  height="40"
                  alt="Cart"
                />
              </button>
            </form>
            <a class="login-trigger" href="#" data-target="#login" data-toggle="modal"><button className="login-button">LogIn</button></a>


<div id="login" class="modal fade" role="dialog">
  <div class="modal-dialog">
    
    <div class="modal-content">
      <div class="modal-body">
        <button data-dismiss="modal" class="close">&times;</button>
        <h6>Login</h6>
        <form>
          <input type="text" name="username" class="username form-control" placeholder="Username"/>
          <input type="password" name="password" class="password form-control" placeholder="password"/>
          <input class="btn login" type="submit" value="Login" />
        </form>
      </div>
    </div>
  </div>  
</div>
</div>
</div>
 </nav>
</div>
  );
};
export default Home;
