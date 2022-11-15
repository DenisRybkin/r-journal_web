import React from "react";
import { Divider, Paper, Tab, Tabs, Typography } from "@material-ui/core";
import { AddCommentForm } from "../../forms/addCommentForm/AddCommentForm";
import { Comment } from "../comment/Comment";
import { IPostCommentsView } from "./postComments.interface";
import { declension, useDeclension } from "../../../hooks/useDeclension";
import { useTranslation } from "react-i18next";

export const PostCommentsView = (props: IPostCommentsView) => {
  const { t } = useTranslation();

  const declensionComments = useDeclension(47, [
    "ui:title.comment",
    "ui:title.comments_0d",
    "ui:title.comments_1d",
  ]);

  return (
    <Paper elevation={0} className="mt-40 p-30">
      <div className="container">
        <Typography variant="h6" className="mb-20">
          {`47 ${t(declensionComments).toLowerCase()}`}
        </Typography>
        <Tabs
          className="mt-20"
          value={props.activeTab}
          onChange={(_, newValue) => props.onChangeActiveTab(newValue)}
          indicatorColor="primary"
          textColor="primary"
        >
          <Tab label={t("ui:label.by_popular")} />
          <Tab label={t("ui:label.by_order")} />
        </Tabs>
        <Divider />
        <AddCommentForm />
        <div className="mb-20" />
        {props.comments?.map((item) => (
          <Comment comment={item} key={item.id} />
        ))}
      </div>
    </Paper>
  );
};
