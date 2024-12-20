"use client"
import Link from "next/link"
import { useRouter } from "next/navigation"

const page =()=>{
  const router = useRouter()

  const navigation=(name)=>{
    router.push(name)
  }
  return <div>
    <h1>This is Home Page</h1>
    <Link href="/login">Login</Link>
    <br/>
    <button onClick={()=>navigation("/studentlist")}>Student List</button>

  </div>
}


export default page