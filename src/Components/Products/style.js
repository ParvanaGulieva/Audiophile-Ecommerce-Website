import styled from "styled-components";

const StyledProducts = styled.div`
  margin-top: 16rem;
  margin-bottom: 24rem;

  display: flex;
  flex-direction: column;
  gap: 16rem;

  max-width: 114rem;
  margin-right: auto;
  margin-left: auto;

  @media (max-width: 1080px) {
    margin-top: 10rem;
  }

  @media (max-width: 480px) {
    margin-top: 6rem;
  }
`;

export default StyledProducts;
