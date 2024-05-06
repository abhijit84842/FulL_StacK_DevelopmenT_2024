"use client";
import Link from "next/link";
import { useState } from "react";

const AddProduct = () => {
  const [name, setName] = useState("");
  const [price, setPrice] = useState("");
  const [company, setCompany] = useState("");
  const [color, setColor] = useState("");

  const handleAddProduct = async () => {
    const res = await fetch("http://localhost:3000/api/products", {
      method: "POST",
      body: JSON.stringify({ name, price, company, color }),
    });
    let result = await res.json();
    if (result.success) {
      alert("New product Added Successfully..");
    }
  };

  return (
    <div>
      <h1>Add Product Details..</h1>
      <input
        type="text"
        value={name}
        placeholder="product name"
        onChange={(event) => setName(event.target.value)}
      />
      <input
        type="text"
        value={price}
        placeholder="product price"
        onChange={(event) => setPrice(event.target.value)}
      />
      <input
        type="text"
        value={company}
        placeholder="compnay name"
        onChange={(event) => setCompany(event.target.value)}
      />
      <input
        type="text"
        value={color}
        placeholder="product color"
        onChange={(event) => setColor(event.target.value)}
      />
      <button onClick={() => handleAddProduct()}>Add Product</button>
      <div>
        <Link href="/">Back to home</Link>
      </div>
    </div>
  );
};
export default AddProduct;
