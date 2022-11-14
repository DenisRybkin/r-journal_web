import React from "react";
import { resources as enResources } from "../../../../locales/en";
import { resources as ruResources } from "../../../../locales/ru";
import i18next from "i18next";
import LanguageDetector from "i18next-browser-languagedetector";
import { initReactI18next } from "react-i18next";

export const resources = {
  en: enResources,
  ru: ruResources,
};

export const LocaleProvider: React.FC = (props) => {
  i18next
    .use(LanguageDetector)
    .use(initReactI18next)
    .init({
      interpolation: {
        escapeValue: false,
      },
      supportedLngs: ["en", "ru"],
      debug: false,
      cleanCode: true,
      lowerCaseLng: true,
      nonExplicitSupportedLngs: true,
      //preload: true,
      resources,
    });

  return <>{props.children}</>;
};
