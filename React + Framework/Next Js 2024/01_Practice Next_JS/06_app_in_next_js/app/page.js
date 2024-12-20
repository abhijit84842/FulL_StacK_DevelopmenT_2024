import Link from 'next/link'
import React from 'react'

const page = () => {
  return (
    <div>
      <h1>Home Page</h1>
      <Link href="/allproducts">See Products</Link>
      <br/>
      <Link href="addproduct">Add Product</Link>
    </div>
  )
}

export default page