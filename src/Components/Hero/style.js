import styled from "styled-components";

const StyleHero = styled.section`
  background-image: url("/assets/home/desktop/image-hero.jpg");
  background-color: #191919;
  background-repeat: no-repeat;
  height: 100vh;
  background-size: 100vw auto;
  position: relative;

  .content {
    width: 40%;
    display: flex;
    flex-direction: column;
    gap: 2.4rem;
    /* transform: translateY(60%); */
    margin-top: 16%;
  }

  .overline {
    color: var(--color-white);
    opacity: 0.5;
  }

  h1 {
    color: var(--color-white);
  }
  .nav {
    position: absolute;
    top: 0;
    right: 16.5rem;
    left: 16.5rem;
  }

  @media (max-width: 1080px) {
    background-image: url("/assets/home/tablet/image-header.jpg");

    .content {
      align-items: center;
      text-align: center;
      position: relative;
      left: 50%;
      transform: translateX(-50%);
      top: 25%;
      width: 60%;
    }

    .nav {
      right: 4rem;
      left: 4rem;
    }
  }

  @media (max-width: 480px) {
    background-image: url("/assets/home/mobile/image-header.jpg");

    .nav {
      right: 2.4rem;
      left: 2.4rem;
    }

    .content {
      width: 100%;
    }
  }
`;

export default StyleHero;
