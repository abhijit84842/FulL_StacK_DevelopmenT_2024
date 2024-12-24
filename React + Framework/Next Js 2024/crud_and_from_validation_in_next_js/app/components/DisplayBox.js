"use client";
import React from "react";

const DisplayBox = ({ users }) => {
  return (
    <div>
      {users.map((list) => (
        <ul key={list.id}>
          <li>{list.name}</li>
          <li>{list.age}</li>
          <li>{list.city}</li>
          <li>{list.email}</li>
        </ul>
      ))}
    </div>
  );
};

export default DisplayBox;
