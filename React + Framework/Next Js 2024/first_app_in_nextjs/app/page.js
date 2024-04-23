const Page = () => {
  return <div className="main-container">
    <NewComp name="Abhijit Das"/>
    <div>This is Next Js by Abhijit 2024</div>
  </div>;
};
export default Page;

// create a new component in this page..
const NewComp=({name})=>{
  return <h1>Hi i am {name} </h1>
}
