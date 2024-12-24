"use client";

import { dbStr } from "@/app/lib/connectionStr";
import React, { useState } from "react";
import { useForm } from "react-hook-form";

const page = () => {
  const url = dbStr;
  const [submitButton, setSubmitButton] = useState(true);
  const {
    register,
    handleSubmit,
    watch,
    formState: { errors, isValid, isSubmitting },
  } = useForm();
  const onSubmit = async (data) => {
    let res = await fetch("http://localhost:3000/api/addusers", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(data),
    });
    let resData =await res.json()
    if(resData.success){
      alert(resData.msg)
      setSubmitButton(false);
    }else{
      alert(resData.msg)
    }

 
  };

  return (
    <div>
      <h1>ADD USERS PAGE</h1>
      <div>
        <form onSubmit={handleSubmit(onSubmit)}>
          <input
            type="text"
            placeholder="enter name.."
            {...register("name", {
              required: "name is required..",
              maxLength: {
                value: 20,
                message: "oversize name",
              },
              minLength: {
                value: 3,
                message: "minimum 3 charecter need",
              },
            })}
          />
          {errors.name && <p>{errors.name.message}</p>}
          <br />
          <br />
          <input
            type="text"
            placeholder="enter age"
            {...register("age", {
              required: "age is required..",
            })}
          />
          {errors.age && <p>{errors.age.message}</p>}
          <br />
          <br />
          <input
            type="text"
            placeholder="enter email id"
            {...register("email", {
              required: "email is required ..",
              pattern: {
                value: /^[a-zA-Z0-9_.+-]+@[a-zA-Z0-9-]+\.[a-zA-Z0-9-.]+$/,
                message:
                  "invalid email..plz follow the pattern => [a-zA-Z0-9_.+-]+@[a-zA-Z0-9-]+.[a-zA-Z0-9-.]+$",
              },
            })}
          />
          {errors.email && <p>{errors.email.message}</p>}
          <br />
          <br />
          <input
            type="number"
            placeholder="enter ph no"
            {...register("phno", {
              required: "ph no is required..",
              maxLength: {
                value: 10,
                message: "ph no must be 10 digits",
              },
              minLength: {
                value: 10,
                message: "minimum 10 digits required",
              },
            })}
          />
          {errors.phno && <p>{errors.phno.message}</p>}
          <br />
          <br />
          <input
            type="text"
            placeholder="enter your city"
            {...register("city", {
              required: true,
              maxLength: {
                value: 20,
                message: "oversize",
              },
            })}
          />
          {errors.city && <p>{errors.city.message}</p>}
          <br />
          <br />
          <input
            type="text"
            placeholder="enter your company"
            {...register("company", {
              required: "field is required..",
              maxLength: {
                value: 20,
                message: "oversize",
              },
            })}
          />
          {errors.company && <p>{errors.company.message}</p>}
          <br />
          <br />
          {submitButton ? (
            <button className="bg-green-500 rounded-md p-2 text-2xl w-44" type="submit">Submit</button>
          ) : (
            <button className="bg-red-500 rounded-md p-3 text-2xl brightness-75" disabled={true}>Submitted Successfully</button>
          )}
        </form>
      </div>
    </div>
  );
};

export default page;
