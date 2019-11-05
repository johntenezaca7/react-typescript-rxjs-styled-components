import React from "react";

import { Container, Loader, UserFlexContainer } from "./shared";

const Home = (props:any):JSX.Element => (
  <Container>
    <h1>Home</h1>
    <UserFlexContainer>
      <Loader/>
    </UserFlexContainer>
  </Container>
)

export { Home };