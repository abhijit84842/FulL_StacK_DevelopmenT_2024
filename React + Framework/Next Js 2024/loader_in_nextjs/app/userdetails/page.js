"use client";
import Link from "next/link";
import { useEffect, useState } from "react";
import UserInfo from "./userinfo/page";
import Loader from "./loading/page";



const UserDetails = () => {
  const [userData, setUserData] = useState([]);
  const [loadingBar, setLoadinBar] = useState(false);

  
  const callApi = async () => {
    setLoadinBar(true)
    let res = await fetch("https://dummyjson.com/users");
    let data = await res.json();
    // console.log(data.users)
    setUserData(data.users);
    setLoadinBar(false);
  };

  // useEffect(() => {

  // ;
  // }, []);

  return (
    <div>
      <h1>All user details are here..</h1>
      <Link href="/">Back to Home Page</Link>
      <button onClick={()=>callApi()}>Load Data</button>
    
      {loadingBar ? (
        <Loader />
      ) : (
        userData.map((list) => <UserInfo key={list.id} list={list} />)
      )}
    </div>
  );
};

export default UserDetails;
