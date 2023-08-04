import React from "react";
import StyledSuggestedProducts from "./style";
import SuggestedProduct from "../SuggestedProduct";

const SuggestedProducts = ({ selectedProduct, data }) => {
  // console.log(data);
  return (
    <StyledSuggestedProducts>
      <h3>you may also like</h3>
      <div className="grid">
        {selectedProduct.others.map((item) => (
          <SuggestedProduct item={item} key={item.slug} data={data} />
        ))}
      </div>
    </StyledSuggestedProducts>
  );
};

export default SuggestedProducts;
