"use client"
import {useRouter} from "next/navigation"

const AboutCollege =()=>{
    const router = useRouter()
    return <div>
        <h1>This is about college page</h1>
        <button onClick={()=>router.push("/")}>Go to Home Page</button>

    </div>
}

export default AboutCollege