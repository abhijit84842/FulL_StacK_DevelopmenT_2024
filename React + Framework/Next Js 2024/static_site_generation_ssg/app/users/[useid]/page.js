// Dynamic routing to availabe this page to all indivisula id
import GetUsers from "@/services/getUsers";
import React from "react";

const UserDetails = async ({ params }) => {
  const UserDetails = await GetUsers();
  const currentId = params.useid;
  const userData = UserDetails[currentId - 1];
  console.log(userData);

  return (
    <div>
      <h1>User Details....</h1>
      <ul>
        <li>{userData.id}</li>
        <li>{userData.name}</li>
        <li>{userData.username}</li>
        <li>{userData.address.city}</li>
        <li>{userData.email}</li>
      </ul>
    </div>
  );
};

export default UserDetails;

export async function generateStaticParams() {
  const UserDetails = await GetUsers();
  return UserDetails.map((user) => ({
    useid: user.id.toString(),
  }));
}
