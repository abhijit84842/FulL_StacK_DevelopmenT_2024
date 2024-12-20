"use client";
import React, { useState } from "react";

const page = () => {
  const [name, setName] = useState();
  const [age, setAge] = useState();
  const [city, setCity] = useState();
  const [email, setEmail] = useState();

  const handleAddUser=async()=>{
    let res= await fetch("http://localhost:3000/api/users" , {
      method: 'POST',
      body:JSON.stringify({name , age , city , email})
    })

    let result =await  res.json()
   if(result.success){
    alert(result.rslt)
   }else(
    alert(result.rslt)
   )
  }


  return (
    <div>
      <h1>Add New User</h1>
      <div>
        <input
          type="text"
          name="name"
          onChange={(e) => {
            setName(e.target.value);
          }}
          placeholder="enter your name.."
        />
        <input
          type="text"
          name="age"
          onChange={(e) => {
            setAge(e.target.value);
          }}
          placeholder="enter your age.."
        />
        <input
          type="text"
          name="city"
          onChange={(e) => {
            setCity(e.target.value);
          }}
          placeholder="enter your city.."
        />
        <input
          type="text"
          name="email"
          onChange={(e) => {
            setEmail(e.target.value);
          }}
          placeholder="enter your email.."
        />
        <button onClick={()=>handleAddUser()}>Add</button>
      </div>
    </div>
  );
};

export default page;
