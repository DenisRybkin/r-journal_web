import React, { useState } from "react";
import { ContextMenuView } from "./ContextMenuView";
import { IContextMenu } from "./contextMenu.interface";
import { IContextMenuPos } from "../types/contextMenu.interface";
import { mapActionMenuItems } from "./helpers";

export const ContextMenu: React.FC<IContextMenu> = (props) => {
  const [contextMenu, setContextMenu] = useState<IContextMenuPos | null>(null);

  const handleClick = (event: React.MouseEvent) => {
    event.preventDefault();
    setContextMenu(
      !contextMenu
        ? { mouseX: event.clientX + 2, mouseY: event.clientY - 6 }
        : null
    );
  };

  const handleClose = () => setContextMenu(null);

  return (
    <ContextMenuView
      onClick={handleClick}
      onClose={handleClose}
      contextMenu={contextMenu}
      menuItems={mapActionMenuItems(props.menuItems, handleClose)}
      {...props}
    />
  );
};
