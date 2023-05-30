import { Post } from "@/service/posts";
import Posts from "./Posts";

type Props = {
  posts: Post[];
};

export default function FeaturedPosts({ posts }: Props) {
  return (
    <>
      <h3 className="text-lg font-medium mb-2">Featured Posts</h3>
      <Posts posts={posts} />
    </>
  );
}
