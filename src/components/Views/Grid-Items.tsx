import React from "react";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faUser } from '@fortawesome/free-solid-svg-icons'

import { Link } from "@reach/router";


import { GridItemContainer } from "../shared";

const GridItems = (props: any) => {
  return props.items.map((user: any): JSX.Element => {
    const { name, website, email, id } = user;

    return (
      <Link to={`${id}`}>
        <GridItemContainer flexDirection="column" key={name}>
          <h4>{ name }</h4>
          <FontAwesomeIcon icon={faUser} />
          <p>{ website }</p>
          <p>{ email } and { id }</p>

        </GridItemContainer>
      </Link>
    )
  });
};

export { GridItems };