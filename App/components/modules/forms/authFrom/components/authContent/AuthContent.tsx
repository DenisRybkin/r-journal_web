import React from "react";
import { AuthContentView } from "./AuthContentView";
import { IAuthContent } from "./authContent.interface";

export const AuthContent = (props: IAuthContent) => {
  return <AuthContentView onOpenLoginForm={props.onOpenLoginForm} />;
};
