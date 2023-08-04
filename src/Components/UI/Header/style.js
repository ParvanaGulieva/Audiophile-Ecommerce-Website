import styled from "styled-components";

const StyledHeader = styled.header`
  padding-top: 0;
  padding-bottom: 10rem;
  h2 {
    margin-top: 10rem;
    color: var(--color-white);
    text-align: center;
  }

  @media (max-width: 1080px) {
    padding-bottom: 8rem;

    h2 {
      margin-top: 6rem;
    }
  }

  @media (max-width: 480px) {
    padding-bottom: 4rem;
  }
`;

export default StyledHeader;
