import React from "react";
import { ISubscribersBlockView } from "./subscribersBlock.interface";
import { Avatar, Paper } from "@material-ui/core";
import { useTranslation } from "react-i18next";
import { firstToUppercase } from "../../../helpers/stringFunctions";
import { UserInfo } from "../userInfo/UserInfo";

export const SubscribersBlockView = (props: ISubscribersBlockView) => {
  const { t } = useTranslation();

  return (
    <Paper style={{ width: 300 }} className="pa-10 mb-10" elevation={0}>
      <div className="d-stack-row spacing-2">
        <b style={{ fontSize: 16, fontWeight: 500 }}>
          {firstToUppercase(t("common:text.subscribers"))}
        </b>
        <span style={{ color: "var(--color-text-weak)" }}>
          {props.users.length}
        </span>
      </div>
      <div className="d-stack-row spacing-4 mt-7 flex-wrap">
        {props.users.map((item) => (
          <div key={item.id} className="mb-3">
            <UserInfo key={item.id} user={item} isCirclar isAvatarOnly />
          </div>
        ))}
      </div>
    </Paper>
  );
};
