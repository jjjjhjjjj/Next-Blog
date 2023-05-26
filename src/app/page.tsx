import FeaturedPosts from "@/components/FeaturedPosts";
import Profile from "@/components/Profile";
import { getPosts } from "@/service/posts";

export default async function Home() {
  const posts = await getPosts();

  return (
    <section>
      <Profile />
      <FeaturedPosts posts={posts.filter((post) => post.featured === true)} />
    </section>
  );
}
