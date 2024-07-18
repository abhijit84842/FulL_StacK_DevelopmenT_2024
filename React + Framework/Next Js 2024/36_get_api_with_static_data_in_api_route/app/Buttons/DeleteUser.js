"use client"
import React from 'react'

export default function DeleteUser(props) {
  const userId = props.id
  // console.log(userId)

  // Delete method 
  const handleDelete =async()=>{
    let res= await fetch(`http://localhost:3000/api/users/${userId}` , {
      method:"DELETE"
    })
    let data = await res.json()
    // console.log(data)

    if(data.success){
      alert("Data Deletd Successfully..")
    }else{
      alert("Not deleted ....")
    }

  }
  return (
   <button onClick={()=>handleDelete()}>Delete</button>
  )
}
