import React from "react";
import { ThemeProvider } from "../themeProvider/ThemeProvider";
import { IRootProvider } from "./rootProvider.interface";
import { StoreProvider } from "../storeProvider/StoreProvider";
import i18next from "i18next";
import LanguageDetector from "i18next-browser-languagedetector";
import { initReactI18next } from "react-i18next";
import { resources as enResources } from "../../../../locales/en";
import { resources as ruResources } from "../../../../locales/ru";
import { LocaleProvider } from "../localeProvider/LocaleProvider";

export const resources = {
  en: enResources,
  ru: ruResources,
};

export const RootProvider: React.FC<IRootProvider> = (props) => {
  return (
    <StoreProvider pageProps={props.pageProps}>
      <LocaleProvider>
        <ThemeProvider>{props.children}</ThemeProvider>
      </LocaleProvider>
    </StoreProvider>
  );
};
