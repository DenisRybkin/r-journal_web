import React from "react";
import { ISubheader } from "./subheader.interface";
import { SubheaderView } from "./SubheaderView";

export const Subheader = (props: ISubheader) => {
  return <SubheaderView {...props} />;
};
