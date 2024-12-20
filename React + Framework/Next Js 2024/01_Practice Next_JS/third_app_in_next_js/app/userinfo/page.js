"use client";
import React, { useEffect, useState } from "react";
import UserDetails from "./userdetails/page";
import Loader from "../loader/page";

const UserInfo = () => {
  let initialArray = [];
  const [users, setUser] = useState(initialArray);
  // console.log(users)
  const [loadingBar, setLoader] = useState(false);

  const callApi = async () => {
    setLoader(true);
    let res = await fetch("https://dummyjson.com/users");
    let data = await res.json();
    setUser(data.users);
    setLoader(false);
  };

  return (
    <div>
      <h1>User Details</h1>

      <button onClick={() => callApi()}>Load User..</button>
      {loadingBar ? (
        <Loader />
      ) : (
        users.map((user) => <UserDetails key={user.id} user={user} />)
      )}
    </div>
  );
};

export default UserInfo;
