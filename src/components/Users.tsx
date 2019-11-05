import React, { Component } from "react";
import { Subscription, of } from "rxjs";
import { tap, delay, catchError } from "rxjs/operators";

import { Container, UserFlexContainer, Loader } from "./shared";
import { userService } from "../services";

import { UserList } from "./UserList";

interface Users {
  subscription: Subscription;
}

interface UsersProps {
  url: string;
}

interface UsersState {
  listOfUsers: [];
  loading: boolean
}

class Users extends Component<UsersProps, UsersState> {

  constructor(props:UsersProps){
    super(props);
    this.state = {
      listOfUsers: [],
      loading: true,
    };
  }

  componentDidMount() {
    this.subscription = userService(this.props.url)
      .pipe(
        delay(1500),
        tap(() => this.setState({ loading: false })),
        tap((users:any) => this.setState({ listOfUsers: users })),
        catchError(error => {
          return of(error);
        })
      ).subscribe();
  }

  componentWillUnmount() {
    this.subscription.unsubscribe();
  }

  render():JSX.Element {
    const { listOfUsers, loading } = this.state;

    return (
      <Container>
        <h1>Users</h1>
        <UserFlexContainer>
          {
            loading ? <Loader/> : <UserList listOfUsers={listOfUsers}/>
          }
        </UserFlexContainer>
      </Container>
    )
  }
};

export { Users };