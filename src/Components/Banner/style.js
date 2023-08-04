import styled from "styled-components";

const StyledBanner = styled.div`
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  grid-template-rows: repeat(3, min-content);
  gap: 4.8rem 3rem;
  max-width: 114rem;
  margin-right: auto;
  margin-left: auto;

  .content {
    display: flex;
    flex-direction: row;
    justify-content: center;
    gap: 8rem;
    margin: 9.6rem 16rem -2rem;
  }

  .content-text {
    margin-top: 4rem;
    display: flex;
    flex-direction: column;
    gap: 2.4rem;
  }

  .ZX9-speaker {
    background-color: var(--color-orange);
    border-radius: 0.8rem;
    height: 56rem;
    overflow: hidden;
    grid-column: 1/3;
    background-repeat: no-repeat;
  }

  .speaker {
    width: 40rem;
    /* margin-left: 8rem; */
  }

  .ZX7-speaker {
    background-image: url("/assets/home/desktop/image-speaker-zx7.jpg");
    height: 32rem;
    border-radius: 0.8rem;
    background-repeat: no-repeat;
    background-size: cover;
    grid-column: 1/3;
    padding: 10rem 9.5rem;
  }

  .image {
    height: 32rem;
    border-radius: 0.8rem;
    overflow: hidden;
    grid-column: 1/2;

    & img {
      width: 100%;
      height: 100%;
      object-fit: cover;
    }
  }

  .YX1-earphone {
    height: 32rem;
    padding: 10rem 9.5rem;
    background-color: var(--color-grey);
    border-radius: 0.8rem;
    grid-column: 2/3;
  }

  @media (max-width: 1080px) {
    gap: 3.2rem 1.6rem;

    .content {
      flex-direction: column;
      align-items: center;
      gap: 6.4rem;
      margin: 5rem 17rem 6.4rem;
    }

    .content-text {
      align-items: center;
      text-align: center;
    }

    .ZX9-speaker {
      height: 72rem;
    }

    .ZX7-speaker {
      background-image: url("/assets/home/tablet/image-speaker-zx7.jpg");

      padding: 10rem 6rem;
    }

    .YX1-earphone {
      padding: 10rem 4.5rem;
    }

    .speaker {
      margin-left: 0;
      width: 20rem;
    }
  }

  @media (max-width: 480px) {
    display: flex;
    flex-direction: column;
    gap: 2.4rem;

    .ZX7-speaker {
      background-image: url("/assets/home/mobile/image-speaker-zx7.jpg");

      padding: 10rem 2.4rem;
    }

    .ZX9-speaker {
      height: 60rem;
    }

    .YX1-earphone {
      padding: 4rem 2.4rem;
      height: 20rem;
    }

    .image {
      height: 20rem;
    }

    .content {
      gap: 3.2rem;
      margin: 5.5rem 2.4rem;
    }

    .speaker {
      width: 17rem;
    }
  }
`;

export default StyledBanner;
