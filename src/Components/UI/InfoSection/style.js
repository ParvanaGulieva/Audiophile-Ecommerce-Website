import styled from "styled-components";

const StyleInfoSection = styled.div`
  margin-top: 16rem;
  margin-bottom: 16rem;
  display: flex;
  align-items: center;
  justify-content: space-between;
  gap: 12.5rem;
  max-width: 114rem;
  margin-right: auto;
  margin-left: auto;

  & .text {
    display: flex;
    flex-direction: column;
    gap: 3.2rem;
    width: 50%;
  }

  & .image > picture > img {
    border-radius: 0.8rem;
    width: 100%;
  }

  @media (max-width: 1080px) {
    flex-direction: column-reverse;
    margin-top: 12rem;
    margin-bottom: 12rem;
    gap: 6.4rem;
    text-align: center;

    & .text {
      width: 100%;
    }
  }

  @media (max-width: 480px) {
    gap: 4rem;
  }
`;

export default StyleInfoSection;
