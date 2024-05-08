"use client";
import React from "react";
import { useSelector } from "react-redux";

const DisplayUsers = () => {
  const userData = useSelector((store) => store.users); // users- > is initialState in redux
  // console.log(userData);
  return (
    <div className="display-main">
      <h2>Display User List..</h2>
      {
        userData.map((list)=>(
          <ul key={list.id}>
            <li>{`id is => ${list.id} and Name is ${list.name}`}</li>
          </ul>
        ))
      }
    </div>
  );
};

export default DisplayUsers;
