import styled from "styled-components";

const StyledInput = styled.div`
  display: flex;
  flex-direction: column;
  gap: 1rem;
  margin-bottom: 2.4rem;

  label {
    width: 100%;
  }

  input {
    padding: 1.8rem 2.4rem;
    border-radius: 0.8rem;
    border: 1.2px solid #cfcfcf;
    outline: none;
    font-family: "Manrope", sans-serif;
    background-color: transparent;
    caret-color: var(--color-orange);
    color: var(--color-black);
    font-size: 1.4rem;
    font-weight: 700;
    line-height: normal;
    letter-spacing: -0.25px;
    width: 100%;

    &:focus {
      border: 1px solid var(--color-orange);
    }
  }

  input::placeholder {
    color: rgba(0, 0, 0, 0.4);
    font-size: 1.4rem;
    font-weight: 700;
    line-height: normal;
    letter-spacing: -0.25px;
    font-family: "Manrope", sans-serif;
  }

  input:-webkit-autofill,
  input:-webkit-autofill:hover,
  input:-webkit-autofill:focus,
  input:-webkit-autofill:active {
    -webkit-box-shadow: 0 0 0 30px white inset !important;
  }
`;

export default StyledInput;
