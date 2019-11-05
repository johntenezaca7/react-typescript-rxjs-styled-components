import React from "react";

import { UserBoxContainer } from "./shared";

const UserList = (props: any) => {
  return props.listOfUsers.map((user: any): JSX.Element => {
    return (
      <UserBoxContainer key={user.name}>
        {user.name}
      </UserBoxContainer>
    )
  });
};

export { UserList };