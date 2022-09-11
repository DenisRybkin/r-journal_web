import React from "react";
import { RootLayoutView } from "./RootLayoutView";

export const RootLayout: React.FC = (props) => {
  return <RootLayoutView>{props.children}</RootLayoutView>;
};
