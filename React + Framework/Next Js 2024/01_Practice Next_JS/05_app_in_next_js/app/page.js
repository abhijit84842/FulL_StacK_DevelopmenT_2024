import Link from "next/link"

const page =()=>{
  return <div>
    <h1>Home Page</h1>
    <Link href="/alluser">See All Users</Link>
  </div>
}

export default page