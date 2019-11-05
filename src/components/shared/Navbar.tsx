import React from "react";
import styled from "styled-components";
import { Link } from "@reach/router";
import { AppConfig } from "../interfaces/index";


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

const NavBar = (props:AppConfig): JSX.Element => (
  <Nav>
    <ul>
      {props.links.map((link: string) => {
        return (
          <Link to={link} key={link}>
            <li >{link}</li>
          </Link>
        );
      })
      }
    </ul>
  </Nav>
);

export { NavBar };