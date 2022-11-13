import { SideCommentDto } from "../../../../../api/models/SideCommentDto";

export interface ICommentItem {
  comment: SideCommentDto;
}

export interface ICommentItemView extends ICommentItem {}
