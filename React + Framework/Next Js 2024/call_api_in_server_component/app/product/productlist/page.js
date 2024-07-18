import Button from "@/app/Button/Button";
import React from "react";

const ProductList = ({items}) => {
  return <div className="product-structure">
  <ul>
    <li>id is : {items.id}</li>
    <li>Name is : {items.title}</li>
    <li>Brand : {items.brand}</li>
    <li>Description :{items.description}</li>
  </ul>
  <Button price={items.price}/>       
</div>
};

export default ProductList;


// Here i import Client component(<Button />) because we can make this component server component.
