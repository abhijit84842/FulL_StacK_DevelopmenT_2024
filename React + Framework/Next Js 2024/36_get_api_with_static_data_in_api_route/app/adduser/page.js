"use client";
import React, { useState } from "react";

const AddUser = () => {
  const [name, setName] = useState("");
  const [age, setAge] = useState("");
  const [email, setEmail] = useState("");

  // POST API call
  const handleAddUser = async () => {
    let res = await fetch("http://localhost:3000/api/users", {
      method: "POST",
      body: JSON.stringify({ name, age, email }),
    });
    let data = await res.json();
    // console.log(data);
    if (data.success) {
      alert("New user Added");
    } else {
      alert("Some error in input field plz check");
    }
  };
  return (
    <div>
      <h1>Add New User Sections</h1>
      <input
        type="text"
        value={name}
        placeholder="Enter name"
        onChange={(e) => setName(e.target.value)}
      />
      <input
        type="text"
        value={age}
        placeholder="Enter age"
        onChange={(e) => setAge(e.target.value)}
      />
      <input
        type="text"
        value={email}
        placeholder="Enter email"
        onChange={(e) => setEmail(e.target.value)}
      />
      <button onClick={() => handleAddUser()}>ADD User</button>
    </div>
  );
};

export default AddUser;
