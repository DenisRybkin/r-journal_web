import { IContextMenuItem } from "../types/contextMenu.interface";

export const mapActionMenuItems = (items: IContextMenuItem[], cb: () => void) =>
  items.map((item) => ({
    ...item,
    action: () => {
      item.action();
      cb();
    },
  }));
