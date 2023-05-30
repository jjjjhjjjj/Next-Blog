import { Post } from "@/service/posts";
import PostItem from "./PostItem";

type Props = {
  posts: Post[];
};

export default function Posts({ posts }: Props) {
  return (
    <ul className="grid grid-cols-3 gap-5">
      {posts.map((post) => (
        <li key={post.path}>
          <PostItem post={post} />
        </li>
      ))}
    </ul>
  );
}
