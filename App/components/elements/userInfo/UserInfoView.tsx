import React from "react";
import styles from "./userInfo.module.scss";
import { IUserInfoView } from "./userInfo.interface";
import { Avatar } from "@material-ui/core";
import { getlettersName } from "./helpers";
import Link from "next/link";

export const UserInfoView = (props: IUserInfoView) => {
  return (
    <div className={styles.userInfo}>
      <Avatar
        alt="Avatar"
        variant={props.isCirclar ? "circular" : "rounded"}
        src={props.user.avatarUrl}
        classes={{
          img: `w-${props.avatarWidth ?? 20} h-${props.avatarHeight ?? 20}`,
          root: `w-${props.avatarWidth ?? 20} h-${props.avatarHeight ?? 20}`,
        }}
      >
        {props.user.avatarUrl ? undefined : getlettersName(props.user.fullName)}
      </Avatar>
      {!props.isAvatarOnly && (
        <>
          <Link href={`/profile/${props.user.id}`}>
            <a>
              <b
                style={
                  props.fontSize
                    ? { fontSize: `${props.fontSize}px` }
                    : undefined
                }
              >
                {props.user.fullName}
              </b>
            </a>
          </Link>
          {props.count && <span>+{props.count}</span>}
        </>
      )}
    </div>
  );
};
