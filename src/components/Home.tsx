import React, { Component } from "react";
import { Subscription } from "rxjs";
import { tap, delay } from "rxjs/operators"; 

import { Section, Loader } from "./shared";
import { loaderService } from "../services";

interface Home {
  subscription: Subscription;
}

interface HomeState {
  loading: boolean
}

class Home extends Component<any, HomeState> {
  constructor(props:any) {
    super(props);
    this.state = {
      loading: true
    }
  }

  componentDidMount() {
    this.subscription = loaderService().pipe(
      delay(1000),
      tap(() => this.setState({ loading: false }))
    ).subscribe();
  }

  render() {
    const { loading } = this.state;
    return(
      <Section flexDirection="row">
        { loading ? <Loader/> : <h1>Hello John!</h1> }
      </Section>
    );
  };
};



export { Home };