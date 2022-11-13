import React from "react";
import { Button } from "@material-ui/core";
import CheckIcon from "@material-ui/icons/CheckOutlined";
import AddIcon from "@material-ui/icons/AddOutlined";
import { FollowButtonView } from "./FollowButtonView";

export const FollowButton: React.FC = () => {
  const [isFollowed, setIsFollowed] = React.useState(false);

  const handleToggleFollowing = () => setIsFollowed(!isFollowed);

  return (
    <FollowButtonView isFollowed={isFollowed} onClick={handleToggleFollowing} />
  );
};
