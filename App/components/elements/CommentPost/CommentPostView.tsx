import React from "react";
import {
  IconButton,
  Menu,
  MenuItem,
  Paper,
  Typography,
} from "@material-ui/core";
import styles from "./CommentPost.module.scss";
import MoreVertIcon from "@material-ui/icons/MoreVert";
import { ICommentPostView } from "./commentPost.interface";

export const CommentPostView = (props: ICommentPostView) => {
  return (
    <Paper elevation={0} className="p-20" classes={{ root: styles.paper }}>
      <Typography variant="h6" className={styles.title}>
        <a href="#">{props.comment.post.title}</a>
        <IconButton onClick={props.onClick}>
          <MoreVertIcon />
        </IconButton>
      </Typography>
      <Typography className="mt-10 mb-15">{props.comment.text}</Typography>

      <Menu
        id="simple-menu"
        anchorEl={props.anchorEl}
        elevation={3}
        keepMounted
        open={Boolean(props.anchorEl)}
        onClose={props.onClose}
      >
        <MenuItem onClick={props.onClose}>Удалить</MenuItem>
        <MenuItem onClick={props.onClose}>Редактировать</MenuItem>
      </Menu>
    </Paper>
  );
};
