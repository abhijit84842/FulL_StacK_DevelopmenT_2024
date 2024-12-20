"use client";

import { useEffect, useState } from "react";

const page = ({ params }) => {
  let updateId = params.updateDetailsId;
  // console.log(updateId)

  const [name, setName] = useState();
  const [company, setCompany] = useState();
  const [price, setPrice] = useState();
  const [colour, setColour] = useState();
  // console.log(name)

  const CallApi = async (id) => {
    let res = await fetch(`http://localhost:3000/api/product/${id}`);
    let data = await res.json();
    // console.log(data)
    // return data.rslt
    if (data.success) {
      setName(data.rslt.name);
      setCompany(data.rslt.company);
      setPrice(data.rslt.price);
      setColour(data.rslt.colour);
    }
  };

  useEffect(() => {
    CallApi(updateId);
  }, []);


  const handleUpdateButton=async(id)=>{
    let res= await fetch(`http://localhost:3000/api/product/${id}` , {
      method: "PUT",
      body: JSON.stringify({name , company , price , colour})
    })

   let result = await res.json()
   if(result.success){
    alert("Updated Successfully..")
   }else{
    alert("Not Updated..")
   }
  }
  return (
    <div>
      <h1>Product Update Page</h1>
      <div>
        <input type="text" value={name} onChange={(e)=>{setName(e.target.value)}}  />
        <input type="text" value={company} onChange={(e)=>{setCompany(e.target.value)}}  />
        <input type="text" value={price} onChange={(e)=>{setPrice(e.target.value)}} />
        <input type="text" value={colour} onChange={(e)=>{setColour(e.target.value)}} />
        <button onClick={()=>handleUpdateButton(updateId)}>Update</button>
      </div>
    </div>
  );
};

export default page;
