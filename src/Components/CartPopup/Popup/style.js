import styled from "styled-components";

const StyledPopup = styled.div`
  background-color: rgba(0, 0, 0, 0.4);
  padding: 10rem 16.5rem;
  justify-content: end;
  display: flex;
  height: 100vh;
  width: 100vw;
  position: fixed;
  top: 0;
  left: 0;
  z-index: 100;

  .emptyContent {
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    text-align: center;
    gap: 1.6rem;

    & a {
      width: 100%;
    }

    & img {
      filter: brightness(0) saturate(100%) invert(0%) sepia(100%) saturate(0%)
        hue-rotate(235deg) brightness(107%) contrast(107%);
      width: 5rem;
    }

    & h6 {
      text-transform: none;
      font-size: 1.4rem;
      letter-spacing: normal;
    }
    & p {
      text-transform: none;
      font-size: 1.2rem;
      line-height: normal;
    }
  }

  .popup {
    background-color: var(--color-white);
    padding: 3.2rem;
    border-radius: 0.8rem;
    width: 40rem;
    height: min-content;

    display: flex;
    flex-direction: column;
    gap: 3.2rem;
  }

  .remove {
    color: var(--color-black);
    font-weight: 500 !important;
    line-height: 2.5rem !important;
    text-transform: none;
    opacity: 0.5;
    transition: all 300ms;

    &:hover {
      color: var(--color-orange);
      opacity: 1;
      text-decoration: underline;
    }
  }

  p {
    text-transform: uppercase;
  }

  .top,
  .total {
    display: flex;
    flex-direction: row;
    justify-content: space-between;
  }

  .inner-content {
    display: flex;
    flex-direction: column;
    gap: 2.4rem;
  }

  .quantity {
    & input#number,
    .value-button {
      width: 3.2rem;
      height: 3.2rem;
    }
  }

  @media (max-width: 1080px) {
    padding: 12rem 4rem;
  }

  @media (max-width: 480px) {
    padding: 12rem 2.4rem;
    width: 100%;
  }
`;

export default StyledPopup;
