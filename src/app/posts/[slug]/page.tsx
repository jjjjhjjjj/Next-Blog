import { getPosts, getPost } from "@/service/posts";
import { ReactMarkdown } from "react-markdown/lib/react-markdown";

type Props = {
  params: { slug: string };
};

export default function Postpage({ params: { slug } }: Props) {
  const post = getPost(slug);

  return (
    <div className="p-5">
      <ReactMarkdown>{post}</ReactMarkdown>
    </div>
  );
}

export async function generateStaticParams() {
  const posts = await getPosts();

  return posts.map((post) => ({
    slug: post.path,
  }));
}
