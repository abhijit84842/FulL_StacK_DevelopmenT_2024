"use client"
import { useState } from "react";
import style from "./page.module.css"

export default function Home() {
  const [CssColor, setCssColor]=useState("red")
  return (
    <main>
      <div className={style.black}>
        <h1>CSS with Next js..</h1>
        <h2 className={CssColor=="red" ? style.red : style.green}>Next js is Framework of React js</h2>
        <h2 style={{color: CssColor=="green" ? "red": "green"}}>Hi i am Abhijit Das</h2>   
        <h3 id={style.aqua}>This is H3 Heading</h3>  
        <button onClick={()=>setCssColor("green")}>Change Color</button>
      </div>
    </main>
  );
}
