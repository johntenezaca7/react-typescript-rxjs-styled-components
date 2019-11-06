import React from "react";
import { Router, RouteComponentProps } from "@reach/router";

import { Grid } from "../../components/Grid";
import { Home } from "../../components/Home";
import { Messages } from "../../components/Messages";

const RouterPage = (props: { pageComponent: JSX.Element } & RouteComponentProps) => props.pageComponent;

const MainRouter = (props: any): JSX.Element => (
  <Router>
    <RouterPage path="/" pageComponent={<Home />} />
    <RouterPage path="/users" pageComponent={<Grid dataUrl="https://jsonplaceholder.typicode.com/users" />} />
    <RouterPage path="users/:userId" pageComponent={<div> Hello</div>} />
    <RouterPage path="/messages" pageComponent={<Messages />} />
  </Router>
);
export { MainRouter };