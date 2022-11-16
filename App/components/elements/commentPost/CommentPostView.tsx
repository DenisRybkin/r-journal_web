import React from "react";
import {
  IconButton,
  Menu,
  MenuItem,
  Paper,
  Typography,
} from "@material-ui/core";
import styles from "./commentPost.module.scss";
import MoreVertIcon from "@material-ui/icons/MoreVert";
import { ICommentPostView } from "./commentPost.interface";
import { useTranslation } from "react-i18next";

export const CommentPostView = (props: ICommentPostView) => {
  const { t } = useTranslation();

  return (
    <Paper elevation={0} className="p-20" classes={{ root: styles.paper }}>
      <Typography variant="h6" className={styles.title}>
        <a href="App/components/modules/elements/commentPost/CommentPostView#">
          {props.comment.post.title}
        </a>
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
        <MenuItem onClick={props.onClose}>{t("ui:button.delete")}</MenuItem>
        <MenuItem onClick={props.onClose}>{t("ui:button.edit")}</MenuItem>
      </Menu>
    </Paper>
  );
};
