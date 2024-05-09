"use client";
import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { UserAction } from "../reduxtoolkit/slice";

const DisplayUsers = () => {
  const userData = useSelector((store) => store.UserSlice.users); // UserSlice- > name of slice and initial state
  // console.log(userData);

  const dispatch = useDispatch()

  
  return (
    <div className="display-main">
      <h2>Display User List..</h2>
      {userData.map((list) => (
        <ul key={list.id}>
          <li>
            <span>{`Name is => ${list.name}`}</span>
            <button onClick={()=>dispatch(UserAction.removeUser(list.id))}>Remove</button>
          </li>
        </ul>
      ))}
    </div>
  );
};

export default DisplayUsers;
