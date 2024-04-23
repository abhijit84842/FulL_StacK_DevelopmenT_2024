'use client'    // use for client side rendering...
import NewCompeEvent from "./Components/NewCompeEvent";

const Page = () => {

  const handleButton=(event)=>{
   alert("Hi button Clicked")
  }
 

  return <div className="main-container">
    <NewCompeEvent onButton={handleButton}/>
  </div>;
};
export default Page;

