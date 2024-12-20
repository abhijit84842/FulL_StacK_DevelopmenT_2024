"use client"
import Link from "next/link"
import { useRouter } from "next/navigation"

const Page =()=>{
    const router = useRouter()

    const navigation =(name)=>{
        router.push(name)
    }
    return <div>
        <h1>This is About Page</h1>
        <Link href="/about/aboutcollege">About College</Link>
        <br/>
        <Link href="/about/aboutfaculty">About Faculty</Link>
        <br/>
        <Link href="/about/aboutcourse">About Course</Link>
        <div>
            <button onClick={()=>navigation("/about/aboutcollege")}>College Button</button>
            <button onClick={()=>navigation("/about/aboutfaculty")}>Faculty Button</button>
        </div>
    </div>

}

export default Page