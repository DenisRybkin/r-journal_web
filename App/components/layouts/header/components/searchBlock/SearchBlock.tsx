import React from "react";
import { SearchBlockView } from "./SearchBlockView";
import { ISearchBlock } from "./searchBlock.interface";

export const SearchBlock = (props: ISearchBlock) => {
  return <SearchBlockView {...props} />;
};
