"use client"

import React, { useEffect, useState } from "react";
import ProductItems from "./productitems/page";

const ProductList = () => {
  const initialValue=[]
  const [Product , SetProduct]=useState(initialValue)
  // console.log(Product)


  const handleApi=async()=>{
    let res = await fetch("https://dummyjson.com/products");
    let data = await res.json();
    SetProduct(data.products)
  }
 

  useEffect(() => {
    handleApi()

  },[]);



  // console.log(Product);
  return (
    <div className="product-container">
      <h1>All Product items here...</h1>
      {Product.map((items) => (
        <ProductItems key={items.id} items={items} />
      ))}
    </div>
  );
};

export default ProductList;
