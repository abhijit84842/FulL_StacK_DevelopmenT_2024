"use client";
import { useState } from "react";

export default function Home() {
  const [file, setFile] = useState();

  const onUpload = async (event) => {
    event.preventDefault(); // to avoid auto reload page and bydefault submit on form
    // console.log(file);
    const data = new FormData();
    data.set("file", file);
    let result = await fetch("api/upload", {
      method: "POST",
      body: data,
    });

    result = await result.json();
    console.log(result);
    if (result.success) {
      alert("file uploaded..");
    }
  };
  return (
    <main>
      <h1> Upload Image ....</h1>
      <form onSubmit={onUpload}>
        <input type="file" onChange={(e) => setFile(e.target.files[0])} />
        <button type="submit">Upload File</button>
      </form>
    </main>
  );
}
