import styled from "styled-components";

const StyledFeatures = styled.div`
  margin-top: 16rem;
  margin-bottom: 16rem;
  display: flex;
  flex-direction: row;
  align-items: flex-start;
  gap: 12rem;
  max-width: 114rem;
  margin-right: auto;
  margin-left: auto;

  .features {
    width: 55%;
  }
  span {
    font-size: 1.5rem;
    line-height: 2.5rem;
    font-weight: 700;
  }

  ul {
    margin-top: 3.2rem;
  }

  ul li {
    display: flex;
    flex-direction: row;
    align-items: center;
    gap: 2.4rem;
    margin-bottom: 0.8rem;
  }

  @media (max-width: 1080px) {
    margin-top: 12rem;
    margin-bottom: 12rem;
    flex-direction: column;
    .features {
      width: 100%;
    }

    .inBox {
      display: flex;
      flex-direction: row;
      gap: 16rem;
      align-items: flex-start;
    }

    ul {
      margin-top: 0;
    }
  }

  @media (max-width: 480px) {
    gap: 8rem;
    margin-top: 8rem;
    margin-bottom: 8rem;

    .inBox {
      flex-direction: column;
      gap: 2.4rem;
    }
  }
`;

export default StyledFeatures;
