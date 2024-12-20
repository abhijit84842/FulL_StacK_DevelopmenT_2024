import getUser from '@/services/fetchUser'
import React from 'react'

const page = async({params}) => {
    // console.log(params.userId)

    let userDetails = await getUser()
    let currentId = params.userId 
    let singleUser = userDetails[currentId - 1] 
    // console.log(singleUser)

  return (
    <div>
        <h1>All Details of :- {singleUser.name}</h1>
        <ul>
            <li>City - {singleUser.address.city}</li>
            <li>username -{singleUser.username} </li>
            <li>email-{singleUser.email} </li>
            <li>street- {singleUser.address.street}</li>
            <li>zipcode-{singleUser.address.zipcode}</li>
        </ul>
    </div>
  )
}

export default page

export async function generateStaticParams(){
  let users= await getUser()
  return users.map((list)=>(
    {
      userId: list.id.toString()
    }
  ))

}