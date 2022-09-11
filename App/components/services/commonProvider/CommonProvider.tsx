import React from "react";
import { CommonProviderView } from "./CommonProviderView";

export const CommonProvider: React.FC = (props) => {
  return <CommonProviderView>{props.children}</CommonProviderView>;
};
