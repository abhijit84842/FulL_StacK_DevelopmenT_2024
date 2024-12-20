"use client"
import React, { useState } from 'react'

const page = () => {
  const [name , setName]=useState()
  const [company, setCompany]=useState()
  const [price , setPrice]=useState()
  const [colour , setColour]=useState()

  const handleAddProductButton =async()=>{
    let res = await fetch("http://localhost:3000/api/product",{
      method: 'POST',
      body:JSON.stringify({name ,company , price , colour})
    })

    let result = await res.json()
    if(result.success){
      alert("Product Added Successfully...")
    }else{
      alert(result.rslt)
    }
  }

  return (
    <div>
        <h1>Add New Product</h1>
        <div>
          <input type='text' name='name' onChange={(e)=>{setName(e.target.value)}} placeholder='enter product name..'/>
          <input type='text' name='company' onChange={(e)=>{setCompany(e.target.value)}}placeholder='enter company..'/>
          <input type='text' name='price' onChange={(e)=>{setPrice(e.target.value)}} placeholder='enter product price'/>
          <input type='text' name='colour' onChange={(e)=>{setColour(e.target.value)}}  placeholder='enter product color'/>
          <button onClick={()=>handleAddProductButton()}>Add</button>

        </div>
    </div>
  )
}

export default page