"use client";
import { useEffect, useState } from "react";
import ProductList from "./productlist/page";

export default function Home() {
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



  return (
    <main className="main-container">
      <ProductList Product={Product} />
    </main>
  );
}
