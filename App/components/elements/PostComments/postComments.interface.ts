import { CommentDto } from "../../../api/models/CommentDto";

export interface IPostComments {}

export interface IPostCommentsView {
  activeTab: number;
  onChangeActiveTab: (value: number) => void;
  comments: CommentDto[];
}
