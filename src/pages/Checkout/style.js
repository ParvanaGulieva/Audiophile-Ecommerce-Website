import styled from "styled-components";

const StyledCheckout = styled.form`
  .content {
    background-color: var(--color-grey);
    padding: 8rem 16.5rem;
    margin: 0 -16.5rem;
  }

  .link {
    margin: 0;
  }

  .checkout {
    display: grid;
    grid-template-columns: 60% 1fr;
    gap: 3rem;
    margin-top: 4rem;
    max-width: 114rem;
    margin-right: auto;
    margin-left: auto;
  }

  @media (max-width: 1080px) {
    .content {
      padding: 4.8rem 4rem 8rem;
      margin: 0 -4rem;
    }

    .checkout {
      grid-template-columns: 1fr;
      margin-top: 2.4rem;
    }
  }

  @media (max-width: 480px) {
    .content {
      padding: 1.6rem 2.4rem 8rem;
      margin: 0 -2.4rem;
    }
  }
`;

export default StyledCheckout;
