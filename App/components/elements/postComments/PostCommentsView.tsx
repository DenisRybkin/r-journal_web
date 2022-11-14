import React from "react";
import { Divider, Paper, Tab, Tabs, Typography } from "@material-ui/core";
import { AddCommentForm } from "../../forms/addCommentForm/AddCommentForm";
import { Comment } from "../comment/Comment";
import { IPostCommentsView } from "./postComments.interface";

export const PostCommentsView = (props: IPostCommentsView) => {
  return (
    <Paper elevation={0} className="mt-40 p-30">
      <div className="container">
        <Typography variant="h6" className="mb-20">
          42 комментария
        </Typography>
        <Tabs
          className="mt-20"
          value={props.activeTab}
          onChange={(_, newValue) => props.onChangeActiveTab(newValue)}
          indicatorColor="primary"
          textColor="primary"
        >
          <Tab label="Популярные" />
          <Tab label="По порядку" />
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
