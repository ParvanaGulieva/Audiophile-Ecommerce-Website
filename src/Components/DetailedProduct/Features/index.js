import React from "react";
import StyledFeatures from "./style";

const Features = ({ selectedProduct }) => {
  const description = selectedProduct.features.split(". ");
  const firstDesc = description.slice(0, 3).join(". ");
  const remainingDesc = description.slice(3).join(". ");

  return (
    <StyledFeatures>
      <div className="features">
        <h3>FEATURES</h3>
        <p style={{ marginTop: "3.2rem" }}>{firstDesc}</p>
        <p style={{ marginTop: "1.2rem" }}>{remainingDesc}</p>
      </div>
      <div className="inBox">
        <h3>in the box</h3>
        <ul>
          {selectedProduct.includes.map((item, index) => (
            <li key={index}>
              <span>{item.quantity}x</span>
              <p>{item.item}</p>
            </li>
          ))}
        </ul>
      </div>
    </StyledFeatures>
  );
};

export default Features;
