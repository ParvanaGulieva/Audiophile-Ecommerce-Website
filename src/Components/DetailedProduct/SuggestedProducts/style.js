import styled from "styled-components";

const StyledSuggestedProducts = styled.div`
  max-width: 114rem;
  margin-right: auto;
  margin-left: auto;
  margin-bottom: 16rem;

  .grid {
    display: grid;
    grid-template-columns: repeat(3, 1fr);
    gap: 3rem;
    justify-content: center;
    align-items: start;
  }

  h3 {
    margin-bottom: 6.4rem;
    text-align: center;
  }

  @media (max-width: 1080px) {
    .grid {
      gap: 1.2rem;
    }

    h3 {
      margin-bottom: 5.2rem;
    }
  }

  @media (max-width: 620px) {
    .grid {
      grid-template-columns: 1fr;
      grid-template-rows: repeat(3, 1fr);
      gap: 5.6rem;
    }

    h3 {
      margin-bottom: 4rem;
    }
  }
`;

export default StyledSuggestedProducts;
