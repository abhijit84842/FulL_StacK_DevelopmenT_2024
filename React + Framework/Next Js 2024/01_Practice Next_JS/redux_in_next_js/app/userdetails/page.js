"use client"
import React from 'react'
import { useSelector } from 'react-redux'

const UserDetails = () => {
    const usersData=useSelector((store)=>store.UserSlice.users)
    // console.log(usersData)
  return (
    <div>
        <h1>User Id is Here</h1>
        {
            usersData.map((list)=>(
                <ul key={list.id}>
                    <li>
                        {list.id}
                    </li>
                </ul>
            ))
        }
    </div>
  )
}

export default UserDetails