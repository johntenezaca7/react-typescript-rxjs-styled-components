import React, { Component }  from "react";
import { Subscription, of } from "rxjs";
import { tap, catchError, flatMap, delay } from "rxjs/operators";

import { getItemById } from "../services";
import { Section, Loader } from "./shared";
import { ItemView } from "../components/Views"

interface Item {
  $getItemById: Subscription
}

class Item extends Component <any, any> {
  constructor(props:any) {
    super(props);
    this.state = {
      loading: true,
      item: {}
    }
  }

  componentDidMount() {
    this.$getItemById = getItemById(this.props.userId)
      .pipe(
        flatMap((data:any) => of(...data)),
        delay(200),
        tap((data:any) =>  this.setState({ loading: false, item: data })),
        catchError(error => {
          return of(error)
        })
      )
      .subscribe();
  }

  componentWillUnmount() {
    this.$getItemById.unsubscribe();
  }

  render() {
    const { loading } = this.state;
    return (
      <Section flexDirection="row">
        { loading ? <Loader/> : <ItemView item={this.state.item}/>}
      </Section>
    )
  }
}

export { Item };