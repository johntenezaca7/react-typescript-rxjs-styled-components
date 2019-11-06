import React from "react";
import styled from "styled-components";
import { ThemeInterface } from "../Theme";

interface LoaderWrapper {
  theme: ThemeInterface
}

const LoadContainer = styled.div`
  margin-top: 15rem;

  h1 {
    margin: 0;
    font-size: 1.8rem;
  }
`;

const LoaderWrapper = styled.div`
  margin-bottom: 2rem;

  .lds-dual-ring {
    display: inline-block;
    width: 6rem;
    height: 6rem;
  }

  .lds-dual-ring:after {
    content: " ";
    display: block;
    width: 6rem;
    height: 6rem;
    margin: 1px;
    border-radius: 50%;
    border: .5rem solid ${props => props.theme.primaryLight};
    border-color: ${props => props.theme.primaryLight} transparent ${props => props.theme.primaryLight} transparent;
    animation: lds-dual-ring 1.2s linear infinite;
  }

  @keyframes lds-dual-ring {
    0% {
      transform: rotate(0deg);
    }
    100% {
      transform: rotate(360deg);
    }
  }
`
const Loader = () => (
  <LoadContainer>
    <LoaderWrapper>
      <div className="lds-dual-ring"></div>
    </LoaderWrapper>
    <h1>Loading...</h1>
  </LoadContainer>
)

export { Loader };