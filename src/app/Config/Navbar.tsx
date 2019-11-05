import React from "react";
import styled from "styled-components";
import { Link } from "@reach/router";

const Nav = styled.nav`

  ul {
    display: flex;
    justify-content: center;
  }

  li {
    display: inline-block;
    list-style: none;
    height: 60px; 
    line-height: 60px; 
    padding: 0 40px; 
    font-size: 1.5rem;
    color: black;
    text-transform: capitalize;

    &:hover {
      text-decoration: underline;
    }
  }
`;

const NavBar = (props:any): JSX.Element => (
  <Nav>
    <ul>
      <Link to="/">
        <li >home</li>
      </Link>
      <Link to="users">
        <li >Users</li>
      </Link>
      <Link to="messages">
        <li >Messages</li>
      </Link>
    </ul>
  </Nav>
);

export { NavBar };