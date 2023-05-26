import { Post } from "@/service/posts";
import Image from "next/image";
import Link from "next/link";

type Props = {
  post: Post;
};

export default function PostItem({ post }: Props) {
  const { title, description, date, category, path } = post;

  return (
    <li className="drop-shadow-2xl border hover:scale-105 transition duration-500 ease-in-out">
      <Link href={`/${path}`}>
        <Image
          src={`/images/posts/${path}.png`}
          width={700}
          height={400}
          alt={path}
        />
        <div className="flex flex-col items-center py-5 px-3">
          <span className="block self-end text-sm">{date}</span>
          <strong>{title}</strong>
          <p>{description}</p>
          <div className="mt-3 py-1 px-3 inline-block bg-teal-200 rounded-lg text-sm">
            {category}
          </div>
        </div>
      </Link>
    </li>
  );
}
