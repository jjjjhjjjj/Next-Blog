import { getPosts } from "@/service/posts";
import PostsWithCategory from "@/components/PostsWithCategory";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Posts",
};

export default async function PostsPage() {
  const posts = await getPosts();
  const categories = [...new Set(posts.map((post) => post.category))];

  return <PostsWithCategory posts={posts} categories={categories} />;
}
