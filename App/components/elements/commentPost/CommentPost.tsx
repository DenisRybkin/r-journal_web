import React from "react";
import {
  IconButton,
  Menu,
  MenuItem,
  Paper,
  Typography,
} from "@material-ui/core";
import MoreVertIcon from "@material-ui/icons/MoreVert";

import styles from "./commentPost.module.scss";
import { ICommentPost } from "./commentPost.interface";
import { CommentPostView } from "./CommentPostView";

export const CommentPost: React.FC<ICommentPost> = (props) => {
  const [anchorEl, setAnchorEl] = React.useState(null);

  const handleClick = (event) => {
    setAnchorEl(event.currentTarget);
  };

  const handleClose = () => {
    setAnchorEl(null);
  };

  const handleEdit = () => {
    handleClose();
  };

  const handleDelete = () => {
    handleClose();
  };

  return (
    <CommentPostView
      comment={props.comment}
      onClick={handleClick}
      anchorEl={anchorEl}
      onClose={handleClose}
      onDelete={handleEdit}
      onEdit={handleEdit}
    />
  );
};
