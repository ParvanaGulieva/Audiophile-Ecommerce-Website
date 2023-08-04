import styled from "styled-components";

const StyleProduct = styled.div`
  display: flex;
  flex-direction: ${(props) => (props.isReverse ? "row-reverse" : "row")};
  align-items: center;
  gap: 12.5rem;

  .image {
    width: 100%;
    background-color: var(--color-grey);
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    border-radius: 0.8rem;

    & img {
      height: 36rem;
      border-radius: 0.8rem;
    }
  }

  .details {
    width: 100%;
    display: flex;
    flex-direction: column;
    gap: 1.6rem;
  }

  @media (max-width: 1080px) {
    flex-direction: column;
    align-items: center;
    justify-content: center;
    gap: 5rem;

    .details {
      align-items: center;
      text-align: center;
    }

    .shadow {
      width: 16.5rem;
      height: 3.5rem;
    }
  }

  @media (max-width: 480px) {
  }
`;

export default StyleProduct;
