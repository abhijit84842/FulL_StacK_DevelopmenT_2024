import React from "react";
import ProductItems from "./productitems/page";

const ProductList = ({ Product }) => {
  // console.log(Product);
  return (
    <div className="product-container">
      <h1>All Product items here...</h1>
      {Product.map((items) => (
        <ProductItems key={items.id} items={items} />
      ))}
    </div>
  );
};

export default ProductList;
