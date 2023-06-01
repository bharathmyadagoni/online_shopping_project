import React from "react";
import "./Home.css";

export default function Search({
  searchTerm,
  setSearchTerm,
  setCategoryProducts,
}) {
  return (
    <div>
      <input
        id="search"
        value={searchTerm}
        className=""
        type="text"
        onChange={(event) => {
          setSearchTerm(event.target.value);
          setCategoryProducts([]);
        }}
        placeholder="Search for products and category...."
      />
    </div>
  );
}
