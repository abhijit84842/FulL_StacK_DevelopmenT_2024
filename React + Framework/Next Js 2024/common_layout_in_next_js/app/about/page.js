import Link from 'next/link'
import React from 'react'

const page = () => {
  return (
    <div>
        <h1>THIS IS ABOUT PAGE</h1>
        <Link href={"/about/aboutcourse"}>About Course</Link>
        <br/>
        <br/>
        <Link href={"/about/aboutstudent"}>About Student</Link>
        <br/>
        <br/>
        <Link href={"/about/aboutteachers"}>About Teacher</Link>
    </div>
  )
}

export default page