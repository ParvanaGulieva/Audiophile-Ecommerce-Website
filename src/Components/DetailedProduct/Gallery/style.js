import styled from "styled-components";

const StyledGallery = styled.div`
  margin-bottom: 16rem;
  display: grid;
  grid-template-columns: 40% 1fr;
  grid-template-rows: repeat(2, 28rem);
  gap: 3rem;
  max-width: 114rem;
  margin-right: auto;
  margin-left: auto;

  .img1,
  .img2,
  .img3 {
    border-radius: 0.8rem;
    overflow: hidden;
  }

  .img1 {
    grid-column: 1/2;
    grid-row: 1/2;
  }

  .img3 {
    grid-column: 2/3;
    grid-row: 1/3;
  }

  .img2 {
    grid-column: 1/2;
    grid-row: 2/3;
  }

  img {
    width: 100%;
    height: 100%;
    object-fit: cover;
  }

  @media (max-width: 1080px) {
    gap: 1.8rem;
  }

  @media (max-width: 480px) {
    display: flex;
    flex-direction: column;
    gap: 2rem;
  }
`;

export default StyledGallery;
