import { Post } from "@/service/posts";
import PostItem from "./PostItem";

type Props = {
  posts: Post[];
};

export default function Posts({ posts }: Props) {
  return (
    <ul className="w-4/5 grid grid-cols-3 gap-5">
      {posts.map((post) => (
        <PostItem key={post.path} post={post} />
      ))}
    </ul>
  );
}
