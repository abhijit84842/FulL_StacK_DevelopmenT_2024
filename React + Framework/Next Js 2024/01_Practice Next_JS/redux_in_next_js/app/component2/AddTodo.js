"use client"
import React, { useState } from 'react'
import { useDispatch } from 'react-redux'
import { TodoAction } from '../reduxToolKit/slice2'

const AddTodo = () => {
  const [todoname , setTodoName]=useState()

  const dispatch = useDispatch()

  const handleDispatch=()=>{
    dispatch(TodoAction.addTodo(todoname))
  }

  
  return (
    <div>
        <h1>Add To Do Here</h1>
        <input type='text' onChange={(e)=>setTodoName(e.target.value)} placeholder='Enter Todo Here'/>
        <button onClick={()=>handleDispatch()}>ADD</button>
    </div>
  )
}

export default AddTodo