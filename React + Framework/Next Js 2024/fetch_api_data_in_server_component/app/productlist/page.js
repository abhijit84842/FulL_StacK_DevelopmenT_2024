import React from 'react'

const handleApi =async()=>{
    let res = await fetch('https://dummyjson.com/products')
    let data = await res.json()
    return data.products
}

const page = async() => {
    let product = await handleApi()

  return (
    <div>
        <h1>All Products Name</h1>
        <ul>
            {
                product.map((list)=>(
                    <li>{list.title}</li>
                ))
            }
        </ul>
    </div>
  )
}

export default page