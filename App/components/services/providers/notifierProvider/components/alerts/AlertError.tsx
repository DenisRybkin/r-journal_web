import React from "react";
import { IAlert } from "./alert.interface";
import { Alert } from "@mui/material";

export const AlertError = (props: IAlert) => {
  return (
    <Alert onClose={props.onClose} severity="error" sx={{ width: "100%" }}>
      {props.message}
    </Alert>
  );
};
