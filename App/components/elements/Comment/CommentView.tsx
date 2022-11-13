import React from "react";
import styles from "./comment.module.scss";
import { IconButton, Menu, MenuItem, Typography } from "@material-ui/core";
import MoreIcon from "@material-ui/icons/MoreHorizOutlined";
import { ICommentView } from "./сomment.interface";

export const CommentView = (props: ICommentView) => {
  return (
    <div className={styles.comment}>
      <div className={styles.userInfo}>
        <img src={props.user.avatarUrl} alt="Avatar" />
        <b>{props.user.fullName}</b>
        <span>{props.createdAt}</span>
      </div>
      <Typography className={styles.text}>{props.text}</Typography>
      <span className={styles.replyBtn}>Ответить</span>
      <IconButton onClick={props.onClickOpenMenuTrigger}>
        <MoreIcon />
      </IconButton>
      <Menu
        anchorEl={props.anchorEl}
        elevation={2}
        open={Boolean(props.anchorEl)}
        onClose={props.onCloseMenu}
        keepMounted
      >
        <MenuItem onClick={props.onDeleteComment}>Удалить</MenuItem>
        <MenuItem onClick={props.onTurnOnIsEditMode}>Редактировать</MenuItem>
      </Menu>
    </div>
  );
};
