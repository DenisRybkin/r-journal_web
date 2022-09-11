import React from "react";
import styles from "./AuthForm.module.scss";
import ArrowBackIosIcon from "@material-ui/icons/ArrowBackIos";
import { IconButton } from "@material-ui/core";
import { IReturnText } from "./Auth.form.interface";
import clsx from "clsx";

export const ReturnText: React.FC<IReturnText> = (props) => {
  return (
    <div
      onClick={props.onOpenAuthContent}
      className={clsx("d-flex align-center", styles.backTitle)}
    >
      <IconButton className="mr-10">
        <ArrowBackIosIcon />
      </IconButton>
      <h2>К авторизации</h2>
    </div>
  );
};
