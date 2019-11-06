import React from "react";
import { MainGrid, MainRouter } from "./Config";
import { NavBar, Section, ThemeWrapper } from "../components/shared";

const App = ():JSX.Element => (
  <MainGrid>
    <ThemeWrapper>
      <NavBar/>
      <Section flexDirection="column">
        <MainRouter />
      </Section> 
    </ThemeWrapper>
  </MainGrid>
);


export default App;
