"use client"
import { useState } from "react";


export default function Home() {
  const  [file , setFile]=useState()
  const onUpload =(event)=>{
    event.preventDefault()    // to avoid auto reload page and bydefault submit on form
    console.log(file)
  }
  return (
    <main>
      <h1> Upload Image ....</h1>
      <form onSubmit={onUpload}>
        <input type="file" onChange={(e)=>setFile(e.target.files[0])}/>
        <button type="submit">Upload File</button>
      </form>
    </main>
  );
}
