import styled from "styled-components";

const StyledRadioButton = styled.div`
  border-radius: 0.8rem;
  border: 1px solid #cfcfcf;
  padding: 1.8rem 1.6rem;

  input[type="radio"] {
    display: none;
  }
  label {
    font-size: 1.4rem;
    position: relative;
    display: flex;
    align-items: center;
    cursor: pointer;

    &::before {
      content: "";
      height: 2rem;
      width: 2rem;
      border: 1.5px solid #cfcfcf;
      margin-right: 1.6rem;
      border-radius: 100%;
      cursor: pointer;
    }
  }

  input[type="radio"]:checked + label:before {
    background-color: var(--color-orange);
    border: 4px solid #fff;
    outline: 1px solid #cfcfcf;
  }
`;

export default StyledRadioButton;
