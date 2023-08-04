import styled from "styled-components";

const StyleRecommended = styled.div`
  margin-top: 18rem;
  margin-bottom: 18rem;
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  gap: 3rem;
  max-width: 114rem;
  margin-right: auto;
  margin-left: auto;

  .categoryCard {
    background-color: var(--color-grey);
    border-radius: 0.8rem;
    height: 20rem;
    padding-top: 11.6rem;
    display: flex;
    flex-direction: column;
    align-items: center;
    width: 100%;
    position: relative;

    & .product {
      display: flex;
      flex-direction: column;
      position: absolute;
      top: -40%;
      left: 50%;
      transform: translateX(-50%);
    }

    & .earphone {
      top: -30% !important;
    }

    & .image {
      z-index: 25;
    }

    & .shadow {
      width: 12.2rem;
      height: 1.8rem;
      border-radius: 50%;
      background: var(--color-black);
      filter: blur(21.746253967285156px);
      margin-top: -10%;
    }
  }

  .type3 {
    display: flex;
    flex-direction: row;
    align-items: center;
    justify-content: center;
    gap: 1.4rem;
  }

  @media (max-width: 1080px) {
    gap: 1rem;

    .categoryCard {
      & .shadow {
        width: 9.5rem;
        height: 1.4rem;
      }

      & .product {
        top: -30%;
      }

      & .earphone {
        top: -30% !important;
      }

      & .headphone {
        width: 10rem;
      }
    }
  }

  @media (max-width: 480px) {
    margin-top: 12rem;
    margin-bottom: 12rem;
    grid-template-columns: 1fr;
    gap: 8rem;

    .categoryCard {
      height: 16.5rem;
      padding-top: 9rem;

      & .product {
        top: -35%;
      }
    }
  }
`;

export default StyleRecommended;
