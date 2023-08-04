import styled from "styled-components";

const StyledSuggestedProduct = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  gap: 3.2rem;

  h5 {
    text-align: center;
  }

  .product {
    margin-bottom: 0.8rem;
    background-color: var(--color-grey);
    border-radius: 0.8rem;
    width: 100%;
    height: 32rem;

    display: flex;
    align-items: center;
    justify-content: center;

    & img {
      width: 17.5rem;
      /* height: 100%; */
    }
  }

  @media (max-width: 480px) {
    gap: 1.6rem;

    .product {
      height: 12rem;

      & img {
        width: 28rem;
      }
    }
  }
`;

export default StyledSuggestedProduct;
