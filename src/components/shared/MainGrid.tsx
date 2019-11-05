import React from "react";
import styled, { createGlobalStyle } from "styled-components";

const GlobalStyle = createGlobalStyle`
  @import url('https://fonts.googleapis.com/css?family=Cairo&display=swap');  
  body {
    margin: 0;
    padding: 0;
    font-family: 'Cairo', sans-serif;
  }
`;

const MainGrid = styled.section`
  width: 100%;
  display: flex;
  flex-direction: column;
`;

const MainDiv = (props:any):JSX.Element => (
  <MainGrid>
    <GlobalStyle/>
    { props.children }
  </MainGrid>
);

export { MainDiv };