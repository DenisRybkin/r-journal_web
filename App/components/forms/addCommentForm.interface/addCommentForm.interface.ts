interface IAddCommentForm {}

export interface IAddCommentFormView {
  isFocused: boolean;
  comment: string;
  onFocus: () => void;
  onSendComment: () => void;
  onChangeComment: (value: string) => void;
}
