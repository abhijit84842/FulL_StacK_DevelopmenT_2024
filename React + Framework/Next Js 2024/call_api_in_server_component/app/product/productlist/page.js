import React from "react";

const ProductList = ({items}) => {
  return <div className="product-structure">
  <ul>
    <li>id is : {items.id}</li>
    <li>Name is : {items.title}</li>
    <li>Brand : {items.brand}</li>
    <li>Description :{items.description}</li>
    <li>Price is :{items.price}</li>
  </ul>
</div>
};

export default ProductList;
