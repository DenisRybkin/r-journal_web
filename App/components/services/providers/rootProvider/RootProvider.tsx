import React from "react";
import { ThemeProvider } from "../themeProvider/ThemeProvider";
import { IRootProvider } from "./rootProvider.interface";
import { StoreProvider } from "../storeProvider/StoreProvider";
import { LocaleProvider } from "../localeProvider/LocaleProvider";

export const RootProvider: React.FC<IRootProvider> = (props) => {
  return (
    <StoreProvider pageProps={props.pageProps}>
      <LocaleProvider>
        <ThemeProvider>{props.children}</ThemeProvider>
      </LocaleProvider>
    </StoreProvider>
  );
};
