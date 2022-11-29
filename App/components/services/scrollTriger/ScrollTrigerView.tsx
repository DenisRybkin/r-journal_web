import React from "react";
import { IScrollTrigerView } from "./scrollTriger.interface";
import { LinearProgress } from "@mui/material";
import clsx from "clsx";

export const ScrollTrigerView = (props: IScrollTrigerView) => {
  const styles = clsx("full-width", {
    ["d-none"]: props.hidden,
    ["mt-5"]: props.mt == true,
  });

  return (
    <div
      className={styles}
      ref={props.triggerRef as any}
      style={
        typeof props.mt == "number" ? { marginTop: props.mt * 2 } : undefined
      }
    >
      <LinearProgress onClick={props.onClick} />
    </div>
  );
};
