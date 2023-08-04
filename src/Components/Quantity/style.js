import styled from "styled-components";

const StyledQuantity = styled.div`
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
`;

export default StyledQuantity;
