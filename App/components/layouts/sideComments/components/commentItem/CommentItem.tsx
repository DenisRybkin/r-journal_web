import React from "react";

import { ICommentItem } from "./commentItem.interface";
import { CommentItemView } from "./CommentItemView";

export const CommentItem = (props: ICommentItem) => {
  return <CommentItemView {...props} />;
};
