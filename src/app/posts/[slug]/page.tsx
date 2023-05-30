import PostContent from "@/components/PostContent";
import { getPosts, getPostData } from "@/service/posts";
import { Metadata } from "next";
import Image from "next/image";

type Props = {
  params: { slug: string };
};

export function generateMetadata({ params: { slug } }: Props): Metadata {
  return {
    title: `Post - ${slug}`,
  };
}

export default async function Postpage({ params: { slug } }: Props) {
  const post = await getPostData(slug);
  const { title, path } = post;

  return (
    <article className="rounded-2xl overflow-hidden bg-gray-100 shadow-lg m-4">
      <Image
        className="w-full h-1/5 max-h-[500px]"
        src={`/images/posts/${path}.png`}
        alt={title}
        width={760}
        height={400}
      />
      <PostContent post={post} />
    </article>
  );
}

export async function generateStaticParams() {
  const posts = await getPosts();

  return posts.map((post) => ({
    slug: post.path,
  }));
}
