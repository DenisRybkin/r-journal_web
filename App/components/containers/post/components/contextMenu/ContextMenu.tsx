import React from "react";
import { ContextMenuView } from "./ContextMenuView";
import { IContextMenu } from "./contextMenu.interface";

export const ContextMenu = (props: IContextMenu) => {
  return <ContextMenuView {...props} />;
};
