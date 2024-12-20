import Link from 'next/link'
import React from 'react'

const page = () => {
  return (
    <div>
        <h1>This is Login Page</h1>
        <Link href="/login/studentlogin">Student Login</Link>
        <br/>
        <Link href="/login/facultylogin"> Faculty Login</Link>
    </div>
  )
}

export default page