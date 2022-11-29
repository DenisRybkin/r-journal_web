import React from "react";
import { IHead } from "./head.interface";
import { default as HeacCMP } from "next/head";
import { DefaultPageTitle } from "../misc/keys";

export const Head = (props: IHead) => {
  return (
    <HeacCMP>
      <title>{props.title ?? DefaultPageTitle}</title>
      <link rel="icon" href="/favicon.ico" />
      <link rel="preconnect" href="https://fonts.googleapis.com" />
      <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="" />
      <link
        href="https://fonts.googleapis.com/css2?family=Roboto:ital,wght@0,300;0,400;0,500;0,700;0,900;1,400;1,500;1,700;1,900&display=swap"
        rel="stylesheet"
      />
    </HeacCMP>
  );
};
