import { Post } from "@/service/posts";
import PostItem from "./PostItem";

type Props = {
  posts: Post[];
};

export default function FeaturedPosts({ posts }: Props) {
  return (
    <>
      <h3 className="text-lg font-medium mb-2">Featured Posts</h3>
      <ul className="grid grid-cols-3 gap-5">
        {posts.map((post) => (
          <PostItem key={post.path} post={post} />
        ))}
      </ul>
    </>
  );
}
