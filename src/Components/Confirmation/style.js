import styled from "styled-components";

const StyledConfirmation = styled.div`
  background-color: rgba(0, 0, 0, 0.4);
  /* padding: 10rem 16.5rem; */
  display: flex;
  justify-content: center;
  align-items: center;
  height: 100vh;
  width: 100vw;
  position: fixed;

  top: 0;
  left: 0;

  .content {
    padding: 4.8rem;
    border-radius: 0.8rem;
    display: flex;
    flex-direction: column;
    gap: 2.4rem;
    align-items: flex-start;
    background-color: var(--color-white);
    /* max-width: 54rem; */

    & img,
    & p {
      margin-bottom: 0.8rem;
    }

    & button {
      margin-top: 2rem;
    }
  }

  .order {
    width: 100%;
    border-radius: 0.8rem;
    background-color: var(--color-grey);
    display: grid;
    grid-template-columns: 55% 1fr;
    overflow: hidden;
  }

  .total {
    color: var(--color-white);
    background-color: var(--color-black);
    padding: 4.2rem 2.4rem;
    display: flex;
    flex-direction: column;
    justify-content: flex-end;

    & p {
      opacity: 0.7;
    }

    & h6 {
      color: var(--color-white);
    }
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
    margin-bottom: 0 !important;
  }

  .quantity,
  .price {
    font-weight: 700;
    font-size: 1.4rem;
    margin-bottom: 0 !important;
  }

  .items {
    padding: 2.4rem;
    display: flex;
    flex-direction: column;
    gap: 1.6rem;
  }

  .showMore,
  .showLess {
    color: #000;
    opacity: 0.5;
    font-size: 12px;
    font-weight: 700;
    line-height: normal;
    letter-spacing: -0.214px;
    text-align: center;
    margin-bottom: 0 !important;
    cursor: pointer;
    transition: all 300ms;

    &:hover {
      color: var(--color-orange);
      opacity: 1;
    }
  }

  .seperator {
    height: 1.5px;
    background-color: #000;
    opacity: 0.08;
    margin: 1.2rem 0;
  }

  button,
  a {
    width: 100%;
  }

  @media (max-width: 1080px) {
    .content {
      margin: auto 4rem;
    }
  }

  @media (max-width: 480px) {
    .content {
      margin: auto 2.4rem;
      padding: 3.2rem;
      gap: 1.6rem;
      width: 100%;

      & button {
        margin-top: 0.8rem;
      }
    }

    .order {
      grid-template-columns: 1fr;
    }
  }
`;

export default StyledConfirmation;
