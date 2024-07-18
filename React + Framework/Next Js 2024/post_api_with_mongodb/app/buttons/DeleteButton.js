"use client";

import { useRouter } from "next/navigation";


const DeleteButton = (props) => {
  const router=useRouter()


  const id = props.productId;
  const handleDelete = async () => {
    let res = await fetch(`http://localhost:3000/api/products/${id}`, {
      method: "DELETE",
    });
    let data = await res.json();
    if (data.success) {
      alert("Product Deleted Successfully..");
      router.push("/products")
    }
  };

  return <button onClick={() => handleDelete()}>Delete</button>;
};

export default DeleteButton;
