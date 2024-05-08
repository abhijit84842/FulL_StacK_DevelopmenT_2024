"use client";
import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { addUserAction } from "../reduxtoolkit/slice";

const AddUsers = () => {
  // declear the component state.
  const [name, setName] = useState("");

  const dispatch = useDispatch();     // hooks to dispatch the action

  const handleDispatch = () => {
    dispatch(addUserAction.addUser(name))   // action dispatch 
  };

  return (
    <div className="adduser-main">
      <h2>Add User Here...</h2>
      <div className="input-field">
        <input
          type="text"
          onChange={(event) => setName(event.target.value)}
          placeholder="enter name"
        />
        <button onClick={() => handleDispatch()}>Add User</button>
      </div>
    </div>
  );
};

export default AddUsers;
