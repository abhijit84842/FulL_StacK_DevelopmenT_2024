"use client"
import { useRouter } from 'next/navigation'
import React from 'react'

const DelButton = ({productId}) => {
  let singleId= productId
  let router =useRouter()
  

  const handleDeleteButton = async (id) => {
    let res = await fetch(`http://localhost:3000/api/product/${id}`, {
      method: "DELETE",
    });

    let result = await res.json();
    // console.log(result)
    if (result.success) {
      alert("Deleted Successfully");
      router.push("/")
    } else {
      alert("Product Not Deleted");
    }
  };
  
  return (
    <div>
        <button onClick={()=>handleDeleteButton(singleId)}>Delete</button>
    </div>
  )
}

export default DelButton