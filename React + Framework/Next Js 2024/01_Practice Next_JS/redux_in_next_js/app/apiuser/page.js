"use client"
import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { fetchApiUsers } from '../reduxToolKit/slice1'

const page = () => {
    const dispatch = useDispatch()
    const UserData =useSelector((store)=>store.UserSlice.userApiData)
    // console.log(UserData)
    
    
    useEffect(()=>{
        dispatch(fetchApiUsers())
    },[])
  return (
    <div>
        <h1>API Users Details</h1>
        {
            UserData.map((list)=>(
                <ul key={list.id}>
                    <li>{list.name}</li>
                </ul>
            ))
        }

    </div>
  )
}

export default page