import React from "react";
import { Router, RouteComponentProps } from "@reach/router";

import { Users } from "../../components/Users";
import { Home } from "../../components/Home";
import { Messages } from "../../components/Messages";

const RouterPage = (props: { pageComponent: JSX.Element } & RouteComponentProps) => props.pageComponent;

const MainRouter = (props: any): JSX.Element => (
  <Router>
    <RouterPage path="/" pageComponent={<Home />} />
    <RouterPage path="users" pageComponent={<Users url="https://jsonplaceholder.typicode.com/users" />} />
    <RouterPage path="messages" pageComponent={<Messages />} />
  </Router>
);
export { MainRouter };