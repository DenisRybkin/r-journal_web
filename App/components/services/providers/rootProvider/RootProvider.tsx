import React from "react";
import { ThemeProvider } from "../themeProvider/ThemeProvider";
import { IRootProvider } from "./rootProvider.interface";
import { StoreProvider } from "../storeProvider/StoreProvider";

export const RootProvider: React.FC<IRootProvider> = (props) => {
  return (
    <StoreProvider pageProps={props.pageProps}>
      <ThemeProvider>{props.children}</ThemeProvider>
    </StoreProvider>
  );
};
