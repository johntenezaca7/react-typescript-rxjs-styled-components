import React from "react";
import { MainDiv, NavBar, MainRouter } from "./components/shared";
import { AppConfig } from "./components/interfaces";

const App = (props:AppConfig):JSX.Element => (
  <MainDiv>
    <NavBar links={props.links}/>
    <MainRouter/>
  </MainDiv>
);

export default App;
