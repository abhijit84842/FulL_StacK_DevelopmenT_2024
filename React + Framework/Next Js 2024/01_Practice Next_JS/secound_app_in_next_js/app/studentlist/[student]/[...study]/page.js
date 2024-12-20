import React from 'react'

const page = ({params}) => {
    console.log(params)
  return (
    <div>
        <h1>Catch all segment</h1>
        <h2>Lecture name is :- {params.study[0]}</h2>
        <h2>Teacher name is :-{params.study[1]}</h2>
    </div>
  )
}

export default page