import React from "react";
import { ISubscribersBlockView } from "./subscribersBlock.interface";
import { Avatar, Paper } from "@material-ui/core";
import { useTranslation } from "react-i18next";
import { firstToUppercase } from "../../../helpers/stringFunctions";

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
      <div className="d-flex mt-7 flex-wrap">
        {props.users.map((item) => (
          <Avatar key={item.id} className="mr-4 mb-2" src={item.avatarUrl} />
        ))}
      </div>
    </Paper>
  );
};
