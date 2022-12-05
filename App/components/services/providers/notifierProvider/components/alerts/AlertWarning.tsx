import React from "react";
import { IAlert } from "./alert.interface";
import { Alert } from "@mui/material";

export const AlertWarning = (props: IAlert) => {
  return (
    <Alert onClose={props.onClose} severity="warning" sx={{ width: "100%" }}>
      {props.message}
    </Alert>
  );
};
