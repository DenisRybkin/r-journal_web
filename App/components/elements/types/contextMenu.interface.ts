export interface IContextMenuPos {
  mouseX: number;
  mouseY: number;
}

export interface IContextMenuItem {
  id: number;
  text: string;
  action: () => void;
  icon?: JSX.Element;
}
