import React from "react";
import { UserInfoView } from "./UserInfoView";
import { IUserInfo } from "./userInfo.interface";

export const UserInfo = (props: IUserInfo) => {
  return <UserInfoView {...props} />;
};
