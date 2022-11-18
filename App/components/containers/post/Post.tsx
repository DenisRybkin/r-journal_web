import React from "react";
import { PostView } from "./PostView";

export const Post: React.FC = () => {
  const handleComment = () => {};

  const handleShare = () => {};

  const handleAddToFavorite = () => {};

  const handleRepost = () => {};

  return (
    <PostView
      onAddToFavorite={handleAddToFavorite}
      onRepost={handleRepost}
      onShare={handleRepost}
      onComment={handleComment}
    />
  );
};
