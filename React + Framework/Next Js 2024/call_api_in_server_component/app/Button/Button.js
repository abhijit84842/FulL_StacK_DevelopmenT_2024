"use client"
import React from 'react'

const Button = ({price}) => {
  return (
    <div>
        <button onClick={()=>alert(`Product Price is : ${price}`)}>Check Price</button>
    </div>
  )
}

export default Button