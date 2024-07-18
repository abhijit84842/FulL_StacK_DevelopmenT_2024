"use client";

import { useDispatch, useSelector } from "react-redux";
import { fetchApiUsers } from "../reduxtoolkit/slice";
import { useEffect } from "react";

const ApiUser = () => {
  const dispatch = useDispatch();
  const ApiData = useSelector((store) => store.UserSlice.userApiData);
  //   console.log(ApiData)

  useEffect(() => {
    dispatch(fetchApiUsers());
  }, []);
  return (
    <div>
      <h1>Api Users Details...</h1>
      {ApiData.map((list) => (
        <ul key={list.id}>
          <li>{list.name}</li>
        </ul>
      ))}
    </div>
  );
};

export default ApiUser;
