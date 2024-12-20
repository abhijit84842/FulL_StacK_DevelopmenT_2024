"use client"
import { useRouter } from 'next/navigation'
import React from 'react'

const Button = () => {
    let router =useRouter()
    const Navigation= (name)=>{
        router.push(name)
    }
  return (
    <button onClick={()=>Navigation("/adduser")}>ADD USER</button>
  )
}

export default Button