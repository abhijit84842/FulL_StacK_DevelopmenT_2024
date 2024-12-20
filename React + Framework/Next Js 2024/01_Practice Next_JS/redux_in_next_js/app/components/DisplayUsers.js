"use client";
import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { UserAction } from "../reduxToolKit/slice1";

const DisplayUsers = () => {
  const userData = useSelector((store) => store.UserSlice.users);
  // console.log(userData);

  const dispatch = useDispatch()

  const handleRemove=(id)=>{
      dispatch(UserAction.removeUser(id))
  }


  return (
    <div>
      <h1>Display The Users </h1>
      {userData.map((list) => (
        <ul key={list.id}>
          <li>
            Name is = {list.name} <button onClick={()=>handleRemove(list.id)}>Remove</button>
          </li>
        </ul>
      ))}
    </div>
  );
};

export default DisplayUsers;
