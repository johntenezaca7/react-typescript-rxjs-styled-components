import React from "react";

import { Container, UserFlexContainer, Loader  } from "./shared";

const Messages = (props:any):JSX.Element => (
  <Container>
    <h1>Messages</h1>
    <UserFlexContainer>
      <Loader/>
    </UserFlexContainer>
  </Container>
)

export { Messages };