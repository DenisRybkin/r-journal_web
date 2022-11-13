import React from "react";
import { PostActionsView } from "./PostActionsView";
import { IPostActions } from "./postActions.interface";

export const PostActions = (props: IPostActions) => {
  const handleComment = () => {};

  const handleRepost = () => {};

  const handleAddToFavorite = () => {};

  const handleShare = () => {};

  return (
    <PostActionsView
      onComment={handleComment}
      onAddToFavorite={handleAddToFavorite}
      onRepost={handleRepost}
      onShare={handleShare}
    />
  );
};
