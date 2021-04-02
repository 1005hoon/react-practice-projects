import React from "react";
import { Link } from "react-router-dom";
import { Navbar } from "./styles";

const Nav = () => {
  return (
    <Navbar>
      <h1>
        <Link id="logo" to="/">
          Capture
        </Link>
      </h1>
      <ul>
        <li>
          <Link to="/">1. About Us</Link>
        </li>
        <li>
          <Link to="/work">2. Our Work</Link>
        </li>
        <li>
          <Link to="/contact">3. Contact Us</Link>
        </li>
      </ul>
    </Navbar>
  );
};

export default Nav;
