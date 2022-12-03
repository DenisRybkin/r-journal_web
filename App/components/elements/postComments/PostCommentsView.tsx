import React from "react";
import { Divider, Paper, Tab, Tabs, Typography } from "@material-ui/core";
import { AddCommentForm } from "../../modules/forms/addCommentForm/AddCommentForm";
import { Comment } from "../comment/Comment";
import { IPostCommentsView } from "./postComments.interface";
import { declension, useDeclension } from "../../../hooks/useDeclension";
import { useTranslation } from "react-i18next";

export const PostCommentsView = (props: IPostCommentsView) => {
  const { t } = useTranslation();

  const declensionComments = useDeclension(props.comments.length, [
    "ui:title.comment",
    "ui:title.comments_0d",
    "ui:title.comments_1d",
  ]);

  return (
    <Paper elevation={0} className="mt-20 pa-15">
      <div className="container">
        <Typography variant="h6" className="mb-10">
          {`${props.comments.length} ${t(declensionComments).toLowerCase()}`}
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
        <div className="mb-10" />
        {props.comments?.map((item) => (
          <Comment comment={item} key={item.id} />
        ))}
      </div>
    </Paper>
  );
};
