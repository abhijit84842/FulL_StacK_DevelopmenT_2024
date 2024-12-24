import Link from 'next/link'
import React from 'react'

const page = () => {
  return (
    <div>
        <h1 className='flex justify-center  mt-20 text-5xl'>All Users Details Here</h1>
        <Link href={"/page/users/addusers"}>Add Users</Link>

    </div>
  )
}

export default page