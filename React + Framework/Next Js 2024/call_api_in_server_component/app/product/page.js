import React from "react";
import ProductList from "./productlist/page";

// Create the API call method outside of the component to make it server-side
const callApi = async () => {
  let res = await fetch("https://dummyjson.com/products");
  let data = await res.json();
  return data.products;
};

const Product = async () => {
  let products = await callApi()
  console.log(products)
  return (
    <div className="product-container">
      <h1>All Product Details Are Here...</h1>
      {
        products.map((items)=>(
          <ProductList key={items.id} items={items}/>
        ))
      }
    </div>
  );
};

export default Product;
