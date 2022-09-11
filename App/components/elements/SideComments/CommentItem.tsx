import React from 'react';
import styles from "./SideComments.module.scss";
import Link from "next/link"

interface ICommentItem {
    user: {
        id: number;
        fullName: string;
        avatarUrl?: string;
    };
    text: string;
    post: {
        id: number;
        title: string;
    };
}

 export const CommentItem: React.FC<ICommentItem> = (props) => {

    return (
        <div className={styles.commentItem}>
            <div className={styles.userInfo}>
                <img src={props.user.avatarUrl} alt="User Avatar" />
                <Link href={`/profile/${props.user.id}`}>
                    <a href="#">
                        <b>{props.user.fullName}</b>
                    </a>
                </Link>
            </div>
            <p className={styles.text}>{props.text}</p>
            <Link  href={`/news${props.post.id}`}>
                <a>
                    <span className={styles.postTitle}>{props.post.title}</span>
                </a>
            </Link>
        </div>
    );
};
