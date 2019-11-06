import React from "react";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faUser } from '@fortawesome/free-solid-svg-icons'

import { Link } from "@reach/router";

const ItemView = (props:any): JSX.Element => (
  <>
    <Link to={`${props.item.id}`}>
      <h4>{ props.item.name }</h4>
      <FontAwesomeIcon icon={faUser} />
      <p>{ props.item.website }</p>
      <p>{ props.item.email }</p>
    </Link>
  </>
);

export { ItemView };