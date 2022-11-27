import React from "react";
import { IContextMenuView } from "./contextMenu.interface";
import { Menu, MenuItem } from "@material-ui/core";
import { ListItemIcon } from "@mui/material";

export const ContextMenuView: React.FC<IContextMenuView> = (props) => {
  return (
    <div onContextMenu={props.onClick}>
      {props.children}
      <Menu
        open={!!props.contextMenu}
        onClose={props.onClose}
        anchorReference="anchorPosition"
        anchorPosition={
          props.contextMenu
            ? { top: props.contextMenu.mouseY, left: props.contextMenu.mouseX }
            : undefined
        }
      >
        {props.menuItems.map((item) => (
          <MenuItem onClick={item.action} key={item.id}>
            {item.icon && (
              <ListItemIcon style={{ minWidth: 40 }}>{item.icon}</ListItemIcon>
            )}
            {item.text}
          </MenuItem>
        ))}
      </Menu>
    </div>
  );
};
