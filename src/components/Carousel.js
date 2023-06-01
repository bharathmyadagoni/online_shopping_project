import React from 'react'
import Carousel from 'react-bootstrap/Carousel';
// import proc from "../Images/product.png"
// import online from "../Images/onlineShopping.png"
import di from "../Images/Magazine.png"
export default function Carousels() {
  return (
    <div>
      <Carousel >
      <Carousel.Item>
        <img
          className="d-block  w-100"
          src="https://m.media-amazon.com/images/I/71YEY+JRlKL._SX3000_.jpg"
          alt="Frist slide"
          height="250px" width="950px"
        />
      </Carousel.Item>
      
      <Carousel.Item>
        <img
          className="d-block  w-100"
          src={di}
          alt="Second slide"
          height="250px" width="950px"
        />
      </Carousel.Item>
      <Carousel.Item>
        <img
          className="d-block  w-100"
          src="https://images-eu.ssl-images-amazon.com/images/G/31/img18/HomeImprovement/GW/BigBathroom/Hi-Big-bathroom-sale-_pc_hero_3000x1200_lifestyle_un-rec._CB592139723_.jpg"
          alt="Third slide"
          height="250px" width="950px"
        />
      </Carousel.Item>
      <Carousel.Item>
        <img
          className="d-block  w-100"
          src="https://images-eu.ssl-images-amazon.com/images/G/31/img23/Softlines_JWL_SH_GW_Assets/April_2023/BVD/UNREC/Shoes/shoes_3000._CB591742334_.jpg"
          alt="Third slide"
          height="250px" width="950px"
        />
      </Carousel.Item>
      <Carousel.Item>
        <img
          className="d-block  w-100"
          src="https://m.media-amazon.com/images/I/51ovs76vmtL._SX3000_.jpg"
          alt="Frist slide"
          height="250px" width="950px"
        />
      </Carousel.Item>
      <Carousel.Item>
        <img
          className="d-block  w-100"
          src="https://images-eu.ssl-images-amazon.com/images/G/31/img23/IN/OHL/GW/April/BVD/HERO/Unrec/PC_Hero_3000x1200_3_2x._CB592081458_.jpg"
          alt="Frist slide"
          height="250px" width="950px"
        />
      </Carousel.Item>
    </Carousel>
    </div>
  )
}

