import React, { CSSProperties } from "react";
import styles from "./postActions.module.scss";
import { IconButton } from "@material-ui/core";
import {
  ModeCommentOutlined as CommentsIcon,
  RepeatOutlined as RepostIcon,
  BookmarkBorderOutlined as FavoriteIcon,
  ShareOutlined as ShareIcon,
} from "@material-ui/icons";
import { IPostActionsView } from "./postActions.interface";

export const PostActionsView = (props: IPostActionsView) => {
  return (
    <ul className={styles.postActionList}>
      <li>
        <IconButton>
          <CommentsIcon />
        </IconButton>
      </li>
      <li>
        <IconButton>
          <RepostIcon />
        </IconButton>
      </li>
      <li>
        <IconButton>
          <FavoriteIcon />
        </IconButton>
      </li>
      <li>
        <IconButton>
          <ShareIcon />
        </IconButton>
      </li>
    </ul>
  );
};
