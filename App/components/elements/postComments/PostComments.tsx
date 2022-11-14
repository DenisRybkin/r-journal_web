import React, { useState } from "react";
import data from "../../../utils/data";
import { PostCommentsView } from "./PostCommentsView";

export const PostComments: React.FC = () => {
  const [activeTab, setActiveTab] = useState<number>(0);

  const comments = data.comments[!activeTab ? "popular" : "new"];

  const handleChangeActiveTab = (value: number) => setActiveTab(value);

  return (
    <PostCommentsView
      comments={comments}
      activeTab={activeTab}
      onChangeActiveTab={handleChangeActiveTab}
    />
  );
};
