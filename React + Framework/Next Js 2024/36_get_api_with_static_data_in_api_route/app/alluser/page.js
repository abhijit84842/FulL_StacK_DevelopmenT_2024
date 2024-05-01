
import Link from "next/link";
import UserDetails from "./[userdetails]/page";

const CallApi = async () => {
  let res = await fetch("http://localhost:3000/api/users");
  let data = await res.json();
  // console.log(data)
  return data;
};

const AllUser = async () => {
  const usersData = await CallApi();
//   console.log(usersData);

  return (
    <div>
      <h1>All User Details...</h1>
      {
        usersData.map((list)=>(
           <ul>
            <li><Link href={`/alluser/${list.id}`}>{list.name}</Link></li>
           </ul>
        ))
      }
 
    </div>
  );
};
export default AllUser;