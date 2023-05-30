import FeaturedPosts from "@/components/FeaturedPosts";
import LikePosts from "@/components/LikePosts";
import Profile from "@/components/Profile";
import { getPosts } from "@/service/posts";

export default async function Home() {
  const posts = await getPosts();

  return (
    <section>
      <Profile />
      <div className="mt-12">
        <FeaturedPosts posts={posts.filter((post) => post.featured === true)} />
      </div>

      <div className="mt-12">
        <LikePosts posts={posts} />
      </div>
    </section>
  );
}
