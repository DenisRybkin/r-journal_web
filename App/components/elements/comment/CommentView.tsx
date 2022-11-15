import React from "react";
import styles from "./comment.module.scss";
import { IconButton, Menu, MenuItem, Typography } from "@material-ui/core";
import MoreIcon from "@material-ui/icons/MoreHorizOutlined";
import { ICommentView } from "./сomment.interface";
import { useTranslation } from "react-i18next";

export const CommentView = (props: ICommentView) => {
  const { t } = useTranslation();

  return (
    <div className={styles.comment}>
      <div className={styles.userInfo}>
        <img src={props.comment.user.avatarUrl} alt="Avatar" />
        <b>{props.comment.user.fullName}</b>
        <span>{props.comment.createdAt}</span>
      </div>
      <Typography className={styles.text}>{props.comment.text}</Typography>
      <span className={styles.replyBtn}>{t("ui:text_button.reply")}</span>
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
        <MenuItem onClick={props.onDeleteComment}>
          {t("ui:button.delete")}
        </MenuItem>
        <MenuItem onClick={props.onTurnOnIsEditMode}>
          {t("ui:button.edit")}
        </MenuItem>
      </Menu>
    </div>
  );
};
