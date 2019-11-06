import React from "react";
import styled, { createGlobalStyle } from "styled-components";

const GlobalStyle = createGlobalStyle`
  @import url('https://fonts.googleapis.com/css?family=Cairo&display=swap');  
  body {
    margin: 0;
    padding: 0;
    font-family: 'Cairo', sans-serif;
    height: 100vh;
  }
`;

const MainDiv = styled.section`
  width: 100%;
  display: flex;
  flex-direction: row;
`;

const MainGrid = (props:any):JSX.Element => (
  <MainDiv>
    <GlobalStyle/>
    { props.children }
  </MainDiv>
);

export { MainGrid };