
import GetUsers from "@/services/getUsers";
import Link from "next/link";
import React from "react";

const Users =async () => {
    const getUserList=GetUsers()
    const users =await getUserList;
    // console.log(users)

  return (
    <div>
      <h1>User List .....</h1>
      {users.map((list)=>(
        <ul key={list.id}>
             <Link href={`/users/${list.id}`}>{list.name}</Link>
        </ul>
       
      ))}
     
    </div>
  );
};

export default Users;
