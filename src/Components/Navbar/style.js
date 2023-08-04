import styled from "styled-components";

const StyleNavbar = styled.nav`
  padding-top: 3.2rem;
  padding-bottom: 3.2rem;
  background-color: transparent;

  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;

  .linkContainer ul {
    display: flex;
    flex-direction: row;
    gap: 3.4rem;
  }

  .menu {
    display: none;
  }

  &.openMenu {
    background-color: var(--color-black);
  }

  .logo,
  .cart {
    cursor: pointer;
  }

  .activeLink {
    color: var(--color-orange);
  }

  .cart-container {
    position: relative;
  }

  .cartQuantity {
    cursor: pointer;
    background-color: var(--color-orange);
    display: flex;
    align-items: center;
    justify-content: center;
    height: 2rem;
    width: 2rem;
    color: var(--color-black);
    font-weight: 700;
    border-radius: 100%;

    position: absolute;
    right: -0.8rem;
    top: -1rem;
  }

  @media (max-width: 1080px) {
    gap: 4.2rem;
    .menu {
      display: block;
    }

    .logo {
      margin-right: auto;
    }

    .linkContainer {
      display: none;
    }
  }

  @media (max-width: 480px) {
    justify-content: space-between;
    .logo {
      margin-right: 0;
    }
  }
`;

export default StyleNavbar;
