"use client";
import React, { useEffect, useState } from "react";

const UpdateUser = ({ params }) => {
  let currId = params.userdetails;
  // console.log(currId)

  const [name, setName] = useState("");

  const [age, setAge] = useState("");

  const [email, setEmail] = useState("");

  // API Call to get the indivisula user
  const getUserApi = async (id) => {
    let res = await fetch(`http://localhost:3000/api/users/${id}`);
    let data = await res.json();
    // console.log(data.result);

    // show data in input field
    setName(data.result.name);
    setAge(data.result.age);
    setEmail(data.result.email);
  };

  useEffect(() => {
    getUserApi(currId);
  }, []);

  // Update user Click Button..
  const handleUpdateUser = async () => {
    // console.log(currId, name, age, email);
    let res = await fetch(`http://localhost:3000/api/users/${currId}`, {
      method: "PUT",
      body: JSON.stringify({ name, age, email }),
    });
    let data = await res.json();
    // console.log(data);
    if (data.success) {
      alert("User Details Updated ");
    } else {
      alert("Some error in input field");
    }
  };

  return (
    <div>
      <h1>Update User Details..</h1>
      <input
        type="text"
        value={name}
        onChange={(event) => setName(event.target.value)}
      />
      <br />
      <input
        type="text"
        value={age}
        onChange={(event) => setAge(event.target.value)}
      />
      <br />
      <input
        type="text"
        value={email}
        onChange={(event) => setEmail(event.target.value)}
      />
      <br />

      <br />
      <button onClick={() => handleUpdateUser()}>Update</button>
    </div>
  );
};

export default UpdateUser;
