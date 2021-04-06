import React from "react";

import { Navbar, NavLink } from "./styles";

const Nav = () => {
  return (
    <Navbar>
      <h1>
        <NavLink id="logo" to="/">
          Capture
        </NavLink>
      </h1>
      <ul>
        <li>
          <NavLink to="/">1. About Us</NavLink>
        </li>
        <li>
          <NavLink to="/work">2. Our Work</NavLink>
        </li>
        <li>
          <NavLink to="/contact">3. Contact Us</NavLink>
        </li>
      </ul>
    </Navbar>
  );
};

export default Nav;
