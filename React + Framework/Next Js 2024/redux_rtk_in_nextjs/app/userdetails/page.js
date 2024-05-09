"use client"
import Link from "next/link";
import React from "react";
import { useSelector } from "react-redux";

export const UserDetails = () => {
    const userData=useSelector((store)=>store.UserSlice.users)
    console.log(userData)
    
   

  return (
    <div>
      <h1>Userdetails in Page ..</h1>
      {
        userData.map((item)=>(
            <ul key={item.id}>
                <li>{item.id}</li>
            </ul>
        ))
      }
      
      <Link href="/">Back to Home</Link>
    </div>
  );
};

export default UserDetails
