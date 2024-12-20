"use client"

import { useRouter } from "next/navigation"

const EditButton = ({id})=>{
    let router =useRouter()
    const Navigation =(name)=>{
        router.push(name)
    }

    return <div>
        <button onClick={()=>Navigation(`/allproducts/${id}`)} >Update</button>
    </div>
}


export default EditButton