import React from 'react'
import AddUser from './components/AddUser'
import DisplayUsers from './components/DisplayUsers'
import Link from 'next/link'

const page = () => {
  return (
    <div>
        <AddUser/>
        <DisplayUsers/>
        <Link href="/userdetails">See User Id</Link>
        <br/>
        <Link href="/apiuser">See API Users</Link>
        
    </div>
  )
}

export default page