import React from "react";
import { Header } from "../header/Header";
import { Head } from "../../services/meta/head/Head";

export const RootLayoutView: React.FC = (props) => {
  return (
    <>
      <Head />
      <Header />
      {props.children}
    </>
  );
};
