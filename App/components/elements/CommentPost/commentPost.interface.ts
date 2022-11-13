export interface ICommentDto {
  user: {
    fullname: string;
  };
  text: string;
  post: {
    title: string;
  };
}
export interface ICommentPost {
  comment: ICommentDto;
}

export interface ICommentPostView extends ICommentPost {
  onClose: () => void;
  onClick: (event: any) => void;
  anchorEl: Element | ((element: Element) => Element) | null;
  onEdit: () => void;
  onDelete: () => void;
}
