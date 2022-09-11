import React, { useState } from "react";
import ArrowRightIcon from "@material-ui/icons/NavigateNextOutlined";
import styles from "./SideComments.module.scss";
import data from "../../../utils/data";
import { CommentItem } from "./CommentItem";
import clsx from "clsx";

export const SideComments = () => {
  const [isVisible, setIsVisible] = useState<boolean>(true);

  const handleToggleVisible = () => {
    setIsVisible(!isVisible);
  };

  return (
    <div className={clsx(styles.root, !isVisible && styles.rotated)}>
      <h3 onClick={handleToggleVisible}>
        Комментарии <ArrowRightIcon />
      </h3>
      {isVisible &&
        data.comments.popular.map((obj) => (
          <CommentItem key={obj.id} {...obj} />
        ))}
    </div>
  );
};
