import React from "react";
import { IAlert } from "./alert.interface";
import { Alert } from "@mui/material";

export const AlertSuccess = (props: IAlert) => {
  return (
    <Alert onClose={props.onClose} severity="success" sx={{ width: "100%" }}>
      {props.message}
    </Alert>
  );
};
