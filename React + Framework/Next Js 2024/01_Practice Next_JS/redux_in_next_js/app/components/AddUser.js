"use client"
import React, { useState } from 'react'

import style from "../page.module.css"
import { useDispatch } from 'react-redux'
import { UserAction } from '../reduxToolKit/slice1'

const AddUser = () => {
    const [name , setName]=useState()

    const dispatch =useDispatch()

    const handleDispatch =()=>{
      dispatch(UserAction.addUser(name))
    }

  return (
    <div className={style.adduser}>
        <input type='text' onChange={(e)=>{setName(e.target.value)}}  placeholder='Enter name'/>
        <button onClick={()=>handleDispatch()} >ADD</button>
    </div>
  )
}

export default AddUser