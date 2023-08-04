import React from "react";
import StyleProduct from "./style";
import Button from "../Button";
import { Link } from "react-router-dom";

const Product = ({ isReverse, product }) => {
  return (
    <StyleProduct isReverse={isReverse}>
      <div className="image">
        <picture>
          <source media="(max-width:1080px)" srcSet={product.image.tablet} />
          <source media="(max-width:480px" srcSet={product.image.mobile} />
          <img className="product" src={product.image.desktop} alt="product" />
        </picture>
      </div>
      <div className="details">
        {product.new && <p className="overline">NEW PRODUCT</p>}
        <h2 style={{ marginBottom: "1.6rem" }}>{product.name}</h2>
        <p>{product.description}</p>
        <Link to={`/product/${product.id}`}>
          <Button
            className="type1"
            text="see product"
            style={{ marginTop: "2.4rem" }}
          />
        </Link>
      </div>
    </StyleProduct>
  );
};

export default Product;
