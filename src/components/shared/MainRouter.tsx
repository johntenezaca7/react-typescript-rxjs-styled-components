import React, { Component } from "react";
import { Router, RouteComponentProps } from "@reach/router";
import { Users } from "../Users";

const RouterPage = ( props: { pageComponent: JSX.Element } & RouteComponentProps) => props.pageComponent;

let Home = () => <div>Home</div>
let Dash = () => <div>Dash</div>

class MainRouter extends Component<any, any> {
  render() {
    return (
      <Router>
        <RouterPage path="home" pageComponent={<Home />}/>
        <RouterPage path="users" pageComponent={<Users url="https://jsonplaceholder.typicode.com/users"/>}/>
        <RouterPage path="blinker" pageComponent={<Dash />} />
      </Router>
    );
  }
}

export { MainRouter };