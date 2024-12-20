"use client"
import { useRouter } from 'next/navigation'
import React from 'react'

const AddButton = () => {
    let router =useRouter()
    const navigation= (name)=>{
        router.push(name)
    }
  return (
    <button onClick={()=>navigation("/api/product")}>Add Product</button>
  )
}

export default AddButton