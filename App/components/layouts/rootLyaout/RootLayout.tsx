import React from "react";
import { RootLayoutView } from "./RootLayoutView";
import { NotifierProvider } from "../../services/providers/notifierProvider/NotifierProvider";

export const RootLayout: React.FC = (props) => {
  return <RootLayoutView>{props.children}</RootLayoutView>;
};
