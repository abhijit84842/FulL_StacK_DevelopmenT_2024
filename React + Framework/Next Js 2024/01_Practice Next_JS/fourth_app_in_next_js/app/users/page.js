import React from 'react'
import getUser from '@/services/fetchUser'
import Link from 'next/link'


const page = async() => {
    let users =await getUser()
    // console.log(users)
  return (
    <div>
        <h1 className='heading'>Users List Page</h1>
        {
            users.map((list)=>(
                <ul key={list.id}>
                    <li>
                        <Link href={`/users/${list.id}`}>{list.name}</Link>
                    </li>
                </ul>
            ))
        }
    </div>
  )
}

export default page