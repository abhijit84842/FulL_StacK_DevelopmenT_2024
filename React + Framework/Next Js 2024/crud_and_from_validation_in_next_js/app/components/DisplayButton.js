"use client"
import React, { useState } from 'react'
import DisplayBox from './DisplayBox'

const DisplayButton = () => {
    const [users , setUsers]=useState([])
    const handleApi =async()=>{
        let res = await fetch("http://localhost:3000/api/users")
        let data = await res.json()
        setUsers(data.result)
    }
  return (
    <div>
        <button className='bg-red-500 p-2 rounded-md' onClick={()=>handleApi()}>Display Users</button>
        <div>
        <DisplayBox users={users}/>

        </div>
       

    </div>
  )
}

export default DisplayButton