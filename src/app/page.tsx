import FeaturedPosts from "@/components/FeaturedPosts";
import LikePostsWithCarousel from "@/components/LikePostsWithCarousel";
import Profile from "@/components/Profile";
import { getPosts } from "@/service/posts";

export default async function Home() {
  const posts = await getPosts();

  return (
    <section>
      <Profile />
      <FeaturedPosts posts={posts.filter((post) => post.featured === true)} />
      <div className="mt-12">
        <LikePostsWithCarousel posts={posts} />
      </div>
    </section>
  );
}
