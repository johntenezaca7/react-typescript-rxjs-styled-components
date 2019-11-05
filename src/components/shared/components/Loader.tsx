import React from "react";
import styled from "styled-components";

const LoaderWrapper = styled.div`
  
  display: inline-block;
  position: relative;
  width: 64px;
  height: 64px;
  
  div {
    display: inline-block;
    position: absolute;
    left: 6px;
    width: 13px;
    background: orange;
    animation: lds-facebook 1.2s cubic-bezier(0, 0.5, 0.5, 1) infinite;
  }
  
  div:nth-child(1) {
    left: 6px;
    animation-delay: -0.24s;
  }

  div:nth-child(2) {
    left: 26px;
    animation-delay: -0.12s;
  }

  div:nth-child(3) {
    left: 45px;
    animation-delay: 0;
  }

  @keyframes lds-facebook {
    0% {
      top: 6px;
      height: 51px;
    }
    50%, 100% {
      top: 19px;
      height: 26px;
    }
  }
`
const Loader = () => (
  <LoaderWrapper>
    <div></div>
    <div></div>
    <div></div>
  </LoaderWrapper>
)

export { Loader };