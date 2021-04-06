import styled from "styled-components/macro";
import { Link } from "react-router-dom";
export const Navbar = styled.nav`
  min-height: 10vh;
  display: flex;

  align-items: center;
  justify-content: space-between;
  padding: 0 10rem;
  background: #282828;

  a {
    color: #fff;
    text-decoration: none;
  }

  ul {
    display: flex;
    list-style: none;
    height: 100%;

    li {
      padding: 0 2rem;
    }
  }
  #logo {
    font-size: 1.5rem;
    font-family: "Lobster", cursive;
    font-weight: 300;
  }
`;

export const NavLink = styled(Link)`
  display: inline-block;
  padding: 1.5rem;
`;
