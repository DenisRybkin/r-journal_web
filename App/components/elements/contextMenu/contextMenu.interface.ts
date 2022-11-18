import {
  IContextMenuItem,
  IContextMenuPos,
} from "../types/contextMenu.interface";
import React from "react";

export interface IContextMenu {
  menuItems: IContextMenuItem[];
}

export interface IContextMenuView extends IContextMenu {
  contextMenu: IContextMenuPos | null;
  onClick: (event: React.MouseEvent) => void;
  onClose: () => void;
}
