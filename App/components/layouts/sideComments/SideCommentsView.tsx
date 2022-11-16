import React from "react";
import clsx from "clsx";
import styles from "./sideComments.module.scss";
import ArrowRightIcon from "@material-ui/icons/NavigateNextOutlined";
import data from "../../../utils/data";
import { CommentItem } from "./components/commentItem/CommentItem";
import { ISideCommentsView } from "./sideComments.interface";
import { SideCommentDto } from "../../../api/models/SideCommentDto";
import { useTranslation } from "react-i18next";

export const SideCommentsView = (props: ISideCommentsView) => {
  const { t } = useTranslation();

  return (
    <div className={clsx(styles.root, !props.isVisible && styles.rotated)}>
      <h3 onClick={props.onChangeVisible}>
        {t("ui:title.comments")} <ArrowRightIcon />
      </h3>
      {props.isVisible &&
        (data.comments.popular as unknown as SideCommentDto[]).map(
          (comment) => <CommentItem comment={comment} key={comment.id} />
        )}
    </div>
  );
};
