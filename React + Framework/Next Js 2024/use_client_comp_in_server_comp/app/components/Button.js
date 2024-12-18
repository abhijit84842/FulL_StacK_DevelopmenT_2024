"use client"
import React, { useState } from 'react'

const Button = () => {
    const [product , setProduct]=useState([])

    const handleApi = async()=>{
        let res = await fetch('https://dummyjson.com/products')
        let data = await res.json()
        setProduct(data.products)  
    }

  return (
    <div>
        <button onClick={()=>handleApi()}>Click To See Product</button>
        <div>
          <ul>
            {
              product.map((list)=>(
                <li>{list.title}</li>
              ))
            }
          </ul>
        </div>
    </div>
  )
}

export default Button