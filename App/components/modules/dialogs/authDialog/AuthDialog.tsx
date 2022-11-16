import React from "react";
import { IAuthDialog } from "./authDialog.interface";
import { AuthDialogView } from "./AuthDialogView";

export const AuthDialog = (props: IAuthDialog) => {
  return <AuthDialogView {...props} />;
};
