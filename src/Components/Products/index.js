import React from "react";
import Product from "../Product";
import StyledProducts from "./style";

const Products = ({ products }) => {
  return (
    <StyledProducts>
      {[...products].reverse().map((product, index) => (
        <Product
          key={index}
          isReverse={index % 2 === 0 ? false : true}
          product={product}
        />
      ))}
    </StyledProducts>
  );
};

export default Products;
