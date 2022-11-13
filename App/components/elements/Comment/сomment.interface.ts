import { EventHandler, MouseEvent, MouseEventHandler } from "react";
import { CommentDto } from "../../../api/models/CommentDto";

export interface IComment {
  comment: CommentDto;
}

export interface ICommentView extends IComment {
  anchorEl: null | Element | ((element: Element) => Element);
  onClickOpenMenuTrigger: (event: any) => void;
  onCloseMenu: () => void;
  isEditMode: boolean;
  onTurnOnIsEditMode: () => void;
  onOffIsEditMode: () => void;
  onDeleteComment: () => void;
}
