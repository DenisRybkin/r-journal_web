import React from "react";
import styles from "../../sideComments.module.scss";
import Link from "next/link";
import { ICommentItemView } from "./commentItem.interface";
import { UserInfo } from "../../../../elements/userInfo/UserInfo";

export const CommentItemView = (props: ICommentItemView) => {
  return (
    <div className={styles.commentItem}>
      <UserInfo
        avatarHeight={12}
        avatarWidth={12}
        fontSize={14}
        user={props.comment.user}
      />
      {/*<div className={styles.userInfo}>*/}
      {/*  <img src={props.comment.user.avatarUrl} alt="User Avatar" />*/}
      {/*  <Link href={`/profile/${props.comment.user.id}`}>*/}
      {/*    <a href="App/components/layouts/SideComments/CommentItem#">*/}
      {/*      <b>{props.comment.user.fullName}</b>*/}
      {/*    </a>*/}
      {/*  </Link>*/}
      {/*</div>*/}
      <p className={styles.text}>{props.comment.text}</p>
      <Link href={`/news${props.comment.post.id}`}>
        <a>
          <span className={styles.postTitle}>{props.comment.post.title}</span>
        </a>
      </Link>
    </div>
  );
};
