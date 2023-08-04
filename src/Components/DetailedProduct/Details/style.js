import styled from "styled-components";

const StyledDetails = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  gap: 12.5rem;
  margin-top: 6rem;
  margin-bottom: 6rem;

  max-width: 114rem;
  margin-right: auto;
  margin-left: auto;

  .image {
    & img {
      width: 100%;
      border-radius: 0.8rem;
    }
  }

  .details {
    width: 100%;
    display: flex;
    flex-direction: column;
    gap: 1.6rem;
  }

  .shadow {
    width: 26.2rem;
    height: 5.6rem;
    border-radius: 50%;
    opacity: 0.1521126925945282;
    background: var(--color-black);
    filter: blur(21.746253967285156px);
    margin-top: -5%;
  }

  .text {
    margin-top: 1.6rem;
    margin-bottom: 1.6rem;
  }

  .btn-container {
    display: flex;
    flex-direction: row;
    align-items: center;
    gap: 1.6rem;
    margin-top: 3rem;
  }

  h6 {
    font-size: 1.8rem;
  }

  @media (max-width: 1080px) {
    margin-top: 2.4rem;
    gap: 6rem;

    .image {
      width: 100%;
      & img {
        width: 100%;
      }
    }
    .shadow {
      width: 16.5rem;
      height: 3.5rem;
    }
  }

  @media (max-width: 720px) {
    flex-direction: column;
    gap: 3.2rem;

    .image {
      height: 32rem;
      width: 100%;
      background-color: var(--color-grey);
      display: flex;
      flex-direction: column;
      align-items: center;
      justify-content: center;
      border-radius: 0.8rem;

      & img {
        height: 30rem;
      }
    }
  }

  .quantity-container {
    text-align: center;
    display: flex;
    align-items: center;

    .value-button {
      display: flex;
      align-items: center;
      justify-content: center;
      width: 4rem;
      height: 4.8rem;
      text-align: center;
      background-color: var(--color-grey);
      color: #bcbcbc;
      text-align: center;
      font-size: 1.6rem;
      font-style: normal;
      font-weight: 700;
      line-height: normal;
      letter-spacing: 1px;
      -webkit-touch-callout: none;
      -webkit-user-select: none;
      -khtml-user-select: none;
      -moz-user-select: none;
      -ms-user-select: none;
      user-select: none;

      &:hover {
        cursor: pointer;
        color: var(--color-orange);
      }
    }

    #decrease {
      margin-right: -4px;
    }

    #increase {
      margin-left: -4px;
    }

    #input-wrap {
      margin: 0px;
      padding: 0px;
    }

    input#number {
      border: none;
      background-color: var(--color-grey);
      width: 4rem;
      height: 4.8rem;
      color: var(--color-black);
      text-align: center;
      font-size: 1.3rem;
      font-family: Manrope;
      font-weight: 700;
      line-height: normal;
      letter-spacing: 1px;
      outline: none;
    }

    input[type="number"]::-webkit-inner-spin-button,
    input[type="number"]::-webkit-outer-spin-button {
      -webkit-appearance: none;
      margin: 0;
    }
  }
`;

export default StyledDetails;
