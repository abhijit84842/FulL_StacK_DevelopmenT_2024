import Link from 'next/link'
import React from 'react'
const handlApi =async()=>{
    let res = await fetch('http://localhost:3001/api/users')
    let data =  await res.json()
    return data.userData.users
}

const page = async() => {
    let users =await handlApi()
   
  return (
    <div>
        <h1>USERS DETAILS PAGE</h1>
        <ul>
            {
                users.map((list)=>(
                    <li key={list.id}><Link href={`/page/users/${list.id}`}>{list.firstName} {list.lastName}</Link></li>
                ))
            }
        </ul>

    </div>
  )
}

export default page