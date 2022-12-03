import { ContentLayout } from "../../App/components/layouts/contentLayout/ContentLayout";
import { FullPost } from "../../App/components/containers/fullPost/FullPostView";
import React from "react";
import { PostComments } from "../../App/components/elements/postComments/PostComments";

export default function Home() {
  return (
    <ContentLayout className="mb-25" contentFullWidth>
      <>
        <FullPost />
        <PostComments />
      </>
    </ContentLayout>
  );
}
