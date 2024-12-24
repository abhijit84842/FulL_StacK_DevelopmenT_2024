"use client";
import { useParams } from "next/navigation";
import React, { useEffect, useState } from "react";
import { useForm } from "react-hook-form";

const page = () => {
  const params = useParams();
  const updateId = params.update;

  const {
    register,
    handleSubmit,
    watch,
    setValue, // It allows you to set the value of a specific field in your form.
    formState: { errors },
  } = useForm();

  // state
  const [loadBar, setLoadBar] = useState(true);
  const [updateButton , setUpdateButton] = useState(true)

  const UpdateApiCall = async (id) => {
    setLoadBar(true);
    let res = await fetch(`http://localhost:3000/api/users/${id}`);
    let data = await res.json();

    // Set default values for the form using react-hook-form's `setValue` , its use to show the fetch value on every filed
    setValue("name", data.result.name);
    setValue("age", data.result.age);
    setValue("email", data.result.email);
    setValue("phno", data.result.phno);
    setValue("city", data.result.city);
    setValue("company", data.result.company);
    // off the loadbar
    setLoadBar(false);
  };
  useEffect(() => {
    UpdateApiCall(updateId);
  }, [updateId]);
  // console.log(user)

  const onSubmit = async(data) => {
    let res = await fetch(`http://localhost:3000/api/users/${updateId}` , {
      method:"PUT",
      headers:{
        "Content-Type":"application/json",
      },
      body:JSON.stringify(data)
    })
    let resData =await res.json()
    if(resData.success){
      alert(resData.msg)
    }else{
      alert("data not updated...")
    }

    setUpdateButton(false)
    
  };

  return (
    <div>
      <h1 className="text-white">USER UPDATE PANEL</h1>
      {
        loadBar ? (<p className="text-red-500">Loading the data .......</p>) : (<p className="text-green-500">Data fetch successfully......</p>)
      }
      <form onSubmit={handleSubmit(onSubmit)}>
        <input
          type="text"
        
          {...register("name", {
            required: "field is required",
            maxLength: {
              value: 20,
              message: "Name oversize",
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
          type="number"
          {...register("age", {
            required: "filed is required",
          })}
        />
        {errors.age && <p>{errors.age.message}</p>}
        <br />
        <br />
        <input
          type="text"
          {...register("email", {
            required: "field is required",
            pattern: {
              value: /^[a-zA-Z0-9_.+-]+@[a-zA-Z0-9-]+\.[a-zA-Z0-9-.]+$/,
              message:
                "invalid pattern plz follow the pattern => [a-zA-Z0-9_.+-]+@[a-zA-Z0-9-]+.[a-zA-Z0-9-.]+$ ",
            },
          })}
        />
        {errors.email && <p>{errors.email.message}</p>}
        <br />
        <br />
        <input
          type="number"
          {...register("phno", {
            required: "ph no is required..",
            minLength: {
              value: 10,
              message: "minimum required 10 digits",
            },
            maxLength: {
              value: 10,
              message: "only allow 10 digits",
            },
          })}
        />
        {errors.phno && <p>{errors.phno.message}</p>}
        <br />
        <br />
        <input
          type="text"
          {...register("city", {
            required: "field is required..",
          })}
        />
        {errors.city && <p>{errors.city.message}</p>}
        <br />
        <br />
        <input
          type="text"
          {...register("company", {
            required: "field is required..",
          })}
        />
        <br />
        <br />
        {
          updateButton ?  (<button className="bg-blue-500 rounded-md p-2" type="submit">Update</button>) : (<button className="bg-green-500" disabled={true}>Updated</button>)
        }
       
      </form>
    </div>
  );
};

export default page;
