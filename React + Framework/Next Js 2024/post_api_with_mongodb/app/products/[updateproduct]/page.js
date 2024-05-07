"use client";
import Link from "next/link";
import { useEffect, useState } from "react";

const UpdateProduct = ({ params }) => {
  let singleProductId = params.updateproduct;

  // console.log(product)

  const [name, setName] = useState("");
  const [price, setPrice] = useState("");
  const [company, setCompany] = useState("");
  const [color, setColor] = useState("");

  const CallApi = async (id) => {
    let res = await fetch(`http://localhost:3000/api/products/${id}`);
    let data = await res.json();
    // console.log(data.result);
    if (data.success) {
      setName(data.result.name);
      setPrice(data.result.price);
      setCompany(data.result.company);
      setColor(data.result.color);
    }
  };

  useEffect(() => {
    CallApi(singleProductId);
  }, []);

  return (
    <div>
      <h1>Product Update Section....</h1>

      <input
        type="text"
        value={name}
        onChange={(event) => setName(event.target.value)}
      />
      <input
        type="text"
        value={price}
        onChange={(event) => setPrice(event.target.value)}
      />
      <input
        type="text"
        value={company}
        onChange={(event) => setCompany(event.target.value)}
      />
      <input
        type="text"
        value={color}
        onChange={(event) => setColor(event.target.value)}
      />
      <button>Update</button>
      <Link href="/products">Back</Link>
    </div>
  );
};

export default UpdateProduct;
