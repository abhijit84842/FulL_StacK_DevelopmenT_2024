
import Heading from "./components/Heading"
import Footer from "./components/Footer"
import Link from "next/link"

const Page=()=>{
   
    return <div>
       <Heading/>
       <Link href="/about">About</Link>
       <br></br>
       <Link href="/login">Login</Link>
       <Footer/>
    </div>
}

export default Page