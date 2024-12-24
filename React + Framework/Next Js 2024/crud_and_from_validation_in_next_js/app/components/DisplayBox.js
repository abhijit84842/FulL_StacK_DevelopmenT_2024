"use client";
import React from "react";
import { useRouter } from "next/navigation";

const DisplayBox = ({ users }) => {
  const router =useRouter()
  
  return (
    <div className="text-white">
      {users.map((list) => (
        <ul key={list._id}>
          <li>{list.name}</li>
          <li>{list.age}</li>
          <li>{list.city}</li>
          <li>{list.email}</li>
          <br />
          <button className="bg-yellow-500" onClick={()=>router.push(`/page/users/${list._id}`)}>Update</button>
          <button className="bg-red-900">Delete</button>
        </ul>
      ))}
    </div>
  );
};

export default DisplayBox;
