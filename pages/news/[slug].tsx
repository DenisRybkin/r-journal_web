import { ContentLayout } from "../../App/components/layouts/contentLayout/ContentLayout";
import { FullPost } from "../../App/components/elements/FullPost/FullPostView";
import React from "react";
import { PostComments } from "../../App/components/elements/PostComments/PostComments";

export default function Home() {
  return (
    <ContentLayout className="mb-50" contentFullWidth>
      <>
        <FullPost />
        <PostComments />
      </>
    </ContentLayout>
  );
}
