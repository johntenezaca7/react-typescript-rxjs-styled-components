import React, { Component } from "react";
import { Subscription, of } from "rxjs";
import { tap, delay, catchError } from "rxjs/operators";

import { Section , GridContainer , Loader } from "./shared";
import { getItems } from "../services";

import { GridItemsView } from "./Views";

interface Grid {
  $getItems: Subscription;
  $getItemsById: Subscription;
}

interface GridProps {
  dataUrl: string;
  path: string;
}

interface GridState {
  items: [];
  loading: boolean
}

class Grid extends Component<GridProps, GridState> {

  constructor(props:GridProps){
    super(props);
    this.state = { 
      items: [],
      loading: true,
    };

  }

  componentDidMount() {
    this.$getItems = getItems(this.props.dataUrl).pipe(
      delay(300),
      tap(() => this.setState({ loading: false })),
      tap((items:any) => this.setState({ items: items })),
      catchError(error => {
        return of(error);
      })
    ).subscribe();
  }

  componentWillUnmount() {
    this.$getItems.unsubscribe();
  }

  render():JSX.Element {
    const { items, loading } = this.state;

    return (
      <Section flexDirection="column">
        <GridContainer flexDirection="row" overFlowY={loading ? "none" : "scroll"} paddingTop="2rem">
          { loading ? <Loader/> : <GridItemsView items={items}/> }
        </GridContainer>
      </Section>
    )
  }
};

export { Grid };