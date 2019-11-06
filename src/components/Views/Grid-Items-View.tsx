import React from "react";
import { ItemView } from "./Item-View";

import { GridItemContainer} from "../shared";

const GridItemsView = (props: any) => {
  return props.items.map((item: any): JSX.Element => (
    <GridItemContainer flexDirection="column" key={item.name}>
      <ItemView item={item}/>
    </GridItemContainer>
  ));
};

export { GridItemsView };