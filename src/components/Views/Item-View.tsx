import React from "react";

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faUser } from '@fortawesome/free-solid-svg-icons'

import { GridContainer } from "../shared";

const ItemView = (props:any):JSX.Element => {
  const { item } = props;
  return (
    <GridContainer flexDirection="column" overFlowY="hidden" paddingTop="0"> 
      <h4>{ item.name }</h4>
      <FontAwesomeIcon icon={faUser} />
      <p>{ item.website }</p>
      <p>{ item.email }</p>
  </GridContainer>
  )
};
export { ItemView };