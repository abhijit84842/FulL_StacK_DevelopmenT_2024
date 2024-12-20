import React from 'react'
import Button from '../components/Button'

const AllUser = async() => {
  let res= await fetch("http://localhost:3000/api/users")
  let users= await res.json()


  return (
    <div>
        <h1>All User Are Here</h1>
        <Button/>
        {
          users.map((list)=>(
            <ul key={list.id}>
              <li>{list.name}</li>
            </ul>
          ))
        }
        
    </div>
  )
}

export default AllUser