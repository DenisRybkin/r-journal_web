import { Post } from "../App/components/elements/Post/Post";
import { ContentLayout } from "../App/components/layouts/contentLayout/ContentLayout";

export default function Home() {
  return (
    <ContentLayout>
      <Post />
      <Post />
      <Post />
      <Post />
      <Post />
      <Post />
    </ContentLayout>
  );
}
