import React from "react";
import StyledSuggestedProduct from "./style";
import Button from "../../Button";
import { Link } from "react-router-dom";

const SuggestedProduct = ({ item, data }) => {
  const suggestedItem = data.find((i) => i.slug === item.slug);
  // console.log(suggestedItem);

  return (
    <StyledSuggestedProduct>
      <div className="product">
        <picture>
          <source
            media="(max-width:480px"
            srcSet={item.image.mobile.slice(1)}
          />
          <img src={item.image.tablet.slice(1)} alt="product" />
        </picture>
      </div>
      <h5>{item.name}</h5>
      <Link to={`/product/${suggestedItem.id}`}>
        <Button className="type1" text="see product" />
      </Link>
    </StyledSuggestedProduct>
  );
};

export default SuggestedProduct;
