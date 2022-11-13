import { EventHandler, MouseEvent, MouseEventHandler } from "react";

export interface IComment {
  user: {
    fullName: string;
    avatarUrl?: string;
  };
  text: string;
  createdAt: string;
}

export interface ICommentView {
  anchorEl: null | Element | ((element: Element) => Element);
  onClickOpenMenuTrigger: (event: any) => void;
  onCloseMenu: () => void;
  user: {
    fullName: string;
    avatarUrl?: string;
  };
  text: string;
  createdAt: string;
  isEditMode: boolean;
  onTurnOnIsEditMode: () => void;
  onOffIsEditMode: () => void;
  onDeleteComment: () => void;
}
