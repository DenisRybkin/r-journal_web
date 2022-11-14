import React from "react";
import clsx from "clsx";
import styles from "./sideComments.module.scss";
import ArrowRightIcon from "@material-ui/icons/NavigateNextOutlined";
import data from "../../../utils/data";
import { CommentItem } from "./components/commentItem/CommentItem";
import { ISideCommentsView } from "./sideComments.interface";

export const SideCommentsView = (props: ISideCommentsView) => {
  return (
    <div className={clsx(styles.root, !props.isVisible && styles.rotated)}>
      <h3 onClick={props.onChangeVisible}>
        Комментарии <ArrowRightIcon />
      </h3>
      {props.isVisible &&
        data.comments.popular.map((obj) => (
          <CommentItem key={obj.id} {...obj} />
        ))}
    </div>
  );
};
