import React from "react";
import { Link, withRouter } from "react-router-dom";
import styled from "styled-components/macro";

const AppHeader = styled.header`
  color: #fff;
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 50px;
  display: flex;
  align-items: center;
  padding: 0 30px;
  background: rgba(20, 20, 20, 0.8);
  z-index: 10;
  box-shadow: 0 1px 5px 2px rgba(0, 0, 0, 0.8);
`;

const List = styled.ul`
  display: flex;
  width: 20%;
  justify-content: space-around;
`;

const Item = styled.li`
  width: 100%;
  text-align: center;
  padding: 20px 0;

  margin: 0 5px;
  border-bottom: 5px solid
    ${({ current }) => (current ? "#3498db" : "transparent")};
`;

const StyledLink = styled(Link)``;

const Header = ({ location: { pathname } }) => {
  return (
    <AppHeader>
      <List>
        <Item current={pathname === "/"}>
          <StyledLink to="/">Movies</StyledLink>
        </Item>
        <Item current={pathname === "/tv"}>
          <StyledLink to="/TV">TV</StyledLink>
        </Item>
        <Item current={pathname === "/search"}>
          <StyledLink to="/Search">Search</StyledLink>
        </Item>
      </List>
    </AppHeader>
  );
};

export default withRouter(Header);
