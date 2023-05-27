import { getPosts } from "@/service/posts";
import PostsWithClient from "@/components/PostsWithClient";

export default async function PostsPage() {
  const posts = await getPosts();

  return <PostsWithClient posts={posts} />;
}
