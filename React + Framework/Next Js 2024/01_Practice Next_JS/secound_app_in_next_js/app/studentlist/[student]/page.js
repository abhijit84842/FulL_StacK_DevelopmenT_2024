import React from "react";

const page = ({params}) => {
    // console.log(params)
  return (
    <div>
      <h1>Details OF Student</h1>
      <h2>The name of Student is :- {params.student}</h2>
    </div>
  );
};

export default page;
