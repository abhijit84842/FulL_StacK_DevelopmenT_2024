import Link from 'next/link'
import React from 'react'

const page = () => {
  return (
    <div>
        <h1>Login Page</h1>
        <Link href="/login/studentlogin">Student Login</Link>
        <br/>
        <Link href="/login/teacherlogin">Teacher Login</Link>
    </div>
   
  )
}

export default page