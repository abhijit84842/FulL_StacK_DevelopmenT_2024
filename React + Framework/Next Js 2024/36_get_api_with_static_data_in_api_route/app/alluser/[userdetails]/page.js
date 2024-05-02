import React from "react";

const CallApi = async (id) => {
  let res = await fetch(`http://localhost:3000/api/users/${id}`);
  let data = await res.json();

  return data.result;
};

const SingleUser = async ({ params }) => { 
  const currenId = params.userdetails;
  // console.log(currenId)
  const userData = await CallApi(currenId);
  console.log(userData);

  return (
    <div>
      <h1>Indivisula User Details</h1>
      {currenId == userData.id ? (
        <ul>
          <li>User id : {userData.id}</li>
          <li>Name : {userData.name}</li>
          <li>Name : {userData.age}</li>
          <li>City : {userData.city}</li>
          <li>Email id : {userData.email}</li>
        </ul>
      ) : (
        <h2>User Not Found..</h2>
      )}
    </div>
  );
};

export default SingleUser;
