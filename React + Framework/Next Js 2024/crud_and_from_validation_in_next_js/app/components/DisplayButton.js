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
        <button onClick={()=>handleApi()}>Display Users</button>
        <DisplayBox users={users}/>

    </div>
  )
}

export default DisplayButton