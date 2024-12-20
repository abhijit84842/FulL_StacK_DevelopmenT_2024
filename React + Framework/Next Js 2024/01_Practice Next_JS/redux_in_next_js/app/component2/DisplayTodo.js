"use client"
import React from 'react'
import { useSelector } from 'react-redux'

const DisplayTodo = () => {
  const todo = useSelector((store)=>store.TodoSlice.todoState)
  console.log(todo)
  return (
    <div>
        <h1>Display Todo Here</h1>
      {
        todo.map((list)=>(
          <ul key={list.id}>
            <li>{list.name}</li>
          </ul>
        ))
      }
    </div>
  )
}

export default DisplayTodo