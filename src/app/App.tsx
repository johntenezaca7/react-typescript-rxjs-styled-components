import React from "react";
import { MainGrid, MainRouter } from "./Config";
import { NavBar, Section } from "../components/shared";

const App = (props:any):JSX.Element => (
  <MainGrid>
    <NavBar/>
    <Section flexDirection="column">
      <MainRouter />
    </Section>
  </MainGrid>
);

export default App;
