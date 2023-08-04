import styled from "styled-components";

const StyledCartPopupElement = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;

  .title {
    color: var(--color-black);
    font-weight: 700;
  }

  .price {
    font-weight: 700;
    font-size: 1.4rem;
  }

  .image {
    background-color: var(--color-grey);
    border-radius: 0.8rem;

    & img {
      width: 6.8rem;
      border-radius: 0.8rem;
    }
  }

  .details {
    display: flex;
    flex-direction: row;
    gap: 1.6rem;
    align-items: center;
  }
`;

export default StyledCartPopupElement;
