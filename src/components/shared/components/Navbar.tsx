import React from "react";
import styled from "styled-components";
import { Link } from "@reach/router";

const Nav = styled.nav`
  background-color: #ffb630e8;
  ul {
    display: flex;
    flex-direction: column;
    justify-content: center;
  }

  a {
    display: block;
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
    padding-left: 0;

    &:hover {
      text-decoration: underline;
    }
  }
`;

const NavBar = (props:any): JSX.Element => (
  <Nav>
    <ul>
      <Link to="/">
        <li >Home</li>
      </Link>
      <Link to="users">
        <li >Users</li>
      </Link>
      <Link to="photos">
        <li >Photos</li>
      </Link>
      <Link to="messages">
        <li >Messages</li>
      </Link>
    </ul>
  </Nav>
);

export { NavBar };