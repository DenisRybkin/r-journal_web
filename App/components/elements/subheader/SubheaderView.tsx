import React from "react";
import styles from "./subheader.module.scss";
import { ISubheaderView } from "./subheader.interface";

export const SubheaderView = (props: ISubheaderView) => {
  return (
    <span
      style={{ marginBottom: props.noBottomOffset ? 0 : 8 }}
      className={styles.subheader + ` ${props.className}`}
    >
      {props.text}
    </span>
  );
};
