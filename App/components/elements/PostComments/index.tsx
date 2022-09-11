import React, { useState } from "react";
import { Divider, Paper, Tab, Tabs, Typography } from "@material-ui/core";
import { Comment } from "../Comment";
import { AddCommentForm } from "../../forms/AddCommentForm/inedx";
import data from "../../../utils/data";

export const PostComments: React.FC = () => {
  const [activeTab, setActiveTab] = useState<number>(0);

  const comments = data.comments[!activeTab ? "popular" : "new"];

  return (
    <Paper elevation={0} className="mt-40 p-30">
      <div className="container">
        <Typography variant="h6" className="mb-20">
          42 комментария
        </Typography>
        <Tabs
          className="mt-20"
          value={activeTab}
          onChange={(_, newValue) => setActiveTab(newValue)}
          indicatorColor="primary"
          textColor="primary"
        >
          <Tab label="Популярные" />
          <Tab label="По порядку" />
        </Tabs>
        <Divider />
        <AddCommentForm />
        <div className="mb-20" />
        {comments?.map((item) => (
          <Comment
            createdAt={item.createdAt}
            key={item.id}
            text={item.text}
            user={item.user}
          />
        ))}
      </div>
    </Paper>
  );
};
