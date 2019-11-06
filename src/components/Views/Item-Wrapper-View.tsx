import React from "react";
import { Link } from "@reach/router";

const ItemWrapperView = (props:any): JSX.Element => {  
  const { linkable, id } = props;
  return (
    <>
    { linkable ? 
      <>
        <Link to={`${id}`}>
          { props.children }
        </Link>
      </> : 
      <>
        { props.children }
      </>
    }
    </>
  )
};

export { ItemWrapperView };