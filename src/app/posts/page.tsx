import { getPosts } from "@/service/posts";
import PostsWithCategory from "@/components/PostsWithCategory";

export default async function PostsPage() {
  const posts = await getPosts();
  const categories = [...new Set(posts.map((post) => post.category))];

  return <PostsWithCategory posts={posts} categories={categories} />;
}
