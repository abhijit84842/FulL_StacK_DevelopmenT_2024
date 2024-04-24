"use client"
import { useRouter } from "next/navigation"

const AboutStudents =()=>{
   const router=  useRouter()  
    return <div>
        <h1>Here the alll details of student page</h1>
        <button onClick={()=>router.push("/")}>Back to Home Page</button>
    </div>
}

export default AboutStudents