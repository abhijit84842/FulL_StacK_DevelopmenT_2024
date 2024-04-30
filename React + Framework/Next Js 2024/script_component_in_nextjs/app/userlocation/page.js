"use client"
import Script from "next/script";

const UserLocation = () => {
  return (
    <div>
      <h1>This is User Location Page....</h1>
      <Script src="/location.js" onLoad={()=>{
        alert("located Successfully...")
      }}/>           
    </div>
  );
};

export default UserLocation;


// Load <Script/> comoponet in this component so that it can be loaded only in this component..not in full project