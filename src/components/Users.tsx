import React, { Component } from "react";
import { Subscription } from "rxjs";

import { Container, UserFlexContainer, UserBoxContainer } from "./shared";
import { userService } from "../services";

interface Users {
  subscription: Subscription;
}

interface UsersProps {
  url: string;
}

interface UsersState {
  listOfUsers: [];
}

class Users extends Component<UsersProps, UsersState> {

  constructor(props:UsersProps){
    super(props);
    this.state = {
      listOfUsers: []
    };
  }

  componentDidMount() {
    this.subscription = userService(this.props.url)
      .subscribe((users:any) => {
        this.setState({ listOfUsers: users });
      });
  }

  componentWillUnmount() {
    this.subscription.unsubscribe();
  }

  render() {
    const { listOfUsers } = this.state;

    return(
      <Container>
        <h1>Users</h1>
        <UserFlexContainer>
          { listOfUsers.map((user:any):JSX.Element => {
            return (
              <UserBoxContainer key={user.name}>
                {user.name}
              </UserBoxContainer>
            );
          })}
        </UserFlexContainer>
      </Container>
    )
  }
};

export { Users };