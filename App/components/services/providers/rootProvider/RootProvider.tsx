import React from "react";
import { ThemeProvider } from "../themeProvider/ThemeProvider";
import { IRootProvider } from "./rootProvider.interface";
import { StoreProvider } from "../storeProvider/StoreProvider";
import { LocaleProvider } from "../localeProvider/LocaleProvider";
import { NotifierProvider } from "../notifierProvider/NotifierProvider";

export const RootProvider: React.FC<IRootProvider> = (props) => {
  return (
    <StoreProvider pageProps={props.pageProps}>
      <LocaleProvider>
        <ThemeProvider>
          <NotifierProvider> {props.children}</NotifierProvider>
        </ThemeProvider>
      </LocaleProvider>
    </StoreProvider>
  );
};
