import React, { useState } from "react";
import { IAddCommentFormView } from "./addCommentForm.interface";
import { AddCommentFormView } from "./AddCommentFormView";

export const AddCommentForm = (props: IAddCommentFormView) => {
  const [isFocused, setIsFocused] = useState<boolean>(false);
  const [comment, setComment] = useState("");

  const handleFocus = () => setIsFocused(true);

  const handleChangeComment = (value: string) => setComment(value);

  const handleSendComment = async () => {
    setIsFocused(false);
    setComment("");
  };

  return (
    <AddCommentFormView
      comment={comment}
      onFocus={handleFocus}
      isFocused={isFocused}
      onChangeComment={handleChangeComment}
      onSendComment={handleSendComment}
    />
  );
};
