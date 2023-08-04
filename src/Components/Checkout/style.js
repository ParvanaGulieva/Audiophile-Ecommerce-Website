import styled from "styled-components";

const StyledCheckout = styled.div`
  padding: 5.4rem 4.8rem;
  background-color: var(--color-white);
  border-radius: 0.8rem;

  p {
    margin-bottom: 1.6rem;
  }

  h3 {
    margin-bottom: 4rem;
  }

  .billing {
    margin-bottom: 3rem;
  }

  .shipping {
    margin-bottom: 5.4rem;
  }

  .inputs {
    display: grid;
    grid-template-columns: 1fr 1fr;
    gap: 0 1.6rem;
  }

  .radio-container {
    display: flex;
    flex-direction: column;
    gap: 1.6rem;
  }

  .shipping-selection {
    display: grid;
    grid-template-columns: 1fr 1fr;
    gap: 0 1.6rem;
  }

  .e-money {
    margin-top: 3rem;
    display: flex;
    gap: 1.6rem;
    width: 100%;

    & > * {
      width: 100%;
    }
  }

  .delivery {
    display: flex;
    align-items: center;
    gap: 3.2rem;
    margin-top: 3rem;
  }

  .phone {
    display: flex;
    flex-direction: column;
    gap: 1rem;
    width: 100%;
    margin-bottom: 2.4rem;
  }

  label {
    width: 100%;
  }

  @media (min-width: 480px) {
    .inputs .address {
      grid-column: 1/3;
    }
  }

  @media (max-width: 1080px) {
    padding: 3rem;
  }

  @media (max-width: 480px) {
    padding: 2.4rem;

    h3 {
      margin-bottom: 3.2rem;
    }

    .inputs {
      grid-template-columns: 1fr;
      gap: 0;
    }

    .shipping-selection {
      grid-template-columns: 1fr;
    }
    .radio-container {
      margin-top: 1.6rem;
    }

    .e-money {
      flex-direction: column;
      gap: 0;
    }
  }
`;

export default StyledCheckout;
