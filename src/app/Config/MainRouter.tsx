import React from "react";
import { Router } from "@reach/router";

import { Grid } from "../../components/Grid";
import { Home } from "../../components/Home";
import { Messages } from "../../components/Messages";
import { Item } from "../../components/Item";

const MainRouter = (props: any): JSX.Element => (
  <Router>
    <Home path="/" />
    <Grid dataUrl="https://jsonplaceholder.typicode.com/users" path="/users" />
    <Item path="users/:userId" />
    <Messages path="/messages" />
  </Router>
);
export { MainRouter };