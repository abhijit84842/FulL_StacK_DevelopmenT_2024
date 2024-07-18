"use client"
import React from "react";
import { useSelector } from "react-redux";

const DisplayTodo = () => {
 const todoList= useSelector((store)=>store.todo.todoState)
//  console.log(todoList)
  
  return (
    <div>
      <h2>Todo List...</h2>
      {
        todoList.map((item)=>(
          <ul key={item.id}>
            <li>{item.name}</li>
          </ul>
        ))
      }
      
    </div>
  );
};

export default DisplayTodo;
