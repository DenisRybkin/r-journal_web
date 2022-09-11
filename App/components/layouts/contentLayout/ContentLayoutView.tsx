import React from "react";
import { IContentLayout, IContentLayoutView } from "./contentLayout.interface";
import clsx from "clsx";
import { LeftMenu } from "../leftMenu/LeftMenu";
import { SideComments } from "../../elements/SideComments";

export const ContentLayoutView: React.FC<IContentLayoutView> = (props) => {
  return (
    <div className={clsx("wrapper", props.className)}>
      {!props.hideMenu && (
        <div className="leftSide">
          <LeftMenu />
        </div>
      )}
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
