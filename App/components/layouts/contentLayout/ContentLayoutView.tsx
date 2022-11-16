import React from "react";
import { IContentLayoutView } from "./contentLayout.interface";
import clsx from "clsx";
import { LeftMenu } from "../leftMenu/LeftMenu";
import { SideComments } from "../sideComments/SideComments";
import { Slide } from "@material-ui/core";

export const ContentLayoutView: React.FC<IContentLayoutView> = (props) => {
  return (
    <div className={clsx("wrapper", props.className)}>
      <Slide direction="right" in={!props.hideMenu} mountOnEnter unmountOnExit>
        <div className="leftSide">
          <LeftMenu />
        </div>
      </Slide>
      <div
        className={clsx("content", { "content--full": props.contentFullWidth })}
      >
        {props.children}
      </div>
      {!props.hideComments && (
        <div className="rightSide">
          <SideComments />
        </div>
      )}
    </div>
  );
};
