import React from 'react'

const UserDetails = ({user}) => {
    // console.log(user)
    let name = `${user.firstName} ${user.lastName}`
    console.log(name)
  return (
    <div>
    <ul>
        <li>Name is = {name} </li>
        <li>Company= {user.company.name}</li>
        <li>Gender= {user.gender}</li>
    </ul>
    </div>
  )
}

export default UserDetails