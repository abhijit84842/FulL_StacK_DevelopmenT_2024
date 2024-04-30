import React from "react";

const UserInfo = ({list}) => {
  return <div>
    <ul>
      <li>{list.firstName} {list.lastName}</li>
      <li>{list.bloodGroup}</li>
      <li>{list.age}</li>
      <li>{list.email}</li>
    </ul>
  </div>;
};

export default UserInfo;
