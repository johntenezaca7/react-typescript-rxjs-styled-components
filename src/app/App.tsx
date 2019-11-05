import React from "react";
import { MainGrid, NavBar, MainRouter } from "./Config";

const App = (props:any):JSX.Element => (
  <MainGrid>
    <NavBar links={props.links}/>
    <MainRouter/>
  </MainGrid>
);

export default App;
