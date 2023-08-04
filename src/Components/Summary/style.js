import styled from "styled-components";

const StyledSummary = styled.div`
  background-color: var(--color-white);
  border-radius: 0.8rem;
  padding: 3.2rem;
  height: min-content;

  .summary {
    margin-bottom: 3.2rem;
  }

  .element {
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    align-items: center;
  }
  .details {
    display: flex;
    flex-direction: row;
    gap: 1.6rem;
    align-items: center;
  }

  .image {
    background-color: var(--color-grey);
    border-radius: 0.8rem;

    & img {
      width: 6.4rem;
      border-radius: 0.8rem;
    }
  }

  .title {
    color: var(--color-black);
    font-weight: 700;
  }

  .quantity,
  .price {
    font-weight: 700;
    font-size: 1.4rem;
  }

  .summaryElements {
    display: flex;
    flex-direction: column;
    gap: 2.4rem;
    margin-bottom: 3.2rem;
  }

  .grandTotal {
    margin-top: 2.4rem;

    & h6 {
      color: var(--color-orange);
    }
  }

  .price {
    display: flex;
    align-items: center;
    justify-content: space-between;
    margin-bottom: 0.8rem;
  }

  @media (max-width: 480px) {
    padding: 3.2rem 2.4rem;
  }
`;

export default StyledSummary;
