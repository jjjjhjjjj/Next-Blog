import { Post } from "@/service/posts";
import CarouselPosts from "./CarouselPosts";

type Props = {
  posts: Post[];
};

export default function LikePosts({ posts }: Props) {
  return (
    <>
      <h3 className="text-lg font-medium mb-2">May You Like Posts</h3>
      <CarouselPosts posts={posts} />
    </>
  );
}
