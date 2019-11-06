import React, { Component } from "react";
import { Subscription } from "rxjs";
import { tap, delay } from "rxjs/operators"; 

import { Section, Loader, GridContainer } from "./shared";
import { loaderService } from "../services";

interface Messages {
  subscription: Subscription;
}

interface MessagesState {
  loading: boolean
}

class Messages extends Component<any, MessagesState> {
  constructor(props:any) {
    super(props);
    this.state = {
      loading: true
    }
  }

  componentDidMount() {
    this.subscription = loaderService().pipe(
      delay(300),
      tap(() => this.setState({ loading: false }))
    ).subscribe();
  }

  render() {
    const { loading } = this.state;
    return(
      <Section flexDirection="column">
        <GridContainer flexDirection="row" overFlowY="none" paddingTop="2rem">
          { loading ? <Loader/> : <div>Messages Loaded!</div>}
        </GridContainer>
      </Section>
    );
  };
};



export { Messages };