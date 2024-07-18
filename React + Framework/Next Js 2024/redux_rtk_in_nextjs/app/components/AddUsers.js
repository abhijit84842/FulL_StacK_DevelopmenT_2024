"use client";
import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { UserAction } from "../reduxtoolkit/slice";

const AddUsers = () => {
  // declear the component state.
  const [name, setName] = useState("");

  const dispatch = useDispatch();     // hooks to dispatch the action

  const handleDispatch = () => {
    dispatch(UserAction.addUser(name))   // action dispatch 
    setName("")
  };



  return (
    <div className="adduser-main">
      <h2>Add User Here...</h2>
      <div className="input-field">
        <input
          type="text"
          value={name}
          onChange={(event) => setName(event.target.value)}
          placeholder="enter name"
        />
        <button onClick={() => handleDispatch()}>Add User</button>
      </div>
    </div>
  );
};

export default AddUsers;
