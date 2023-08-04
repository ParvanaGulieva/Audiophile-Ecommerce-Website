import styled from "styled-components";

const StyleFooter = styled.footer`
  display: flex;
  flex-direction: column;
  gap: 3.6rem;
  /* position: relative; */

  &::before {
    content: "";
    display: block;
    background-color: var(--color-orange);
    width: 10rem;
    height: 0.4rem;
    position: relative;
    top: -7.5rem;
    left: 0;
  }

  .linkContainer {
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    align-items: center;

    & ul {
      display: flex;
      flex-direction: row;

      & li:not(:last-of-type) {
        margin-right: 3.4rem;
      }
    }
  }

  .footerGrid {
    display: grid;
    grid-template-columns: 50% 1fr;
    grid-template-rows: min-content;
    gap: 5.6rem;
  }

  .desc {
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    align-items: flex-end;
  }

  .socialMedia {
    display: flex;
    align-items: center;
    flex-direction: row;
    gap: 1.6rem;
    align-items: flex-end;
    justify-content: end;
  }

  @media (max-width: 1080px) {
    align-items: flex-start;
    gap: 3.2rem;

    &::before {
      top: -6rem;
    }

    .linkContainer {
      flex-direction: column;
      align-items: flex-start;
      gap: 3.2rem;

      & ul li:not(:last-of-type) {
        margin-right: 2.4rem;
      }
    }

    .desc {
      grid-column: 1/3;
    }

    .socialMedia {
      grid-row: 2/3;
      grid-column: 2/3;
    }

    .copyright {
      grid-row: 2/3;
    }
  }

  @media (max-width: 480px) {
    text-align: center;
    align-items: center;
    gap: 4.8rem;

    &::before {
      top: -5.2rem;
    }

    .linkContainer {
      gap: 4.8rem;
      align-items: center;

      & ul {
        flex-direction: column;
        & li:not(:last-of-type) {
          margin-right: 0;
          margin-bottom: 1.6rem;
        }
      }
    }

    .footerGrid {
      display: flex;
      flex-direction: column;
      gap: 4.8rem;
      align-items: center;
    }
  }
`;

export default StyleFooter;
