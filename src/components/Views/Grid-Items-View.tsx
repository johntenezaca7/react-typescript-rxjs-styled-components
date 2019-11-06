import React from "react";
import { ItemWrapperView, ItemView } from "./index";

import { GridItemContainer} from "../shared";

const GridItemsView = (props: any) => {
  return props.items.map((item: any): JSX.Element => (
    <GridItemContainer flexDirection="row" key={item.name}>
      <ItemWrapperView linkable={true} id={item.id}>
        <ItemView item={item}/>
      </ItemWrapperView>
    </GridItemContainer>
  ));
};

export { GridItemsView };